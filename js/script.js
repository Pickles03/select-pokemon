const pokemonSelect = document.getElementById('pokemon-select');
const btnInfo = document.getElementById('get-pokemon');
const pokemonInfo = document.getElementById('pokemon-info');

console.log(pokemonInfo);

function getInfo() {
    const selectedPokemon = pokemonSelect.value; //gets the selected value from the dropdown (3 possibles values: charmander, squirtle, bulbasaur)

    fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => { //pokemonInfo is the div where the info will be displayed
        pokemonInfo.innerHTML = ` 
            <h2>${data.name}</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <p>Height: ${data.height}</p>
            <p>Weight: ${data.weight}</p>
        `;
    })
    .catch(error => console.error('There has been a problem with your fetch operation:', error));
}

btnInfo.addEventListener('click', getInfo);