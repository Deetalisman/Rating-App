
const submit = document.querySelector("#submit");
const alert = document.querySelector(".alert");
const rates = document.querySelectorAll(".btn");
const rating = document.querySelector(".rating");
const rateAgain = document.querySelector("#rate")

submit.addEventListener("click",function(e) {
    alert.classList.toggle('hidden');
});

rateAgain.addEventListener("click",function(e) {
    alert.classList.toggle('hidden');
});

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rate.style.backgroundColor = "white";
        rating.innerHTML = rate.innerHTML;
    })
})
