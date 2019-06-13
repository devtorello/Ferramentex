'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

// Rotas de Autenticação (AuthController)
Route.group(() => {
  // Auth Routes
  Route.post('/auth/signup', 'AuthController.signup').validator('SignupValidator');
  Route.post('/auth/signin', 'AuthController.signin').validator('LoginValidator');
  Route.post('/auth/refresh', 'AuthController.refresh');
  Route.get('/auth', 'AuthController.show');

  //Client Routes
  Route.get('/client', 'ClientController.show');
  Route.post('/client', 'ClientController.store').validator('NewClientValidator');
  
  //Product & Category Routes
  Route.get('/product', 'ProductController.show');
  Route.post('/product', 'ProductController.store').validator('NewProductValidator');
  
  Route.get('/category', 'CategoryController.show');
  Route.post('/category', 'CategoryController.store').validator('NewCategoryValidator');
  
  //Sale & Sale Entry Routes
  Route.get('/sale', 'SaleController.show');
  Route.get('/saleentry', 'SaleEntryController.show');
  Route.post('/sale/register', 'SaleController.store').validator('SaleValidator');
  Route.post('/saleentry/register', 'SaleEntryController.store').validator('SaleEntryValidator');

  // User Routes
  Route.get('/user/load', 'UserController.load').middleware(['auth']);

  Route.any('*', ({ response }) => response.status(404).send({ message: 'Not found' }));
}).prefix('/api/v1');

// Static Route
Route.any('*', ({ view }) => view.render('welcome'));
