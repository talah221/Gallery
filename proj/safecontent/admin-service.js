'use strict'
var gUsers = getAllUsers()

function getAllUserNames() {
    console.log(gUsers);
    var names = []

    names = gUsers.map(function (user) {
        return user.username
    })
    // for (var i = 0; i < gUsers.length; i++) {
    //     names.push(gUsers[i].username)
    // }
    return names;
}

