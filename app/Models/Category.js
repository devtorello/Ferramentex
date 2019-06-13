'use strict'

const Model = use('Model')

class Category extends Model {
  json() {
    return{
      id: this.id,
      name: this.name,
      description: this.description
    };
  }
}

module.exports = Category
