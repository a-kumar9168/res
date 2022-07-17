import React from "react";
import "./about.css"

const About = () => {
  return (
    <>
      <div className="about-section">
        <h1>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>Resize the browser window to see that this page is responsive by the way.</p>
      </div>
      <h2 className="about-team">Our Team</h2>
      <div className="row">
        <div className="column">
          <div className="card">
            <img src="https://www.ecpi.edu/sites/default/files/CIV%20Sept%2026.png"/>
            <div className="container">
              <h2>Jane Doe</h2>
              <p className="title">CEO & Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="https://media.istockphoto.com/photos/young-businessman-standing-in-his-restaurant-picture-id869409288?k=20&m=869409288&s=612x612&w=0&h=dtVoT8aTPcFftZNfikGuT2wpvAKGcHafm0XHR1I_L1s="  />
            <div className="container">
              <h2>Mike Ross</h2>
              <p className="title">Art Director</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>mike@example.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="https://img.etimg.com/thumb/msid-58474319,width-650,imgsize-171120,,resizemode-4,quality-100/.jpg" />
            <div className="container">
              <h2>John Doe</h2>
              <p className="title">Designer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>john@example.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
      </div>

    </>


  );
};

export default About;
