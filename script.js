var code = [];	// code
var txt = "";	// code in text
const crs = '<span id = "cursor">|</span>';	// cursor
var posCrs;	// cursor position in the code

function init() {
	console.log("Initiated");
	var ed = document.getElementById("editor");
	ed.innerHTML = crs;
	document.addEventListener("keydown", function(event) {
		const key = event.key;
		event.preventDefault();
		console.log(key, prcInput(key));
		txt += prcInput(key);
		ed.innerHTML = txt + crs;
		// console.log(ed);
	});
	setCursor();
}

function prcInput(str) {
	var rStr;
	if (str == "Enter") {
		rStr = "<br>";
	} else if (str == "Tab") {
		rStr = "&nbsp;&nbsp;";
	} else {
		rStr = str;
	}
	return rStr;
}

function reset() {
	txt = "";
	document.getElementById("editor").innerHTML = crs;
}
function submit() {

}

function setCursor() {
	v = true;
	s = 500;
	setInterval(function() {
		if (v) {
			v = false;
			document.getElementById("cursor").style.opacity = 0;
		} else {
			v = true;
			document.getElementById("cursor").style.opacity = 1;
		}
	}, s);
}