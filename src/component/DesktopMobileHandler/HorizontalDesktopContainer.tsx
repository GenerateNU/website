import React from 'react';
import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import Row from 'react-bootstrap/esm/Row';

import './style.css';

type HorizontalDesktopContainerProps = {
  children: ReactNode;
  desktopBGColor: string;
  containerClassName?: string;
  rowClassName?: string;
};

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
}: HorizontalDesktopContainerProps) {
  const scrollContainerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (!scrollContainer) {
      return;
    }

    const handleWheel = (evt: WheelEvent) => {
      evt.preventDefault();
      scrollContainer.scrollLeft += evt.deltaY;
    };

    scrollContainer.addEventListener('wheel', handleWheel);

    return () => {
      scrollContainer.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <>
      <section
        ref={scrollContainerRef}
        // using dsktop to avoid naming collision...
        className={`vh-100 dsktop horizontal-scroll bg-${desktopBGColor} container-fluid ${
          props.containerClassName ?? ''
        }`}
        tabIndex={0}
        aria-label="Page content"
      >
        <Row className={`flex-nowrap vh-100 ${props.rowClassName ?? ''}`}>{children}</Row>
      </section>
    </>
  );
}
