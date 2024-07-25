import './style.css'

export default function RoleCategory({
  roleCategory: { name = '', description = '', roles = [], color = '' } = {}
}) {
  const halfLength = Math.ceil(roles.length / 2)
  const firstColumn = roles.slice(0, halfLength)
  const secondColumn = roles.slice(halfLength)

  return (
    <div>
      <div className='team-subheader'>{name}</div>
      <div className='paragraph' style={{ color: 'white' }}>
        {description}
      </div>
      <div className='link-column-container'>
        <div className='link-column'>
          {firstColumn.map((role) => (
            <a
              key={role.role}
              href={role.applicationLink}
              target='_blank'
              rel='noopener noreferrer'
              className='link-text'
              style={{ color: color }}
            >
              {role.role}
            </a>
          ))}
        </div>
        <div className='link-column'>
          {secondColumn.map((role) => (
            <a
              key={role.role}
              href={role.applicationLink}
              target='_blank'
              rel='noopener noreferrer'
              className='link-text'
              style={{ color: color }}
            >
              {role.role}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
