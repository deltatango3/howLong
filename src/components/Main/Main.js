import React, { Fragment } from 'react';
import { Button, Grid } from '@material-ui/core';

const DAYS = 'days';
const HOURS = 'hours';
const MINUTES = 'minutes';
const SECONDS = 'seconds';

const Main = props => {
  const disabledButton = unit => {
    if (props.measurement === unit) {
      return true;
    }
    return false;
  };
  return (
    <Fragment>
      <h1>
        {props.time} {props.measurement}
      </h1>
      <div>
        <Grid container spacing="16">
          <Grid item>
            <Button
              color="primary"
              variant="contained"
              onClick={props.changeMeasurement(DAYS)}
              disabled={disabledButton(DAYS)}
            >
              Days
            </Button>
          </Grid>
          <Grid item>
            <Button
              color="primary"
              variant="contained"
              onClick={props.changeMeasurement(HOURS)}
              disabled={disabledButton(HOURS)}
            >
              Hours
            </Button>
          </Grid>
          <Grid item>
            <Button
              color="primary"
              variant="contained"
              onClick={props.changeMeasurement(MINUTES)}
              disabled={disabledButton(MINUTES)}
            >
              Minutes
            </Button>
          </Grid>
          <Grid item>
            <Button
              color="primary"
              variant="contained"
              onClick={props.changeMeasurement(SECONDS)}
              disabled={disabledButton(SECONDS)}
            >
              Seconds
            </Button>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
};

export default Main;
