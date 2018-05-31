import { hot } from 'react-hot-loader';
import * as React from 'react';

import launch from './assets/launch.json';
import launchSite from './assets/launch_site.json';
import rocket from './assets/rocket.json';
import LaunchDetails from 'view/LaunchDetails';

// import launches from './assets/launches.json';
import LaunchesList from 'view/LaunchesList';

import './styles/theme.sass';

let launches = [];

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      viewName: 'list',
      isLoading: false,
      error: null,
    };

    this.handleLaunchClick = this.handleLaunchClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch('https://api.spacexdata.com/v2/launches')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })

      .then(data => {launches = Object.assign(data)})
      .then(data => this.setState({isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  get activeViewComponent() {
    const { viewName } = this.state;

    switch (viewName) {
      case 'list':
        return (
          <LaunchesList
            launches={launches}
            onLaunchClick={this.handleLaunchClick}
          />
        );

      case 'details':
        return (
          <LaunchDetails
            launch={launch}
            launchSite={launchSite}
            rocket={rocket}
            onBackClick={this.handleBackClick}
          />
        );

      default: return null;
    }
  }

  handleLaunchClick() {
    this.setState({ viewName: 'details' });
  }

  handleBackClick() {
    this.setState({ viewName: 'list' });
  }

  render() {
    const { isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading ...</p>;
    }

    return (
      <main>
        {this.activeViewComponent}
      </main>
    );
  }
}
export default hot(module)(App);
