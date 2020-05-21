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
document.addEventListener('submit', (event)=> {
        event.preventDefault()
        console.log('I am Working')
     addCalories()
})

function addCalories(){
    let characterFind1 = document.getElementById(1)
    let characterCalorieId = parseInt(characterFind1.id)
    fetch(`${characterUrl}/${characterCalorieId}`,{
        method: "PATCH",
        headers:{"Content-Type": "application/json",
                "Accept": "application/json"},
        body: JSON.stringify({
            // neededed to finish Deliverable 1 and 2 are done
        })
    })
}



characterDrop.addEventListener('change', (event)=>{    
     if(event.target.value === "Mr. Cute"){
        console.log('Mr.Cute')
        getCharacterInfo1()
    }
    else if(event.target.value === "Mr. Monkey"){
        console.log('Mr. Monkey')
        getCharacterInfo2()
    }
    else if(event.target.value === "Miss. Zebra"){
        console.log('Miss. Zebra')
        getCharacterInfo3()
    }
    else if(event.target.value === "Master Lion"){
        console.log('Master Lion')
        getCharacterInfo4()
    }
    else if(event.target.value === "Mr. Panda"){
        console.log('Pnada XD')
        getCharacterInfo5()
    }
    else if(event.target.value === "Mrs. Monkey"){
        console.log('Mrs.Monkey')
        getCharacterInfo6()
    }
})


function getCharacterInfo1(){
    let characterId1 = 1
    fetch(`${characterUrl}/${characterId1}`)
    .then (response => response.json())
   .then (data => setUpCharacter1(data))
}

function setUpCharacter1(data){
    let characterCard1 = document.querySelector('#detailed-info')
    characterCard1.innerHTML = `<div id="detailed-info">
    <p id="${data.id}">${data.name}</p>
    <img id="image" src="${data.image}"><!-- display character image here -->
    <h4>Total Calories: <span id="calories">${data.calories}</span> </h4>
    <form id="calories-form">
        <input type="hidden" value="Character's id" id="characterId"/> <!-- Assign character id as a value here -->
        <input type="text" placeholder="Enter Calories"/>
        <input type="submit" value="Add Calories"/>
    </form>
    <button id="reset-btn">Reset Calories</button>
</div>`
}

function getCharacterInfo2(){
    let characterId2 = 2
    fetch(`${characterUrl}/${characterId2}`)
    .then (response => response.json())
   .then (data => setUpCharacter2(data))
}

function setUpCharacter2(data){
    let characterCard2 = document.querySelector('#detailed-info')
    characterCard2.innerHTML = `<div id="detailed-info">
    <p id=${data.id}>${data.name}</p>
    <img id="image" src="${data.image}"><!-- display character image here -->
    <h4>Total Calories: <span id="calories">${data.calories}</span> </h4>
    <form id="calories-form">
        <input type="hidden" value="Character's id" id="characterId"/> <!-- Assign character id as a value here -->
        <input type="text" placeholder="Enter Calories"/>
        <input type="submit" value="Add Calories"/>
    </form>
    <button id="reset-btn">Reset Calories</button>
</div>`
}

function getCharacterInfo3(){
    let characterId3 = 3
    fetch(`${characterUrl}/${characterId3}`)
    .then (response => response.json())
   .then (data => setUpCharacter3(data))
}

function setUpCharacter3(data){
    let characterCard3 = document.querySelector('#detailed-info')
    characterCard3.innerHTML = `<div id="detailed-info">
    <p id=${data.id}>${data.name}</p>
    <img id="image" src="${data.image}"><!-- display character image here -->
    <h4>Total Calories: <span id="calories">${data.calories}</span> </h4>
    <form id="calories-form">
        <input type="hidden" value="Character's id" id="characterId"/> <!-- Assign character id as a value here -->
        <input type="text" placeholder="Enter Calories"/>
        <input type="submit" value="Add Calories"/>
    </form>
    <button id="reset-btn">Reset Calories</button>
</div>`
}

function getCharacterInfo4(){
    let characterId4 = 4
    fetch(`${characterUrl}/${characterId4}`)
    .then (response => response.json())
   .then (data => setUpCharacter4(data))
}

function setUpCharacter4(data){
    let characterCard4 = document.querySelector('#detailed-info')
    characterCard4.innerHTML = `<div id="detailed-info">
    <p id=${data.id}>${data.name}</p>
    <img id="image" src="${data.image}"><!-- display character image here -->
    <h4>Total Calories: <span id="calories">${data.calories}</span> </h4>
    <form id="calories-form">
        <input type="hidden" value="Character's id" id="characterId"/> <!-- Assign character id as a value here -->
        <input type="text" placeholder="Enter Calories"/>
        <input type="submit" value="Add Calories"/>
    </form>
    <button id="reset-btn">Reset Calories</button>
</div>`
}

function getCharacterInfo5(){
    let characterId5 = 5
    fetch(`${characterUrl}/${characterId5}`)
    .then (response => response.json())
   .then (data => setUpCharacter5(data))
}

function setUpCharacter5(data){
    let characterCard5 = document.querySelector('#detailed-info')
    characterCard5.innerHTML = `<div id="detailed-info">
    <p id=${data.id}>${data.name}</p>
    <img id="image" src="${data.image}"><!-- display character image here -->
    <h4>Total Calories: <span id="calories">${data.calories}</span> </h4>
    <form id="calories-form">
        <input type="hidden" value="Character's id" id="characterId"/> <!-- Assign character id as a value here -->
        <input type="text" placeholder="Enter Calories"/>
        <input type="submit" value="Add Calories"/>
    </form>
    <button id="reset-btn">Reset Calories</button>
</div>`
}

function getCharacterInfo6(){
    let characterId6 = 6
    fetch(`${characterUrl}/${characterId6}`)
    .then (response => response.json())
   .then (data => setUpCharacter6(data))
}

function setUpCharacter6(data){
    let characterCard6 = document.querySelector('#detailed-info')
    characterCard6.innerHTML = `<div id="detailed-info">
    <p id=${data.id}>${data.name}</p>
    <img id="image" src="${data.image}"><!-- display character image here -->
    <h4>Total Calories: <span id="calories">${data.calories}</span> </h4>
    <form id="calories-form">
        <input type="hidden" value="Character's id" id="characterId"/> <!-- Assign character id as a value here -->
        <input type="text" placeholder="Enter Calories"/>
        <input type="submit" value="Add Calories"/>
    </form>
    <button id="reset-btn">Reset Calories</button>
</div>`
}