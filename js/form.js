var button = document.querySelector(".button-search-hotel");
var form = document.querySelector(".travel-form");
var arrival = form.querySelector("[name=arrivaldate]");
var departure = form.querySelector("[name=departuredate]");
var adults = form.querySelector("[name=adults]");
var childrens = form.querySelector("[name=childrens]");

form.classList.add('travel-form-hide');
button.addEventListener("click",function() {
  if (form.classList.contains ('travel-form-hide')) {
    form.classList.remove('travel-form-hide');
    form.classList.add('travel-form-open');
  }
  else {
    form.classList.remove('"travel-form-error');
    form.classList.remove('travel-form-open');
    form.classList.add('travel-form-hide');
  }

  form.addEventListener("submit", function (evt) {
    if (!arrival.value || !departure.value || !adults.value || !childrens.value) {
      evt.preventDefault();
      form.classList.remove("travel-form-error");
      form.offsetWidth = form.offsetWidth;
      form.classList.add("travel-form-error");
    } 
  });
});


