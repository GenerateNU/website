import './style.css'

export default function RoleCategory(
  {
    roleCategory: { name = '', description = '', roles = [], color = '' } = {}
  },
  desktopContent
) {
  const halfLength = Math.ceil(roles.length / 2)
  const firstColumn = roles.slice(0, halfLength)
  const secondColumn = roles.slice(halfLength)

  return (
    <div>
      <div className='subheader'>{name}</div>
      <div className='paragraph'>
        <p>{description}</p>
      </div>
      <div className='links'>
        <div className='column'>
          {firstColumn.map((role) => (
            <a
              href={role.link}
              target='_blank'
              rel='noopener noreferrer'
              className='link-text'
              style={{ color: color }}
            >
              {role}
            </a>
          ))}
        </div>
        <div className='column'>
          {secondColumn.map((role) => (
            <a
              href={role.link}
              target='_blank'
              rel='noopener noreferrer'
              className='link-text'
              style={{ color: color }}
            >
              {role}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
