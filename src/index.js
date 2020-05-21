const characterUrl = 'http://localhost:3000/characters'
const characterDrop = document.querySelector('#character-names')
document.addEventListener("DOMContentLoaded", ()=> {
getCharacterName()
})
function getCharacterName(){
    fetch(characterUrl)
    .then (response => response.json())
    .then (data => seeCharacters(data))
}

function seeCharacters(data){
data.forEach(character => addCharactersToList(character))
}

function addCharactersToList(character){
    const characterList = document.createElement('option') 
    characterList.className = character.id
    characterList.innerHTML = `${character.name}`
    characterDrop.appendChild(characterList)
}
 characterDrop.addEventListener('change', (event)=>{    
     if(event.target.value === "Mr. Cute"){
        console.log('Mr.Cute')
        getCharacterInfo1()
    }
    else if(event.target.value === "Mr. Monkey"){
        console.log('Mr. Monkey')
    }
})


function getCharacterInfo1(){
    let characterId1 = 1
    fetch(`${characterUrl}/${characterId1}`)
    .then (response => response.json())
   .then (data => console.log(data))
}
