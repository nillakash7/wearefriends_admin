import React from 'react';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import Grid from '@material-ui/core/Grid';

import {
  AppRadioBtnGroup,
  AppForm,
  AppFormField,
  AppDateTimePicker,
  AppSubmitButton
} from '../../../components/forms';
import { MEDIA_TYPE } from '../../../configs/contentConfig';
import AddPostContentCtrl from './AddPostContentCtrl';
import { addFormStyles } from './addPostHelper';

const CONTENT_TYPES = [
  {
    value: MEDIA_TYPE.IMG,
    title: 'Image'
  },
  {
    value: MEDIA_TYPE.VIDEO,
    title: 'Video'
  }
  // {
  //   value: POST_CONTENT_TYPE.LINK,
  //   title: 'Media Link (youtube, vimeo.. etc)'
  // }
];

const initValues = {
  description: '',
  contentType: MEDIA_TYPE.IMG,
  contents: [],
  eventTime: null
};

const validationSchema = yup.object(
  {
    title: yup.string().label('Title'),
    description: yup.string().when('contents', {
      is: (contents) => !contents || contents.length === 0,
      then: yup.string().min(1).required(),
      otherwise: yup.string()
    }),
    contents: yup.array().when('description', {
      is: (description) => !description || description.length === 0,
      then: yup
        .array()
        .of(
          yup.object().shape({
            url: yup.string().required(),
            contentType: yup.string().required()
          })
        )
        .min(1)
        .max(5),
      otherwise: yup.array()
    })
  }[['description', 'contents']]
);

const AddPostForm = ({ onSubmit }) => {
  const classes = addFormStyles();

  return (
    <AppForm
      initValues={initValues}
      validationSchema={validationSchema}
      onSubmit={(values) => onSubmit(values)}
      className="mt2"
    >
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <AppFormField label="Title" name="title" rows={3} />
        </Grid>

        <Grid item xs={12}>
          <AppFormField
            label="Description*(up to 500 words)"
            name="description"
            multiline
            rows={3}
          />
        </Grid>

        <Grid item xs={12}>
          <AppRadioBtnGroup
            fieldName="contentType"
            label="Media you can add up to 5 media files" // or 1 link
            items={CONTENT_TYPES}
            clearFieldName="contents"
          />
        </Grid>

        <AddPostContentCtrl name="contents" />

        <Grid item xs={12}>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <AppDateTimePicker name="eventTime" label="Schedule at" />
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <div className={classes.buttonContainer}>
            <AppSubmitButton label="Save Post" />
          </div>
        </Grid>
      </Grid>
    </AppForm>
  );
};

AddPostForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default AddPostForm;
