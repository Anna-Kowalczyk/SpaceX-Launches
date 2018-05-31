import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/_heroSection.sass';

class FilterButtons extends React.Component {

  onButtonsChange = (e) => {
    let { handleButtonsChange, option} = this.props;
    option = e.currentTarget.text;
    handleButtonsChange(option);
  };

  onAllRocketsClick = (e) => {
    let { handleButtonsChange, option} = this.props;
    option = false;
    handleButtonsChange(option);
  };

  render() {
    const {options} = this.props;
    return (
      <section className="section heroSection">
        <div className="btns-collection">
          <a className="btn" onClick={this.onAllRocketsClick}>All Rockets</a>
          {options.map(option => (
            <a className="btn" onClick={this.onButtonsChange}>
              {option}
            </a>
          ))}
        </div>
      </section>
    );
  }
}

export default FilterButtons;
