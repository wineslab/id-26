import React from "react";
import "./index.css";

function Video() {
    return (
        <div className="section">
            <div className="video-container">
                <div className="ratio ratio-16x9 video">
                    <iframe src="https://www.youtube.com/embed/ZTvV4cA5C10?autoplay=1&mute=1&loop=1&si=SWBJZhjAQB1TXnYy&playlist=ZTvV4cA5C10"
                        title="ID 23 YouTube Video"
                        allowFullScreen>
                    </iframe>
                </div>
                <div className="bullets">
                    <ul>
                        <li>The event will be held at Northeastern University from <b>Monday, February 3rd to Wednesday, February 5th, 2025</b></li>
                        <li>Our research faculty, government, and industry leaders will meet in this <b>2-day event</b> to discuss the future of wireless for our research community and the world.</li>
                        <li>Join us on the evening of February 3rd for a reception at our Boston campus,  followed by two days of presentations, panels, tours, and demos on February 4th and 5th.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Video;