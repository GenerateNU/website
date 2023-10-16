import './style.css'

export default function Highlight({ isDesktop, casestudy }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90vw',
        margin: 'auto'
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
    <div className='cs-singleimagehighlight-container'>
      <div className='cs-highligh-title-style'>
        {highlight.title.toUpperCase()}
      </div>
      <div className='cs-image-style'>
        <img src={highlight.images.at(0)} style={{ width: '70vw' }} />
      </div>
      <div
        className='cs-highlight-body-style'
        style={{ fontSize: isDesktop ? '2vw' : '3vw' }}
      >
        {highlight.body}
      </div>
    </div>
  )
}

function DoubleImageHighlightContainer({ isDesktop, highlight }) {
  return (
    <div className='cs-singleimagehighlight-container'>
      <div className='cs-highligh-title-style'>
        {highlight.title.toUpperCase()}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: isDesktop ? 'row' : 'column',
          width: 'fit-content',
          justifyContent: 'center',
          alignItems: 'center'
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
            style={{ width: '30vw', height: '100%', objectFit: 'cover' }}
          />
          <img
            src={highlight.images.at(1)}
            style={{
              width: '30vw',
              height: '100%',
              marginLeft: isDesktop ? '' : '10px',
              marginTop: isDesktop ? '10px' : '',
              objectFit: 'cover'
            }}
          />
        </div>
        <div
          className='cs-highlight-body-style'
          style={{ fontSize: isDesktop ? '2vw' : '3vw' }}
        >
          {highlight.body}
        </div>
      </div>
    </div>
  )
}
