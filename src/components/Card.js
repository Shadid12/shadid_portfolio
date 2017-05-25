import React, { Component } from 'react';

class Card extends Component{
    render(){
        return(
        <div>
            <img src="http://i.imgur.com/XyGjVux.jpg" className="profile-img" />
            <div className="profile-text">
                <h1 className="profile-name">Shadid Haque</h1>
                <span className="profile-title">Web Developer</span>
            </div>
        </div>
        );
    }
}

export default Card;