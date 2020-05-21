let characterArray = []

const detailedInfo = document.querySelector('#detailed-info')
const characterNameDropDown = document.querySelector('#character-names')

const addCalorieButton = document.querySelector('#calories-form')

function addCalorie{
    addCalorieButton.addEventListener('click',)
} 
// if addCalorieButton.value === 'submit'
// add


fetch('http://localhost:3000/characters')
    .then(r => r.json())
    .then(actualCharacters => {
        characterArray = actualCharacters
    }) 


// 1. See all character's name in the dropdown menu
// by **requesting** data from the server

// 2. Select a character from drop down menu and see
// character's info inside `#detailed-info` div. 

// 3. Clicks on "Add Calories" button to add calories 
//to a Character. Persist calories value to the server 
// and update the DOM.



// i have to study alot more :(