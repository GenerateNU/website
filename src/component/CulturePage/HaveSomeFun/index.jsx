import React from 'react';
import './index.css'
import fun1 from "../../../assets/images/culturepage/fun1.png"
import fun2 from "../../../assets/images/culturepage/fun2.png"
import fun3 from "../../../assets/images/culturepage/fun3.png"

export default function HaveSomeFun() {
    return (
        <div className='row tealbackground'>
            <div className='col'>
                <div className="col d-flex flex-column align-items-center">
                    <img className='mt-2 mt-3 mb-2 pt-5' src={fun1} alt="Image 1"/>
                    <img className='mt-2 mb-2 pt-5' src={fun2} alt="Image 2"/>
                    <img className='mt-2 mb-2 pt-5 pb-5' src={fun3} alt="Image 3"/>
                </div>
            </div>
            <div className='col'>
                <p className='vertical-text-fun mt-5 pr-0'>HAVE SOME FUN WITH US <div className='vertical-line'></div></p>
            </div>
        </div>
    );
}