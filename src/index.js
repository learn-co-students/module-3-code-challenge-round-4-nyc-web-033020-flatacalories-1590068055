// √As a user I should see all of the names when I click on the dropdown menu

// √when i click on the name, the screen should populate with character's information 

// I should be able to enter a number within the text field and when I click add calories I should see 
// a new total, the data should be unique

document.addEventListener('DOMContentLoaded', e =>{
    // console.log('page loaded')
    const BASEURL = 'http://localhost:3000'
    const dropDownElement = document.querySelector('#character-names')
    const characters = document.querySelector('option')
    const characterNameElement = document.querySelector('#name')
    const characterImageElement = document.querySelector('#image')
    const characterCaloriesElement = document.querySelector('#calories')
    const formIdPlacement = document.querySelector('#characterId')

    fetch(`${BASEURL}/characters`)
    .then(res => res.json())
    .then(characters => {

        characters.forEach(character => {
            const characterOption = document.createElement('option')
            // console.dir(characterOption)
            
            // dropDownElement.dataset.id = character.id
            characterOption.value = character.id
            characterOption.textContent = character.name

            dropDownElement.append(characterOption)
            // console.log(characterOption)
        });


    })
    
    dropDownElement.addEventListener('change', e => {
        const characterId =  e.target.value

        fetch(`${BASEURL}/characters/${characterId}`)
        .then(res => res.json())
        .then(character => {
            const name = character.name
            const image = character.image
            const calories = character.calories

            formIdPlacement.value = characterId 

            characterNameElement.innerText = name
            characterImageElement.src = `${image}`
            characterCaloriesElement.innerText = parseInt(calories)
        
        })

        

    })

    document.addEventListener('submit', e => {
        e.preventDefault()
        const form = e.target
        const characterId = form[0].value
        const newCalories = parseInt(form[1].value)

        const currentCalories = parseInt(characterCaloriesElement.innerText)
        const totalCalories = currentCalories + newCalories


        fetch(`${BASEURL}/characters/${characterId}`, {
            method: 'PATCH',
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'

            },
            body: JSON.stringify({calories: totalCalories})
        })
        .then(res => res.json())
        .then(character => {
            form.reset()
            const name = character.name
            const image = character.image
            const calories = character.calories

            formIdPlacement.value = characterId 

            characterNameElement.innerText = name
            characterImageElement.src = `${image}`
            characterCaloriesElement.innerText = parseInt(calories)
        
        })

    })



})