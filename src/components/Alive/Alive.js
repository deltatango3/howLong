import React, { useState } from 'react';
import { Button, Grid, TextField, Typography } from '@material-ui/core';

const UNITS = ['seconds', 'minutes', 'hours', 'days'];

const getButtons = props => {
  return UNITS.map(unit => {
    const disabledButton = unit === props.measurement ? true : false;
    return (
      <Button
        key={unit}
        color="primary"
        variant="contained"
        onClick={props.changeMeasurement(unit)}
        disabled={disabledButton}
      >
        {unit}
      </Button>
    );
  });
};

const Alive = props => {
  const [value, setValue] = useState(props.date);

  const handleChange = input => {
    const date = input.target.value;
    setValue(date);
    props.setDate(date);
  };

  return (
    <Grid container direction="column" align="center" spacing={32}>
      <Grid item>
        <Typography variant="h3">
          {props.time} {props.measurement}
        </Typography>
      </Grid>
      <Grid item>{getButtons(props)}</Grid>
      <Grid item>
        <TextField
          id="date"
          label="Birthday"
          type="date"
          defaultValue={value}
          onChange={handleChange}
        />
      </Grid>
    </Grid>
  );
};

export default Alive;
