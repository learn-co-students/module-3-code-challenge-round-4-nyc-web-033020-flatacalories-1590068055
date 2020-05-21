/*
- Fetch request to GET  (/characters) all character's name in the dropdown menu
- 'Click' listener on the drop down menu to select & see character's info inside #detailed-info div
- Fetch request to GET (/characters/:id) ind. character
- 'Click' listener on "Add Calories" btn to add calories to a Character. Persist calories value to the server and update the DOM
- Fetch request to PATCH/update (/characters/:id) calorie count
*/

document.addEventListener('DOMContentLoaded', () => {
    charactersURL = 'http://localhost:3000/characters'

    fetch(charactersURL)
        .then(resp => resp.json())
        .then(characterNames => characterNames.forEach(charaName => renderNames(charaName)))

    function renderNames(charaName) {
        const allNames = document.querySelector('#character-names')
        const eachName = document.createElement('option')
        console.log(eachName)
        eachName.innerText = charaName.name
        allNames.append(eachName)
    }

    // function renderCharacters(character) {
    //     const name = document.querySelector('#name')
    //     const image = document.querySelector('#image')
    //     const caloriesSpan = document.querySelector('#calories')

    //     name.textContent = character.name
    //     image.src = character.image
    //     caloriesSpan.textContent = character.calories
    // }


})