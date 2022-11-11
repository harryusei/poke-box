/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("poke_box", function (table) {
    table.increments("id").primary();
    table.string("species").notNullable();
    table.string("species_en").notNullable();
    table.string("nickname").defaultTo("");
    table.string("ability").notNullable();
    table.string("nature").notNullable();
    table.string("item").defaultTo("");
    table.integer("eff_h").defaultTo(0);
    table.integer("eff_a").defaultTo(0);
    table.integer("eff_b").defaultTo(0);
    table.integer("eff_c").defaultTo(0);
    table.integer("eff_d").defaultTo(0);
    table.integer("eff_s").defaultTo(0);
    table.string("move_1").defaultTo("");
    table.string("move_2").defaultTo("");
    table.string("move_3").defaultTo("");
    table.string("move_4").defaultTo("");
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
