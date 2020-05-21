document.addEventListener("DOMContentLoaded", () => {
    const selectDrop = document.querySelector("#character-names")

    const getCharacters = () => {
        fetch(`http://localhost:3000/characters`)
            .then(response => response.json())
            .then(renderCharacters)
    }

    const renderCharacters = characters => {
        characters.forEach(character => {
            const option = document.createElement("option")
            option.dataset.id = character.id
            option.innerText = `${character.name}`
            selectDrop.append(option)
        })
    }

    selectDrop.addEventListener("change", event => {
        fetch(`http://localhost:3000/characters/`)                
     })
    getCharacters()


})