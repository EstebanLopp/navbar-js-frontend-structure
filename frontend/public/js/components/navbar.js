document.addEventListener("DOMContentLoaded", function(){
    const navbarelement = document.querySelector(".navbar-container");

    if(navbarelement){
        fetch("/frontend/public/views/components/navbar.html")
        .then(Response => Response.text())
        .then(data => {navbarelement.innerHTML = data;       
    })
    .catch(error => console.error("Error cargando el navbar", error));

    }
});