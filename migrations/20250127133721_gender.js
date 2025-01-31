/**
 * @param {import("knex").Knex} knex
 * @returns {Promise<void>}
 */
export function up(knex) {
    return knex.schema.createTable("genders", (table) => {
      table.increments("id").primary();
      table.string("name", 255).notNullable();
      table.string("nameTranslate", 255).notNullable();
    });
  }
  
  /**
   * @param {import("knex").Knex} knex
   * @returns {Promise<void>}
   */
 export function down(knex) {
    return knex.schema.dropTable("genders");
  }
  

  