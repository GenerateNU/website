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
          this.setState({categories: data.data});
      })
  }




    render() {
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

  {/* <form class="example" action="action_page.php">
  <input type="text" placeholder="search position" name="search"></input>
  <button type="submit"><i class="fa fa-search" style={{fontSize: "1.5em"}}></i></button>
</form> */}

  <Categories categories={this.state.categories} />

</div>

</div>
        );
    }
}

export default applyPageMain;