import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { IconButton, Menu } from '@material-ui/core';

import makeStyles from '@material-ui/styles/makeStyles';
import EmojiIcon from '../../../components/icons/EmojiIcon';

const useStyles = makeStyles((theme) => ({
  root: {},
  button: {
    width: '36px',
    height: '36px',
    padding: '5px',
    fontSize: '20px',
    transition: 'all 0.45s',
    borderRadius: '50%',
    '&:hover': {
      '& svg': {
        fill: theme.palette.primary.main
      }
    }
  }
}));

const EmojiCtrl = ({ className, clickHandler }) => {
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false);
  const emojiRef = useRef();
  const openEmojiDialog = () => {
    setIsOpen(true);
  };
  const closeEmojiDialog = () => {
    setIsOpen(false);
  };

  const emojiClickHandler = (emoji) => {
    setIsOpen(false);
    clickHandler(emoji);
  };

  const { reactions } = useSelector((state) => state.user);
  return (
    <>
      <IconButton
        className={clsx(classes.button, className)}
        ref={emojiRef}
        onClick={openEmojiDialog}
      >
        <EmojiIcon />
      </IconButton>
      <Menu
        anchorEl={emojiRef.current}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        classes={{ paper: classes.menu }}
        onClose={closeEmojiDialog}
        elevation={1}
        open={isOpen}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
      >
        {reactions &&
          reactions.map((r) => (
            <IconButton
              key={r.id}
              size="small"
              onClick={() => emojiClickHandler(r)}
            >
              {r.emoji}
            </IconButton>
          ))}
      </Menu>
    </>
  );
};

EmojiCtrl.propTypes = {
  className: PropTypes.string,
  clickHandler: PropTypes.func.isRequired
};

EmojiCtrl.defaultProps = {
  className: ''
};

export default EmojiCtrl;
