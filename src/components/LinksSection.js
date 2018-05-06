import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/_linksSection.sass';

class LinksSection extends React.Component {

  render() {
    return (
      <section className="section linksSection">
        <div className="container container--linksSection">
          <h2 className="header_sml_semibold">Mission Links</h2>
          <div className="btns-collection">
            <a className="btn" href="#">Reddit Campaign</a>
            <a className="btn" href="#">Presskit</a>
            <a className="btn" href="#">Mission Video</a>
          </div>
        </div>
      </section>
    );
  }
}

export default LinksSection;
