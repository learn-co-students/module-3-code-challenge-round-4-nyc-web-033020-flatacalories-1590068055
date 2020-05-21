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

document.addEventListener('submit', (event) => {
  if (event.target.getAttribute('id') === 'calories-form') {
    event.preventDefault()
    // console.log(event)
    // console.log(event.target)
    const inputs = event.target.querySelectorAll('input')
    const characterId = inputs[0].value
    const calories = parseInt(inputs[1].value)

    const caloriesSpan = event.target.parentElement.querySelector('#calories')
    const oldCalories = parseInt(caloriesSpan.textContent)
    console.log(characterId, calories, oldCalories)

    fetch(`${url}/${characterId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        calories: oldCalories + calories,
      })
    }).then(res => res.json())
    .then(character => {
      caloriesSpan.textContent = character.calories
    })
  }
})

function displayCharacter(characterId, div) {
  fetch(`${url}/${characterId}`)
    .then(res => res.json())
    .then(character => {
      // console.log(character)
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

