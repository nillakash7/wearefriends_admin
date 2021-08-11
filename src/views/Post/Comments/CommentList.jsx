import React from 'react';
import PropTypes from 'prop-types';
// import Dialog from '@material-ui/core/Dialog';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';

// import { Grid, Typography } from '@material-ui/core';
// import { APP_ICONS, POST_TYPE } from '../../../configs/appConfig';
import { commentListStyles } from './commentHelper';
import CommentItem from './CommentItem';

const CommentList = ({ comments, likeHandler, deleteComment, editComment }) => {
  const classes = commentListStyles();
  if (!comments || comments.length === 0) return null;

  return (
    <div className={classes.root}>
      {comments.map((c) => (
        <CommentItem
          key={c.commentID}
          comment={c}
          likeHandler={likeHandler}
          deleteComment={deleteComment}
          editComment={editComment}
        />
      ))}
    </div>
  );
};

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  likeHandler: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  editComment: PropTypes.func
};

CommentList.defaultProps = {
  editComment: () => {}
};

export default CommentList;
