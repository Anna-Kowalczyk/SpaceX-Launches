import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header'
import InfoSection from '../components/InfoSection'
import LinksSection from '../components/LinksSection'
import Footer from '../components/Footer'

class LaunchDetails extends React.Component {
  static propTypes = {
    launch: PropTypes.object,
    launchSite: PropTypes.object,
    rocket: PropTypes.object,
    onBackClick: PropTypes.func,
  }
  render() {
    const { launch } = this.props;
    const { launchSite } = this.props;
    const { rocket } = this.props;
    const { onBackClick } = this.props;

    return (
      <div>
        <Header onBackClick={onBackClick}/>
        <InfoSection
          launch={launch}
          launchSite={launchSite}
          rocket={rocket}          
        />
        <LinksSection />
        <Footer />
      </div>
    );
  }
}

export default LaunchDetails;
