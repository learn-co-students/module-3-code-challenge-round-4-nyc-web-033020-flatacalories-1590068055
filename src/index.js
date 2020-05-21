const _CHARURL = 'http://localhost:3000/characters'
const characterDropdown = document.querySelector("#character-names")



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
        console.log(character)
        const characterLi = document.createElement('option')
        characterDropdown.appendChild(characterLi)
        characterLi.innerHTML = `${character.name}`
    })
}

//Select a character from drop down menu and see character's info inside 
//#detailed-info div.
        //2.) populate detailed info with w/ character info
//Clicks on "Add Calories" button to add calories to a Character. 
        //3.) add event listener to add calories button to increase calories
//Persist calories value to the server and update the DOM.
       // 4.) send patch request with updated calories
       //4b.) fetch data again to reflect updates

