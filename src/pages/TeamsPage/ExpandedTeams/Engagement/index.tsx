import Featured from '@/pages/TeamsPage/ExpandedTeams/CommonTeam/Featured';
import Members from '@/pages/TeamsPage/ExpandedTeams/CommonTeam/Members';
import OurRoles from '@/pages/TeamsPage/ExpandedTeams/CommonTeam/OurRoles';
import Roles from '@/pages/TeamsPage/ExpandedTeams/CommonTeam/Roles';

import './style.css';

export default function EngagementContainer() {
  return (
    <>
      <OurRoles>
        <Roles team="engagement">
          <Members team="engagement" />
        </Roles>
      </OurRoles>
      <Featured team="engagement"></Featured>
    </>
  );
}
