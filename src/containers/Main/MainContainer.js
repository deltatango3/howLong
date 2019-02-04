import React, { Component } from 'react';
import moment from 'moment';
import Main from '../../components/Main/Main';

const formatTime = time => {
  return time.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const MY_BIRTHDAY = formatTime(moment().diff('19870503', 'minutes'));

class MainContainer extends Component {
  state = {
    time: MY_BIRTHDAY,
    measurement: 'minutes'
  };

  componentDidMount() {
    setInterval(this.updateTime, this.state.measurement);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.measurement !== prevState.measurement) {
      setInterval(this.updateTime, this.state.measurement);
    }
  }

  updateTime = (measurement = this.state.measurement) => {
    const time = formatTime(moment().diff('19870503', measurement));
    this.setState({ time });
  };

  changeMeasurement = measurement => () => {
    this.setState({ measurement });
  };

  render() {
    return (
      <Main
        time={this.state.time}
        changeMeasurement={this.changeMeasurement}
        measurement={this.state.measurement}
      />
    );
  }
}

export default MainContainer;
