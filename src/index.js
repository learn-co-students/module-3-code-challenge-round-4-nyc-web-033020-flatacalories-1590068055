document.addEventListener("DOMContentLoaded", function(){
    const characterMenu = document.getElementById("dropdown") 
    const characterDetails = document.getElementById("character-info") 
    function getCharacters() {
        fetch('http://localhost:3000/characters') 
            .then(resp => resp.json()) 
            .then(characters => renderCharacters(characters)) 
    } 

    // Render Character Names 
    function renderCharacters(characters) {
        const characterOptions = document.getElementById("character-names") 
        characters.forEach(character => {
            const characterSelect = document.getElementById("character-names").value 
            characterSelect.id = character.id 
            characterSelect.innerText = character.name 
            characterOptions.append(characterSelect) 
        }) 
    } 

    // Listen for dropdown option select. 
    function characterShow() {
        const characterOptions = document.getElementById("character-names") 
        characterOptions.addEventListener("click", e => {
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
        const calorieForm = document.getElementById('calories-form') 
    }
})