import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Avatar from '@material-ui/core/Avatar';

import makeStyles from '@material-ui/styles/makeStyles';
import { Typography } from '@material-ui/core';
import AppModal from '../../../components/dialogs/AppModal';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  thumbImg: {
    width: '40px',
    height: '40px',
    border: theme.palette.border.dark
  },
  name: {
    marginLeft: '10px'
  },
  lgImgContainer: {
    minWidth: '300px',
    textAlign: 'center'
  }
}));

// clickHandler
const ProfileCtrl = ({ name, thumbUrl, imgUrl, className }) => {
  const classes = useStyles();

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const imgClickHandler = () => {
    if (!imgUrl) return;

    setIsDialogOpen(true);
  };

  return (
    <>
      <div className={clsx(classes.root, className)}>
        <Avatar
          alt=""
          className={classes.thumbImg}
          style={{ cursor: imgUrl ? 'pointer' : 'auto' }}
          src={thumbUrl || ''}
          onClick={imgClickHandler}
        />
        <Typography className={classes.name}>{name}</Typography>
      </div>
      <AppModal
        title="Profile Picture"
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      >
        <div className={classes.lgImgContainer}>
          {imgUrl && <img src={imgUrl} alt={name} />}
        </div>
      </AppModal>
    </>
  );
};

ProfileCtrl.propTypes = {
  thumbUrl: PropTypes.string,
  imgUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  // clickHandler: PropTypes.func,
  className: PropTypes.string
  // children: PropTypes.node
};
ProfileCtrl.defaultProps = {
  thumbUrl: '',
  imgUrl: '',
  // clickHandler: () => {},
  className: ''
  // children: ''
};
export default ProfileCtrl;
