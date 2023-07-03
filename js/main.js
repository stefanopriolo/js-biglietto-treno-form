const submit = document.getElementById("submit");
console.log(submit);

submit.addEventListener("click", function () {
  let price = 0;
  const userName = document.querySelector(".userName");
  const km = document.querySelector(".km");
  const age = document.querySelector(".age");

  price = km * 0.21;

  if (age.value < 18) {
    price *= 0.8;
  } else if (age.value > 65) {
    price *= 0.6;
  }

  console.log(price);
  const priceDiv = document.querySelector("#price");

  priceDiv.innerHTML = `Prezzo per ${nome.value}: ${price.toFixed(
    2
  )}euro per una tratta di ${km.value}km;`;
});
