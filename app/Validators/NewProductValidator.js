'use strict'

class NewProductValidator {
  get rules () {
    return {
      sku: 'required|max:5',
      name: 'required',
      description: 'required|max:50',
      brand: 'required',
      buy_price: 'required',
      sell_price: 'required',
      stock_quantity: 'required'
    };
  }

  get validateAll() {
    return true;
  }

  get messages() {
    return {
      'required': 'Este campo é obrigatório.',
      'sku.max': 'O número máximo de caracteres para este campo é 5.',
      'description.max': 'O número máximo de caracteres para a descrição é de 50.'
    };
  }

  async fails (errorMessages) {
    return this.ctx.response.badRequest({ errors: errorMessages });
  }
}

module.exports = NewProductValidator
