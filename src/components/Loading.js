import React, { Component } from 'react';
import './Loading.css';

class Loading extends Component{
    render(){
        return(
        <div className="loading-container">
            <div className="loading"></div>
            <div id="loading-text">loading</div>
        </div>
        )
    }
}

export default Loading;