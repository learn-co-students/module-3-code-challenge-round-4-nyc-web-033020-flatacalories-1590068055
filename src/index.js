// As a user, I can:

// [x]1. See all character's name in the dropdown menu by **requesting** data from the server

// 2. Select a character from drop down menu and see character's info inside `#detailed-info` div. 

// 3. Clicks on "Add Calories" button to add calories to a Character. Persist calories value to the server and update the DOM.

document.addEventListener('DOMContentLoaded', ()=>{
    const url = "http://localhost:3000/characters"
    const dropdown = document.querySelector('#character-names')
    console.log(dropdown)
    fetch(url)
    .then(response => response.json())
    .then(charData => renderCharacter(charData))
    // .then((data)=>{console.log(data)})
    function renderCharacter(charData){
        charData.forEach((char)=>{
            let option = document.createElement('option')
            dropdown.appendChild(option)
        })
    }
})