'use strict'

var gUsers = [
    { username: 'tal', password: '1234', isAdmin: true },
    { username: 'admin', password: 'admin', isAdmin: false },
    { username: 'someone', password: '2468', isAdmin: false },
]
var gLoggedUser = getItemFromStorage()

function init() {
    if (gLoggedUser) {
        onLogged()
        checkIfAdmin(gLoggedUser)
        return;
    }
}

function logIn(username, pass) {
    if (gLoggedUser) {
        onLogged()
        return;
    }
    for (var i = 0; i < gUsers.length; i++) {
        if (username === gUsers[i].username && pass === gUsers[i].password) {
            console.log('login succesful');
            gLoggedUser = gUsers[i]
            saveInfo()
            onLogged()
            checkIfAdmin(gLoggedUser)
        }
    }
}

function getLoggedUsername() {
    var upperCaseName = gLoggedUser.username[0].toUpperCase() + gLoggedUser.username.substring(1)
    return upperCaseName;
}

function saveInfo() {
    saveToStorage('userdata', gLoggedUser);
    ;
}


function getItemFromStorage() {
    var toLoad = JSON.parse(localStorage.getItem('userdata'))
    return toLoad;
}

function logout() {
    console.log('logOut succesful');
    localStorage.clear();
    onLogout()
}

function checkIfAdmin(user){
    if (user.isAdmin){
        document.querySelector('.adminarea').style.display='block'
    }
}

function getAllUsers(){
    return gUsers;
}