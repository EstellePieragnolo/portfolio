import React from "react";
import Home from "../component/Home";
import "./index.scss";

export default class Index extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="containerOverlay">
                    <Home />
                </div>
            </div>
        );
    }
}
