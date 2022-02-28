import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import GenerateSummary from './generateSummary';
import TheSherm from './theSherm';
import GenerateShowcase from './generateShowcase';
import './generateIntro.css';

/**
 * Introduction to Generate, the goals of the organization, and the work involved.
 */
export class GenerateIntroBanner extends Component {
  render() {
    return (
        <Container fluid className='py-7 px-6'>
            <GenerateSummary />
            <div className='dividing-margin'></div>
            <div className='px-6'>
                <TheSherm />
                <div className='dividing-margin'></div>
                <GenerateShowcase />
            </div>
        </Container>
    );
  }
}

export default GenerateIntroBanner;