import React from "react";
import "./Menu.scss";
import { Link } from '@reach/router'

export default class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <Link to="/">
          HOME
        </Link>
        <Link to="/about">
          ABOUT
        </Link>
        <Link to="/experience">
          EXPERIENCE
        </Link>
        <Link to="/contact">
          CONTACT
        </Link >
      </div >
    );
  }
}
