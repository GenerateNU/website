import useWebsite from '../../../../shared/useWebsite'
import RoleContainer from '../CommonTeam/RoleContainer'
import { ExpandedTeamsJSON } from './JSONFiles/ExpandedTeamsJSON'
import { RolesJSON } from './JSONFiles/RolesJSON'
import './style.css'

export function OurRoles({ children }) {
  return (
    <div className='roles-section'>
      <div className='roles-title paragraph-title'>OUR ROLES</div>
      <div className='roles-container'>{children}</div>
    </div>
  )
}

export function Roles({ team, children }) {
  const isWebsite = useWebsite()
  const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches
  const mobile = !isBigScreen || !isWebsite

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
          {children
            ? RolesJSON[team].Director.header.toUpperCase()
            : RolesJSON[team].Director.header}
        </div>
        <div
          className={`role-desc ${
            mobile ? 'paragraph-text-mobile' : 'paragraph-text'
          }`}
          style={{ marginBottom: '4vh' }}
        >
          {RolesJSON[team].Director.desc}
        </div>
      </div>
      {children}
    </RoleContainer>
  )
}

export function Members({ team }) {
  const isWebsite = useWebsite()
  const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches
  const mobile = !isBigScreen || !isWebsite
  return (
    RolesJSON[team].Roles &&
    RolesJSON[team].Roles.map((role, index) => (
      <>
        <div
          className={`role-name ${
            mobile ? 'paragraph-title-mobile' : 'paragraph-title'
          }`}
        >
          {role.header.toUpperCase()}
        </div>
        <MembersContainer role={role} mobile={mobile} />
      </>
    ))
  )
}

function MembersContainer({ role, mobile }) {
  return (
    <div>
      {role.lead && (
        <div>
          <div
            className={`role-name ${
              mobile ? 'paragraph-subtitle-mobile' : 'paragraph-subtitle'
            }`}
          >
            {role.lead.subheader}
          </div>
          <div
            className={`role-desc ${
              mobile ? 'paragraph-text-mobile' : 'paragraph-text'
            }`}
          >
            {role.lead.desc}
          </div>
        </div>
      )}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {role.members.map((member, index) => {
          return (
            index % 2 == 0 && (
              <div
                style={{
                  display: `${mobile ? '' : 'flex'}`,
                  flexDirection: 'row'
                }}
              >
                <div
                  style={{
                    marginRight: '2vw',
                    marginTop: '2vh'
                  }}
                >
                  <div
                    className={`role-name ${
                      mobile
                        ? 'paragraph-subtitle-mobile'
                        : 'paragraph-subtitle'
                    }`}
                  >
                    {member.subheader}
                  </div>
                  <div
                    className={`role-desc ${
                      mobile ? 'paragraph-text-mobile' : 'paragraph-text'
                    }`}
                  >
                    {member.desc}
                  </div>
                </div>
                {index + 1 < role.members.length ? (
                  <div
                    style={{
                      marginTop: '2vh'
                    }}
                  >
                    <div
                      className={`role-name ${
                        mobile
                          ? 'paragraph-subtitle-mobile'
                          : 'paragraph-subtitle'
                      }`}
                    >
                      {role.members[index + 1].subheader}
                    </div>
                    <div
                      className={`role-desc ${
                        mobile ? 'paragraph-text-mobile' : 'paragraph-text'
                      }`}
                    >
                      {role.members[index + 1].desc}
                    </div>
                  </div>
                ) : index != 0 ? (
                  <div style={{ marginLeft: '40vw' }}></div>
                ) : (
                  <></>
                )}
              </div>
            )
          )
        })}
      </div>
    </div>
  )
}
