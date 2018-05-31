import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/_heroSection.sass';

class HeroSection extends React.Component {

  render() {
    return (
      <section className="section heroSection">
        <div className="heroImg">
          <img className="heroSection__logo" src={require('../img/space_x_logo_bw_centered.png')} alt={'SpaceX Logo'} />
        </div>
        <h2 className="header_sml">Mission Links</h2>
      </section>
    );
  }
}

export default HeroSection;
