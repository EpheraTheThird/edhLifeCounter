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
$(".cDmg").click(function (){
    id=this.id;
    id=id.slice(0,7);
})
$(".cDmg").click(function(){
    if($("#"+this.id).hasClass("commanderDmg")){
        var id=this.id.slice(0,7)+"LifeInc";
        $("#"+id).toggleClass("commanderDmg")
        var id=this.id.slice(0,7)+"LifeDic";
        $("#"+id).toggleClass("commanderDmg")
    }
    else{
        var id=this.id.slice(0,7)+"LifeInc";
        $("#"+id).toggleClass("commanderDmg")
        var id=this.id.slice(0,7)+"LifeDic";
        $("#"+id).toggleClass("commanderDmg") 
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
    var life=player.life+int;
    player.life=life
    $("#"+player.id+" #life").html(life)
}
var players=[];
window.onload= function(){
    players.push(new Player("player1","yuval"))
    players.push(new Player("player2","michal"))
    players.push(new Player("player3","lotem"))
}
//a