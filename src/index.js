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
			
			// Associate the id of this character with their options element
			characterOption.dataset.id = character.id;
			dropdown.appendChild(characterOption)
		});

		// Create change event listener for dropdown
		dropdown.addEventListener('change', e => {

			// Retrieve the id of the selected characted from the dataset of the option of the dropdown
			const characterId = e.target.options[e.target.selectedIndex].dataset.id;
			populateCharacterDetails(characterId);
		});
	};

	// Take the ID of a selected characted, pessimisticaly retreieve that data and populate detail view
	const populateCharacterDetails = id => {
		const characterDetails = document.getElementById("detailed-info");
		const viewName = document.getElementById('name');
		const viewImgUrl = document.getElementById('image');
		const viewCalories = document.getElementById('calories');
		const caloriesFormId = document.getElementById('characterId');

		fetch(`http://localhost:3000/characters/${id}`)
		.then( res => res.json() )
		.then( character => {
			// Populate DOM elements with response
			viewName.textContent = character.name;
			viewImgUrl.src = character.image;
			viewCalories.textContent = character.calories;
			caloriesFormId.value = characterId;
		});
	};

	// Create event listener for the calories form
	document.addEventListener('submit', e => {
		e.preventDefault();
		const calorieDelta = e.target.querySelector("input[type='number']");
	})

	getCharacters();
})
