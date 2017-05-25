import React, { Component } from 'react';
import './Home.css';
import $ from 'jquery';
import Card from './Card';
import SocialIcons from './SocialIcons';

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
            </div>
        );
    }
}

export default Home;