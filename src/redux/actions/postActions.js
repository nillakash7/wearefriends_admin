import apiAction from './apiStatusActions';
import pService from '../../services/postService';
import aTypes from './actionTypes';

// #region Get POSTS
const getPostsSuccess = (data, isReset, isMore) => {
  return {
    type: aTypes.GET_POSTS_SUCCESS,
    data: {
      items: [...data],
      isReset,
      isMore
    }
  };
};
const getPosts = (searchParam) => {
  return async (dispatch) => {
    dispatch(apiAction.beginApiCall());
    try {
      const res = await pService.getPosts(searchParam);
      if (res.isSuccess) {
        const isReset = searchParam.pageNo === 1;
        const isMore = searchParam.pageSize === res.data.length;
        dispatch(getPostsSuccess(res.data, isReset, isMore));
      } else dispatch(apiAction.endApiCall());
      return res;
    } catch (error) {
      dispatch(apiAction.apiCallError(error));
      return error;
    }
  };
};
// #endregion

// #region Get POSTS
const getReportedPosts = (searchParam) => {
  return async (dispatch) => {
    dispatch(apiAction.beginApiCall());
    try {
      const res = await pService.getReportedPosts(searchParam);
      if (res.isSuccess) {
        const isReset = searchParam.pageNo === 1;
        const isMore = searchParam.pageSize === res.data.length;
        dispatch(getPostsSuccess(res.data, isReset, isMore));
      } else dispatch(apiAction.endApiCall());
      return res;
    } catch (error) {
      dispatch(apiAction.apiCallError(error));
      return error;
    }
  };
};
// #endregion

// #region Get POST DETAIL
const getPostDetailSuccess = (data) => {
  return {
    type: aTypes.GET_POST_DETAIL_SUCCESS,
    data
  };
};
const getPostDetail = (postID) => {
  return async (dispatch) => {
    dispatch(apiAction.beginApiCall());
    try {
      const res = await pService.getPostDetail(postID);
      if (res.isSuccess) dispatch(getPostDetailSuccess(res.data));
      else dispatch(apiAction.endApiCall());
      return res;
    } catch (error) {
      dispatch(apiAction.apiCallError(error));
      return error;
    }
  };
};
// #endregion

// #region ADD POST
function addPostSuccess(data) {
  return {
    type: aTypes.ADD_POST_SUCCESS,
    data
  };
}
const addPost = (data) => {
  return async (dispatch) => {
    dispatch(apiAction.beginApiCall());
    try {
      const res = await pService.addPost(data);
      if (res.isSuccess) dispatch(addPostSuccess(res.data));
      else dispatch(apiAction.endApiCall());
      return res;
    } catch (error) {
      dispatch(apiAction.apiCallError(error));
      return error;
    }
  };
};
// #endregion

// #region EDIT POSTS
function editPostSuccess(data) {
  return {
    type: aTypes.EDIT_POST_SUCCESS,
    data
  };
}
const editPost = (data) => {
  return async (dispatch) => {
    dispatch(apiAction.beginApiCall());
    try {
      const res = await pService.editPost(data);
      if (res.isSuccess) dispatch(editPostSuccess(res.data));
      else dispatch(apiAction.endApiCall());
      return res;
    } catch (error) {
      dispatch(apiAction.apiCallError(error));
      return error;
    }
  };
};
// #endregion

// #region DELETE POST
function deletePostSuccess(postID) {
  return {
    type: aTypes.DELETE_POST_SUCCESS,
    postID
  };
}
const deletePost = (postID) => {
  return async (dispatch) => {
    dispatch(apiAction.beginApiCall());
    try {
      const res = await pService.deletePost(postID);
      if (res.isSuccess) dispatch(deletePostSuccess(postID));
      else dispatch(apiAction.endApiCall());
      return res;
    } catch (error) {
      dispatch(apiAction.apiCallError(error));
      return error;
    }
  };
};
// #endregion

// #region ACTIVATE POST
function activatePostSuccess(postID) {
  return {
    type: aTypes.ACTIVATE_POST_SUCCESS,
    postID
  };
}
const activatePost = (postID) => {
  return async (dispatch) => {
    dispatch(apiAction.beginApiCall());
    try {
      const res = await pService.activatePost(postID);
      if (res.isSuccess) dispatch(activatePostSuccess(postID));
      else dispatch(apiAction.endApiCall());
      return res;
    } catch (error) {
      dispatch(apiAction.apiCallError(error));
      return error;
    }
  };
};
// #endregion

// #region POST COMMENTS
function getPostCommentsSuccess(data) {
  return {
    type: aTypes.GET_POST_COMMENTS_SUCCESS,
    data
  };
}
const getPostComments = (searchParam) => {
  return async (dispatch) => {
    dispatch(apiAction.beginApiCall());
    try {
      const res = await pService.getPostComments(searchParam);
      if (res.isSuccess) {
        const data = {
          postID: searchParam.postID,
          pageNo: searchParam.pageNo,
          comments: res.data
        };
        dispatch(getPostCommentsSuccess(data));
      } else dispatch(apiAction.endApiCall());
      return res;
    } catch (error) {
      dispatch(apiAction.apiCallError(error));
      return error;
    }
  };
};
// #endregion

// #region Add COMMENT POST
function addPostCommentSuccess(postID, comment) {
  return {
    type: aTypes.ADD_COMMENT_SUCCESS,
    data: {
      postID,
      comment
    }
  };
}
const addPostComment = (data) => {
  return async (dispatch) => {
    dispatch(apiAction.beginApiCall());
    try {
      const res = await pService.addPostComment(data);
      if (res.isSuccess) dispatch(addPostCommentSuccess(data.postID, res.data));
      else dispatch(apiAction.endApiCall());
      return res;
    } catch (error) {
      dispatch(apiAction.apiCallError(error));
      return error;
    }
  };
};
// #endregion

// #region EDIT COMMENT POST
function editPostCommentSuccess(postID, comment) {
  return {
    type: aTypes.EDI_COMMENT_SUCCESS,
    data: {
      postID,
      comment
    }
  };
}
const editPostComment = (data) => {
  return async (dispatch) => {
    dispatch(apiAction.beginApiCall());
    try {
      const res = await pService.editPostComment(data);
      if (res.isSuccess)
        dispatch(editPostCommentSuccess(data.postID, res.data));
      else dispatch(apiAction.endApiCall());
      return res;
    } catch (error) {
      dispatch(apiAction.apiCallError(error));
      return error;
    }
  };
};
// #endregion

// #region DELETE COMMENT POST
function deletePostCommentSuccess(data) {
  return {
    type: aTypes.DELETE_COMMENT_SUCCESS,
    data
  };
}
const deletePostComment = (commentID) => {
  return async (dispatch) => {
    dispatch(apiAction.beginApiCall());
    try {
      const res = await pService.deletePostComment(commentID);
      if (res.isSuccess) dispatch(deletePostCommentSuccess(commentID));
      else dispatch(apiAction.endApiCall());
      return res;
    } catch (error) {
      dispatch(apiAction.apiCallError(error));
      return error;
    }
  };
};
// #endregion

// #region LIKE ON POST
function likeToPostSuccess(data) {
  return {
    type: aTypes.TOGGLE_LIKE_TO_POST_SUCCESS,
    data
  };
}
const likeToPost = (data) => {
  return async (dispatch) => {
    dispatch(apiAction.beginApiCall());
    try {
      const res = await pService.likeForPost(data);
      if (res.isSuccess) dispatch(likeToPostSuccess(data));
      else dispatch(apiAction.endApiCall());
      return res;
    } catch (error) {
      dispatch(apiAction.apiCallError(error));
      return error;
    }
  };
};
// #endregion

// #region  LIKE ON COMMENT
function likeToCommentSuccess(data) {
  return {
    type: aTypes.TOGGLE_LIKE_TO_COMMENT_SUCCESS,
    data
  };
}
const likeToComment = (data) => {
  return async (dispatch) => {
    dispatch(apiAction.beginApiCall());
    try {
      const res = await pService.likeForComment(data);
      if (res.isSuccess) dispatch(likeToCommentSuccess(data));
      else dispatch(apiAction.endApiCall());
      return res;
    } catch (error) {
      dispatch(apiAction.apiCallError(error));
      return error;
    }
  };
};
// #endregion

// #endregion
export default {
  getPosts,
  addPost,
  getPostDetail,
  editPost,
  deletePost,
  activatePost,
  getPostComments,
  addPostComment,
  editPostComment,
  deletePostComment,
  likeToPost,
  likeToComment,
  getReportedPosts
};
