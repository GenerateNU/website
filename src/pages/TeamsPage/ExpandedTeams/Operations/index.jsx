import useWebsite from '../../../../shared/useWebsite'
import TeamPageFooter from '../CommonTeam/TeamPageFooter'

function WebHeader() {
  return (
    <div className='header-wrapper'>
      <div className='management-header'>
        <div className='header-title'>
          <div className='header-text'>
            <div style={{ marginTop: '-10%', marginBottom: '-10%' }}>
              OPRTNS
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MobileHeader() {
  return (
    <div className='mobile-header-wrapper'>
      <div className='mobile-management-header'>
        <div className='mobile-header-title'>
          <div className='mobile-header-text'>
            <div style={{ marginTop: '-10%', marginBottom: '-10%' }}>
              OPRTNS
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Operations = () => {
  const isWebsite = useWebsite()
  const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches
  const mobile = !isBigScreen || !isWebsite
  console.log('is it desktop?', !mobile)
  return !mobile ? (
    <div>
      <WebHeader />
      <div id='operations'></div>
      <TeamPageFooter color={'#187DFF'} page={'OPRTNS'} />
    </div>
  ) : (
    <div>
      <MobileHeader />
      <div id='mobile-operations'></div>
      <TeamPageFooter color={'#187DFF'} page={'OPRTNS'} />
    </div>
  )
  //<div id="management"></div>;
}

export default Operations
