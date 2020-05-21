document.addEventListener('DOMContentLoaded', function(){

const url = 'http://localhost:3000/characters'
const selecter = document.querySelector('#character-names')
const nameTag = document.querySelector('#name')
const imageTag = document.querySelector('#image')
const caloriesTag = document.querySelector('#calories')

function viewCharacter(obj){


    nameTag.innerHTML = `${obj.name}`
    imageTag.src = `${obj.image}`
    caloriesTag.innerHTML = `${obj.calories}`
}

fetch(url).then(res => res.json()).then(char => characterSelector(char))


/// adding and reseting calories 
document.addEventListener('click', function(e){
    e.preventDefault()
    const form = document.querySelector('form')
    const addedCals = parseInt(form.querySelectorAll('input')[1].value)
    const currentCals = parseInt(document.querySelector('#calories').innerHTML)
    const newTotalCals = currentCals + addedCals
    const characterEating = selecter.value

    if (e.target.value == 'Add Calories'){
                fetch(url).then(res => res.json()).then(characters => {
                    characters.forEach(character => {
                            if (character.name == characterEating){
                                const id = character.id 
                                   console.log(`${url}/${id}`)
                                   fetch(`${url}/${id}`, {
                                    method: 'PATCH',
                                    headers: {
                                        "content-type": "application/json",
                                        accept: "application/json"
                                    }, 
                                    body: JSON.stringify({
                                        calories: newTotalCals
                                    })
                                }).then(res => res.json()).then(whatever => viewCharacter(whatever))
                            }         
                    })
                })
          form.reset()
    } else if (e.target.innerHTML == 'Reset Calories'){
        fetch(url).then(res => res.json()).then(characters => {
            characters.forEach(character => {
                    if (character.name == characterEating){
                        const id = character.id 
                           console.log(`${url}/${id}`)
                           fetch(`${url}/${id}`, {
                            method: 'PATCH',
                            headers: {
                                "content-type": "application/json",
                                accept: "application/json"
                            }, 
                            body: JSON.stringify({
                                calories: 0
                            })
                        }).then(res => res.json()).then(whatever => viewCharacter(whatever))
                    }         
            })
        })
    } else if (e.target.innerText == 'Click to Edit!'){
        const editBox = document.createElement('input')
         nameTag.appendChild(editBox)
         e.target.innerText = 'Click to Submit'
    } else if (e.target.innerText == 'Click to Submit'){
        const newValue = nameTag.querySelector('input').value
        fetch(url).then(res => res.json()).then(characters => {
            characters.forEach(character => {
                    if (character.name == characterEating){
                        const id = character.id 
                           console.log(`${url}/${id}`)
                           fetch(`${url}/${id}`, {
                            method: 'PATCH',
                            headers: {
                                "content-type": "application/json",
                                accept: "application/json"
                            }, 
                            body: JSON.stringify({
                                name: newValue
                            })
                        }).then(res => res.json()).then(whatever => viewCharacter(whatever))
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


 ////change chacter 
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