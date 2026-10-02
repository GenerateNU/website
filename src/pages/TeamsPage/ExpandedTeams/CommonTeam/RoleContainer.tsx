import React from 'react';
import type { ReactNode } from 'react';

type RoleContainerProps = {
  children: ReactNode;
  color: string;
};

export default function RoleContainer({ children, color }: RoleContainerProps) {
  const childrenWithProps = React.Children.map(children, child => {
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
