import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Main from '../../components/Main/Main';

const formatTime = time => {
  return time.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const MY_BIRTHDAY = formatTime(moment().diff('1987-05-03', 'minutes'));

const MainContainer = () => {
  const [time, setTime] = useState(MY_BIRTHDAY);
  const [date, setDate] = useState('1987-05-03');
  const [measurement, setMeasurement] = useState('minutes');

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = formatTime(moment().diff(date, measurement));
      setTime(newTime);
    }, measurement);
    return () => clearInterval(timer);
  }, [measurement, date]);

  const changeMeasurement = unit => () => {
    setMeasurement(unit);
  };

  return (
    <Main
      time={time}
      date={date}
      setDate={setDate}
      measurement={measurement}
      changeMeasurement={changeMeasurement}
    />
  );
};

export default MainContainer;
