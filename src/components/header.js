import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from "./logo"
// import Navigation from "./navigation"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="header__inner-wrapper">
      <Logo />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
