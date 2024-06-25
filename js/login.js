

const loginUsers = JSON.parse(localStorage.getItem("users"))

    // const email = document.querySelector('.email')
// const password = document.querySelector('.password')
const login = document.getElementById('login')

login.addEventListener('submit', (event) => {
    event.preventDefault()


    const email = event.target.elements.email.value

    const password = event.target.elements.password.value

    const userExist = loginUsers.find(usr => {
        if (usr.email === email) {
            return true
        }

    })

    if(!userExist){
        Swal.fire({ title: "Error", text: "Los datos son incorrectos", icon: "error" });
    
        return
    }
   

    if (userExist.email === email && userExist.password === password) {
        delete userExist.password 
        localStorage.setItem("currentUser", JSON.stringify(userExist));
        
        Swal.fire({ title: "Bienvenido!", text: `¡Bienvenido! ${userExist.fullname}.`, icon: "success" });
        setInterval(() => {
            window.location.href = '/index.html'
        }, 3000)
    }else{
         Swal.fire({ title: "Error", text: "Lo siento, los datos son incorrectos", icon: "error" });
    }

})

