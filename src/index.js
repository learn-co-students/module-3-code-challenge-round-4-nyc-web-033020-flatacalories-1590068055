document.addEventListener('DOMContentLoaded', function() {
    const baseURL = "http://localhost:3000"
    const charactersURL = "http://localhost:3000/characters"
    const caloiresURL = "http://localhost:3000/characters/calories"

    // //image
    // const  postName = document.getElementById("name")
    // console.log(postName)
    // const post = document.getElementById("image")
    // console.log(post)

    
 
   function fetchImage() {
       return fetch(charactersURL)
       .then(res =>j.son)
   }

   function patchImage(id, data){
       return fetch(caloiresURL, {
           method: 'Post',
           headers: {
            "Content-Type": "application/json",
            "Accept": 'application/json'
           },
           body: JSON.stringify(data),
       })
       .then(res => res.json())
   }

   function postCalorie(data) {
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

    function renderImage(showImage) {
        const imageShow = document.getElementById('image')
        const imageName = document.getElementById('name')
        const calories = document.getElementById('calories')
        const caloriesForm = document.getElementById('calories-form')

        fetchImage().then(img => {
            image.show.dataset.id = img.id
            imageShow.src = img.url 
            imageName.innerText = img.name

            //calories 
            img.calories.forEach(calorie => {
                const li = document.createElement('li')
                li.id = calorie.id
                li.innerText = calorie.content
                calories.append(li)
            })

            submitBtn.addEventListener('click', () => {
                event.preventDefault()
                const calorieInput = document.getElementById("calorie_input").value
                const caloriedata = {image_id: img.id, content:calorieInput}
                postCalorie(calorieData)
                const li = document.createElement('li')
                li.dataset.id = img.calories.length 
                li.innerText = calorieInput
                calories.appendChild(li)
            })

            
        })
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

            function renderCalories() {
            const calories = document.getElementById('calories')
            fetchImage().then(img => {
                img.calories.forEach(calories => {
                    const li = document.createElement('li')
                    li.id = calories.id
                    li.innerText = calories.content
                })
            })
        }

    }

    
    })
    