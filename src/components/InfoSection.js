import React from 'react';
import PropTypes from 'prop-types';

import {format, distanceInWordsToNow, differenceInMinutes} from '../../node_modules/date-fns'

import Counter from './Counter'

import '../styles/components/_infoSection.sass';

class InfoSection extends React.Component {

  render() {
    const { launch } = this.props;
    const { launchSite } = this.props;
    const { rocket } = this.props;

    return (
      <section className=" section container container--flex">

        <div className="col">
          <h3 className="basic_exp_semibold basic_exp_semibold--date">
            <div>{format(new Date(launch.launch_date_utc).toLocaleString("en-US", {timeZone: "America/New_York"}), 'DD MMMM YYYY')}</div>
          </h3>
          <h1 className="header_big">{launch.rocket.second_stage.payloads[0].payload_id} Launch</h1>
          <Counter from={differenceInMinutes(new Date(),new Date(launch.launch_date_local))} to={0}/>
          <img className="img-mission-patch" src={launch.links.mission_patch_small}/>
        </div>

        <div className="col">
          <div>
            <h3 className="basic_exp_semibold">Details</h3>
            <hr />
            <div className="container">
                <p>{launch.details}</p>
            </div>
          </div>

          <div className="container">
            <h3 className="basic_exp_semibold">Rocket</h3>
            <hr />
            <div className="container container--flex container--list">
              <div className="col col--list">

                <div className="container container--flex container--list">
                  <div className="list-item list-item--title">Name:</div>
                  <div className="list-item">{rocket.name}</div>
                </div>
                <div className="container container--flex container--list">
                  <div className="list-item list-item--title">Company:</div>
                  <div className="list-item">{rocket.company}</div>
                </div>
                <div className="container container--flex container--list">
                  <div className="list-item list-item--title">Height:</div>
                  <div className="list-item">{rocket.height.meters}m / {rocket.height.feet}ft</div>
                </div>
                <div className="container container--flex container--list">
                  <div className="list-item list-item--title">Diameter:</div>
                  <div className="list-item">{rocket.diameter.meters}m / {rocket.diameter.feet}ft</div>
                </div>
                <div className="container container--flex container--list">
                  <div className="list-item list-item--title">Mass:</div>
                  <div className="list-item">{rocket.mass.kg}kg / {rocket.mass.lb}lb</div>
                </div>

              </div>
              <div className="col col--list">
                <div className="container container--flex container--list">
                  <div className="list-item list-item--title">First Flight:</div>
                  <div className="list-item">{rocket.first_flight}</div>
                </div>
                <div className="container container--flex container--list">
                  <div className="list-item list-item--title">Country:</div>
                  <div className="list-item">{rocket.country}</div>
                </div>
                <div className="container container--flex container--list">
                  <div className="list-item list-item--title">Success Rate:</div>
                  <div className="list-item">{rocket.success_rate_pct}%</div>
                </div>
                <div className="container container--flex container--list">
                  <div className="list-item list-item--title">Cost Per Launch:</div>
                  <div className="list-item">${rocket.cost_per_launch}</div>
                </div>
              </div>
            </div>
            <p>{rocket.description}</p>
          </div>

          <div className="container">
            <h3 className="basic_exp_semibold">Launch Pad</h3>
            <hr />
            <div className="container container--flex container--list">
              <div className="col col--list">
                <div className="list-item container container--flex container--list">
                  <div className="list-item list-item--title">Name:</div>
                  <div className="list-item">{launchSite.full_name}</div>
                </div>
              </div>
              <div className="col col--list">
                <div className="list-item container container--flex container--list">
                  <div className="list-item list-item--title">Location:</div>
                  <div className="list-item">{launchSite.location.name}, {launchSite.location.region}</div>
                </div>
              </div>
            </div>
            <p>{launchSite.details}</p>
          </div>
        </div>

      </section>
    );
  }
}

export default InfoSection;
