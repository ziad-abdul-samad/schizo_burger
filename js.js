const sr = ScrollReveal ({
    distance:'50px',
    duration:"1500",
    delay:"100",
    reset:false
    }) ;
    
sr.reveal('.header' ,{delay:200 , origin: "top"} );
sr.reveal('.landing h1' ,{delay:400 , origin: "top"} );
sr.reveal('.landing .caption-1' ,{delay:500 , origin: "top"} );
sr.reveal('.landing .caption' ,{delay:600 , origin: "top"} );
sr.reveal('.landing img' ,{delay:800 , origin: "top"} );
sr.reveal('.products .product .image' ,{delay:400 , origin: "left"} );
sr.reveal('.products .product .caption' ,{delay:500 , origin: "right"} );

let switcher = document.querySelectorAll(".filter li");
let products = document.querySelectorAll(".products .product");
switcher.forEach((li) => {
li.addEventListener("click" ,removeactive );
li.addEventListener("click" ,manage );
});
function removeactive() {
    switcher.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active")
    });
}
function manage() {
products.forEach((product) => {
    product.style.display = "none"
document.querySelectorAll(this.dataset.cat).forEach((el) => {
    el.style.display = "block";
})
});  
}
