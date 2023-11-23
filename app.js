const nextButton = document.querySelector(".btn-next");
const prevButton = document.querySelector(".btn-prev");
const pokeImg = document.querySelector(".poke-img");
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const searchInput = document.querySelector(".input-search");
const pokeName = document.querySelector(".poke-name");
let idPokemon = 7;

nextButton.addEventListener("click", () => {
  idPokemon++;
  fetchHandler(idPokemon);
});

prevButton.addEventListener("click", () => {
  idPokemon--;
  fetchHandler(idPokemon);
});

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const name = event.target.value.toLowerCase().trim();
    searchPokemonByName(name);
  }
});
//
async function fetchHandler(id) {
  await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => response.json())
    .then((data) => {
      pokeImg.src = data.sprites.front_default;
      pokeName.textContent = data.name;
    });
}

fetchHandler(idPokemon);

async function searchPokemonByName(name) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
        pokeImg.src = data.sprites.front_default;
        pokeName.textContent = data.name; 
      console.log(data.sprites.front_default);
    })
    .catch((error) => {
      console.error("Pokemon not found");
    });
}


function removeEventListeners() {
    nextButton.removeEventListener("click", handleClickNext);
    prevButton.removeEventListener("click", handleClickPrev);
    searchInput.removeEventListener("keydown", handleSearch);
}
  
removeEventListeners();