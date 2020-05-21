document.addEventListener("DOMContentLoaded", () => {
    const selectDrop = document.querySelector("#character-names")
    const characterInfo = document.querySelector(".characterInfo")
    const form = document.querySelector("form")

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

    const getCharacter = () => {
        selectDrop.addEventListener("change", event => {
            fetch(`http://localhost:3000/characters/1`)
                .then(response => response.json())
                .then((renderCharacter))

        })
    }

    const renderCharacter = character => {
        let div = document.querySelector("#detailed-info")
        div.innerHTML =
        `
        <p id="name">${character.name}</p>
        <img id="image" src="${character.image}">
        `
        characterInfo.insertAdjacentElement(afterbegin, div)
    }

    document.addEventListener("submit", function(event){
        event.preventDefault()
        const calorieSpan = event.target.parentElement.querySelector("span")
        let calories = parseInt(calorieSpan.innerText) 
        calories += 1

        fetch(`http://localhost:3000/characters/1`, {
            method:'PATCH',
            headers: {
                "accept": "application/json",
                "content-type": "application/json"
            },
            body: JSON.stringify({
                calories: `${calories}`
            })
        })
        .then(response => response.json())
        .then(calorieSpan.innerHTML = `Total Calories: ${calories}`)
    })


    getCharacters()
    getCharacter()


})

            // const result = document.querySelector('.result');
            // const option = document.getElementsByTagName("option")
            // const option = document.createElement("option")
            // option.dataset.id = character.id

            // console.log(event.target.dataset.id)

            // const id = event.target.dataset.id