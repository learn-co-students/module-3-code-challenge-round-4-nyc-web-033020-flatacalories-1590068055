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
            option.className =
            option.innerText = `${character.name}`
            selectDrop.append(option)
        })
    }

    document.addEventListener("click", event => {
        if (event.target.parentNode.id === "character-names")
            console.log("Im clicking the select drop")
    })
    getCharacters()


})