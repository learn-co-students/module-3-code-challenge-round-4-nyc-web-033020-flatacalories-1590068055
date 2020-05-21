// See all character's name in the dropdown menu by **requesting** data from the server

// Select a character from drop down menu and see character's info inside `#detailed-info` div. 

// Clicks on "Add Calories" button to add calories to a Character.Persist calories value to 
// the server and update the DOM.

document.addEventListener('DOMContentLoaded',() => {
    const baseURL = 'http://localhost:3000'
    const charURL = `${baseURL}/characters`
    const 

    const getChar = () => {
        fetch(charURL)
        .then(resp => resp.json)
        .then(getCharacters)
    }
    const getCharacters = characters => {

    }




    
})