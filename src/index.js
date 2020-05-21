//   MAIN DELIVERABLES
// [X] list char names in dropdown (get)
// [X] listener 'change' will display will show char in #detailed-info div
// [X] form.input.value will replace #calories.textContent upon 'submit'

//   BONUS DELIVERABLES
// [X] reset calories button function (patch)
// [] edit chars name (get/post)
// [] add new char (post)


URL = 'http://localhost:3000/characters'
const dropdown = document.querySelector('#character-names')
const calForm = document.querySelector('#calories-form')
let calories = document.querySelector('#calories')

document.addEventListener('DOMContentLoaded', () => {
fetch(URL)
.then(res => res.json())
.then(chars => renderDropdown(chars))
resetCals()
editChar()
})

const renderDropdown = chars => {
    chars.forEach(char => {
        const option = document.createElement('option')
        option.textContent = char.name
        option.setAttribute('data-num', `${char.id}`)
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
            "calories": parseInt(newCals)
        })
    })
})

const resetCals = () => {
    const resetBtn = document.querySelector('#reset-btn')
    resetBtn.addEventListener('click', e => {
        charId = calForm.firstElementChild.value
        calories.textContent = 0
        fetch(URL + '/' + charId, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                "calories": 0
            })
        })
    })
}

const editChar = () => {
    const dropdownDiv = document.querySelector('.dropdown')
    const newDiv = document.createElement('div')
    newDiv.style.paddingTop = '20px'
    newDiv.innerHTML =
    `
    <button id="editCharacter">Edit Character</button>
    `
    dropdownDiv.append(newDiv)
    const editForm = document.createElement('form')
    editForm.setAttribute('id', 'editForm')
    editForm.style.display = 'none'
    editForm.style.paddingTop = '20px'
    editForm.innerHTML = 
    `
    <input type="text" id="charName"/>
    <br>
    <input type="text" id="charImage"/>
    <br>
    <input type="text" id="charCalories"/>
    <br>
    <input type="submit" value="Update" style="margin-top:10px;"/>
    `
    newDiv.append(editForm)
    const editBtn = document.querySelector('#editCharacter')
    editBtn.addEventListener('click', e => {
        editForm.style.display = 'block'
        
        // e.preventDefault()
        // fetch(URL, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         // "name": ,
        //         // "image": ,
        //         // "calories": 
        //     })
        // })
    })
}







// THE BELOW CODE IS INTERFERRING WITH THE MAIN DELIVERABLES.
// MY BEST GUESS IS BECAUSE IT'S LISTENING FOR CLICKS ON THE DOC
// RESOLVED ISSUE IN resetCals()

// document.addEventListener('click', e => {
//     if (e.target.id === 'reset-btn')
//     
//     let newCals = calForm.firstElementChild.nextElementSibling.value
//     calories.textContent = newCals
//     charId = calForm.firstElementChild.value

//     fetch(URL + '/' + charId, {
//         method: 'PATCH',
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//         },
//         body: JSON.stringify({
//             "calories": parseInt(newCals)
//         })
//     })
// })




