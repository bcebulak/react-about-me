import React, { Component } from 'react';
import './App.css';
import Nav from "./Nav.js"
import ContentMain from "./ContentMain.js"
import Projects from "./Projects.js"
import Resume from "./Resume.js"

class App extends Component {
  render() {
    return (
      <div className="App">
      <br />
        { <Nav className="navCss" /> }
      <br />
        { <ContentMain />  }
        { <Resume /> }
        { <Projects /> }
      </div>
    );
  }
}

export default App;
