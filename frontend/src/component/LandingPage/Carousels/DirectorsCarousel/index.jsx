import React, { Component } from 'react';
import GenerateCarousel from '../carousel';
import Client from '../carousel';
import './style.css';

export default class DirectorsCarousel extends Component {
    render() {
        return (
            <GenerateCarousel slideComponent={Client} slideData={GenerateCarousel} bgColor='#FFF9EB' buttonColor='#FFC539' buttonText='Become A Client' />
        );
    }
//     render() {
//         return (

//             <Carousel>


//             {/* Director Kathryn Minor */}

//             <Carousel.Item>
//             <div className="dc_container">
//                 {/* team font */}
//                 <div id='dc_flex-box'>
//                     <div className="dc_team">
//                         DIRECTORS
//                     </div>

//                     {/* image */}
//                     <div className="dc_image">
//                         <img src="../../images/LandingPageImages/Director_Kat.JPG" width="90%" height="100%"></img>

//                     </div>

//                     {/* management team text box */}


//                     <div className="dc_box_container">
//                     <div className="dc_box">
//                         <div className="dc_text">
//                             <p>KATHRYN</p>
//                             <p>MINOR</p>
//                         </div>
//                     </div>

                    
//                         <div className="dc_text_position">
//                             <p>Executive</p>
//                             <p>Director</p> 
//                         </div>
//                         <div className="dc_text_email">
//                             <p>minor.k @ </p>
//                             <p>northeastern.edu</p>
//                         </div>
//                     </div>





//                     {/* management links */}
//                     <div className="dc_links_container">
//                         <div className='dc_mng_outreach'>
//                             <div className="dc_links">
//                                 <img src="../images/LandingPageImages/Management_Grey.png" alt="" />
//                             </div>

//                             <div className="dc_links_Outreach">
//                                 <img src="../images/LandingPageImages/Outreach_Grey.png" alt="" />
//                             </div>
//                         </div>

//                         <div className='dc_opr_software'>
//                             <div className="dc_links_Operations">
//                                 <img src="../images/LandingPageImages/Operations_Grey.png" alt="" />
//                             </div>

//                             <div className="dc_links_Software">
//                                 <img src="../images/LandingPageImages/Software_Grey.png" alt="" />
//                             </div>
//                         </div>

//                         <div className='dc_hardware_comm'>
//                             <div className="dc_links_Hardware">
//                                 <img src="../images/LandingPageImages/Hardware_Grey.png" alt="" />
//                             </div>

//                             <div className="dc_links_Community">
//                                 <img src="../images/LandingPageImages/Community_Grey.png" alt="" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>



//             </div>
//             </Carousel.Item>


//             {/* Director Avital Brodski */}

//             <Carousel.Item>
//             <div className="dc_container">
//                 {/* team font */}
//                 <div id='dc_flex-box'>
//                     <div className="dc_team">
//                         DIRECTORS
//                     </div>

//                     {/* image */}
//                     <div className="dc_image">
//                         <img src="../images/LandingPageImages/Director_Avital.JPG" width="90%" height="100%"></img>

//                     </div>

//                     {/* management team text box */}


//                     <div className="dc_box_container">
//                     <div className="dc_box">
//                         <div className="dc_text">
//                             <p>AVITAL</p>
//                             <p>BRODSKI</p>
//                         </div>
//                     </div>

                    
//                         <div className="dc_text_position">
//                             <p>Outreach</p>
//                             <p>Director</p> 
//                         </div>
//                         <div className="dc_text_email">
//                             <p>brodski.a @ </p>
//                             <p>northeastern.edu</p>
//                         </div>
//                     </div>




//                     {/* management links */}
//                     <div className="dc_links_container">
//                         <div className='dc_mng_outreach'>
//                             <div className="dc_links">
//                                 <img src="../images/LandingPageImages/Management_Grey.png" alt="" />
//                             </div>

//                             <div className="dc_links_Outreach">
//                                 <img src="../images/LandingPageImages/Outreach_Grey.png" alt="" />
//                             </div>
//                         </div>

//                         <div className='dc_opr_software'>
//                             <div className="dc_links_Operations">
//                                 <img src="../images/LandingPageImages/Operations_Grey.png" alt="" />
//                             </div>

//                             <div className="dc_links_Software">
//                                 <img src="../images/LandingPageImages/Software_Grey.png" alt="" />
//                             </div>
//                         </div>

//                         <div className='dc_hardware_comm'>
//                             <div className="dc_links_Hardware">
//                                 <img src="../images/LandingPageImages/Hardware_Grey.png" alt="" />
//                             </div>

//                             <div className="dc_links_Community">
//                                 <img src="../images/LandingPageImages/Community_Grey.png" alt="" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>



//             </div>
//             </Carousel.Item>


//             {/* Director Andrew Cataldo */}

//             <Carousel.Item>
//             <div className="dc_container">
//                 {/* team font */}
//                 <div id='dc_flex-box'>
//                     <div className="dc_team">
//                         DIRECTORS
//                     </div>

//                     {/* image */}
//                     <div className="dc_image">
//                         <img src="../images/LandingPageImages/Director_Andrew.JPG" width="90%" height="100%"></img>

//                     </div>

//                     {/* management team text box */}

//                     <div className="dc_box_container">
//                     <div className="dc_box">
//                         <div className="dc_text">
//                             <p>ANDREW</p>
//                             <p>CATALDO</p>
//                         </div>
//                     </div>
//                     <div className="dc_text_position">
//                             <p>Operations</p>
//                             <p>Director</p> 
//                         </div>
//                         <div className="dc_text_email">
//                             <p>cataldo.a @ </p>
//                             <p>northeastern.edu</p>
//                         </div>
//                     </div>

//                     {/* management links */}
//                     <div className="dc_links_container">
//                         <div className='dc_mng_outreach'>
//                             <div className="dc_links">
//                                 <img src="../images/LandingPageImages/Management_Grey.png" alt="" />
//                             </div>

//                             <div className="dc_links_Outreach">
//                                 <img src="../images/LandingPageImages/Outreach_Grey.png" alt="" />
//                             </div>
//                         </div>

//                         <div className='dc_opr_software'>
//                             <div className="dc_links_Operations">
//                                 <img src="../images/LandingPageImages/Operations_Grey.png" alt="" />
//                             </div>

//                             <div className="dc_links_Software">
//                                 <img src="../images/LandingPageImages/Software_Grey.png" alt="" />
//                             </div>
//                         </div>

//                         <div className='dc_hardware_comm'>
//                             <div className="dc_links_Hardware">
//                                 <img src="../images/LandingPageImages/Hardware_Grey.png" alt="" />
//                             </div>

//                             <div className="dc_links_Community">
//                                 <img src="../images/LandingPageImages/Community_Grey.png" alt="" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             </Carousel.Item>


//             {/* Director Thomas Keith */}

//             <Carousel.Item>
//             <div className="dc_container">
//                 {/* team font */}
//                 <div id='dc_flex-box'>
//                     <div className="dc_team">
//                         DIRECTORS
//                     </div>

//                     {/* image */}
//                     <div className="dc_image">
//                         <img src="../images/LandingPageImages/Director_Thomas.JPG" width="90%" height="100%"></img>

//                     </div>

//                     {/* management team text box */}

//                     <div className="dc_box_container">
//                     <div className="dc_box">
//                         <div className="dc_text">
//                             <p>THOMAS</p>
//                             <p>KEITH</p>
//                         </div>
//                     </div>


//                     <div className="dc_text_position">
//                             <p>Software</p>
//                             <p>Director</p> 
//                         </div>
//                         <div className="dc_text_email">
//                             <p>keith.t @ </p>
//                             <p>northeastern.edu</p>
//                         </div>
//                     </div>



//                     {/* management links */}
//                     <div className="dc_links_container">
//                         <div className='dc_mng_outreach'>
//                             <div className="dc_links">
//                                 <img src="../images/LandingPageImages/Management_Grey.png" alt="" />
//                             </div>

//                             <div className="dc_links_Outreach">
//                                 <img src="../images/LandingPageImages/Outreach_Grey.png" alt="" />
//                             </div>
//                         </div>

//                         <div className='dc_opr_software'>
//                             <div className="dc_links_Operations">
//                                 <img src="../images/LandingPageImages/Operations_Grey.png" alt="" />
//                             </div>

//                             <div className="dc_links_Software">
//                                 <img src="../images/LandingPageImages/Software_Grey.png" alt="" />
//                             </div>
//                         </div>

//                         <div className='dc_hardware_comm'>
//                             <div className="dc_links_Hardware">
//                                 <img src="../images/LandingPageImages/Hardware_Grey.png" alt="" />
//                             </div>

//                             <div className="dc_links_Community">
//                                 <img src="../images/LandingPageImages/Community_Grey.png" alt="" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>



//             </div>
//             </Carousel.Item>



//             {/* Director Josh Batra */}
//             <Carousel.Item>
//             <div className="dc_container">
//                 {/* team font */}
//                 <div id='dc_flex-box'>
//                     <div className="dc_team">
//                         DIRECTORS
//                     </div>

//                     {/* image */}
//                     <div className="dc_image">
//                         <img src="../images/LandingPageImages/Director_Josh.JPG" width="90%" height="100%"></img>

//                     </div>

//                     {/* management team text box */}

//                     <div className="dc_box_container">
//                     <div className="dc_box">
//                         <div className="dc_text">
//                             <p>JOSH</p>
//                             <p>BATRA</p>
//                         </div>
//                     </div>

//                     <div className="dc_text_position">
//                             <p>Hardware</p>
//                             <p>Director</p> 
//                         </div>
//                         <div className="dc_text_email">
//                             <p>batra.j @ </p>
//                             <p>northeastern.edu</p>
//                         </div>
//                     </div>




//                     {/* management links */}
//                     <div className="dc_links_container">
//                         <div className='dc_mng_outreach'>
//                             <div className="dc_links">
//                                 <img src="../images/LandingPageImages/Management_Grey.png" alt="" />
//                             </div>

//                             <div className="dc_links_Outreach">
//                                 <img src="../images/LandingPageImages/Outreach_Grey.png" alt="" />
//                             </div>
//                         </div>

//                         <div className='dc_opr_software'>
//                             <div className="dc_links_Operations">
//                                 <img src="../images/LandingPageImages/Operations_Grey.png" alt="" />
//                             </div>

//                             <div className="dc_links_Software">
//                                 <img src="../images/LandingPageImages/Software_Grey.png" alt="" />
//                             </div>
//                         </div>

//                         <div className='dc_hardware_comm'>
//                             <div className="dc_links_Hardware">
//                                 <img src="../images/LandingPageImages/Hardware_Grey.png" alt="" />
//                             </div>

//                             <div className="dc_links_Community">
//                                 <img src="../images/LandingPageImages/Community_Grey.png" alt="" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>



//             </div>
//             </Carousel.Item>


//             {/* Director Kyle Janko */}

//             <Carousel.Item>
//             <div className="dc_container">
//                 {/* team font */}
//                 <div id='dc_flex-box'>
//                     <div className="dc_team">
//                         DIRECTORS
//                     </div>

//                     {/* image */}
//                     <div className="dc_image">
//                         <img src="../images/LandingPageImages/Director_Andrew.JPG" width="90%" height="100%"></img>

//                     </div>

//                     {/* management team text box */}

//                     <div className="dc_box_container">
//                     <div className="dc_box">
//                         <div className="dc_text">
//                             <p>KYLE</p>
//                             <p>JANKO</p>
//                         </div>
//                     </div>

//                     <div className="dc_text_position">
//                             <p>Community</p>
//                             <p>Director</p> 
//                         </div>
//                         <div className="dc_text_email">
//                             <p>janko.k @ </p>
//                             <p>northeastern.edu</p>
//                         </div>
//                     </div>

//                     {/* management links */}
//                     <div className="dc_links_container">
//                         <div className='dc_mng_outreach'>
//                             <div className="dc_links">
//                                 <img src="../images/LandingPageImages/Management_Grey.png" alt="" />
//                             </div>

//                             <div className="dc_links_Outreach">
//                                 <img src="../images/LandingPageImages/Outreach_Grey.png" alt="" />
//                             </div>
//                         </div>

//                         <div className='dc_opr_software'>
//                             <div className="dc_links_Operations">
//                                 <img src="../images/LandingPageImages/Operations_Grey.png" alt="" />
//                             </div>

//                             <div className="dc_links_Software">
//                                 <img src="../images/LandingPageImages/Software_Grey.png" alt="" />
//                             </div>
//                         </div>

//                         <div className='dc_hardware_comm'>
//                             <div className="dc_links_Hardware">
//                                 <img src="../images/LandingPageImages/Hardware_Grey.png" alt="" />
//                             </div>

//                             <div className="dc_links_Community">
//                                 <img src="../images/LandingPageImages/Community_Grey.png" alt="" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             </Carousel.Item>


//           </Carousel>




//         )


//     }
}