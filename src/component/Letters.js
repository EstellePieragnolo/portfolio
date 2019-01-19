import React from "react";
import "./Letters.scss";

export default class Letters extends React.Component {
    constructor(props) {
        super(props);
        this.state = { color: undefined, animate: undefined, start: "start" };
    }
    getRandomColor = () => {
        const colors = ["pink", "green", "blue", "darkGreen", "lightPink"];

        return colors[Math.floor(Math.random() * Math.floor(5))];
    };

    switchColor = () => {
        let newColor = this.getRandomColor();
        if (this.state.color === newColor) {
            do {
                newColor = this.getRandomColor();
                this.setState({ color: newColor });
            } while (this.state.color === newColor);
        } else this.setState({ color: newColor });
    };

    animateLetters(n) {
        setTimeout(() => {
            this.setState({ animate: "down", start: undefined });
        }, n);
    }

    render() {
        return (
            <div
                onMouseOver={this.switchColor}
                onLoad={this.animateLetters(this.props.time)}
                className={`letters ${this.state.color} ${this.state.start} ${this.state.animate}`}
            >
                {this.props.letter}
            </div>
        );
    }
}
