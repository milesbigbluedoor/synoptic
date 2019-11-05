import React from "react"
import { Link } from "gatsby"

const Navigation = () => (
  <nav className="navigation">
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
