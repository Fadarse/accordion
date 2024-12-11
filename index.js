const expandBtn = document.querySelectorAll(".expand");

expandBtn.forEach((expand) => {
expand.addEventListener("click", (event) => {

        if(expand.classList.contains("expand")) {
            expand.classList.replace("expand", "toggle");
            event.target.parentElement.nextElementSibling.style.display = "block";
        }
        else {
            expand.classList.replace("toggle", "expand");
            event.target.parentElement.nextElementSibling.style.display = "none";   
        }
    });
});
