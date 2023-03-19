import React from "react";
import Row from "react-bootstrap/esm/Row";
import Column from "react-bootstrap/esm/Col";
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
export default function DesktopMobileScrollAndBackgroundHandler({
  children,
  desktopBGColor,
  mobileBGColor,
}) {
  return (
    <>
      {/* Desktop view */}
      <div
        class={`vh-100 horizontal-scroll bg-${desktopBGColor} container-fluid`}
        tab-index="0"
      >
        {/* The content is wrapped in a Row component from the react-bootstrap library to ensure proper layout */}
        <Row className="flex-nowrap">{children}</Row>
      </div>

      {/* Mobile view */}
      <div
        class={`vw-100 mobile vertical-scroll bg-${mobileBGColor} container-fluid`}
        tab-index="0"
      >
        {/* The content is wrapped in a Column component from the react-bootstrap library to ensure proper layout */}
        <Column className="flex-nowrap" id="mobile-page-container">
          {children}
        </Column>
      </div>
    </>
  );
}
