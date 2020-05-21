/* USER STORY

See all character's name in the dropdown menu by **requesting** data from the server

PSEUDO CODE

√ Make a fetch request and check what data is provided
√ Grab the dropdown form
√ Create a select option for each character

USER STORY

Select a character from drop down menu and see character's info inside `#detailed-info` div.

√ Get the #detailed-info div, set as const
√ Add a click listener for on-change
Set the div display info to the character's info
    Get char's name
    Get char's image
    Get char's total calories (char.calories)

USER STORY

Clicks on "Add Calories" button to add calories to a Character. Persist calories value to the server and update the DOM.


#####################
Advanced Deliverables

Clicks on a `Reset Calories` button to set calories to `0`. Persist calories value to the server and update the DOM.

Change character's name

Add a new character
*/


const url = "http://localhost:3000/characters"
const dropdown = document.querySelector('#character-names')
const detailedDiv = document.querySelector('#detailed-info')
console.log(detailedDiv)

populateDropdown()

dropdown.addEventListener('change', event => {
    
})

function populateDropdown(){
    fetch(url)
    .then(resp => resp.json())
    .then(characters => {
        characters.forEach(char => {
            const charName = document.createElement('option')
            charName.value = char.name
            charName.textContent = char.name
            dropdown.appendChild(charName)
        })
    })
}
