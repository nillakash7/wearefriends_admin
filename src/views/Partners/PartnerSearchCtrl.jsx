import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import { searchPanelStyles } from '../../helpers/commonStyles';

import {
  AppForm,
  AppDatePicker,
  AppFormField,
  AppFormPicker
} from '../../components/forms';
import { AppSearchBtn, AppResetBtn } from '../../components/searchCtrl';
import { initSearchValues } from './plHelper';
import lookupHelper from '../../helpers/lookupHelper';

const PartnerSearchCtrl = ({ onSearch, onReset }) => {
  const classes = searchPanelStyles();
  const companyCategories = lookupHelper.getCompanyCategories();

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
          <AppFormPicker
            label="Category"
            name="categoryID"
            options={companyCategories || []}
          />
        </Grid>
        <Grid item md={2} sm={6} xs={12}>
          <AppFormField label="Email/Website" name="keyword" />
        </Grid>

        <Grid
          item
          xl={3}
          lg={4}
          sm={6}
          xs={12}
          className={classes.buttonContainer}
        >
          <AppSearchBtn />

          <AppResetBtn />
        </Grid>
      </Grid>
    </AppForm>
  );
};

PartnerSearchCtrl.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired
};

export default PartnerSearchCtrl;
