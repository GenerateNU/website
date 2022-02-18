import React, { Component } from 'react';
import ShermanCenterBg from '../../../assets/images/Sherman_Center_Bg.jpg';
import ShermanCenterLogo from '../../../assets/images/Sherman_Center_Logo.png';
import OrganizationIntroduction from './organizationIntro';

export class ShermanCenterIntro extends Component {
    render() {
        const propsBackgroundColor = '#FF6660';
        const introduction = <span><strong>The Sherman Center</strong>'s mission is to enable interdisciplinary student entrepreneurship by providing both education about tools, concepts, and resources to foster creativity and the ability to develop commercially viable ideas.</span>;
        
        return (
            <OrganizationIntroduction bgColor={propsBackgroundColor}
                                      bgImage={ShermanCenterBg} 
                                      header={'The Sherm'} 
                                      orgLogo={ShermanCenterLogo} 
                                      intro={introduction} />
        );
    }
}

export default ShermanCenterIntro;