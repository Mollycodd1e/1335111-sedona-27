    var button = document.querySelector(".button-search-hotel");
    var form = document.querySelector(".travel-form");
   

    button.addEventListener("click",function(evt) {
        evt.preventDefault();
        form.classList.toggle("travel-form-close");
    });
    