import React, { Component } from 'react';
import './CoolButton.css'
import mojs from 'mo-js';
import $ from 'jquery';

class CoolButton extends Component {
    
    render(){
        return(
        <button className="icobutton icobutton--thumbs-up"
                id={"b" + this.props.value.id}
            onClick={() => this.execute(this.props.value)} >
        	<span className={this.props.value.icon} id={this.props.value.id}></span>
        </button>
        );
    }
    
    execute = (val) => {
        if(val.animation == 'thumb'){
            this.thumb(val.id);
        }
        
        if(val.animation == 'heart'){
            this.heart(val.id);
        }
        
        if(val.animation == 'forward'){
            this.fwrd(val.id);
        }
    }
    
    
    
// animations
    
    fwrd = (id) => {
        var p = "#b" + id;
        var el = document.querySelector(p);
        var elspan =document.querySelector("#"+id);
        var timeline = new mojs.Timeline();
        var scaleCurve5 = mojs.easing.path('M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0');
        
        
        var tween1 = new mojs.Burst({
    					parent: 	el,
    					count: 		15,
    					radius: 	{20:80},
    					angle: 		{ 0: 140, easing: mojs.easing.bezier(0.1, 1, 0.3, 1) },
    					children: {
    						fill: 			'#988ADE',
    						radius: 		20,
    						opacity: 		0.6,
    						duration: 	1500,
    						easing: 		mojs.easing.bezier(0.1, 1, 0.3, 1)
    					}
    				});
		
		var tween2 = new mojs.Tween({
					duration : 800,
					easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
					onUpdate: function(progress) {
						var scaleProgress = scaleCurve5(progress);
						elspan.style.WebkitTransform = elspan.style.transform = 'scale3d(' + progress + ',' + progress + ',1)';
					}
				});
		
		var tween3 = new mojs.Shape({
					parent: el,
					duration: 500,
					delay: 180,
					type: 'circle',
					radius: {0: 10},
					fill: 'transparent',
					stroke: '#F35186',
					strokeWidth: {5:0},
					opacity: 0.5,
					x: -10, 
					y: -80,
					isRunLess: true,
					easing: mojs.easing.sin.out
				});
		
		
		timeline.add(tween1, tween2, tween3);
		el.style.color = '#e7c9f2';
		timeline.replay();
		
    }
    
    heart = (id) => {
        
        var p = "#b" + id;
        var el = document.querySelector(p);
        var elspan =document.querySelector("#"+id);
        var timeline = new mojs.Timeline();
        
        var tween1 = new mojs.Shape({
					parent: el,
					duration: 750,
					type: 'circle',
					radius: {0: 40},
					fill: 'transparent',
					stroke: '#F35186',
					strokeWidth: {35:0},
					opacity: 0.2,
					top: '45%',
					easing: mojs.easing.bezier(0, 1, 0.5, 1)
				});
		
		var tween2 = new mojs.Burst({
					parent: el,
					count: 	6,
					radius: {60:90},
					degree: -90,
					angle: 	135,
					children: { 
						shape: 				'line',
						radius: 			{30:0},
						scale: 				1,
						stroke: 			'#988ADE',
						strokeWidth: 	{2:1},
						duration: 		600,
						delay: 				200,
						easing: 			mojs.easing.bezier(0.1, 1, 0.3, 1)
					},
				});
		
		var tween3 = new mojs.Shape({
					parent: el,
					duration: 500,
					delay: 180,
					type: 'circle',
					radius: {0: 10},
					fill: 'transparent',
					stroke: '#F35186',
					strokeWidth: {5:0},
					opacity: 0.5,
					x: -10, 
					y: -80,
					isRunLess: true,
					easing: mojs.easing.sin.out
				});
		timeline.add(tween1, tween2, tween3);
	    el.style.color = '#988ADE';
        timeline.replay();
    }

    thumb = (id) =>{
        var p = "#b" + id;
        var el = document.querySelector(p);
        var elspan =document.querySelector("#"+id);
        var timeline = new mojs.Timeline();
        

	var tween1 = new mojs.Burst({
					parent: 			el,
					radius: 			{30:90},
					count: 				6,
					children : {
						fill: 			'#C0C1C3',
						opacity: 		0.6,
						radius: 		15,
						duration: 	1700,
						easing: 		mojs.easing.bezier(0.1, 1, 0.3, 1)
					}
				});
	// ring animation
	var	tween2 = new mojs.Shape({
					parent: 		el,
					type: 			'circle',
					radius: 		{0: 60},
					fill: 			'transparent',
					stroke: 		'#C0C1C3',
					strokeWidth: {20:0},
					opacity: 		0.6,
					duration: 	700,
					easing: 		mojs.easing.sin.out
				});
	
	var	tween3 = new mojs.Tween({
					duration : 1200,
					onUpdate: function(progress) {
						if(progress > 0.3) {
							var elasticOutProgress = mojs.easing.elastic.out(1.43*progress-0.43);
							elspan.style.WebkitTransform = elspan.style.transform = 'scale3d(' + elasticOutProgress + ',' + elasticOutProgress + ',1)';
						}
						else {
							elspan.style.WebkitTransform = elspan.style.transform = 'scale3d(0,0,1)';
						}
					}
				});
    
    timeline.add(tween1, tween2, tween3);
    
    timeline.replay();

        
    }

    
}

export default CoolButton;