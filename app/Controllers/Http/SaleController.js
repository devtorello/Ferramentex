'use strict'

const Sale = use('App/Models/Sale');

class SaleController {
  async show(){
    let sale = await Sale.all();

    return{
      data: sale
    };
  }

  async store ({ request, response }) {
    let sale = await Sale.create(request.only([
      'client_id', 'user_id', 'discount', 'total_price',
      'final_price', 'payment'
    ]));

    return response.status(201).json({
      message: 'Sale was succssessful.',
      sale
    });
  }
}

module.exports = SaleController
