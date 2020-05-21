//√make GET request to characters 
//√add character names into dropdown
//add eventlistener to dropdown menu 


document.addEventListener('DOMContentLoaded', () => {
    const baseUrl = 'http://localhost:3000/characters'
    const dropDown = document.getElementById('character-names')
    const detailedInfo = document.getElementById('detailed-info')
    const name = document.getElementById('name')
    const image = document.getElementById('img')

    const getChar = () => {
        fetch(baseUrl)
        .then(res => res.json())
        .then(allChars)
    }

    const allChars = chars => {
        chars.forEach(char => {
            const charOption = document.createElement('option')
            charOption.innerHTML = `${char.name}`
            dropDown.append(charOption)
        })
    }

    // const charInfo = chars => {
        dropDown.addEventListener('click', event => {
                event.target.forEach(info => {
                    name.innerHTML = `${info.name}`
                    image.innerHTML = `${info.image}`
                })
            detailedInfo.append
        })
    // }
   
   




    getChar()
})