import React, { useState } from 'react';

import RightArrow from '../../../assets/images/applypage-v2/RightArrow';
import WhiteDownArrow from '../../../assets/images/applypage-v2/WhiteDownArrow.svg?react';
import WhiteUpArrow from '../../../assets/images/applypage-v2/WhiteUpArrow.svg?react';
import RoleCategory from '../RoleCategory';
import Tag from '../Tag';
import './style.css';
import type { ApplicationRole, ApplyTeam } from '../types';

type TeamApplicationCardProps = {
  team: ApplyTeam;
};

type CategoryNames = {
  engagement: string;
  operations: string;
  fallback: string;
};

type TeamRolesProps = {
  team: ApplyTeam;
};

type TeamCardHeaderProps = {
  team: ApplyTeam;
  clientCard: boolean;
};

type ExternalLinkButtonProps = {
  team: ApplyTeam;
  clientCard: boolean;
};

const viewRoles = 'View Roles';

const workWithUs = 'Work with Us';

const meetTheTeam = 'Meet the team';

const getActiveRoles = (roles: ApplicationRole[] | null | undefined) =>
  (roles ?? []).filter(role => role.activeApplication === true && role.applicationLink);

const getCategoryName = (teamName: string, names: CategoryNames) => {
  if (teamName === 'Engagement') {
    return names.engagement;
  }

  if (teamName === 'Operations') {
    return names.operations;
  }

  return names.fallback;
};

function NoOpenRoles() {
  return (
    <RoleCategory
      roleCategory={{
        description: (
          <>
            There are not currently any open roles in this branch. New openings are typically posted before each
            semester. Please check back later, or follow{' '}
            <a
              style={{
                textDecoration: 'underline',
                color: '#55c9ef',
              }}
              href="https://instagram.com/generatenu"
            >
              @generatenu
            </a>{' '}
            on Instagram to be alerted of new openings.
          </>
        ),
      }}
    />
  );
}

function TeamRoles({ team }: TeamRolesProps) {
  const activeContributors = getActiveRoles(team.contributorRoles);
  const activeLeads = getActiveRoles(team.leadRoles);
  const activeChiefs = getActiveRoles(team.chiefRoles);

  return (
    <>
      {activeContributors.length === 0 && activeLeads.length === 0 && activeChiefs.length === 0 && <NoOpenRoles />}
      {activeContributors.length > 0 && (
        <RoleCategory
          roleCategory={{
            name: getCategoryName(team.team, {
              engagement: 'Content',
              operations: 'Finance',
              fallback: 'Individual Contributors',
            }),
            description: team.contributorDescription,
            roles: activeContributors,
            color: team.color,
          }}
        />
      )}
      {activeLeads.length > 0 && (
        <RoleCategory
          roleCategory={{
            name: getCategoryName(team.team, { engagement: 'Events', operations: 'Information', fallback: 'Leaders' }),
            description: team.leadDescription,
            roles: activeLeads,
            color: team.color,
          }}
        />
      )}
      {activeChiefs.length > 0 && (
        <RoleCategory
          roleCategory={{
            name: getCategoryName(team.team, {
              engagement: 'Community',
              operations: 'Alumni Relations',
              fallback: 'Chiefs',
            }),
            description: team.chiefDescription,
            roles: activeChiefs,
            color: team.color,
          }}
        />
      )}
    </>
  );
}

function TeamCardHeader({ team, clientCard }: TeamCardHeaderProps) {
  return (
    <div className={`team-header-container ${clientCard ? 'client-header' : ''}`} style={{ background: team.color }}>
      <div className="team-header" style={{ color: clientCard ? team.color : '' }}>
        {team.team}
      </div>
      <div className="tags-container">{team.tags ? team.tags.map(tag => <Tag key={tag} title={tag} />) : null}</div>
      <div className="paragraph" style={{ color: clientCard ? 'white' : '' }}>
        {team.teamDescription}
      </div>
    </div>
  );
}

function ExternalLinkButton({ team, clientCard }: ExternalLinkButtonProps) {
  return (
    <a href={team.externalLink} target="_blank" rel="noopener noreferrer">
      <button className="interactive-button" style={{ backgroundColor: clientCard ? 'white' : 'black' }}>
        <RightArrow color={clientCard ? 'black' : 'white'} />
        <div className="team-subheader" style={{ color: clientCard ? 'black' : 'white' }}>
          {clientCard ? workWithUs : meetTheTeam}
        </div>
      </button>
    </a>
  );
}

export default function TeamApplicationCard({ team }: TeamApplicationCardProps) {
  const [expanded, setExpanded] = useState(false);
  const expand = team.externalLink === undefined;
  const clientCard = team.team === 'Clients';

  return (
    <div
      key={team.team}
      className={`team-card-container ${expanded ? 'expanded' : ''} ${clientCard ? 'client-border' : ''}`}
      style={{ boxShadow: clientCard ? `-1rem 1rem ${team.color}` : '' }}
    >
      <TeamCardHeader team={team} clientCard={clientCard} />
      {expand ? (
        <div>
          <button className="interactive-button" onClick={() => setExpanded(!expanded)}>
            {expanded ? <WhiteUpArrow /> : <WhiteDownArrow />}
            <div className="team-subheader">{viewRoles}</div>
          </button>
          <div className={`expanded-container ${expanded ? 'expanded' : ''}`}>
            {expanded && <TeamRoles team={team} />}
          </div>
        </div>
      ) : (
        <ExternalLinkButton team={team} clientCard={clientCard} />
      )}
    </div>
  );
}
