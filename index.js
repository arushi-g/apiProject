
var menu = document.getElementById("select");    

// console.log(menuVal)
function printInfo() {
	var menuVal = menu.options[menu.selectedIndex].value;
	event.preventDefault()
	document.getElementById("pokeinfo").innerHTML = menuVal
	console.log(menuVal)

}

// document.addEventListener("select", function (event) {
// 	event.preventDefault()
// 	document.getElementById("pokeinfo").innerHTML = menuVal
// });