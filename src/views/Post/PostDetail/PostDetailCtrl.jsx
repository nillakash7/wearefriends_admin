import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import moment from 'moment';

import PostContentCtrl from './PostContentCtrl';

import { postCtrlStyles } from './postDetailHelper';
import LikeCtrl from '../components/LikeCtrl';
import { DEFAULT_DATE_FORMAT } from '../../../configs/appConfig';

const PostDetailCtrl = ({ post, toggleLike }) => {
  const classes = postCtrlStyles();

  return (
    <div className={classes.root}>
      <PostContentCtrl contents={post.contents} />

      {post.title && <Typography variant="h6">{post.title}</Typography>}

      {post.postText && (
        <Typography variant="body1">{post.postText}</Typography>
      )}

      {post.eventTime && (
        <Typography>
          Schedule at: {moment(post.eventTime).format(DEFAULT_DATE_FORMAT)}
        </Typography>
      )}

      <LikeCtrl
        isLiked={post.symbolID > 0}
        noOfLike={post.noOfLike}
        clickHandler={toggleLike}
      />
    </div>
  );
};

PostDetailCtrl.propTypes = {
  post: PropTypes.objectOf(PropTypes.any).isRequired,
  toggleLike: PropTypes.func.isRequired
};

export default PostDetailCtrl;
