import React from "react"

import Logo from "./logo"
import Navigation from "./navigation"
import SocialMedia from "./social-media"

const Footer = () => (
  <footer className="footer">
    <div className="footer__inner-wrapper">
      <Logo modifier="white" />
      <Navigation modifier="dark" />
      <SocialMedia />
    </div>
  </footer>
)

export default Footer
