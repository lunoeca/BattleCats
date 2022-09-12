


//Create a message with the result
function creatmessage(battleresult){
    let messagesection = document.getElementById("messages")
    let paragraph = document.createElement('p')
    paragraph.innerHTML = 'You attack with ' + attackplayer + '. Your enemy attack with ' + attackenemy + '. You ' + battleresult
    messagesection.appendChild(paragraph)
}