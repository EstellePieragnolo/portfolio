import React from "react";
import Menu from "./Menu";
import Letters from "./Letters";
import "./Home.scss";

export default class Home extends React.Component {

    render() {
        return (
            <div className="home">
                <Menu />
                <div className="homeName">
                    <div className="homeNameFirst">
                        <Letters letter="E" time={500} />
                        <Letters letter="S" time={700} />
                        <Letters letter="T" time={900} />
                        <Letters letter="E" time={1000} />
                        <Letters letter="L" time={1200} />
                        <Letters letter="L" time={1400} />
                        <Letters letter="E" time={1600} />
                    </div>
                    <div className="homeNameLast">
                        <Letters letter="P" time={2200} />
                        <Letters letter="I" time={2400} />
                        <Letters letter="E" time={2600} />
                        <Letters letter="R" time={2800} />
                        <Letters letter="A" time={3000} />
                        <Letters letter="G" time={3200} />
                        <Letters letter="N" time={3400} />
                        <Letters letter="O" time={3600} />
                        <Letters letter="L" time={3800} />
                        <Letters letter="O" time={4000} />
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
