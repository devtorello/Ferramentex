'use strict'

class SignupValidator {
  get rules () {
    return {
      name: 'required',
      last_name: 'required',
      username: 'required',
      email: 'required|unique:users|email',
      password: 'required|confirmed|min:5'
    }
  }

  get validateAll(){
    return true;
  }

  get messages(){
    return{
    'required': 'Este campo é obrigatório.',
    'unique': 'Já existe um \'{{ field }}\' com este valor.',
    'email':'Insira um e-mail válido.',
    'password.min': 'A senha precisa ter no mínimo 5 caracteres.'
    };
  }

  async fails(errorMessages) {
    return this.ctx.response.badRequest({error: errorMessages});
  }
}

module.exports = SignupValidator
