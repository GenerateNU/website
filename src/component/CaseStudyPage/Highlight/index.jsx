import './style.css'

export default function Highlight({ isDesktop, casestudy }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '90vw',
        marginLeft: '2vw'
      }}
    >
      {casestudy.highlights.map((highlight) => (
        <div style={{ marginBottom: '10vw' }}>
          {highlight.images.length == 1 ? (
            <SingleImageHighlightContainer
              isDesktop={isDesktop}
              highlight={highlight}
            />
          ) : (
            <DoubleImageHighlightContainer
              isDesktop={isDesktop}
              highlight={highlight}
            />
          )}
        </div>
      ))}
    </div>
  )
}

function SingleImageHighlightContainer({ isDesktop, highlight }) {
  return (
    <div style={{ width: '90vw', margin: '3vw' }}>
      <div className='cs-highligh-title-style'>
        {highlight.title.toUpperCase()}
      </div>
      <div>
        <img
          src={highlight.images.at(0)}
          style={{ objectFit: 'cover', height: '100%', width: '100%' }}
        />
      </div>
      <div
        className='cs-highlight-body-style'
        style={{ fontSize: isDesktop ? '2.5vw' : '3vw' }}
      >
        {highlight.body}
      </div>
    </div>
  )
}

function DoubleImageHighlightContainer({ isDesktop, highlight }) {
  return (
    <div style={{ width: '90vw', margin: '3vw' }}>
      <div className='cs-highligh-title-style'>
        {highlight.title.toUpperCase()}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: isDesktop ? 'row' : 'column',
          width: 'fit-content'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: isDesktop ? 'column' : 'row',
            height: '40vw'
          }}
        >
          <img
            src={highlight.images.at(0)}
            style={{ width: '45vw', height: '100%', objectFit: 'cover' }}
          />
          <img
            src={highlight.images.at(1)}
            style={{
              width: '45vw',
              height: '100%',
              objectFit: 'cover',
              marginLeft: isDesktop ? '' : '10px',
              marginTop: isDesktop ? '10px' : ''
            }}
          />
        </div>
        <div
          className='cs-highlight-body-style'
          style={{
            fontSize: isDesktop ? '2.5vw' : '3vw',
            marginLeft: isDesktop ? '3vw' : ''
          }}
        >
          {highlight.body}
        </div>
      </div>
    </div>
  )
}
