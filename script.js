const pokemonInput = document.getElementById("pokemon-input");
const searchButton = document.getElementById("search-button");
const detailsContainer = document.getElementById("details-containers");
const flavourText = document.getElementById("flavour-text");
const spriteImage = document.getElementById("sprite-image");

searchButton.addEventListener("click", async (MouseEvent) => {
    MouseEvent.preventDefault();
    console.log(pokemonInput.value)

    let dataFetch;
    dataFetch = await fetchPokemonData(pokemonInput.value);
    flavourFetch = await fetchPokemonFlavour(pokemonInput.value);
    displayPokemon(dataFetch, flavourFetch);


    
})

async function fetchPokemonData(pokemonNameOrId) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error: Unable to fetch data for ${pokemonNameOrId} (status code: ${response.status})`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error.message);
        return null;
    }
}

async function fetchPokemonFlavour(pokemonNameOrId) {
    const url = `https://pokeapi.co/api/v2/pokemon-species/${pokemonNameOrId}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error: Unable to fetch data for ${pokemonNameOrId} (status code: ${response.status})`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error.message);
        return null;
    }
}


function displayPokemon(pokemonData, flavourData) {
    
    spriteImage.style.display = "none";
    spriteImage.src = "";
    detailsContainer.innerHTML = '';
    flavourText.innerHTML = '';

    // if (!pokemonInput) {
        // detailsContainer.innerText = "Please enter a pokemon name or ID.";
    // }

    // const pokemonData = await fetchPokemonData(pokemonInput);
    if (pokemonData) {
        console.log("hello")
        spriteImage.src = pokemonData.sprites.front_default;
        spriteImage.style.display = "block"

     
        detailsContainer.innerHTML = `
        <h2>${pokemonData.name} (#${pokemonData.id})</h2>
        <p>Type: ${pokemonData.types.map(type => type.type.name).join(', ')}</p>
        <p>Abilities: ${pokemonData.abilities.map(ability => ability.ability.name).join(', ')}</p>
        <p>Height: ${pokemonData.height}</p>
        <p>Weight: ${pokemonData.weight}</p>
    `;

    if (flavourData) {
        const flavorEntry = flavourData.flavor_text_entries.find(
            entry => entry.language.name === "en"
        );
        flavourText.innerText = flavorEntry ? flavorEntry.flavor_text : "No flavor text available.";
    } else {
        flavourText.innerText = "Could not fetch flavor text.";
    }
} else {
    detailsContainer.innerText = "Pokémon not found. Please check the name or ID and try again.";
    spriteImage.src = "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/01/pikachu-sad-dead-friends.jpg"; 
    spriteImage.style.display = "block";
    spriteImage.style.height = "300px";
    spriteImage.style.width = "500px";
}
}
