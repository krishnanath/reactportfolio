import React, { Component } from 'react';
import { Grid , Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
        <div style={{width: '100%' , margin:'auto'}}>
       <Grid className="landing-grid">
       <Cell col={12}>
       <img
       src="https://image.ibb.co/nNN2F7/10563168_502646859838377_1014207361810163604_n.jpg"
      alt="avatar"
      className="avatar-img"
      />
      <div className="banner-text">
      <h1>Full Stack Web Developer</h1>

      <hr />
      <p>HTML/CSS | Bootstap | JavaScript | React | React Native | NodeJs | Express | MongoDB</p>
      <div className="social-links">
      {/* LinkedIn */}
      <a href="https://google.com" rel="noopener noreferrer"  target="_blank">
      <i className="fab fa-linkedin"    aria-hidden="true" />
      </a>
      </div> 
          </div>
          </Cell>
       </Grid>
       </div>
        )    
}
}
export default Landing;