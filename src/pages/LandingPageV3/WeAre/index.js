import Placeholder from '../../../assets/images/landingpage/weare/landing.jpg'
import { useSanity } from '../../../services/useSanity'

export default function WeAre() {
  const query = `*[_type == "value"] {value, index} | order(index asc)`
  const values = useSanity(query)

  return (
    <div id='ll3-row' className='bg-row'>
      <div id='we-are'>
        <div className='white-header-text'>We Are...</div>
        <div className='we-are-container'>
          <div className='we-are-img-div'>
            <img className='we-are-img image-shadow' src={Placeholder} alt='Placeholder' />
          </div>
          <div id='values'>
            <div id='values-container'>
              <div id='value-0' className='value'>
                {values && values[0] && values[0].value}
              </div>
              <div id='value-1' className='value'>
                {values && values[1] && values[1].value}
              </div>
              <div id='value-2' className='value'>
                {values && values[2] && values[2].value}
              </div>
              <div id='value-3' className='value'>
                {values && values[3] && values[3].value}
              </div>
              <div id='value-4' className='value'>
                {values && values[4] && values[4].value}
              </div>
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
