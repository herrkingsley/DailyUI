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
    const particles1 = document.getElementById('particles1');

    // branch.style.top = (scrolled * 2.2) + 'px';

    renderDesc();
    renderFishTitle();
    renderGadda();
    // Other variables
    

    branch.style.marginTop =  - scrolled * 0.2 + 'px';
    if (vw > 1000) {
        title.style.marginTop =  scrolled * 0.6 + 'px';
        particles1.style.marginTop =  scrolled * 1.5 + 'px';
        particles1.style.marginLeft =  scrolled * 0.3 + 'px';
        
        
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
        

        if (vw > 1000 && scrolled > 300 && scrolled < 700) {    
            desc.style.transform = "translateX(-50%) scale(1)";
            descP.forEach(element => {
                textBlurFadeIn(element, 2, true);
                desc.style.marginTop =  scrolled * 0.2 + 'px';
            });

        } else if (700 && scrolled < 900) {    
            // desc.style.transform = "translateX(-50%) scale(1)";
            descP.forEach(element => {
                // textBlurFadeIn(element, 2, true);
                // desc.style.marginTop =  scrolled * 0 + 'px';
            });
        } else {
            descP.forEach(element => {
                textBlurFadeIn(element, 2, false);
            });
        }
        
    }


    function renderFishTitle() {
        const fishTitle = document.getElementById('fish-title');
        fishTitle.style.marginTop =  scrolled * 0.09 + 'px';

        if (vw > 1000 && scrolled > 300 && scrolled < 1300) {    
            textBlurFadeIn(fishTitle, 2, true);  
        } else {
            textBlurFadeIn(fishTitle, 2, false);
        }
        
    }

    function renderGadda() {
        const GaddaCont = document.getElementById('gadda-container');
        const Gadda = document.getElementById('gadda');
        GaddaCont.style.top =  scrolled * 0.15 + 'px';

        if (vw > 1000 && scrolled > 1000 && scrolled < 1300) { 
            containerBlurFadeIn(GaddaCont, 1, true);   
            fromSide(Gadda, 2, 'left'); 

        } else {
            containerBlurFadeIn(GaddaCont, .5, false);
            
        }
        
    }

    function scrollFade(sStart, sEnd, e, oEnd) // Function takes arguments; when 
    {
        let newScroll = scrolled - sStart;
        let scrollLength = sEnd - sStart;
        let opacityMargin = 1 - oEnd;
        let unitPerScroll = opacityMargin / scrollLength;
        e.style.opacity = (1 - (newScroll * unitPerScroll));


    }

/*----------------------------------------------
## Animation functions
/----------------------------------------------*/

    function textBlurFadeIn(element, lenght, bool) {
        if(bool == true) {
            element.style.animationName = "blurFadeIn";
        } else {
            element.style.animationName = "blurFadeOut";
        }
        element.style.animationDuration = `${lenght}s`;
        element.style.animationTimingFunction = 'ease-in-out';
        element.style.animationFillMode = 'forwards';

    }

    function containerBlurFadeIn(element, lenght, bool) {
        if(bool == true) {
            element.style.animationName = "blurInContainer, opacityIn";
        } else {
            element.style.animationName = "blurOutContainer, opacityOut";
        }
        element.style.animationDuration = `${lenght}s`;
        element.style.animationTimingFunction = 'ease-in-out';
        element.style.animationFillMode = 'forwards';

    }

    function fromSide(element, lenght, left) {
        if(left == 'left') {
            element.style.animationName = "fromLeft";
        } else {
            element.style.animationName = "fromRigth";
        }
        element.style.animationDuration = `${lenght}s`;
        element.style.animationTimingFunction = 'ease-in-out';
        element.style.animationFillMode = 'forwards';

    }


    
    


})
