import React, { Component } from 'react';
import Nav from "./Nav.js"
import './App.css';

class ContentMain extends Component {
    render() {
      return (
        <div className="page-wrap">
        
          {/* Why does this work both ways? What's happening that is different?  
          later: I'm thinking the {} breaks us into js
          and require() must be a built in js function - please confirm
          <img src={
            require('./portrait1.png')
          } 
          alt="Me and my kid" /> */} 
        <img src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png" alt="HTML5" class="picture" />
        <img src="https://designapp.io/assets/main/images/logos/css.png" alt="CSS3" class="picture" />
        <img src="http://www.developersfeed.com/wp-content/uploads/2016/10/mongodbicon-1.png" alt="mongodb" class="picture" />    
        <img src="https://cdn.worldvectorlogo.com/logos/angular-icon.svg" alt="angular" class="picture" />
        <img src="http://ecodile.com/wp-content/uploads/2016/08/react-logo-1000-transparent.png" alt="react" class="picture" />
        <img src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" alt="Nodejs" class="picture" />
        <img src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_1489696476/firebase.png" alt="Firebase Logo" class="picture" />
        <img src="https://camo.githubusercontent.com/02ed3f6695f288aedec24c2a329c667281efef5f/687474703a2f2f707265636973696f6e2d736f6674776172652e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031342f30342f6a5175726572792e676966"  alt="jquery"  class="picture" />
  
        </div> 
   
      )
    }
}

export default ContentMain; 