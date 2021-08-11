/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { Grid, Typography } from '@material-ui/core';
import { APP_ICONS, POST_TYPE } from '../../../configs/appConfig';
import { appDialogStyles } from './postDetailHelper';

const PostTypeModal = ({ isOpen, onConfirm, onClose }) => {
  const classes = appDialogStyles();
  return (
    <Dialog open={isOpen} onClose={onClose} disableBackdropClick>
      <DialogTitle>
        New Post
        <IconButton
          size="small"
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Typography variant="h5">Add New Post</Typography>
        <Typography className="mt1">
          please select what post you want to add, you can add up to 5 media
          files (images and 45 second video) or 5 minutes audio record with 1
          cover image you can also add descriptions text up to 500 words
        </Typography>
        <Grid container spacing={2} className={classes.btnContainer}>
          <Grid item sm={6} xs={12}>
            <Button
              className={classes.btnItem}
              onClick={() => {
                onConfirm(POST_TYPE.MEDIA);
              }}
            >
              <div>
                <img className={classes.icon} src={APP_ICONS.GALLERY} alt="" />
              </div>
              <div className={classes.btnDescription}>
                <Typography variant="h5">Post</Typography>
                <Typography>
                  Up to 5 images or video + Description text (500 words)
                </Typography>
              </div>
            </Button>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Button
              className={classes.btnItem}
              onClick={() => {
                onConfirm(POST_TYPE.MEDIA);
              }}
            >
              <div>
                <img
                  className={classes.icon}
                  src={APP_ICONS.RECORDING}
                  alt=""
                />
              </div>
              <div className={classes.btnDescription}>
                <Typography variant="h5">Audio Post</Typography>
                <Typography>
                  Up to 5 minutes record + cover photo and Description text (500
                  words)
                </Typography>
              </div>
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

PostTypeModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
};

export default PostTypeModal;
