document.addEventListener('DOMContentLoaded', () => {
    
    const url = 'http://localhost:3000/characters'
    const charUrl = 'http://localhost:3000/characters/'

    //make a GET request and render all characters' names in a dropdown menu
    const getCharacters = () => {
        fetch(url)
        .then(resp => resp.json())
        .then(renderCharacters)
    } 

    const renderCharacters = (characters) => {
        characters.forEach(char => {
            const select = document.querySelector('#character-names')
            const newOption = document.createElement('option')
            newOption.dataset.id = `${char.id}`
            newOption.text = `${char.name}`
            select.add(newOption)

            document.addEventListener('change', (e) => {
                if(e.target.dataset.id === char.id) {
                    fetch(`${charUrl}/${char.id}`)
                        .then(resp => resp.json())
                        .then(renderSingleChar)
                }
            })
        })
    }

    const renderSingleChar = (char) => {
        const infoDiv = document.querySelector('#detailed-info')
        
    } 

    //add event listener for selecting character from dropdown
    //make GET request with ID of char and display in detailed info div
    



            // const topOption = document.querySelector('#top')
            // const newOption = document.createElement('option')
            // newOption.innerHTML +=`
            // <option value=${char.id}>${char.name}</option>
            // `
            
            // topOption.append(newOption)

            // const option = document.querySelector('option')
            // const newOption = document.createElement('option')
                      
            // newOption.innerHTML += `
            //     <option value='option1'>${char.name}</option>
            //     `
            //     option.append(newOption)
    


    getCharacters()
    
})