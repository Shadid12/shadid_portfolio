import React, { Component } from 'react';
import './Home.css';
import $ from 'jquery';
import Card from './Card'

class Home extends Component{
    
    componentDidMount(){
        	$(".block").on("click", function() {
        		$(".info").toggleClass("active");
        	});
    }
    
    render(){
        return(
            <div className="container">
            	<Card />
            </div>
        );
    }
}

export default Home;