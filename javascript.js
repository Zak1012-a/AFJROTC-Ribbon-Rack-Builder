function getOption() {
  var obj = document.getElementById("ribbon-input");
  document.getElementById("demo").innerHTML = 
  obj.options[obj.selectedIndex].text;
}
