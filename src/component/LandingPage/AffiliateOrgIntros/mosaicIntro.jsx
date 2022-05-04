import React, { Component } from 'react';
import OrganizationIntroduction from './organizationIntro';
import mosaicBg from '../../../assets/images/landingpage/affiliateorgintros/Mosaic_Bg.jpg';
import mosaicLogo from '../../../assets/images/landingpage/affiliateorgintros/Mosaic_Logo.png';

/**
 * Component introducing Mosaic.
 */
export default class MosaicIntro extends Component {
    render() {
        const introduction = <span><span className='text-white'>MOSAIC</span> is Northeastern’s diverse community of driven multidisciplinary individuals who share a passion for entrepreneurship, collaboration and leadership. Offering disciplines and skills that benefit the university’s entrepreneurship community. </span>;
        
        return (
            <OrganizationIntroduction bgColor='#1477F8'
                                      bgImage={mosaicBg} 
                                      header='Mosaic' 
                                      orgLogo={mosaicLogo} 
                                      intro={introduction} />
        );
    }
}