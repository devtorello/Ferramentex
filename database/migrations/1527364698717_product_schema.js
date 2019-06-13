'use strict'

const Schema = use('Schema')

class ProductSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.string('sku', 50).notNullable().unique()
      table.string('name', 100).notNullable()
      table.text('description')
      table.string('brand', 100).notNullable()
      table.string('category', 100).notNullable()
      table.float('buy_price').notNullable().defaultsTo(.0)
      table.float('sell_price').notNullable()
      table.integer('stock_quantity').notNullable().defaultsTo(0)
      table.enum('status', [
        'AVAILABLE',
        'SOLD_OUT',
        'UNAVAILABLE'
      ]).defaultsTo('AVAILABLE')
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductSchema
