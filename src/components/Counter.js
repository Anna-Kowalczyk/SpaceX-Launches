import * as React from 'react';
import PropTypes from 'prop-types';

function dateStringFromSec(mins) {
  let isValid = (typeof mins === "number") && (mins >= 0);

  if (!isValid) {
    throw new Error("Invalid format")
  }

  let result = undefined;

  let days = Math.floor(mins/1440)
  let hours = Math.floor((mins % 1440)/60);
  let minutes = Math.floor(mins % 60);

  let daysStr = days < 10 ? `0${days}` : `${days}`;
  let hoursStr = hours < 10 ? `0${hours}` : `${hours}`;
  let minutesStr = minutes < 10 ? `0${minutes}` : `${minutes}`;

  result = `${daysStr} days ${hoursStr} hrs ${minutesStr} mins from start`;

  return result;
}

class Counter extends React.Component {
  static propTypes = {
    from: PropTypes.number,
    to: PropTypes.number,
    onSuccess: PropTypes.func
  }

  static defaultProps = {
    from: 70,
    to: 16
  }

  constructor(props) {
    super(props)

    this.state = {
      from: props.from,
      to: props.to
    }
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount () {
      this.stopTimer();
  }

  tick () {
    if (this.state.from > this.state.to ) {
      this.setState({from: (this.state.from + 1)})
    } else {
      this.stopTimer();

      if (this.props.onSuccess) {
        this.props.onSuccess();
      }
    }
  }

  startTimer () {
    this.stopTimer();
    this.timer = setInterval(this.tick.bind(this),60000);
  }

  stopTimer () {
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.timer = undefined;
   }

   toggleTimer() {
     if (this.timer === undefined){
       this.startTimer()
     } else {
       this.stopTimer()
     }
   }

  render() {
    return (
      <div>
        <div
          className="counter"
          onClick={this.toggleTimer.bind(this)}
        >
          {dateStringFromSec(this.state.from)}
        </div>
      </div>
    );
  }
}

export default Counter;
