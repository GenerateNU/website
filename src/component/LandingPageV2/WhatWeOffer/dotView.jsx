import React, { useState } from "react";

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

  const clickFunc = (index) => {
    if(index * numElementsPerPane === currentChild) return;
    setCurrentChild(index * numElementsPerPane);
    setButtonColors(
      buttonColors.map((_, i) =>
        i === index * numElementsPerPane ? currentButtonColor : idleButtonColor
      )
    );
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

  const displayer = () => {
    return children.slice(currentChild, currentChild + numElementsPerPane);
  };

  return (
    <div className="h-60vh">
      {displayer()}
      {dotter()}
    </div>
  );
};

export default DotView;
