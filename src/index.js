const _CHARURL = 'http://localhost:3000/characters'
const characterDropdown = document.querySelector("#character-names")
const charactersInfo = document.getElementById("detailed-info")

//See all character's name in the dropdown menu by requesting data from the server

//1.) get data from server
const fetchCharacters = () => 
fetch(_CHARURL)
.then(resp => resp.json())
.then(json => populateDropdown(json))

fetchCharacters()

//1b.) populate dropdown with server data 
const populateDropdown = characters => {
    characters.forEach(character => {
        const characterOption = document.createElement('option')
        characterDropdown.appendChild(characterOption)
        characterOption.innerHTML = `${character.name}`
        characterOption.id = `${character.id}`
        console.log(character.id)
    })
}
characterDropdown.addEventListener('change', event => {
    if (event) {
    const usersChoice = event.target.selectedOptions[0].id
    charactersInfo.innerHTML = `
    <p id="name">${name}</p>
    <img id="image" src=${image}><!-- display character image here -->
    <h4>Total Calories: <span id="calories">Character's Calories</span> </h4>
    <form id="calories-form">
    <input type="hidden" value="$.id}" id="characterId"/> <!-- Assign character id as a value here -->
    <input type="text" placeholder="Enter Calories"/>
    < input type="submit" value="Add Calories"/>
    </form>
`
}
//see character's info
//add statement to capture diff selections



})

//const populateCharacterDiv = characters => {
        //2.) populate detailed info with w/ character info
//}






//Clicks on "Add Calories" button to add calories to a Character. 
        //3.) add event listener to add calories button to increase calories
//Persist calories value to the server and update the DOM.
       // 4.) send patch request with updated calories
       //4b.) fetch data again to reflect updates

