'use strict'

var gMyProjects = [
    {
        id: 'MineSweeper',
        title: 'Mine Sweeper',
        desc: 'the great old childhoold game MineSweeper built with Vanilla JS.',
        longdesc: 'Minesweeper is a single-player puzzle video game. The objective of the game is to clear a rectangular board containing hidden "mines" or bombs without detonating any of them, with help from clues about the number of neighboring mines in each field. The game originates from the 1960s, and has been written for many computing platforms in use today. It has many variations and offshoots.',
        url: 'proj/minesweeper',
        lables: ['first-sprint', 'Marix', 'Javascript', 'CSS'],
        img: 'img/portfolio/minesweeper.jpg'
    },

    {
        id: 'My Books',
        title: 'My Books',
        desc: 'a platform to manage your invetory, in this case - books.',
        longdesc: 'a CRUDL jQuery platform where you can add, remove, rate, update price, add description and more to your Inventory. this platform is for books but its changeable.',
        url: 'proj/mybooks',
        lables: ['CRUDL', 'jQuery', 'Javascript', 'CSS', 'Bootstrap'],
        img: 'img/portfolio/book.jpg',
    },
    {
        id: 'guessMe',
        title: 'Guess-me Game',
        desc: 'Nice game that will guess which person you thinking \'bout',
        longdesc: 'a Game that learns from the user - you can think about any person you want and the computer will guess if he knows it. if he is, he will tell you, and if he\'s not, he will ask you a question to understand and to learn for further games. eventually, the computer will win.',
        url: 'proj/guessme',
        lables: ['CRUDL', 'jQuery', 'Javascript', 'CSS', 'Bootstrap'],
        img: 'img/portfolio/guessme.png',
    },
    {
        id: 'Safe-content',
        title: 'SafeContent',
        desc: 'a Website where you can save your safe content.',
        longdesc: 'a Website where you can save your safe content, such as passwords, information,codes.... only users with correct ID+Passowrd can login! ',
        url: 'proj/safecontent',
        lables: 'CSS, Javascript, and more...',
        img: 'img/portfolio/safecontent.jpg'
    },

]

function getMyProjects() {
    return gMyProjects;
}

function findById(id) {
    var filtered = gMyProjects.filter(function (proj) {
        return (proj.id === id)
    })
    return filtered[0];


}

function sendEmail(from, title, message) {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=talni250@gmail.com
    &su=${title}
    &body=This message sent from: ${from},
    text: ${message}`)
}