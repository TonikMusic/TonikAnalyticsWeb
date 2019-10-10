import React from 'react';
import './Home.css';

import image from '../../assets/images/Image 2.png';


class Home extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="home__container">
        <h1>
          Welcome Back,
          <span> Jimmy</span>
          !
        </h1>
        <img src="https://randomuser.me/api/portraits/men/34.jpg" alt="#" />

        <div className="home__card_container">
          <div className="home__card">
            <h3>Top Song</h3>
            <div className="card_two_columns">
              <h1>Mister</h1>
            </div>
          </div>

          <div className="home__card">
            <h3>Top Album</h3>
            <div className="card_two_columns">
              <h1>Dream</h1>
            </div>
          </div>

          <div className="home__card">
            <h3>Total Fans</h3>
            <div className="card_two_columns">
              <h1>2,341</h1>
              <h2 style={{ color: 'green' }}>5%</h2>
            </div>
          </div>

          <div className="home__card">
            <h3>Monthly Revenue</h3>
            <div className="card_two_columns">
              <h1>$122</h1>
              <h2 style={{ color: 'red ' }}>15%</h2>
            </div>
          </div>
        </div>

        <div className="home__card_container">
          <div className="home__card">
            <h3>YouTube Subs</h3>
            <div className="card_two_columns">
              <h1>582</h1>
              <h2 style={{ color: 'green' }}>2%</h2>
            </div>
          </div>

          <div className="home__card">
            <h3>Twitter Followers</h3>
            <div className="card_two_columns">
              <h1>304</h1>
              <h2 style={{ color: 'green' }}>8%</h2>
            </div>
          </div>

          <div className="home__card">
            <h3>Spotify Followers</h3>
            <div className="card_two_columns">
              <h1>1,472</h1>
              <h2 style={{ color: 'red' }}>1%</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
