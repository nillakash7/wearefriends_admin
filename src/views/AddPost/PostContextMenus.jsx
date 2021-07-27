import React, { useState } from 'react';
import PropTypes from 'prop-types';

import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// import DescriptionIcon from '@material-ui/icons/Description';
import ArchiveIcon from '@material-ui/icons/Archive';
import RowingIcon from '@material-ui/icons/Rowing';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import BlockIcon from '@material-ui/icons/Block';

import AppContextMenu from '../../components/AppContextMenu';
import { MEMBER_ACTIONS } from './postsHelper';
import { ACCOUNT_STATUS } from '../../configs/appConfig';

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
      {item.status !== ACCOUNT_STATUS.VERIFIED && (
        <MenuItem
          onClick={(evt) => itemClick(evt, MEMBER_ACTIONS.VERIFY)}
          className="contextMenuItem"
        >
          <ListItemIcon>
            <VerifiedUserIcon />
          </ListItemIcon>
          <ListItemText primary="VERIFY" />
        </MenuItem>
      )}
      {item.status !== ACCOUNT_STATUS.SUSPENDED && (
        <MenuItem
          onClick={(evt) => itemClick(evt, MEMBER_ACTIONS.SUSPEND)}
          className="contextMenuItem"
        >
          <ListItemIcon>
            <BlockIcon />
          </ListItemIcon>
          <ListItemText primary="SUSPEND" />
        </MenuItem>
      )}

      {item.status !== ACCOUNT_STATUS.ARCHIVED && (
        <MenuItem
          onClick={(evt) => itemClick(evt, MEMBER_ACTIONS.ARCHIVE)}
          className="divider contextMenuItem"
        >
          <ListItemIcon>
            <ArchiveIcon />
          </ListItemIcon>
          <ListItemText primary="ARCHIVE" />
        </MenuItem>
      )}
      {item.status === ACCOUNT_STATUS.ARCHIVED && (
        <MenuItem
          onClick={(evt) => itemClick(evt, MEMBER_ACTIONS.ACTIVE)}
          className="divider contextMenuItem"
        >
          <ListItemIcon>
            <RowingIcon />
          </ListItemIcon>
          <ListItemText primary="ACTIVE" />
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
