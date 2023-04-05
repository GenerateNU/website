import React, { useState, useCallback } from "react";
import { useSwipeable } from "react-swipeable";
import "./Carousel.css";

const Carousel = React.memo(
  ({ children, currentButtonColor, idleButtonColor, perPage = 1 }) => {
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

    const handlers = useSwipeable({
      onSwipedLeft: () => updateIndex(activeIndex + 1),
      onSwipedRight: () => updateIndex(activeIndex - 1),
    });

    const renderChildren = React.useMemo(() => {
      const startIndex = activeIndex * perPage;
      const endIndex = startIndex + perPage;
      return children.slice(startIndex, endIndex);
    }, [activeIndex]);

    const renderButtons = () => {
      return Array.from(
        { length: Math.ceil(children.length / perPage) },
        (_, i) => {
          return (
            <button
              key={i}
              className="dotbutton"
              onClick={() => updateIndex(i)}
              style={activeIndex === i
                ? { backgroundColor: currentButtonColor }
                : { backgroundColor: idleButtonColor }}
            />
          );
        }
      );
    };

    return (
      <div {...handlers} className="carousel">
        <div className="inner">{renderChildren}</div>
        <div>{renderButtons()}</div>
      </div>
    );
  }
);

export default Carousel;
