import React, { useCallback, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { v4 as uuid } from 'uuid';
import { useDropzone } from 'react-dropzone';
import { useFormikContext } from 'formik';

import makeStyles from '@material-ui/styles/makeStyles';
import { colors } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import fileHelper, { getFileInfo } from '../../../helpers/fileHelper';
import { CONTENT_FOR, MEDIA_TYPE } from '../../../configs/contentConfig';
import { ToasterContext } from '../../../App';
import { isEmptyArray } from '../../../helpers/commonHelper';
import AddContentPreviewCtrl from '../components/AddContentPreviewCtrl';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0 4px',
    width: '100%'
  },
  dropZone: {
    border: '1px dashed #00000026',
    padding: theme.spacing(2, 1),
    outline: 'none',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: colors.grey[50],
      opacity: 0.5,
      cursor: 'pointer'
    }
  },
  dragActive: {
    backgroundColor: colors.grey[50],
    opacity: 0.5
  },
  info: {
    cursor: 'pointer'
  },
  list: {
    display: 'flex',
    margin: '15px 0'
  },
  previewItem: {},
  mediaPreview: {
    maxHeight: '150px',
    borderRadius: '5px',
    marginRight: '15px',
    border: theme.palette.border.default
  }
}));

const AddPostContentCtrl = ({ className, name }) => {
  const classes = useStyles();
  const { toaster } = useContext(ToasterContext);
  const { setFieldValue, values } = useFormikContext();
  // const error = touched[name] ? errors[name] : undefined;

  const { contentType } = values;
  const maxNoOfFile = fileHelper.getNoOfFileAllowed(contentType);
  const existingFiles = isEmptyArray(values[name]) ? [] : values[name];

  const handleDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles.length === 0) return;

      if (acceptedFiles.length + existingFiles.length > maxNoOfFile) {
        toaster.error(`Maximum number of file accepted : ${maxNoOfFile}`);
        return;
      }

      const contents = [];
      for (let index = 0; index < acceptedFiles.length; index += 1) {
        const file = acceptedFiles[index];
        getFileInfo(file, CONTENT_FOR.FEED, (data) => {
          // if (data.size > data.maxSize) {
          //   toaster.error(
          //     `Max file size should not greater than ${bytesToSize(
          //       data.maxSize
          //     )}`
          //   );
          //   return;
          // }

          contents.push(data);
          if (index + 1 === acceptedFiles.length) {
            const newContents = isEmptyArray(existingFiles)
              ? contents
              : [...existingFiles, ...contents];
            setFieldValue(name, newContents);
          }
        });
      }
    },
    [isEmptyArray(existingFiles) ? 0 : existingFiles.length, maxNoOfFile]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    disabled:
      contentType !== MEDIA_TYPE.IMG && contentType !== MEDIA_TYPE.VIDEO,
    accept: fileHelper.getAcceptFiles(contentType),
    maxSize: fileHelper.getMaxFileSize(contentType),
    onDrop: handleDrop
  });

  const removeFile = (file) => {
    const index = values[name].indexOf(file);
    values[name].splice(index, 1);
    setFieldValue(name, values[name]);
  };

  const ContentPreview = useMemo(
    () =>
      !isEmptyArray(existingFiles) && (
        <div className={classes.list}>
          {existingFiles.map((c) => (
            <AddContentPreviewCtrl
              content={c}
              removeAttachment={removeFile}
              key={uuid()}
            />
          ))}
        </div>
      ),
    [isEmptyArray(existingFiles) ? 0 : existingFiles.length]
  );

  return (
    <div className={clsx(classes.root, className)}>
      <div
        className={clsx({
          [classes.dropZone]: true,
          [classes.dragActive]: isDragActive
        })}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...getRootProps()}
      >
        <input
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...getInputProps()}
        />
        <div>
          <Typography
            className={classes.info}
            color="textSecondary"
            variant="subtitle2"
          >
            Drop files here or click to browse thorough your machine
          </Typography>
        </div>
      </div>
      {ContentPreview}
    </div>
  );
};

AddPostContentCtrl.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired
  // onChange: PropTypes.func.isRequired
};

AddPostContentCtrl.defaultProps = {
  className: ''
};

export default AddPostContentCtrl;
