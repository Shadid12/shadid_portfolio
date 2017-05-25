import React, { Component } from 'react';
import './Home.css';
import $ from 'jquery';
import Card from './Card';
import SocialIcons from './SocialIcons';
import Burger from './Burger';

class Home extends Component{
    
    componentDidMount(){
        	$(".block").on("click", function() {
        		$(".info").toggleClass("active");
        	});
    }
    
    render(){
        return(
        	<div>
            <div className="container">
            	<Card />
            </div>
            	<SocialIcons />
            	<Burger />
            </div>
        );
    }
}

export default Home;