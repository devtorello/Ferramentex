'use strict'

class NewClientValidator {
  get rules () {
    return {
      full_name: 'required:unique:clients',
      cpf: 'required|max:15|unique:clients'
    };
  }

  get validateAll() {
    return true;
  }

  get messages() {
    return {
      'required': 'Este campo é obrigatório.',
      'cpf.max': 'Este campo pode ter no máximo 15 caracteres.',
      'unique': 'Já existe um \'{{ field }}\' com este valor.'
    };
  }

  async fails(errorMessages) {
    return this.ctx.response.status(400).json({errors: errorMessages});
  }
}

module.exports = NewClientValidator
