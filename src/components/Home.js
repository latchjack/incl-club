import React from 'react'

import logo from '../../src/assets/cic_land_black.svg'


const Home = () => (

  <section className="hero is-fullheight-with-navbar is-primary">
    <div className="hero-body">
      <div className="container">
        <p className="title is-1 has-text-centered" id="Hero_txt"><span className="logo-text"><img src={logo} alt="club logo" /></span></p>
      </div>
    </div>
  </section>
)

export default Home