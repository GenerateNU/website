import type { ReactNode } from 'react';

import './style.css';

type OurRolesProps = {
  children: ReactNode;
};

export default function OurRoles({ children }: OurRolesProps) {
  return (
    <div className="roles-section">
      <div className="roles-title paragraph-title">OUR ROLES</div>
      <div className="roles-container">{children}</div>
    </div>
  );
}
