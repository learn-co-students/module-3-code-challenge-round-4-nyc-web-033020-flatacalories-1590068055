// See all character's name in the dropdown menu by **requesting** data from the server

// Select a character from drop down menu and see character's info inside `#detailed-info` div. 

// Clicks on "Add Calories" button to add calories to a Character.Persist calories value to 
// the server and update the DOM.

document.addEventListener('DOMContentLoaded',() => {
    const baseURL = 'http://localhost:3000'
    const charURL = `${baseURL}/characters`
    const charDropdown = document.getElementById('character-names') 

    const getChar = () => {
        fetch(charURL)
        .then(resp => resp.json)
        .then(getCharacters)
    }
    // daySelect = document.getElementById('daySelect');
    // daySelect.options[daySelect.options.length] = new Option('Text 1', 'Value1');

    const getCharacters = characters => {
        characters.forEach(character => {
            const charEntry = document.createElement('option')
            charEntry.options[charEntry.options.length] = new Option('Text 1', 'Value1')
            charEntry.dataset.id = character.id
            charDropdown.append(charEntry)
        })

    }




    getChar()
})