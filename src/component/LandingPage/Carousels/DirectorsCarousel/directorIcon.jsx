import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

export default function DirectorIcon({title, inactiveIcon, activeIcon, changeSlide}) {
    return (
        <div className='p-0 fit-content'>
            <Button value={title} 
                className='bg-transparent fit-content p-0 border-0 rounded-0 shadow-none'
                onClick={changeSlide}>
                    <div className='position-relative'>
                        {/* TODO: figure out why community icons diverge when screen width smaller */}
                        <Image className='team-icon active-icon' src={activeIcon} />
                        <Image className='position-absolute start-0 team-icon inactive-icon' src={inactiveIcon} />
                    </div>
            </Button>
        </div>
    );
}