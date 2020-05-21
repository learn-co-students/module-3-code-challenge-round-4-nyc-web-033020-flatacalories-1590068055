document.addEventListener("DOMContentLoaded", function(){
    const characterMenu = document.getElementById("dropdown") 
    const characterDetails = document.getElementById("character-info") 
    function getCharacters() {
        fetch('http://localhost:3000/characters') 
            .then(resp => resp.json()) 
            .then(json => renderCharacters(character)) 
    } 

    
})