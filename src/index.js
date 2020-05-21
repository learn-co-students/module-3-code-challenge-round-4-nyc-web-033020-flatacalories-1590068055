// As a user, I can:

// [x]1. See all character's name in the dropdown menu by **requesting** data from the server

// [x]2. Select a character from drop down menu and see character's info inside `#detailed-info` div. 

// 3. Clicks on "Add Calories" button to add calories to a Character. Persist calories value to the server and update the DOM.

document.addEventListener('DOMContentLoaded', ()=>{
    const url = "http://localhost:3000/characters"
    const dropdown = document.querySelector('#character-names')
    const charInfo = document.querySelector("#detailed-info")
    const caloriesForm = document.querySelector('#calories-form')
    const addingCalories = document.querySelector('#calories')

    
    fetch(url)
    .then(response => response.json())
    .then(charData => renderCharacter(charData))
    // .then((data)=>{console.log(data)})
    function renderCharacter(charData){
        dropdown.innerHTML = `<option selected disabled>Select a Character</option>`
        charData.forEach((char)=>{
            let option = document.createElement('option')
            option.innerText = char.name
            dropdown.appendChild(option)
        })
        document.addEventListener('change', function(event){
            if (event.target === dropdown){
                charData.forEach((char)=>{
                    if (event.target.value === char.name){
                        charInfo.innerHTML = 
                        `<p id="name">${char.name}</p>
                        <img id="image" src="${char.image}"><!-- display character image here -->
                        <h4>Total Calories: <span id="current-calories">${char.calories}</span> </h4>
                        <form id="calories-form">
                            <input type="hidden" value="${char.id}" id="${char.id}"/> <!-- Assign character id as a value here -->
                            <input id= "calories" type="text" placeholder="Enter Calories"/>
                            <input id= "add-calories" type="submit" value="Add Calories"/>
                        </form>
                        <button id="reset-btn">Reset Calories</button>`
                    }
                })
            }
        })
        document.addEventListener('submit', function(event){
            event.preventDefault()
            let calorieChange = document.querySelector("#calories").value
            let updateName = charInfo.querySelector("#name").innerText
            let updateImage = charInfo.querySelector("#image").src
            let updateID = charInfo.querySelector("#calories-form").children[0].value
            let currentCalories = charInfo.querySelector("#current-calories").innerText
            let updateCalories = Number(currentCalories) + Number(calorieChange)
            console.log(updateID)
            console.log(url+`/`+updateID)
            fetch(url+`/`+updateID,{
                method: "PATCH",
                header: {"content-type":"application/json"},
                body: JSON.stringify({
                    id: updateID,
                    name: updateName,
                    image: updateImage,
                    calories: updateCalories
                })
            })
            .then(response=> response.json())
            charInfo.querySelector("#calories-form").reset()
            fetch(url)
            .then(response => response.json())
            .then(charData => renderCharacter(charData))
        })
    }
})