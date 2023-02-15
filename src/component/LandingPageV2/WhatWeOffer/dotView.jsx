import React, { useState } from "react";
import "./style.css";

// children is an array of elements
// numElementsPerPage is the number of elements to be displayed per page
const DotView = ({ children, numElementsPerPane }) => {
  const numChildren = children.length;
  const [currentChild, setCurrentChild] = useState(0);

  const dotter = () =>
    Array.from({ length: numChildren / numElementsPerPane }, (_, index) => (
      <div className="dot" key={index}>
        dot!
      </div>
    ));

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
