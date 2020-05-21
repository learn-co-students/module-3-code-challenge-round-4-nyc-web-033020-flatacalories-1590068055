URL = 'http://localhost:3000/characters'
const dropdown = document.querySelector('#character-names')
const calForm = document.querySelector('#calories-form')
let calories = document.querySelector('#calories')

document.addEventListener('DOMContentLoaded', () => {
fetch(URL)
.then(res => res.json())
.then(chars => renderDropdown(chars))
})

const renderDropdown = chars => {
    chars.forEach(char => {
        // dropdown.setAttribute('data-num', `${char.id}`)
        const option = document.createElement('option')
        option.textContent = char.name
        dropdown.append(option)
        dropdown.addEventListener('change', e=> {
            if (e.target.value === char.name){ 
                calForm.firstElementChild.value = char.id            
                const charImg = document.querySelector('#image')
                charImg.src = `${char.image}`
                charImg.previousElementSibling.textContent = char.name
                calories.textContent = char.calories
            }
        })
    })
}

document.addEventListener('submit', e => {
    e.preventDefault()
    let newCals = calForm.firstElementChild.nextElementSibling.value
    calories.textContent = newCals
    charId = calForm.firstElementChild.value

    fetch(URL + '/' + charId, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            "calories": newCals
        })
    })
    .then(res => res.json())
    .then(console.log)
})





//   MAIN DELIVERABLES
// [X] list char names in dropdown (get)
// [X] listener 'change' will display will show char in #detailed-info div
// [] form.input.value will replace #calories.textContent upon 'submit'