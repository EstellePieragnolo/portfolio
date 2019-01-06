import React from "react";

export default class Letters extends React.Component {
  constructor(props) {
    super(props);
    this.state = { firstName: "pink", lastName: "green" };
  }
  switchColor = e => {
    e.preventDefault();
    if (this.state.firstName === "pink") {
      this.setState({ firstName: "green" });
    } else {
      this.setState({ firstName: "pink" });
    }
    if (this.state.lastName === "green") {
      this.setState({ lastName: "pink" });
    } else {
      this.setState({ lastName: "green" });
    }
  };
  render() {
    return <div onMouseOver={this.switchColor}>{this.props.letter}</div>;
  }
}
