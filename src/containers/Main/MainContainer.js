import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Main from '../../components/Main/Main';

const formatTime = time => {
  return time.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const MY_BIRTHDAY = formatTime(moment().diff('19870503', 'minutes'));

const MainContainer = () => {
  const [time, setTime] = useState(MY_BIRTHDAY);
  const [measurement, setMeasurement] = useState('minutes');

  useEffect(() => {
    const timer = setInterval(() => {
      const time = formatTime(moment().diff('19870503', measurement));
      setTime(time);
    }, measurement);
    return () => clearInterval(timer);
  }, [measurement]);

  const changeMeasurement = unit => () => {
    setMeasurement(unit);
  };

  return (
    <Main
      time={time}
      measurement={measurement}
      changeMeasurement={changeMeasurement}
    />
  );
};

export default MainContainer;
