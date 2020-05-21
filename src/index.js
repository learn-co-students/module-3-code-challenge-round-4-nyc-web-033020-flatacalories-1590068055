const charactersUrl = "http://localhost:3000/characters"
const selectMenu = document.getElementById("character-names")
const detailedInfoDiv = document.getElementById("detailed-info")


document.addEventListener('DOMContentLoaded', () => {

  fetch(charactersUrl)
  .then(resp => resp.json())
  .then(addCharactersToSelect)

});

const addCharactersToSelect = (characters) => {
  
  characters.forEach(character => {
    const characterOption = createCharacterOption(character)
    selectMenu.appendChild(characterOption)
  });
};

const createCharacterOption = (character) => {
  const characterOption = document.createElement('option')
  characterOption.dataset.characterId = character.id
  characterOption.textContent = `${character.name}`
  return characterOption
};

selectMenu.addEventListener('change', (e) => {
  // console.log(e.target)
  // console.log(e.target[e.target.options.selectedIndex].dataset.characterId)
  const characterId = e.target[e.target.options.selectedIndex].dataset.characterId
  fetch(`${charactersUrl}/${characterId}`)
  .then(resp => resp.json())
  .then(addCharacterToDetailedInfo)

});

const addCharacterToDetailedInfo = (character) => {
  const namePar = document.getElementById('name')
  const characterImg = document.getElementById('image')
  const caloriesSpan = document.getElementById('calories')
  const formIdInput = document.getElementById('characterId')

  namePar.textContent = character.name
  characterImg.src = character.image
  caloriesSpan.textContent = character.calories
  formIdInput.value = character.id
};

document.addEventListener('submit', (e) => {
  e.preventDefault()
  const form = e.target
  const characterId = form.children[0].value
  const characterCalories = parseInt(document.getElementById('calories').textContent, 10)
  // const characterCalories = form.parentNode.children[2].children[0]
  caloriesSum = parseInt(form.children[1].value, 10) + characterCalories

  // console.log(caloriesSum)
  const formData = {
    calories: caloriesSum
  }

  updateCharacter(characterId, formData)

  form.reset()
});

const updateCharacter = (id, newData) => {
  fetch(`${charactersUrl}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(newData)
  })
  .then(resp => resp.json())
  .then(character => {
    // console.log(character)
    // console.log(detailedInfoDiv)
    const calories = document.getElementById("calories").textContent
    calories = character.calories     
  })
};