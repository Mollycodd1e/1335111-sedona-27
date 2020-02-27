var button = document.querySelector(".button-search-hotel");
var form = document.querySelector(".travel-form");
var arrival = form.querySelector("[name=arrivaldate]");
var departure = form.querySelector("[name=departuredate]");
var adults = form.querySelector("[name=adults]");
var childrens = form.querySelector("[name=childrens]");

form.classList.add('travel-form-hide');
button.addEventListener("click",function() {
  form.classList.remove("travel-form-error");
  form.classList.toggle('travel-form-open');
});

form.addEventListener("submit", function (evt) {
  if (!arrival.value || !departure.value || !adults.value || !childrens.value) {
    evt.preventDefault();
    form.classList.remove("travel-form-error");
    form.offsetWidth = form.offsetWidth;
    form.classList.add("travel-form-error");
  }
}); 