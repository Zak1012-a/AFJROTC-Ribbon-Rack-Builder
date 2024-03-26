var e = document.getElementById("test");
			function onChange() {
  			var value = e.value;
  			var text = e.options[e.selectedIndex].text;
  			console.log(value, text);
		       }
		       e.onchange = onChange;
		       onChange();
