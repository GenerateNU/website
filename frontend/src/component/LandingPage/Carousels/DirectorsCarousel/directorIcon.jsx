import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Image from 'react-bootstrap/esm/Image';

export default function DirectorIcon(props) {
    return (
        <div className='p-0 fit-content'>
            <Button value={props.title} 
                className='bg-transparent fit-content p-0 border-0 rounded-0 shadow-none'
                onClick={props.changeSlide}>
                    <div className='position-relative'>
                        {/* TODO: figure out why community icons diverge when screen width smaller */}
                        <Image className='team-icon active-icon' src={props.activeIcon} />
                        <Image className='position-absolute start-0 team-icon inactive-icon' src={props.inactiveIcon} />
                    </div>
            </Button>
        </div>
    );
}