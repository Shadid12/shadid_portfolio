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
     a lifestyle that Brian felt was a perfect fit for his 
    brand. So he founded the UGG brand, began selling his sheepskin boots and they were 
    an immediate sensation. By the mid 1980's,</p>
  </div>
</section>

<section>
  <div className="parallax-two">
    <h2>I LOVE NEW YORK</h2>
  </div>
</section>

<section>
  <div className="block">
    <p><span className="first-character ny">B</span>reaking into the New York fashion world is no easy task. But by the early 2000's, UGG Australia began to take it by storm. The evolution of UGG from a brand that made sheepskin boots, slippers, clogs and sandals for an active, outdoor lifestyle to a brand that was now being touted as a symbol of a stylish, casual and luxurious lifestyle was swift. Much of this was due to a brand repositioning effort that transformed UGG into a high-end luxury footwear maker. As a fashion brand, UGG advertisements now graced the pages of Vogue Magazine as well as other fashion books. In the mid 2000's, the desire for premium casual fashion was popping up all over the world and UGG was now perfectly aligned with this movement.</p>
    <p className="line-break margin-top-10"></p>
    <p className="margin-top-10">Fueled by celebrities from coast to coast wearing UGG boots and slippers on their downtime, an entirely new era of fashion was carved out. As a result, the desire and love for UGG increased as people wanted to go deeper into this relaxed UGG experience. UGG began offering numerous color and style variations on their sheepskin boots and slippers. Cold weather boots for women and men and leather casuals were added with great success. What started as a niche item, UGG sheepskin boots were now a must-have staple in everyone's wardrobe. More UGG collections followed, showcasing everything from knit boots to sneakers to wedges, all the while maintaining that luxurious feel UGG is known for all over the world. UGG products were now seen on runways and in fashion shoots from coast to coast. Before long, the love spread even further.</p>
  </div>
</section>

<section>
  <div className="parallax-three">
    <h2>ENCHANTED FOREST</h2>
  </div>
</section>

<section>
  <div className="block">
    <p><span className="first-character atw">W</span>hen the New York fashion community 
    notices your brand, the world soon follows. The widespread love for UGG extended to
    Europe in the mid-2000's along with the stylish casual movement and demand for premium
    casual fashion. UGG boots and shoes were now seen walking the streets of London, Paris and 
    Amsterdam with regularity. To meet the rising demand from new fans, UGG opened flagship 
    stores in the UK and an additional location in Moscow. As the love spread farther East, 
    concept stores were opened in Beijing, Shanghai and Tokyo. UGG Australia is now an 
    international brand that is loved by all. This love is a result of a magical combination of the amazing
    functional benefits of sheepskin and the heightened 
    emotional feeling you get when you slip them on your feet. In short, you just feel better all over 
    when you wear UGG boots, slippers, and shoes.
    To meet the rising demand from new fans, UGG opened flagship 
    stores in the UK and an additional location in Moscow. As the love spread farther East, 
    concept stores were opened in Beijing, Shanghai and Tokyo. UGG Australia is now an 
    international brand that is loved by all. This love is a result of a magical combination of the amazing
    functional benefits of sheepskin and the heightened 
    emotional feeling you get when you slip them on your feet. In short, you just feel better all over 
    when you wear UGG boots, slippers, and shoes.</p>
    <p className="line-break margin-top-10"></p>
    <p className="margin-top-10">In 2011, UGG will go back to its roots and focus on bringing the active men that brought the brand to life back with new styles allowing them to love the brand again as well. Partnering with Super Bowl champion and NFL MVP Tom Brady, UGG will invite even more men to feel the love the rest of the world knows so well. UGG will also step into the world of high fashion with UGG Collection. The UGG Collection fuses the timeless craft of Italian shoemaking with the reliable magic of sheepskin, bringing the luxurious feel of UGG to high end fashion. As the love for UGG continues to spread across the world, we have continued to offer new and unexpected ways to experience the brand. The UGG journey continues on and the love for UGG continues to spread.</p>
  </div>
</section>


</div>
</div>

        );
    }
}

export default About;