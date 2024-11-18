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
            <div id="EventDetails">
                <h1 style={{paddingTop: "6rem"}}>TOWARD OPEN 6G NETWORKS</h1>
                <Video />
            </div>
            <div id="About">
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