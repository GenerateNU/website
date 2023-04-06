import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { findPositionsByCategory } from '../../../services/positionService';
import { findAllCategories } from '../../../services/categoryService';

export default function Categories(props) {
    
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [management, setManagement] = useState([]);
    const [clients, setClients] = useState([]);
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
            data = await findPositionsByCategory('Clients');
            setClients(data);
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
        console.log(content);
        content.classList.toggle("toggle-container");
    }

    return (
        categories.length > 0 &&
        <div>
            {
                <div className="accordion">

                    <div className="toggle-btn" onClick={() => handleSelection('Management', props.disp+13)}
                        id="toggle" name="toggle">
                        {'Management'}
                    </div>
                    <div id={props.disp+13} className="accordion-content">
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


                    <div className="toggle-btn" onClick={() => handleSelection('Clients', props.disp+12)}
                        id="toggle" name="toggle">
                        {'Clients'}
                    </div>
                    <div id={props.disp+12} className="accordion-content">
                        {
                            clients.map(clientsPositions =>
                                <div className='accordion_link'
                                    key={clientsPositions.id}>
                                    <Link style={{ textDecoration: 'none', color: '#187DFF' }} to={`/positions/${clientsPositions.id}`}>
                                        {clientsPositions.attributes.positionTitle}
                                    </Link>
                                </div>
                            )
                        }
                    </div>


                    <div className="toggle-btn" onClick={() => handleSelection('Software', props.disp+14)}
                        id="toggle" name="toggle">
                        {'Software'}
                    </div>
                    <div id={props.disp+14} className="accordion-content">
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

                    <div className="toggle-btn" onClick={() => handleSelection('Hardware', props.disp+7)}
                        id="toggle" name="toggle">
                        {'Hardware'}
                    </div>
                    <div id={props.disp+7} className="accordion-content">
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

                    <div className="toggle-btn" onClick={() => handleSelection('Operations', props.disp+11)}
                        id="toggle" name="toggle">
                        {'Operations'}
                    </div>
                    <div id={props.disp+11} className="accordion-content">
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


                    <div className="toggle-btn" onClick={() => handleSelection('Engagement', props.disp+15)}
                        id="toggle" name="toggle">
                        {'Engagement'}
                    </div>
                    <div id={props.disp+15} className="accordion-content">
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
                    </div>-
                </div>
            }
        </div>
    );
}