const charactersUrl = "http://localhost:3000/characters"
const selectMenu = document.getElementById("character-names")


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

});