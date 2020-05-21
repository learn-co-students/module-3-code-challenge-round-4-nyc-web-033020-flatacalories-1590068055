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
            document.getElementById("name").innerHTML = characterSelect 
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

    function renderCharacter(character) {
        const characterInfo = document.getElementById("characterInfo") 
        const detailedInfo = document.getElementById("detailed-info") 
    }
})