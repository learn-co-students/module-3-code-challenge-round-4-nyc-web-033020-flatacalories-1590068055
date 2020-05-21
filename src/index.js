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
            const charImg = document.querySelector('#image')
            console.log(charImg)
        })
    })
}





//   MAIN DELIVERABLES
// [X] list char names in dropdown (get)
// [] listener 'change' will display will show char in #detailed-info div
// [] form.input.value will replace #calories.textContent upon 'submit'