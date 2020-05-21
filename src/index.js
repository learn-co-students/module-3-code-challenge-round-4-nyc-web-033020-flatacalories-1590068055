// Deliverables
    // √load all character's names to the dropdown
        // √√fetch characters
        // √add options to dropdown
    // load character info panel when their name option is clicked
        // fetch single character
        // build elements
        // add to DOM
    // clicking "add calories" adds calories to currently selected character in info panel
        // add event listener for calorie button
        // fetch PATCH calories to selected character
        // update DOM with new calorie values

const CHAR_URL = "http://localhost:3000/characters"
document.addEventListener("DOMContentLoaded", ()=> {
    const charSelect = document.querySelector("#character-names")
    loadCharacters()

    charSelect.addEventListener('change', (e)=>{
        const selectedChar = e.target.value
        findAndLoadChar(selectedChar)
    })

})

const findAndLoadChar = (characterName) =>{
    fetch(CHAR_URL)
    .then(r => r.json())
    .then(characters =>{
        // characters.forEach(char => console.log(char.image))
        const fullChar = characters.filter(character=>{
            return character.name === characterName
        })
        console.log(fullChar[0])
        // document.querySelector('#detailed-info').dataset.id = fullChar[0].id
        // document.querySelector('#name').textContent = fullChar[0].name
        // document.querySelector('#image').src = fullChar[0].image
        // document.querySelector('#calories').textContent = fullChar[0].calories
        loadInfoPanel(fullChar[0])
    })
}

const loadInfoPanel = (char) =>{
    document.querySelector('#detailed-info').dataset.id = char.id
    document.querySelector('#name').textContent = char.name
    document.querySelector('#image').src = char.image
    document.querySelector('#calories').textContent = char.calories
}



// These functions load the character names into the dropdwon
const loadCharacters = () =>{
    fetch(CHAR_URL)
    .then(r => r.json())
    .then(makeAllCharacterOptions)
}

const makeAllCharacterOptions = (characters) =>{
    characters.forEach(character => makeSingleCharacterOption(character))
}

const makeSingleCharacterOption = (character) =>{
    const charSelect = document.querySelector("#character-names")
    const newCharOption = document.createElement('option')
    newCharOption.textContent = character.name
    newCharOption.dataset.charId = character.id
    charSelect.append(newCharOption)
}