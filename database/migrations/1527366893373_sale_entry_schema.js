'use strict'

const Schema = use('Schema')

class SaleEntrySchema extends Schema {
  up () {
    this.create('sale_entries', (table) => {
      table.increments()
      table.integer('product_id').unsigned().notNullable()
      table.integer('sale_id').unsigned().notNullable()
      table.integer('quantity').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('sale_entries')
  }
}

module.exports = SaleEntrySchema
