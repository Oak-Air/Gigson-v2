import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo.svg"
import "./header.css"

const Header = ({ siteTitle }) => (
  <div className="Header">
  <Link to="/"><img alt="Gigson" className="logo" src={logo}/></Link>
  <ul className="NavItems">
    <li><Link activeClassName="activeLink" partiallyActive={true} to="#Testimonials">Testimonials</Link></li>
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
