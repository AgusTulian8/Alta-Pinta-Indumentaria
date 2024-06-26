const prendas = JSON.parse(localStorage.getItem("productos")) ||[]

prendas.forEach(prenda=> document.write (prenda.titulo +"\n"))


// const categoryShirt = document.querySelector("cate") 

// function printProduct (prendas){

// }













































// crear carrito de compras:
//poner ids a las etiquetas html (o usar las clases del mismo)
// importar los ids en js con get element by id o query selector
//escuchar el boton de agregar al carrito
//pintar el producto en la tabla usando el evento del boton

// const cartContent = [
//     {   title : 'Remera de Algodón Clásica',
//         description : 'Remera de algodón manga corta. Todos los talles adultos',
//         price : 10.000,
//         image : '/assets/images/remeras hombre/remera bordo hombre.jpg',
//         // id : 'f81f7976-e548-46ad-baf2-8228a7a97ba8',
//         categoty: 'remeras'
        
     
//     },
//     {
//         title : 'Pack x3 Remera de Algodón Clásica',
//         description : 'Pack 3 Remeras de algodón manga corta. Todos los talles adultos',
//         price : 16.000,
//         image : '/assets/images/remeras hombre/x 3 hombre.jpg',
//         // id : 'f81f7976-e548-46ad-baf2-8228a7a97ba8',
//         categoty: 'remeras'
//     }
// ]


//! añadir al carrito: pendiente

// const addCartButtons = document.querySelectorAll(".add-cart");
// const carList = document.querySelector(".cart-list");

// addCartButtons.forEach(function (addButton) {
//        addButton.addEventListener("click",(evtCart)=>{
//           carList.innerHTML = `<div class="cart-section">

//             <div class="cart-list">
//               <table class="table">
//                 <thead>
//                   <tr>
//                     <th scope="col">#</th>
//                     <th scope="col">Producto</th>
//                     <th scope="col">Cantidad</th>
//                     <th scope="col">Precio Unitario</th>
//                     <th scope="col">Subtotal</th>
//                     <th scope="col">Acciones</th>
//                   </tr>
//                 </thead>
//                 <tbody class="table-group-divider">
//                   <tr>
//                     <th scope="row">1</th>
//                     <td>Producto A</td>
//                     <td>
//                       <input type="number" class="form-control" value="1" min="1">
//                     </td>
//                     <td>$10.00</td>
//                     <td>$10.00</td>
//                     <td>
//                       <button class="btn btn-danger btn-sm">Eliminar</button>
//                     </td>
//                   </tr>
//                   <tr>
//                     <th scope="row">2</th>
//                     <td>Producto B</td>
//                     <td>
//                       <input type="number" class="form-control" value="2" min="1">
//                     </td>
//                     <td>$15.00</td>
//                     <td>$30.00</td>
//                     <td>
//                       <button class="btn btn-danger btn-sm">Eliminar</button>
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
          
//           </div>
//           `
            
//        })

// })
    

// const cartIcon = document.querySelector(".cart-icon"); // icono/boton de carrito en html importado.
// const cartSection = document.querySelector(".cart-section");

// cartIcon.addEventListener("click", ()=>{
//     if (cartSection.style.visibility === "visible") {
//         // Si está visible, ocultarlo
//         cartSection.style.visibility = "hidden";
//     } else {
//         // Si está oculto, mostrarlo
//         cartSection.style.visibility = "visible";
//     }
// })

