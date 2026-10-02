import Members from '../CommonTeam/Members';
import OurRoles from '../CommonTeam/OurRoles';
import Roles from '../CommonTeam/Roles';
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
