import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo.svg"
import "./header.css"

const Header = ({ siteTitle }) => (
  <div className="Header">
  <img alt="Gigson" className="logo" src={logo}/>
  <ul className="NavItems">
  <li><Link to="#Testimonials">Testimonials</Link></li>
  <li><a href="https://gigson.co/jobs">Find a job</a></li>
  <li><a href="https://devcenter.drift.help/">FAQs</a></li>
  </ul>

  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
