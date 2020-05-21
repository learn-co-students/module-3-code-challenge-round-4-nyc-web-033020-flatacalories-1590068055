let characterArray = []

const detailedInfo = document.querySelector('#detailed-info')
const characterNameDropDown = document.querySelector('#character-names')

function getAllCharacters(chars) {
    
}

fetch('http://localhost:3000/characters')
    .then(r => r.json())
    .then(actualCharacters => {
        characterArray = actualCharacters
        console.log(characterArray)
    }) 


// 1. See all character's name in the dropdown menu
// by **requesting** data from the server

// 2. Select a character from drop down menu and see
// character's info inside `#detailed-info` div. 

// 3. Clicks on "Add Calories" button to add calories 
//to a Character. Persist calories value to the server 
// and update the DOM.

