import React, { Component } from 'react';
import './App.css';
import Nav from "./Nav.js"
import ContentMain from "./ContentMain.js"
import Projects from "./Projects.js"
import Resume from "./Resume.js"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <div className="App">
      
      <Router>
          <div>
            <nav>
              <Link to="/">About Me</Link> 
              <Link to="/Resume">Resume</Link> 
              <Link to="/Projects">Projects</Link>
            </nav>
            
            <Route exact path="/" component={ ContentMain } />
            {/* two ways to do this 1 above 2 below - something about creating a new instance vs. passing state or props or something... blah, blah, blah */}
            <Route path="/resume" component={() => <Resume />} />
            <Route path="/projects" component={() => <Projects /> } />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
