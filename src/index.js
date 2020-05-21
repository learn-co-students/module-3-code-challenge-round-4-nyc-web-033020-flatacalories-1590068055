const charactersUrl = "http://localhost:3000/characters"

document.addEventListener('DOMContentLoaded', () => {

  fetch(charactersUrl)
  .then(resp => resp.json())
  .then(addCharactersToSelect)

});

const addCharactersToSelect = (characters) => {
  const selectMenu = document.getElementById("character-names")
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