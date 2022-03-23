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

//    async componentWillMount() {
//       await  fetch('http://localhost:1337/api/categories').then((response) => {
//             if(response.status >= 400) {
//                 throw new Error('Bad Response')
//             }
//             return response.json();
//         }).then((data) => {
//             console.log(data, "catcatc");
//             // data.data.forEach(i => 
//             //     console.log(i.attributes.Category, "slllsls"))
//             this.setState({categories: data.data});
//         })

//     }
async fetchPositions(currentCategory) {
    console.log(currentCategory, "currentCategory")
    await  fetch('http://localhost:1337/api/positions').then((response) => {
          if(response.status >= 400) {
              throw new Error('Bad Response')
          }
          return response.json();
      }).then((data) => {
          console.log(data, "fetchPositions")
          
          let x = data.data.filter(i => i.attributes.CategoryType === currentCategory)
        console.log(x, "xxxx"); 
             
          this.setState({positions: x});
      });

  }

 handleSelection = (e)=> {
    console.log(e.target.value, "handleSelection")
    this.setState({selectedCategory: e.target.value});
    this.fetchPositions(e.target.value);
    //Handle accordion logic with method rather than classes
}

    render() {
        const { categories } = this.props;
        console.log(categories, "categoriescategoriescategories");
        return categories.length > 0 && categories.map((category) =>
            <div className="accordion">
            <input type="checkbox" onClick={this.handleSelection} id="toggle" name="toggle" value={category.attributes.Category}></input>
            <label className="toggle-btn" for="toggle">{category.attributes.Category}</label>
           
           
            {/* <Positions curenntPositions={this.state.positions} /> */}
            <p className="accordion-content">
                <div className="accordion_link">
                {/* <Link to={"././communityDevelopmentApply.jsx"}>  Community Develepment <br></br> Lead</Link> */}
                Community Development  <br></br> Lead
                </div>
        
                <div className="accordion_link">
                Community Development  <br></br> Specialist
                </div>
        
                <div className="accordion_link">
               Community Engagement <br></br>Lead
                </div>
        
                <div className="accordion_link">
                Community Events <br></br>Coordinator
                </div>
        
                <div className="accordion_link">
               Community Events <br></br> Specialist
                </div>
        
                <div className="accordion_link">
                Community Resource  <br></br> Lead
                </div>
        
                <div className="accordion_link">
               External Engagement <br></br> Coordinator
                </div>
        
                <div className="accordion_link">
                External Development <br></br>Specialist
                </div>
        
                <div className="accordion_link">
               Showcase Director
                </div>
            </p>
          </div>
        )

    }
}
export default Categories;