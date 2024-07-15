const tableName = 'User';
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable().then((hasTable) => {
    if (hasTable) {
      return;
    }
    return knex.schema.createTable(tableName, (table) => {
      table.increments('id');
      table.string('email').notNullable();
      table.string('password').notNullable();
      table.string('firstName').notNullable();
      table.string('lastName').notNullable();
      table.date('dateOfBirth').notNullable();
      table
        .timestamp('createdAt', { useTz: true })
        .notNullable()
        .defaultTo(knex.fn.now());
      table
        .timestamp('updatedAt', { useTz: true })
        .notNullable()
        .defaultTo(knex.fn.now());
    });
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists(tableName);
};
