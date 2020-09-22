import React from 'react'

class About extends React.Component {

  render() {
    return(
      <section className="section">
        <section className="section">
          <div className="container">
          <p className="title is-1 has-text-white has-text-centered">About</p>

            <div className="quote">
              <p>
                "The club started back in 2006 and came about after I delivered a series of athletic training sessions for young people with a disability. Waltham Forest Sports Development team, asked me to deliver a 6 week programme with athletes representing the borough at the London Youth Games.
              </p>
              <br/>
              <p>
                I took the group one step further and started a club for young people with a disability. I struggled to get the right venue and moved around the borough as the club grew and grew. We started at the Waltham Forest Pool and Track gym, then moved to Leyton Sixth Form for 2 years. From there we went to Leyton Score for 1 year, Davies Lane for 1 year, Lammas School for another and then on to Rushcroft School. After setting up at Rushcroft, 11 years later we're still here.
              </p>
              <br/>
              <p>That's the short version...</p>
              <br/>
              <p>
                We've had great help over the years from people such as the Chittocks (Kelly, Phil and Karen). Karen did a lot of great work for our club. Peter Burke coached with us for 2 years and then later went on to set up a club in Enfield. Two of our fantastic coaches, Julia and Leah are ex-students of Rushcroft School."
              </p>
              <div className="quoter">
                <p>- Chris Hodge (Founder)</p>
              </div>

            </div>
          </div>
        </section>
        <section className="section">
          <div class="container">
            <p className="title is-1 has-text-white has-text-centered">Sessions</p>


            <p className="center-this"><span className="sport subtitle is-4">Fridays:</span>16:30-18:00 - Multisports <span role="img" aria-label="basketball player">⛹🏽‍♂️</span></p>
            <p className="center-this"><span className="sport subtitle is-4">Saturdays:</span>13:00-14:30 - Football <span role="img" aria-label="football">⚽</span></p>
            <br/>
            <p className="subtitle is-5 has-text-white has-text-centered">Each session costs only £3 to attend</p>

            <p className="warning-msg">Please join the club's Whatsapp group via the Contact page for regular updates regarding our sessions</p>
          </div>
        </section>
      </section>
    )
  }
}

export default About