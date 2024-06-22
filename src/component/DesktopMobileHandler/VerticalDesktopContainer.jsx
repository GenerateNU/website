import React from "react";
import { useEffect, useRef } from "react";
import Col from "react-bootstrap/esm/Col";
import "./style.css";

/**
 * This component is only designed to handle differences in background color between desktop and mobile views.
 * It enables vertical scrolling on desktop devices and mobile devices and configuration of different background colors for each view.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child elements to render.
 * @param {string} props.desktopBGColor - The background color for the desktop view.
 * @param {string} props.mobileBGColor - The background color for the mobile view.
 * @returns {JSX.Element} The JSX element representing the component.
 */
export default function VerticalDesktopContainer({
  children,
  desktopBGColor,
  ...props
}) {
  const scrollContainerRef = useRef(null);
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const handleWheel = (evt) => {
      evt.preventDefault();
      scrollContainer.scrollTop += evt.deltaY;
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
        class={`vh-100 dsktop vertical-scroll bg-${desktopBGColor} ${
          props.containerClassName ?? ""
        }`}
        tabIndex="0"
      >
        {/* The content is wrapped in a Column component from the react-bootstrap library to ensure proper layout */}
        <Col className={`${props.rowClassName ?? ""}`}>
          {children}
        </Col>
      </div>
    </>
  );
}