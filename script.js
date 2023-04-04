let currencyFirstEl = document.getElementById("currency-first");
let worthFirstEl = document.getElementById("worth-first");
let currencySecondEl = document.getElementById("currency-second");
let worthSecondEl = document.getElementById("worth-second");
let exchangeRateEl = document.getElementById("exchange-rate");

updateRate()
// for default selection
function updateRate() {
  fetch(
    `https://v6.exchangerate-api.com/v6/33608c25577c56b37be6fb6a/latest/${currencyFirstEl.value}`
  )
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
      const rate = data.conversion_rates[currencySecondEl.value];
    console.log(rate);
      exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${
        rate + " " + currencySecondEl.value
      }`;

      worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2)
    });
}
currencyFirstEl.addEventListener("change", updateRate);
currencySecondEl.addEventListener("change", updateRate);
worthFirstEl.addEventListener("input", updateRate);