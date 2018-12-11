class Player{
    constructor(id, name){
        this.id=id;
        this.name=name;
        this.cDmg0=0;
        this.cDmg1=0;
        this.cDmg2=0;
        this.life=40;
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
})
$(".cDmg").click(function(){
    var id=this.id
    id=id.slice(6,7)
    id="commanderDmgP"+id
    $("."+id).css("display", "block");
})
$("#turn").click(function (){
    turn=turn+1;
    if(turn===players.length){
        turn=0
    }
    $("#playerTurn").html(players[turn].name)
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
$("#cDmgP1Inc").click(function(){
    if($("#player1").hasClass("P2")){
        incCdmg(players[0],1)
    }
    else if($("#player1").hasClass("P3")){
        incCdmg(players[0],2)
    }
    else if($("#player1").hasClass("P4")){
        incCdmg(players[0],3)
    }
    insertCdmg(players[0])
})
$(".closeButton").click(function(){
    var id=this.id.slice(9,11)
    id="commanderDmg"+id
    $("#"+id).css("display", "none");
})
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
    for(var x=0;x<3;x++){
       var commanderDmg="cDmg"+x;
       $("#"+player.id+" #"+[commanderDmg]).html(cDmg[x])
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
    players.push(new Player("player1","yuval"))
    players.push(new Player("player2","michal"))
    players.push(new Player("player3","lotem"))
    players.push(new Player("player4","arye"))
    $("#playerTurn").html(players[0].name)
 }