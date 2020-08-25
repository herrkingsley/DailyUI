const toggelTab = document.querySelectorAll(".checkout__header");

toggelTab.forEach(element => {
    element.addEventListener("click", () =>{
        element.nextElementSibling.classList.toggle("collaps");
    });
});


// function collaps(event) {
//     const collaps = document.getElementById("collaps");
//     const icon = event.target;
//     collaps.classList.add("collaps");
// }