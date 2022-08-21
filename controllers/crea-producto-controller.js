import { productosServices } from "../servicios/productos-servicios.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nombre = document.querySelector ('[data-name]').value
    const url = document.querySelector ('[data-url]').value
    const desc = document.querySelector ('[data-desc]').value
    const precio = document.querySelector ('[data-precio]').value

    productosServices.creaProducto(nombre, url, desc, precio).then(respuesta => {
        window.location.href = "/index.html"
        alert("el producto fue creado")

        console.log(respuesta)
    }).catch (err => {
        console.log(err)
    })

}); 