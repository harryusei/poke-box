const knex = require("./knex");

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
};
