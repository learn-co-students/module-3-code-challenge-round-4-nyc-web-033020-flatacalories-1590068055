// See characters name in dropdown menu div.dropdown select#character-names
// Populate div.characterInfo > div#detailed-info
// // p#name
// // img#image
// // span#calories
// Add calories to user with form#calories-form

// Advanced Deliverables
// // Reset calories for user to 0 via button#reset-button
// // Change Characters name
// // Add new character

const _HEADERS = {
	"Content-Type": "application/json",
	"Accept": "application/json"
};

document.addEventListener("DOMContentLoaded", () => {

	const dropdown = document.getElementById('character-names');	
	
	// GET all characters, pass to populateDropdown
	const getCharacters = () => {
		fetch("http://localhost:3000/characters")
		.then( res => res.json() )
		.then( characters => populateDropdown(characters) )
	};

	// Populate dropdown with response from server
	const populateDropdown = characters => {
		
		// Create and populate option element for each character
		characters.forEach(character => {
			const characterOption = document.createElement('option');

			characterOption.textContent = character.name;

			characterOption.dataset.id = character.id;

			dropdown.appendChild(characterOption)
		});

		// Create change event listener for dropdown
		dropdown.addEventListener('change', e => {
			
			// Retrieve the id of the selected characted from the dataset of the option of the dropdown
			const characterId = e.target.options[e.target.selectedIndex].dataset.id;
		});

	};


	getCharacters();
})
