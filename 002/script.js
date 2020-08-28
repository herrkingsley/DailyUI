const toggelTab = document.querySelectorAll(".checkout__header");
const popUp = document.querySelector("#popUp");
const closePopUp = document.querySelector("#closePopUp");
const popUpCard = document.querySelector("#popUpCard");
const cardElement = document.querySelectorAll(".cc-card");
const cardSubmit = document.querySelector("#cardSubmit");
const payBtn = document.querySelector("#payBtn");


function addBG(bgClass, cardClass){
  popUp.classList.toggle("popUp-close");
  popUpCard.classList.toggle(bgClass);
  popUpCard.firstElementChild.firstElementChild.classList.toggle(cardClass);
}

function closePopup(){
  var cardBrand = popUpCard.firstElementChild.firstElementChild;
  popUp.classList.toggle("popUp-close");
  popUpCard.classList.toggle(popUpCard.classList[1]);
  cardBrand.classList.toggle(cardBrand.classList[1]);
}

toggelTab.forEach(element => {
    element.addEventListener("click", () =>{
        element.nextElementSibling.classList.toggle("collaps");
        element.firstElementChild.classList.toggle("rotate-90-cw");
    });
});


// open popup
cardElement.forEach(element => {
  element.addEventListener("click", () =>{
    var elementBg = element.classList[1];
    var elementLogo = element.firstElementChild.classList[1]
    addBG(elementBg, elementLogo);
  });
});

// close popup
closePopUp.addEventListener("click", () =>{
  closePopup();
  });


//Add active class to credit card buttons
var cardBtns = document.querySelectorAll(".slider__btns__list__btn");
for (var i = 0; i < cardBtns.length; i++) {
    
      cardBtns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
      });
    }

// submit card

cardSubmit.addEventListener("click", (event) =>{
  event.preventDefault();
  payBtn.classList.remove("btn-inactive");
  closePopup();
  });


  // pay btn

  payBtn.addEventListener("click", (event) =>{
  event.preventDefault();
  });
