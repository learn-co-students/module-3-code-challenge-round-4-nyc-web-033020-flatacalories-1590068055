document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('character-names')
    const name = document.getElementById('name')
    const image = document.getElementById('image')
    const calories = document.getElementById('calories')

    fetch('http://localhost:3000/characters')
    .then(resp => resp.json())
    .then(characters => {
        characters.map( character =>{
            let option = document.createElement('option')
            option.id = character.id
            option.innerHTML =`
            ${character.name}`
            select.appendChild(option)
        })
    })

    select.addEventListener('change', (e) => {
        let collection = e.target.children
        for( element of collection){
            if( e.target.value === element.innerHTML){
                e.target.dataset.id = element.id
            }
        }
        debugger
    })



})