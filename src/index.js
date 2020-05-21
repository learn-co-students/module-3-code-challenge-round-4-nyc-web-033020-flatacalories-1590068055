

// fetch characters
// render characters

// addEventlistener click to see fetched character name in
// drop down menu

// addEventListener click for fetched details into character details

// addEventListener click add calories button

// addEventListener click reset calories

// event delegation?? if dropdown, add, reset

//

document.addEventListener('DOMContentLoaded', () => {

  const dropdown = document.querySelector('#dropdown')


  fetch("http://localhost:3000/characters")
  .then(res => res.json())
  .then(data => console.log(data))

  const renderCharacters = characters => {
    characters.forEach( char => {
      const

    })
  }

// document.addEventListener('click'), event => {
//   if(event.target.button.value === "Add Calories" {

//   }

// }


  // dropdown.append('<option selected disabled>Select a Character</option>')
  // $.getJSON("http://localhost:3000", function (character){
  //   $.forEach(characters, function (key, entry){
  //     dropdown.append($('<option></option>').attr('value', "character-names").text(character.name))
  //   })
  // })



}) //last line
