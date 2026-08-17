import { useState, useRef, useEffect } from 'react'
import Arrow from '../../../assets/images/nextpage/arrow.svg'
import './style.css'

const TAG_COLOR_MAP = {
  SOFTWARE: 'yellow',
  'ORG STRATEGY': 'pink',
  HARDWARE: 'red',
  DATA: 'green',
  MANAGEMENT: 'blue',
  GAMES: 'purple'
}

function FeaturedProjectCard({ project }) {
  const tagColor = TAG_COLOR_MAP[project?.type?.toUpperCase()]
  const [readMore, setReadMore] = useState(false)
  const [isTruncated, setIsTruncated] = useState(false)
  const descriptionRef = useRef(null)

  useEffect(() => {
    const el = descriptionRef.current
    if (el) {
      setIsTruncated(el.scrollHeight > el.clientHeight)
    }
  }, [project?.description])

  return (
    <div className='featured-project-card'>
      <img
        className='featured-project-image'
        src={project.image}
        alt='arrow icon'
      />
      <div className='featured-project-content'>
        <div className='tags'>
          <div
            className={`featured-project-tag ${
              tagColor ? `featured-project-tag--${tagColor}` : ''
            }`}
          >
            {project?.type}
          </div>
          <div className='featured-project-tag'>FA-2026</div>
        </div>
        <div className='featured-project-title'>
          {project?.name} <br />
        </div>
        <div
          ref={descriptionRef}
          className={`featured-project-description ${
            readMore ? 'featured-project-description--expanded' : ''
          }`}
        >
          {project?.description}
        </div>
        {isTruncated && (
          <button
            className='read-more-button'
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? 'Read less' : 'Read more'}
          </button>
        )}
        <div className='featured-project-learn-more'>
          <a className='learn-more-button'>
            <span className='learn-more-text'>LEARN MORE</span>
            <img src={Arrow} className={'learn-more-arrow'} alt='arrow icon' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProjectCard
