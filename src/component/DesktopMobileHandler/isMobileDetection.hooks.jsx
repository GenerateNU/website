import {useState, useEffect} from 'react'

const useDeviceDetection = () => {
    const [isMobile, setMobile] = useState(window.screen.width <= 650);
    const detectMobile = () => {
        setMobile(window.screen.width <= 650);
    }

    useEffect(() => {
      window.addEventListener("resize", () => {
        detectMobile();
      });
      return window.removeEventListener("resize", () => {
        detectMobile();
      });
    }, []);
    return isMobile;
}

export default useDeviceDetection;