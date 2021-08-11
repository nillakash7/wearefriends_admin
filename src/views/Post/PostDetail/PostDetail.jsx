import React, { useState, useContext, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import pActions from '../../../redux/actions/postActions';
import { Page, PageHeader } from '../../../components/pageCtrl';

import { pageContainerStyles } from './postDetailHelper';
import { ToasterContext } from '../../../App';
import { DEFAULT_SYMBOL_ID } from '../../../configs/appConfig';
import PostDetailCtrl from './PostDetailCtrl';
import CommentCtrl from '../Comments/CommentCtrl';
import EditPostForm from './EditPostForm';

const AddPost = ({ match, post, actions }) => {
  // #region Init
  const classes = pageContainerStyles();
  const title = 'Post Detail';

  const { toaster } = useContext(ToasterContext);

  const handleError = (error) => {
    toaster.error(error.message);
  };
  const { pID } = match.params;
  const postID = parseInt(pID, 10);

  const getPost = async () => {
    if (!postID) return;
    const resp = await actions.postDetail(postID);
    if (!resp.isSuccess) handleError(resp);
  };

  useEffect(() => {
    getPost();
  }, [postID]);

  // #endregion

  // #region
  const likeToPost = async (isLiked) => {
    const likeData = {
      postID: post.postID,
      symbolID: post.symbolID || DEFAULT_SYMBOL_ID,
      isLiked
    };
    const resp = await actions.likeToPost(likeData);
    if (!resp.isSuccess) toaster.error(resp.message);
  };
  // #endregion

  // #region Edit
  const [isEditing, setIsEditing] = useState(false);
  const onEditClick = () => {
    setIsEditing(true);
  };

  const handleSubmitEdit = async (data) => {
    const resp = await actions.editPost(data);
    if (!resp.isSuccess) handleError(resp);
    else setIsEditing(false);
  };

  // #endregion

  return (
    <Page className={classes.root} title={title}>
      <PageHeader title={title} btnTxt="Edit" btnClickHandler={onEditClick} />

      <div className={classes.postContainer}>
        {post.postID && !isEditing && (
          <PostDetailCtrl post={post} toggleLike={likeToPost} />
        )}

        {isEditing && (
          <EditPostForm
            post={post}
            handleEditCancel={() => {
              setIsEditing(false);
            }}
            onSubmit={handleSubmitEdit}
          />
        )}

        <div>
          {post.postID && (
            /* {postID && ( */
            <CommentCtrl
              postID={post.postID}
              comments={post.comments}
              actions={actions}
            />
          )}
        </div>
      </div>

      {/* <PostTypeModal
        isOpen={state.postType === POST_TYPE.NONE}
        onClose={() => {
          history.push(routePaths.POSTS);
        }}
        onConfirm={(pType) => {
          setState((p) => ({ ...p, postType: pType }));
        }}
      /> */}
    </Page>
  );
};

AddPost.propTypes = {
  // history: PropTypes.objectOf(PropTypes.any).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  post: PropTypes.objectOf(PropTypes.any).isRequired,
  actions: PropTypes.objectOf(PropTypes.func).isRequired
};

function mapStateToProps({ postInfo, user }) {
  return {
    roleID: user.roleID || 0,
    post: postInfo.post || {}
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      postDetail: bindActionCreators(pActions.getPostDetail, dispatch),
      editPost: bindActionCreators(pActions.editPost, dispatch),
      getComments: bindActionCreators(pActions.getPostComments, dispatch),
      addComment: bindActionCreators(pActions.addPostComment, dispatch),
      editComment: bindActionCreators(pActions.editPostComment, dispatch),
      deleteComment: bindActionCreators(pActions.deletePostComment, dispatch),
      likeToPost: bindActionCreators(pActions.likeToPost, dispatch),
      likeToComment: bindActionCreators(pActions.likeToComment, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
