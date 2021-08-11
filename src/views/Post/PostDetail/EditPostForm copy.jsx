import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import {
  AppFormField,
  AppRadioBtnGroup
  // AppDateTimePicker
} from '../../../components/forms';
import { MEDIA_TYPE, POST_TYPE } from '../../../configs/contentConfig';
import EditPostContentCtrl from './EditPostContentCtrl';

import { editFormStyles } from './postDetailHelper';
import AppDefaultBtn from '../../../components/buttons/AppDefaultBtn';
import { isEmptyArray } from '../../../helpers/commonHelper';
import AppPrimaryBtn from '../../../components/buttons/AppPrimaryBtn';

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

function getPostToEdit(p) {
  const content = p.contents && p.contents.length > 0 ? p.contents[0] : null;

  return {
    postID: p.postID,
    title: p.title,
    description: p.postText,
    eventTime: p.eventTime,
    postMediaType: getPostMediaType(p.type),
    contents: !isEmptyArray(p.contents)
      ? p.contents.map((c) => ({
          ...content,
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

  const changeHandler = (name, value) => {
    setState((p) => ({
      ...p,
      [name]: value
    }));
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <AppFormField
          label="Title"
          value={state.title}
          name="title"
          changeHandler={changeHandler}
        />
      </Grid>

      <Grid item xs={12}>
        <AppFormField
          label="Description*(up to 500 words)"
          multiline
          rows={3}
          name="description"
          value={state.description}
          changeHandler={changeHandler}
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

      <EditPostContentCtrl
        contents={state.contents || []}
        postMediaType={state.postMediaType}
        onChange={(newContents) => {
          setState((p) => ({
            ...p,
            contents: newContents
          }));
        }}
      />

      {/* <Grid item xs={12}>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <AppDateTimePicker name="eventTime" label="Schedule at" />
        </Grid>
      </Grid> */}

      <Grid item xs={12}>
        <div className={classes.buttonContainer}>
          <AppDefaultBtn label="Cancel" clickHandler={handleEditCancel} />
          <AppPrimaryBtn
            label="Update Post"
            type="submit"
            clickHandler={onSubmit}
          />
        </div>
      </Grid>
    </Grid>
  );
};

EditPostForm.propTypes = {
  post: PropTypes.objectOf(PropTypes.any).isRequired,
  handleEditCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default EditPostForm;
