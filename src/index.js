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
    caloriesTag.innerHTML = `${obj.caloriesTag}`
    console.log(nameTag, imageTag, caloriesTag)
}


viewCharacter('something')


fetch(url).then(res => res.json()).then(char => characterSelector(char))


 function characterSelector(array){
    array.forEach(character => {
      const optionTag = document.createAttribute('option')
      optionTag.innerHTML = `${character.name}`
      selecter.insertRow(optionTag)
    })
 }





})