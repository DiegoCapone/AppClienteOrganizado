
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cliente', table => {
      table.increments('id').primary()
      table.string('nome').notNull()
      table.string('email')
      table.string('telefone')
      table.string('endereco')
      table.string('tipoPessoa')
      table.string('estado')
      table.integer('userId').references('id').inTable('users').notNull()
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('cliente')
  
};
