function runWebApp() {
  const charDropdown = document.getElementById("character-names")
  const baseUrl = "http://localhost:3000/characters/"

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
    console.dir(charInfoElements)
  }

  fetchChars()

  charDropdown.addEventListener("change", e => {
    const selectedIndex = e.target.options.selectedIndex
    console.dir(e.target)
    console.dir(e.target.selectedOptions[0].dataset.action)
    console.dir(selectedIndex)
    if (e.target.dataset.action === "show") {
      fetchChar(e.target.dataset.id)
    }
  })
}

runWebApp()
