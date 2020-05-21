/* USER STORY

√ See all character's name in the dropdown menu by **requesting** data from the server

PSEUDO CODE

√ Make a fetch request and check what data is provided
√ Grab the dropdown form
√ Create a select option for each character

USER STORY

√ Select a character from drop down menu and see character's info inside `#detailed-info` div.

PSEUDO CODE

√ Get the #detailed-info div, set as const
√ Add a click listener for on-change
√ Set the div display info to the character's info
    √ Get char's name
    √ Get char's image
    √ Get char's total calories (char.calories)

USER STORY

Clicks on "Add Calories" button to add calories to a Character. Persist calories value to the server and update the DOM.

PSEUDO CODE

√ Grab the add calories button and set to a const
√ Add event listener to submit button and preventDefault
√ Make a fetch('patch') request containing url headers and body info with calorie change
    √ The body will contain the input value of the textField
    Optimistically render the character's new calorie count


#####################
Advanced Deliverables

Clicks on a `Reset Calories` button to set calories to `0`. Persist calories value to the server and update the DOM.

Change character's name

Add a new character
*/


const url = "http://localhost:3000/characters"
const urlHeaders = {
    "Content-Type": "application/json",
    "Accept": "application/json"
}
const dropdown = document.querySelector('#character-names')
const detailedDiv = document.querySelector('#detailed-info')
const caloriesForm = document.querySelector('#calories-form')
caloriesForm.children[2].id = "submit"
const addCalorieBtn = document.querySelector('#submit')
const resetCaloriesBtn = document.querySelector('#reset-btn')
populateDropdown()

resetCaloriesBtn.addEventListener('click', event => {
    console.log(event.target)
})

caloriesForm.addEventListener('submit', event => {
    event.preventDefault()
    const charId = event.target.children[0].id
    let currentCalories = document.querySelector('#calories').textContent
    const calorieNumField = event.target.children[1].value
    const calorieTotal = (parseInt(calorieNumField, 10) + parseInt(currentCalories, 10))
    
    fetch(`${url}/${charId}`, {
        method: 'PATCH',
        headers: urlHeaders,
        body: JSON.stringify({
            calories: calorieTotal
        })
    })
    .then(resp => resp.json())
    .then(updateCalories)
})

dropdown.addEventListener('change', event => {
    changeDisplay(event)
})

let divName = document.querySelector('#name')
let divImage = document.querySelector('#image')
let divCalories = document.querySelector('#calories')

function changeDisplay(event){
    fetch(url)
    .then(resp => resp.json())
    .then(characters => {
        characters.forEach(char => {
            if (char.name === event.target.value){
                divName.textContent = char.name
                divImage.src = char.image
                divCalories.textContent = char.calories 
                caloriesForm.children[0].id = char.id
            }
        })
    })
} 

function updateCalories(){
    fetch(url)
    .then(resp => resp.json())
    .then(characters => {
        characters.forEach(char => {
            if (char.name === divName){
                divCalories.textContent = char.calories 
            }
        })
    })
}

function populateDropdown(){
    fetch(url)
    .then(resp => resp.json())
    .then(characters => {
        characters.forEach(char => {
            const charName = document.createElement('option')
            charName.value = char.name
            charName.textContent = char.name
            charName.dataset.id = char.id

            dropdown.appendChild(charName)
        })
    })
}
