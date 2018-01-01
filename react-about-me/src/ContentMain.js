import React, { Component } from 'react';
import Nav from "./Nav.js"

class ContentMain extends Component {
    render() {
      return (
        <div className="page-wrap">
        
          {/* <img src={
            require('./portrait1.png')
          } 
          alt="Me and my kid" /> */}


<div id="share-buttons">
     
    <a href="mailto:bcebulak@msn.com">
        <img src="https://simplesharebuttons.com/images/somacro/email.png" alt="Email" />
    </a>

    <a href="http://www.linkedin.com/techback" target="_blank">
        <img src="https://simplesharebuttons.com/images/somacro/linkedin.png" alt="LinkedIn" />
    </a>
    
    <a href="javascript:;" onclick="window.print()">
        <img src="https://simplesharebuttons.com/images/somacro/print.png" alt="Print" />
    </a>
    
</div>

        </div> 
   
      )
    }
}

export default ContentMain; 