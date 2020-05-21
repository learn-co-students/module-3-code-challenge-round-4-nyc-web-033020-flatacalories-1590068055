document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('character-names')
    const name = document.getElementById('name')
    const image = document.getElementById('image')
    const calories = document.getElementById('calories')
    const form = document.getElementById('calories-form')
    const resetBtn = document.getElementById('reset-btn')
    
    fetch('http://localhost:3000/characters')
    .then(resp => resp.json())
    .then(characters => {
        characters.map( character =>{
            let option = document.createElement('option')
            option.id = character.id
            option.innerHTML =`${character.name}`
            select.appendChild(option)
        })
    })
    
    select.addEventListener('change', (e) => {
        const formId = document.getElementById('characterId')
        let characterId = e.target.dataset.id 
        let collection = e.target.children
        for( element of collection){
            if( e.target.value === element.innerHTML){
                characterId = element.id
                formId.value = element.id
            }
        }
        fetch(`http://localhost:3000/characters/${characterId}`)
        .then(resp => resp.json())
        .then( character => {
            name.innerHTML = character.name
            image.src = character.image
            calories.innerHTML = character.calories
        })
    })

            
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        if(isNaN(event.target[1].value) || event.target[1].value === ""){
            form.reset()
            return alert("Please enter a correct value")
        } else {
            fetch(`http://localhost:3000/characters/${event.target[0].value}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    calories: parseInt(calories.innerHTML) + parseInt(event.target[1].value)
                })
            }).then(resp => resp.json())
            .then(character => {
                calories.innerHTML = character.calories
            })
            form.reset()
        }
    })

    resetBtn.addEventListener('click', () => {
        fetch(`http://localhost:3000/characters/${form[0].value}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                calories: 0
            })
        }).then(() => { calories.innerHTML = 0})
    })
})