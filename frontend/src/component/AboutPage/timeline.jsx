import React, { Component } from 'react';
import './timeline.css'
import TimelineImg from '../AboutPage/Timeline.png'

export default function timeline() {
  return (
      <>
      <div id='container'>
        <div className='timeline-bg-image'>
            <div class="containerbackground">
                <p>Our Timeline</p>
            </div>
            <img src={TimelineImg} alt="" height='80vh' width='70%'/>
            <div className='Spring2016-1'>
                <div>
                    <h1>&lt;</h1>
                </div>
                <div className='Spring2016-text'>
                    <p>Generate is founded by students Bailey Kane and Mina 
                    Iskarous, with the help of Ted Johnson, Assistant 
                    Program Manager of the Sherman Center, and Shashi 
                    Murthy, Director of the Sherman Center at the time.</p>
                </div>
            </div>
            <div className='Spring2016-2'>
                <div>
                    <h1>&lt;</h1>
                </div>
                <div className='Spring2016-text-2'>
                    <p>We take on our first wave of clients, creating our 
                        initial 2 hardware teams.</p>
                </div>
            </div>

            <div className='Spring2018'>
                <div>
                    <h1>&lt;</h1>
                </div>
                <div className='Spring2018-text'>
                    <p>We take on our first software client, Malaria Free World</p>
                </div>
            </div>

            <div className='Fall2019-1'>
                <div>
                    <h1>&lt;</h1>
                </div>
                <div className='Fall2019-text-1'>
                    <p>The Makerspace opens for access in Hayden Hall.</p>
                </div>
            </div>

            <div className='Fall2019-2'>
                <div>
                    <h1>&lt;</h1>
                </div>
                <div className='Fall2019-text-2'>
                    <p>Smartypill becomes our first client to have a Hardware 
                        and a Software team working on their project</p>
                </div>
            </div>

            <div className='Spring2021-1'>
                <div>
                    <h1>&lt;</h1>
                </div>
                <div className='Spring2021-text'>
                    <p>Funding is acquired to allow the Executive Director 
                        to be paid as a full time position.</p>
                </div>
            </div>
            <div className='Spring2021-2'>
                <div>
                    <h1>&lt;</h1>
                </div>
                <div className='Spring2021-text-2'>
                    <p>Designers are added to Hardware Build Studio teams 
                        and brand designs to Software teams</p>
                </div>
            </div>


        </div>
      </div>
      </>
    
  )
}

