import React, { Component } from 'react';
import Parallax from 'parallax-js';
import $ from 'jquery';
import './PortFolio.css'



class PortFolio extends Component{
    
    render(){
        return(
            <div id="portfolio-container">
              <div className="card-container">
                  <div className="card">
                    <div className="card-image"></div>
                    
                  </div>
                  <div className="card">
                    <div className="card-image"></div>
                  </div>
                  <div className="card">
                    <div className="card-image"></div>
                  </div>
                  <div className="card">
                    <div className="card-image"></div>
                  </div>
              </div>
            </div>
        );
    }
}

export default PortFolio;