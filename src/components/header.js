import React from "react"

import Logo from "./logo"
import Navigation from "./navigation"

const Header = () => (
  <header className="header">
    <div className="header__inner-wrapper">
      <Logo />
      <Navigation />
    </div>
  </header>
)

export default Header
