import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import TablePagination from '@material-ui/core/TablePagination';
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  Divider,
  Table,
  TableBody,
  TableRow,
  TableCell
} from '@material-ui/core';

import { pagingItems } from '../../config/appConfig';
import { tableStyles } from '../../helpers/commonStyles';
import AppTableCell from './AppTableCell';
import AppTableHead from './AppTableHead';
// import { getCountryIcon } from '../helpers/countryHelper';
// import SortableTableHead from './SortableTableHead';

const AppTableCtrl = ({
  headers,
  items,
  noOfTotalItems,
  className,
  keyAttr,
  pageNo,
  paging,
  itemsPerPage,
  onPageSizeChanged,
  onPageNoChanged,
  handleRowClick,
  sort,
  sortBy,
  sortHandler,
  isPagination = true,
  isClientPaging = false,
  ...rest
}) => {
  const classes = tableStyles();
  // const actions = headers.find((h) => h.isAction)
  //   ? headers.find((h) => h.isAction).name.split(',')
  //   : [];

  // const getCountryColumn = (cName) => {
  //   const cIcon = getCountryIcon(cName);
  //   return (
  //     <div className={classes.countryColumn}>
  //       {cIcon && <img src={cIcon} width="24px" alt={cName} className="mr1" />}
  //       {cName}
  //     </div>
  //   );
  // };

  // const getRankColumn = (rankID, rankName) => {
  //   const rIcon = getRankIcon(rankID);
  //   return (
  //     <div className={classes.countryColumn}>
  //       {rIcon && (
  //         <img src={rIcon} width="24px" alt={rankName} className="mr1" />
  //       )}
  //       {rankName}
  //     </div>
  //   );
  // };

  const getChild = (type, item, fName) => {
    const value = item[fName];
    if (value === undefined || value === null) {
      return type === 'string' ? '' : 0;
    }
    //if (fName === 'countryName') return getCountryColumn(value);
    //if (fName === 'rankName') return getRankColumn(item.rankID, value);
    return value;
  };

  const pagingOptions = paging || pagingItems;

  const startIndex = () => {
    return isClientPaging ? (pageNo - 1) * itemsPerPage : 0;
  };

  const endIndex = () => {
    if (!isClientPaging) {
      return isPagination ? itemsPerPage : items.length;
    }

    return pageNo * itemsPerPage;
  };

  // const getKey = (item, ka) => {
  //   return item[ka] ? item[ka] : uuid();
  // };

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Card>
        {isPagination && (
          <>
            <CardActions className={classes.actions}>
              <TablePagination
                component="div"
                count={noOfTotalItems}
                onChangePage={(_, page) => onPageNoChanged(page)}
                onChangeRowsPerPage={(event) =>
                  onPageSizeChanged(event.target.value)
                }
                page={pageNo - 1}
                rowsPerPage={itemsPerPage}
                rowsPerPageOptions={pagingOptions}
              />
            </CardActions>
            <Divider />
          </>
        )}
        <CardContent className={classes.content}>
          <PerfectScrollbar>
            <Table>
              <AppTableHead
                headers={headers}
                sort={sort}
                sortBy={sortBy}
                sortHandler={sortHandler}
              />

              <TableBody>
                {items.slice(startIndex(), endIndex()).map((item) => (
                  <TableRow
                    hover
                    key={item[keyAttr] ? item[keyAttr] : uuid()}
                    className={handleRowClick ? 'cPointer' : ''}
                    onClick={() => {
                      if (handleRowClick) handleRowClick(item);
                    }}>
                    {headers
                      .filter((h) => !h.isAction)
                      .map((h) => (
                        <AppTableCell
                          key={uuid()}
                          type={h.type}
                          child={getChild(h.type, item, h.name)}
                          className={h.className}
                        />
                      ))}
                    {/* {actions.length > 0 && (
                      <TableCell className="txtCenter" key={uuid()}>
                        {actions.includes('details') && (
                          <Button onClick={() => handleDetailClick(item)}>
                            View
                          </Button>
                        )}
                      </TableCell>
                    )} */}
                  </TableRow>
                ))}

                {items.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={headers.length}>
                      <Typography align="center">No record found</Typography>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </PerfectScrollbar>
        </CardContent>
      </Card>
    </div>
  );
};

AppTableCtrl.propTypes = {
  className: PropTypes.string,
  headers: PropTypes.arrayOf(PropTypes.object).isRequired,
  items: PropTypes.array.isRequired,
  keyAttr: PropTypes.string,
  itemsPerPage: PropTypes.number,
  noOfTotalItems: PropTypes.number,
  isPagination: PropTypes.bool,
  pageNo: PropTypes.number,
  paging: PropTypes.array,
  isClientPaging: PropTypes.bool,
  onPageSizeChanged: PropTypes.func,
  onPageNoChanged: PropTypes.func,
  handleRowClick: PropTypes.func,
  sort: PropTypes.oneOf(['asc', 'desc']),
  sortBy: PropTypes.string,
  sortHandler: PropTypes.func
};

AppTableCtrl.defaultProps = {
  noOfTotalItems: 0
};

export default AppTableCtrl;
