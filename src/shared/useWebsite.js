import { useState, useEffect } from 'react';

export default function useWebsite() {
    const isBigScreen = !window.matchMedia("max-device-width: 650px").matches;
    console.log("is it a big screen;", isBigScreen, " : ", window.innerWidth);
    const [isWebsite, setIsWebsite] = useState(window.innerWidth > 650);
    //choose the screen size
    const handleResize = () => {
        if (window.innerWidth > 650) {
            setIsWebsite(true);
        } else {
            setIsWebsite(false);
        }
    };

    useEffect(() => {
            console.log("is it website?", isWebsite);
        }, [isWebsite])
        // create an event listener
    useEffect(() => {
        window.addEventListener("resize", handleResize);
    });

    return isWebsite;
}