// Write your JavaScript code here!

// const { formSubmission, addDestinationInfo, pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function() {
    let form = document.querySelector("form");

    form.addEventListener("submit", function(event){
        event.preventDefault();
        let pilotInput = document.querySelector("input[name=pilotName]");
        let copilotInput = document.querySelector("input[name=copilotName]");
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let cargoLevelInput = document.querySelector("input[name=cargoMass]");

        formSubmission(document, pilotInput, copilotInput, fuelLevelInput, cargoLevelInput)
    });
    
// Get all of the releveant form div 
// in the form subbimission event handler
    // if(formsubbision) == true
    // event.preventdefault()

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

       let choosenPlanet = pickPlanet(listedPlanets)

       let planetName = choosenPlanet.name
       let planetDiameter = choosenPlanet.diameter
       let planetStar = choosenPlanet.star
       let planetDistance = choosenPlanet.distance
       let planetMoons = choosenPlanet.moons
       let planetImage = choosenPlanet.image

       addDestinationInfo(document, planetName, planetDiameter, planetStar, planetDistance, planetMoons, planetImage)
   })
   
});