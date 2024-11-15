import React from "react";
import Video from "./Video";
import Intro from "./Intro";
import PreviousEvent from "./PreviousEvent";
import Panelists from "./Panelists";
import "./index.css";

function Home() {
    return (
        <div>
            <img src="/images/id-logo.png" className="img-fluid id-logo" alt="id logo 2025" />
            <h1 style={{paddingTop: "6rem"}}>TOWARD OPEN6G NETWORKS</h1>
            <div id="Video">
                <Video />
            </div>
            <div id="Intro">
                <Intro />
            </div>
            <div id="PreviousEvent">
                <PreviousEvent />
            </div>
            <div id="Panelists">
                <Panelists />
            </div>
        </div>
    );
}

export default Home;