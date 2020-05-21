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

Grab the add calories button and set to a const
Add event listener to submit button and preventDefault
Make a fetch('patch') request containing url headers and body info with calorie change
    The body will contain the input value of the textField
    Optimistically render the character's new calorie count


#####################
Advanced Deliverables

Clicks on a `Reset Calories` button to set calories to `0`. Persist calories value to the server and update the DOM.

Change character's name

Add a new character
*/


const url = "http://localhost:3000/characters"
const dropdown = document.querySelector('#character-names')
const detailedDiv = document.querySelector('#detailed-info')
const caloriesForm = document.querySelector('#calories-form')


populateDropdown()
addIdToSubmitBtn()

function addIdToSubmitBtn(){
    caloriesForm.children[2].id = "submit"
}

dropdown.addEventListener('change', event => {
    let divName = document.querySelector('#name')
    let divImage = document.querySelector('#image')
    let divCalories = document.querySelector('#calories')

    changeDisplay()

    function changeDisplay(){
        fetch(url)
        .then(resp => resp.json())
        .then(characters => {
            characters.forEach(char => {
                if (char.name === event.target.value){
                    divName.textContent = char.name
                    divImage.src = char.image
                    divCalories.textContent = char.calories 
                }
            })
        })
    }  
})

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
