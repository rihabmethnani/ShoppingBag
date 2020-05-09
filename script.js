const deletbutton = document.querySelectorAll(".fa-times-circle");
const heartbutton = document.querySelectorAll(".fa-heart");
const plusbutton = document.querySelectorAll(".fa-plus-square");
const minusbutton = document.querySelectorAll(".fa-minus-square");
const total = document.querySelector(".cart-total-price");


console.log(deletbutton);
Array.from(deletbutton).map((el) => {
    el.addEventListener("click", () => {
        console.log("clicked on the botton");
        el.parentElement.parentElement.remove();
    });
});
Array.from(heartbutton).map((element) => {
    element.addEventListener("click", () => {
        element.classList.toggle("red");
    });
});

Array.from(plusbutton).map((el) => {
    el.addEventListener("click", () => {
        el.nextElementSibling.innerHTML++;
        let productprice = el.parentElement.nextElementSibling.innerHTML.replace("DT", "");

        var totalprice = total.innerHTML.replace("DT", "");
        total.innerHTML = parseInt(productprice) + parseInt(totalprice) + "DT";


    });
});
Array.from(minusbutton).map((el) => {
    el.addEventListener("click", () => {
        if (el.previousElementSibling.innerHTML > 0) {
            el.previousElementSibling.innerHTML--;
            let productprice = el.parentElement.nextElementSibling.innerHTML.replace("DT", "");
console.log(productprice);
            var totalprice = total.innerHTML.replace("DT", "");
            total.innerHTML =parseInt(totalprice) - parseInt(productprice)  + "DT";

        }

    });
});
