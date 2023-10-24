/* DEFINO PROPIEDADES DE MI OBJETO
    -titulo
    -descripcion
    -imagen
    -precio
    -fechaCreacion
    -categoria
    -id (automatico) 
*/
const prendas = [
    {
        descripcion: 'Descripcion de la remera',
        titulo: 'Remera de Algodón Clásica',
        fechaDeCreacion: '2020-11-12',
        precio: 10.000,
        imagen: '/assets/images/remeras hombre/remera bordo hombre.jpg',
        categoria: 'remeras'
    },
    {
        descripcion: 'descripcion de la remera',
        titulo: 'remera chomba',
        fechaDeCreacion: '2017-03-03',
        precio: 12.000,
        imagen: '/assets/images/remeras hombre/polo marron.jpg',
        categoria: 'remeras'
    },
    {
        descripcion: 'buzo de hombre sin capucha, con grafiti',
        titulo: 'buzo hombre',
        fechaDeCreacion: '2020-11-10',
        precio: 499.99,
        imagen: '/assets/images/buzos hombre/buzo blanco con grafitis hombre.jpg',
        categoria: 'buzos'
    },
    {
        descripcion: 'buzo hombre con capucha, color naranja con estampado',
        titulo: 'buzo hombre',
        fechaDeCreacion: '2016-11-10',
        precio: 59.99,
        imagen: '/assets/images/buzos hombre/buzo naranja hombre.jpg',
        categoria: 'buzos'
    }
    
];
const tableBodyHTML = document.querySelector("#table-product-body")
 
pintarProductos()

const inpputFiltrarHTML = document.getElementById("filtrarProducto")

const formularioProductoHTMl = document.getElementById("product-form")

//LISTENER EVENTO FORMULARIO
formularioProductoHTMl.addEventListener('submit', (evt) => {

    evt.preventDefault()

    const el = formularioProductoHTMl.elements

    const nuevoProducto = {
        id: crypto.randomUUID(),
        titulo: el.tituloProducto.value,
        descripcion: el.descripcionProducto.value,
        precio: el.precioProducto.valueAsNumber,
        imagen: el.imagenProducto.value,
        categoria: el.categoriaProducto.value,
        fechaDeCreacion: obtenerFecha()

    }

    prendas.push(nuevoProducto)   
    pintarProductos()
    formularioProductoHTMl.reset()
    el.titulo.name.focus()
         
})



function pintarProductos() {
    tableBodyHTML.innerHTML= ""
    
    prendas.forEach(function (prenda,index) {
        tableBodyHTML.innerHTML +=
        `<tr>
            <td class="table-image">
            <img src="${prenda.imagen}"
            alt="">
            </td>
            <td class="table-title">${prenda.titulo}</td>
            <td class="table-description">${prenda.descripcion}</td>
            <td class="table-price">${prenda.precio}</td>
            <td class="table-category">${prenda.categoria}</td>
            <td>
                <button class="btn btn-danger" onclick="borrarProductos(${index})">
                    <i class="fa-solid fa-trash-can" style=""></i>               
                </button>
            </td>
        </tr>`
    })
}


//!filtrar productos

inpputFiltrarHTML.addEventListener("keyup",(evt)=>{

    console.log(evt.target.value)
} )

 function borrarProductos(indiceRecibido){
  prendas.splice(indiceRecibido,1)
  pintarProductos()
 }


function obtenerFecha(){
    
    const fecha = new Date()
    let mes = fecha.getMonth() + 1
        if(mes <10){
            mes ='0' + mes
        }

    const year = fecha.getFullYear()
    let dia = fecha.getDate()
        if (dia <10){
            dia = '0' + dia
        }
    const fechaFormateada = `${year}-${mes}-${dia}`

        return fechaFormateada
}
        

        
        
        
        
        
        
        
        
        
        



