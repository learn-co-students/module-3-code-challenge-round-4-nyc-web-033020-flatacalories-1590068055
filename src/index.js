// Deliverables
    // √load all character's names to the dropdown
        // √√fetch characters
        // √add options to dropdown
    // load character info panel when their name option is clicked
        //√ fetch single character
        //√ load elements
    // clicking "add calories" adds calories to currently selected character in info panel
        // √add event listener for calorie button
        // √fetch PATCH calories to selected character
        // √update DOM with new calorie values

const CHAR_URL = "http://localhost:3000/characters"
document.addEventListener("DOMContentLoaded", ()=> {
    const charSelect = document.querySelector("#character-names")
    const caloriesForm = document.querySelector("#calories-form")
    loadCharacters()

    charSelect.addEventListener('change', (e)=>{
        const selectedChar = e.target.value
        findAndLoadChar(selectedChar)
    })

    caloriesForm.addEventListener('submit', (e)=>{
        e.preventDefault()
        const updatedCharId = document.querySelector('#characterId').value
        const addedCalories = parseInt(document.querySelector('#calories-form').children[1].value)
        addCaloriestoChar(updatedCharId, addedCalories)
    })

})

const addCaloriestoChar = (charId, addedCalories) => {
    fetch(`${CHAR_URL}/${charId}`)
    .then(r => r.json())
    .then(char => {
        const newCalorieTotal = addedCalories + char.calories
        fetch(`${CHAR_URL}/${charId}`,{
            method: "PATCH",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body: JSON.stringify({
                calories: newCalorieTotal
            })
        })
        .then(r => r.json())
        .then(char =>{
            document.querySelector('#calories').textContent = char.calories
        })
    }) 

}



// These functions help the event listener load the info panel for an individual character

const findAndLoadChar = (characterName) =>{
    fetch(CHAR_URL)
    .then(r => r.json())
    .then(characters =>{
        const fullChar = characters.filter(character=>{
            return character.name === characterName
        })
        loadInfoPanel(fullChar[0])
    })
}

const loadInfoPanel = (char) =>{
    document.querySelector('#detailed-info').dataset.id = char.id
    document.querySelector('#name').textContent = char.name
    document.querySelector('#image').src = char.image
    document.querySelector('#calories').textContent = char.calories
    document.querySelector('#characterId').value = char.id
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