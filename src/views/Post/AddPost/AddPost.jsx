import React, { useContext, useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
// import copy from 'copy-to-clipboard';

import pActions from '../../../redux/actions/postActions';
import { Page, PageHeader } from '../../../components/pageCtrl';
import AppConfirmModal from '../../../components/dialogs/AppConfirmModal';

import { MEMBER_ACTIONS, pageContainerStyles } from './addPostHelper';
import { ToasterContext } from '../../../App';
import PostTypeModal from './PostTypeModal';
import { POST_TYPE } from '../../../configs/appConfig';
import routePaths from '../../../routePaths';
import AddPostForm from './AddPostForm';

const initState = {
  postType: POST_TYPE.MEDIA,
  isPostTypeSelected: false,
  openConfirmDialog: false,
  title: '',
  description: '',
  actionType: 0
};

const AddPost = ({ history, actions }) => {
  // #region Init
  const classes = pageContainerStyles();
  const title = 'Add Post';

  const { toaster } = useContext(ToasterContext);

  const [state, setState] = useState(initState);

  const handleError = (error) => {
    toaster.error(error.message);
  };

  useEffect(() => {}, []);
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

      {/* <EmailChangeDialog
        state={state}
        onClose={handleDialogClose}
        submitHandler={confirmEmailChanged}
      /> */}

      <Grid container spacing={3}>
        <Grid item lg={8} md={8} xs={12}>
          {state.postType === POST_TYPE.MEDIA && (
            <AddPostForm onSubmit={submitPost} />
          )}
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
  actions: PropTypes.objectOf(PropTypes.func).isRequired
};

function mapStateToProps({ user }) {
  return {
    roleID: user.roleID || 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      addPost: bindActionCreators(pActions.addPost, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
