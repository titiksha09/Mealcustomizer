import React from 'react'
import Navbar from '../components/Navbar'

export default function VideoConferencing() {
  return (
    <div>
        <div><Navbar/></div>
        <div style={{background:"#0F2027",background:"-webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027)",background:"linear-gradient(to right, #2C5364, #203A43, #0F2027)"}}>
        

<div id="stream-wrapper">
    <div id="video-streams" style={{display:"grid",gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",height: "90vh",width: "1400px",margin:"0 auto"}}></div>

    <div id="stream-controls"  >
    <button style={{ border:"none",backgroundColor: "cadetblue",top:"60%",left:"50%",color:"#fff",padding:"10px 20px",fontSize:"16px",margin:"2px",cursor: "pointer"}} id="join-btn">Join Video Call</button>
        <button id="leave-btn" style={{ border:"none",backgroundColor: "cadetblue",top:"60%",left:"50%",color:"#fff",padding:"10px 20px",fontSize:"16px",margin:"2px",cursor: "pointer"}}>Leave Video Call</button>
        <button id="mic-btn" style={{ border:"none",backgroundColor: "cadetblue",color:"#fff",padding:"10px 20px",fontSize:"16px",margin:"2px",cursor: "pointer"}}>Mic On</button>
        <button id="camera-btn" style={{ border:"none",backgroundColor: "cadetblue",color:"#fff",padding:"10px 20px",fontSize:"16px",margin:"2px",cursor: "pointer"}}>Camera on</button>
    </div>
</div>
</div>
<div>
<div className="container" style={{border: "2px solid #dedede",backgroundColor: "#808080",borderRadius: "5px",padding: "10px",margin: "10px 0",height:"100px",width:"100%"}}> 
  <img src="https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Avatar" style={{height:"100px", float: "left",maxWidth: "60px",width: "100%",margin: "10px 20px 10px 10px",borderRadius: "50%"}}/>
  <p>User : Hello I need some help in customizing my meal</p>
  <span className="timeright" style={{float: "left",color: "#99100"}}>11:00</span>
</div>

<div className="containerdarker" style={{borderColor: "#ccc",   backgroundColor: "#808080",height:"100px",width:"100%",borderRadius: "5px"}}>
  <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Avatar" style={{height:"100px", float: "left",maxWidth: "60px",width: "100%",marginRight: "20px",borderRadius: "50%"}} className="right"/>
  <p style={{marginLeft:"5rem"}}>Hey!  Thanks for messaging! I am Harry your Dietitian.So, what type of food do you want to eat?</p>
  <span style={{marginLeft:"5rem",float: "left",color: "#99100"}} className="timeleft" >11:01</span>
</div>

<div className="container" style={{border: "2px solid #dedede",backgroundColor: "#808080",borderRadius: "5px",padding: "10px",margin: "10px 0",height:"100px",width:"100%"}}>
  <img src="https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" style={{height:"100px", float: "left",maxWidth: "60px",width: "100%",marginRight: "20px",borderRadius: "50%"}} alt="Avatar"/>
  <p>I want to eat food mix of fiber and protein which will help me in my weight loss</p>
  <span className="timeright" style={{float: "left",color: "#99100"}}>11:02</span>
</div>

<div className="containerdarker" style={{borderColor: "#ccc",   backgroundColor: "#808080",height:"100px",width:"100%"}}>
  <input style={{marginLeft:"5rem",width:"100%"}} type="text" id="input5" className="formcontrol" aria-describedby="passwordHelpBlock" placeholder='Type your Message here'></input>
</div>
</div>
    </div>
  )
}
