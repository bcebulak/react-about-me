import React, { Component } from 'react';
import Nav from "./Nav.js"
import './App.css';


class Resume extends Component {
    render() {
      return (
          
    <div className="page-wrap">
       
        <div>
             
                
                <h1>Experience</h1>
             
            <h2>Helio Training, Full-stack Developer</h2>
            <h3>2017 to Present </h3>
            <p>
                I have been a professional web developer for more than 10 years. 
                I am now training
                at Helio to facilitate my evolution from front-end to 
                full-stack developer, as well as to assure my skills 
                remain sharp and current. <br />
                Tech focus: HTML 5, CSS 3, JavaScript, React, Node.js, MongoDB  
            </p>

            Techback, Front-end Developer
            2006 to Present <br />
                I have part ownership in a small web dev 
                shop while acting
                as Sr. Web Developer. I have completed hundreds
                of successful projects as lead dev. I have also
                contracted for larger companies, such as IBM, Motorola,
                General Motors, generally serving as Lead 
                Front-end Developer. 
                <br />
                Tech focus: HTML, CSS, JavaScript, Angular, jQuery, 
                PHP, MySQL, ColdFusion
            


            <p className="align-and-pad">
            <b>EMI Health, Webmaster</b><br />
            2001 to 2006 <br />
                I developed websites, built custom authentication,
                search capabilites, survey software, and call center
                software. 
                <br />
                Tech focus: HTML, JavaScript, Classic ASP
            </p>

            <header>Objective</header>
            <p> I'm looking for a company with a strong
                focus on JavaScript, Angular, and React. 
                My prefered culture is partial remote / partial 
                onsite as needed; laid back "Developer" dress code. 
            </p>

        </div>
    </div>
   
      )
    }
}

export default Resume; 