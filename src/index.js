//make GET request to characters 
//add eventlistener to dropdown menu 


document.addEventListener('DOMContentLoaded', () => {
    const baseUrl = 'http://localhost:3000/characters'
    const dropDown = document.getElementById('character-names')
    const option = dropDown.getElementsByTagName('option')

    const getChar = () => {
        fetch(baseUrl)
        .then(res => res.json())
        .then(allDogs)
    }

    const allDogs = dogs => {
        // const dogList = 
        dropDown.addEventListener('click', event => {
            dogs.forEach(dog => {
                option.innerHTML = `${dog.name}`
            })
        })
    }

 




    // getChar()
})