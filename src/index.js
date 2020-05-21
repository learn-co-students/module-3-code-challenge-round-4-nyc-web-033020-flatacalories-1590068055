//√make GET request to characters 
//√add character names into dropdown
//add eventlistener to dropdown menu 


document.addEventListener('DOMContentLoaded', () => {
    const baseUrl = 'http://localhost:3000/characters'
    const dropDown = document.getElementById('character-names')
    const detailedInfo = document.getElementById('detailed-info')


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

        dropDown.addEventListener('change', (event) => {
            const name = document.querySelector('#name')
            const image = document.querySelector('#image')
            console.log(event.target)
            name.textContent = `${event.srcElement.value}`
            // image.textContent = `${event.target.value}`
          })
   
    // const selectElement = document.querySelector('.character-info')

  




    getChar()
})