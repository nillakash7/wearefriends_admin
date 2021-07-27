import React, { useState } from 'react';
import PropTypes from 'prop-types';

import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// import DescriptionIcon from '@material-ui/icons/Description';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import BlockIcon from '@material-ui/icons/Block';
import LockOpenIcon from '@material-ui/icons/LockOpen';

import AppContextMenu from '../../components/AppContextMenu';
import { PARTNER_ACTIONS } from './plHelper';
import { ACCOUNT_STATUS, COMPANY_CATEGORY } from '../../configs/appConfig';

const PartnerContextMenus = ({ item, handleMenuClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuOpen = (evt) => {
    evt.stopPropagation();
    setIsOpen(true);
  };

  const handleMenuClose = (evt) => {
    evt.stopPropagation();
    setIsOpen(undefined);
  };
  const itemClick = (evt, aType) => {
    evt.stopPropagation();
    handleMenuClick(aType, item);
    setIsOpen(undefined);
  };

  return (
    <AppContextMenu
      isOpen={!!isOpen}
      handleMenuOpen={handleMenuOpen}
      handleMenuClose={handleMenuClose}
    >
      {/* <MenuItem
        onClick={(evt) => itemClick(evt, MEMBER_ACTIONS.DETAILS)}
        className="contextMenuItem"
      >
        <ListItemIcon>
          <DescriptionIcon />
        </ListItemIcon>
        <ListItemText primary="Details" />
      </MenuItem> */}
      {item.categoryID === COMPANY_CATEGORY.PROSPECTIVE_PARTNER && (
        <MenuItem
          onClick={(evt) => itemClick(evt, PARTNER_ACTIONS.ACTIVATE)}
          className="contextMenuItem"
        >
          <ListItemIcon>
            <VerifiedUserIcon />
          </ListItemIcon>
          <ListItemText primary="ACTIVATE" />
        </MenuItem>
      )}
      {item.categoryID === COMPANY_CATEGORY.PARTNER && (
        <MenuItem
          onClick={(evt) => itemClick(evt, PARTNER_ACTIONS.DEACTIVATE)}
          className="contextMenuItem"
        >
          <ListItemIcon>
            <BlockIcon />
          </ListItemIcon>
          <ListItemText primary="DE-ACTIVATE" />
        </MenuItem>
      )}

      {item.status === ACCOUNT_STATUS.LOCKED && (
        <MenuItem
          onClick={(evt) => itemClick(evt, PARTNER_ACTIONS.UNLOCKED)}
          className="divider contextMenuItem"
        >
          <ListItemIcon>
            <LockOpenIcon />
          </ListItemIcon>
          <ListItemText primary="UNLOCK" />
        </MenuItem>
      )}
    </AppContextMenu>
  );
};

PartnerContextMenus.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  handleMenuClick: PropTypes.func.isRequired
};

export default PartnerContextMenus;
