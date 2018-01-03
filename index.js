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
    var firstPoke = "<li>" + data.chain.species.name + "</li>"
    var secondPoke = "<li>" + data.chain.evolves_to[0].species.name + "</li>"
    var thirdPoke = "<li>" + data.chain.evolves_to[0].evolves_to[0].species.name + "</li>"
    var evolution = firstPoke + secondPoke + thirdPoke
    console.log(evolution)
    document.getElementById("evoChain").innerHTML = evolution

    
//    let people = astroNames(peopleInSpace).map((person) => {
//        return "<li>" + person + "</li>"
//    })
//    htmlString = people.join("") //mashes array into a string
//    list.innerHTML = htmlString

}

// document.addEventListener("select", function (event) {
// 	event.preventDefault()
// 	document.getElementById("pokeinfo").innerHTML = menuVal
// });