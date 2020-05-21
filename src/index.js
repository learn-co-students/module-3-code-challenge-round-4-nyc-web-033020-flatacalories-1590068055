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

  function postCalories(id, calories) {
    fetch(baseUrl + id, {
      method: "POST",
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
    const infoDivChildren = infoDiv.children
    displayChar = char.id

    infoDivChildren[0].innerHTML = char.name
    infoDivChildren[1].src = char.image
    infoDivChildren[2].innerHTML = char.calories
  }

  fetchChars()

  charDropdown.addEventListener("change", e => {
    const selectedOption = e.target.selectedOptions[0]

    if (selectedOption.dataset.action === "show") {
      fetchChar(selectedOption.dataset.id)
    }
  })

  caloriesForm.addEventListener("submit", e => {
    e.preventDefault()
    // console.log(e.target.calories.value)

    postCalories(displayChar, e.target.calories.value)
  })
}

runWebApp()
