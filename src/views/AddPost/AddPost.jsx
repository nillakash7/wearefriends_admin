import React, { useContext, useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import copy from 'copy-to-clipboard';

import mActions from '../../redux/actions/memberActions';
import cActions from '../../redux/actions/lookupActions';
import { Page, PageHeader } from '../../components/pageCtrl';
import AppConfirmModal from '../../components/dialogs/AppConfirmModal';

import { MEMBER_ACTIONS, pageContainerStyles } from './postsHelper';
import { ToasterContext } from '../../App';
import PostTypeModal from './PostTypeModal';
import { POST_TYPE } from '../../configs/appConfig';
import routePaths from '../../routePaths';

const initState = {
  postType: POST_TYPE.NONE,
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

  // #endregion

  return (
    <Page className={classes.root} title={title}>
      <PageHeader title={title} />

      {/* <EmailChangeDialog
        state={state}
        onClose={handleDialogClose}
        submitHandler={confirmEmailChanged}
      /> */}

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

function mapStateToProps({ memberInfo, lookupData, user }) {
  return {
    roleID: user.roleID || 0,
    items: memberInfo.items || [],
    noOfTotalItems: memberInfo.totalRecordCount || 0,
    countries: lookupData.countries || []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCountries: bindActionCreators(cActions.getCountries, dispatch),
      getMembers: bindActionCreators(mActions.getMembers, dispatch),
      verifyAccount: bindActionCreators(mActions.verifyAccount, dispatch),
      suspendAccount: bindActionCreators(mActions.suspendAccount, dispatch),
      archiveAccount: bindActionCreators(mActions.archiveAccount, dispatch),
      activateAccount: bindActionCreators(mActions.activateAccount, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
