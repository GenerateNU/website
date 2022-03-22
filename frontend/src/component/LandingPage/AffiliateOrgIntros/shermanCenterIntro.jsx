import React, { Component } from 'react';
import OrganizationIntroduction from './organizationIntro';
import shermanCenterBg from '../../assets/images/Sherman_Center_Bg.jpg';
import shermanCenterLogo from '../../assets/images/Sherman_Center_Logo.png';

/**
 * Component introducing the Sherman Center.
 */
export default class ShermanCenterIntro extends Component {
    render() {
        const introduction = <span><strong>The Sherman Center</strong>'s mission is to enable interdisciplinary student entrepreneurship by providing both education about tools, concepts, and resources to foster creativity and the ability to develop commercially viable ideas.</span>;
        
        return (
            <OrganizationIntroduction bgColor='#FF6660'
                                      bgImage={shermanCenterBg} 
                                      header='The Sherm'
                                      orgLogo={shermanCenterLogo} 
                                      intro={introduction} />
        );
    }
}