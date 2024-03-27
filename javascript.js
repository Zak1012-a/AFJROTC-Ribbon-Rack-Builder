
var e = document.getElementById("test1");
function onChangetest1() {
  	var value = e.value;
  	var text = e.options[e.selectedIndex].text;
  	console.log(value, text);
	}
e.onchange = onChangetest1;
onChangetest1();

var e = document.getElementById("test2");
function onChangetest2() {
  	var value = e.value;
  	var text = e.options[e.selectedIndex].text;
  	console.log(value, text);
	}
e.onchange = onChangetest2;
onChangetest2();

var e = document.getElementById("test3");
function onChangetest3() {
  	var value = e.value;
  	var text = e.options[e.selectedIndex].text;
  	console.log(value, text);
	}
e.onchange = onChangetest3;
onChangetest3();

