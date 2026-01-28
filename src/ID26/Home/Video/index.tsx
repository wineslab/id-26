import React from "react";
import "./index.css";

function Video() {
    return (
        <div className="section">
            <div className="video-container">
                <div className="ratio ratio-16x9 video">
                    <iframe src="https://www.youtube.com/embed/ZTvV4cA5C10?autoplay=1&mute=1&loop=1&si=SWBJZhjAQB1TXnYy&playlist=ZTvV4cA5C10&vq=hd2160"
                        title="ID 23 YouTube Video"
                        allowFullScreen>
                    </iframe>
                </div>
                <div className="event-intro">
                    <p>Our research faculty, government, and industry leaders will meet on <b>February 2, 3, and 4</b> to discuss the future of wireless for our research community and the world.</p>
                    <p>Join us in person to meet our core faculty, researchers, and students. Their research promises to transform how people, objects, and devices connect and communicate worldwide.</p>
                    <p>On the evening of Monday, February 2, we will host a welcome reception and registration. This is a great opportunity to meet other attendees and pick up your badge.</p>
                </div>
            </div>
        </div>
    );
}

export default Video;