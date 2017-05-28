import React, { Component } from 'react';

import CoolButton from './CoolButton';

import $ from 'jquery';
import './PortFolio.css';


class PortFolio extends Component{
    
    render(){
        return(
            <div id="portfolio-container">
              <h1 id="title">My Projects</h1>
              <a href="/">Back</a>
              <div className="card-container">
                  <div className="card">
                    <div className="card-image"></div>
                    
                    <div className="card-info">
                      <div className="card-title">
                        Message In a Bottle
                      </div>
                    </div>
                    
                    
                    <CoolButton value={ { 'animation': 'thumb', 'id': 'a',
                                                'icon': 'fa fa-thumbs-up'} }/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                     <CoolButton value={ { 'animation': 'thumb', 'id': 'a1',
                                                'icon': 'fa fa-github'} }/>
                  
                  </div>
                  
                  
                  <div className="card">
                    <div className="card-image"></div>
                    
                    <div className="card-info">
                      <div className="card-title">
                        The Spectral
                      </div>
                    </div>
                    
                    <CoolButton value={ { 'animation': 'heart', 'id': 'b',
                                                'icon': 'fa fa-heart'} }/>
                  </div>
                  <div className="card">
                    <div className="card-image"></div>
                    
                    <div className="card-info">
                      <div className="card-title">
                        Orion Project
                      </div>
                    </div>
                    
                    <CoolButton value={ { 'animation': 'forward', 'id': 'c',
                                                'icon': 'fa fa-medium'} }/>
                  </div>
                  
                  <div className="card">
                    <div className="card-image"></div>
                    
                     <div className="card-info">
                      <div className="card-title">
                        Dream Landia
                      </div>
                     </div>
                    
                    <CoolButton value={ { 'animation': 'thumb', 'id': 'd',
                                                'icon': 'fa fa-medium'} }/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <CoolButton value={ { 'animation': 'heart', 'id': 'd1',
                                                'icon': 'fa fa-github'} }/>
                  </div>
                  
                  
                  
              </div>
            </div>
        );
    }
}

export default PortFolio;