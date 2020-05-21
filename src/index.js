document.addEventListener('DOMContentLoaded', (event) => {

    //fetch to http://localhost:3000/characters
    //iterate through and add to drop down/select
    //data bind

    const url = 'http://localhost:3000/characters'
    const charactersDropdown = document.querySelector('#character-names')
    // const detailedInfoDiv = document.querySelector('#detailed-info')
    const form = document.querySelector('#calories-form')

    //function to fetch all characters (GET)
    const getAllCharacters = () => {
        fetch(url)
            .then(resp => resp.json())
            .then(json => renderCharsToDropdown(json))
    }

    //invoke fetch request function above
    getAllCharacters()

    //function to render all characters to a dropdown in DOM
    const renderCharsToDropdown = (data) => {
        
        //loop through all characters/populate dropdown
        for (const character of data) {
            // console.log(character.name)
            charactersDropdown.innerHTML += `
                <option value="${character.name}" data-id="${character.id}">${character.name}</option>
            `
        }
        
    }

    //event listener for change in dropdown
    charactersDropdown.addEventListener('change', (e) => {
        // console.log(e.target.value)
        // console.dir(e.target.value)

        //need to get value of dataset id and then make get request to that character

        const getIndivCharacter = (id) => {
            fetch(`${url}/${id}`)
                .then(resp => resp.json())
                .then(json => renderCharacter(json))
        }

        const renderCharacter = (character) => {
            const image = document.querySelector('#image')
            const name = document.querySelector('#name')
            const calories = document.querySelector('#calories')

            image.src = character.image
            name.textContent = character.name
            name.dataset.id = character.id
            calories.textContent = character.calories
            calories.dataset.calories = character.calories
            //add dataset to form so you can patch correct record
            form.dataset.id = character.id

        }

        // refactor this later if time
        if (e.target.value === "Mr. Cute") {
            const id = e.target.selectedIndex
            getIndivCharacter(id)
        } else if (e.target.value === "Mr. Monkey") {
            const id = e.target.selectedIndex
            getIndivCharacter(id)
        } else if (e.target.value === "Miss. Zebra") {
            const id = e.target.selectedIndex
            getIndivCharacter(id)
        } else if (e.target.value === "Master Lion") {
            const id = e.target.selectedIndex
            getIndivCharacter(id)
        } else if (e.target.value === "Mr. Panda") {
            const id = e.target.selectedIndex
            getIndivCharacter(id)
        } else if (e.target.value === "Mrs. Monkey") {
            const id = e.target.selectedIndex
            getIndivCharacter(id)
        }

    })

    //Event listener for form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault()

        const id = e.target.dataset.id
        let inputCalories = document.querySelector('input[type="text"]')
        let currentCalories = document.querySelector('#calories')

        currentCalories = parseInt(currentCalories.textContent)
        inputCalories = parseInt(inputCalories.value)
        
        const totalCalories = (currentCalories + inputCalories)
        // console.log(totalCalories)

        //patch request to correct character, update calories
        fetch(`${url}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"

            },
            body: JSON.stringify({
                calories: totalCalories
            })
        })
            .then(resp => resp.json())
            .then(json => updateCalories(json))
            .then(form.reset())
    })

    const updateCalories = (character) => {
        // console.log(character)
        const caloriesSpan = document.querySelector('#calories')
        console.log(character.calories)
        caloriesSpan.textContent = character.calories
    }

});