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
    var player=players[[this.id.slice(8,9)]-1]
    if($("#"+this.id).hasclass("commanderDmg")){
        incCdmg(player1,1);
    }
    else{
        incLife(player,1);
    }
})
$(".lifeDic").click(function(){
    var player=players[[this.id.slice(7,8)]-1]
    if($("#"+this.id).hasclass("commanderDmg")){
    }
    else{
        incLife(player,-1)
    }
})
$(".cDmg").click(function (){
    id=this.id;
    id=id.slice(0,7);
})
$(".cDmg").click(function(){
    if($("#"+this.id).hasclass("commanderDmg")){
        $("#"+this.id).toggleClass("commanderDmg")
    }
    else{
        $("#"+this.id).toggleClass("commanderDmg") 
    }
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
    var life=player.life;
    life=parseInt(life)+int;
    $("#"+player.id+" life").html(life);
}
var players=[];
window.onload= function(){
    players.push(new Player("player1","yuval"))
    players.push(new Player("player2","michal"))
    players.push(new Player("player1","lotem"))
}