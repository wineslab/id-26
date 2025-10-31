import React from "react";
import Video from "./Video";
import About from "./About";
import Agenda from "./Agenda";
import PhotoGallery from "./PhotoGallery";
import Panelists from "./Panelists";
import Posters from "./Posters";
import "./index.css";

function Home() {
    return (
        <div>
            <div className="img-box">
                <img src="images/id-26-logo.png" className="id-logo" alt="id logo 2025" />
            </div>
            <div id="EventDetails">
                <div className="section less-padding">
                    <h1>INDUSTRY DAY 26: BUILDING AN OPEN AI-RAN</h1>
                    <h5>An Annual Forum to Connect Industry, Government, and Academia.</h5>
                </div>
                <Video />
            </div>
            <div id="About">
                <About />
            </div>
            <div id="Agenda">
                <Agenda />
            </div>
            <div id="Panelists">
                <Panelists />
            </div>
            <div id="Posters">
                <Posters />
            </div>
            <div id="PhotoGallery">
                <PhotoGallery />
            </div>
        </div>
    );
}

export default Home;