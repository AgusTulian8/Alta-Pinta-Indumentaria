localStorage.setItem("nombre","Esmeralda Perez")
localStorage.setItem("currentUser","Pedro Rojas")

const nombreGuardado = localStorage.getItem('nombre222')

swal.fire('bienvenido', `Que bueno verte de nuevo ${nombreGuardado}`)


const users = [
    {
        fullname: 'Charles Leclerc',
        age: 26,
        email: 'charlesleclerc16@ferrari.com',
        id: '8',
    },
    {
        fullname: 'Carlos Sainz',
        age: 26,
        email: 'carlossainz55@ferrari.com',
        id: '5', 
    }
]

localStorage.setItem("usuariosGuardados", JSON.stringify(users))

const temp = JSON.parse(localStorage.getItem("usuariosGuardados"))

