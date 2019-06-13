'use strict'

const Client = use('App/Models/Client');

class ClientController {
  async show() {
    let clients = await Client.all();

    return{
      data: clients
    };
  }

  async store({ request, response}) {
    let clients = await Client.create(request.only([
      'full_name', 'cpf'
    ]));
    
    return response.status(201).json({
			message: 'Client account created successfully',
			clients
		});
  }
}

module.exports = ClientController
