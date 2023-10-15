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
sr.reveal('.landing img' ,{delay:800 , origin: "bottom"} );
sr.reveal('.products' ,{delay:800 , origin: "top"} );

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
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
