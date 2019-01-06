import React from "react";
import Menu from "./Menu";
import Letters from "./Letters";
import "./Home.scss";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { firstName: "pink", lastName: "green" };
  }

  render() {
    return (
      <div className="home">
        <Menu />
        <div className="homeName">
          <div className="homeNameFirst">
            <Letters letter="E" />
            <Letters letter="S" />
            <Letters letter="T" />
            <Letters letter="E" />
            <Letters letter="L" />
            <Letters letter="L" />
            <Letters letter="E" />
          </div>
          <div className="homeNameLast">
            <Letters letter="P" />
            <Letters letter="I" />
            <Letters letter="E" />
            <Letters letter="R" />
            <Letters letter="A" />
            <Letters letter="G" />
            <Letters letter="N" />
            <Letters letter="O" />
            <Letters letter="L" />
            <Letters letter="O" />
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
