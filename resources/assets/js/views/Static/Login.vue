<template>
  <div class="container">
    <div class="row">
      <div class="offset-4 col-lg-4 offset-4 box">
        <h3 class="text-center text-login">Login</h3>
        <p class="text-sublogin text-muted text-center">Insira o e-mail e a senha.</p>

        <!-- Inputs de login/recuperar senha/botão -->
        <div class="row">
          <div class="offset-2 col-lg-8 offset-2">

            <form class="form-group" @submit.prevent="login">
              <input type="email" 
              :class="{ 'form-control mb-2': true, 'is-invalid': !!errors.email }" 
              placeholder="E-mail"
              v-model="form.email">
              <span class="form-text text-danger" v-show="!!errors.email">{{ errors.email }}</span>

              <input type="password"
              :class="{ 'form-control mb-2': true, 'is-invalid': !!errors.password }"
              placeholder="Senha"
              v-model="form.password">
              <span class="form-text text-danger" v-show="!!errors.password">{{ errors.password }}</span>

              <div class="text-right float-right" style="margin-bottom: 10px;"><router-link to="/static/recupera" class="recu-senha"><a>Esqueceu a senha?</a></router-link></div>
              <button type="submit" class="btn btn-warning btn-block btn-lg radius-but">Entrar</button>
            </form>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { post, get } from '../../helpers/api.js';
import Auth from '../../store/auth.js';
import User from '../../store/user.js';

export default {
  data() {
    return {
      loading: false,
      errors: {},
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      // Limpa Erros
      for (let field in this.form) {
        this.errors[field] = '';
      }
      // Tenta registrar
      this.loading = true;
      post('/auth/signin', this.form)
        // Sucesso
        .then(res => {
          let { data } = res;
          Auth.set(data.token, data.refreshToken);
          get('/user/load')
            .then(resp => {
              User.clear();
              User.load(resp.data.user);
            });
          this.$router.push('/auth/home');
        })
        // Erro
        .catch(err => {
          if (!err.response)
            return;
          switch (err.response.status) {
            case 400:
              err.config.data.errors.forEach(error => {
                this.errors[error.field] = error.message;
              });
              break;
            case 401:
              for (let error of err.response.data) {
                console.log(error);
                this.errors[error.field] = error.message;
              }
              break;
          }
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
  }
</script>