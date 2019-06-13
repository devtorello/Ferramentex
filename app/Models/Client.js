'use strict'

const Model = use('Model')

class Client extends Model {
  json() {
    return {
      id: this.id,
      full_name: this.full_name,
      cpf: this.cpf
    }
  }
}

module.exports = Client
