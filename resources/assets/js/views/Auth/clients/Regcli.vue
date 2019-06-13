<template>
  <div class="container mt-4"><!-- Sidebar e conteúdo principal do site -->
      <div class="row">
        <div class="col-lg-3"><!-- Sidebar do site -->
          <div class="card">
            <h4 class="card-header">Atalhos</h4>
            <div class="card-block sidebar-offcanvas">
              <div class="list-group">
                  <router-link to="/auth/client/create"><a class="list-group-item">Cadastro de clientes</a></router-link>
                  <router-link to="/auth/client/manage"><a class="list-group-item">Gerenciamento de clientes</a></router-link>
              </div>
            </div>
          </div>
        </div><!-- Fim da sidebar -->
    
        <div class="offset-1 col-lg-8"><!-- Conteúdo principal do site -->
          <div class="card">
            <h4 class="card-header">Cadastro de funcionários</h4>

            <div class="card-block"><!-- Início do card block -->
              <div class="row"><!-- Posicionamento dos inputs de nome e cpf -->
                <div class="col-lg-12">

                  <form @submit.prevent="cadastrar">  
                    <div class="container">
                      <div class="form-row mt-3"><!-- Nome e sobrenome -->

                      <!-- Nome -->
                      <div class="col-lg-6">
                        <input type="text" 
                        :class="{ 'form-control input-lg': true, 'is-invalid': !!errors.full_name }" 
                        v-model="form.full_name"
                        placeholder="Nome inteiro">
                        <small class="form-text text-danger" v-show="!!errors.full_name">{{ errors.full_name }}</small>
                      </div>

                      <!-- Cpf -->
                      <div class="col-lg-6">
                        <input type="text" 
                        :class="{ 'form-control input-lg': true, 'is-invalid': !!errors.cpf }" 
                        v-model="form.cpf"
                        placeholder="CPF"
                        @keyup="checkCPF">
                        <small class="form-text text-danger" v-show="!!errors.cpf">{{ errors.cpf}}</small>
                     </div>

                    <button type="submit" 
                    :class="{ 'btn btn-lg btn-success btn-block mt-3 mb-3': true, 'is-loading': loading }">
                    Cadastrar cliente
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div><!-- Fim do card block -->
      </div>
    </div>
  </div><!-- Fim do conteúdo principal -->
</div>



</template>

<script>
import { post } from '../../../helpers/api.js';

export default {
  data() {
    return {
      loading: false,
      errors: {},
      form: {
        full_name: '',
        cpf: ''
      }
    };
  },
  methods: {
    checkCPF() {
      // this.form.cpf = this.form.cpf.replace(/\D/g, '');
    },

    cadastrar() {
      this.loading = true;
      for (let field in this.errors) {
        this.errors[field] = '';
      }

      post('/client', this.form)
        .then(console.log)
        .catch(err => {
          switch (err.response.status) {
            case 400:
              for (let error of err.response.data.errors) {
                this.errors[error.field] = error.message;
              };
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
