
const prendas = [
    {
        id: 'f81f7976-e548-46ad-baf2-8228a7a97ba8',
        descripcion: 'Descripcion de la remera',
        titulo: 'Remera de Algodón Clásica',
        fechaDeCreacion: '2020-11-12',
        precio: 10.000,
        imagen: '/assets/images/remeras hombre/remera bordo hombre.jpg',
        categoria: 'remeras'
    },
    {
        id:'f81f7976-e548-46ad-baf2-8228a7a97ba8',
        descripcion: 'descripcion de la remera',
        titulo: 'remera chomba',
        fechaDeCreacion: '2017-03-03',
        precio: 12.000,
        imagen: '/assets/images/remeras hombre/polo marron.jpg',
        categoria: 'remeras'
    },
    {
        id:'9e12b3d1-31e4-4eea-98a8-2984c575956d',
        descripcion: 'buzo de hombre sin capucha, con grafiti',
        titulo: 'buzo hombre',
        fechaDeCreacion: '2020-11-10',
        precio: 499.99,
        imagen: '/assets/images/buzos hombre/buzo blanco con grafitis hombre.jpg',
        categoria: 'buzos'
    },
    {
        id:'aaaa5967-2b19-4b83-b9bb-046095786f70',
        descripcion: 'buzo hombre con capucha, color naranja con estampado',
        titulo: 'buzo hombre',
        fechaDeCreacion: '2016-11-10',
        precio: 59.99,
        imagen: '/assets/images/buzos hombre/buzo naranja hombre.jpg',
        categoria: 'buzos'
    }
    
];
const tableBodyHTML = document.querySelector("#table-product-body")
 
pintarProductos(prendas)

const inputFiltrarHTML = document.getElementById("filtrarProducto")

const formularioProductoHTMl = document.getElementById("product-form")

//LISTENER EVENTO FORMULARIO
formularioProductoHTMl.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const el = formularioProductoHTMl.elements;

    const nuevoProducto = {
        id: crypto.randomUUID(),
        titulo: el.tituloProducto.value,
        descripcion: el.descripcionProducto.value,
        precio: el.precioProducto.valueAsNumber,
        imagen: el.imagenProducto.value,
        categoria: el.categoriaProducto.value,
        fechaDeCreacion: obtenerFecha()
    };

    prendas.push(nuevoProducto);

    // Llama a pintarProductos con el arreglo 'prendas'
    pintarProductos(prendas);

    formularioProductoHTMl.reset();
    el.tituloProducto.focus();
});



function pintarProductos(arrayAPintar) {
    tableBodyHTML.innerHTML = "";

    arrayAPintar.forEach(function (prenda) {
        tableBodyHTML.innerHTML +=
            `<tr>
                <td class="table-image">
                <img src="${prenda.imagen}" alt="">
                </td>
                <td class="table-title">${prenda.titulo}</td>
                <td class="table-description">${prenda.descripcion}</td>
                <td class="table-price">${prenda.precio}</td>
                <td class="table-category">${prenda.categoria}</td>
                <td>
                    <div class="d-flex gap-2">
                        <button class="btn btn-danger" onclick="borrarProducto('${prenda.id}')">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                        <button class="btn btn-success btn-sm" onclick="editarProducto('${prenda.id}')">
                            <i class="fa-regular fa-pen-to-square"></i>
                        </button>
                    </div>                   
                </td>
            </tr>`;
    });
}





//!filtrar productos

inputFiltrarHTML.addEventListener('keyup',(evt)=>{

    const busqueda = evt.target.value.toLowerCase()
    
    const resultado = prendas.filter((producto) =>{
        const titulo = producto.titulo

        if(titulo.includes(busqueda)){
            return true
        }
        return false
    })
    
    pintarProductos(resultado)
  
})

 function borrarProductos(indiceRecibido){
  prendas.splice(indiceRecibido,1)
  pintarProductos(prendas)
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
        

// !editar productos


const borrarProducto = (idABuscar) =>{
    const indiceEncontrado = prendas.findIndex
    ((producoFindIndex) =>{
        if(producoFindIndex.id === idABuscar){
            return true
        }
        return false
    })
    prendas.splice(indiceEncontrado,1)
    pintarProductos(prendas)
    
}

const editarProducto = function (idRecibido){
    console.log(`editar elemento ${idRecibido}`)

        const productoEditar = prendas.filter(prod =>{
            if(idRecibido === prod.id){
                return true
            }
            return false
        })

console.log(productoEditar)
}


        
        
        
  
        
        
        



