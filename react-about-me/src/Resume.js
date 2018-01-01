import React, { Component } from 'react';
import Nav from "./Nav.js"


class Resume extends Component {
    render() {
      return (
          
    <div className="page-wrap">
       
        <div>
            <h1>Brandon Cebulak</h1>
            <h2>Developer, Salt Lake City, UT</h2>
            <h3>801-888-8288 - <a href="mailto:bcebulak@msn.com">bcebulak@msn.com</a></h3>
            <p>
                I have been a professional web developer for more than 10 years. 
                I am boot-camps style training
                at Helio to facilitate my evolution from front-end to 
                full-stack developer, as well as to assure my skill set is sharp and current. 
            </p>
            <details><summary>Angular</summary> 
                I enjoy working in Angular  
            </details>
            <details><summary>React</summary> 
                React is my new focus. Although my background in JavaScript libraries/frameworks is more 
                Angular / jQuery; I like it all  
            </details>
            <details><summary>HTML 5 / CSS 3</summary> 
                More than 10 years, kind of a lot more :) 
            </details>
            <details><summary>MongoDB, MySQL, SQL Server</summary> 
                Comming from front-end roles my interface with databases is basically
                API calls and a lot of JSON. 
            </details>

        </div>
    </div>
   
      )
    }
}

export default Resume; 