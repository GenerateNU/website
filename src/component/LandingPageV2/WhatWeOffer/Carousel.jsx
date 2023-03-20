import React, { useState, useCallback } from "react";
import { useSwipeable } from "react-swipeable";
import "./Carousel.css";

const Carousel = React.memo(({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = useCallback(
    (newIndex) => {
      if (newIndex < 0) {
        newIndex = React.Children.count(children) - 1;
      } else if (newIndex >= React.Children.count(children)) {
        newIndex = 0;
      }

      setActiveIndex(newIndex);
    },
    [children]
  );

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  const renderIndicators = React.useMemo(
    () =>
      React.Children.map(children, (_, index) => (
        <button
          key={index}
          className={`${index === activeIndex ? "active" : ""}`}
          onClick={() => updateIndex(index)}
        >
          {index + 1}
        </button>
      )),
    [children, activeIndex, updateIndex]
  );

  return (
    <div {...handlers} className="carousel">
      <div style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {React.Children.map(children, (child) =>
          React.cloneElement(child, { width: "100%" })
        )}
      </div>
      <div>
        <button onClick={() => updateIndex(activeIndex - 1)}>Prev</button>
        {renderIndicators}
        <button onClick={() => updateIndex(activeIndex + 1)}>Next</button>
      </div>
    </div>
  );
});

export default Carousel;
