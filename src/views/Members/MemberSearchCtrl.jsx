import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import { searchPanelStyles } from '../../helpers/commonStyles';

import {
  AppForm,
  AppDatePicker,
  AppFormField,
  AppAutoComplete,
  AppFormPicker
} from '../../components/forms';
import { AppSearchBtn, AppResetBtn } from '../../components/searchCtrl';
import { initSearchValues } from './mlHelper';

const memberTypes = [
  {
    value: 0,
    text: 'All'
  },
  {
    value: 1,
    text: 'Invited'
  },
  {
    value: 2,
    text: 'Not Invited'
  }
];

const MemberSearchCtrl = ({ countries, onSearch, onReset }) => {
  const classes = searchPanelStyles();

  return (
    <AppForm
      initValues={initSearchValues}
      onSubmit={(values) => onSearch(values)}
      onReset={(values) => onReset(values)}
    >
      <Grid container spacing={3}>
        <Grid item md={2} sm={6} xs={12}>
          <AppDatePicker label="Start Date" name="startDate" />
        </Grid>

        <Grid item md={2} sm={6} xs={12}>
          <AppDatePicker label="End Date" name="endDate" />
        </Grid>

        <Grid item md={2} sm={6} xs={12}>
          <AppAutoComplete
            label="Country"
            name="countryID"
            options={countries}
          />
        </Grid>
        <Grid item md={2} sm={6} xs={12}>
          <AppFormPicker
            label="Member Type"
            name="memberType"
            options={memberTypes}
          />
        </Grid>
        <Grid item md={2} sm={6} xs={12}>
          <AppFormField label="Username/Email" name="keyword" />
        </Grid>

        <Grid item md={2} sm={6} xs={12} className={classes.buttonContainer}>
          <AppSearchBtn />

          <AppResetBtn />
        </Grid>
      </Grid>
    </AppForm>
  );
};

MemberSearchCtrl.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSearch: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired
};

export default MemberSearchCtrl;
