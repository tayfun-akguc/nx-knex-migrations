// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  local: {
    client: 'postgresql',
    connection: {
      host: process.env.USER_SERVICE_DB_HOST,
      port: process.env.USER_SERVICE_DB_PORT,
      database: process.env.USER_SERVICE_DB_NAME,
      user: process.env.USER_SERVICE_DB_USER,
      password: process.env.USER_SERVICE_DB_PASSWORD,
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
