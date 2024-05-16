import React, { useState } from 'react';
import Image from 'react-bootstrap/esm/Image';
import './style.css';

export default function ValueCard({
    value = {
        'title': '',
        'color': '',
        'image': null,
        'text': '',
    },
}) {
    const [showText, setShowText] = useState(false);

    return (
        <div className='value-card'>
            <div className='d-inline-block position-relative value-card-sizing'
                style={{boxShadow: !showText ? `.5rem .6rem ${value.color}` : ''}}
                onMouseEnter={() => setShowText(true)}
                onMouseLeave={() => setShowText(false)}>
                <Image src={value.image} 
                        className={`position-absolute top-0 start-0 fit-image
                                    ${showText ? 'tint' : ''}`} />
                <div className='position-absolute w-100 h-100 start-0 top-0 p-2'>
                    <p className='value-card-text'>
                        {showText && value.text}
                    </p>
                    <h4 className='value-card-header text-uppercase position-absolute start-0 bottom-0 ms-2'
                        style={{WebkitTextStrokeColor: value.color}}>
                        {value.title}
                    </h4>
                </div>
            </div>
        </div>
    );
}