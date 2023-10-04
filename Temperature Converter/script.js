const celsiusField = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

window.addEventListener("load", () => {
  degree.value = "";
  celsiusField.innerHTML = "";
});

if(degree.value === ""){
  convertBtn.setAttribute("disabled","");
  setTimeout(() => {
    convertBtn.removeAttribute('disabled');
  }, 4000);
}


convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  convertToCelsius();
  convertBtn.innerHTML = "<span class='icon'><i class='fa fa-spinner fa-spin'></i> Converting...</span>";
  setTimeout(() => {
    convertBtn.innerHTML ="<span>Convert</span>"
  }, 1000);
});

function convertToCelsius() {
  let inputValue = degree.value;
  
  setTimeout( () => {
    if (tempType.value === "fahrenheit") {
      const FahrenheitToCelsius = (inputValue - 32) * (5 / 9);
      celsiusField.innerHTML = `${FahrenheitToCelsius.toFixed(1)} &deg;C`;
    } else if (tempType.value === "celsius") {
      const KelvinToCelsius = ((9/5)*inputValue)+32;
      celsiusField.innerHTML = `${KelvinToCelsius.toFixed(1)} &deg;F`;
    }
  }, 1200)
}