/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.alterTable("movies", (table) => {
      table.integer("type").unsigned().notNullable();
  
      table
        .foreign("type")
        .references("id")
        .inTable("genders")
        .onDelete("CASCADE");
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export function down(knex) {
    return knex.schema.alterTable("movies", (table) => {
      table.dropForeign("type");
  
      table.dropColumn("type");
    });
  };