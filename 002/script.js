const toggelTab = document.querySelectorAll(".checkout__header");

toggelTab.forEach(element => {
    element.addEventListener("click", () =>{
        element.nextElementSibling.classList.toggle("collaps");
        element.firstElementChild.classList.toggle("rotate-90-cw");
    });
});
