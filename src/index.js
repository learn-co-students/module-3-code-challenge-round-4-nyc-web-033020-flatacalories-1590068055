//make GET request to characters 
//add eventlistener to dropdown menu 


document.addEventListener('DOMContentLoaded', () => {
    const baseUrl = 'http://localhost:3000/characters'
    const dropDown = document.getElementById('character-names')
    const option = dropDown.getElementsByTagName('option')

    const getChar = () => {
        fetch(baseUrl)
        .then(res => res.json())
        .then(allChars)
    }

    const allChars = chars => {

        const charLi = document.createElement('li')
        dropDown.addEventListener('click', event => {
            chars.forEach(char => {
                charLi.innerHTML = char.name
            })
        })
        option.append(charLi)
    }

 




    // getChar()
})