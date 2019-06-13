<template>
    <div class="col-lg-9"><!-- Conteúdo principal do site -->
      <div class="card">
      <h4 class="card-header">Cadastro de funcionários</h4>

        <div class="card-block"><!-- Fim do card block -->
          <div class="row">
            <div class="col-lg-12">
              
            <form @submit.prevent="register">  
              <div class="container">
                <div class="form-row mt-3"><!-- Nome e sobrenome -->

                  <!-- Nome -->
                  <div class="col-lg-6">
                    <input type="text" 
                    :class="{ 'form-control input-lg': true, 'is-invalid': !!errors.name }" 
                    v-model="form.name"
                    placeholder="Nome">
                    <small class="form-text text-danger" v-show="!!errors.name">{{ errors.name }}</small>
                  </div>

                  <!-- Sobrenome -->
                  <div class="col-lg-6">
                    <input type="text" 
                    :class="{ 'form-control input-lg': true, 'is-invalid': !!errors.last_name }" 
                    v-model="form.last_name"
                    placeholder="Sobrenome">
                    <small class="form-text text-danger" v-show="!!errors.last_name">{{ errors.last_name }}</small>
                  </div>

              </div><!-- Nome e sobrenome -->

                <div class="form-row mt-3"><!-- E-mail e usuário -->

                  <div class="col-lg-6">
                    <input type="text" 
                    :class="{ 'form-control input-lg': true, 'is-invalid': !!errors.username }"
                    v-model="form.username" 
                    placeholder="Usuário">
                    <small class="form-text text-danger" v-show="!!errors.username">{{ errors.username }}</small>
                  </div>

                  <div class="col-lg-6">
                    <input type="email" 
                    :class="{ 'form-control input-lg': true, 'is-invalid': !!errors.email }"
                    v-model="form.email" 
                    placeholder="E-mail">
                    <small class="form-text text-danger" v-show="!!errors.email">{{ errors.email }}</small>
                  </div>

                </div><!-- E-mail e usuário -->

                <div class="form-row mt-3"><!-- Senha e re senha -->

                  <div class="col-lg-6">
                    <input type="password" 
                    :class="{ 'form-control input-lg': true, 'is-invalid': !!errors.password }"
                    v-model="form.password" 
                    placeholder="Senha">
                    <small class="form-text text-danger" v-show="!!errors.password">{{ errors.password }}</small>
                  </div>

                  <div class="col-lg-6">
                    <input type="password" 
                    :class="{ 'form-control input-lg': true, 'is-invalid': !!errors.password_confirmation }"
                    v-model="form.password_confirmation"
                    placeholder="Repita a senha">
                    <small class="form-text text-danger" v-show="!!errors.password_confirmation">{{ errors.password_confirmation }}</small>
                  </div>

                </div><!-- Senha e re senha -->

                <div class="form-inline mt-3 mb-3">
                  <button type="submit" 
                  :class="{ 'btn btn-lg btn-success btn-block': true, 'is-loading': loading }">
                  Cadastrar usuário
                  </button>
                </div>

              </div>
            </form>
          </div><!-- Fim do posicionamento do botão de cadastro de funcionários -->
        </div>
      </div>
    </div>          
  </div><!-- Fim do card block -->
</template>

<script>
import { post, get } from '../../../helpers/api.js';
import Auth from '../../../store/auth.js';
import User from '../../../store/user.js';

export default {
  data() {
    return {
      loading: false,  //Used to trigger the errors because it will force the render event
      errors: {},
      form: {
        name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
        type: ''
      }
    }
  },
  methods: {
    /**
     * Tenta registrar um usuário
     */
    register() {
      this.loading = true;
      // Limpa os erros
      for (let field in this.errors) {
        this.errors[field] = '';
      }

      // Tenta registrar
      post('/auth/signup', this.form)
        .then(res => {
          Auth.set(res.data.tokens.token, res.data.tokens.refresh_token);
          User.load(res.data.user);
          this.$router.push('/admin/home');
        })
        .catch(err => {
          console.log(err);
          // Trata os erros
          switch (err.response.status) {
            case 400: // Bad Request - Erros de validação
              err.response.data.errors.forEach(error => {
                this.errors[error.field] = error.message;
              });
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
