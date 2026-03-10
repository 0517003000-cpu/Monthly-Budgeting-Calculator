const button = document.getElementById("calculateBtn");

button.addEventListener("click", function(){

let income = document.getElementById("income").value;
income = Number(income);

let essentials = income * 0.5;
let nonEssentials = income * 0.3;
let savings = income * 0.2;

document.getElementById("essentials").innerText =
"Essential Expenses (50%): Rp " + essentials.toLocaleString();

document.getElementById("nonEssentials").innerText =
"Non-Essential Expenses (30%): Rp " + nonEssentials.toLocaleString();

document.getElementById("savings").innerText =
"Savings (20%): Rp " + savings.toLocaleString();

});
