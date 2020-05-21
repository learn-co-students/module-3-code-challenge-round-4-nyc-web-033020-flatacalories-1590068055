document.addEventListener("DOMContentLoaded", function(){
    const characterMenu = document.getElementById("dropdown") 
    const characterDetails = document.getElementById("character-info") 
    document.addEventListener("click", handleEvents)
    const calorieForm = document.getElementById("calories-form") 
    function getCharacters() {
        fetch('http://localhost:3000/characters') 
            .then(resp => resp.json()) 
            .then(characters => renderCharacters(characters)) 
    } 

    // Render Character Names 
    function renderCharacters(characters) {
        const characterMenu = document.getElementById("character-names") 
        characters.forEach(character => {
            const characterSelect = document.getElementById("character-names").value 
            let characterOption = document.createElement("option") 
            console.log(characterOption)
            characterSelect = document.getElementById("name") 
            characterSelect.id = character.id 
            characterSelect.innerText = character.name  
            characterOption.appendChild(characterSelect)
            characterMenu.appendChild(characterOption)  
        }) 
    } 

    // Listen for dropdown option select. 
    function characterShow() {
        const characterMenu = document.getElementById("character-names") 
        characterMenu.addEventListener("click", e => {
            const character_id = e.target.id 
            fetch(`http://localhost:3000/characters/${character_id}`) 
                .then(resp => resp.json()) 
                .then(char => renderCharacter(char)) 
        })
    } 

    function renderCharacter(char) {
        const characterInfo = document.getElementById("characterInfo") 
        const detailedInfo = document.getElementById("detailed-info") 
        detailedInfo.dataset.char = char.id 
        let charName = document.getElementById("name") 
        charName.innerHTML = char.name 
        let charImage = document.getElementById("image") 
        charImage.src = char.image 
        let charCalories = document.getElementById("calories") 
        charCalories.innerText = `${char.calories} Calories` 
        detailedInfo.append(charName, charImage, charCalories) 
    } 

    function handleEvents(e) {
        e.preventDefault() 
        if (e.target === "submit") {
            editChar(id) 
        } else if (e.target === calorieForm) {
            calorieEventHandler(e) 
        }
    } 

    function editChar(id) {
        fetch(`http://localhost:3000/characters/${id}`) 
            .then(res => res.json()) 
            .then(character => {
                calorieForm.id.value = character.id,
                calorieForm.calories.value = character.calories 
            })
    }

    function calorieEventHandler(e) {
        let character = {
            name: e.target.parentElement.name.value, 
            calories: e.target.parentElement.calories.value 
        } 

        fetch(`http://localhost:3000/characters/${e.target.parentElement.dataset.id}`, {
            method: "PATCH", 
            headers: {
                'Content-Type': "application/json", 
                Accept: "application/json"
            }, 
            body: JSON.stringify(character) 
        }) 
        .then(res => res.json()) 
        .then(character => {
            let characterFound = document.querySelector('characterId') 
            characterFound.children[0].innerText = character.name 
            characterFound.children[1].innerText = character.calories  
        })
    }

})