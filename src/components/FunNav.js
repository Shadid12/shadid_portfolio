import React, { Component } from 'react';
import './FunNav.css';
import { StickyContainer, Sticky } from 'react-sticky';

class FunNav extends Component{
    
    render(){
       return(
<StickyContainer>
    <Sticky>
        {
            ({
              style,

              // the following are also available but unused in this example
              isSticky,
              wasSticky,
              distanceFromTop,
              distanceFromBottom,
              calculatedHeight
            }) => {
              return (
                <header style={style}>
                  Hello I am the header her
                </header>
              )
            }
        }
    </Sticky>
</StickyContainer>     
);
    }


}

export default FunNav;