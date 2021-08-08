import React from 'react';
import Post from './post/post';
import useStyles from './styles';

import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';

const Posts = () => {
  const posts = useSelector((state) => state.posts);

  console.log(posts);

  const classes = useStyles();

  return (
    <React.Fragment>
      {!posts.length ? (
        <CircularProgress />
      ) : (
        <Grid container className={classes.container} alignItems='stretch'>
          {posts.map((post) => (
            <Grid key={post._id} xs={12} sm={6} item>
              <Post post={post} />
            </Grid>
          ))}
        </Grid>
      )}
    </React.Fragment>
  );
};

export default Posts;
