import { isEmptyArray } from 'formik';
import aTypes from '../actions/actionTypes';
import initialState from './initialState';

const getNoOfItems = (isReset, isMore, noAlreadyExist, noOfNew) => {
  if (isReset) return isMore ? noOfNew + 1 : noOfNew;

  const noOfItemExist = Math.floor(noAlreadyExist / noOfNew) * noOfNew;
  if (isMore) return noOfItemExist + noOfNew + 1;
  return noOfItemExist + noOfNew;
};

const getNoOfLike = (pNoOfLike, pIsLiked, isLiked) => {
  if (pIsLiked && !isLiked) return pNoOfLike - 1;
  if (!pIsLiked && isLiked) return pNoOfLike + 1;
  return pNoOfLike;
};

const generateComment = (comment) => {
  return {
    ...comment,
    commentText: comment.feedText
  };
};
const generateComments = (oldComments, commentResp) => {
  if (isEmptyArray(commentResp.comments)) return oldComments;
  const newComments = commentResp.comments.map((c) => generateComment(c));
  if (commentResp.pageNo === 1) return newComments;
  return [...newComments, ...oldComments];
};

const addComments = (oldComments, comment) => {
  if (isEmptyArray(oldComments)) return [generateComment(comment)];
  return [...oldComments, generateComment(comment)];
};

export default function postReducer(state = initialState.postInfo, action) {
  switch (action.type) {
    case aTypes.GET_POSTS_SUCCESS:
      return {
        items: [
          ...action.data.items.map((i) => ({
            ...i,
            statusText: i.isArchived ? 'Inactive' : 'Active'
          }))
        ],
        totalRecordCount: getNoOfItems(
          action.data.isReset,
          action.data.isMore,
          state.totalRecordCount,
          action.data.items.length
        )
      };
    case aTypes.ADD_POST_SUCCESS:
      return {
        ...state,
        items: state.items.map((i) => {
          if (i.postID === action.data.postID) {
            return {
              ...i,
              categoryID: action.data.categoryID,
              categoryText: action.data.categoryText
            };
          }
          return i;
        })
      };
    case aTypes.EDIT_POST_SUCCESS: // TODO
      return {
        ...state,
        items: state.items.map((i) => {
          if (i.postID === action.data) {
            return { ...action.data };
          }
          return i;
        }),
        post:
          state.post.postID !== action.data.postID
            ? state.post
            : {
                ...action.data,
                comments: state.post.comments
              }
      };
    case aTypes.DELETE_POST_SUCCESS:
      return {
        ...state,
        items: state.items.map((i) => {
          if (i.postID === action.postID) {
            return {
              ...i,
              isArchived: true,
              statusText: 'Inactive'
            };
          }
          return i;
        })
      };
    case aTypes.GET_POST_DETAIL_SUCCESS:
      return {
        ...state,
        post: action.data
      };
    case aTypes.ACTIVATE_POST_SUCCESS:
      return {
        ...state,
        items: state.items.map((i) => {
          if (i.postID === action.postID) {
            return {
              ...i,
              isArchived: false,
              statusText: 'Active'
            };
          }
          return i;
        })
      };
    case aTypes.TOGGLE_LIKE_TO_POST_SUCCESS:
      if (state.post.postID !== action.data.postID) return state;
      return {
        ...state,
        post: {
          ...state.post,
          symbolID: action.data.isLiked ? action.data.symbolID : 0,
          noOfLike: getNoOfLike(
            state.post.noOfLike,
            state.post.symbolID > 0,
            action.data.isLiked
          )
        }
      };
    case aTypes.GET_POST_COMMENTS_SUCCESS:
      if (state.post.postID !== action.data.postID) return state;
      return {
        ...state,
        post: {
          ...state.post,
          comments: generateComments(state.post.comments, action.data)
        }
      };
    case aTypes.ADD_COMMENT_SUCCESS:
      if (state.post.postID !== action.data.postID) return state;
      return {
        ...state,
        post: {
          ...state.post,
          comments: addComments(state.post.comments, action.data.comment)
        }
      };
    case aTypes.EDI_COMMENT_SUCCESS:
      if (state.post.postID !== action.data.postID) return state;
      return {
        ...state,
        post: {
          ...state.post,
          comments: state.post.comments.map((c) => {
            if (c.commentID === action.data.comment.commentID) {
              return generateComment(action.data.comment);
            }
            return c;
          })
        }
      };
    case aTypes.DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        post: {
          ...state.post,
          comments: state.post.comments.filter(
            (c) => c.commentID !== action.data
          )
        }
      };
    case aTypes.TOGGLE_LIKE_TO_COMMENT_SUCCESS:
      if (state.post.postID !== action.data.postID) return state;
      return {
        ...state,
        post: {
          ...state.post,
          comments: state.post.comments.map((c) => {
            if (c.commentID === action.data.commentID) {
              return {
                ...c,
                symbolID: action.data.isLiked ? action.data.symbolID : 0,
                noOfLike: getNoOfLike(
                  c.noOfLike,
                  c.symbolID > 0,
                  action.data.isLiked
                )
              };
            }
            return c;
          })
        }
      };
    default:
      return state;
  }
}
