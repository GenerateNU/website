import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { findPositionsByCategory } from '../../../services/positionService';
import { findAllCategories } from '../../../services/categoryService';

export default function Categories() {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [management, setManagement] = useState([]);
    const [client, setClient] = useState([]);
    const [software, setSoftware] = useState([]);
    const [hardware, setHardware] = useState([]);
    const [operations, setOperations] = useState([]);
    const [engagement, setEngagement] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            const data = await findAllCategories();
            setCategories(data);
        };
        getCategories();
    }, []);

    //Management, Client, Software, Hardware, Operations and Engagement

    useEffect(() => {
        const getPositions = async () => {
            var data = await findPositionsByCategory('Management');
            setManagement(data);
            data = await findPositionsByCategory('Client');
            setClient(data);
            data = await findPositionsByCategory('Software');
            setSoftware(data);
            data = await findPositionsByCategory('Hardware');
            setHardware(data);
            data = await findPositionsByCategory('Operations');
            setOperations(data);
            data = await findPositionsByCategory('Engagement');
            setEngagement(data);
        }
        getPositions();
    }, [selectedCategory]);


    const handleSelection = (selectedCategory, id) => {
        setSelectedCategory(selectedCategory);
        const content = document.getElementById(id);
        content.classList.toggle("toggle-container");
    }

    return (
        categories.length > 0 &&
        <div>
            {
                <div className="accordion">

                    <div className="toggle-btn" onClick={() => handleSelection('Management', 13)}
                        id="toggle" name="toggle">
                        {'Management'}
                    </div>
                    <div id={13} className="accordion-content">
                        {
                            management.map(managementPositions =>
                                <div className='accordion_link'
                                    key={managementPositions.id}>
                                    <Link style={{ textDecoration: 'none', color: '#187DFF' }} to={`/positions/${managementPositions.id}`}>
                                        {managementPositions.attributes.positionTitle}
                                    </Link>
                                </div>
                            )
                        }
                    </div>


                    <div className="toggle-btn" onClick={() => handleSelection('Client', 12)}
                        id="toggle" name="toggle">
                        {'Client'}
                    </div>
                    <div id={12} className="accordion-content">
                        {
                            client.map(clientPositions =>
                                <div className='accordion_link'
                                    key={clientPositions.id}>
                                    <Link style={{ textDecoration: 'none', color: '#187DFF' }} to={`/positions/${clientPositions.id}`}>
                                        {clientPositions.attributes.positionTitle}
                                    </Link>
                                </div>
                            )
                        }
                    </div>


                    <div className="toggle-btn" onClick={() => handleSelection('Software', 14)}
                        id="toggle" name="toggle">
                        {'Software'}
                    </div>
                    <div id={14} className="accordion-content">
                        {
                            software.map(softwarePositions =>
                                <div className='accordion_link'
                                    key={softwarePositions.id}>
                                    <Link style={{ textDecoration: 'none', color: '#187DFF' }} to={`/positions/${softwarePositions.id}`}>
                                        {softwarePositions.attributes.positionTitle}
                                    </Link>
                                </div>
                            )
                        }
                    </div>

                    <div className="toggle-btn" onClick={() => handleSelection('Hardware', 7)}
                        id="toggle" name="toggle">
                        {'Hardware'}
                    </div>
                    <div id={7} className="accordion-content">
                        {
                            hardware.map(hardwarePositions =>
                                <div className='accordion_link'
                                    key={hardwarePositions.id}>
                                    <Link style={{ textDecoration: 'none', color: '#187DFF' }} to={`/positions/${hardwarePositions.id}`}>
                                        {hardwarePositions.attributes.positionTitle}
                                    </Link>
                                </div>
                            )
                        }
                    </div>

                    <div className="toggle-btn" onClick={() => handleSelection('Operations', 11)}
                        id="toggle" name="toggle">
                        {'Operations'}
                    </div>
                    <div id={11} className="accordion-content">
                        {
                            operations.map(operationsPositions =>
                                <div className='accordion_link'
                                    key={operationsPositions.id}>
                                    <Link style={{ textDecoration: 'none', color: '#187DFF' }} to={`/positions/${operationsPositions.id}`}>
                                        {operationsPositions.attributes.positionTitle}
                                    </Link>
                                </div>
                            )
                        }
                    </div>


                    <div className="toggle-btn" onClick={() => handleSelection('Engagement', 15)}
                        id="toggle" name="toggle">
                        {'Engagement'}
                    </div>
                    <div id={15} className="accordion-content">
                        {
                            engagement.map(engagementPositions =>
                                <div className='accordion_link'
                                    key={engagementPositions.id}>
                                    <Link style={{ textDecoration: 'none', color: '#187DFF' }} to={`/positions/${engagementPositions.id}`}>
                                        {engagementPositions.attributes.positionTitle}
                                    </Link>
                                </div>
                            )
                        }
                    </div>
                </div>
            }
        </div>
    );
}