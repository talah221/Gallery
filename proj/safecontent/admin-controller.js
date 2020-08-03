
'use strict'

function onInit() {
    getAllUserNames()
    onRenderUsers();
}
function onRenderUsers(users) {
    var str = '';
    var allUsers = getAllUsers();
    allUsers.forEach(function (user) {
        str += `<tr>User Name: ${user.username}<td>
        Password: ${user.password}
        </td>
        <td>Admin? ${user.isAdmin} </td>
        </tr>`
        return str
    })

    console.log(str);
    var elContainter = document.querySelector('.container');
    elContainter.innerHTML = str;
}