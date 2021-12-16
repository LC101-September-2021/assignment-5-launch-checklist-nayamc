// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, image) {
   // Here is the HTML formatting for our mission target div.
    document.getElementById('missionTarget').innerHTML = 
    `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} $</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${image}">
   `;
}



function validateInput(testInput) {

        if( testInput === ""){
            return "Empty"
        } else if(testInput === Number){
            return "Is a Number"
        } else if(testInput === String){
            return "Not a Number"
        }

        
        // if(testInput === Number){
        //     return "Is a Number"
        // } else if(testInput === String){
        //     return "Not a Number"
        // }

};


// copilot, fuelLevel, cargoLevel

// || validateInput(copilot.value) === "Empty" || validateInput(fuelLevel.value) === "Empty" || validateInput(cargoLevel.value) === "Empty"

function formSubmission(document, pilot, copilot, fuelLevel, cargoLevel) {


if(validateInput(pilot.value) === "Empty" ){
    alert("Empty")
}

if(validateInput(pilot.value) === "is a Number" || validateInput(copilot.value) === "is a Number"){
    alert("Is a number")
} else if(validateInput(fuelLevel.value) === "not a number" || validateInput(cargoLevel.value) === "not a number"){
    alert("Not a number")
}


document.getElementById("pilotStatus").innerHTML = `${pilot.value} is ready for Liftoff`
document.getElementById("copilotStatus").innerHTML = `${copilot.value} is ready for Liftoff`



if(fuelLevel < 10,000){
    document.getElementById("fuelStatus").innerHTML = "Not Enough Fuel"
    document.getElementById("faultyItems").style.visibility = "visible"
    document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"
    document.getElementById("launchStatus").style.color = "red"
}

if(cargoLevel > 10,000){
    document.getElementById("launchStatusCheck").style.visibility = "visible"
    document.getElementById("cargoStatus").innerHTML = "Too Much Mass For Shuttle Take Off"
    document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"
    document.getElementById("launchStatus").style.color = "red"
}
    
if(fuelLevel >= 10,000 & cargoLevel <= 10,000){
    document.getElementById("launchStatus").innerHTML = "Ready For Liftoff"
    document.getElementById("launchStatus").style.color = "green"
 }


}


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
       return response.json()
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let planetLength = planets.length;
    let planet = Math.floor(Math.random() * planetLength);
    
    return planets[planet];
};


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
