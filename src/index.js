// See all character's name in dropdown by GET from server
// Select character in dropdown -> see character's info inside #detailed-info
// Clicks on "Add Calories" button to add calories to a Character. Persist calories value to the server and update the DOM.

url = "http://localhost:3000/characters"

document.addEventListener('DOMContentLoaded', (event) => {
  // get from server, add to dropdown
  fetch(url)
    .then(res => res.json())
    .then(characters => {
      const dropDown = document.querySelector('#character-names')
      characters.forEach(c => addToDropdown(c, dropDown))
      dropDown.addEventListener('change', event => {
        const infoDiv = document.querySelector('#detailed-info')
        displayCharacter(event.target.value, infoDiv)
      })
    })
})

function displayCharacter(characterId, div) {
  fetch(`${url}/${characterId}`)
    .then(res => res.json())
    .then(character => {
      console.log(character)
      div.querySelector('#name').textContent = character.name
      div.querySelector('#image').setAttribute('src', character.image)
      div.querySelector('#calories').textContent = character.calories
      div.querySelector('#characterId').value = characterId
    })
}

function addToDropdown(character, dropDown) {
  const option = document.createElement('option')
  option.innerText = character.name
  option.setAttribute('value', character.id)
  dropDown.appendChild(option)
}

