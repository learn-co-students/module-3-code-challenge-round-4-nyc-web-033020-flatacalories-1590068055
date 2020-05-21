

// fetch characters

// addEventlistener click to see fetched character name in
// drop down menu
// addEventListener click for fetched details into character details
// event delegation??

// addEL click add calories button,

document.addEventListener('DOMContentLoaded', () => {

  // const BaseURL = "http://localhost:3000"
  // const CharURL = `${BaseURL}/characters`

  fetch("http://localhost:3000")
  .then(res => res.json())

  const renderCharacters = characters => {
    characters.forEach()


  }

  const dropdown = document.querySelector('#dropdown')

  dropdown.append()





})
