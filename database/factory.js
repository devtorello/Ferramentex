'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/
const Factory = use('Factory')

Factory.blueprint('App/Models/User', () => {
	return {
		name: 'Tatiana',
		last_name: 'Vitorello',
		username: 'vitorellot',
		email: 'vitorellotts@gmail.com',
		password: 'teste123',
		type: 'ADMIN'
	}
})
