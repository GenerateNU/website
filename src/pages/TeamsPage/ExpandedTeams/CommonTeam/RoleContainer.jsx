import React from "react";

export default function RoleContainer({ children, color }) {
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child);
    }
    return child;
  });
  return (
    <div className="row-block">
      <div className="roles-banner-color" style={{ background: color }}></div>
      <div className="d-flex flex-column">{childrenWithProps}</div>
    </div>
  );
}
