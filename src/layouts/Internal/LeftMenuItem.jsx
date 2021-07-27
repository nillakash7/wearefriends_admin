import React, { useState } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/styles/makeStyles';
import { ListItem, Button, Collapse } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import AppLink from '../../components/AppLink';

const useStyles = makeStyles((theme) => ({
  item: {
    display: 'block',
    paddingTop: 0,
    paddingBottom: 0
  },
  itemLeaf: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    textAlign: 'left'
  },
  buttonLeaf: {
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightRegular,
    '&.depth-0': {
      fontWeight: theme.typography.fontWeightMedium
    }
  },
  icon: {
    color: theme.palette.icon,
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1)
  },
  expandIcon: {
    marginLeft: 'auto',
    height: 16,
    width: 16
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto'
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    '& $icon': {
      color: theme.palette.primary.main
    }
  },
  link: {
    width: '100%',
    textDecoration: 'none !important'
  }
}));

const LeftMenuItem = ({
  item,
  depth,
  children,
  className,
  open: openProp,
  ...rest
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(openProp);
  const { path, icon: Icon, label: Label, title } = item;

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  let paddingLeft = 8;

  if (depth > 0) paddingLeft = 32 + 8 * depth;

  const style = {
    paddingLeft
  };

  if (children) {
    return (
      <ListItem
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
        className={clsx(classes.item, className)}
        disableGutters
        key={title}
      >
        <Button className={classes.button} onClick={handleToggle} style={style}>
          {Icon && <Icon className={classes.icon} />}
          {title}
          {open ? (
            <ExpandLessIcon className={classes.expandIcon} color="inherit" />
          ) : (
            <ExpandMoreIcon className={classes.expandIcon} color="inherit" />
          )}
        </Button>
        <Collapse in={open}>{children}</Collapse>
      </ListItem>
    );
  }

  return (
    <ListItem
      className={clsx(classes.itemLeaf, className)}
      disableGutters
      key={title}
    >
      {item.isNewTab && (
        <AppLink url={path} target="_blank" className={classes.link}>
          <Button
            className={clsx(classes.buttonLeaf, `depth-${depth}`)}
            style={style}
          >
            {Icon && <Icon className={classes.icon} />}
            {title}
            {Label && (
              <span className={classes.label}>
                <Label />
              </span>
            )}
          </Button>
        </AppLink>
      )}

      {!item.isNewTab && (
        <Button
          activeClassName={classes.active}
          className={clsx(classes.buttonLeaf, `depth-${depth}`)}
          component={RouterLink}
          exact
          style={style}
          to={path}
          target={item.isNewTab ? '_blank' : ''}
        >
          {Icon && <Icon className={classes.icon} />}
          {title}
          {Label && (
            <span className={classes.label}>
              <Label />
            </span>
          )}
        </Button>
      )}
    </ListItem>
  );
};

// const itemShape = {
//   title: PropTypes.string,
//   path: PropTypes.string,
//   icon: PropTypes.node
// };

LeftMenuItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  depth: PropTypes.number.isRequired,
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  open: PropTypes.bool
};

LeftMenuItem.defaultProps = {
  open: false,
  children: undefined,
  className: ''
};

export default LeftMenuItem;
