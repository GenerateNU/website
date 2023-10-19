import './style.css'
import ShadowedButton from '../../ShadowedButton'

export default function UpNext({ isDesktop, casestudy }) {
  return (
    <div
      style={{
        borderTop: '2vw #187DFF solid',
        marginLeft: '10vw',
        marginRight: '10vw',
        paddingBottom: '10vw'
      }}
    >
      <div className='upnext-style'>Up Next</div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <div>
          <div className='project-style'>
            {casestudy.next.project.toUpperCase()}
          </div>
          <div className='date-style'>'{casestudy.next.date}</div>
        </div>
        <div className='view-cs-fp-project-div'>
          <ShadowedButton
            fillColor='#ffbf3c'
            xPad={'3vw'}
            yPad={'2.5vw'}
            fontSize={'2vw'}
            text='view project -- >'
            onClick={() =>
              (window.location.href = `/case-study/${casestudy.next.project}`)
            }
          />
        </div>
      </div>
    </div>
  )
}
