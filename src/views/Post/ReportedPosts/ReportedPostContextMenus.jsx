import React, { useState } from 'react';
import PropTypes from 'prop-types';

import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import DescriptionIcon from '@material-ui/icons/Description';
import ArchiveIcon from '@material-ui/icons/Archive';
// import EditIcon from '@material-ui/icons/Edit';
import VerifiedIcon from '@material-ui/icons/VerifiedUser';

import AppContextMenu from '../../../components/AppContextMenu';
import { POST_ACTIONS } from './reportedPostsHelper';

const ReportedPostContextMenus = ({ item, handleMenuClick }) => {
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
      <MenuItem
        onClick={(evt) => itemClick(evt, POST_ACTIONS.DETAILS)}
        className="contextMenuItem"
      >
        <ListItemIcon>
          <DescriptionIcon />
        </ListItemIcon>
        <ListItemText primary="DETAILS" />
      </MenuItem>
      {/* <MenuItem
        onClick={(evt) => itemClick(evt, POST_ACTIONS.EDIT)}
        className="contextMenuItem"
      >
        <ListItemIcon>
          <EditIcon />
        </ListItemIcon>
        <ListItemText primary="EDIT" />
      </MenuItem> */}
      {!item.isArchived && (
        <MenuItem
          onClick={(evt) => itemClick(evt, POST_ACTIONS.ARCHIVED)}
          className="contextMenuItem"
        >
          <ListItemIcon>
            <ArchiveIcon />
          </ListItemIcon>
          <ListItemText primary="DELETE" />
        </MenuItem>
      )}
      {item.isArchived && (
        <MenuItem
          onClick={(evt) => itemClick(evt, POST_ACTIONS.ACTIVATED)}
          className="contextMenuItem"
        >
          <ListItemIcon>
            <VerifiedIcon />
          </ListItemIcon>
          <ListItemText primary="ACTIVE" />
        </MenuItem>
      )}
    </AppContextMenu>
  );
};

ReportedPostContextMenus.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  handleMenuClick: PropTypes.func.isRequired
};

export default ReportedPostContextMenus;
