import React from "react";
import SectionHeader from "../../Components/SectionHeader";
import "./index.css";

function Panelists() {
    return (
        <div>
            <SectionHeader text="INDUSTRY DAY 23 PANELISTS"></SectionHeader>
            <h5 style={{paddingTop: "1rem"}}>(Coming Soon: Meet the ID 25 Panelists!)</h5>
            <div className="section">
                <div className="panelists-container">
                    <div className="group-overlay">
                        <img src="images/panelist1.png" className="p-pic" alt="panelist 1"/>
                        <div className="info">
                            <h4 style={{paddingBottom: "0.5rem"}}>MARK CASTLEMAN</h4>
                            <p>Managing Director</p>
                            <p>Intel Ignite at Intel Corporation</p>
                        </div>
                    </div>
                    <div className="group-overlay">
                        <img src="images/panelist3.png" className="p-pic" alt="panelist 3"/>
                        <div className="info">
                            <h4 style={{paddingBottom: "0.5rem"}}>RUSS WILCOX</h4>
                            <p>Partner</p>
                            <p>Pillar VC</p>
                        </div>
                    </div>
                    <div className="group-overlay">
                        <img src="images/panelist4.png" className="p-pic" alt="panelist 4"/>
                        <div className="info">
                            <h4 style={{paddingBottom: "0.5rem"}}>STACY SWIDER</h4>
                            <p>Vice President of Investments</p>
                            <p>Mass Ventures</p>
                        </div>
                    </div>
                    <div className="group-overlay">
                        <img src="images/panelist2.png" className="p-pic" alt="panelist 2"/>
                        <div className="info">
                            <h4 style={{paddingBottom: "0.5rem"}}>MYRON KASSARABA</h4>
                            <p>Director of Commercialization</p>
                            <p>Center for Research Innovation Northeastern University</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Panelists;