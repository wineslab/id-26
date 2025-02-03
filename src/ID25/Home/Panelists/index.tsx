import React from "react";
import SectionHeader from "../../Components/SectionHeader";
import "./index.css";

function Panelists() {
    return (
        <div>
            <SectionHeader text="INDUSTRY DAY 25 PANELISTS"></SectionHeader>
            <div className="section">
                <div className="panelists-container">
                    <div className="group-overlay">
                        <img src="images/panelists/GordonBeattie.png" className="p-pic" alt="panelist 1"/>
                        <div className="info">
                            <h4 style={{paddingBottom: "0.5rem"}}>J. Gordon Beattie</h4>
                            <p>Senior Principal Research Scientist/Engineer</p>
                            <p>VIAVI Solutions</p>
                        </div>
                    </div>
                    <div className="group-overlay">
                        <img src="images/panelists/DougCastor.png" className="p-pic" alt="panelist 2"/>
                        <div className="info">
                            <h4 style={{paddingBottom: "0.5rem"}}>Douglas Castor</h4>
                            <p>Head of Wireless Research</p>
                            <p>InterDigital</p>
                        </div>
                    </div>
                    <div className="group-overlay">
                        <img src="images/panelists/JoelDawson.png" className="p-pic" alt="panelist 3"/>
                        <div className="info">
                            <h4 style={{paddingBottom: "0.5rem"}}>Joel Dawson</h4>
                            <p>Founder & CEO</p>
                            <p>Talking Heads Wireless</p>
                        </div>
                    </div>
                    <div className="group-overlay">
                        <img src="images/panelists/BubbaHagood.png" className="p-pic" alt="panelist 4"/>
                        <div className="info">
                            <h4 style={{paddingBottom: "0.5rem"}}>Bubba Hagood</h4>
                            <p>Managing General Partner</p>
                            <p>Tenon Ventures</p>
                        </div>
                    </div>
                    <div className="group-overlay">
                        <img src="images/panelists/KimoJohnson.png" className="p-pic" alt="panelist 5"/>
                        <div className="info">
                            <h4 style={{paddingBottom: "0.5rem"}}>Kimo Johnson</h4>
                            <p>Co-Founder & Chief Science Officer</p>
                            <p>GelSight</p>
                        </div>
                    </div>
                    <div className="group-overlay">
                        <img src="images/panelists/JosepJornet.png" className="p-pic" alt="panelist 6"/>
                        <div className="info">
                            <h4 style={{paddingBottom: "0.5rem"}}>Josep M. Jornet</h4>
                            <p>Professor & Associate Director of WIoT</p>
                            <p>Northeastern University</p>
                        </div>
                    </div>
                    <div className="group-overlay">
                        <img src="images/panelists/RajeshSood.png" className="p-pic" alt="panelist 7"/>
                        <div className="info">
                            <h4 style={{paddingBottom: "0.5rem"}}>Rajesh Sood</h4>
                            <p>Vice President & Client Partner</p>
                            <p>Tech Mahindra</p>
                        </div>
                    </div>
                    <div className="group-overlay">
                        <img src="images/panelists/StacySwider.png" className="p-pic" alt="panelist 8"/>
                        <div className="info">
                            <h4 style={{paddingBottom: "0.5rem"}}>Stacy Swider</h4>
                            <p>Vice President Investments</p>
                            <p>Mass Ventures</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Panelists;