    var button = document.querySelector(".button-search-hotel");
    var form = document.querySelector(".travel-form");


    form.classList.add('travel-form-hidden');

    button.addEventListener("click",function() {
        form.classList.toggle("travel-form-open");
        form.classList.toggle("travel-form-close");
    });


