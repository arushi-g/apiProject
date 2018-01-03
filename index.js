var menu = document.getElementById("select");    

// console.log(menuVal)
function printInfo() {
	var menuVal = menu.options[menu.selectedIndex].value;
	event.preventDefault()
	//document.getElementById("pokeinfo").innerHTML = menuVal
	console.log(menuVal)
    getEvoData(menuVal)
}

// getEvoData = () => {
//   r = fetch('http://pokeapi.co/api/v2/evolution-chain/1')
//   .then(r => r.json())
//   //.then(astros => renderAstros(astros))
//   console.log(r)
// }
 
async function getEvoData(menuVal) {
     try {
       const proxyurl = "https://cors-anywhere.herokuapp.com/";
       let response = await fetch(proxyurl + "http://pokeapi.co/api/v2/evolution-chain/" + menuVal + ".json")
       let evo = await response.json()
       console.log(evo)
       evoChain(evo)
     } catch (error) {
       console.log(error)
     }
 }

function evoChain(data) {
	var baseName = data.chain.species.name
	// `htttp://${variable}jgidfjog${}`
    var pokeChain = "<li>" + baseName + "</li><img src='https://img.pokemondb.net/artwork/" 
    + baseName + ".jpg' alt='Smiley face'><br>" +
    "<button type='button' id='" + baseName + "' onclick='getInfo("+ baseName +")'>" + baseName + "</button><br><br>"
    var currentObjArray = data.chain.evolves_to
  
    while (currentObjArray.length != 0) {
    	console.log(pokeChain)
    	baseName = currentObjArray[0].species.name
		pokeChain += "<li>" + baseName + "</li><img src='https://img.pokemondb.net/artwork/" 
		+ baseName + ".jpg' alt='Smiley face'><br>"
		"<button type='button' id='" + baseName + "' onclick='getInfo("+ baseName +")'>" + baseName + "</button><br><br>"
		currentObjArray = currentObjArray[0].evolves_to
    }
    // var secondPoke = "<li>" + data.chain.evolves_to[0].species.name + "</li>"
    // var thirdPoke = "<li>" + data.chain.evolves_to[0].evolves_to[0].species.name + "</li>"
    // var evolution = firstPoke + secondPoke + thirdPoke
    console.log(pokeChain)
    document.getElementById("evoChain").innerHTML = pokeChain

    
//    let people = astroNames(peopleInSpace).map((person) => {
//        return "<li>" + person + "</li>"
//    })
//    htmlString = people.join("") //mashes array into a string
//    list.innerHTML = htmlString

}

// //this guy doesn't work yet
// function getInfo(buttonElement) {
// 	console.log(buttonElement.id) ;
// 	var pokeurl = "http://pokeapi.co/api/v2/pokemon-species/" + name;
// 	// var data = "";
// 	try {
//        const proxyurl = "https://cors-anywhere.herokuapp.com/";
//        let response = await fetch(proxyurl + pokeurl + ".json")
//        var data = await response.json()
//        // console.log(evo)
//        // evoChain(evo)
//      } catch (error) {
//        console.log(error)
//      }
//     console.log(data.color.name) 

// }

// document.addEventListener("select", function (event) {
// 	event.preventDefault()
// 	document.getElementById("pokeinfo").innerHTML = menuVal
// });