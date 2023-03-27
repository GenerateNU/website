import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { findPositionsByCategory } from "../../../services/positionService";
import { findAllCategories } from "../../../services/categoryService";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
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
      let data = await findPositionsByCategory("Management");
      setManagement(data);
      data = await findPositionsByCategory("Clients");
      setClients(data);
      data = await findPositionsByCategory("Software");
      setSoftware(data);
      data = await findPositionsByCategory("Hardware");
      setHardware(data);
      data = await findPositionsByCategory("Operations");
      setOperations(data);
      data = await findPositionsByCategory("Engagement");
      setEngagement(data);
    };
    getPositions();
  }, [selectedCategory]);

  const handleSelection = (selectedCategory, id) => {
    setSelectedCategory(selectedCategory);
    const content = document.getElementById(id);
    content.classList.toggle("toggle-container");
  };

  const sections = [
    {
        name: "Management", 
        id: 13,
        positions: management
    },
    {
        name: "Clients",
        id: 12,
        positions: clients
    },
    {
        name: "Software",
        id: 14,
        positions: software
    },
    {
        name: "Hardware",
        id: 7,
        positions: hardware
    },
    {
        name: "Operations",
        id: 11,
        positions: operations
    },
    {
        name: "Engagement",
        id: 15,
        positions: engagement
    }
  ]

  return (
    categories.length > 0 && (
      <div>
          <div className="accordion">
            {sections.map((section) => {
              return (
                <>
                  <div
                    className="toggle-btn"
                    onClick={() => handleSelection(section.name, section.id)}
                    id="toggle"
                    name="toggle"
                  >
                    {section.name}
                  </div>
                  <div id={section.id} className="accordion-content">
                    {section.positions.length === 0 ? (
                      <div className="accordion_link">
                        <p>No live positions now, check back later!</p>
                        <p>Check out this position from last semester!</p>
                      </div>
                    ) : (
                      section.positions.map((positions) => (
                        <div className="accordion_link" key={positions.id}>
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
            })}
          </div>
      </div>
    )
  );
}
