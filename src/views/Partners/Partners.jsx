import React, { useContext, useState, useEffect, useMemo } from 'react';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import copy from 'copy-to-clipboard';

import pActions from '../../redux/actions/partnerActions';
import cActions from '../../redux/actions/lookupActions';
import { Page, PageHeader } from '../../components/pageCtrl';
import AppConfirmModal from '../../components/dialogs/AppConfirmModal';
import PartnerSearchCtrl from './PartnerSearchCtrl';

import {
  PARTNER_ACTIONS,
  getSearchParams,
  pageContainerStyles
} from './plHelper';
import PartnerTable from './PartnerTable';
import { ToasterContext } from '../../App';

const initState = {
  partner: null,
  openConfirmDialog: false,
  title: '',
  description: '',
  actionType: 0
};

const defaultSearchParam = getSearchParams();
const Partners = ({ roleID, countries, items, noOfTotalItems, actions }) => {
  // #region Init
  const classes = pageContainerStyles();
  const title = 'List of Partners';

  const { toaster } = useContext(ToasterContext);

  const [searchParam, setSearchParam] = useState({ ...defaultSearchParam });
  const [state, setState] = useState(initState);

  const handleError = (error) => {
    toaster.error(error.message);
  };

  const handleSearch = async (params) => {
    const res = await actions.getPartners(params);
    if (!res.isSuccess) handleError(res);
  };

  useEffect(() => {
    if (countries.length === 0) actions.getCountries();
  }, []);

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
      data.categoryID !== searchParam.categoryID ||
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

  const activateAccount = async (partner) => {
    const res = await actions.activateAccount(partner.partnerID);
    handleResponse(res);
  };

  const deactivateAccount = async (partner) => {
    const res = await actions.deactivateAccount(partner.partnerID);
    handleResponse(res);
  };

  const unlockAccount = async (partner) => {
    const res = await actions.unlockAccount(partner.partnerID);
    handleResponse(res);
  };

  // #region Confirmation Dialog
  const getConfirmTitle = (aType) => {
    switch (aType) {
      case PARTNER_ACTIONS.ACTIVATE:
        return 'Activate Partner';
      case PARTNER_ACTIONS.DEACTIVATE:
        return 'Deactivate Partner';
      case PARTNER_ACTIONS.UNLOCKED:
        return 'Unlock Partner';
      default:
        return '';
    }
  };

  const getConfirmDescription = (aType, companyName) => {
    switch (aType) {
      case PARTNER_ACTIONS.ACTIVATE:
        return `Are you sure you want to activate the partner - ${companyName}?`;
      case PARTNER_ACTIONS.DEACTIVATE:
        return `Are you sure you want to de-activate the partner - ${companyName}?`;
      case PARTNER_ACTIONS.UNLOCKED:
        return `Are you sure you want to unlock the partner - ${companyName}?`;
      default:
        return '';
    }
  };

  const openConfirmationDialog = (partner, actionType) => {
    const dTitle = getConfirmTitle(actionType);
    const description = getConfirmDescription(actionType, partner.companyName);
    setState((p) => ({
      ...p,
      partner,
      title: dTitle,
      description,
      actionType,
      openConfirmDialog: true
    }));
  };

  const confirmDialog = () => {
    switch (state.actionType) {
      case PARTNER_ACTIONS.ACTIVATE:
        activateAccount(state.partner);
        break;
      case PARTNER_ACTIONS.DEACTIVATE:
        deactivateAccount(state.partner);
        break;
      case PARTNER_ACTIONS.UNLOCKED:
        unlockAccount(state.partner);
        break;
      default:
        break;
    }
  };
  // #endregion

  // const navigateToMemberDetail = (member) => {
  //   window.open(`/member/details/${member.memberID}`, '_blank');
  // };

  const handleMenuClick = (actionType, partner) => {
    switch (actionType) {
      // case MEMBER_ACTIONS.DETAILS:
      //   navigateToMemberDetail(member);
      //   break;
      case PARTNER_ACTIONS.ACTIVATE:
      case PARTNER_ACTIONS.DEACTIVATE:
      case PARTNER_ACTIONS.UNLOCKED:
        openConfirmationDialog(partner, actionType);
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
        keyAttr="partnerID"
      />
    ),
    [items, searchParam.pageSize, roleID]
  );

  return (
    <Page className={classes.root} title={title}>
      <PageHeader title={title} />

      <PartnerSearchCtrl onSearch={onSearchClick} onReset={onResetClick} />

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

function mapStateToProps({ partnerInfo, lookupData, user }) {
  return {
    roleID: user.roleID || 0,
    items: partnerInfo.items || [],
    noOfTotalItems: partnerInfo.totalRecordCount || 0,
    countries: lookupData.countries || []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCountries: bindActionCreators(cActions.getCountries, dispatch),
      getPartners: bindActionCreators(pActions.getPartners, dispatch),
      activateAccount: bindActionCreators(pActions.activateAccount, dispatch),
      deactivateAccount: bindActionCreators(
        pActions.deactivateAccount,
        dispatch
      ),
      unlockAccount: bindActionCreators(pActions.unlockAccount, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Partners);
