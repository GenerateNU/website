import Members from '@/pages/TeamsPage/ExpandedTeams/CommonTeam/Members';
import OurRoles from '@/pages/TeamsPage/ExpandedTeams/CommonTeam/OurRoles';
import Roles from '@/pages/TeamsPage/ExpandedTeams/CommonTeam/Roles';

import './style.css';

export default function OperationsContainer() {
  return (
    <OurRoles>
      <Roles team="operations">
        <Members team="operations" />
      </Roles>
    </OurRoles>
  );
}
