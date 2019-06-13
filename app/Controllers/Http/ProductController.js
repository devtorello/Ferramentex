'use strict'

const Product = use('App/Models/Product');

class ProductController {
	// Request de produtos
	async show() {
		let products = await Product.all();

		return{
			data: products
		};
	}

	// Cadastro de novos produtos
	async store({ request, response }) {
		let products = Product.create(request.only([
			'sku', 'name', 'description', 'brand',
			'buy_price', 'sell_price', 'stock_quantity'
		]));

		products.status = 'AVAILABLE';
		return response.status(201).json({
			message: 'Product created successfully.',
			products
		});
	}
}

module.exports = ProductController
