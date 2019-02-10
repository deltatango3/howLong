import React, { Fragment } from 'react';
import { Button } from '@material-ui/core';

const UNITS = ['days', 'hours', 'minutes', 'seconds'];

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

const Main = props => {
  return (
    <Fragment>
      <h1>
        {props.time} {props.measurement}
      </h1>
      <div>{getButtons(props)}</div>
    </Fragment>
  );
};

export default Main;
