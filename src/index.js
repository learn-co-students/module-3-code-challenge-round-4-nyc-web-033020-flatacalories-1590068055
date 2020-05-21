document.addEventListener('DOMContentLoaded', () => {
    
    const url = 'http://localhost:3000/characters'

    //make a GET request and render all characters' names in a dropdown menu
    const getCharacters = () => {
        fetch(url)
        .then(resp => resp.json())
        .then(renderCharacters)
    } 

    const renderCharacters = (characters) => {
        characters.forEach(char => {



            
            // const option = document.querySelector('option')
            // const newOption = document.createElement('option')
                      
            // newOption.innerHTML += `
            //     <option value='option1'>${char.name}</option>
            //     `
            //     option.append(newOption)
        })
    }


    getCharacters()
    
})