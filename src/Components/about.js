import React from 'react';
import {Link} from 'react-router-dom'
const About = () => (
    <React.Fragment>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">About Us</li>
            </ol>
        </nav>
        <h2>About</h2>
    </React.Fragment>
  );

export default About;