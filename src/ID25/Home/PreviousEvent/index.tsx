import React from "react";
import SectionHeader from "../../Components/SectionHeader";
import Carousel from "../../Components/Carousel";
import "./index.css";

function PreviousEvent() {
    const images = [
        '/images/wiot-industry-day-2023-40.jpg',
        '/images/wiot-industry-day-2023-45.jpg',
        '/images/wiot-industry-day-2023-73.jpg',
    ];
    return (
        <div>
            <SectionHeader text="ID 23 EVENT PHOTOS"></SectionHeader>
            <div className="section">
                <Carousel images={images} interval={3000} />
            </div>
        </div>
    );
}

export default PreviousEvent;