function checkplay() {
  var x = document.getElementsByName("playstyle");
  if(x[0].checked == true){
    document.getElementById("off").style.visibility = "visible";
    document.getElementById("def").style.visibility = "hidden";
    document.getElementById("flex").style.visibility = "hidden";
  }
  if(x[1].checked == true){
    document.getElementById("off").style.visibility = "hidden";
    document.getElementById("def").style.visibility = "visible";
    document.getElementById("flex").style.visibility = "hidden";
  }
  if(x[2].checked == true){
    document.getElementById("off").style.visibility = "hidden";
    document.getElementById("def").style.visibility = "hidden";
    document.getElementById("flex").style.visibility = "visible";
  }
};
function makehidden(){
  var p = document.getElementsByClassName("pic");
  var i;
  for(i=0; i<p.length; i++){
    p[i].style.visibility = "hidden";
  }
}

function checkoffarchetype() {
  var y = document.getElementsByName("offarchetype");
  if(y[0].checked == true){ //All Rounder
    document.getElementById("mario").style.visibility = "visible";
    document.getElementById("yoshi").style.visibility = "visible";
    document.getElementById("pitt").style.visibility = "visible";
    document.getElementById("bpitt").style.visibility = "visible";
    document.getElementById("ryu").style.visibility = "visible";
    document.getElementById("doc").style.visibility = "visible";
    document.getElementById("lucina").style.visibility = "visible";
  }
  if(y[1].checked == true){ //Rushdown
    document.getElementById("fox").style.visibility = "visible";
    document.getElementById("yoshi").style.visibility = "visible";
    document.getElementById("sheik").style.visibility = "visible";
  }
  if(y[2].checked == true){ //Pressurer
    document.getElementById("pika").style.visibility = "visible";
    document.getElementById("peach").style.visibility = "visible";
    document.getElementById("roy").style.visibility = "visible";
    document.getElementById("bayo").style.visibility = "visible";
  }
  if(y[3].checked == true){ //Hit&Run
    document.getElementById("capt").style.visibility = "visible";
    document.getElementById("greninja").style.visibility = "visible";
    document.getElementById("wiifit").style.visibility = "visible";
  }
  if(y[4].checked == true){ //MixUp
    document.getElementById("falco").style.visibility = "visible";
    document.getElementById("lucas").style.visibility = "visible";
    document.getElementById("peach").style.visibility = "visible";
  }
  if(y[5].checked == true){ //ZoneBreaker
    document.getElementById("sheik").style.visibility = "visible";
    document.getElementById("zss").style.visibility = "visible";
    document.getElementById("corrin").style.visibility = "visible";
  }
  if(y[6].checked == true){ //Dominating
    document.getElementById("roy").style.visibility = "visible";
    document.getElementById("cloud").style.visibility = "visible";
    document.getElementById("zard").style.visibility = "visible";
  }
  if(y[7].checked == true){ //Footsies
    document.getElementById("ike").style.visibility = "visible";
    document.getElementById("mac").style.visibility = "visible";
    document.getElementById("greninja").style.visibility = "visible";
    document.getElementById("ryu").style.visibility = "visible";
    document.getElementById("ganon").style.visibility = "visible";
  }
  if(y[8].checked == true){ //GlassCannon
    document.getElementById("zelda").style.visibility = "visible";
    document.getElementById("mewtwo").style.visibility = "visible";
  }
}
function checkdefarchetype(){
  var d = document.getElementsByName("defarchetype");
  if(d[0].checked == true){ //Zoner
    document.getElementById("samus").style.visibility = "visible";
    document.getElementById("link").style.visibility = "visible";
    document.getElementById("dedede").style.visibility = "visible";
    document.getElementById("marth").style.visibility = "visible";
    document.getElementById("tink").style.visibility = "visible";
    document.getElementById("wiifit").style.visibility = "visible";
  }
  if(d[1].checked == true){ //Bait&Punish
    document.getElementById("bowserjr").style.visibility = "visible";
    document.getElementById("capt").style.visibility = "visible";
    document.getElementById("wario").style.visibility = "visible";
    document.getElementById("mk").style.visibility = "visible";
    document.getElementById("puff").style.visibility = "visible";
  }
  if(d[2].checked == true){ //Trapper
    document.getElementById("pacman").style.visibility = "visible";
    document.getElementById("robin").style.visibility = "visible";
  }
  if(d[3].checked == true){ //Turtle
    document.getElementById("link").style.visibility = "visible";
    document.getElementById("samus").style.visibility = "visible";
    document.getElementById("villager").style.visibility = "visible";
    document.getElementById("palutena").style.visibility = "visible";
    document.getElementById("gnw").style.visibility = "visible";
  }
  if(d[4].checked == true){ //KeepAway
    document.getElementById("samus").style.visibility = "visible";
    document.getElementById("sonic").style.visibility = "visible";
    document.getElementById("olimar").style.visibility = "visible";
  }
  if(d[5].checked == true){ //StageControl
    document.getElementById("duckhunt").style.visibility = "visible";
    document.getElementById("megaman").style.visibility = "visible";
    document.getElementById("diddy").style.visibility = "visible";
    document.getElementById("tink").style.visibility = "visible;"
  }
  if(d[6].checked == true){
    document.getElementById("luma").style.visibility = "visible";
  }
  if(d[7].checked == true){ // Grappler
    document.getElementById("bowser").style.visibility = "bowser";
    document.getElementById("dk").style.visibility = "visible";
    document.getElementById("dedede").style.visibility = "visible";
    document.getElementById("luigi").style.visibility = "visible";
    document.getElementById("ness").style.visibility = "visible";
  }
}
function checkflexarchetype(){
  var f = document.getElementsByName("flexarchetype");
  if(f[0].checked == true){
    document.getElementById("shulk").style.visibility = "visible";
    document.getElementById("kirby").style.visibility = "visible";
  }
  if(f[1].checked == true){
    document.getElementById("lucario").style.visibility = "visible";
  }
  if(f[2].checked == true){
    document.getElementById("marth").style.visibility = "visible";
    document.getElementById("lucina").style.visibility = "visible";
    document.getElementById("zelda").style.visibility = "visible";
  }
}
