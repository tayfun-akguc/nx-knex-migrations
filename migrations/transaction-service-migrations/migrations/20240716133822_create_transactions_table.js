const tableName = 'Transaction';
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable(tableName).then((hasTable) => {
    if (hasTable) {
      return;
    }
    return knex.schema.createTable(tableName, (table) => {
      table.increments('id');
      table.decimal('amount', 12, 2).notNullable();
      table.string('description');
      table.integer('userId').notNullable();
      table.enu('type', ['EXPENSE', 'INCOME']).notNullable();
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
