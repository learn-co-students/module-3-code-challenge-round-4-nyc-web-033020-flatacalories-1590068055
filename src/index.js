


// **** Drawing a complete blank here on all of it, I know what I want
// to do and I have stuff floating around in my head and it feels completely
// inaccessible and I can't put it together as actual syntax.
// I don't wan't to make excuses but it's been a hell of a
// week in my personal life, I'm not exactly on my A game here today.
// I know I can do it, I could do it in the labs and I understand the material,
// I felt good about all of it yesterday, I'll just need to do it next week. ****



// to do:

// fetch characters
// render characters

// addEventlistener click to see fetched character name in
// drop down menu

// addEventListener click for adding fetched details into character details

// addEventListener click add calories button, ID in dataset
// PATCH to update table values, persist new calorie value to DB

// addEventListener click reset calories, use ID in dataset

// event delegation?? if button text === dropdown, add, reset

//




document.addEventListener('DOMContentLoaded', () => {

  const dropdown = document.querySelector('#dropdown')


  fetch("http://localhost:3000/characters")
  .then(res => res.json())
  .then(data => console.log(data))

  const renderCharacters = characters => {
    characters.forEach( char => {

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



}) //
