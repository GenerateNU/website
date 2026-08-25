import members from '../../../assets/images/landingpage/weare/members.JPG'
import clients from '../../../assets/images/landingpage/weare/cstar.jpg'
import partners from '../../../assets/images/landingpage/weare/overhead.jpg'
import { useSanity } from '../../../services/useSanity'

export default function WhyGenerate() {
  const query1 = `*[_type == "copy" && key == "why-generate-1"]{header, content}`
  const whyGenerate1 = useSanity(query1)
  const query2 = `*[_type == "copy" && key == "why-generate-2"]{header, content}`
  const whyGenerate2 = useSanity(query2)
  const query3 = `*[_type == "copy" && key == "why-generate-3"]{header, content}`
  const whyGenerate3 = useSanity(query3)

  return (
    <div className='bg-row' id='ll4-row'>
      <div id="why-generate">
        <div className='white-header-text'>Why Generate?</div>
        <div className='why-gen-container'>
          <div className='why-gen-col'>
            <div className='white-h2-text'>
              {whyGenerate1 && whyGenerate1[0] && whyGenerate1[0].header}
            </div>
            <div className='why-gen-col-content'>
              <p className='white-p-text'>
                {whyGenerate1 && whyGenerate1[0] && whyGenerate1[0].content[0]}
              </p>
              <img
                src={members}
                className='why-gen-img image-shadow'
                alt='Placeholder'
              />
            </div>
          </div>
          <div className='why-gen-col'>
            <div className='white-h2-text'>
              {whyGenerate2 && whyGenerate2[0] && whyGenerate2[0].header}
            </div>
            <div className='why-gen-col-content' id='wgcc-rev'>
              <img
                src={clients}
                className='why-gen-img  image-shadow'
                alt='Placeholder'
              />
              <p className='white-p-text'>
                {whyGenerate2 && whyGenerate2[0] && whyGenerate2[0].content[0]}
              </p>
            </div>
          </div>
          <div className='why-gen-col'>
            <div className='white-h2-text'>
              {whyGenerate3 && whyGenerate3[0] && whyGenerate3[0].header}
            </div>
            <div className='why-gen-col-content'>
              <p className='white-p-text'>
                {whyGenerate3 && whyGenerate3[0] && whyGenerate3[0].content[0]}
              </p>
              <img
                src={partners}
                className='why-gen-img image-shadow'
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
