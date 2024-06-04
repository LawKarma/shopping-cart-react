import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Afficher le bouton quand la page est scrollée jusqu'à un certain point
    const toggleVisibility = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroller jusqu'en haut
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className="scroll-to-top">
            {isVisible && 
                <div onClick={scrollToTop}>
                    <i className="fas fa-arrow-up"></i>
                </div>}
        </div>
    );
}

export default ScrollToTopButton;