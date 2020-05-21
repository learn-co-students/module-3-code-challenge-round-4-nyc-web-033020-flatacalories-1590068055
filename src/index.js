function runWebApp() {
  const charDropdown = document.getElementById("character-names")
  const infoDiv = document.getElementById("detailed-info")
  const caloriesForm = document.getElementById("calories-form")
  const baseUrl = "http://localhost:3000/characters/"
  let displayChar = 0

  function fetchChars() {
    fetch(baseUrl)
      .then(res => res.json())
      .then(json => displayChars(json))
  }

  function fetchChar(id) {
    fetch(baseUrl + id)
      .then(res => res.json())
      .then(json => displayCharInfo(json))
  }

  function patchCalories(id, calories) {
    fetch(baseUrl + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "calories": calories
      })
    })
      .then(res => res.json())
      .then(json => displayCharInfo(json))
  }

  function patchName(id, name) {
    fetch(baseUrl + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "name": `${name}`
      })
    })
      .then(res => res.json())
      .then(json => displayCharInfo(json))
  }

  function postChar(char) {
    fetch(baseUrl, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "applicatin/json"
      },
      body: JSON.stringify(char)
    })
      .then(res => res.json())
      .then(json => {
        addCharToSelect(json)
        displayCharInfo(json)
        console.dir(json)
      })
  }

  function displayChars(chars) {
    chars.forEach(char => addCharToSelect(char))
  }

  function addCharToSelect(char) {
    let charOption = document.createElement("option")
    charOption.dataset.id = char.id
    charOption.dataset.action = "show"
    charOption.value = char.name
    charOption.innerHTML = char.name

    charDropdown.appendChild(charOption)
  }

  function displayCharInfo(char) {
    displayChar = char.id
    const charNameElem = infoDiv.querySelector("p")
    const charImgElem = infoDiv.querySelector("img")
    const charSpanElem = document.getElementById("calories")
    
    charNameElem.innerHTML = char.name
    charImgElem.src = char.image
    charSpanElem.innerHTML = char.calories
  }

  fetchChars()

  charDropdown.addEventListener("change", e => {
    const selectedOption = e.target.selectedOptions[0]

    if (selectedOption.dataset.action === "show") {
      fetchChar(selectedOption.dataset.id)
    }
  })

  infoDiv.addEventListener("submit", e => {
    e.preventDefault()

    if (e.target.id === "calories-form") {
      patchCalories(displayChar, e.target.calories.value)
      caloriesForm.reset()
    } else if (e.target.id === "edit-name-form") {
      patchName(displayChar, e.target.name.value)
    } else if (e.target.id === "new-character-form") {
      const newChar = {
        "name": `${e.target.name.value}`,
        "image": `${e.target.image.value}`,
        "calories": 0
      }

      // console.dir(newChar)
      postChar(newChar)
    }
  })

  infoDiv.addEventListener("click", e => {
    if (e.target.id === "reset-btn") {
      patchCalories(displayChar, 0)
    }
  })
}

runWebApp()
