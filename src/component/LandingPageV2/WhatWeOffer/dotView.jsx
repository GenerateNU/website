import React, { useState } from "react";
import { useEffect } from "react";

const DotView = ({
  children,
  numElementsPerPane,
  currentButtonColor,
  idleButtonColor,
}) => {
  const numChildren = children.length;
  const [currentChild, setCurrentChild] = useState(0);
  const [buttonColors, setButtonColors] = useState(
    Array.from({ length: numChildren / numElementsPerPane }, (_, index) =>
      index === currentChild * numElementsPerPane
        ? currentButtonColor
        : idleButtonColor
    )
  );

  const displayer = () => {
    return children.slice(currentChild * numElementsPerPane, currentChild * numElementsPerPane + numElementsPerPane);
  };

  const dotter = () => {
    return buttonColors.map((buttonColor, index) => (
      <button
        className="dot_button"
        style={{ backgroundColor: buttonColor }}
        key={index}
        onClick={() => clickFunc(index)}
      ></button>
    ));
  };

  const clickFunc = (index) => {
    if (index === currentChild) return;
    setCurrentChild(index);
    setButtonColors((prevButtonColors) =>
      prevButtonColors.map((_, i) =>
        i === index ? currentButtonColor : idleButtonColor
      )
    );
  };

  useEffect(() => {
    dotter();
  }, [currentChild, buttonColors]);

  return  (
    <div className="h-60vh">
      {displayer()}
      {dotter()}
    </div>
  );
};

export default DotView;
