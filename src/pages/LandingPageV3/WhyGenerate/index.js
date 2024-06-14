import Placeholder from '../../../assets/images/landingpage/weare/landing.jpg'
import { useSanity } from '../../../services/useSanity'
import './style.css'

export default function WhyGenerate() {
  const query1 = `*[_type == "copy" && key == "why-generate-1"]{header, content}`
  const whyGenerate1 = useSanity(query1)
  const query2 = `*[_type == "copy" && key == "why-generate-2"]{header, content}`
  const whyGenerate2 = useSanity(query2)
  const query3 = `*[_type == "copy" && key == "why-generate-3"]{header, content}`
  const whyGenerate3 = useSanity(query3)

  return (
    <div className='bg-row' id='ll4-row'>
      <div>
        <div className='white-header-text'>Why Generate?</div>
        <div className='why-gen-container'>
          <div className='why-gen-col'>
            <div className='white-h2-text'>
              {whyGenerate1 && whyGenerate1[0].header}
            </div>
            <div className='why-gen-col-content'>
              <p className='white-p-text'>
                {whyGenerate1 && whyGenerate1[0].content[0]}
              </p>
              <img
                src={Placeholder}
                className='why-gen-img'
                alt='Placeholder'
              />
            </div>
          </div>
          <div className='why-gen-col'>
            <div className='white-h2-text'>
              {whyGenerate2 && whyGenerate2[0].header}
            </div>
            <div className='why-gen-col-content' id='wgcc-rev'>
              <img
                src={Placeholder}
                className='why-gen-img'
                alt='Placeholder'
              />
              <p className='white-p-text'>
                {whyGenerate2 && whyGenerate2[0].content[0]}
              </p>
            </div>
          </div>
          <div className='why-gen-col'>
            <div className='white-h2-text'>
              {whyGenerate3 && whyGenerate3[0].header}
            </div>
            <div className='why-gen-col-content'>
              <p className='white-p-text'>
                {whyGenerate3 && whyGenerate3[0].content[0]}
              </p>
              <img
                src={Placeholder}
                className='why-gen-img'
                alt='Placeholder'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='ll-container'>
        <div id='landing-lines-4' className='landing-lines' />
      </div>
    </div>
  )
}
