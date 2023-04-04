//Pokemon Cards Background Colors Object

const bg_color = {
    grass: '#8BD369',
    fire: '#FF603F',
    water: '#3399FF',
    bug: '#AABB22',
    normal: '#AAAA99',
    flying: '#9AA8FA',
    poison: '#B76EA4',
    electric: '#FFD34E',
    ground: '#E2C56A',
    fairy: '#F1A8EC',
    psychic: '#FF6EA4',
    fighting: '#C56E5C',
    rock: '#C5B679',
    dragon: '#7766EE',
    ice: '#66CCFF',
}

//DOM element declarations

const poke_container = document.querySelector('.poke-container');
const search = document.querySelector('.search');
const searchInput = document.querySelector('.searchInput');
const searchBtn = document.querySelector('.searchBtn');

//FUNCTION DECLARATIONS

//A function for matching searched Value with pokemons defined in API

const matchPokemonSearch = () => {
    const searchValue = searchInput.value.toLowerCase();
    const pokemonNames = document.querySelectorAll('.poke-name');
  
    pokemonNames.forEach((pokemonName) => {
      pokemonName.parentElement.parentElement.style.display = 'block'
  
      if (!pokemonName.innerHTML.toLowerCase().includes(searchValue)) {
        pokemonName.parentElement.parentElement.style.display = 'none'
      }
    })
};

//Event Listeners

searchBtn.addEventListener('click', () => {
    search.classList.toggle('active');
})

searchInput.addEventListener('input', matchPokemonSearch);