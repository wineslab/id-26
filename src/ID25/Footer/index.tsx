import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import ButtonMailto from "../Components/ButtonMailto";
import "./index.css";

function Footer() {
    const { pathname } = useLocation();
    return (
        <div className="footer">
            <div className="footer-section">
                <h4>Institute for the Wireless Internet of Things</h4>
                <p className="subtitle nu">Northeastern University</p>
                <Link to="https://www.google.com/maps/place/805+Columbus+Ave,+Boston,+MA+02120/@42.3377049,-71.0870109,16z/data=!3m1!4b1!4m6!3m5!1s0x89e37a22a3a9ffa3:0x4fc7d96616e5f289!8m2!3d42.3377049!4d-71.0870109!16s%2Fg%2F11cnddhs8b?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D"
                target="_blank" rel="noopener noreferrer" className="email">
                    <p className="subtitle">805 Columbus Ave</p>
                    <p className="subtitle">Boston, MA 02120</p>
                </Link>
                <Link to="https://www.northeastern.edu/privacy-information/" target="_blank" rel="noopener noreferrer">
                    <p className="subtitle">Privacy Policy</p>
                </Link>
            </div>
            <div className="footer-section">
                <h5>INDUSTRY DAY 25</h5>
                <Link to={`/Home/#EventDetails`}>
                    <p className={pathname === `/#EventDetails` ? 'active' : ''}>
                        <p className="subtitle">Details</p>
                    </p>
                </Link>
                <Link to={`/Home/#About`}>
                    <p className={pathname === `/#About` ? 'active' : ''}>
                        <p className="subtitle">About</p>
                    </p>
                </Link>
                <Link to={`/Home/#Agenda`}>
                    <p className={pathname === `/#Agenda` ? 'active' : ''}>
                        <p className="subtitle">Agenda</p>
                    </p>
                </Link>
                <Link to={`/Home/#Panelists`}>
                    <p className={pathname === `/#Panelists` ? 'active' : ''}>
                        <p className="subtitle">Panelists</p>
                    </p>
                </Link>
            </div>
            <div className="footer-section">
                <h5>INDUSTRY DAY 23</h5>
                <Link to={`/Home/#PhotoGallery`}>
                    <p className={pathname === `/#PhotoGallery` ? 'active' : ''}>
                        <p className="subtitle">Photo Gallery</p>
                    </p>
                </Link>
            </div>
            <div className="footer-section">
                <h5>CONNECT WITH US</h5>
                <ButtonMailto mailto="wiot@northeastern.edu">
                    <div className="icon-container">
                        <img src="images/icons/email.svg" alt="email"/>
                        <p className="subtitle email">wiot@northeastern.edu</p>
                    </div>
                </ButtonMailto>

                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", paddingTop: "1.5rem"}}>
                    <Link to="https://www.linkedin.com/company/institute-for-the-wireless-internet-of-things" target="_blank" rel="noopener noreferrer">
                        <img src="images/icons/linkedin.svg" alt="linkedin"></img>
                    </Link>
                    <Link to="https://twitter.com/wiot_neu" target="_blank" rel="noopener noreferrer">
                        <img src="images/icons/x.svg" alt="x"></img>
                    </Link>
                    <Link to="https://www.instagram.com/wiot_neu/" target="_blank" rel="noopener noreferrer">
                        <img src="images/icons/instagram.svg" alt="instagram"></img>
                    </Link>
                    <Link to="https://www.youtube.com/@wiot_neu" target="_blank" rel="noopener noreferrer">
                        <img src="images/icons/youtube.svg" alt="youtube"></img>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;