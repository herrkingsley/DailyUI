let bg = document.getElementById('bgImg');
let waterLevel = document.getElementById('waterlevel');

function scaleScroll(value){
    let scrollStop = 450;
    let maxScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollStep = 0.8 / scrollStop; 


    if(value < scrollStop) {
        console.log('scrollstep ' + (1 - (value * scrollStep)))
        waterLevel.style.cssText = 'transform: scaleY(' + (1 - (value * scrollStep)) + '); transform-origin: 0 0;'
        
    }
}



window.addEventListener('scroll', function(){
    let value = window.scrollY;
    console.log(value);
    bg.style.top = value * 0.5 + 'px';
    // waterLevel.style.cssText = 'transform-origin: bottom center;'
    // waterLevel.style.cssText = 'transform: scaleY(' + value * 0.01 + ');'


    scaleScroll(value);

    waterLevel.style.marginTop =  value * 0.5 + 'px';
    

});




/* 
value goes from 1 - 500 
every step should decrese scaleY with amount of %
End scale should be 20% meening there is a decreese in size of 80%

There should also be an condition if value is greater than 500 no scale should be applied.

(document.documentElement.scrollHeight - document.documentElement.clientHeight)



*/