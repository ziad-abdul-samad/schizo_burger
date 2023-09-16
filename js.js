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