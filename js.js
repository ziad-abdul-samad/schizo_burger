const sr = ScrollReveal ({
    distance:'90px',
    duration:"1500",
    delay:"100",
    reset:true
    }) ;
    
sr.reveal('.header' ,{delay:200 , origin: "left"} );
sr.reveal('.filter' ,{delay:500 , origin: "right"} );
sr.reveal('.landing h1' ,{delay:300 , origin: "top"} );
sr.reveal('.landing p' ,{delay:400 , origin: "top"} );
sr.reveal('.landing img' ,{delay:600 , origin: "top"} );
sr.reveal('.products' ,{delay:200 , origin: "top"} );

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
