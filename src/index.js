document.addEventListener('DOMContentLoaded', (event) => {

//     See all character's name in the dropdown menu by **requesting** data from the server

// 2. Select a character from drop down menu and see character's info inside `#detailed-info` div. 

// 3. Clicks on "Add Calories" button to add calories to a Character. Persist calories value to the server and update the DOM.
   
// put db to dom 
//make a select bar to each animal 
// event listener to calories button 
// event listener to reset calories 
const dropDown = document.getElementById('character-names')
const detail = document.getElementById('detailed-info')
// const option1 = document.getElementsByTagName('option')[2]
// const option1= dropDown.getElementsByTagName('option')[3]
// console.log(option1)
getAnimals()
function getAnimals(){

    fetch('http://localhost:3000/characters')
    .then(r => r.json())
    .then(animals => renderAnimals(animals))
}
function renderAnimals(animals){
    animals.forEach(animal => {
        const option = document.createElement('option')
        option.innerHTML = animal.name
        option.value = animal.name 
        


        dropDown.append(option)

    })
}

dropDown.addEventListener('change', function(event){

  console.log(  event.target )

    // if (  ){

    // }
})





});