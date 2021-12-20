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
            return "All fields required"
        } else if(isNaN(testInput) === false){
            return "is a Number"
        } else if(isNaN(testInput) === true){
            return "Not a Number"
        }
};




function formSubmission(document, event, pilot, copilot, fuelLevel, cargoLevel) {


if(validateInput(pilot.value) === "All fields required" || validateInput(copilot.value) === "All fields required" || validateInput(fuelLevel.value) === "All fields required" || validateInput(cargoLevel.value) === "All fields required"){
    alert("All fields required")
    event.preventDefault();
}


if(validateInput(pilot.value) === "is a Number" || validateInput(copilot.value) === "is a Number"){
    alert("Is a number")
    event.preventDefault();
} else if(validateInput(fuelLevel.value) === "Not a Number" || validateInput(cargoLevel.value) === "Not a Number"){
    alert("Not a number")
    event.preventDefault();
}




document.getElementById("pilotStatus").innerHTML = `${pilot.value} is ready for Liftoff`
document.getElementById("copilotStatus").innerHTML = `${copilot.value} is ready for Liftoff`



if(Number(fuelLevel.value) < 10000){
    document.getElementById("fuelStatus").innerHTML = "Not Enough Fuel"
    document.getElementById("faultyItems").style.visibility = "visible"
    document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"
    document.getElementById("launchStatus").style.color = "red"
    event.preventDefault();
}


if(Number(cargoLevel.value) > 10000){
    document.getElementById("launchStatusCheck").style.visibility = "visible"
    document.getElementById("cargoStatus").innerHTML = "Too Much Mass For Shuttle Take Off"
    document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"
    document.getElementById("launchStatus").style.color = "red"
    event.preventDefault();
}



if(Number(fuelLevel.value) >= 10000 & Number(cargoLevel.value) <= 10000){
    document.getElementById("launchStatus").innerHTML = "Ready For Liftoff"
    document.getElementById("launchStatus").style.color = "green"
    document.getElementById("cargoStatus").innerHTML = "Cargo is ready"
    document.getElementById("fuelStatus").innerHTML = "Fuel is ready"
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


// (2) Often, when submitting the form with invalid data, nothing happens; no alerts pop up and the bottom box on the page doesn't change. I think part of this is due to (1). Another thing that might help this is that you'll want to add an event parameter to formSubmission(), and pass the event as an argument when calling formSubmission() from the script. Then, you should call event.preventDefault() whenever the user enters invalid data.


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
