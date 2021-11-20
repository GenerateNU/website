import React, { Component } from 'react'

export class landingpage extends Component {
  render() {
    // const border = {
    //   marginTop: 150,
    //      border: '4px solid black', 
    //      height: '750px',
    //      backgroundColor: 'rgb(220,220,220)'
    // }
    const border2 = {
      marginTop: 80,
         border: '4px solid black', 
         height: '600px',
         width: '500px',
         marginRight: "100px",
         marginLeft: "100px",
         backgroundColor: 'rgb(220,220,220)'
    }

    const border3 = {
      
         border: '4px solid rgb(220,220,220)', 
         height: '260px',
         width: '625px',
         marginLeft: "720px",
         marginTop: "630px",
         backgroundColor: 'rgb(220,220,220)'
    }
    const herotext = {
         fontSize: 90,
         fontWeight: '700',
         textAlign: "left",
         paddingLeft: 200,
         paddingTop: 150,
    };

    const ourteam = {
      fontSize: 90,
      fontWeight: '700',
      paddingTop: 50,
      textAlign: 'center',
 };
   
 const dummy = {
  fontSize: 40,
  fontWeight: '650',
  textAlign: "left",
  paddingLeft: 200,
  paddingRight: 300,
  paddingTop: 50,
};

const row = {
  
  display: 'inline-block'
}
const column = {
float:'left',
margin:'10px',
border:'1px solid black',
width:'24%',
}

const border4 = {
  marginTop: 80,
     border: '4px solid black', 
     height: '600px',
     width: '500px',
     marginRight: "100px",
     marginLeft: "100px",
     backgroundColor: 'rgb(220,220,220)'
}





 
    return (
      <div>
      <div className="border">
        <img
                  style={{
                  "width":"630px",
                  "height":"1000px",
                  "border":"4px solid black",
                  "position": "absolute",
                  "marginTop": 100,}}
                  src={""} alt="image1"/>
        <div style = {herotext}>Hero Text</div>
        <div style = {dummy}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus 
        et magnis dis parturient montes, nascetur ridiculus mus.</div>
      
        <div style={border3}>
        What is Generate? <br></br> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus 
        et magnis dis parturient montes, nascetur ridiculus mus.
        <br></br> <a href="#">Link to about us</a></div>
        </div>

        <div style={border2}>
        <img  src={""} alt="image2"/></div>


<div className = "border">
<div style = {ourteam}>Our Teams</div>

<div class={`container`}>
    <div style = {row}>
        <div style = {column}>
            <p>loren ipsum</p>
        </div>
        <div style = {column}>
            <p>loren ipsum</p>
        </div>
        <div style = {column}>
            <p>loren ipsum</p>
        </div>
    </div>
    <div ></div>
    <div style = {row}>
        <div style = {column}>
            <p>loren ipsum</p>
        </div>
        <div style = {column}>
            <p>loren ipsum</p>
        </div>
        <div style = {column}>
            <p>loren ipsum</p>
        </div>
    </div>
</div>

</div>

<div>
<div style = {{'paddingTop':'200px', 'fontSize':'90px', 'fontWeight': 'bold', 'color': 'gray'}}>
COMMUNITY
</div>
<img
                  style={{
                  "width":"630px",
                  "height":"1000px",
                  "border":"4px solid black",
                  "position": "absolute",
                  "backgroundColor":  'rgb(220,220,220)',
                  "marginTop": 70,
                  "marginLeft": -40,
                  "border-radius": '50px 0px 0px 50px'}}
                  src={""} alt="image3"/>
<div style={{'marginTop':'590px',
'marginRight':'850px',
'marginLeft':'130px',
'textAlign':'left',
'fontSize': '25px'}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus 
        et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus 
        et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus 
        et magnis dis parturient montes, nascetur ridiculus mus.
        </div>
</div>


        </div>
        
    );
  }
}

export default landingpage 