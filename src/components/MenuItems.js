import React, { Component } from 'react';
import $ from 'jquery';
import './MenuItems.css';
import animate from 'animate.css';

class MenuItems extends Component{
    
    componentDidMount(){
        $(".menu-nav").addClass("animated bounceIn");
    }
    
    render(){
        return(
            <ul className="menu-nav model-x">
                <li><a 
                        onMouseOver={ () => { $("#a").addClass("animated jello") } }
                        onMouseLeave={ () => { $("#a").removeClass("animated jello") } }
                        href="/#/port">
                    <img className="aimg" src="http://svgshare.com/i/1gZ.svg" id="a" />
                    <br />My Portfolio</a></li>
                <li><a 
                        onMouseOver={ () => { $("#b").addClass("animated jello") } }
                        onMouseLeave={ () => { $("#b").removeClass("animated jello") } }
                        href="/#/about">
                    <img className="aimg" src="http://svgshare.com/i/1iM.svg" id="b" />
                    <br />About Me</a></li>
                <li><a 
                        onMouseOver={ () => { $("#c").addClass("animated jello") } }
                        onMouseLeave={ () => { $("#c").removeClass("animated jello") } }
                        href="#">
                    <img className="aimg" src="http://svgshare.com/i/1jE.svg" id="c" />
                    <br />Contact Me</a></li>
                <li><a 
                        onMouseOver={ () => { $("#d").addClass("animated jello") } }
                        onMouseLeave={ () => { $("#d").removeClass("animated jello") } }
                        href="#">
                    <img className="aimg" src="http://svgshare.com/i/1jZ.svg" id="d" />
                    <br />My Blog</a></li>
            </ul>
        )
    }
}

export default MenuItems;