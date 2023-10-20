/* DEFINO PROPIEDADES DE MI OBJETO
    -titulo
    -descripcion
    -imagen
    -precio
    -fechaCreacion
    -categoria
    -id (automatico) 
*/

const formularioProductoHTMl = document.getElementById("product-form")

formularioProductoHTMl.addEventListener('submit', () => {

    alert('eventoo submit')
})

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
 
    prendas.forEach(function(prenda){
        tableBodyHTML.innerHTML += 
            `<tr>
                <td class="table-image">
                <img src="${prenda.imagen}" alt="${prenda.titulo}">
                </td>
                <td class="table-title">${prenda.titulo}</td>
                <td class="table-description">${prenda.descripcion}</td>
                <td class="table-price">${prenda.precio}</td>
                <td class="table-category">${prenda.categoria}</td>
            </tr>`
    })
 console.log(prendas)












