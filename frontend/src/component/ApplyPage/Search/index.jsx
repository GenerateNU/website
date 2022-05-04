import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { searchPositions } from '../../../services/positionService';
import PositionListItem from './positionListItem';
import './style.css';

export default function Search({className=''}) {
    const [positions, setPositions] = useState([]);
    const queryRef = useRef();
    
    const fetchSongs = async e => {
        e.preventDefault();
        const query = queryRef.current.value;

        if (query) {
            const data = await searchPositions(query);
            setPositions(data);
        } else {
            setPositions([]);
        }
    };

    useEffect(() => {
        console.log('positions changed')
        console.log(`got ${positions.length} position(s)`)
        console.log(positions)
    }, [positions]);

    return (
        <div id='search' className={`dropdown search-field ${className}`}>
            {/* Search form */}
            <div className='d-flex align-items-center'>
                <input ref={queryRef}
                        id='navbarDropdown'
                        className='form-control p-2 border-0 shadow-none bg-transparent border-bottom border-white rounded-0 text-white' 
                        type='search'
                        placeholder='search positions'
                        onInput={fetchSongs} />
                <i className="fa fa-search fa-lg mx-2 text-white"></i>
            </div>

            {/* Search results dropdown */}
            {
                positions.length > 0 &&
                <ul className='show dropdown-menu rounded-0 shadow-sm border-top-0'>
                    {
                        positions.map(position =>
                            <li key={position.id} className='dropdown-item'>
                                <Link to={`/positions/${position.id}`}
                                    className='text-decoration-none'>
                                    <PositionListItem position={position.attributes} />
                                </Link>
                            </li>
                        )
                    }
                </ul>
            }
        </div>
  );
}