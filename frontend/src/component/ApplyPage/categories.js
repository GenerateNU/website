import React from 'react';
import {Link} from 'react-router-dom';

// import Positions from "./positions";

class Categories extends React.Component {
    
    constructor() {
        super()
        this.state = {
            selectedCategory : '',
            number: 787,
            positions: []
        }
    }

async fetchPositions(currentCategory, id) {
    console.log(currentCategory, "currentCategory");
    this.state.lastCategory = currentCategory;    
    this.state.lastId = id;

    //change api call
    await  fetch('http://localhost:1337/api/positions').then((response) => {
          if(response.status >= 400) {
              throw new Error('Bad Response')
          }
          return response.json();
      }).then((data) => {
          let positionTitles = data.data;
          this.setState({positions: positionTitles});
      });

  }


 handleSelection = (selectedCategory, id)=> {
    this.fetchPositions(selectedCategory, id);
    const content = document.getElementById(id);
    content.classList.toggle("toggle-container");
}

    render() {
        const { categories } = this.props;
        
        return categories.length > 0 && 
        <div>
        {categories.map((category) =>
            <div className="accordion">
               
            <div className="toggle-btn" onClick={() => this.handleSelection(category.attributes.Category, category.id)} id="toggle" name="toggle"> {category.attributes.Category} </div>
            <div id={category.id} className="accordion-content">
            
            {this.state.positions.filter((i => i.attributes.categoryType === category.attributes.Category)).map((position,positionId) => 
              <div className='accordion_link'>  
              <Link style={{textDecoration: 'none'}} to={`/positions/${position.id}`}>
              {position.attributes.positionTitle}
              </Link> 
              </div>
            )}
               
            </div>
          </div>
        )}

 
        </div>

    }
}
export default Categories;