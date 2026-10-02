import Featured from '../CommonTeam/Featured';
import Members from '../CommonTeam/Members';
import OurRoles from '../CommonTeam/OurRoles';
import Roles from '../CommonTeam/Roles';
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
