import React from "react";
import Table from 'react-bootstrap/Table';
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
                        <p>Our research faculty, government, and industry leaders will meet in this <b>2-day event</b> to discuss the future of wireless for our research community and the world.</p>
                        <p>Join us in person to meet our core faculty, researchers, and students. Their research promises to transform how people, objects, and devices connect and communicate worldwide.</p>
                        <p>On the evening of Monday, February 3, we will host a welcome reception and registration. This is a great opportunity to meet other attendees and pick up your badge.</p>
                        <p>Please see the tentative agenda below:</p>
                    </div>
                <div className="details">
                    <img src="images/event-venue.jpg" className="venue-img" alt="event venue" />
                    <Table bordered>
                        <thead>
                            <tr>
                                <th className="header-row"><h5>Topic</h5></th>
                                <th className="header-row"><h5>Date</h5></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><p>Welcome Reception & Registration</p></td>
                                <td><p>Monday, February 3, 2025</p></td>
                            </tr>
                            <tr>
                                <td><p>Institute Research Presentations</p></td>
                                <td><p>Tuesday, February 4, 2025</p></td>
                            </tr>
                            <tr>
                                <td><p>Panel: Industry/Research Collaboration</p></td>
                                <td><p>Tuesday, February 4, 2025</p></td>
                            </tr>
                            <tr>
                                <td><p>Industry Engagement Models at WIoT</p></td>
                                <td><p>Tuesday, February 4, 2025</p></td>
                            </tr>
                            <tr>
                                <td><p>Panel: Entrepreneurship</p></td>
                                <td><p>Tuesday, February 4, 2025</p></td>
                            </tr>
                            <tr>
                                <td><p>Research Posters & Demo Presentations</p></td>
                                <td><p>Wednesday, February 5, 2025</p></td>
                            </tr>
                            <tr>
                                <td><p>WIoT Facilities & Space Tour</p></td>
                                <td><p>Wednesday, February 5, 2025</p></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
}

export default Video;