import React from 'react';
import PropTypes from 'prop-types';

import HeroSection from '../components/HeroSection'
import FilterButtons from '../components/FilterButtons'
import Footer from '../components/Footer'

import {format} from '../../node_modules/date-fns'
import './LaunchesList.sass';


class LaunchesList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      error: null,
      launchesFiltered: [],
      launches: [],
    };
  }

  state = {
    rocketNameFilter: '',
  }

  componentDidMount() {
    const {launches} = this.state;
    this.setState({ isLoading: true });

    fetch('https://api.spacexdata.com/v2/launches')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })

      .then(data => this.setState({isLoading: false, launches: Object.assign(data) }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  get availableRocketNames() {
    const {launches} = this.props;

    let rocketNames = [];
    for (var i = 0; i < launches.length; i++) {
      if (!rocketNames.includes(launches[i].rocket.rocket_name)) {
        rocketNames.push(launches[i].rocket.rocket_name);
      }
    }
    return rocketNames;
  }

  get filteredLaunches(){
    const {rocketNameFilter} = this.state;
    const {launches} = this.state;
    const {launchesFiltered} = this.state;

    console.log(rocketNameFilter);
    if(!rocketNameFilter) return launches;
    return launches;
  }

  handleFilterChange(value) {
    let {launches} = this.state;
    let {rocketNameFilter} = this.state;
    let {isLoading} = this.state;
    let rocketName = '';
    this.setState({ rocketNameFilter: value, isLoading: true });

    if (value) {rocketName = value.replace(" ", "%20");}

    console.log(rocketName);

    fetch('https://api.spacexdata.com/v2/launches?rocket_name='+rocketName)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })

      .then(data => this.setState({launches:  Object.assign(data),}))
      .then(data => this.setState({isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  handleClick = (e) => {
    let { onLaunchClick } = this.props;
    console.log("CLICK");
    onLaunchClick();
  };

  render() {
    const { isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading ...</p>;
    }
    return (
      <div className="launchesList">
        <HeroSection />
        <FilterButtons
          options={this.availableRocketNames}
          handleButtonsChange={this.handleFilterChange.bind(this)}
        />

        <div className="launch">
          {this.filteredLaunches.map(item => (
            <div className="launch__items" onClick={this.handleClick.bind(this)}>
              <div className="launch__item">
                <div className="list-item list-item--launch list-item--date">{format(new Date(item.launch_date_utc).toLocaleString("en-US", {timeZone: "America/New_York"}), 'DD MMMM YYYY')}</div>
                <hr className="launch__arrow"/>
                <span className="list-item list-item--launch"><span className="list-item list-item--launch list-item--title">Rocket: </span>{item.rocket.rocket_name}</span>
                <span className="list-item list-item--launch"><span className="list-item list-item--launch list-item--title"> | Launch Site: </span>{item.launch_site.site_name_long}</span>
              </div>
            </div>
          ))}
        </div>

        <Footer />
      </div>
    );
  }
}
export default LaunchesList;
