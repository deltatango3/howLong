import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Alive from '../../components/Alive/Alive';

const formatTime = time => {
  return time.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const MY_BIRTHDAY = formatTime(moment().diff('1987-05-03', 'seconds'));

const AliveContainer = () => {
  const [time, setTime] = useState(MY_BIRTHDAY);
  const [date, setDate] = useState('1987-05-03');
  const [measurement, setMeasurement] = useState('seconds');

  useEffect(() => {
    const timer = setInterval(() => {
      updateTime(date, measurement);
    }, getIntervalTiming());
    return () => clearInterval(timer);
  }, [measurement, date]);

  const updateTime = (date, measurement) => {
    const newTime = formatTime(moment().diff(date, measurement));
    setTime(newTime);
  };

  const getIntervalTiming = () => {
    if (measurement === 'seconds') {
      return 1000;
    } else if (measurement === 'hours') {
      return 1000 * 60 * 60;
    } else if (measurement === 'days') {
      return 1000 * 60 * 60 * 24;
    } else {
      return 1000 * 60;
    }
  };

  const changeMeasurement = unit => () => {
    setMeasurement(unit);
    updateTime(date, unit);
  };

  return (
    <Alive
      time={time}
      date={date}
      setDate={setDate}
      measurement={measurement}
      changeMeasurement={changeMeasurement}
    />
  );
};

export default AliveContainer;
