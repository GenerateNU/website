import React, { useState, useMemo, useCallback } from "react";
import { useSwipeable } from "react-swipeable";
import "./SwipeableCarousel.css";

const SwipeableCarousel = React.memo(
  ({ children, currentButtonColor, idleButtonColor = "rgba(220, 220, 220, 0.5)", perPage = 1 }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = useCallback(
      (newIndex) => {
        if (newIndex < 0) {
          newIndex = Math.ceil(children.length / perPage) - 1;
        } else if (newIndex >= Math.ceil(children.length / perPage)) {
          newIndex = 0;
        }

        setActiveIndex(newIndex);
      },
      [children, perPage]
    );

    const handleSwipedLeft = useCallback(() => {
      updateIndex(activeIndex + 1);
    }, [activeIndex]);

    const handleSwipedRight = useCallback(() => {
      updateIndex(activeIndex - 1);
    }, [activeIndex]);

    const handlers = useSwipeable({
      onSwipedLeft: handleSwipedLeft,
      onSwipedRight: handleSwipedRight,
    });

    const renderButton = useCallback((i) => (
      <button
        key={i}
        className="dotbutton"
        onClick={() => updateIndex(i)}
        style={{ backgroundColor: activeIndex === i ? currentButtonColor : idleButtonColor }}
      />
    ), [activeIndex]);

    const renderButtons = useMemo(() => {
      return Array.from(
        { length: Math.ceil(children.length / perPage) },
        (_, i) => renderButton(i)
      );
    }, [activeIndex]);

    const renderChildren = useMemo(() => {
      const startIndex = activeIndex * perPage;
      const endIndex = startIndex + perPage;
      return children.slice(startIndex, endIndex);
    }, [activeIndex, children, perPage]);

    return (
      <div {...handlers} className="carousel">
        <div className="inner">{renderChildren}</div>
        <div className="button-container">{renderButtons}</div>
      </div>
    );
  }
);

export default SwipeableCarousel;
