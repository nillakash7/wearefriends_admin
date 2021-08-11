import React, { useContext, useState, useEffect, useMemo } from 'react';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import copy from 'copy-to-clipboard';

import pActions from '../../../redux/actions/postActions';
import { Page, PageHeader } from '../../../components/pageCtrl';
import AppConfirmModal from '../../../components/dialogs/AppConfirmModal';
import ReportedPostSearchCtrl from './ReportedPostSearchCtrl';

import {
  POST_ACTIONS,
  getSearchParams,
  pageContainerStyles
} from './reportedPostsHelper';
import ReportedPostTable from './ReportedPostTable';
import { ToasterContext } from '../../../App';
import routePaths from '../../../routePaths';

const initState = {
  post: null,
  openConfirmDialog: false,
  title: '',
  description: '',
  actionType: 0
};

const defaultSearchParam = getSearchParams();
const ReportedPosts = ({ history, roleID, items, noOfTotalItems, actions }) => {
  // #region Init
  const classes = pageContainerStyles();
  const title = 'List of Posts';

  const { toaster } = useContext(ToasterContext);

  const [searchParam, setSearchParam] = useState({ ...defaultSearchParam });
  const [state, setState] = useState(initState);

  const handleError = (error) => {
    toaster.error(error.message);
  };

  const handleSearch = async (params) => {
    const res = await actions.getPosts(params);
    if (!res.isSuccess) handleError(res);
  };

  useEffect(() => {
    handleSearch(searchParam);
  }, [searchParam]);

  // #endregion

  // #region Pagination
  const onPageSizeChanged = (pageSize) => {
    setSearchParam((p) => ({ ...p, pageSize }));
  };

  const onPageNoChanged = (pageNo) => {
    setSearchParam((p) => ({ ...p, pageNo: pageNo + 1 }));
  };
  // #endregion

  // #region Search
  const isSearchable = (data) => {
    return (
      data.keyword !== searchParam.keyword ||
      data.startDate !== searchParam.startDate ||
      data.endDate !== searchParam.endDate
    );
  };
  const onSearchClick = (data) => {
    if (!isSearchable(data)) return;

    searchParam.pageNo = 1;
    setSearchParam((p) => ({
      ...p,
      ...data,
      pageNo: 1
    }));
  };

  const onResetClick = () => {
    // if (!isSearchable(data)) return;
    setSearchParam({ ...defaultSearchParam });
  };
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

  // const verifyAccount = async (member) => {
  //   const res = await actions.verifyAccount(member.memberID);
  //   handleResponse(res);
  // };

  // const suspendAccount = async (member) => {
  //   const res = await actions.suspendAccount(member.memberID);
  //   handleResponse(res);
  // };

  const deletePost = async (post) => {
    const res = await actions.deletePost(post.postID);
    handleResponse(res);
  };

  const activatePost = async (post) => {
    const res = await actions.activatePost(post.postID);
    handleResponse(res);
  };

  // #region Confirmation Dialog
  const getConfirmTitle = (aType) => {
    switch (aType) {
      case POST_ACTIONS.ARCHIVED:
        return 'Archive Post';
      case POST_ACTIONS.ACTIVATED:
        return 'Activated Post';
      default:
        return '';
    }
  };

  const getConfirmDescription = (aType, postID) => {
    switch (aType) {
      case POST_ACTIONS.ARCHIVED:
        return `Are you sure you want to delete this post - ${postID}?`;
      case POST_ACTIONS.ACTIVATED:
        return `Are you sure you want to activate this post - ${postID}?`;
      default:
        return '';
    }
  };

  const openConfirmationDialog = (post, actionType) => {
    const dTitle = getConfirmTitle(actionType);
    const description = getConfirmDescription(actionType, post.postID);
    setState((p) => ({
      ...p,
      post,
      title: dTitle,
      description,
      actionType,
      openConfirmDialog: true
    }));
  };

  const confirmDialog = () => {
    switch (state.actionType) {
      case POST_ACTIONS.ARCHIVED:
        deletePost(state.post);
        break;
      case POST_ACTIONS.ACTIVATED:
        activatePost(state.post);
        break;
      default:
        break;
    }
  };
  // #endregion

  const navigateToPostDetail = (post) => {
    history.push(`${routePaths.POST_DETAIL}/${post.postID}`);
  };

  const navigateToPostEdit = (post) => {
    history.push(`${routePaths.POST_EDIT}/${post.postID}`);
  };

  const handleMenuClick = (actionType, post) => {
    switch (actionType) {
      case POST_ACTIONS.DETAILS:
        navigateToPostDetail(post);
        break;
      case POST_ACTIONS.EDIT:
        navigateToPostEdit(post);
        break;
      case POST_ACTIONS.ARCHIVED:
        openConfirmationDialog(post, actionType);
        break;
      case POST_ACTIONS.ACTIVATED:
        openConfirmationDialog(post, actionType);
        break;
      default:
        break;
    }
  };
  // #endregion

  const tableData = useMemo(
    () => (
      <ReportedPostTable
        className={classes.results}
        roleID={roleID}
        items={items}
        pageNo={searchParam.pageNo}
        itemsPerPage={searchParam.pageSize}
        noOfTotalItems={noOfTotalItems}
        onPageSizeChanged={onPageSizeChanged}
        onPageNoChanged={onPageNoChanged}
        handleMenuClick={handleMenuClick}
        // handleRowClick={
        //   roleID !== ROLE_ID.ADMIN ? navigateToMemberDetail : null
        // }
        keyAttr="postID"
      />
    ),
    [items, searchParam.pageSize, roleID]
  );
  const navigateToAddPost = () => {
    history.push(routePaths.ADD_POST);
  };

  return (
    <Page className={classes.root} title={title}>
      <PageHeader
        title={title}
        btnTxt="Add Post"
        btnClickHandler={navigateToAddPost}
      />

      <ReportedPostSearchCtrl onSearch={onSearchClick} onReset={onResetClick} />

      {tableData}

      {/* <EmailChangeDialog
        state={state}
        onClose={handleDialogClose}
        submitHandler={confirmEmailChanged}
      /> */}

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

ReportedPosts.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  roleID: PropTypes.number.isRequired,
  noOfTotalItems: PropTypes.number.isRequired
};

function mapStateToProps({ postInfo, user }) {
  return {
    roleID: user.roleID || 0,
    items: postInfo.items || [],
    noOfTotalItems: postInfo.totalRecordCount || 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getPosts: bindActionCreators(pActions.getReportedPosts, dispatch),
      deletePost: bindActionCreators(pActions.deletePost, dispatch),
      activatePost: bindActionCreators(pActions.activatePost, dispatch)
      // verifyAccount: bindActionCreators(pActions.verifyAccount, dispatch),
      // suspendAccount: bindActionCreators(pActions.suspendAccount, dispatch),
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportedPosts);
