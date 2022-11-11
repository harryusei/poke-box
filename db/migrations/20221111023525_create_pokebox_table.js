/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("poke_box", function (table) {
    table.increments("id").primary();
    table.string("species");
    table.string("species_en");
    table.string("nickname");
    table.string("ability");
    table.string("nature");
    table.string("item");
    table.integer("eff_h");
    table.integer("eff_a");
    table.integer("eff_b");
    table.integer("eff_c");
    table.integer("eff_d");
    table.integer("eff_s");
    table.string("move_1");
    table.string("move_2");
    table.string("move_3");
    table.string("move_4");
    table.string("description");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  knex.schema.dropTable("pokeBox");
};
