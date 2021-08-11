import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { IconButton } from '@material-ui/core';

import makeStyles from '@material-ui/styles/makeStyles';
import AttachmentIcon from '../../../components/icons/AttachmentIcon';
import { getFileInfo } from '../../../helpers/fileHelper';
import bytesToSize from '../../../helpers/bytesToSize';
import { ToasterContext } from '../../../App';
import { isEmptyArray } from '../../../helpers/commonHelper';

const useStyles = makeStyles((theme) => ({
  root: {},
  button: {
    width: '36px',
    height: '36px',
    padding: '5px',
    fontSize: '20px',
    transition: 'all 0.45s',
    borderRadius: '50%',
    '&:hover': {
      '& svg': {
        fill: theme.palette.primary.main
      }
    }
  },
  fileInput: {
    position: 'absolute',
    width: '40px',
    opacity: '0'
  }
}));

const AttachmentCtrl = ({
  className,
  contentFor,
  noOfFileAllowed,
  fileKey,
  fileTypes,
  onSelect,
  disabled,
  clickHandler
}) => {
  const classes = useStyles();
  const { toaster } = useContext(ToasterContext);

  const onFileSelect = (evt) => {
    const { files } = evt.target;
    if (isEmptyArray(files)) return;

    if (files.length > noOfFileAllowed) {
      toaster.error(
        `You can select maximum ${noOfFileAllowed} file${
          noOfFileAllowed > 1 ? 's' : ''
        }`
      );
    }

    for (let index = 0; index < files.length; index += 1) {
      const file = files[index];

      const contents = [];
      getFileInfo(file, contentFor, (data) => {
        if (data.size > data.maxSize) {
          toaster.error(
            `Max file size should not greater than ${bytesToSize(data.maxSize)}`
          );
          return;
        }

        contents.push(data);
        if (index + 1 === files.length) {
          onSelect(contents);
        }
      });
    }
  };

  return (
    <IconButton
      className={clsx(classes.button, className)}
      disabled={disabled}
      onClick={clickHandler}
    >
      <AttachmentIcon />
      <input
        type="file"
        key={fileKey || ''}
        style={{ cursor: disabled ? '' : 'pointer' }} // TODO - cursor
        className={classes.fileInput}
        multiple={noOfFileAllowed > 1}
        accept={fileTypes}
        onChange={onFileSelect}
      />
    </IconButton>
  );
};

AttachmentCtrl.propTypes = {
  className: PropTypes.string,
  contentFor: PropTypes.number.isRequired,
  noOfFileAllowed: PropTypes.number.isRequired,
  fileKey: PropTypes.string.isRequired,
  fileTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired
};

AttachmentCtrl.defaultProps = {
  className: ''
};

export default AttachmentCtrl;
