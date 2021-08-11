import React, { useContext, useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
// import copy from 'copy-to-clipboard';

import pActions from '../../../redux/actions/postActions';
import { Page, PageHeader } from '../../../components/pageCtrl';
import AppConfirmModal from '../../../components/dialogs/AppConfirmModal';

import {
  MEMBER_ACTIONS,
  pageContainerStyles,
  getCommentPaging
} from './postDetailHelper';
import { ToasterContext } from '../../../App';
import PostTypeModal from './PostTypeModal';
import { POST_TYPE } from '../../../configs/appConfig';
import routePaths from '../../../routePaths';
import EditPostForm from './EditPostForm';

const initState = {
  postType: POST_TYPE.MEDIA,
  isPostTypeSelected: false,
  openConfirmDialog: false,
  title: '',
  description: '',
  actionType: 0
};

const defaultCommentPagination = getCommentPaging();

const AddPost = ({ history, match, post, actions }) => {
  // #region Init
  const classes = pageContainerStyles();
  const title = 'Post Detail';

  const { toaster } = useContext(ToasterContext);

  const [state, setState] = useState(initState);
  const [editPost, setEditPost] = useState(null);
  const [commentPaging] = useState({
    // setCommentPaging
    ...defaultCommentPagination
  });

  const handleError = (error) => {
    toaster.error(error.message);
  };
  const { pID } = match.params;
  const postID = parseInt(pID, 10);

  const getPost = async () => {
    if (!postID) return;
    const resp = await actions.postDetail(postID);
    if (!resp.isSuccess) handleError(resp);
    else setEditPost({ ...resp.data });
  };

  const getComments = async () => {
    if (!postID) return;
    const resp = await actions.getComments({ ...commentPaging, postID });
    if (!resp.isSuccess) handleError(resp);
  };

  useEffect(() => {
    getPost();
  }, [postID]);

  useEffect(() => {
    getComments();
  }, [commentPaging]);

  // #endregion

  // #region Menu Actions
  const handleDialogClose = () => {
    setState({ ...initState });
  };

  const handleResponse = (res) => {
    if (!res.isSuccess) {
      handleError(res);
      return;
    }
    handleDialogClose();
    toaster.success(res.message);
  };

  const verifyAccount = async (member) => {
    const res = await actions.verifyAccount(member.memberID);
    handleResponse(res);
  };

  const suspendAccount = async (member) => {
    const res = await actions.suspendAccount(member.memberID);
    handleResponse(res);
  };

  const archiveAccount = async (member) => {
    const res = await actions.archiveAccount(member.memberID);
    handleResponse(res);
  };

  const activateAccount = async (member) => {
    const res = await actions.activateAccount(member.memberID);
    handleResponse(res);
  };

  // #region Confirmation Dialog
  // const getConfirmTitle = (aType) => {
  //   switch (aType) {
  //     case MEMBER_ACTIONS.VERIFY:
  //       return 'Verify Member';
  //     case MEMBER_ACTIONS.SUSPEND:
  //       return 'Suspend Member';
  //     case MEMBER_ACTIONS.ARCHIVE:
  //       return 'Archive Member';
  //     case MEMBER_ACTIONS.ACTIVE:
  //       return 'Active Member';
  //     default:
  //       return '';
  //   }
  // };

  // const getConfirmDescription = (aType, username) => {
  //   switch (aType) {
  //     case MEMBER_ACTIONS.VERIFY:
  //       return `Are you sure you want to make the account - ${username} as verified?`;
  //     case MEMBER_ACTIONS.SUSPEND:
  //       return `Are you sure you want to suspend the account - ${username}?`;
  //     case MEMBER_ACTIONS.ARCHIVE:
  //       return `Are you sure you want to delete the account - ${username}?`;
  //     case MEMBER_ACTIONS.ACTIVE:
  //       return `Are you sure you want to activate the account - ${username}?`;
  //     default:
  //       return '';
  //   }
  // };

  // const openConfirmationDialog = (member, actionType) => {
  //   const dTitle = getConfirmTitle(actionType);
  //   const description = getConfirmDescription(actionType, member.username);
  //   setState((p) => ({
  //     ...p,
  //     member,
  //     title: dTitle,
  //     description,
  //     actionType,
  //     openConfirmDialog: true
  //   }));
  // };

  const confirmDialog = () => {
    switch (state.actionType) {
      case MEMBER_ACTIONS.VERIFY:
        verifyAccount(state.member);
        break;
      case MEMBER_ACTIONS.SUSPEND:
        suspendAccount(state.member);
        break;
      case MEMBER_ACTIONS.ARCHIVE:
        archiveAccount(state.member);
        break;
      case MEMBER_ACTIONS.ACTIVE:
        activateAccount(state.member);
        break;
      default:
        break;
    }
  };
  // #endregion

  // const navigateToMemberDetail = (member) => {
  //   window.open(`/member/details/${member.memberID}`, '_blank');
  // };

  // const handleMenuClick = (actionType, member) => {
  //   switch (actionType) {
  //     // case MEMBER_ACTIONS.DETAILS:
  //     //   navigateToMemberDetail(member);
  //     //   break;
  //     case MEMBER_ACTIONS.VERIFY:
  //       openConfirmationDialog(member, actionType);
  //       break;
  //     case MEMBER_ACTIONS.SUSPEND:
  //       openConfirmationDialog(member, actionType);
  //       break;
  //     case MEMBER_ACTIONS.ACTIVE:
  //       openConfirmationDialog(member, actionType);
  //       break;
  //     case MEMBER_ACTIONS.ARCHIVE:
  //       openConfirmationDialog(member, actionType);
  //       break;
  //     default:
  //       break;
  //   }
  // };
  // #endregion

  // #region
  const submitPost = async (data) => {
    if (!data.description && !data.contents && data.contents.length === 0) {
      toaster.error('Please add description or select media');
      return;
    }
    if (post.postID !== editPost.postID) return;

    const resp = await actions.addPost(data);
    if (!resp.isSuccess) {
      toaster.error(resp.message);
    } else {
      history.push(routePaths.POSTS);
    }
  };

  // #endregion

  return (
    <Page className={classes.root} title={title}>
      <PageHeader title={title} />

      <Grid container spacing={3}>
        <Grid item lg={8} md={8} xs={12}>
          {!editPost && <EditPostForm post={editPost} onSubmit={submitPost} />}
        </Grid>
      </Grid>

      <PostTypeModal
        isOpen={state.postType === POST_TYPE.NONE}
        onClose={() => {
          history.push(routePaths.POSTS);
        }}
        onConfirm={(pType) => {
          setState((p) => ({ ...p, postType: pType }));
        }}
      />

      <AppConfirmModal
        title={state.title}
        isOpen={state.openConfirmDialog}
        description={state.description}
        onClose={handleDialogClose}
        onConfirm={confirmDialog}
      />
    </Page>
  );
};

AddPost.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  post: PropTypes.objectOf(PropTypes.any).isRequired,
  actions: PropTypes.objectOf(PropTypes.func).isRequired
};

function mapStateToProps({ postInfo, user }) {
  return {
    roleID: user.roleID || 0,
    post: postInfo.post
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
