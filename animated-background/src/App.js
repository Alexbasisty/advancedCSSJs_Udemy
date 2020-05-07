import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Animated from "./Animated";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Animated
                    className="cloud"
                    src="/cloud.png"
                    ratioX="0.36"
                    ratioY="0.34"
                />
            </header>
        </div>
    );
}

export default App;
