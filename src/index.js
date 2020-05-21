document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('character-names')
    const name = document.getElementById('name')
    const image = document.getElementById('image')
    const calories = document.getElementById('calories')
    const form = document.getElementById('calories-form')

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
        let characterId = e.target.dataset.id 
        let collection = e.target.children
        for( element of collection){
            if( e.target.value === element.innerHTML){
                characterId = element.id
            }
        }
        fetch(`http://localhost:3000/characters/${characterId}`)
        .then(resp => resp.json())
        .then( character => {
            name.innerHTML = character.name
            image.src = character.image
            calories.innerHTML = character.calories

            // let characterCal = calories.innerHTML
            form.addEventListener('submit', (e) => {
                e.preventDefault()
                fetch(`http://localhost:3000/characters/${characterId}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        calories: parseInt(calories.innerHTML) + parseInt(e.target[1].value)
                    }),
                }).then(resp => resp.json())
                .then(character => {
                    console.log(character)
                })
                
            })
        })
    })




})