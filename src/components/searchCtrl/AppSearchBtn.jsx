import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import { useFormikContext } from 'formik';

const AppSearchBtn = ({ className }) => {
  const { handleSubmit } = useFormikContext();

  return (
    <Button
      size="large"
      color="primary"
      type="submit"
      variant="contained"
      className={`h55px mr2 ${className}`}
      onClick={handleSubmit}
    >
      <SearchIcon />
    </Button>
  );
};

AppSearchBtn.propTypes = {
  className: PropTypes.string
};

AppSearchBtn.defaultProps = {
  className: ''
};

export default AppSearchBtn;
