document.addEventListener('DOMContentLoaded', (event) => {

    //fetch to http://localhost:3000/characters
    //iterate through and add to drop down/select
    //data bind

    const url = 'http://localhost:3000/characters'
    const charactersDropdown = document.querySelector('#character-names')
    const detailedInfoDiv = document.querySelector('#detailed-info')

    //function to fetch all characters (GET)
    const getAllCharacters = () => {
        fetch(url)
            .then(resp => resp.json())
            .then(json => renderCharsToDropdown(json))
    }

    //invoke fetch request function above
    getAllCharacters()

    //function to render all characters to a dropdown in DOM
    const renderCharsToDropdown = (data) => {
        
        //loop through all characters/populate dropdown
        for (const character of data) {
            // console.log(character.name)
            charactersDropdown.innerHTML += `
                <option value="${character.name}" data-id="${character.id}">${character.name}</option>
            `
        }
        
    }

    //event listener for change in dropdown
    charactersDropdown.addEventListener('change', (e) => {
        // console.log(e.target.value)
        // console.dir(e.target)

        
    })

});