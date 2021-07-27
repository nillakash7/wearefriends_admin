import React, { useContext, useState, useEffect, useMemo, useRef } from 'react';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import copy from 'copy-to-clipboard';

import mActions from '../../redux/actions/memberActions';
import cActions from '../../redux/actions/lookupActions';
import { Page, PageHeader } from '../../components/pageCtrl';
import AppConfirmModal from '../../components/dialogs/AppConfirmModal';
import PartnerSearchCtrl from './PartnerSearchCtrl';

import {
  MEMBER_ACTIONS,
  getSearchParams,
  pageContainerStyles
} from './auHelper';
import PartnerTable from './AdminUserTable';
import { ToasterContext } from '../../App';

const initState = {
  member: null,
  openConfirmDialog: false,
  title: '',
  description: '',
  actionType: 0
};

const defaultSearchParam = getSearchParams();
const Partners = ({ roleID, countries, items, noOfTotalItems, actions }) => {
  // #region Init
  const classes = pageContainerStyles();
  const title = 'List of Admin Users';

  const { toaster } = useContext(ToasterContext);

  const [searchParam, setSearchParam] = useState({ ...defaultSearchParam });
  const [state, setState] = useState(initState);

  const handleError = (error) => {
    toaster.error(error.message);
  };

  const handleSearch = async (params) => {
    const res = await actions.getMembers(params);
    if (!res.isSuccess) handleError(res);
  };

  useEffect(() => {
    if (countries.length === 0) actions.getCountries();
  }, []);

  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
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
      data.countryID !== searchParam.countryID ||
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
  const getConfirmTitle = (aType) => {
    switch (aType) {
      case MEMBER_ACTIONS.VERIFY:
        return 'Verify Member';
      case MEMBER_ACTIONS.SUSPEND:
        return 'Suspend Member';
      case MEMBER_ACTIONS.ARCHIVE:
        return 'Archive Member';
      case MEMBER_ACTIONS.ACTIVE:
        return 'Active Member';
      default:
        return '';
    }
  };

  const getConfirmDescription = (aType, username) => {
    switch (aType) {
      case MEMBER_ACTIONS.VERIFY:
        return `Are you sure you want to make the account - ${username} as verified?`;
      case MEMBER_ACTIONS.SUSPEND:
        return `Are you sure you want to suspend the account - ${username}?`;
      case MEMBER_ACTIONS.ARCHIVE:
        return `Are you sure you want to delete the account - ${username}?`;
      case MEMBER_ACTIONS.ACTIVE:
        return `Are you sure you want to activate the account - ${username}?`;
      default:
        return '';
    }
  };

  const openConfirmationDialog = (member, actionType) => {
    const dTitle = getConfirmTitle(actionType);
    const description = getConfirmDescription(actionType, member.username);
    setState((p) => ({
      ...p,
      member,
      title: dTitle,
      description,
      actionType,
      openConfirmDialog: true
    }));
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

  const handleMenuClick = (actionType, member) => {
    switch (actionType) {
      // case MEMBER_ACTIONS.DETAILS:
      //   navigateToMemberDetail(member);
      //   break;
      case MEMBER_ACTIONS.VERIFY:
        openConfirmationDialog(member, actionType);
        break;
      case MEMBER_ACTIONS.SUSPEND:
        openConfirmationDialog(member, actionType);
        break;
      case MEMBER_ACTIONS.ACTIVE:
        openConfirmationDialog(member, actionType);
        break;
      case MEMBER_ACTIONS.ARCHIVE:
        openConfirmationDialog(member, actionType);
        break;
      default:
        break;
    }
  };
  // #endregion

  const tableData = useMemo(
    () => (
      <PartnerTable
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
        keyAttr="memberID"
      />
    ),
    [items, searchParam.pageSize, roleID]
  );

  return (
    <Page className={classes.root} title={title}>
      <PageHeader title={title} />

      <PartnerSearchCtrl
        countries={countries}
        onSearch={onSearchClick}
        onReset={onResetClick}
      />

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

Partners.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  roleID: PropTypes.number.isRequired,
  countries: PropTypes.arrayOf(PropTypes.object).isRequired,
  noOfTotalItems: PropTypes.number.isRequired
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

export default connect(mapStateToProps, mapDispatchToProps)(Partners);
