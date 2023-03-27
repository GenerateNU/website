import React, { useState, useCallback } from "react";
import { useSwipeable } from "react-swipeable";
import "./Carousel.css";

const Carousel = React.memo(
  ({
    children,
    txtcolor,
    currentButtonColor,
    idleButtonColor,
    perPage = 1,
  }) => {
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
    }, [children, activeIndex, perPage]);

    return (
      <div {...handlers} className="carousel">
        <div style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {renderChildren}
        </div>
        <div>
          <button
            className="dotbutton"
            onClick={() => updateIndex(activeIndex - 1)}
          />
          <button
            className="dotbutton"
            onClick={() => updateIndex(activeIndex + 1)}
          />
        </div>
      </div>
    );
  }
);

export default Carousel;
