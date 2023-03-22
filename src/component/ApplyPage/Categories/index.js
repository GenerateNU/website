import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { findPositionsByCategory } from '../../../services/positionService';
import { findAllCategories } from '../../../services/categoryService';

export default function Categories() {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [communityEngagement, setCommunityEngagement] = useState([]);
    const [contentCreation, setContentCreation] = useState([]);
    const [dataScience, setDataScience] = useState([]);
    const [design, setDesign] = useState([]);
    const [engineering, setEngineering] = useState([]);
    const [leadership, setLeadership] = useState([]);
    const [operations, setOperations] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            const data = await findAllCategories();
            setCategories(data);
        };
        getCategories();
    }, []);

    useEffect(() => {
        const getPositions = async () => {
            var data = await findPositionsByCategory('Community Engagement');
            setCommunityEngagement(data);
            data = await findPositionsByCategory('Content Creation');
            setContentCreation(data);
            data = await findPositionsByCategory('Data Science');
            setDataScience(data);
            data = await findPositionsByCategory('Design');
            setDesign(data);
            data = await findPositionsByCategory('Engineering');
            setEngineering(data);
            data = await findPositionsByCategory('Leadership');
            setLeadership(data);
            data = await findPositionsByCategory('Operations');
            setOperations(data);
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

                    <div className="toggle-btn" onClick={() => handleSelection('Community Engagement', 13)}
                        id="toggle" name="toggle">
                        {'Community Engagement'}
                    </div>
                    <div id={13} className="accordion-content">
                        {
                            design.map(hardwarePositions =>
                                <div className='accordion_link'
                                    key={hardwarePositions.id}>
                                    <Link style={{ textDecoration: 'none', color: '#187DFF' }} to={`/positions/${hardwarePositions.id}`}>
                                        {hardwarePositions.attributes.positionTitle}
                                    </Link>
                                </div>
                            )
                        }
                    </div>


                    <div className="toggle-btn" onClick={() => handleSelection('Content Creation', 12)}
                        id="toggle" name="toggle">
                        {'Content Creation'}
                    </div>
                    <div id={12} className="accordion-content">
                        {
                            dataScience.map(softwarePositions =>
                                <div className='accordion_link'
                                    key={softwarePositions.id}>
                                    <Link style={{ textDecoration: 'none', color: '#187DFF' }} to={`/positions/${softwarePositions.id}`}>
                                        {softwarePositions.attributes.positionTitle}
                                    </Link>
                                </div>
                            )
                        }
                    </div>


                    <div className="toggle-btn" onClick={() => handleSelection('Data Science', 14)}
                        id="toggle" name="toggle">
                        {'Data Science'}
                    </div>
                    <div id={14} className="accordion-content">
                        {
                            engineering.map(engagementPositions =>
                                <div className='accordion_link'
                                    key={engagementPositions.id}>
                                    <Link style={{ textDecoration: 'none', color: '#187DFF' }} to={`/positions/${engagementPositions.id}`}>
                                        {engagementPositions.attributes.positionTitle}
                                    </Link>
                                </div>
                            )
                        }
                    </div>

                    <div className="toggle-btn" onClick={() => handleSelection('Design', 7)}
                        id="toggle" name="toggle">
                        {'Design'}
                    </div>
                    <div id={7} className="accordion-content">
                        {
                            communityEngagement.map(operationsPositions =>
                                <div className='accordion_link'
                                    key={operationsPositions.id}>
                                    <Link style={{ textDecoration: 'none', color: '#187DFF' }} to={`/positions/${operationsPositions.id}`}>
                                        {operationsPositions.attributes.positionTitle}
                                    </Link>
                                </div>
                            )
                        }
                    </div>

                    <div className="toggle-btn" onClick={() => handleSelection('Engineering', 11)}
                        id="toggle" name="toggle">
                        {'Engineering'}
                    </div>
                    <div id={11} className="accordion-content">
                        {
                            contentCreation.map(managementPositions =>
                                <div className='accordion_link'
                                    key={managementPositions.id}>
                                    <Link style={{ textDecoration: 'none', color: '#187DFF' }} to={`/positions/${managementPositions.id}`}>
                                        {managementPositions.attributes.positionTitle}
                                    </Link>
                                </div>
                            )
                        }
                    </div>


                    <div className="toggle-btn" onClick={() => handleSelection('Leadership', 15)}
                        id="toggle" name="toggle">
                        {'Leadership'}
                    </div>
                    <div id={15} className="accordion-content">
                        {
                            operations.map(clientsPositions =>
                                <div className='accordion_link'
                                    key={clientsPositions.id}>
                                    <Link style={{ textDecoration: 'none', color: '#187DFF' }} to={`/positions/${clientsPositions.id}`}>
                                        {clientsPositions.attributes.positionTitle}
                                    </Link>
                                </div>
                            )
                        }
                    </div>

                    <div className="toggle-btn" onClick={() => handleSelection('Operations', 16)}
                         id="toggle" name="toggle">
                        {'Operations'}
                    </div>
                    <div id={16} className="accordion-content">
                        {
                            operations.map(clientsPositions =>
                                <div className='accordion_link'
                                     key={clientsPositions.id}>
                                    <Link style={{ textDecoration: 'none', color: '#187DFF' }} to={`/positions/${clientsPositions.id}`}>
                                        {clientsPositions.attributes.positionTitle}
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