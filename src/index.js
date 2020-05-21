

// fetch characters
// render characters

// addEventlistener click to see fetched character name in
// drop down menu
// addEventListener click for fetched details into character details
// event delegation??

// addEL click add calories button,

document.addEventListener('DOMContentLoaded', () => {

  const dropdown = document.querySelector('#dropdown')

  const charDetails = document.querySelector

  fetch("http://localhost:3000/characters")
  .then(res => res.json())
  .then(data => console.log(data[1]))

  // const renderCharacters = characters => {
  //   characters.forEach( char => {
  //     const charSelection = dropdown

  //   })
  // }

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
