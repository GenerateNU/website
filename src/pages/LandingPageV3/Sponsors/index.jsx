export default function Sponsors() {
  return (
    <div className='bg-row' id='ll8-row'>
      <div id="sponsors-container">
        <div className='white-header-text' id='sponsors-header'>
          Sponsors
        </div>
        <div id='sponsors-content'>
          {/* 
          
          To add sponsors, add their image to the public/images/LandingPageImages folder as a .png.
          
          Give the Image tag a class of sponsor-logo and the site should respond & resize to accomodate!
          */}
            <img className="sponsor-logo image-shadow" alt="Logo for the company Altium." src="/images/LandingPageImages/altium.png" />
        </div>
      </div>
    </div>
  )
}
