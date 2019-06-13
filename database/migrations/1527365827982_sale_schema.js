'use strict'

const Schema = use('Schema')

class SaleSchema extends Schema {
  up () {
    this.create('sales', (table) => {
      table.increments()
      table.integer('client_id').unsigned().notNullable()
      table.integer('user_id').unsigned().defaultsTo(null)
      table.float('discount').defaultsTo(.0)
      table.float('total_price').notNullable()
      table.float('final_price').notNullable()
      table.enum('payment', [
        'MONEY',
        'CARD'
      ]).notNullable().defaultsTo('MONEY');
      table.timestamps()
    })
  }

  down () {
    this.drop('sales')
  }
}

module.exports = SaleSchema
