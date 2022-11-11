const knex = require("./knex");
const pokeData = require("../data/pokedata.json");
const pokeName = require("../data/pokename.json");

const POKE_TABLE = "poke_box";

module.exports = {
  POKE_TABLE,

  getAll() {
    return knex.select().from(POKE_TABLE);
  },

  getBySpecies(species) {
    const formatted =
      species.charAt(0).toUpperCase() + species.slice(1).toLowerCase();
    return knex.select().from(POKE_TABLE).where({ species_en: formatted });
  },

  register(data) {
    const name_en = pokeName[data.species];
    data["species_en"] = name_en;
    console.log(data);

    // return inserted poke data
    return knex(POKE_TABLE).insert(data);
  },
};
