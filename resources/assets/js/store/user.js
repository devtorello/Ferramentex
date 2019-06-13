export default {
  data: {
    id: null,
    name: null,
    last_name: null,
    username: null,
    email: null,
    password: null,
    type: null
  },

  load(user) {
    for (let key in user) {
      if (this.data.hasOwnProperty(key) && key != 'load' && key != 'clear')
        this.data[key] = user[key];
    }
  },

  clear() {
    this.data.id = null;
    this.data.name = null;
    this.data.last_name = null;
    this.data.username = null;
    this.data.email = null;
    this.data.password = null;
    this.data.type = null;
  }
}
