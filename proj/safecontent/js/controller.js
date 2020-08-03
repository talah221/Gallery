'use strict'


function onLoginBtn() {
    var elEnteredUsername = document.querySelector('.username')
    var elEnteredPassword = document.querySelector('.password')
    var usernameInp = elEnteredUsername.value
    var passwordInp = elEnteredPassword.value
    logIn(usernameInp, passwordInp)
}

function onLogged() {
    document.querySelector('.safearea').style.display = 'block'
    document.querySelector('body').style.backgroundColor='gray'
    document.querySelector('.loginsection').style.display='none'

    var elLoginInfo=document.querySelector('.logininfo')
    elLoginInfo.style.display='block'
    elLoginInfo.innerHTML=`<p>Hello ${getLoggedUsername()}, </p>`
}

function onLogoutBtn(){
    gLoggedUser=null;
    logout()
}

function onLogout(){
    document.querySelector('.safearea').style.display = 'none'
    document.querySelector('body').style.backgroundColor='black'
    document.querySelector('.loginsection').style.display='block'
    document.querySelector('.logininfo').style.display='none'
    document.querySelector('.adminarea').style.display='none'

}
