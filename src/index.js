/*
- √Fetch request to GET  (/characters) all character's name in the dropdown menu
- 'Click' listener on the drop down menu to select & see character's info inside #detailed-info div
- Fetch request to GET (/characters/:id) ind. character

    -Transform drop-down options into an array:
    const namesArr = Array.from(document.querySelector('#character-names').options)

    - Use forEach on the namesArr to change each character's name/image/calories

- 'Click' listener on "Add Calories" btn to add calories to a Character. Persist calories value to the server and update the DOM
- Fetch request to PATCH/update (/characters/:id) calorie count
*/

document.addEventListener('DOMContentLoaded', () => {
    const charactersURL = 'http://localhost:3000/characters'
    const allNames = document.querySelector('#character-names')

    fetch(charactersURL)
        .then(resp => resp.json())
        .then(characters => characters.forEach(character => renderNames(character)))
       
    function renderNames(character) {
            const eachName = document.createElement('option')
            eachName.innerText = character.name
            allNames.append(eachName)

            allNames.addEventListener('click', event => {
                const name = document.querySelector('#name')
                const image = document.querySelector('#image')
                const caloriesSpan = document.querySelector('#calories')

                if(event.target.children[1].innerText === 'Mr. Cute') {
                    console.log(character)
                    name.textContent = character.name
                    image.src = character.image
                    caloriesSpan.textContent = character.calories
        
                } 
            })
    }

    // fetch(charactersURL/1)
    //     .then(resp => resp.json())
    //     .then(character => renderCharacter(character))

    // function renderCharacter(character) {
    //     document.addEventListener('click', event => {
    //         if(event.target.children[1].innerText === 'Mr. Cute') {
    //             const name = document.querySelector('#name')
    //             const image = document.querySelector('#image')
    //             const caloriesSpan = document.querySelector('#calories')
    
    //             name.textContent = character.name //how do I get access to the characters??
    //             image.src = character.image
    //             caloriesSpan.textContent = character.calories
    //         }
    //     })
    // }
})