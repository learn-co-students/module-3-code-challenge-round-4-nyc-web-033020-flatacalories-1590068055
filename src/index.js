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
        const characterSelect = document.getElementById("character-names").value 
        document.getElementById("name").innerHTML = characterSelect 
        characters.forEach(character => {
            
        })
        
    }
})