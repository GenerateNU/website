import type { ReactNode } from 'react';

import type { Team } from '@/data/teams';
import useWebsite from '@/shared/useWebsite';

import { ExpandedTeamsJSON } from './JSONFiles/ExpandedTeamsJSON';
import { RolesJSON } from './JSONFiles/RolesJSON';
import RoleContainer from './RoleContainer';
import './style.css';

type RolesProps = {
  team: Team;
  children?: ReactNode;
};

export default function Roles({ team, children }: RolesProps) {
  const isWebsite = useWebsite();
  const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches;
  const mobile = !isBigScreen || !isWebsite;

  return (
    <RoleContainer color={ExpandedTeamsJSON[team].color}>
      <div>
        <div
          className={`role-name ${
            children
              ? mobile
                ? 'paragraph-title-mobile'
                : 'paragraph-title'
              : mobile
                ? 'paragraph-subtitle-mobile'
                : 'paragraph-subtitle'
          }`}
        >
          {children ? RolesJSON[team].Director.header.toUpperCase() : RolesJSON[team].Director.header}
        </div>
        <div
          className={`role-desc ${mobile ? 'paragraph-text-mobile' : 'paragraph-text'}`}
          style={{ marginBottom: '4vh' }}
        >
          {RolesJSON[team].Director.desc}
        </div>
      </div>
      {children}
    </RoleContainer>
  );
}
