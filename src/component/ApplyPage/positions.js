import React, { useEffect, useState } from 'react';
import { findAllPositions } from '../../services/positionService';

export default function Positions() {
    const [positions, setPositions] = useState();

    useEffect(() => {
        const getPositions = async () => {
            const data = await findAllPositions();
            console.log(data);
            setPositions(data);
        }; 
        getPositions();
    }, positions);

    return (
        positions.length > 0 &&
        <div>
            {
                positions.map((position) => {
                    return(<div>
                        <h1>{position && position.attributes && position.attributes.PositionTitle}</h1>
                    </div>)
                })
            }
        </div>
    );
}