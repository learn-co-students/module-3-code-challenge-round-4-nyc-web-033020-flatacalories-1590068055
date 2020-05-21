document.addEventListener('DOMContentLoaded', function(){

const url = 'http://localhost:3000/characters'
const selecter = document.querySelector('#character-names')

function viewCharacter(obj){
    const nameTag = document.querySelector('#name')
    const imageTag = document.querySelector('#image')
    const caloriesTag = document.querySelector('#calories')

    nameTag.innerHTML = `${obj.name}`
    imageTag.src = `${obj.image}`
    caloriesTag.innerHTML = `${obj.calories}`
}

fetch(url).then(res => res.json()).then(char => characterSelector(char))

document.addEventListener('click', function(e){
    e.preventDefault()
    if (e.target.value == 'Add Calories'){
            const form = document.querySelector('form')
            const addedCals = parseInt(form.querySelectorAll('input')[1].value)
            const currentCals = parseInt(document.querySelector('#calories').innerHTML)
            const newTotalCals = currentCals + addedCals
            const characterEating = selecter.value
                fetch(url).then(res => res.json()).then(characters => {
                    characters.forEach(character => {
                            if (character.name == characterEating){
                                   const id = character.id 
                                   fetch(`${url}/${id}`, {
                                    method: 'PATCH',
                                    headers: {
                                        "content-type": "appliaction/json",
                                        accept: "appliaction/json"
                                    }, 
                                    body: JSON.stringify({
                                        "calories": newTotalCals
                                    })
                                })
                            }         
                    })
                })
    }
})







 function characterSelector(array){
    array.forEach(character => {
      const optionTag = document.createElement('option')
      optionTag.innerHTML = `<p '[data-set='${character.id}']'> ${character.name} </p>`
      selecter.add(optionTag)
    })
 }


 selecter.addEventListener('change', function(e){
      const characterName = e.target.value
      fetch(url).then(res => res.json()).then(characters => {
          characters.forEach(char => {
              if (char.name == characterName){
                viewCharacter(char)
              }
          })
      })
 })





})