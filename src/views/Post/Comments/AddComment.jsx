/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
// import * as yup from 'yup';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';

import { addCommentFormStyles } from './commentHelper';
import { CONTENT_FOR } from '../../../configs/contentConfig';
import fileHelper from '../../../helpers/fileHelper';
import SendCtrl from '../components/SendCtrl';
import AttachmentCtrl from '../components/AttachmentCtrl';
import EmojiCtrl from '../components/EmojiCtrl';
import AddContentPreviewCtrl from '../components/AddContentPreviewCtrl';

const getFileKey = () => Math.random().toString();
const initState = {
  fileKey: '',
  commentText: '',
  content: null
};
const AddComment = ({ onSubmit }) => {
  const classes = addCommentFormStyles();
  // const { toaster } = useContext(ToasterContext);

  const [state, setState] = useState(initState);

  const commentAddable = () => {
    return state.commentText || state.content;
  };

  // #region  Emoji
  const emojiClickHandler = (r) => {
    setState((p) => ({
      ...p,
      commentText: `${p.commentText}${r.emoji}`
    }));
  };
  // #endregion

  // #region Attachment
  const mediaRef = useRef();
  const attachmentClickHandler = () => {};
  const onFileSelect = (files) => {
    setState((p) => ({
      ...p,
      content: {
        ...files[0]
      }
    }));
  };
  const removeAttachment = () => {
    setState((p) => ({
      ...p,
      fileKey: getFileKey(),
      content: null
    }));
  };
  // #endregion

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!commentAddable()) return;

    const pComment = {
      commentText: state.commentText,
      contents: !state.content ? [] : [{ ...state.content }]
    };

    onSubmit(pComment, () => {
      setState(initState);
    });
  };

  return (
    <Paper component="form" className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <InputBase
            className={classes.input}
            placeholder="Write a comment"
            inputProps={{ 'aria-label': 'write a comment' }}
            multiline
            rows={3}
            value={state.commentText}
            onChange={(e) =>
              setState((p) => ({
                ...p,
                commentText: e.target.value
              }))
            }
          />
          <div className={classes.iconContainer}>
            <EmojiCtrl clickHandler={emojiClickHandler} />

            <AttachmentCtrl
              clickHandler={attachmentClickHandler}
              disabled={!!state.content}
              fileTypes={fileHelper.getAllAcceptFiles()}
              noOfFileAllowed={1}
              contentFor={CONTENT_FOR.FEED}
              fileKey={state.fileKey}
              onSelect={onFileSelect}
            />

            <SendCtrl
              className={classes.iconButton}
              disabled={!commentAddable()}
              clickHandler={handleSubmit}
            />
          </div>

          <AddContentPreviewCtrl
            content={state.content}
            removeAttachment={removeAttachment}
            mediaRef={mediaRef}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

AddComment.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default AddComment;
