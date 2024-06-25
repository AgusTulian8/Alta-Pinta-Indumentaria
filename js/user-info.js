const currentUser = JSON.parse (localStorage.getItem("currentUser"));

const headerUserName = document.querySelector(".user-name");

const userAction = document.querySelector(".user-action");

// headerUserName.innerText = currentUser ? currentUser.fullname : "";


if(currentUser){
    const logoutButton = document.createElement('button');
    logoutButton.className = 'btn';
    logoutButton.id = 'logoutBtn';
    logoutButton.innerText = 'Cerrar sesión';

    logoutButton.onclick = () =>{
        logout()
    }

    userAction.appendChild(logoutButton);

    function logout(){
        localStorage.removeItem("currentUser");
        window.location.href = "/pages/login/login.html";      
    }
}else if
    (!currentUser ){
        const loginButton = document.createElement('button');
        loginButton.className = 'btn';
        loginButton.id = 'loginBtn';
        loginButton.innerText = 'Iniciar sesión';
        loginButton.onclick = () =>{window.location.href = "/pages/login/login.html";}
       
    userAction.appendChild(loginButton);

} 
