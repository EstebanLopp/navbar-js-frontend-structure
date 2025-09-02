// Espera que el DOM este completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () =>{
    // Esto selecciona el formulario con la clase .contact-form__form
    const form = document.querySelector(".contact-form__form")

    // Verifica que el formulario exista en el DOM
    if (form) {

        // escucha el evento submit del formulario
        form.addEventListener("submit", async (e) => {

            // Prevenir el comportamiento por defecto del navegador de recarga de la pagina
            e.preventDefault();

            const formdata = new FormData(form);
            const data = Object.fromEntries(formdata);

            try{

                const response
            }
        })
    }


});