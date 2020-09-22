import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {


  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item has-text-white title" to="/">
              <div className="logo">
                <p className="title cic-logo">Chingford Inclusive Club</p>
              </div>
            </Link>
          </div>
            <div className="navbar-end">
              <Link className="navbar-item has-text-white title is-4" to="/about">About</Link>
              <Link className="navbar-item has-text-white title is-4" to="/team">Our Team</Link>
              <Link className="navbar-item has-text-white title is-4" to="/gallery">Gallery</Link>
              <Link className="navbar-item has-text-white title is-4" to="/contact">Contact</Link>
            </div>
          </div>
      </nav>
    )
  }
}

export default Navbar