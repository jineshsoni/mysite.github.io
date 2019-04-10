import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/me_icon.jpg`} alt="" />
      </Link>
      <header>
        <h2>Jinesh Soni</h2>
        <p><a href="mailto:hi@jineshsoni.com">hi@jineshsoni.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Jinesh. I like building things.
            I am a computer science graduate, working as team lead at <a href="http://thinkwik.com">Thinkwik</a>.
            Having a 4.5+ years of experince in delivering dream products for one who trusted me.
            I am a certified android developer, an intrapreneur, crypto enthusiast, learning hybrid application and machine learning.
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map(s => (
          <li key={s.label}><a href={s.link}><FontAwesomeIcon icon={s.icon} /></a></li>
        ))}
      </ul>
      <p className="copyright">&copy; 2019-2020 <Link to="/">jineshsoni.com</Link>.</p>
    </section>
  </section>
);

export default Nav;
