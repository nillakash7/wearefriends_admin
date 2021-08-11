import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { v4 as uuid } from 'uuid';
import { useDropzone } from 'react-dropzone';
import { useFormikContext } from 'formik';

import makeStyles from '@material-ui/styles/makeStyles';
import { colors } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import bytesToSize from '../../../helpers/bytesToSize';
import fileHelper, { getFileInfo } from '../../../helpers/fileHelper';
import { POST_CONTENT_TYPE } from '../../../configs/contentConfig';

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
  mediaPreview: {
    maxHeight: '150px',
    borderRadius: '5px',
    marginRight: '15px',
    border: theme.palette.border.default
  },
  previewItem: {},
  actions: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'flex-end',
    '& > * + *': {
      marginLeft: theme.spacing(2)
    }
  }
}));

const EditPostContentCtrl = ({ className, name }) => {
  const classes = useStyles();
  const {
    // setFieldTouched,
    setFieldValue,
    // errors,
    // touched,
    values
  } = useFormikContext();
  // const error = touched[name] ? errors[name] : undefined;

  const { contentType } = values;
  const maxNoOfFile = fileHelper.getNoOfFileAllowed(contentType);

  const handleDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles.length === 0) return;

      if (acceptedFiles.length + values[name].length > maxNoOfFile) {
        // eslint-disable-next-line no-alert
        alert(`Maximum number of file accepted : ${maxNoOfFile}`);
        return;
      }

      const contents = [];
      acceptedFiles.forEach((file, i) => {
        getFileInfo(file, (data) => {
          contents.push({
            ...data,
            type: contentType,
            fileFor: fileHelper.getPostFileFor(contentType)
          });
          if (i + 1 === acceptedFiles.length) {
            setFieldValue(name, [...values[name], ...contents]);
          }
        });
      });
    },
    [values[name].length, maxNoOfFile]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    disabled:
      contentType !== POST_CONTENT_TYPE.IMG &&
      contentType !== POST_CONTENT_TYPE.VIDEO,
    accept: fileHelper.getAcceptFiles(contentType),
    maxSize: fileHelper.getMaxFileSize(contentType),
    onDrop: handleDrop
  });

  const removeFile = (file) => {
    const index = values[name].indexOf(file);
    values[name].splice(index, 1);
    setFieldValue(name, values[name]);
  };

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
      {values[name].length > 0 && (
        <>
          <div className={classes.list}>
            {values[name].map((file) => (
              <div className={classes.previewItem} key={uuid()}>
                {contentType === POST_CONTENT_TYPE.IMG && (
                  <img
                    alt={file.name}
                    src={file.url}
                    className={classes.mediaPreview}
                  />
                )}
                {contentType === POST_CONTENT_TYPE.VIDEO && (
                  // eslint-disable-next-line jsx-a11y/media-has-caption
                  <video src={file.url} className={classes.mediaPreview} />
                )}

                {/* <track src="captions_en.vtt" kind="captions" srclang="en" label="english_captions"> */}
                <Typography variant="h5">
                  {bytesToSize(file.size || 0)}
                </Typography>
                <Button onClick={() => removeFile(file)} size="small">
                  <DeleteIcon />
                </Button>
              </div>
            ))}
          </div>
          {/* <div className={classes.actions}>
            <Button onClick={handleRemoveAll} size="small">
              Remove all
            </Button>
            <Button color="secondary" size="small" variant="contained">
              Upload files
            </Button>
          </div> */}
        </>
      )}
    </div>
  );
};

EditPostContentCtrl.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired
  // onChange: PropTypes.func.isRequired
};

EditPostContentCtrl.defaultProps = {
  className: ''
};

export default EditPostContentCtrl;
