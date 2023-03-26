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

    const sections = [
        {
            name: 'Community Engagement',
            id: 13,
            positions: communityEngagement
        },
        {
            name: 'Content Creation',
            id: 12,
            positions: contentCreation
        },
        {
            name: 'Data Science',
            id: 14,
            positions: dataScience
        },
        {
            name: 'Design',
            id: 7,
            positions: design
        },
        {
            name: 'Engineering',
            id: 11,
            positions: engineering
        },
        {
            name: 'Leadership',
            id: 15,
            positions: leadership
        },
        {
            name: 'Operations',
            id: 16,
            positions: operations
        }
    ]

    return (
      categories.length > 0 && (
        <div>
            <div className="accordion">
                {
                    sections.map((section) => {
                        return (
                          <>
                            <div
                              className="toggle-btn"
                              onClick={() =>
                                handleSelection(section.name, section.id)
                              }
                              id="toggle"
                              name="toggle"
                            >
                              {section.name}
                            </div>
                            <div id={section.id} className="accordion-content">
                              {section.positions.length === 0 ? (
                                <div className="accordion_link">
                                  <p>
                                    No live positions now, check back later!
                                  </p>
                                  <p>
                                    Check out this position from last semester!
                                  </p>
                                </div>
                              ) : (
                                section.positions.map((positions) => (
                                  <div
                                    className="accordion_link"
                                    key={positions.id}
                                  >
                                    <Link
                                      style={{
                                        textDecoration: "none",
                                        color: "#187DFF",
                                      }}
                                      to={`/positions/${positions.id}`}
                                    >
                                      {positions.attributes.positionTitle}
                                    </Link>
                                  </div>
                                ))
                              )}
                            </div>
                          </>
                        );
                    })
                }
            </div>
        </div>
      )
    );
}