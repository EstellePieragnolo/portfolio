import React from "react";
import Menu from "./Menu";
import "./Home.scss";

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Menu />
        <div className="homeName">
          <div className="homeNameFirst">
            <span>E</span>
            <span>S</span>
            <span>T</span>
            <span>E</span>
            <span>L</span>
            <span>L</span>
            <span>E</span>
          </div>
          <div className="homeNameLast">
            <span>P</span>
            <span>I</span>
            <span>E</span>
            <span>R</span>
            <span>A</span>
            <span>G</span>
            <span>N</span>
            <span>O</span>
            <span>L</span>
            <span>O</span>
          </div>
        </div>
        <div className="homeIntro">
          <p className="homeIntroItems">Junior Front End developer </p>
          <p className="homeIntroItems">HTML, CSS, JavaScript, React JS </p>
          <p className="homeIntroItems">
            Love learning <span>&amp;</span> coding
          </p>
        </div>
      </div>
    );
  }
}
