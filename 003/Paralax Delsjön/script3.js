window.addEventListener('scroll',  function (e) {

    let scrolled = window.pageYOffset;
    let maxScroll = document.documentElement.scrollHeight
    var vw = window.innerWidth;
    let procentOfShrinkL = 0.7 / 800; // shrink waterlevel by procent on Lagre screens
    let procentOfShrinkM = 0.7 / 1100; // shrink waterlevel by procent on Medium screens
    let procentOfShrinkS = 0.7 / 500; // shrink waterlevel by procent on Small screens
    console.log(scrolled);


    // add all the elements that will scroll here
    const branch = document.getElementById('branch');
    const title = document.getElementById('title');
    const waterLevel = document.getElementById('waterlevel');
    // branch.style.top = (scrolled * 2.2) + 'px';

    // Other variables
    

    branch.style.marginTop =  - scrolled * 0.2 + 'px';
    if (vw > 1000) {
        title.style.marginTop =  scrolled * 0.6 + 'px';
        
        
    } else {
        title.style.marginTop =  scrolled * 0.69 + 'px';
    }
    if (vw > 1000) {
        waterLevel.style.cssText = 'transform: scaleY(' + (1 - (procentOfShrinkL * scrolled )) + '); transform-origin: 0 0;';
    }
    else if (vw > 720) {
        waterLevel.style.cssText = 'transform: scaleY(' + (1 - (procentOfShrinkM * scrolled )) + '); transform-origin: 0 0;';
    } else {
        waterLevel.style.cssText = 'transform: scaleY(' + (1 - (procentOfShrinkS * scrolled )) + '); transform-origin: 0 0;';
    }
    //Fade
    if (scrolled > 300) {
        scrollFade(300, 500, title, 0.2);
        
    } else {
        title.style.opacity = 1;
    }


    if (vw > 1000) {
        title.style.marginTop =  scrolled * 0.6 + 'px';
    } else {
        title.style.marginTop =  scrolled * 0.69 + 'px';
    }
    
    function renderDesc() {
        let desc = document.getElementById('desc');
        let descP = document.querySelectorAll('#desc > p');
        desc.style.marginTop =  scrolled * 0.09 + 'px';

        if (vw > 1000 && scrolled > 300 && scrolled < 1000) {    
            desc.style.transform = "translateX(-50%) scale(1)";
            descP.forEach(element => {
                element.style.color = "transparent";
                element.style.textShadow = "0 0 0px rgba(255, 255, 255, 1)";
            });
            
            
            
        } else {
            // desc.style.transform = "translateX(-50%) scale(.8)";
            descP.forEach(element => {
                element.style.color = "transparent";
                element.style.textShadow = "0 0 10px rgba(255, 255, 255, 0)";
            });
        }
        
    }
    renderDesc();

    function scrollFade(sStart, sEnd, e, oEnd) // Function takes arguments; when 
    {
        let newScroll = scrolled - sStart;
        let scrollLength = sEnd - sStart;
        let opacityMargin = 1 - oEnd;
        let unitPerScroll = opacityMargin / scrollLength;
        e.style.opacity = (1 - (newScroll * unitPerScroll));


    }


})

function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    alert(coords);
}