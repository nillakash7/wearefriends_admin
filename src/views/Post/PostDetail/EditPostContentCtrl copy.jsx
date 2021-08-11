import React, { useCallback, useContext } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { v4 as uuid } from 'uuid';
import { useDropzone } from 'react-dropzone';
// import { useFormikContext } from 'formik';

import makeStyles from '@material-ui/styles/makeStyles';
import { colors } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import bytesToSize from '../../../helpers/bytesToSize';
import fileHelper, { getFileInfo } from '../../../helpers/fileHelper';
import { CONTENT_FOR, MEDIA_TYPE } from '../../../configs/contentConfig';
import AddContentPreviewCtrl from '../components/AddContentPreviewCtrl';
import { ToasterContext } from '../../../App';
import { isEmptyArray } from '../../../helpers/commonHelper';

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

const EditPostContentCtrl = ({
  className,
  postMediaType,
  contents,
  onChange
}) => {
  const classes = useStyles();
  const { toaster } = useContext(ToasterContext);

  // const { setFieldValue, values } = useFormikContext();

  // const values = {
  //   postMediaType: 2,
  //   contents: [
  //     {
  //       contentID: 230,
  //       mediaType: 2,
  //       thumbUrl:
  //         'https://s3.amazonaws.com/thumb.cdn.wearefriends.today/sm/feed_videos/1/ffdf210a-7bc3-4a8b-b81c-af4838938767.jpg?AWSAccessKeyId=AKIAYXQIR57QNRVHVXMR&Expires=1628342393&Signature=k9gvopzp5SoH3ijqNbOyU%2F%2FyXF4%3D',
  //       url: 'https://s3.amazonaws.com/cdn.wearefriends.today/feed_videos/1/ffdf210a-7bc3-4a8b-b81c-af4838938767.mp4?AWSAccessKeyId=AKIAYXQIR57QNRVHVXMR&Expires=1642847513&Signature=v5t5HSXhlzyFjC%2BCupe2ZotoxKM%3D',
  //       durationInSec: 12,
  //       sizeInByte: 28944020
  //     }
  //   ]
  // };
  // const { postMediaType } = values;
  const maxNoOfFile = fileHelper.getNoOfFileAllowed(postMediaType);

  const existingFiles = isEmptyArray(contents) ? [] : contents;
  const handleDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles.length === 0) return;

      if (acceptedFiles.length + existingFiles.length > maxNoOfFile) {
        toaster.error(`Maximum number of file accepted : ${maxNoOfFile}`);
        return;
      }

      const nContents = [];
      for (let index = 0; index < acceptedFiles.length; index += 1) {
        const file = acceptedFiles[index];
        getFileInfo(file, CONTENT_FOR.FEED, (data) => {
          if (data.size > data.maxSize) {
            toaster.error(
              `Max file size should not greater than ${bytesToSize(
                data.maxSize
              )}`
            );
            return;
          }

          nContents.push(data);
          if (index + 1 === acceptedFiles.length) {
            const newContents = isEmptyArray(existingFiles)
              ? nContents
              : [...existingFiles, ...nContents];
            onChange(newContents);
          }
        });
      }
    },
    [isEmptyArray(existingFiles) ? 0 : existingFiles.length, maxNoOfFile]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    disabled:
      postMediaType !== MEDIA_TYPE.IMG && postMediaType !== MEDIA_TYPE.VIDEO,
    accept: fileHelper.getAcceptFiles(postMediaType),
    maxSize: fileHelper.getMaxFileSize(postMediaType),
    onDrop: handleDrop
  });

  const removeFile = (file) => {
    const index = contents.indexOf(file);
    contents.splice(index, 1);
    onChange(contents);
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
      {!isEmptyArray(contents) && (
        <div className={classes.list}>
          {contents.map((c) => (
            <AddContentPreviewCtrl
              content={c}
              removeAttachment={removeFile}
              key={uuid()}
            />
          ))}
        </div>
      )}
    </div>
  );
};

EditPostContentCtrl.propTypes = {
  className: PropTypes.string,
  contents: PropTypes.arrayOf(PropTypes.any).isRequired,
  postMediaType: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

EditPostContentCtrl.defaultProps = {
  className: ''
};

export default EditPostContentCtrl;
