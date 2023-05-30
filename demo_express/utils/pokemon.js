const axios = require("axios");

const BASE_URL = "https://pokeapi.co/api/v2";
const SUB_URL = "/pokemon";

const getPokemonWithClassicPromises = (name) => {
  const URL = `${BASE_URL}${SUB_URL}/${name}`;

  return axios
    .get(URL)
    .then((result) => {
      return result.data;
    })
    .then(({ base_experience, id, sprites }) => {
      console.log(
        "> getPokemonWithClassicPromises fn: ",
        base_experience,
        id,
        sprites.front_default
      );
      return { base_experience, id, sprites };
    })
    .catch((error) => {
      console.log("hola");
      console.error("something went wrong: ", error.message);
      return error.message;
    });
};

const getPokemonWithAsyncAwait = async () => {
  const pokemons = ["pikachu", "ditto", "bulbasaur"];
  const data_pokemons = [];
  for await (const pokemon of pokemons) {
    try {
      const URL = `${BASE_URL}${SUB_URL}/${pokemon}`;
      const result = await axios.get(URL);
      const { base_experience, id, sprites } = result.data;

      data_pokemons.push({ base_experience, id, sprites });

      console.log(
        "> getPokemonWithAsyncAwait fn: ",
        base_experience,
        id,
        sprites.front_default
      );
    } catch (error) {
      console.error("something went wrong: ", error.message);
    }
  }
  return data_pokemons;
};
// Pruebas de las funciones
//getPokemonWithClassicPromises("pikachu").then((data) => console.log(data));
//getPokemonWithAsyncAwait().then((data) => console.log(data));

module.exports = {
  getPokemonWithClassicPromises,
  getPokemonWithAsyncAwait,
};
