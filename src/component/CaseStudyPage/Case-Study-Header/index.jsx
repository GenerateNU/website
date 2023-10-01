import ClientProjectsJSON from '../client-projects-json'
import './style.css'

export default function CaseStudyHeader() {
  const smartyPill = ClientProjectsJSON.projects.at(0)
  return (
    <div>
      <div className='cs-title-container'>
        <div className='cs-title-style'>{smartyPill.title}</div>
        <div className='cs-teams-container'>
          {smartyPill.teams.map((team) => (
            <img alt={'matt was here'} src={team} />
          ))}
        </div>
      </div>
    </div>
  )
}
