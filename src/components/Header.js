import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/_header.sass';

class Header extends React.Component {
  handleClick = (e) => {
    let { onBackClick } = this.props;
    onBackClick();
  };

  render() {
    return (
      <section className="header">
        <a className="header__btn" onClick={this.handleClick.bind(this)}>
          <img className="header__arrow" src={require('../img/arrow.png')}/>
          <span className="basic_exp_semibold">Go Back</span>
        </a>
        <img className="header__logo" src={require('../img/space_x_logo_bw_centered.png')} alt={'SpaceX Logo'} />
      </section>
    );
  }
}

export default Header;
