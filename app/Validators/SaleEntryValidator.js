'use strict'

class SaleEntry {
  get rules () {
    return {
      product_id: 'requested',
      quantity: 'requested|number'
    };
  }

  get validateAll() {
    return true;
  }

  get messages(){
    return{
      requested: 'Este campo é obrigatório.',
      number: 'Apenas números são aceitos.'
    }
  }
}

module.exports = SaleEntry
