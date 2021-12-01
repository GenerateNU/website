import React, { Component } from 'react'



export class landingpage extends Component {
  render() {
    // const border= {
    //   marginTop: 150,
    //      border: '4px solid black', 
    //      height: '750px',
    //      backgroundColor: 'rgb(220,220,220)'
    // }
    // const border2 = {
    //   marginTop: 80,
    //      border: '4px solid black', 
    //      height: '600px',
    //      width: '500px',
    //      marginRight: "100px",
    //      marginLeft: "100px",
    //      backgroundColor: 'rgb(220,220,220)'
    // }

    // const border3 = {
      
    //      border: '4px solid rgb(220,220,220)', 
    //      height: '260px',
    //      width: '625px',
    //      marginLeft: "720px",
    //      marginTop: "630px",
    //      backgroundColor: 'rgb(220,220,220)'
    // }
    // const herotext = {
    //      fontSize: 90,
    //      fontWeight: '700',
    //      textAlign: "left",
    //      paddingLeft: 200,
    //      paddingTop: 150,
    // };

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
  paddingLeft: '13%',
  paddingRight: '23%',
  paddingTop: 50,
};

const row = {
  display: 'inline-block'
}

const column = {
float:'left',
margin:'40px',
}

const student = {
  border: '4px solid blue', 
  backgroundColor: 'blue',
  height: '750px',
  width: '10%',
  float: 'left'
}

const client = {
  border: '4px solid orange', 
  backgroundColor: 'orange',
  height: '750px',
  width: '10%',
  float: 'right'
}





    return (
      <div>
      <div className="border">
        <img
                  style={{
                  "width":"44%",
                  "height":"1000px",
                  "border":"4px solid black",
                  "position": "absolute",
                  "marginTop": 100,}}
                  src={""} alt="image1"/>
        <div className="herotext">Hero Text</div>

        <div style = {dummy}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
        Aenean commodo ligula eget dolor. Aenean massa.</div>
        </div>
        
      
        

        <div className="border2">
        <img  src={""} alt="image2"/></div>

        <div className="border3" style={{"textAlign": 'left'}}>
        <div style={{"fontSize": 50, "fontWeight": 700}}>What is Generate?</div>
        <br></br>
        <div style={{"fontSize": 20, "paddingRight": "300px"}}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus 
        et magnis dis parturient montes, nascetur ridiculus mus. Aenean commodo ligula eget dolor. </div>
        <br></br> 
       <a href="#" style={{"fontSize": 25, "color": "black", "fontWeight": 700, "textDecoration": "none"}}>LINK TO ABOUT US  </a>
        </div>



<div className="border4">

<div style = {ourteam}>Our Teams</div>

<div class={`container`}>
    <div style = {row}>
        <div style = {column}>
        <div class={`container`}>
          <div style={{textAlign: "left"}}>
        <img  style={{width: "340px", height: "292px"}}src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAA1BMVEX///+nxBvIAAAAR0lEQVR4nO3BAQ0AAADCoPdPbQ8HFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPBgxUwAAU+n3sIAAAAASUVORK5CYII="} alt="teamimage1"/>
        <div style={{"fontSize": 60, "fontWeight": 700}}>Team1</div>
        Lorem ipsum dolor sit amet, <br></br> consectetuer adipiscing elit. <br></br>
        <a href="#" style={{"fontSize": 23, "color": "black", "textDecoration": "none"}}>LINK TO ABOUT US </a>
        </div>
        </div>
        </div>
        <div style = {column}>
        <div style={{textAlign: "left"}}>
        <img  style={{width: "340px", height: "292px"}}src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAA1BMVEX///+nxBvIAAAAR0lEQVR4nO3BAQ0AAADCoPdPbQ8HFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPBgxUwAAU+n3sIAAAAASUVORK5CYII="} alt="teamimage2"/>
        <div style={{"fontSize": 60, "fontWeight": 700}}>Team2</div>
        Lorem ipsum dolor sit amet, <br></br> consectetuer adipiscing elit. <br></br>
        <a href="#" style={{"fontSize": 23, "color": "black", "textDecoration": "none"}}>LINK TO ABOUT US </a>
        </div>
        </div>
        <div style = {column}>
        <div style={{textAlign: "left"}}>
        <img  style={{width: "340px", height: "292px"}}src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAA1BMVEX///+nxBvIAAAAR0lEQVR4nO3BAQ0AAADCoPdPbQ8HFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPBgxUwAAU+n3sIAAAAASUVORK5CYII="} alt="teamimage3"/>
        <div style={{"fontSize": 60, "fontWeight": 700}}>Team3</div>
        Lorem ipsum dolor sit amet, <br></br> consectetuer adipiscing elit. <br></br>
        <a href="#" style={{"fontSize": 23, "color": "black", "textDecoration": "none"}}>LINK TO ABOUT US </a>
        </div>
        </div>
    </div>
    <div ></div>
    <div style = {row}>
        <div style = {column}>
        <div style={{textAlign: "left"}}>
        <img  style={{width: "340px", height: "292px"}}src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAA1BMVEX///+nxBvIAAAAR0lEQVR4nO3BAQ0AAADCoPdPbQ8HFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPBgxUwAAU+n3sIAAAAASUVORK5CYII="} alt="teamimage4"/>
        <div style={{"fontSize": 60, "fontWeight": 700}}>Team4</div>
        Lorem ipsum dolor sit amet, <br></br> consectetuer adipiscing elit. <br></br>
        <a href="#" style={{"fontSize": 23, "color": "black", "textDecoration": "none"}}>LINK TO ABOUT US </a>
        </div>
        </div>
        <div style = {column}>
        <div style={{textAlign: "left"}}>
        <img  style={{width: "340px", height: "292px"}}src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAA1BMVEX///+nxBvIAAAAR0lEQVR4nO3BAQ0AAADCoPdPbQ8HFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPBgxUwAAU+n3sIAAAAASUVORK5CYII="}  alt="teamimage5"/>
        <div style={{"fontSize": 60, "fontWeight": 700}}>Team5</div>
        Lorem ipsum dolor sit amet, <br></br> consectetuer adipiscing elit. <br></br>
        <a href="#" style={{"fontSize": 23, "color": "black", "textDecoration": "none"}}>LINK TO ABOUT US </a>
        </div>
        </div>
        <div style = {column}>
        <div style={{textAlign: "left"}}>
        <img  style={{width: "340px", height: "292px"}}src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAA1BMVEX///+nxBvIAAAAR0lEQVR4nO3BAQ0AAADCoPdPbQ8HFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPBgxUwAAU+n3sIAAAAASUVORK5CYII="}  alt="teamimage6"/>
        <div style={{"fontSize": 60, "fontWeight": 700}}>Team6</div>
        Lorem ipsum dolor sit amet, <br></br> consectetuer adipiscing elit. <br></br>
        <a href="#" style={{"fontSize": 23, "color": "black", "textDecoration": "none"}}>LINK TO ABOUT US </a>
        </div>
        </div>
    </div>
    </div>
</div>



<div>
<div style = {{'paddingTop':'200px', 'fontSize':'180px', 'fontWeight': 'bold', 'color': 'gray'}}>
COMMUNITY
</div>

<img
                  style={{
                  "width":"45%",
                  "height":"1000px",
                  "border":"4px solid black",
                  "position": "absolute",
                  "backgroundColor":  'rgb(220,220,220)',
                  "marginTop": 70,
                  "marginLeft": -90,
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

<div style={{'paddingTop':'400px'}}>
<div style={student}><span style={{writingMode: "vertical-rl",
  transform: "rotate(180deg)", fontSize:"120px", fontWeight:"bold"}}>student</span></div>
<div style={client}><span style={{writingMode: "vertical-rl", fontSize:"120px", fontWeight:"bold", color:"white"}}>client</span></div>

  <div style={{'fontSize':'180px', 'fontWeight': 'bold',}}> I <br/>Am<br/> A</div>
  
  
</div>
        </div>
        
    );
  }
}

export default landingpage 