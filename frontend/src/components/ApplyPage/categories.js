import React from 'react';
import {Link} from 'react-router-dom';

import Positions from "./positions";

class Categories extends React.Component {
    constructor() {
        super()
        this.state = {
            selectedCategory : '',
            positions: []
        }
    }

    async fetchPositions(currentCategory) {
        console.log(currentCategory, "currentCategory")
        //change api call
        await  fetch('http://localhost:1337/api/positions').then((response) => {
            if(response.status >= 400) {
                throw new Error('Bad Response')
            }
            return response.json();
        }).then((data) => {
            //console.log(data, "fetchPositions")
            //let positionTitles = data.data.filter(i => i.attributes.CategoryType === currentCategory);
            let positionTitles = data.data;
            this.setState({positions: positionTitles});
        });

    }

    handleSelection = (selectedCategory, id)=> {
        this.fetchPositions(selectedCategory);
        //Handled accordion logic with method rather than classes
        const content = document.getElementById(id);
        console.log(content , "opens")
        
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    }

    render() {
        const { categories } = this.props;
        return (
            categories.length > 0 && 
            <div>
            {
                categories.map(category =>
                    <div key={category.id} className="accordion">  
                        <div className="toggle-btn" 
                            onClick={() => this.handleSelection(category.attributes.Category, category.id)} 
                            id="toggle"
                            name="toggle">
                            {category.attributes.Category}
                        </div>
                        <div id={category.id} className="accordion-content">
                            {
                                this.state.positions.map((cat, id) => 
                                    <div key={id}> 
                                        <div className='accordion_link'>
                                            <Link style={{textDecoration: 'none'}}to={"/positionTitle/details"}>  
                                                {cat.attributes.PositionTitle}
                                            </Link>
                                        </div>
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
}

export default Categories;