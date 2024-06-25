  // ?seccion usuarios guardados

const loginUsers = [
  {
      "fullName": "Charles Leclerc",
      "email": "admin1@gmail.com",
      "password": "admin1",
      "birthDate": "1997-10-16",
      "rol": "Admin"
  },
  {
      "fullName": "Admin User 2",
      "email": "admin2@gmail.com",
      "password": "admin1234",
      "birthDate": "1980-05-12", 
      "rol": "Admin"
  },
  {
      "fullName": "Cliente 1",
      "email": "cliente1@gmail.com",
      "password": "1234",
      "birthDate": "1990-01-01", 
  },
  {
      "fullName": "Cliente 2",
      "email": "cliente2@gmail.com",
      "password": "1234",
      "birthDate": "1992-02-02", 
      "rol": "Cliente"
  },
  {
      "fullName": "Cliente 3",
      "email": "cliente3@gmail.com",
      "password": "1234",
      "birthDate": "1994-03-03", 
      "rol": "Cliente"
  }
];

if (!localStorage.getItem("users") ){
  localStorage.setItem("users",JSON.stringify(loginUsers))
}






//  localStorage.setItem("usuariosGuardados", JSON.stringify(users))

//  const temp = JSON.parse(localStorage.getItem("usuariosGuardados"))

/* <table class="table-cart">

<thead class="table-cart-head">
  <tr>
    <th>Imagen</th>
    <th>Titulo</th>
    <th>Descripcion Producto</th>
    <th>precio</th>
    <th>acción</th>
  </tr>
</thead>

<tbody class="table-cart-body d-flex gap-1" id="car-list">
  <tr>
    <td class="cart-image-container"><img class="cart-image-product" src="/assets/images/Aalta Pinta.jpg" alt=""></td>
    <td class="cart-title">remrera</td>
    <!-- <td scope="col" class="cart-description">Lorem ipsum dolor sit amet.</td> -->
    <td class="cart-price">10000</td>
    <td>
      <div class="d-flex gap-2">
        <!-- <button class="btn btn-danger" onclick="borrarProducto()">
          <i class="fa-solid fa-trash-can"></i> -->
        </button>
      </div>
    </td>
</tbody> 

</table> */


let = prendasHome = [
  {
    titulo: 'Remera de Algodón Clásica',
    descripcion: 'Remera de algodón manga corta. Todos los talles adultos',
    categoria: 'remeras',
    fechaDeCreacion: 'Ingreso 14/08',
    precio: 10.000,
    imagen: '/assets/images/remeras hombre/remera bordo hombre.jpg',
    id: ''
},
  {
    titulo: 'Pack x3 Remera de Algodón Clásica',
    descripcion: 'Pack 3 Remeras de algodón manga corta. Todos los talles adultos',
    categoria: 'remeras',
    fechaDeCreacion: 'Ingreso 14/08',
    precio: 16.0000,
    imagen: '/assets/images/remeras hombre/x 3 hombres.jpg',
    id: ''
},
]
//  localStorage.setItem("nombre","Esmeralda Perez")
//  localStorage.setItem("currentUser","Pedro Rojas")

//  const nombreGuardado = localStorage.getItem('nombre222')

//  swal.fire('bienvenido', `Que bueno verte de nuevo ${nombreGuardado}`)