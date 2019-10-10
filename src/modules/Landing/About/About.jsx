import React from 'react';
import './About.css';

import { Link } from 'react-router-dom';

import AboutImg from '../../../assets/images/About_Image.jpg';

function About() {
  return (
    <div className="about__container" id="about">
      <h1>What We Do</h1>
      <div id="about__two_columns">
        <div className="about__column_left">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacus elit,
            porttitor eu purus at, ultricies blandit felis. Vestibulum eu consequat libero,
             ut feugiat nibh. Duis eget nunc convallis, tempor neque nec, semper orci. Ut magna
             dui, sagittis viverra turpis a, ultrices congue arcu. Praesent feugiat, metus a
             egestas finibus, risus orci maximus risus, nec tempor quam dolor vel nisl.
             Suspendisse volutpat viverra justo sit amet scelerisque.
            <span>
              <Link to="/soon"> Learn More</Link>
            </span>
          </p>
        </div>
        <div className="about__column_right">
          <img src={AboutImg} alt="#" />
        </div>
      </div>
    </div>
  );
}

export default About;
