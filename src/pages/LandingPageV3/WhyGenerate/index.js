import Placeholder from '../../../assets/images/landingpage/weare/landing.jpg'
import './style.css'

export default function WhyGenerate() {
  return (
    <div className='bg-row' id='ll4-row'>
      <div>
        <div className='white-header-text'>Why Generate?</div>
        <div className='why-gen-container'>
          <div className='why-gen-col'>
            <div className='white-h2-text'>Members</div>
            <div className='why-gen-col-content'>
            <p className='white-p-text'>
              Generate offers a supportive experiential learning opportunity
              where students learn and practice product development and
              leadership in their respective disciplines. In addition to real
              experience working with industry best practices for real clients,
              Generate{'’'}s focuses on community and ensuring members become
              life-long friends.
            </p>
            <img
              src={Placeholder}
              className='why-gen-img'
              alt='Placeholder'
            />
            </div>
          </div>
          <div className='why-gen-col'>
            <div className='white-h2-text'>Clients</div>
            <div className='why-gen-col-content' id="wgcc-rev">
            <img
              src={Placeholder}
              className='why-gen-img'
              alt='Placeholder'
            />
            <p className='white-p-text'>
              We collaborate with clients across the global Northeastern
              community to help scale their ventures! Over a semester, you’ll
              collaborate with a dedicated team of students to agree on
              priorities, deliverables, and outcomes so that they can build your
              product while you dedicate time to growing your userbase and
              gathering funding!
            </p>
            </div>
          </div>
          <div className='why-gen-col'>
            <div className='white-h2-text'>Partners</div>
            <div className='why-gen-col-content'>
              <p className='white-p-text'>
                Generate’s students are experienced builders and team players
                with experiential, real-world experience. As part of a
                collaborative community, they build each other up and look out
                for one another. Partnering with Generate ensures your
                visibility to our students.
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