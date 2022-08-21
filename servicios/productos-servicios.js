const listaProductos = () => fetch( "http://localhost:3000/producto").then(respuesta => respuesta.json());

const creaProducto = (name, imageURL, price, description) =>{
   return fetch ( `http://localhost:3000/producto` ,{
        method: 'POST',
        headers: {
                'Content-Type': 'application/json'
        },
        body: JSON.stringify({
                name,
                imageURL,
                price,
                description
                         })
        }) 
        .then(respuesta => {
                if(respuesta.ok){
                return respuesta.body 
                }
                throw new Error('No fue posible crear producto')
        })    
}



export const productosServices = {
        listaProductos,
        creaProducto    
}       