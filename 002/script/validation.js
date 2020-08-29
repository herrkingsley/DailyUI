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

// Validating the input
function validateName(cardName) 
    {
        var re = /\S+ \S+/;
        return re.test(cardName.value);
    }

validateNumber = () => {
    return cardNumber.value.length == 19;
    }

validateDate = () => {
    return cardDate.value.length == 7;
    }
    
validateCVC = () => {
    return cardCVC.value.length == 4;
    }
    


// function validateEmail(email) 
//     {
//         var re = /\S+@\S+\.\S+/;
//         return re.test(email.value);
//     }

// validating the whole form

function checkForm(){
    const check = [];
    check.push( markInput(validateName(cardName), check));
    check.push( markInput(validateNumber(), check) );
    check.push( markInput(validateDate(), check) );
    check.push( markInput(validateCVC(), check) );
    

    if(check.indexOf(false) < 0){
        // console.log("All is great");
        return true;
    } else {
        // console.log("no go");
        return false;
    }
   
}

function markInput(boolean, num){
    const elements = document.querySelectorAll("#popUpCard form label");
    var number = num.length;

    if(boolean){
        elements[number].classList.remove("wronInput");
        elements[number].classList.add("correctInput");
 
        return true;
    }else {
 
        elements[number].classList.remove("correctInput");
        elements[number].classList.add("wronInput");
        
        return false;
    }
}



