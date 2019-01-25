import React from "react";
import Home from "../component/Home";
import About from "../component/About";
import { Router } from "@reach/router"
import "./index.scss";

export default class Index extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="containerOverlay">
                    <Router>
                        <Home path="/" />
                        <About path="/about" />
                    </Router>
                </div>
            </div>
        );
    }
}
