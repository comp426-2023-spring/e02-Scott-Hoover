// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

n beginall() {
    document.getElementById("shots").style.display = "none"
    document.getElementById("results").style.display = "none"
    document.getElementById("rules").style.display = "none"
}


function changebut() {
    let oppCheck = getElementById('opponent');
    let rpslsCheck = getElementById("rpsls");
    if (oppCheck.checked == false) {
        document.getElementById("shots").style.display = "none"
    } else {
        document.getElementById("shots").style.display = "block"
        if (rpslsCheck.checked == false) {
            document.getElementById("rpslsShots").style.display = "none"
        } else {
            document.getElementById("rpslsShots").style.display = "inline"
        }
    } 
}

function resetgame() {
    document.getElementById("input").reset()
    document.getElementById("shots").style.display = "none"
    document.getElementById("results").style.display = "none"
    document.getElementById("rules").style.display = "none"
    document.getElementById("rock").checked = false;
    document.getElementById("paper").checked = false;
    document.getElementById("scissors").checked = false;
    document.getElementById("lizard").checked = false;
    document.getElementById("spock").checked = false;
    document.getElementById("rps").checked = false;
    document.getElementById("rpsls").checked = false;
    document.getElementById("opponent").check = false;
}

function help() {
    if (document.getElementById("rules").style.display == "none") {
        document.getElementById("rules").style.display = "block";
    } else {
        document.getElementById("rules").style.display = "none";
    }
}

async function goplay () {
    let gameType = "rps"
    for (x of document.getElementsByName("gameType")) {
        if (x.checked == true) { gameType = x.id }
    }
    
    let shot = "rock"
    for (x of document.getElementsByName("shot")) {
        if (x.checked == true) { shot = x.id }
    }

    let baseurl = window.location.href.concat(app/)
    let url = baseurl.concat(gameType.concat('/play/'))
    let oppCheck = document.getElementById('opponent').checked
    if (oppCheck) { url = url.concat(shot) }
    let response = await fetch(url)
    let result = await response.json()

    result = 'You chose ' + result.player
    if (oppCheck) {
        resultString = resultString + ' and your opponent chose ' + result.opponent + '. Result: ' + result.result;
    }
}
