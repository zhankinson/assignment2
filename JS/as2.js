function checkplay() {
  var x = document.getElementsByName("playstyle");
  var form;
  if(x[0].checked == true){
    document.getElementById("off").style.visibility = "visible";
  }
  if(x[1].checked == true){
    document.getElementById("def").style.visibility = "visible";
  }
  if(x[2].checked == true){
    document.getElementById("flex").style.visibility = "visible";
  }
  //document.getElementById("myPlay").elements[0].checked = true;
};
