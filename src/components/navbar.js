import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../styles/navbar.scss"

const isActive = ({ isCurrent }) => {
  return isCurrent
    ? { className: "nav-link active" }
    : { className: "nav-link" }
}

const ExactNavLink = props => <Link getProps={isActive} {...props} />

const Navbar = ({ siteTitle }) => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container-fluid">
        {/* <Link to="/" className="navbar-brand d-md-none" href="#">
          {siteTitle}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-navbar"
          aria-controls="main-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}

        <div className="collapse navbar-collapse" id="main-navbar">
          <ul className="navbar-nav me-auto mb-2 mb-md-0 d-flex w-100 justify-content-center gap-5 py-3 px-md-5 bg-dark">
            <li className="nav-item bg-light text-center">
              <ExactNavLink to="/">Home</ExactNavLink>
            </li>
            <li className="nav-item bg-light text-center p-0">
              <ExactNavLink to="/about">Tour</ExactNavLink>
            </li>
            <li className="nav-item bg-light text-center">
              <ExactNavLink to="/about">Participant</ExactNavLink>
            </li>
            <li className="nav-item bg-light text-center">
              <ExactNavLink to="/about">Shop</ExactNavLink>
            </li>
            <li className="nav-item bg-light text-center">
              <ExactNavLink to="/about">Contact</ExactNavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
