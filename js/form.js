    var close= document.querySelector("button-search-hotel");
    var form = document.querySelector(".travel-form");
   

    close.addEventListener("click",function (evt) {
        evt.preventDefault();
        form.classList.add("travel-form-close");
    }) ;