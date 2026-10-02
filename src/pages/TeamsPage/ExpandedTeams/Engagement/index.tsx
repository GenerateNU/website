import { Featured } from '..';
import { Members, OurRoles, Roles } from '../CommonTeam/OurRoles';
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
