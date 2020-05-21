document.addEventListener('DOMContentLoaded', function() {
    const baseURL = "http://localhost:3000"
    const charactersURL = "http://localhost:3000/characters"

    //image 
    const  postName = document.getElementById("name")
    console.log(postName)
    const post = document.getElementById("image")
    console.log(post)
 
    fetch(charactersURL)
    .then(resp => resp.json())
    .then(image => {
        renderImage(image)
    })

    function renderImage(showImage) {
        const imageShow = document.getElementById('image')
        const imageName = document.getElementById('name')
        const calories = document.getElementById('calories')
        const caloriesForm = document.getElementById('calories-form')
    }
    
    const addChracter = (characterId) => {
        console.log(characterId)
        const object = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json'
            },
            body: JSON.stringify({"character_id": characterId})
        }
        fetch(charactersURL, object)
        .then(res => res.json())
        .then(json => {
            const option = document.querySelector(`option[data-character-id='${charactersId}']`).parentElement.lastChild
            renderCharacter(option, json)
        })

        const renderCharacter = (option, character) => {
            if (character.name !==undefined) {
                const select= getElementsById("character-names")
                const option = document.createElement('option')
                option.innerHTML = <option selected disable>`${character.name}`</option>
                select.appendChild(option)
            }
        }

        function postCalories(data) {
            console.log(data)
            return fetch(caloriesURL, {
                method:'POST', 
                headers: {
                    'Accept': 'application/json', 
                    'Content-Type': 'application/json'
                }, 
                body: JSON.stringify(data), 
            })
            .then(res => res.json())
        }

    }

    
    })
    