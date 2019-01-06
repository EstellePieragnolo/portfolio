import React from "react";
import "./Menu.scss";

export default class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <div className="menuItems">
          <a href="#homepage">HOME</a>
        </div>
        <div className="menuItems">
          <a href="#about">ABOUT</a>
        </div>
        <div className="menuItems">
          <a href="#exp">EXPERIENCE</a>
        </div>
        <div className="menuItems">
          <a href="#contact">CONTACT</a>
        </div>
      </div>
    );
  }
}
