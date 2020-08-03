'use strict';

// NOTE: This is a global used only in the controller
var gLastRes = null;

$(document).ready(init);

function init() {
    createQuestsTree();
}

function onStartGuessing() {
    
    // TODO: hide the game-start section

    // var elGameStart = document.querySelector('.game-start');
    // elGameStart.style.display='none'
    $('.game-start').hide();
    $('.modalBtn').hide()
    $('.winner').hide()
    // $('.correct-msg').hide();
    // $('.game-start').css('display','none');



    renderQuest();
    $('.quest').show();
}

function renderQuest() {
    console.log(gCurrQuest);
    $('.quest h2').text(gCurrQuest.txt)
}

function onUserResponse(res) {

    // If this node has no children
    if (isChildless(getCurrQuest())) {
        if (res === 'yes') {
            // alert('Yes, I knew it!');
            $('.winner').show()
            $('.modalBtn').show()

        } else {
            // $('.')
            alert('I dont know...teach me!')
            // TODO: hide and show new-quest section
            $('.new-quest').show()
            $('.quest').hide()
        }
    } else {
        // TODO: update the lastRes global var
        gLastRes = res;
        moveToNextQuest(res);
        renderQuest();
    }
}

function onAddGuess() {

    var newGuess = $('#newGuess').val()
    var newQuest = $('#newQuest').val()
    addGuess(newGuess, newQuest, gLastRes)
    //clean values
    $('#newGuess').val() = ''
    $('#newQuest').val() = ''

    onRestartGame();
}


function onRestartGame() {
    $('.new-quest').hide();
    $('.game-start').show();
    gLastRes = null;
    $('.quest').hide();
    restartGame()

}
