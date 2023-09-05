import { useState, useEffect } from 'react';

export default function useWebsite() {
    const [isWebsite, setIsWebsite] = useState(window.innerWidth > 650);
    //choose the screen size
    const handleResize = () => {
        if (window.innerWidth > 650) {
            setIsWebsite(true);
        } else {
            setIsWebsite(false);
        }
    };

    // create an event listener
    useEffect(() => {
        window.addEventListener("resize", handleResize);
    });

    return isWebsite;
}