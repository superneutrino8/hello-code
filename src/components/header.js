import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./Header.css"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasScrolled: false
    }
  }

  handleScroll = e => {
    const scrollTop = window.pageYOffset

    this.setState({
      hasScrolled: scrollTop > 50 ? true : false
    })
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  render() {
    return (
      <div
        className={this.state.hasScrolled ? "Header HeaderScrolled" : "Header"}
      >
        <div className="HeaderGroup">
          <Link to="/">
            <img
              src={require("../images/logo-designcode.svg")}
              alt="HelloCode Logo"
            />
          </Link>
          <Link to="/courses">Courses</Link>
          <Link to="/downloads">Downloads</Link>
          <Link to="/workshops">Workshops</Link>
          <Link to="/buy">
            <button>Buy</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Header
