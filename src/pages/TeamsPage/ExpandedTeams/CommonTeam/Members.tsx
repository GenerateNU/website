import { Fragment } from 'react';

import type { Team } from '../../../../data/teams';
import toPairs from '../../../../shared/toPairs';
import useWebsite from '../../../../shared/useWebsite';
import { RolesJSON } from './JSONFiles/RolesJSON';
import type { RoleGroup } from './JSONFiles/types';
import './style.css';

type MembersProps = {
  team: Team;
};

type MembersContainerProps = {
  role: RoleGroup;
  mobile: boolean;
};

export default function Members({ team }: MembersProps) {
  const isWebsite = useWebsite();
  const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches;
  const mobile = !isBigScreen || !isWebsite;

  return RolesJSON[team].Roles?.map((role, roleIndex) => (
    <Fragment key={roleIndex}>
      <div className={`role-name ${mobile ? 'paragraph-title-mobile' : 'paragraph-title'}`}>
        {role.header.toUpperCase()}
      </div>
      <MembersContainer role={role} mobile={mobile} />
    </Fragment>
  ));
}

function MembersContainer({ role, mobile }: MembersContainerProps) {
  return (
    <div>
      {role.lead && (
        <div>
          <div className={`role-name ${mobile ? 'paragraph-subtitle-mobile' : 'paragraph-subtitle'}`}>
            {role.lead.subheader}
          </div>
          <div className={`role-desc ${mobile ? 'paragraph-text-mobile' : 'paragraph-text'}`}>{role.lead.desc}</div>
        </div>
      )}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {toPairs(role.members).map(([member, nextMember], pairIndex) => (
          <div
            key={pairIndex}
            style={{
              display: mobile ? '' : 'flex',
              flexDirection: 'row',
            }}
          >
            <div
              style={{
                marginRight: '2vw',
                marginTop: '2vh',
              }}
            >
              <div className={`role-name ${mobile ? 'paragraph-subtitle-mobile' : 'paragraph-subtitle'}`}>
                {member.subheader}
              </div>
              <div className={`role-desc ${mobile ? 'paragraph-text-mobile' : 'paragraph-text'}`}>{member.desc}</div>
            </div>
            {nextMember ? (
              <div
                style={{
                  marginTop: '2vh',
                }}
              >
                <div className={`role-name ${mobile ? 'paragraph-subtitle-mobile' : 'paragraph-subtitle'}`}>
                  {nextMember.subheader}
                </div>
                <div className={`role-desc ${mobile ? 'paragraph-text-mobile' : 'paragraph-text'}`}>
                  {nextMember.desc}
                </div>
              </div>
            ) : pairIndex !== 0 ? (
              <div style={{ marginLeft: '40vw' }}></div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
