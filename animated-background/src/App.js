import React from "react";
import "./App.css";
import Animated from "./Animated";

function App() {
    return (
        <div className="App">
            <div className="balloon-animation">
                <Animated
                    className="cloud"
                    src="/cloud.png"
                    ratioX="0.23"
                    ratioY="0.2"
                />{" "}
                <Animated
                    className="cloud"
                    src="/cloud.png"
                    ratioX="0.34"
                    ratioY="0.26"
                />{" "}
                <Animated
                    className="cloud"
                    src="/cloud.png"
                    ratioX="0.11"
                    ratioY="0.1"
                />{" "}
                <Animated
                    className="cloud"
                    src="/cloud.png"
                    ratioX="0.53"
                    ratioY="0.13"
                />{" "}
                <Animated
                    className="cloud"
                    src="/cloud.png"
                    ratioX="0.23"
                    ratioY="0.41"
                />{" "}
                <Animated
                    className="balloon"
                    src="/balloon.png"
                    ratioX="0.007"
                    ratioY="0.3"
                />
            </div>
        </div>
    );
}

export default App;
