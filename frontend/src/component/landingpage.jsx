import React, { Component } from 'react'

export class landingpage extends Component {
  render() {
    const border = {
      marginTop: '100px',
         border: '4px solid black', 
         height: '750px',
         backgroundColor: 'rgb(220,220,220)'
    }
    const herotext = {
         fontSize: 90,
         fontWeight: '700',
         textAlign: "left",
         paddingLeft: 200,
         paddingTop: 150,
    };
   
 const dummy = {
  fontSize: 40,
  fontWeight: '650',
  textAlign: "left",
  paddingLeft: 200,
  paddingRight: 300,
  paddingTop: 50,
};

 
    return (
      <div style={border}>
        <img
                  style={{
                  "width":"630px",
                  "height":"1000px",
                  "border":"4px solid black",
                  "position": "absolute",
                  "marginTop": 100,}}
                  src={""} />
        <div style = {herotext}>Hero Text</div>
        <div style = {dummy}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus 
        et magnis dis parturient montes, nascetur ridiculus mus.</div>

        </div>
    );
  }
}

export default landingpage 