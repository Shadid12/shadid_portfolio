import React, { Component } from 'react';
import $ from 'jquery';

//CSS
import './About.css';

// Componennts


class About extends Component{
    
    componentDidMount(){
        $(".menu-link").click(function(e) {
          e.preventDefault();
          $(".menu").toggleClass("open");
          $(".menu-overlay").toggleClass("open");
        });
    }
    
    
    render(){
        return(
<div>


  <div className="menu" >
    <span className="menu-circle"></span>
    <a href="#" className="menu-link">
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

<div id="parallax-world-of-ugg">

<section>
  <div className="title">
    <h3>About</h3>
    <h1>ME</h1>
  </div>
</section>

<section>
    <div className="parallax-one">
      <h2>Seeking Freelance Work</h2>
    </div>
</section>
<section>
  <div className="block">
    <p><span className="first-character sc">I</span> am currently seeking freelance work</p>
    <h4>am located in Toronto</h4>
    <h2 style={ { 'background-color': '#35373a' } } >Tools That I Love To Use</h2>
    <p className="line-break margin-top-10"></p><br />
    <p>
        <ul className="menu-nav model-x" >
        <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                    style={ {
                    'width': '50px',
                    'height': '50px',
                    'border-radius': '20%'
                        
        } }/></li>
        <li><img src="http://devstickers.com/assets/img/pro/cew3.png"
                    style={ {
                    'width': '50px',
                    'height': '50px',
                    'border-radius': '20%'
                        
        } }/></li>
        
        <li><img src="https://www.sitepoint.com/wp-content/themes/sitepoint/assets/images/icon.ruby.png"
                    style={ {
                    'width': '50px',
                    'height': '50px',
                    'border-radius': '20%'
                        
        } }/></li>
        <li><img src="http://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg"
                    style={ {
                    'width': '50px',
                    'height': '50px',
                    'border-radius': '20%'
                        
        } }/></li>
        <li><img src="https://thenewboston.com/images/forum/logos/145efe2aab7ca9959397d6344180b658.png"
                    style={ {
                    'width': '50px',
                    'height': '50px',
                    'border-radius': '20%'
                        
        } }/></li>
        <li><img src="https://www.graphqlhub.com/images/graphqlhub-logo.png"
                    style={ {
                    'width': '50px',
                    'height': '50px',
                    'border-radius': '20%'
                        
        } }/></li>
        <li><img src="https://thinkster.io/assets/homepage/rails-9b13de39de9d2eed10a2418734ee1e584cdc9634c04206af1c2bfcc8b0d0e3d5.png"
                    style={ {
                    'width': '50px',
                    'height': '50px',
                    'border-radius': '20%'
                        
        } }/></li>
        
        
        </ul>
    </p>
    <p className="margin-top-10">
     I am a software craftsman with a passion for web developemnt, web applications and UX trends. I started building websites
     and web applications about 3 years ago. I have worked with IBM Canada and several other Toronto based
     start ups. </p>
  </div>
</section>

<section>
  <div className="parallax-two">
    <h2>I LOVE NEW YORK</h2>
  </div>
</section>

<section>
  <div className="block">
    <p><span className="first-character ny">L </span>
    Lorem ipsum dolor sit amet, sed legendos repudiare efficiendi in, in mei 
    illud regione, eum te case minim. Ne pro agam iuvaret aliquam. Cu sed veri 
    nonumy. An eirmod gloriatur ius, duo ex quidam integre, sint omnes munere per ne.
    Lorem ipsum dolor sit amet, sed legendos repudiare efficiendi in, in mei illud
    regione, eum te case minim. Ne pro agam iuvaret aliquam. Cu sed veri nonumy.
    An eirmod gloriatur ius, duo ex quidam integre, sint omnes munere per ne.
    Lorem ipsum dolor sit amet, sed legendos repudiare efficiendi in, in mei 
    illud regione, eum te case minim. Ne pro agam iuvaret aliquam. 
    </p>
    <p className="line-break margin-top-10"></p>
    <p className="margin-top-10">
    sed legendos repudiare efficiendi in, in mei 
    illud regione, eum te case minim. Ne pro agam iuvaret aliquam. Cu sed veri 
    nonumy. An eirmod gloriatur ius, duo ex quidam integre, sint omnes munere per ne.
    Lorem ipsum dolor sit amet, sed legendos repudiare efficiendi in, in mei illud
    regione, eum te case minim. Ne pro agam iuvaret aliquam. Cu sed veri nonumy.
    An eirmod gloriatur ius, duo ex quidam integre, sint omnes munere per ne.
    Lorem ipsum dolor sit amet, sed legendos repudiare efficiendi in, in mei 
    illud regione, eum te case minim. Ne pro agam iuvaret aliquam. 
    </p>
  </div>
</section>

<section>
  <div className="parallax-three">
    <h2>ENCHANTED FOREST</h2>
  </div>
</section>

<section>
  <div className="block">
    <p><span className="first-character atw">W</span>
    There are many variations of passages of Lorem Ipsum available, 
    but the majority have suffered alteration in some form, by injected humour, 
    or randomised words which don't look even slightly believable. 
    If you are going to use a passage of Lorem Ipsum, you need to be sure there 
    isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum 
    generators on the Internet tend to repeat predefined chunks as necessary, 
    making this the first true generator on the Internet. It uses a dictionary 
    of over 200 Latin words, combined with a handful of model sentence structures, 
    to generate Lorem Ipsum which looks reasonable. 
    The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
    There are many variations of passages of Lorem Ipsum available, 
    but the majority have suffered alteration in some form, by injected humour, 
    or randomised words which don't look even slightly believable. 
    If you are going to use a passage of Lorem Ipsum, you need to be sure there 
    isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum 
    generators on the Internet tend to repeat predefined chunks as necessary, 
    making this the first true generator on the Internet. It uses a dictionary 
    of over 200 Latin words, combined with a handful of model sentence structures, 
    to generate Lorem Ipsum which looks reasonable. 
    The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
    </p>
    <p className="line-break margin-top-10"></p>
    <p className="margin-top-10">
    The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
    There are many variations of passages of Lorem Ipsum available, 
    but the majority have suffered alteration in some form, by injected humour, 
    or randomised words which don't look even slightly believable. 
    If you are going to use a passage of Lorem Ipsum, you need to be sure there 
    isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum 
    generators on the Internet tend to repeat predefined chunks as necessary, 
    making this the first true generator on the Internet. It uses a dictionary 
    of over 200 Latin words, combined with a handful of model sentence structures, 
    to generate Lorem Ipsum which looks reasonable. 
    The generated Lorem Ipsum is therefore always free from repetition,
    </p>
  </div>
</section>


</div>
</div>

        );
    }
}

export default About;