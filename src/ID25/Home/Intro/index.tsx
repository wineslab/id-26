import React from 'react';
import SectionHeader from '../../Components/SectionHeader';
import "./index.css";

function Intro() {
    return (
        <div>
            <SectionHeader text="ABOUT THE EVENT"></SectionHeader>
            <div className="section intro">
                <div className="paragraphs">
                    <p>This event aims to bring together government representatives, industry leaders, and trailblazing researchers to talk about our core faculty, whose research promises to transform the way people, objects, and devices connect and communicate worldwide.</p>
                    <p>Participants in the Forum will learn about advances in 5G and 6G wireless systems, smart cities and oceans, implantable medical devices, unmanned aerial vehicles for civil and national defense, and IoT business models for tomorrow’s industries. <b>Additionally, you will gain valuable insights into the emerging IoT business models that will shape the industries of tomorrow.</b></p>
                    <p>This event fosters an inclusive environment for open discussions, inviting our research community and global participants to engage in meaningful exchanges about wireless research and its profound impact on the future. Featuring panel sessions, poster and demo presentations, and engaging conferences, attendees will have the opportunity to stay abreast of the latest updates and developments in wireless technology. Moreover, this event offers a pivotal platform for networking, enabling participants to forge connections with peers and establish valuable partnerships with industry professionals who share a common passion for technological innovation.</p>
                </div>
                <img src="/images/placeholder.png" className="img-fluid" alt="people talking" 
                    style={{maxWidth: "100%" }} />
            </div>
        </div>
    );
}

export default Intro;