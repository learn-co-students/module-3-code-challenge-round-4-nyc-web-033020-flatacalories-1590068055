document.addEventListener('DOMContentLoaded', (event) => {

//  - See all character's name in the dropdown menu by **requesting** data from the server

// - Select a character from drop down menu and see character's info inside `#detailed-info` div. 

// 3. Clicks on "Add Calories" button to add calories to a Character. Persist calories value to the server and update the DOM.
   
//- put db to dom 
//-make a select bar to each animal 
// event listener to calories button 
// event listener to reset calories 
const dropDown = document.getElementById('character-names')
const detail = document.getElementById('detailed-info')
const animalName = document.getElementById('name')
const animalImage = document.getElementById('image')
const form = document.getElementsByTagName('form')[0]
const input1 = form.getElementsByTagName('input')[0]


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
        option.value = animal.id
        const calorie = animal.calories
        const picture = animal.image
      
      
        dropDown.append(option)
    })
}

dropDown.addEventListener('change', function(event){
event.preventDefault()
     const id = event.target.value 
   

       fetch(`http://localhost:3000/characters/${id}`)
       .then(r => r.json())
       .then(animal => {
            animalName.innerHTML = animal.name
            animalImage.src = animal.image
            input1.value = animal.id
            
        })
        
})


form.addEventListener('submit', function(event){
    event.preventDefault()
    
   const id = input1.value

   fetch(`http://localhost:3000/characters/${id}`, {
       method:"PATCH", 
       headers:
   })
 
 
})







});