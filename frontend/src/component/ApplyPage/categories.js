import React from 'react';
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
          console.log(data, "fetchPositions")
          let positionTitles = data.data.filter(i => i.attributes.CategoryType === currentCategory);
          console.log(positionTitles, "xxxx"); 
          this.setState({positions: positionTitles});
          console.log(this.state.positions, "positions")
      });

  }

 handleSelection = (selectedCategory, id)=> {
    this.fetchPositions(selectedCategory);
    //Handled accordion logic with method rather than classes
    console.log(document.getElementById(id), id, "09090909");
    const content = document.getElementById(id);
    if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
    }
}

    render() {
        const { categories } = this.props;
        return categories.length > 0 && 
        <div>
        {categories.map((category) =>
            <div className="accordion">
            <div className="toggle-btn" onClick={() => this.handleSelection(category.attributes.Category, category.id)} id="toggle" name="toggle"> {category.attributes.Category} </div>
            <div id={category.id} className="accordion-content">
                {this.state.positions.map((cat,id) => <p > <div className='accordion_link'> {cat.attributes.PositionTitle} </div> </p>)}
            </div>
          </div>
        )}

 
        </div>

    }
}
export default Categories;