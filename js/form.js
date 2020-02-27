var button = document.querySelector(".button-search-hotel");
var form = document.querySelector(".travel-form");
var arrival = form.querySelector("[name=arrivaldate]");

form.classList.add('travel-form-hide');
button.addEventListener("click",function() {
  if (form.classList.contains ('travel-form-hide')) {
    form.classList.remove('travel-form-hide');
    form.classList.add('travel-form-open');
    arrival.focus();
  }
  else {
    form.classList.remove('travel-form-open');
    form.classList.add('travel-form-hide');
  }
});


