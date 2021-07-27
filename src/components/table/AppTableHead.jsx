import React from 'react';
import PropTypes from 'prop-types';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';

import { makeStyles } from '@material-ui/core/styles';
import AppTableCell from './AppTableCell';

const useStyles = makeStyles((theme) => ({
  // root: {
  //   width: '100%'
  // },
  // paper: {
  //   width: '100%',
  //   marginBottom: theme.spacing(2)
  // },
  // table: {
  //   minWidth: 750
  // },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1
  }
}));

const AppTableHead = (props) => {
  const { headers, sort, sortBy, sortHandler } = props;

  const classes = useStyles();
  const onSortClick = (property) => (_) => {
    sortHandler(property);
  };

  return (
    <TableHead>
      <TableRow>
        {headers.map((header) => (
          <AppTableCell
            key={header.name}
            type={header.type}
            child={header.title}
            className={header.className}
            sortDirection={sortBy === header.sortBy ? sort : false}>
            {header.isSortable && (
              <TableSortLabel
                active={sortBy === header.sortBy}
                direction={sortBy === header.sortBy ? sort : 'asc'}
                onClick={onSortClick(header.sortBy)}>
                {sortBy === header.sortBy ? (
                  <span className={classes.visuallyHidden}>
                    {sort === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </span>
                ) : null}
              </TableSortLabel>
            )}
          </AppTableCell>
        ))}
        {/* {headers.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={sortBy === headCell.id ? order : false}>
           
          </TableCell>
        ))} */}
      </TableRow>
    </TableHead>
  );
};

AppTableHead.propTypes = {
  headers: PropTypes.array.isRequired,
  sortHandler: PropTypes.func,
  sort: PropTypes.oneOf(['asc', 'desc']),
  sortBy: PropTypes.string
};

export default AppTableHead;
