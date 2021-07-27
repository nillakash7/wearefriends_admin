import React, { useContext } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
import { InputAdornment, Grid } from '@material-ui/core';
import makeStyles from '@material-ui/styles/makeStyles';

import oActions from '../../redux/actions/otherActions';
import { AppForm, AppFormField } from '../../components/forms';

import { AppSearchBtn } from '../../components/searchCtrl';
import { ToasterContext } from '../../App';

export const containerStyles = makeStyles((theme) => ({
  container: {
    width: '60%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    width: '100%',
    marginTop: '-5px'
  },
  searchBox: {
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: '8px',
    '& .MuiInputBase-adornedStart': {
      height: 50
    }
  },
  buttonContainer: {
    marginTop: theme.spacing(2)
  },
  searchButton: {
    height: '50px !important',
    backgroundColor: theme.palette.primary.light
  }
}));

const GlobalSearch = ({ actions }) => {
  const classes = containerStyles();

  const { toaster } = useContext(ToasterContext);

  const onSearch = async (values) => {
    const { keyword } = values;
    if (!keyword || !keyword.trim()) return;
    const res = await actions.globalSearch(keyword.trim());
    if (!res.isSuccess) {
      toaster.error(res.message);
    }
    // TODO: popup
  };

  return (
    <>
      <div className={classes.container}>
        <AppForm
          className={classes.form}
          initValues={{ keyword: '' }}
          onSubmit={(values) => onSearch(values)}
          onReset={() => {}}
        >
          <Grid container spacing={3} className={classes.grid}>
            <Grid item xl={9} md={8} sm={9} xs={10}>
              <AppFormField
                isFullWidth
                name="keyword"
                placeholder="Search by roll, teacher, student, course"
                className={classes.searchBox}
                InputProps={{
                  'aria-label': 'search',
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon className="app-search-icon" />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid
              item
              xl={3}
              md={4}
              sm={3}
              xs={2}
              className={classes.buttonContainer}
            >
              <AppSearchBtn className={classes.searchButton} />
            </Grid>
          </Grid>
        </AppForm>
      </div>
    </>
  );
};
GlobalSearch.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func).isRequired
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      globalSearch: bindActionCreators(oActions.globalSearch, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalSearch);
