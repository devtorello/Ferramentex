'use strict'

const Model = use('Model')

class User extends Model {
  static boot () {
    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     *
     * Look at `app/Models/Hooks/User.js` file to
     * check the hashPassword method
     */
    this.addHook('beforeCreate', 'User.hashPassword')
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  tokens () {
    return this.hasMany('App/Models/Token')
  }

  json() {
    return {
      id: this.id,
      name: this.name,
      lastName: this.last_name,
      username: this.username,
      email: this.email,
      senha: this.senha,
      type: this.type
    };
  }
}

module.exports = User
