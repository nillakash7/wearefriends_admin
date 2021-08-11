import React, { useState } from 'react';
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
import { MEDIA_TYPE, POST_TYPE } from '../../../configs/contentConfig';
import EditPostContentCtrl from './EditPostContentCtrl';

import { editFormStyles } from './postDetailHelper';
import AppDefaultBtn from '../../../components/buttons/AppDefaultBtn';
import { isEmptyArray } from '../../../helpers/commonHelper';

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

function getPostMediaType(type) {
  if (type === POST_TYPE.ONLY_PHOTO) return MEDIA_TYPE.IMG;
  if (type === POST_TYPE.ONLY_VIDEO) return MEDIA_TYPE.VIDEO;
  if (type === POST_TYPE.ONLY_AUDIO) return MEDIA_TYPE.VOICE;
  return MEDIA_TYPE.NONE;
}

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

function getPostToEdit(p) {
  return {
    postID: p.postID,
    title: p.title,
    description: p.postText,
    eventTime: p.eventTime,
    postMediaType: getPostMediaType(p.type),
    contents: !isEmptyArray(p.contents)
      ? p.contents.map((c) => ({
          ...c,
          duration: c.durationInSec,
          url: c.contentUrl,
          mediaType: c.contentType
        }))
      : []
  };
}

const EditPostForm = ({ post, handleEditCancel, onSubmit }) => {
  const classes = editFormStyles();

  const [state, setState] = useState(getPostToEdit(post));

  return (
    <AppForm
      initValues={state}
      validationSchema={validationSchema}
      onSubmit={(values) => onSubmit(values)}
      onReset={() => {
        setState(getPostToEdit(post));
      }}
      className="mt2"
    >
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <AppFormField label="Title" name="title" />
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
            fieldName="postMediaType"
            label="Media you can add up to 5 media files" // or 1 link
            items={CONTENT_TYPES}
            clearFieldName="contents"
          />
        </Grid>

        <EditPostContentCtrl name="contents" />

        <Grid item xs={12}>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <AppDateTimePicker name="eventTime" label="Schedule at" />
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <div className={classes.buttonContainer}>
            <AppDefaultBtn label="Cancel" clickHandler={handleEditCancel} />
            <AppSubmitButton label="Update Post" />
          </div>
        </Grid>
      </Grid>
    </AppForm>
  );
};

EditPostForm.propTypes = {
  post: PropTypes.objectOf(PropTypes.any).isRequired,
  handleEditCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default EditPostForm;
