var gQuestsTree ;
const GAME_KEY = 'questions'
var gCurrQuest;
var gPrevQuest = null;

function createQuestsTree() {
    gQuestsTree=loadFromStorage(GAME_KEY)
    if(!gQuestsTree){
        gQuestsTree = createQuest('Male?');
        gQuestsTree.yes = createQuest('Gandhi');
        gQuestsTree.no = createQuest('Rita');
        saveQuests();
    }
    
    // gQuestsTree.yes.yes = createQuest('Rita');
    // gQuestsTree.no.yes = createQuest('Rita');


    gCurrQuest = gQuestsTree;

    gPrevQuest = null;

}

function createQuest(txt) {
    return {
        txt: txt,
        yes: null,
        no: null
    }
}

function isChildless(node) {
    return (node.yes === null && node.no === null)
}

function moveToNextQuest(res) {
    gPrevQuest=gCurrQuest
    gCurrQuest=gPrevQuest[res];
}

function addGuess(newQuestTxt, newGuessTxt, lastRes) {
    var newQuest=createQuest(newQuestTxt);
    newQuest.yes=createQuest(newGuessTxt);
    newQuest.no=gCurrQuest
    gPrevQuest[lastRes]=newQuest;
    saveQuests();

}

function getCurrQuest(){
    return gCurrQuest
}

function restartGame(){
    gPrevQuest=null;
    gCurrQuest=gQuestsTree;
}


function saveQuests(){
saveToStorage(GAME_KEY,gQuestsTree);
}


