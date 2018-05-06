import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/_footer.sass';

class Footer extends React.Component {
  render() {
    return (
      <section className="section footer">

        <div className="container container--flex container--footerSection">
          <span className="footer__item">Follow Spacex</span>

          <nav className="nav">
            <ul className="nav__list">
              <li><a className="social-link" href="#">Twitter</a></li>
              <li><a className="social-link" href="#">Youtube</a></li>
              <li><a className="social-link" href="#">Flickr</a></li>
              <li><a className="social-link" href="#">Instagram</a></li>
            </ul>
          </nav>
        </div>

        <span>2018 Space Exploration Technologies Corp.</span>

      </section>
    );
  }
}

export default Footer;
