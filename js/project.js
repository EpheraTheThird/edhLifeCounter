class Player{
    constructor(id, name){
        this.id=id;
        this.name=name;
        this.cDmg0=0;
        this.cDmg1=0;
        this.cDmg2=0;
        this.life=40;
        this.lose=false;
    }
 }
 $(".lifeInc").click(function(){
    var int=this.id.slice(6,7);
    int=parseInt(int);
    int=int-1;
    var player=players[int]
    if($("#"+player.id+" #"+this.id).hasClass("commanderDmg")){
        incCdmg(player,1);
        insertCdmg(player)
    }
    else{
        incLife(player,1);
    }
 })
 $(".lifeDic").click(function(){
    var int=this.id.slice(6,7);
    int=parseInt(int);
    int=int-1;
    var player=players[int]
    if($("#"+player.id+" #"+this.id).hasClass("commanderDmg")){
    }
    else{
        incLife(player,-1)
    }
    if(checkLifeEq0(player)){
        loseTheGame(player)
    }
 })
 $(".cDmg").click(function(){
    var id=this.id
    id=id.slice(6,7)
    id="commanderDmgP"+id
    $("#"+id).show()
 })
 $(".closeButton").click(function(){
    var id=this.id
    id=id.slice(10,11)
    id="commanderDmgP"+id
    $("#"+id).hide()
 })
 $("#turn").click(function (){
    var playerTurn
    for (turn++;turn<=10;turn++){
        if(turn===players.length){
            turn=0;
        }
        playerTurn=players[turn]
        if(playerTurn.lose===true){
            continue;
        }
        $("#playerTurn").html(playerTurn.name)
        break;
    }
 })
 $(".cDmgP1").click(function (){
    id=this.id.slice(6,8)
    if($("#player1").hasClass("P2")){
        if(id==="P2"){
            $("#player1").toggleClass("P2");
        }
    }
    else if($("#player1").hasClass("P3")){
        if(id==="P3"){
            $("#player1").toggleClass("P3");
        }
    }
    else if($("#player1").hasClass("P4")){
        if(id==="P4"){
            $("#player1").toggleClass("P4");
        }
    }
    else {
    $("#player1").toggleClass(id);
    }
 })
 $(".cDmgP2").click(function (){
    id=this.id.slice(6,8)
    if($("#player2").hasClass("P2")){
        if(id==="P2"){
            $("#player2").toggleClass("P2");
        }
    }
    else if($("#player2").hasClass("P3")){
        if(id==="P3"){
            $("#player2").toggleClass("P3");
        }
    }
    else if($("#player2").hasClass("P4")){
        if(id==="P4"){
            $("#player2").toggleClass("P4");
        }
    }
    else {
    $("#player2").toggleClass(id);
    }
 })
 $(".cDmgP3").click(function (){
    id=this.id.slice(6,8)
    if($("#player3").hasClass("P2")){
        if(id==="P2"){
            $("#player3").toggleClass("P2");
        }
    }
    else if($("#player3").hasClass("P3")){
        if(id==="P3"){
            $("#player3").toggleClass("P3");
        }
    }
    else if($("#player3").hasClass("P4")){
        if(id==="P4"){
            $("#player3").toggleClass("P4");
        }
    }
    else {
    $("#player3").toggleClass(id);
    }
 })
 $(".cDmgP4").click(function (){
    id=this.id.slice(6,8)
    if($("#player4").hasClass("P2")){
        if(id==="P2"){
            $("#player4").toggleClass("P2");
        }
    }
    else if($("#player4").hasClass("P3")){
        if(id==="P3"){
            $("#player4").toggleClass("P3");
        }
    }
    else if($("#player4").hasClass("P4")){
        if(id==="P4"){
            $("#player4").toggleClass("P4");
        }
    }
    else {
    $("#player4").toggleClass(id);
    }
 })
 $("#cDmgP1Inc").click(function(){
    if($("#player1").hasClass("P1")){
        incCdmg(players[0],1)
    }
    else if($("#player1").hasClass("P2")){
        incCdmg(players[0],2)
    }
    else if($("#player1").hasClass("P3")){
        incCdmg(players[0],3)
    }
    insertCdmg(players[0])
    if(checkCDmgEq21(players[0])){
        loseTheGame(players[0])
    }
 })
 $("#cDmgP2Inc").click(function(){
    if($("#player2").hasClass("P1")){
        incCdmg(players[1],1)
    }
    else if($("#player2").hasClass("P2")){
        incCdmg(players[1],2)
    }
    else if($("#player2").hasClass("P3")){
        incCdmg(players[1],3)
    }
    insertCdmg(players[1])
    if(checkCDmgEq21(players[1])){
        loseTheGame(players[1])
    }
 })
 $("#cDmgP3Inc").click(function(){
    if($("#player3").hasClass("P1")){
        incCdmg(players[2],1)
    }
    else if($("#player3").hasClass("P2")){
        incCdmg(players[2],2)
    }
    else if($("#player3").hasClass("P3")){
        incCdmg(players[2],3)
    }
    insertCdmg(players[2])
    if(checkCDmgEq21(players[2])){
        loseTheGame(players[2])
    }
 })
 $("#cDmgP4Inc").click(function(){
    if($("#player4").hasClass("P1")){
        incCdmg(players[3],1)
    }
    else if($("#player4").hasClass("P2")){
        incCdmg(players[3],2)
    }
    else if($("#player4").hasClass("P3")){
        incCdmg(players[3],3)
    }
    insertCdmg(players[3])
    if(checkCDmgEq21(players[3])){
        loseTheGame(players[3])
    }
 })
 $(".btnWinner").click(function(){
    var int =this.id.slice(1,2)
    Winner(players[int-1].name)
 })
 $(".btnLose").click(function(){
    var int =this.id.slice(1,2)
    loseTheGame(players[int-1])
 })
 $("#playerMenuBtn").click(function(){
    $("#PlayerMenu").show()
 })
 $("#closePlayerMenu").click(function(){
    $("#PlayerMenu").hide()
 })
 $(".btnName").click(function(){
    var name = prompt("Please enter your name", "XXXXX");
    if(name!==null){
        var id=this.id.slice(4,15)
        $("#"+id+" #name").html(name)
        $("#"+id+"Name").html(name)
        int=id.slice(6,7)
        players[int-1].name=name
        int =id.slice(6,7)
        int=parseInt(int)
        changeNamePlayer(int,name)
        changeNamePlayerStart(int,name)
    }
 })
 $("#Refresh").click(function(){
    location.reload();
 })
 $(".playerNumber").click(function(){
     var id =this.id;
     createPlayer(id)
 })
 $("#closePlayerMenuName").click(function (){
     $("#startMenuName").hide()
 })
 $(".manyPlayers").click(function(){
     switch(this.id){
         case "2":
            $("#player3").hide()
            $("#player4").hide()
            removePlayer4()
            removePlayer3()
            break
        case "3":
            $("#player4").hide()
            removePlayer4()
            break;
     }
     $(".popupWindowShown").hide()
     $("#startMenuName").show()
 })
 $("#closePlayerMenuName").click(function(){
     var name=$("#player1 #name").html()
     $("#playerTurn").html(name)
 })
 function removePlayer3(){
     $(".player3").hide()
     players.pop()
 }
 function removePlayer4(){
     $(".player4").hide()
     players.pop()
 }
 function changeNamePlayerStart(int,name){
     switch(int){
         case 1:
            changeNamePlayerStart1(name);
            break;
        case 2:
            changeNamePlayerStart2(name);
            break;
        case 3:
            changeNamePlayerStart3(name);
            break;
        case 4:
            changeNamePlayerStart4(name);
            break;
     }
 }
 function changeNamePlayerStart1(name){
    $("#player1NameStart").html(name);
 }
 function changeNamePlayerStart2(name){
    $("#player2NameStart").html(name);
 }
 function changeNamePlayerStart3(name){
    $("#player3NameStart").html(name);
 }
 function changeNamePlayerStart4(name){
    $("#player4NameStart").html(name);
 }
 function createPlayer(id){
    switch(id){
        case 1:
            gameWith1Player();
            break;
        case 2:
            gameWith2Player();
            break;
        case 3:
            gameWith3Player();
            break;
        case 4:
            gameWith4Player();
            break;
    }
 }
 function gameWith1Player(){
     players[1].lose=true;
     loseTheGame(players[1])
     players[2].lose=true;
     loseTheGame(players[2])
     players[3].lose=true;
     loseTheGame(players[3])
     
 }
 function changeNamePlayer(int,name){
    switch(int){
        case 1:
            changeNamePlayer1(name)
            break;
        case 2:
            changeNamePlayer2(name)
            break;
        case 3:
            changeNamePlayer3(name)
            break;
        case 4:
            changeNamePlayer4(name)
            break;
    }
 }
 function changeNamePlayer4(name){
    $("#cDmgP1P3").html(name)
    $("#cDmgP2P2").html(name)
    $("#cDmgP3P3").html(name)
 }
 function changeNamePlayer3(name){
    $("#cDmgP1P2").html(name)
    $("#cDmgP3P2").html(name)
    $("#cDmgP4P3").html(name)
 }
 function changeNamePlayer2(name){
    $("#cDmgP1P1").html(name)
    $("#cDmgP3P2").html(name)
    $("#cDmgP4P2").html(name)
 }
 function changeNamePlayer1(name){
    $("#cDmgP2P3").html(name)
    $("#cDmgP3P1").html(name)
    $("#cDmgP4P1").html(name)
 }
 function checkLifeEq0(player){
    if(player.life<=0){
        return true
    }
    return false
 }
 function checkCDmgEq21(player){
    if(player.cDmg0===21){
        return true
    }
    if(player.cDmg1===21){
        return true
    }
    if(player.cDmg2===21){
        return true
    }
    return false
 }
 function loseTheGame(player){
    $("#"+player.id).hide()
    player.lose=true;
    checkWinner()
 }
 function checkWinner(){
    var cntLose=0
    var winner=""
    for(var x=0;x<4;x++){
        if(players[x].lose){
            cntLose++
        }
        else{
            winner=players[x].name
        }
    }
    if(cntLose===3){
        Winner(winner)
    }
    return false;
 }
 function Winner(winner){
    $("#winner #name").html(winner)
    $("#winner").show()
 }
 function getCdmg(player){
    array=[];
    array.push(player.cDmg0)
    array.push(player.cDmg1)
    array.push(player.cDmg2)
    return array;
 }
 function incCdmg(player,int){
    cDmg=getCdmg(player);
    int=int-1
    cDmgInt=cDmg[int]+1;
    switch(int){
        case 0:
            player.cDmg0=cDmgInt;
            break;
        case 1:
            player.cDmg1=cDmgInt;
            break;
        case 2:
            player.cDmg2=cDmgInt;
            break;
    }
    return cDmgInt
 }
 function insertCdmg(player){
    cDmg=getCdmg(player);
    for(var x=1;x<=3;x++){
        var y=x-1
       var commanderDmg=player.id+"CdmgP"+x;
       $("#"+player.id+" #"+[commanderDmg]).html(cDmg[y])
    }
    return true;
 }
 function incLife(player,int){
    var life=player.life+int;
    player.life=life
    $("#"+player.id+" #life").html(life)
 }
 var players=[];
 var turn=0;
 window.onload= function(){
    players.push(new Player("player1","player1"))
    players.push(new Player("player2","player2"))
    players.push(new Player("player3","player3"))
    players.push(new Player("player4","player4"))
    $("#playerTurn").html(players[0].name)
 }
 
 