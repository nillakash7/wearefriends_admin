import { isEmptyArray } from 'formik';
import { getTrimText, isEmpty } from '../helpers/commonHelper';
import appHttp from './httpService';
import uploadService from './uploadService';

function getSearchParam(searchParam) {
  return {
    keyword: searchParam.keyword ? searchParam.keyword.trim() : '',
    startDate: searchParam.startDate,
    endDate: searchParam.endDate,
    pageNo: searchParam.pageNo,
    pageSize: searchParam.pageSize,
    orderBy: searchParam.orderBy,
    isReverseOrder: searchParam.isReverseOrder
  };
}

function getPosts(searchParam) {
  const params = getSearchParam(searchParam);
  return appHttp.post('/AdminPost/GetPosts', params);
}

function getReportedPostSearchParam(searchParam) {
  return {
    keyword: searchParam.keyword ? searchParam.keyword.trim() : '',
    startDate: searchParam.startDate,
    endDate: searchParam.endDate,
    pageNo: searchParam.pageNo,
    pageSize: searchParam.pageSize,
    orderBy: searchParam.orderBy,
    isReverseOrder: searchParam.isReverseOrder
  };
}

function getReportedPosts(searchParam) {
  const params = getReportedPostSearchParam(searchParam);
  return appHttp.post('/AdminPost/GetReportedPosts', params);
}

function getPostDetail(postID) {
  return appHttp.get(`/AdminPost/GetPost/${postID}`);
}

// #region Add Post
const isValidToAddPost = (c) => {
  return !isEmpty(c.description) || !isEmptyArray(c.contents);
};

function getAddPostInfo(data) {
  return {
    title: getTrimText(data.title),
    postText: getTrimText(data.description),
    eventTime: data.eventTime,
    contents: data.contents || []
  };
}

const addPost = async (data) => {
  if (!isValidToAddPost(data)) throw Error('Invalid post data');

  const contents = await uploadService.uploadFiles(data.contents);

  const pData = {
    ...data,
    contents: contents.map((c) => ({
      fileName: c.cloudFileName,
      type: c.mediaType,
      durationInSecond: Math.round(c.duration) || 0, // TODO
      fileSizeInBytes: c.size
    }))
  };
  const url = '/AdminPost/Add';
  return appHttp.post(url, getAddPostInfo(pData));
};
// #endregion

// #region Edit Post
const isValidToEditPost = (c) => {
  return c.postID && (!isEmpty(c.description) || !isEmptyArray(c.contents));
};

function getEditPostInfo(data) {
  return {
    postID: data.postID,
    title: getTrimText(data.title),
    postText: getTrimText(data.description),
    eventTime: data.eventTime,
    contents: data.contents || []
  };
}

const editPost = async (data) => {
  if (!isValidToEditPost(data)) throw Error('Invalid post data');

  const contents = data.contents || [];
  const existingContents = contents.filter((c) => c.contentID);
  let upContents = contents.filter((c) => !c.contentID);
  upContents = await uploadService.uploadFiles(upContents);

  const allContents = [...existingContents, ...upContents];

  const pData = {
    ...data,
    contents: allContents.map((c) => ({
      contentID: c.contentID,
      fileName: c.cloudFileName,
      type: c.mediaType,
      durationInSecond: Math.round(c.duration) || 0,
      fileSizeInBytes: c.size
    }))
  };
  const url = '/AdminPost/Edit';
  return appHttp.post(url, getEditPostInfo(pData));
};
// #endregion

function deletePost(postID) {
  const url = `/AdminPost/Delete/${postID}`;
  return appHttp.post(url);
}
function activatePost(postID) {
  const url = `/AdminPost/Activate/${postID}`;
  return appHttp.post(url);
}

// #region Comments
function getPostComments(searchParam) {
  const data = {
    postID: searchParam.postID,
    pageNo: searchParam.pageNo,
    pageSize: searchParam.pageSize
  };
  return appHttp.post('/AdminPost/GetPostComments', data);
}

// COMMENTS
// #region Add Comment
const isValidToAddComment = (c) => {
  return c.postID && (!isEmpty(c.commentText) || !isEmptyArray(c.contents));
};
function getAddPostCommentInfo(data) {
  return {
    postID: data.postID,
    commentText: getTrimText(data.commentText),
    contents: data.contents || []
  };
}
const addPostComment = async (data) => {
  if (!isValidToAddComment(data)) throw Error('Invalid comment data');
  const contents = await uploadService.uploadFiles(data.contents);
  const pData = {
    ...data,
    contents: contents.map((c) => ({
      fileName: c.cloudFileName,
      type: c.mediaType,
      durationInSecond: Math.round(c.duration),
      fileSizeInBytes: c.size
    }))
  };
  const fComment = getAddPostCommentInfo(pData);
  return appHttp.post('/AdminPost/AddPostComment', fComment);
};
// #endregion

// #region Edit Comment
const isValidToEditComment = (c) => {
  return (
    c.postID &&
    c.commentID &&
    (!isEmpty(c.commentText) || !isEmptyArray(c.contents))
  );
};
function getEditPostCommentInfo(data) {
  return {
    postID: data.postID,
    commentID: data.commentID,
    commentText: getTrimText(data.commentText),
    contents: data.contents || []
  };
}
const editPostComment = async (data) => {
  if (!isValidToEditComment(data)) throw Error('Invalid comment data');

  const contents = data.contents || [];
  const existingContents = contents.filter((c) => c.contentID);
  let upContents = contents.filter((c) => !c.contentID);
  upContents = await uploadService.uploadFiles(upContents);

  const allContents = [...existingContents, ...upContents];

  const pData = {
    ...data,
    contents: allContents.map((c) => ({
      contentID: c.contentID,
      fileName: c.contentID ? c.url : c.cloudFileName,
      type: c.mediaType,
      durationInSecond: Math.round(c.duration),
      fileSizeInBytes: c.size
    }))
  };
  const fComment = getEditPostCommentInfo(pData);
  return appHttp.post('/AdminPost/EditPostComment', fComment);
};
// #endregion

function deletePostComment(commentID) {
  const url = `/AdminPost/DeletePostComment/${commentID}`;
  return appHttp.post(url);
}
// #endregion - COMMENTS

// #region - LIKE
function likeForPost(data) {
  const pData = {
    isAdd: data.isLiked,
    postID: data.postID,
    reactionSymbolID: data.symbolID
  };
  return appHttp.post('/AdminPost/LikeForPost', pData);
}
function likeForComment(data) {
  const pData = {
    isAdd: data.isLiked,
    postID: data.postID,
    reactionSymbolID: data.symbolID,
    commentID: data.commentID
  };
  return appHttp.post('/AdminPost/LikeForComment', pData);
}

// #endregion - LIKE

export default {
  getPosts,
  getReportedPosts,
  getPostDetail,
  addPost,
  editPost,
  deletePost,
  activatePost,
  getPostComments,
  addPostComment,
  editPostComment,
  deletePostComment,
  likeForPost,
  likeForComment
};
