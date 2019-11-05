import React from "react"

import Logo from "./logo"
import Navigation from "./navigation"
import LinkButton from "./link-button"

const Header = () => (
  <header className="header">
    <div className="header__inner-wrapper">
      <Logo />
      <Navigation />
      <div className="header__cta">
        <LinkButton url="/contact" text="Get in touch" modifier="cta" />
      </div>
    </div>
  </header>
)

export default Header
