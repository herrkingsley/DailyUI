// const toggelTab = document.querySelectorAll(".checkout__header");
const cardSubmitbtn = document.querySelector("#cardSubmit");
const cardName = document.querySelector("#cardName");
const cardNumber = document.querySelector("#cardNumber");
const cardDate = document.querySelector("#cardDate");
const cardCVC = document.querySelector("#cardCVC");


// Format text in card number

cardNumber.addEventListener('keydown', function(event) {
    const key = event.key;

    const value = cardNumber.value.length
    
    if(key === "Backspace" || key === "Delete"){
        
    }else if (isNaN(key/1)) {
        event.preventDefault();
    } else if(value == 4 || value == 9 || value == 14) {
      cardNumber.value += " ";
    }
    
  });

  // Format text in date

  cardDate.addEventListener('keydown', function(event) {
    const key = event.key;

    const value = cardDate.value.length
    
    if(key === "Backspace" || key === "Delete"){
        
    }else if (isNaN(key/1)) {
        event.preventDefault();
    } else if(value == 2) {
      cardDate.value += " / ";
    }
    
  });


function validateName(cardName) 
    {
        var re = /\S+ \S+/;
        return re.test(cardName.value);
    }

validateNumber = () => {
    return cardNumber.value.length == 16;
    }

validateNumber = () => {
    return cardNumber.value.length == 16;
    }
    


// function validateEmail(email) 
//     {
//         var re = /\S+@\S+\.\S+/;
//         return re.test(email.value);
//     }

function validateForm(boolean){
    if(boolean){
        console.log("this is true");
    }else {
        console.log("this is NOT true");
    }
}



