document.addEventListener('DOMContentLoaded', function(){

const url = 'http://localhost:3000/characters'
const selecter = document.querySelector('#character-names')

console.log(selecter)

function viewCharacter(obj){
    const nameTag = document.querySelector('#name')
    const imageTag = document.querySelector('#image')
    const caloriesTag = document.querySelector('#calories')

    nameTag.innerHTML = `${obj.name}`
    imageTag.src = `${obj.image}`
    caloriesTag.innerHTML = `${obj.calories}`
}


viewCharacter('something')


fetch(url).then(res => res.json()).then(char => characterSelector(char))

document.addEventListener('click',)







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