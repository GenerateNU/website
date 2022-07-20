import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { findPositionsByCategory } from '../../../services/positionService';
import { findAllCategories } from '../../../services/categoryService';

export default function Categories() {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [positions, setPositions] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            const data = await findAllCategories();
            setCategories(data);
        };
        getCategories();
    }, []);

    useEffect(() => {
        const getPositions = async () => {
            const data = await findPositionsByCategory(selectedCategory);
            console.log("data", data);
            console.log("selectedCategory", selectedCategory)
            setPositions(data);
        }
        getPositions();
    }, [selectedCategory]);


    const handleSelection = (selectedCategory, id)=> {
        setSelectedCategory(selectedCategory);
        const content = document.getElementById(id);
        content.classList.toggle("toggle-container");
    }
        
    return (
        categories.length > 0 && 
        <div>
            {
                categories.map((category) =>
                <div className="accordion">
                    <div className="toggle-btn" 
                         onClick={() => handleSelection(category.attributes.Category, category.id)} 
                         id="toggle" name="toggle">
                        {category.attributes.Category}
                    </div>
                    <div id={category.id} className="accordion-content">
                        {
                            positions.map(position => 
                                <div className='accordion_link'
                                     key={position.id}>  
                                    <Link style={{textDecoration: 'none', color: '#187DFF' }} to={`/positions/${position.id}`}>
                                        {position.attributes.positionTitle}
                                    </Link> 
                                </div>
                            )
                        }
                    </div>
                </div>
            )
            }
        </div>
    );
}