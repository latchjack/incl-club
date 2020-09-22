import React from 'react'

import map from '../../src/assets/club_map.png'


class Contact extends React.Component {

  render() {
    return(
      <section class="section">
        <div class="container">
          <h1 className="title is-1 has-text-white has-text-centered">Contact</h1>
          <div className="contact-blurb has-text-centered">
            <p>If you have any questions, please contact us via email. You are welcome to drop in for any of our sessions.</p>
            <p>For access to the club's Whatsapp group, please send us an email or request whilst attending a session.</p>
          </div>
          
          <div className="contact-location">
            <p className="info"><span className="contact-info subtitle is-4">Email: </span><a href="mailto:asc_ltd@hotmail.co.uk">asc_ltd@hotmail.co.uk</a></p>
            
            <p className="info"><span className="contact-info subtitle is-4">Address: </span>South Chingford Foundation School, Rushcroft Rd, London E4 8SG</p>
          </div>
          <img src={map} alt="map of club location" className="map" />
        </div>
      </section>
    )
  }
}

export default Contact