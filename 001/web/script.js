const header = document.getElementById('header');
const btn = document.getElementById('submitBtn');
const label = document.getElementsByTagName('label');
const input = document.getElementsByTagName('input');
const dropDown = document.getElementById('signedUp');


btn.addEventListener('click', () => {
    if(validateForm() === 3){
        animLetter();
        renderSuccsess()
        animSuccsess();
    } else {
        console.log("not valid form");

    }
    
});

function validateForm() {
    let name = document.getElementById('labelName');
    let Email = document.getElementById('labelEmail');
    let Tel = document.getElementById('labelTel');
    let score = 0;
    if(getData()[0].length > 2) {
        name.className = 'right';
        score += 1;
    } else {
        name.className = 'wrong';
    }

    if(validateEmail(getData()[1])) {
        Email.className = 'right';
        score += 1;
    } else {
        Email.className = 'wrong';
    }

    if(getData()[2].length > 5) {
        Tel.className = 'right';
        score += 1;
    } else {
        Tel.className = 'wrong';
    }

    return score;
    
}

 // Returns values from form in a array.
function getData() {
    const name = toTitleCase(document.getElementById('name').value);
    const email = document.getElementById('email').value;
    const tel = document.getElementById('phone').value;

    return [name, email, tel]
}

function animLetter(){
    btn.classList.add('letter');
    for (let i = 0; i < label.length; i++){
        label[i].className = "fade";
    }
    for (let i = 0; i < input.length; i++){
        let j = 3 - i;
        input[i].className = "shrink" + j;
    }
    header.classList.add('fade__header');

}

function renderSuccsess() {
    const name = document.getElementById('descName');
    const email = document.getElementById('descEmail');

    name.innerHTML = getData()[0];
    email.innerHTML = getData()[1];
}

function animSuccsess() {
    dropDown.classList.add('drop-down');
}

// simple form validation

/* 
credit Steve Brush@stackoverflow, user:6178885 
Capatilizes name
*/
const toTitleCase = (phrase) => {
    return phrase
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  
/* 
credit C. Lee@stackoverflow, user:270821 
Simpel email validation
*/
function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
