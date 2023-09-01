import { useState, useEffect } from 'react';

export default function useWebsite() {
    const isBigScreen = !window.matchMedia("max-device-width: 650px").matches;
    console.log("is it a big screen;", isBigScreen);
    const [isWebsite, setIsWebsite] = useState(isBigScreen);
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