exports.up = function(knex) {

  return knex.schema.alterTable('users', function(table){
    table.timestamp('delete_at');
  })
};

exports.down = function(knex) {

  return knex.schema.alterTable('users', function(table){
    table.dropColumn('delete_at');
  })
};
