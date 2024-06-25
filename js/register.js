const registerForm = document.querySelector(".register-form")

registerForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const newUserName = event.target.elements.registerFullname.value;
    const newUserEmail = event.target.elements.registerEmail.value;
    const newUserPassword = event.target.elements.registerPassword.value;
    const newUserBirthdate = event.target.elements.registerBirthdate.value;
    
    function pushToUsers() {
        const newUser = {
            fullname: newUserName,
            email: newUserEmail,
            password: newUserPassword,
            birthdate: newUserBirthdate,
            rol: 'cliente'
        }
        let users = JSON.parse(localStorage.getItem("users")) || [];
        
        users.push(newUser);
        
        localStorage.setItem("users", JSON.stringify(users))
        
        
    }
    
    pushToUsers()
    
    Swal.fire({icon: 'success',title: 'Registro Exitoso',text: '¡Te has registrado correctamente!',confirmButtonText: 'Aceptar'});

    setInterval(() => {
        window.location.href = '/pages/login/login.html'
    }, 3000)


})