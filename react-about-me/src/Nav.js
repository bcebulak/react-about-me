import ContentMain from "./ContentMain.js"
import React, { Component } from 'react';

class Nav extends Component {
    render() {
    return(
        
        <h1>
        <a href="./App.js">Bio</a> || 
        <a href="./Resume.js">Resume</a> || 
        <a href="./Projects.js">Projects</a>
        </h1>

        )
    }
} 
export default Nav; 