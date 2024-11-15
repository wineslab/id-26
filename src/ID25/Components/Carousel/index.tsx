import React, { useEffect, useState, useRef } from 'react';
import "./index.css";

interface CarouselProps {
    images: string[];
    interval: number;
}

const Carousel = ({ images, interval = 5000 }: CarouselProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        startAutoPlay();
        return () => clearInterval(intervalRef.current!);
    }, []);

    const startAutoPlay = () => {
        intervalRef.current = setInterval(nextSlide, interval);
    };

    const resetAutoPlay = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        startAutoPlay();
    };

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        resetAutoPlay();
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        resetAutoPlay();
    };

    const handleManualChange = (direction: 'next' | 'prev') => {
        resetAutoPlay();
        if (direction === 'next') {
            nextSlide();
        } else {
            prevSlide();
        }
    };

    return (
        <div className="carousel-container">
            <div className="carousel">
                <button onClick={() => handleManualChange('prev')} className="carousel-btn carousel-btn-prev">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" className="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                    </svg>
                </button>
                <img
                    src={images[activeIndex]}
                    alt={`Slide ${activeIndex}`}
                    className="carousel-img"
                />
                <button onClick={() => handleManualChange('next')} className="carousel-btn carousel-btn-next">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" className="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Carousel;