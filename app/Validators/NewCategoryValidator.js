'use strict'

class NewCategoryValidator {
  get rules () {
      return {
        name: 'required',
        description: 'required'
      };
    }
  
    get validateAll() {
      return true;
    }
  
    get messages() {
      return {
        'required': 'Campo obrigatório.',
      };
    }
  
    async fails (errorMessages) {
      return this.ctx.response.badRequest({ errors: errorMessages });
    }
  }

module.exports = NewCategoryValidator
