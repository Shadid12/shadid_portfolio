import React, { Component } from 'react'
import './Blog.css'
import $ from 'jquery'

class Blog extends Component {
    
    componentDidMount(){
        $(".menu-link").click(function(e) {
          e.preventDefault();
          $(".menu").toggleClass("open");
          $(".menu-overlay").toggleClass("open");
        });
    }
    
    render(){
        return(


<div className="">


<div className="menu" >
<span className="menu-circle"></span>
<a href="" className="menu-link">
  <span className="menu-icon">
    <span className="menu-line menu-line-1"></span>
    <span className="menu-line menu-line-2"></span>
    <span className="menu-line menu-line-3"></span>
  </span>
</a>
</div>

<div className="menu-overlay">
<a href="/">Home</a>
<a href="/#/port">Portfolio</a>
<a onClick={ (e) =>  { 
       e.preventDefault(); 
       $(".menu").toggleClass("open");
       $(".menu-overlay").toggleClass("open");
  } }
  style={ { 'cursor': 'pointer', 'text-decoration-line' : 'underline'} }
  >Back</a>
</div>



  <h1 className="bh1">Blog Posts</h1>
    <div className="row">
    <div className="eight columns">
      <div className="featured"></div>
      <div className="teaser">
       <h3>Making your own coding bootcamp</h3>
        <h6><span>April 28, 2017</span></h6>
      <p>
        I hear a lots of good things about coding boot camps. 
        Many in the developer community is considering them to be the next Computer Science degree. 
        I always wanted to get into a web development coding boot-camp; however,
        I lack the resources to get into one. Here in Toronto they cost about 15000 $.
        So after doing some research online I stumbled upon this post a road map to become 
        a web developer in 2017 and I have decided to create my own curriculum that resembles 
        a coding boot camp's curriculum.
      </p>
        <h6><a href="https://medium.com/@shadidhaque/create-your-own-coding-boot-camp-72f45041cefd">Read More</a></h6>
      </div>
    </div>
    
    
    <div className="four columns">
    <div className="img iTwo"></div>
      <div className="teaser">
    <h3>React Easy Way</h3>
        <h6><span>Cooming soon</span></h6>
      <p>Bacon ipsum dolor amet doner tri-tip shankle, lorem ipsum</p>
        <h6><a href="#">Read More</a></h6></div>
    </div>
    
    
    </div>
    
</div>



        )
    }
}

export default Blog;