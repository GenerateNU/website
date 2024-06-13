import Placeholder from '../../../assets/images/landingpage/weare/landing.jpg'

export default function WeAre() {
  return (
    <div id='ll3-row' className='bg-row'>
      <div className='blue-left-container' id='we-are'>
        <div className='white-header-text'>We Are...</div>
        <img
          className='we-are-image'
          src={Placeholder}
          alt='Placeholder'
        />
        <div id='values'>
          <div id='values-container'>
            <div id='value-dri' className='value'>
              Driven
            </div>
            <div id='value-emp' className='value'>
              Empathetic
            </div>
            <div id='value-go' className='value'>
              Growth-oriented
            </div>
            <div id='value-inno' className='value'>
              Innovative
            </div>
            <div id='value-spi' className='value'>
              Sprited
            </div>
          </div>
        </div>
      </div>
      <div className='ll-container'>
        <div id='landing-lines-3' className='landing-lines' />
      </div>
    </div>
  )
}
