'use strict'

const Model = use('Model')

class Product extends Model {
  json() {
    return {
      id: this.id,
      sku: this.sku,
      name: this.name,
      description: this.description,
      brand: this.brand,
      buy_price: this.buy_price,
      sell_price: this.sell_price,
      stock_quantity: this.stock_quantity,
      status: this.status
    }
  }
}

module.exports = Product
