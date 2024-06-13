import Placeholder from '../../../assets/images/landingpage/weare/landing.jpg'

export default function WeAre() {
  return (
    <div className='grid-bg padded-container'>
      <div className='white-header-text'>We Are...</div>
      <img
        src={Placeholder}
        style={{ height: '40vw', width: '56vw', marginTop: '1vw'}}
        alt='Placeholder'
      />
    </div>
  )
}
