URL = 'http://localhost:3000/characters'
document.addEventListener('DOMContentLoaded', () => {

fetch(URL)
.then(res => res.json())
.then(chars => renderDropdown(chars))
})

const renderDropdown = chars => {
    chars.forEach(char => {
        const dropdown = document.querySelector('#character-names')
        const option = document.createElement('option')
        option.setAttribute('data-num', '${char.id}')
        option.textContent = char.name
        dropdown.append(option)
        dropdown.addEventListener('change', e=> {
            if (e.target.value === char.name){                
                const charImg = document.querySelector('#image')
                charImg.src = `${char.image}`
                charImg.previousElementSibling.textContent = char.name
            }
        })
    })
}

document.addEventListener('submit', e => {
    e.preventDefault()
    const calForm = document.querySelector('#calories-form')
    let calories = document.querySelector('#calories')
    let newCals = calForm.firstElementChild.nextElementSibling.value
    calories.textContent = newCals
    fetch(URL + e.target.id, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            "calories": 1
        })
    })
})





//   MAIN DELIVERABLES
// [X] list char names in dropdown (get)
// [X] listener 'change' will display will show char in #detailed-info div
// [] form.input.value will replace #calories.textContent upon 'submit'