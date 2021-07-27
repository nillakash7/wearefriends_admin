import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import AppPrimaryBtn from '../buttons/AppPrimaryBtn';

function ViewHeader({ title, description, btnTxt, btnClickHandler }) {
  return (
    <>
      <div className="justify">
        {title && (
          <Typography component="h1" variant="h3">
            {title}
          </Typography>
        )}
        {btnTxt && (
          <AppPrimaryBtn label={btnTxt} clickHandler={btnClickHandler} />
        )}
      </div>
      {description && (
        <Typography
          component="p"
          align="justify"
          className="mt2"
          variant="subtitle1"
        >
          {description}
        </Typography>
      )}
    </>
  );
}

ViewHeader.propTypes = {
  title: PropTypes.string,
  btnTxt: PropTypes.string,
  description: PropTypes.string,
  btnClickHandler: PropTypes.func
};

ViewHeader.defaultProps = {
  title: '',
  btnTxt: '',
  description: '',
  btnClickHandler: undefined
};
export default ViewHeader;
