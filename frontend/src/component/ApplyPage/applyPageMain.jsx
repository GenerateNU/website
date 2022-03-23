import React, { Component } from 'react'
import {Link} from "react-router-dom";
import Categories from "./categories";

export class applyPageMain extends Component {

  constructor() {
    super()
    this.state = {
        categories :[],
        positions: []
    }
}


  async componentWillMount() {
    await  fetch('http://localhost:1337/api/categories').then((response) => {
          if(response.status >= 400) {
              throw new Error('Bad Response')
          }
          return response.json();
      }).then((data) => {
          console.log(data, "new");
          // data.data.forEach(i => 
          //     console.log(i.attributes.Category, "slllsls"))
          this.setState({categories: data.data});
      })
  }


  // async componentWillMount() {
  //   await  fetch('http://localhost:1337/api/positions').then((response) => {
  //         if(response.status >= 400) {
  //             throw new Error('Bad Response')
  //         }
  //         return response.json();
  //     }).then((data) => {
  //         console.log(data, "new")
  //         // data.data.forEach(i => 
  //         //     console.log(i.attributes.PositionTitle, "positions"))
  //         this.setState({positions: data.data});
  //     })

  // }

    render() {
      console.log(this.state.categories, "cacha");
        return (
            <div>   


<div className="ap_container">
  <div className="ap_img"></div>
  <div className="ap_text">WE VIBE HARD AND</div>
  <div className="ap_text">MAKE THINGS</div>
  <div className="ap_text2">
  We’re always looking for passionate individuals who are ready to learn and grow. 
  We have opportunities that run broad and deep. If you don’t see anything right now drop an email and we’ll let you know when posiitons open up again.
  </div>

  <Categories categories={this.state.categories} />


  <form class="example" action="action_page.php">
  <input type="text" placeholder="search position" name="search"></input>
  <button type="submit"><i class="fa fa-search" style={{fontSize: "1.5em"}}></i></button>
</form>

  <div className="accordion">
    <input type="checkbox" id="toggle" name="toggle"></input>
    <label className="toggle-btn" for="toggle">COMMUNITY</label>
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
      
  
  <div className="accordion2">
    <input type="checkbox" id="toggle2" name="toggle2"></input>
    <label className="toggle-btn2" for="toggle2">CONTENT CREATION</label>
    {/* <p className="accordion-content2">
        <div className="accordion_link2">
       Community Develepment <br></br> Lead
        </div>

        <div className="accordion_link2">
        Community Development  <br></br> Specialist
        </div>

        <div className="accordion_link2">
       Community Engagement <br></br>Lead
        </div>

        <div className="accordion_link2">
        Community Events <br></br>Coordinator
        </div>

        <div className="accordion_link2">
       Community Events <br></br> Specialist
        </div>

        <div className="accordion_link2">
        Community Resource  <br></br> Lead
        </div>

        <div className="accordion_link2">
       External Engagement <br></br> Coordinator
        </div>

        <div className="accordion_link2">
        External Development <br></br>Specialist
        </div>

        <div className="accordion_link2">
       Showcase Director
        </div>
    </p> */}
  </div>



  <div className="accordion2">
    <input type="checkbox" id="toggle2" name="toggle2"></input>
    <label className="toggle-btn2" for="toggle2">DATA SCIENCE</label>
    {/* <p className="accordion-content2">
        <div className="accordion_link2">
       Community Develepment <br></br> Lead
        </div>

        <div className="accordion_link2">
        Community Development  <br></br> Specialist
        </div>

        <div className="accordion_link2">
       Community Engagement <br></br>Lead
        </div>

        <div className="accordion_link2">
        Community Events <br></br>Coordinator
        </div>

        <div className="accordion_link2">
       Community Events <br></br> Specialist
        </div>

        <div className="accordion_link2">
        Community Resource  <br></br> Lead
        </div>

        <div className="accordion_link2">
       External Engagement <br></br> Coordinator
        </div>

        <div className="accordion_link2">
        External Development <br></br>Specialist
        </div>

        <div className="accordion_link2">
       Showcase Director
        </div>
    </p> */}
  </div>





  <div className="accordion2">
    <input type="checkbox" id="toggle2" name="toggle2"></input>
    <label className="toggle-btn2" for="toggle2">DESIGN</label>
    {/* <p className="accordion-content2">
        <div className="accordion_link2">
       Community Develepment <br></br> Lead
        </div>

        <div className="accordion_link2">
        Community Development  <br></br> Specialist
        </div>

        <div className="accordion_link2">
       Community Engagement <br></br>Lead
        </div>

        <div className="accordion_link2">
        Community Events <br></br>Coordinator
        </div>

        <div className="accordion_link2">
       Community Events <br></br> Specialist
        </div>

        <div className="accordion_link2">
        Community Resource  <br></br> Lead
        </div>

        <div className="accordion_link2">
       External Engagement <br></br> Coordinator
        </div>

        <div className="accordion_link2">
        External Development <br></br>Specialist
        </div>

        <div className="accordion_link2">
       Showcase Director
        </div>
    </p> */}
  </div>




  <div className="accordion2">
    <input type="checkbox" id="toggle2" name="toggle2"></input>
    <label className="toggle-btn2" for="toggle2">EVENT PLANNING</label>
    {/* <p className="accordion-content2">
        <div className="accordion_link2">
       Community Develepment <br></br> Lead
        </div>

        <div className="accordion_link2">
        Community Development  <br></br> Specialist
        </div>

        <div className="accordion_link2">
       Community Engagement <br></br>Lead
        </div>

        <div className="accordion_link2">
        Community Events <br></br>Coordinator
        </div>

        <div className="accordion_link2">
       Community Events <br></br> Specialist
        </div>

        <div className="accordion_link2">
        Community Resource  <br></br> Lead
        </div>

        <div className="accordion_link2">
       External Engagement <br></br> Coordinator
        </div>

        <div className="accordion_link2">
        External Development <br></br>Specialist
        </div>

        <div className="accordion_link2">
       Showcase Director
        </div>
    </p> */}
  </div>



  <div className="accordion2">
    <input type="checkbox" id="toggle2" name="toggle2"></input>
    <label className="toggle-btn2" for="toggle2">HARDWARE ENGINEERING</label>
    {/* <p className="accordion-content2">
        <div className="accordion_link2">
       Community Develepment <br></br> Lead
        </div>

        <div className="accordion_link2">
        Community Development  <br></br> Specialist
        </div>

        <div className="accordion_link2">
       Community Engagement <br></br>Lead
        </div>

        <div className="accordion_link2">
        Community Events <br></br>Coordinator
        </div>

        <div className="accordion_link2">
       Community Events <br></br> Specialist
        </div>

        <div className="accordion_link2">
        Community Resource  <br></br> Lead
        </div>

        <div className="accordion_link2">
       External Engagement <br></br> Coordinator
        </div>

        <div className="accordion_link2">
        External Development <br></br>Specialist
        </div>

        <div className="accordion_link2">
       Showcase Director
        </div>
    </p> */}
  </div>



  <div className="accordion2">
    <input type="checkbox" id="toggle2" name="toggle2"></input>
    <label className="toggle-btn2" for="toggle2">LEADERSHIP</label>
    {/* <p className="accordion-content2">
        <div className="accordion_link2">
       Community Develepment <br></br> Lead
        </div>

        <div className="accordion_link2">
        Community Development  <br></br> Specialist
        </div>

        <div className="accordion_link2">
       Community Engagement <br></br>Lead
        </div>

        <div className="accordion_link2">
        Community Events <br></br>Coordinator
        </div>

        <div className="accordion_link2">
       Community Events <br></br> Specialist
        </div>

        <div className="accordion_link2">
        Community Resource  <br></br> Lead
        </div>

        <div className="accordion_link2">
       External Engagement <br></br> Coordinator
        </div>

        <div className="accordion_link2">
        External Development <br></br>Specialist
        </div>

        <div className="accordion_link2">
       Showcase Director
        </div>
    </p> */}
  </div>



  <div className="accordion2">
    <input type="checkbox" id="toggle2" name="toggle2"></input>
    <label className="toggle-btn2" for="toggle2">OPERATIONS</label>
    {/* <p className="accordion-content2">
        <div className="accordion_link2">
       Community Develepment <br></br> Lead
        </div>

        <div className="accordion_link2">
        Community Development  <br></br> Specialist
        </div>

        <div className="accordion_link2">
       Community Engagement <br></br>Lead
        </div>

        <div className="accordion_link2">
        Community Events <br></br>Coordinator
        </div>

        <div className="accordion_link2">
       Community Events <br></br> Specialist
        </div>

        <div className="accordion_link2">
        Community Resource  <br></br> Lead
        </div>

        <div className="accordion_link2">
       External Engagement <br></br> Coordinator
        </div>

        <div className="accordion_link2">
        External Development <br></br>Specialist
        </div>

        <div className="accordion_link2">
       Showcase Director
        </div>
    </p> */}
  </div>



  <div className="accordion2">
    <input type="checkbox" id="toggle2" name="toggle2"></input>
    <label className="toggle-btn2" for="toggle2">SOFTWARE ENGINEERING</label>
    {/* <p className="accordion-content2">
        <div className="accordion_link2">
       Community Develepment <br></br> Lead
        </div>

        <div className="accordion_link2">
        Community Development  <br></br> Specialist
        </div>

        <div className="accordion_link2">
       Community Engagement <br></br>Lead
        </div>

        <div className="accordion_link2">
        Community Events <br></br>Coordinator
        </div>

        <div className="accordion_link2">
       Community Events <br></br> Specialist
        </div>

        <div className="accordion_link2">
        Community Resource  <br></br> Lead
        </div>

        <div className="accordion_link2">
       External Engagement <br></br> Coordinator
        </div>

        <div className="accordion_link2">
        External Development <br></br>Specialist
        </div>

        <div className="accordion_link2">
       Showcase Director
        </div>
    </p> */}
  </div>

  

</div>


            </div>
        );
    }
}

export default applyPageMain