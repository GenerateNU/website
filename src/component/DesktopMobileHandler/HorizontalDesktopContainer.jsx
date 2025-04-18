import React from "react";
import { useEffect, useRef } from "react";
import Row from "react-bootstrap/esm/Row";
import "./style.css";

/**
 * A component that handles rendering content differently based on whether the user is on desktop or mobile.
 *
 * This component is designed to handle differences in background color and scrolling behavior between desktop and mobile views.
 * Specifically, it enables horizontal scrolling on desktop devices and vertical scrolling on mobile devices and configuration of different background colors for each view.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child elements to render.
 * @param {string} props.desktopBGColor - The background color for the desktop view.
 * @param {string} props.mobileBGColor - The background color for the mobile view.
 * @returns {JSX.Element} The JSX element representing the component.
 */
export default function HorizontalDesktopContainer({
  children,
  desktopBGColor,
  ...props
}) {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const handleWheel = (evt) => {
      evt.preventDefault();
      scrollContainer.scrollLeft += evt.deltaY;
    };
    scrollContainer.addEventListener("wheel", handleWheel);
    return () => {
      scrollContainer.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <>
      {/* Desktop view */}
      <div
        ref={scrollContainerRef}
        // using dsktop to avoid naming collision...
        class={`vh-100 dsktop horizontal-scroll bg-${desktopBGColor} container-fluid ${
          props.containerClassName ?? ""
        }`}
        tabIndex="0"
      >
        {/* The content is wrapped in a Row component from the react-bootstrap library to ensure proper layout */}
        <Row className={`flex-nowrap vh-100 ${props.rowClassName ?? ""}`}>
          {children}
        </Row>
      </div>
    </>
  );
}
