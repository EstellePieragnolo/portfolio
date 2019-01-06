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
          <a href="#">ABOUT</a>
        </div>
        <div className="menuItems">
          <a href="#">EXPERIENCE</a>
        </div>
        <div className="menuItems">
          <a href="#">CONTACT</a>
        </div>
      </div>
    );
  }
}
