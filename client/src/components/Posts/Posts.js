import React from 'react';
import Post from './post/post';
import useStyles from './styles';

import { useSelector } from 'react-redux';

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  console.log(posts);
  return (
    <React.Fragment>
      <h1>
        <Post />

        <Post />
      </h1>
    </React.Fragment>
  );
};

export default Posts;
