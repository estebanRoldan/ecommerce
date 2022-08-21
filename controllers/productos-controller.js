    import { productosServices } from "../servicios/productos-servicios.js";

const nuevoProducto = ( name, price, imageURL) => {
        const card = document.createElement("div");
        
        const contenido = `<div >
        <img src="${imageURL}">
        <h3 >${name}</h3>
        <h3>${price}</h3> 
        <h3><a href="">Ver producto</a>
        </h3>  


        </div>`;

        card.innerHTML = contenido;
        card.classList.add("prod_box")
        return card;

    };
 
    const productos = document.querySelector("[data-productos]");

    const render = async () => {
        try{
            const listaProductos = await productosServices.listaProductos()
            listaProductos.forEach(elemento => {
                productos.appendChild(nuevoProducto(elemento.name,elemento.price,elemento.imageURL))
            });    
        }catch(erro){
            console.log(erro)
        }
     }

    render()
    
    