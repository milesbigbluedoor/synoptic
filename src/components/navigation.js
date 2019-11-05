import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Navigation = ({ modifier }) => (
  <nav className={`navigation ${modifier ? `navigation--${modifier}` : ""}`}>
    <ul className="navigation__menu">
      <li className="navigation__menu-item">
        <Link
          to="/"
          className="navigation__menu-item-link"
          activeClassName="navigation__menu-item-link--active"
        >
          Home
        </Link>
      </li>
      <li className="navigation__menu-item">
        <Link
          to="/photos"
          className="navigation__menu-item-link"
          activeClassName="navigation__menu-item-link--active"
        >
          Photo Catalogue
        </Link>
      </li>
      <li className="navigation__menu-item">
        <Link
          to="/about"
          className="navigation__menu-item-link"
          activeClassName="navigation__menu-item-link--active"
        >
          About Me
        </Link>
      </li>
      <li className="navigation__menu-item">
        <Link
          to="/blog"
          className="navigation__menu-item-link"
          activeClassName="navigation__menu-item-link--active"
        >
          Blog
        </Link>
      </li>
      <li className="navigation__menu-item">
        <Link
          to="/contact"
          className="navigation__menu-item-link"
          activeClassName="navigation__menu-item-link--active"
        >
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navigation

Navigation.propTypes = {
  modifier: PropTypes.string,
}

Navigation.defaultProps = {
  modifier: "",
}
