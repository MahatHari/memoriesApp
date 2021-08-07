import React from 'react';
import useStyles from './styles';
import { TextField, Butoon, Typography, Paper } from '@material-ui/core';

const Form = () => {
  const classes = useStyles();
  const handleSubmit = () => {};
  return (
    <Paper
      autocomplete='off'
      novalidate
      className={classes.form}
      onSubmit={handleSubmit}
    >
      <Typography variant='h6'>Creating a Memory</Typography>
    </Paper>
  );
};

export default Form;
