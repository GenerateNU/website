import React from "react";
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
export default function NewMobileContainer({
  children,
  mobileBGColor,
  ...props
}) {
  return (
    <>
      {/* Mobile view */}
      <div
        style={{background: mobileBGColor}} class={`w-100 vertical-scroll ${
          props.containerClassName ?? ""
        }`}
      >
        {/* The content is wrapped in a Column component from the react-bootstrap library to ensure proper layout */}
        <Column className={`w-100 ${props.rowClassName ?? ""}`}>
          {children}
        </Column>
      </div>
    </>
  );
}
