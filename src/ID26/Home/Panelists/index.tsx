import React from "react";
import SectionHeader from "../../Components/SectionHeader";
import "./index.css";

function Panelists() {
    return (
        <div>
            <SectionHeader text="INDUSTRY DAY 26 PANELISTS"></SectionHeader>
            <div className="section">
                <div className="panelists-container">
                    <div className="group-overlay">
                        <img src="images/panelists/chris_christou.png" className="p-pic" alt="panelist 1"/>
                        <div className="info">
                            <h4 style={{paddingBottom: "0.5rem"}}>Chris Christou</h4>
                            <p>Senior Vice President</p>
                            <p>Booz Allen Hamilton</p>
                        </div>
                    </div>
                    <div className="group-overlay">
                        <img src="images/panelists/maike_meyercutler.png" className="p-pic" alt="panelist 3"/>
                        <div className="info">
                            <h4 style={{paddingBottom: "0.5rem"}}>Maike Meyer-Cutler</h4>
                            <p>Director Business Development Strategic Accounts</p>
                            <p>American Tower</p>
                        </div>
                    </div>
                    <div className="group-overlay">
                        <img src="images/panelists/mauro_filho.png" className="p-pic" alt="panelist 4"/>
                        <div className="info">
                            <h4 style={{paddingBottom: "0.5rem"}}>Mauro Fihlo</h4>
                            <p>SVP of AI-RAN</p>
                            <p>SoftBank</p>
                        </div>
                    </div>
                    <div className="group-overlay">
                        <img src="images/panelists/ahan_kak.png" className="p-pic" alt="panelist 2"/>
                        <div className="info">
                            <h4 style={{paddingBottom: "0.5rem"}}>Ahan Kak</h4>
                            <p>Research Scientist</p>
                            <p>Nokia</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Panelists;