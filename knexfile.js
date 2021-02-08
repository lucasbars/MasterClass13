// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: "postgres",
      user: "postgres",
      password: "suasenha",
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`,
    },
    seeds:{
      directory: `${__dirname}/src/database/seeds`,
    }
    
  },
  // onupdateTrigger: table => `
  // CREATE TRIGGER ${table}_updated_at
  //   BEFORE UPDATE ON ${table}
  //   FOR EACH ROW
  //   EXECUTE PROCEDURE on_update_timestamp();`
   onupdateTrigger(table){
    return `CREATE TRIGGER ${table}_updated_at
    BEFORE UPDATE ON ${table}
    FOR EACH ROW
    EXECUTE PROCEDURE on_update_timestamp();
    `
  },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};
