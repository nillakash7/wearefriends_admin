import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

// import { APP_ICONS, POST_TYPE } from '../../../configs/appConfig';
import { Typography } from '@material-ui/core';
import LikeCtrl from '../components/LikeCtrl';
import { commentItemStyles } from './commentHelper';
import EditCtrl from '../components/EditCtrl';
import DeleteCtrl from '../components/DeleteCtrl';
import ProfileCtrl from '../components/ProfileCtrl';
import { DEFAULT_SYMBOL_ID } from '../../../configs/appConfig';
import CommentContentCtrl from './CommentContentCtrl';
import EditComment from './EditComment';

const CommentItem = ({ comment, likeHandler, deleteComment, editComment }) => {
  const classes = commentItemStyles();

  const [isEditing, setIsEditing] = useState(false);

  const user = useSelector((state) => state.user);
  const onLikeClick = (isLiked) => {
    const data = {
      commentID: comment.commentID,
      symbolID: comment.symbolID || DEFAULT_SYMBOL_ID,
      isLiked
    };
    likeHandler(data);
  };

  const isMediaWithText = (c) => {
    return c.commentText && c.contents && c.contents.length > 0;
  };

  const onEditClick = () => {
    setIsEditing(true);
  };

  const handleSubmitEdit = (data) => {
    editComment(data, () => {
      setIsEditing(false);
    });
  };

  return (
    <>
      <div className={classes.root}>
        <div className={classes.header}>
          <ProfileCtrl
            thumbUrl={comment.commentOwnerThumbUrl}
            name={comment.commentOwnerName}
          />
          <div className={classes.actions}>
            <DeleteCtrl
              contentName="Comment"
              id={comment.commentID}
              clickHandler={deleteComment}
            />
            {comment.commentOwnerID === user.memberID && (
              <EditCtrl clickHandler={onEditClick} />
            )}
            <LikeCtrl
              noOfLike={comment.noOfLike}
              isLiked={comment.symbolID > 0}
              clickHandler={onLikeClick}
            />
          </div>
        </div>

        <div className={classes.commentContainer}>
          {comment.commentText && (
            <Typography> {comment.commentText}</Typography>
          )}
          {isMediaWithText(comment) && <div className={classes.space} />}
          {comment.contents && comment.contents.length > 0 && (
            <CommentContentCtrl content={comment.contents[0]} />
          )}

          {/* <img /> */}
        </div>
      </div>

      {isEditing && (
        <EditComment
          comment={comment}
          handleEditCancel={() => {
            setIsEditing(false);
          }}
          onSubmit={handleSubmitEdit}
        />
      )}
    </>
  );
};

CommentItem.propTypes = {
  comment: PropTypes.objectOf(PropTypes.any).isRequired,
  likeHandler: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  editComment: PropTypes.func.isRequired
};

export default CommentItem;
