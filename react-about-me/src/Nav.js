import ContentMain from "./ContentMain.js"
import React, { Component } from 'react';

class Nav extends Component {
    render() {
    return(
        
        <div>
        <a href="./App.js">Bio</a> || 
        <a href="./Resume.js">Resume</a> || 
        <a href="./Projects.js">Projects</a>
        </div>

        )
    }
} 
export default Nav; 