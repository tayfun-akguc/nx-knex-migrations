// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  local: {
    client: 'postgresql',
    connection: {
      host: process.env.TRANSACTION_SERVICE_DB_HOST,
      port: process.env.TRANSACTION_SERVICE_DB_PORT,
      database: process.env.TRANSACTION_SERVICE_DB_NAME,
      user: process.env.TRANSACTION_SERVICE_DB_USER,
      password: process.env.TRANSACTION_SERVICE_DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'migrations',
    },
    seeds: {
      directory: 'seeds',
    },
  },
};
