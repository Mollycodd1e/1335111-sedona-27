var button = document.querySelector(".button-search-hotel");
var form = document.querySelector(".travel-form");

form.classList.add('travel-form-hide');
button.addEventListener("click",function() {
  if (form.classList.contains ('travel-form-hide')) {
    form.classList.remove('travel-form-hide');
    form.classList.add('travel-form-open');
  }
  else {
    form.classList.remove('travel-form-open');
    form.classList.add('travel-form-hide');
  }
});


