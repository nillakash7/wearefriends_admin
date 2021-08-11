import React, { useContext, useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import Grid from '@material-ui/core/Grid';
// import copy from 'copy-to-clipboard';

// import { DEFAULT_SYMBOL_ID } from '../../../configs/appConfig';
import { commentCtrlStyles, getCommentPaging } from './commentHelper';
import { ToasterContext } from '../../../App';
// import routePaths from '../../../routePaths';
import CommentListCtrl from './CommentList';
import AddComment from './AddComment';

// const initState = {
//   postType: POST_TYPE.MEDIA,
//   isPostTypeSelected: false,
//   openConfirmDialog: false,
//   title: '',
//   description: '',
//   actionType: 0
// };

const defaultCommentPagination = getCommentPaging();

const CommentCtrl = ({ postID, comments, actions }) => {
  // #region Init
  const classes = commentCtrlStyles();

  const { toaster } = useContext(ToasterContext);

  const [commentPaging] = useState({
    // setCommentPaging
    ...defaultCommentPagination
  });

  const handleError = (error) => {
    toaster.error(error.message);
  };

  const getComments = async () => {
    if (!postID) return;
    const resp = await actions.getComments({ ...commentPaging, postID });
    if (!resp.isSuccess) handleError(resp);
  };

  useEffect(() => {
    getComments();
  }, [commentPaging]);

  // #endregion

  // #region
  const likeToComment = async (data) => {
    const likeData = {
      ...data,
      postID
    };
    const resp = await actions.likeToComment(likeData);
    if (!resp.isSuccess) toaster.error(resp.message);
  };
  // #endregion

  // #region Add Comment
  const addComment = async (data, callback) => {
    const comment = {
      ...data,
      postID
    };
    const resp = await actions.addComment(comment);
    if (!resp.isSuccess) toaster.error(resp.message);
    else if (callback) callback();
  };
  // #endregion

  // #region Add Comment
  const editComment = async (data, callback) => {
    const comment = {
      ...data,
      postID
    };
    const resp = await actions.editComment(comment);
    if (!resp.isSuccess) toaster.error(resp.message);
    else if (callback) callback();
  };
  // #endregion

  // #region Delete Comment
  const deleteComment = async (commentID) => {
    const resp = await actions.deleteComment(commentID);
    if (!resp.isSuccess) toaster.error(resp.message);
  };
  // #endregion

  return (
    <div className={classes.root}>
      <Grid>
        <CommentListCtrl
          comments={comments}
          likeHandler={likeToComment}
          deleteComment={deleteComment}
          editComment={editComment}
        />
      </Grid>
      <Grid>
        <AddComment onSubmit={addComment} />
      </Grid>
    </div>
  );
};

CommentCtrl.propTypes = {
  // history: PropTypes.objectOf(PropTypes.any).isRequired,
  postID: PropTypes.number.isRequired,
  comments: PropTypes.arrayOf(PropTypes.any),
  actions: PropTypes.objectOf(PropTypes.func).isRequired
};

CommentCtrl.defaultProps = {
  comments: []
};

export default CommentCtrl;
