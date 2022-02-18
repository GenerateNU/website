import React, { Component } from 'react';
import OrganizationIntroduction from './organizationIntro';
import MosaicBg from '../../../assets/images/Mosaic_Bg.jpg';
import MosaicLogo from '../../../assets/images/Mosaic_Logo.png';

export class MosaicIntro extends Component {
    render() {
        const propsBackgroundColor = '#1477F8';
        const introduction = <span><strong>MOSAIC</strong> is Northeastern’s diverse community of driven multidisciplinary individuals who share a passion for entrepreneurship, collaboration and leadership. Offering disciplines and skills that benefit the university’s entrepreneurship community. </span>;
        
        return (
            <OrganizationIntroduction bgColor={propsBackgroundColor}
                                      bgImage={MosaicBg} 
                                      header={'Mosaic'} 
                                      orgLogo={MosaicLogo} 
                                      intro={introduction} />
        );
    }
}
  
export default MosaicIntro;