import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import moment from 'moment';
import TableCell from '@material-ui/core/TableCell';
import Avatar from '@material-ui/core/Avatar';

import { format2Decimal, format8Decimal } from '../../helpers/numberHelper';
import lookupHelper from '../../helpers/lookupHelper';
import { DEFAULT_DATE_FORMAT } from '../../configs/appConfig';
import AppLink from '../AppLink';

const AppTableCell = ({ type, value, isHeader, className }) => {
  const isNumber =
    type === 'decimal' || type === 'decimal8' || type === 'number';

  const alignClass = isNumber ? 'txtRight' : 'txtCenter';

  const countries = useSelector((state) => state.lookupData.countries);

  const getCountryColumn = (countryID) => {
    const country = countries.find((c) => c.value === countryID) || {};
    return (
      <div className="allCenter">
        {country && (
          <img
            src={country.url}
            width="24px"
            alt={country.text}
            className="mr2"
          />
        )}
        {country.text}
      </div>
    );
  };

  const getImgColumn = (imgUrl) => {
    return (
      <div className="allCenter">
        <Avatar
          alt=""
          style={{ cursor: 'pointer', width: 40, height: 40 }}
          src={imgUrl || ''}
        />
        {/* <LazyImgLoader src={imgUrl} width="24px" alt={country.text} className="mr2" /> */}
      </div>
    );
  };
  const getUrl = (url) => {
    if (!url) return '-';
    return <AppLink url={url} text={url} target="_blank" />;
  };

  const getContent = (_type, _value) => {
    if (_type === 'date' && _value)
      return moment(_value).format(DEFAULT_DATE_FORMAT);
    if (_type === 'decimal') return format2Decimal(_value);
    if (_type === 'decimal8') return format8Decimal(_value);
    if (_type === 'photo') return getImgColumn(_value);
    if (_type === 'country') return getCountryColumn(_value);
    if (_type === 'gender') return lookupHelper.getGenderText(_value);
    if (_type === 'url') return getUrl(_value);
    return _value;
  };

  return (
    <TableCell className={clsx(className, alignClass)}>
      {/* <Typography dangerouslySetInnerHTML={{ __html: children }} /> */}
      {isHeader && value}
      {!isHeader && getContent(type, value)}
      {/* {children} */}
    </TableCell>
  );
};

AppTableCell.propTypes = {
  className: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  type: PropTypes.any.isRequired,
  // type: PropTypes.oneOf([
  //   'number',
  //   'decimal',
  //   'decimal8',
  //   'string',
  //   'photo',
  //   'date',
  //   'gender',
  //   'country',
  //   'actions'
  // ]).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.any,
  isHeader: PropTypes.bool
  // children: PropTypes.node
};
AppTableCell.defaultProps = {
  className: '',
  value: '',
  isHeader: false
  // children: ''
};
export default AppTableCell;
