// See all character's name in the dropdown menu by **requesting** data from the server

// Select a character from drop down menu and see character's info inside `#detailed-info` div. 

// Clicks on "Add Calories" button to add calories to a Character.Persist calories value to 
// the server and update the DOM.

document.addEventListener('DOMContentLoaded',() => {
    const baseURL = 'http://localhost:3000'
    const charURL = `${baseURL}/characters`
    const charDropdown = document.getElementById('character-names') 

    const charId = document.getElementById('id')
    const charName = document.getElementById('name')
    const charImage = document.getElementById('image')
    const charCalories = document.getElementById('calories')

    const getChar = () => {
        fetch(charURL)
        .then(resp => resp.json())
        // .then(console.log)
        .then(getCharacters)
    }

    const getCharacters = characters => {
        console.log(characters)
        characters.forEach(character => {
            const charEntry = document.createElement('option')
            charEntry.dataset.id = character.id
            charEntry.innerHTML = `<option data-id=${character.id} class='showSelect'> ${character.name}</option>`
            charDropdown.append(charEntry)
        })
    }
    

    charDropdown.addEventListener('change', function (e) {
        // console.dir(e.target)
        const currentSelect = getElementsBy(e.target.value)
        // array.find(
        fetch(`${charURL}/${id}`)
        .then(resp => resp.json())
        // .then(console.log())
        .then(character => {
            charId = character.id
            charName = character.name
            charImage = character.image
            charCalories = character.calories
        })

    })



    getChar()
})