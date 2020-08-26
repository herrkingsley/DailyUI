const toggelTab = document.querySelectorAll(".checkout__header");

toggelTab.forEach(element => {
    element.addEventListener("click", () =>{
        element.nextElementSibling.classList.toggle("collaps");
        element.firstElementChild.classList.toggle("rotate-90-cw");
    });
});


//Add active class to credit card buttons
var cardBtns = document.querySelectorAll(".slider__btns__list__btn");
for (var i = 0; i < cardBtns.length; i++) {
    
      cardBtns[i].addEventListener("click", function() {
        console.log("click");
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
      });
    }
