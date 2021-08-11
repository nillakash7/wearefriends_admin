/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
// import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

// import { ToasterContext } from '../../../App';
import { editCommentFormStyles } from './commentHelper';
import { CONTENT_FOR } from '../../../configs/contentConfig';
import fileHelper from '../../../helpers/fileHelper';
// import CloseCtrl from '../components/CloseCtrl';
import SendCtrl from '../components/SendCtrl';
import AttachmentCtrl from '../components/AttachmentCtrl';
import EmojiCtrl from '../components/EmojiCtrl';
import CancelCtrl from '../components/CancelCtrl';
import AddContentPreviewCtrl from '../components/AddContentPreviewCtrl';

const getFileKey = () => Math.random().toString();
const generateEditComment = (c) => {
  const content = c.contents && c.contents.length > 0 ? c.contents[0] : null;

  return {
    ...c,
    fileKey: getFileKey(),
    content: content
      ? {
          ...content,
          url: content.contentUrl,
          mediaType: content.contentType
        }
      : null
  };
};

const EditComment = ({ comment, handleEditCancel, onSubmit }) => {
  const classes = editCommentFormStyles();
  // const { toaster } = useContext(ToasterContext);

  const [state, setState] = useState(generateEditComment(comment));

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
      fileKey: Math.random().toString(),
      content: null
    }));
  };
  // #endregion

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!commentAddable()) return;

    const pComment = {
      commentID: state.commentID,
      commentText: state.commentText,
      contents: !state.content ? [] : [{ ...state.content }]
    };

    onSubmit(pComment);
  };

  return (
    <Paper component="form" className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <InputBase
            className={classes.input}
            placeholder="Write a comment"
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
            <CancelCtrl id={1} clickHandler={handleEditCancel} />

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
          {/* {state.content && (
            <div className={classes.previewItem}>
              {state.content.mediaType === MEDIA_TYPE.IMG && (
                <img
                  alt={state.content.name}
                  src={state.content.url}
                  className={classes.mediaPreview}
                />
              )}
              {state.content.mediaType === MEDIA_TYPE.VIDEO && (
                <>
                  <video
                    ref={mediaRef}
                    src={state.content.url}
                    className={classes.mediaPreview}
                  />
                  <PlayCircleOutlineIcon className={classes.videoPlayIcon} />
                </>
              )}
              {state.content.mediaType === MEDIA_TYPE.VOICE && (
                <>
                  <audio
                    ref={mediaRef}
                    src={state.content.url}
                    className={classes.mediaPreview}
                  />
                  <div className={classes.voicePreview}>
                    <PlayCircleOutlineIcon className={classes.musicPlayIcon} />
                  </div>
                </>
              )}

              <CloseCtrl
                className={classes.closeIcon}
                id={1}
                clickHandler={removeAttachment}
              />
            </div>
          )} */}
        </Grid>
      </Grid>
    </Paper>
  );
};

EditComment.propTypes = {
  comment: PropTypes.objectOf(PropTypes.any).isRequired,
  handleEditCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default EditComment;
