import React, { Component } from 'react';
import './SocialIcons.css';

class SocialIcons extends Component{
    render(){
        return(
            <ul className="social-nav model-9">
              <li><a className="linkedinA" href="https://www.linkedin.com/in/shadid12/" ><i className="fa fa-linkedin"></i></a></li>
              <li><a className="gitHub" href="https://github.com/Shadid12"><i className="fa fa-github"></i></a></li>
              <li><a className="google-plus" href="https://stackoverflow.com/users/3422137/shadid"><i className="fa fa-stack-overflow"></i></a></li>
            </ul>
        );
    }
}

export default SocialIcons;