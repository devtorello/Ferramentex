'use strict'

const Category = use('App/Models/Category');

class CategoryController {
  //Request de categoria
  async show() {
  let categories = await Category.all();

    return {
      data: categories
    };
  }

  async store({ request, response }){
    let categories = Category.create(request.only([
      'name', 'description'
    ]));

		return response.status(201).json({
			message: 'Category created successfully',
			categories
		});
  }
}

module.exports = CategoryController
