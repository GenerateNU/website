import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { findPositionsByCategory } from '../../../services/positionService';
import { findAllCategories } from '../../../services/categoryService';
import { useNavigate } from 'react-router-dom';

const CATEGORIES = ["management", "clients", "software", "hardware", "operations", "engagement"];

export default function Categories(props) {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [management, setManagement] = useState([]);
    const [clients, setClients] = useState([]);
    const [software, setSoftware] = useState([]);
    const [hardware, setHardware] = useState([]);
    const [operations, setOperations] = useState([]);
    const [engagement, setEngagement] = useState([]);

    useEffect(() => {
        if (props.selectedTeam) {
            const content = document.getElementById(props.selectedTeam);
            if (content) {
                content.classList.toggle("toggle-container");
                setSelectedCategory(props.selectedTeam);
            }
        }

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


    const handleSelection = (selected) => {
        setSelectedCategory(selected === selectedCategory ? "" : selected);
        const visible = document.getElementById(selected).classList.toggle("toggle-container");

        if (visible) {
            CATEGORIES.forEach((category) => {
                const content = document.getElementById(category);
                if (category !== selected && content.checkVisibility()) {
                    content.classList.toggle("toggle-container")
                }
            })
            navigate(`/apply/${selected.toLowerCase()}`);
        } 
        else { 
            navigate(`/apply`);
        }
    }

    return (
        categories.length === 0 &&
        <div>
            {
                <div className="accordion">

                    <div className="toggle-btn" onClick={() => handleSelection('management')}
                        id="toggle" name="toggle">
                        {'management'}
                    </div>
                    <div id={'management'} className="accordion-content">
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


                    <div className="toggle-btn" onClick={() => handleSelection('clients')}
                        id="toggle" name="toggle">
                        {'clients'}
                    </div>
                    <div id={'clients'} className="accordion-content">
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


                    <div className="toggle-btn" onClick={() => handleSelection('software')}
                        id="toggle" name="toggle">
                        {'software'}
                    </div>
                    <div id={'software'} className="accordion-content">
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

                    <div className="toggle-btn" onClick={() => handleSelection('hardware')}
                        id="toggle" name="toggle">
                        {'hardware'}
                    </div>
                    <div id={'hardware'} className="accordion-content">
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

                    <div className="toggle-btn" onClick={() => handleSelection('operations')}
                        id="toggle" name="toggle">
                        {'operations'}
                    </div>
                    <div id={'operations'} className="accordion-content">
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


                    <div className="toggle-btn" onClick={() => handleSelection('engagement')}
                        id="toggle" name="toggle">
                        {'engagement'}
                    </div>
                    <div id={'engagement'} className="accordion-content">
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