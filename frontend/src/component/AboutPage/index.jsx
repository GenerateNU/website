import React, { Component } from 'react';
import History from './history'
import Timeline from './timeline'


export class AboutPage extends Component {
    render() {
        return (
            <>
                <History />
                <Timeline />
            </>
        );
    }
}

export default AboutPage;