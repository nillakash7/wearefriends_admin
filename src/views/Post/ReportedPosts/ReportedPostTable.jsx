import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
// import { useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';

import AppTableCell from '../../../components/table/AppTableCell';
import { MEDIA_TYPE } from '../../../configs/contentConfig';
import ImgContent from '../../../components/templates/ImgContent';
import { pagingItems } from '../../../configs/appConfig';

import DotMenu from './ReportedPostContextMenus';
import { getMemberTableHeaders, tableStyles } from './reportedPostsHelper';

const ReportedPostTable = ({
  roleID,
  items,
  noOfTotalItems,
  className,
  keyAttr,
  pageNo,
  itemsPerPage,
  onPageSizeChanged,
  onPageNoChanged,
  handleMenuClick,
  handleRowClick
}) => {
  const classes = tableStyles();

  const getContentColumn = (item) => {
    // TODO
    if (!item.contents || item.contents.length === 0) return null;

    const firstContent = item.contents[0];
    if (firstContent.contentType === MEDIA_TYPE.IMG)
      return (
        <ImgContent
          className={classes.contentItem}
          img={{ title: '', url: firstContent.thumbUrl }}
        />
      );
    return null;
    // for (let i = 0; i < item.length; i+=1) {

    //   return <DotMenu item={item} handleMenuClick={handleMenuClick} />;
    // }
  };

  const getActionColumn = (item) => {
    return <DotMenu item={item} handleMenuClick={handleMenuClick} />;
  };

  const getCell = (h, item) => {
    let value = item[h.name];
    if (h.name === 'contents') value = getContentColumn(item);
    if (h.name === 'actions') value = getActionColumn(item);

    return (
      <AppTableCell
        key={`${item.memberID}_${h.name}`}
        type={h.type}
        value={value}
      />
    );
  };

  const headers = getMemberTableHeaders(roleID);

  return (
    <div className={clsx(classes.root, className)}>
      <Card>
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
            rowsPerPageOptions={pagingItems}
          />
        </CardActions>
        <CardContent className={classes.content}>
          <PerfectScrollbar>
            <div className={classes.inner}>
              <Table>
                <TableHead>
                  <TableRow>
                    {headers.map((h) => (
                      <AppTableCell
                        key={h.name}
                        type={h.type}
                        value={h.title}
                        isHeader
                      />
                    ))}
                  </TableRow>
                </TableHead>

                <TableBody>
                  {items.slice(0, itemsPerPage).map((item) => (
                    <TableRow
                      hover
                      key={item[keyAttr]}
                      className={handleRowClick ? 'cPointer' : ''}
                      onClick={() => {
                        if (handleRowClick) handleRowClick(item);
                      }}
                    >
                      {headers.map((h) => getCell(h, item))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </PerfectScrollbar>
        </CardContent>
      </Card>
    </div>
  );
};

ReportedPostTable.propTypes = {
  className: PropTypes.string,
  roleID: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.object),
  keyAttr: PropTypes.string.isRequired,
  pageNo: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  noOfTotalItems: PropTypes.number,
  onPageSizeChanged: PropTypes.func.isRequired,
  onPageNoChanged: PropTypes.func.isRequired,
  handleMenuClick: PropTypes.func.isRequired,
  handleRowClick: PropTypes.func
};

ReportedPostTable.defaultProps = {
  className: '',
  items: [],
  noOfTotalItems: 0,
  handleRowClick: () => {}
};

export default ReportedPostTable;
