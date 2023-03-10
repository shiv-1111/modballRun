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
    <nav className="navbar navbar-expand navbar-light">
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
          <ul className="navbar-nav me-auto mb-2 mb-md-0 d-flex w-100 justify-content-center gap-md-5 gap-2 py-3 px-md-5">
            <li className="nav-item text-center fw-bold">
              <ExactNavLink to="/">Home</ExactNavLink>
            </li>
            <li className="nav-item text-center fw-bold">
              <ExactNavLink to="/tour">Tour</ExactNavLink>
            </li>
            <li className="nav-item fw-bold text-center">
              <ExactNavLink to="/participant">Participant</ExactNavLink>
            </li>
            <li className="nav-item fw-bold text-center">
              {/* <ExactNavLink to="/shop">Shop</ExactNavLink> */}
              <a href="https://www.modcrew.in" className="text-decoration-none">
                Shop
              </a>
            </li>
            <li className="nav-item fw-bold text-center">
              <ExactNavLink to="/contact">Contact</ExactNavLink>
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
