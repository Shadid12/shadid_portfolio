import React, { Component } from 'react';

// components
import CoolButton from './CoolButton';
import Loading from './Loading';

// node modules
import $ from 'jquery';
import animate from 'animate.css';


// css
import './PortFolio.css';


class PortFolio extends Component{
  
    state = {
      isLoading: true
    }
    
    componentDidMount(){
      
      
      setTimeout(()=>{
        this.setState({ isLoading: false });
      }, 1200);
      
      setTimeout( ()=> {
        $(".card-container").addClass("animated bounceInUp");
        $("#title").addClass("animated bounceIn");
      }, 1250 );
      
    }
    
    render(){
        return(
          <div>
          { this.state.isLoading ?
            <Loading />
            :
            <div>
            
            // nav bard

  <div className="menu" >
    <span className="menu-circle"></span>
    <a className="menu-link" 
       onClick={(e) => {
          e.preventDefault();
          $(".menu").toggleClass("open");
          $(".menu-overlay").toggleClass("open"); 
       }}>
      <span className="menu-icon">
        <span className="menu-line menu-line-1"></span>
        <span className="menu-line menu-line-2"></span>
        <span className="menu-line menu-line-3"></span>
      </span>
    </a>
  </div>

  <div className="menu-overlay">
    <a href="/">Home</a>
    <a href="/#/port">About</a>
    
  </div>
  
            // 
            
            
            <div id="portfolio-container">
              <h1 id="title">My Projects</h1>
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
                                                'icon': 'fa fa-github', 
                                                'link': 'https://github.com/Shadid12/Message_Bottle' } }/>
                  
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
            </div>

          
          }
          </div>
        );
    }
}

export default PortFolio;