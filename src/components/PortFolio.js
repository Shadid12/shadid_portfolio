import React, { Component } from 'react';

import CoolButton from './CoolButton';

import $ from 'jquery';
import './PortFolio.css';


class PortFolio extends Component{
    
    render(){
        return(
            <div id="portfolio-container">
              <h1 id="title">Inspire</h1>
              <div className="card-container">
                  <div className="card">
                    <div className="card-image"></div>
                    <br/><CoolButton value={ { 'animation': 'thumb', 'id': 'a',
                                                'icon': 'fa fa-thumbs-up'} }/>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                     <CoolButton value={ { 'animation': 'thumb', 'id': 'a1',
                                                'icon': 'fa fa-github'} }/>
                  </div>
                  <div className="card">
                    <div className="card-image"></div>
                    <br/><CoolButton value={ { 'animation': 'heart', 'id': 'b',
                                                'icon': 'fa fa-heart'} }/>
                  </div>
                  <div className="card">
                    <div className="card-image"></div>
                    <br/><CoolButton value={ { 'animation': 'forward', 'id': 'c',
                                                'icon': 'fa fa-fast-forward'} }/>
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