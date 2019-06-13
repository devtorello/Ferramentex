'use strict'

const SaleEntry = use('App/Models/SaleEntry');

class SaleEntryController {
  async show(){
    let saleentry = await SaleEntry.all();
    
    return{
      data: saleentry
    };
  }

  async store ({ request, response }){
    let saleentry = await SaleEntry.create(request.only([
      'product_id', 'sale_id', 'quantity'
    ]));

    return response.status(201).json({
      message: 'Sale entry was succssessful.',
      saleentry
    });
  }
}

module.exports = SaleEntryController
