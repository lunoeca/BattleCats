

let attackplayer
let attackenemy
let battleresult
let fighterlifes = 3
let enemylifes = 3
let powers = []

//Define boton function and section view.
function startGame(){
    let sectionattackselection = document.getElementById("CHOOSE_ATTACK")
    sectionattackselection.style.display = 'none'
    let button_player = document.getElementById("button_FighterSelect")
    button_player.addEventListener('click', selectfighter)
    let button_fire = document.getElementById('button_fire')
    button_fire.addEventListener('click', attackfire)
    let button_water = document.getElementById('button_water')
    button_water.addEventListener('click', attackwater)
    let button_earth = document.getElementById('button_earth')
    button_earth.addEventListener('click', attackearth)
    let button_restart =document.getElementById('button_restart')
    button_restart.addEventListener('click', restartgame)
    button_restart.style.display = 'none'
    }

//Select fighter with button
function selectfighter(){
    let sectionattackselection = document.getElementById("CHOOSE_ATTACK")
    let sectionfighterselection = document.getElementById("CHOOSE_FIGHTER")
    let imputMint = document.getElementById('Mint Cat')
    let imputCinnamon = document.getElementById('Cinnamon Cat')
    let imputChoco = document.getElementById('Choco Cat')
    let imputLemon = document.getElementById('Lemon Cat')
    let imputCyan = document.getElementById('Cyan Cat')
    let imputLava = document.getElementById('Lava Cat')
    let spanfightername = document.getElementById('fightername')
    let button_fire = document.getElementById('button_fire')
    let button_water = document.getElementById('button_water')
    let button_earth = document.getElementById('button_earth')
    
    if(imputMint.checked) {
        spanfightername.innerHTML = 'Mint Cat'
        button_fire.style.display = 'none'
    } else if(imputCinnamon.checked) {
        spanfightername.innerHTML = 'Cinnamon Cat'
        button_water.style.display = 'none'
    } else if(imputChoco.checked) {
        spanfightername.innerHTML = 'Choco Cat'
        button_water.style.display = 'none'
    } else if(imputLemon.checked) {
        spanfightername.innerHTML = 'Lemon Cat'
        button_fire.style.display = 'none'
    } else if(imputCyan.checked) {
        spanfightername.innerHTML = 'Cyan Cat'
        button_earth.style.display = 'none'
    } else if(imputLava.checked) {
        spanfightername.innerHTML = 'Lava Cat'
        button_earth.style.display = 'none'
    } else {
        alert('Please select your fighter')
        spanfightername.innerHTML = 'Nothing'

    }
    if(spanfightername.innerHTML == 'Nothing'){  
    } else {
        sectionattackselection.style.display = 'flex'
        sectionfighterselection.style.display = 'none'
        selectenemy()
    }

}

//Assign aleatory enemy 
function selectenemy(){
    let spanenemyname = document.getElementById('enemyname')
    let enemy = aleatory(1,6)
    if(enemy ==1){
        spanenemyname.innerHTML = 'Mint Cat'
    } else if(enemy ==2){
        spanenemyname.innerHTML = 'Cinnamon Cat'
    } else if(enemy ==3){
        spanenemyname.innerHTML = 'Choco Cat'
    } else if(enemy ==4){
        spanenemyname.innerHTML = 'Lemon Cat'
    } else if(enemy ==5){
        spanenemyname.innerHTML = 'Cyan Cat'
    } else{
        spanenemyname.innerHTML = 'Lava Cat'
    } 
}

//Select attack type with button
function attackfire(){
    attackplayer = 'FIRE 🔥'
    attackenemytype()
}
function attackwater(){
    attackplayer = 'WATER 💧'
    attackenemytype()
}
function attackearth(){
    attackplayer = 'EARTH 🌿'
    attackenemytype()
}

//Assign aleatory enemy attack
function attackenemytype(){
    if(spanenemyname = 'Mint Cat'){
        enemynumber = aleatory(2,3)
    } else if(spanenemyname = 'Cinnamon Cat'){
        enemynumber = aleatory(1,3)    
    } else if(spanenemyname = 'Choco Cat'){
        enemynumber = aleatory(1,3)
    } else if(spanenemyname = 'Lemon Cat'){
        enemynumber = aleatory(2,3) 
    } else if(spanenemyname = 'Cyan Cat'){
        enemynumber = aleatory(1,2)  
    } else if(spanenemyname = 'Lava Cat'){
        enemynumber = aleatory(1,2)  
    }
    if(enemynumber == 1){
        attackenemy = 'FIRE 🔥'
    } else if(enemynumber == 2){
        attackenemy = 'WATER 💧'
    } else if(enemynumber == 3){
        attackenemy = 'EARTH 🌿'
    }
    getresult()
}

//Calculate the result
function getresult(){
    let spanfighterlifes = document.getElementById('fighterlifes')
    let spanenemylifes = document.getElementById('enemylifes')
    spanfighterlifes.innerHTML = fighterlifes
    spanenemylifes.innerHTML = enemylifes
    if(attackplayer == attackenemy){
        battleresult = 'TIE'
        creatmessage('TIE')
    } else if((attackplayer == 'FIRE 🔥' && attackenemy == 'EARTH 🌿')||(attackplayer == 'WATER 💧' && attackenemy == 'FIRE 🔥')||(attackplayer == 'EARTH 🌿' && attackenemy == 'WATER 💧')){
        battleresult = 'WIN'
        creatmessage('WIN')
        enemylifes--
        spanenemylifes.innerHTML = enemylifes
    } else { 
        battleresult = 'LOSE'
        creatmessage('LOSE')
        fighterlifes--
        spanfighterlifes.innerHTML = fighterlifes
    }
    checklifes()
}
//Create a message with the result
function creatmessage(battleresult){
    let messagesection = document.getElementById("battleresult")
    let result_player = document.getElementById('result_player')
    let result_enemy = document.getElementById('result_enemy')
    
    let new_playerattack = document.createElement('p')
    let new_enemyattack = document.createElement('p')
    
    messagesection.innerHTML = battleresult
    new_playerattack.innerHTML = attackplayer
    new_enemyattack.innerHTML = attackenemy

    result_player.appendChild(new_playerattack)
    result_enemy.appendChild(new_enemyattack)

}

//Create the message of Final Result
function creatfinalmessage(finalresult){

    let messagesection = document.getElementById("battleresult")
    messagesection.innerHTML = finalresult 
   
    let button_fire = document.getElementById('button_fire')
    button_fire.disabled = true
    let button_water = document.getElementById('button_water')
    button_water.disabled = true
    let button_earth = document.getElementById('button_earth')
    button_earth.disabled = true
    let button_restart =document.getElementById('button_restart')
    button_restart.style.display = 'flex'
}
//Check status of lifes
function checklifes(){
    if(enemylifes == 0){
        creatfinalmessage('CONGRATS! YOU WIN!')
    }else if(fighterlifes == 0){
        creatfinalmessage('YOU LOSE! TRY AGAIN')
    }
}
//Funciones
function restartgame(){
    location.reload()
}
function aleatoryattack(){
    return Math.floor((Math.random() * 2))
}
function aleatory(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
window.addEventListener('load', startGame)

