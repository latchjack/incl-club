import React from 'react'
import 'bulma'

import chris from '../../src/assets/chris.png'
import leah from '../../src/assets/leah.png'
import jules from '../../src/assets/jules.png'

class Team extends React.Component {

  render() {
    return(
      <section className="section">
        <div className="container">
          <h1 className="title is-1 has-text-white has-text-centered">Our team</h1>

          <div className="columns">
            <div className="columns is-half-desktop is-full-tablet is-full-mobile">

              <div className="card">
                <div className="card-header staff-header">
                  <h3 className="subtitle is-3">Chris Hodge</h3>
                  <h4 className="subtitle is-4">Founder &amp; Head Coach</h4>
                </div>
                <img src={chris} alt="staff" className="staff-pics" />
              </div>

              <div className="card">
                <div className="card-header staff-header">
                  <h3 className="subtitle is-3">Leah</h3>
                  <h4 className="subtitle is-4">Football Coach</h4>
                </div>
                <img src={leah} alt="staff" className="staff-pics" />
              </div>

              <div className="card">
                <div className="card-header staff-header">
                  <h3 className="subtitle is-3">Julia</h3>
                  <h4 className="subtitle is-4">Multi-sports Coach</h4>
                </div>
                <img src={jules} alt="staff" className="staff-pics" />
              </div>

            </div>
          </div>
        </div>
      </section>

    )
  }
}

export default Team