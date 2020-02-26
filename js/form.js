     // var button = document.querySelector(".button-search-hotel");
    // var form = document.querySelector(".travel-form");


    // button.addEventListener("click",function(evt) {
    //     evt.preventDefault();
    //     form.classList.toggle("travel-form-close");
    // });


    var button = document.querySelector(".button-search-hotel");
    var form = document.querySelector(".travel-form");

    form.classList.add('travel-form-hide');
    form.classList.add('travel-form-close');

    button.addEventListener("click",function() {
      form.classList.remove('travel-form-hide');
      // if (form.classList.contains ('travel-form-hide')) {
      //   form.classList.remove('travel-form-hide');
      //   form.classList.add('travel-form-open');
      // } else
      if (form.classList.contains ('travel-form-close')) {
        form.classList.remove('travel-form-close');
        form.classList.add('travel-form-open');
      }
      else {
        form.classList.remove('travel-form-open');
        form.classList.add('travel-form-close');
      }
    });

