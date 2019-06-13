<template>
  <div class="col-lg-9"><!-- Conteúdo principal do site -->
    <div class="card">
      <h4 class="card-header">Cadastrar departamento</h4>
      <div class="card-block">
        <div class="row">
          <div class="col-lg-12">
                  
            <form @submit.prevent="cadastrar">
              <div class="col-lg-12 mt-3">
                <div class="form-group">
                  <input type="text" 
                  :class="{ 'form-control input-lg mt-3':true, 'is-invalid': !!errors.name }" 
                  placeholder="Insira o nome do novo departamento"
                  v-model="form.name">
                  <small class="form-text text-danger" v-show="!!errors.name">{{ errors.name }}</small>

                  <textarea 
                  :class="{ 'form-control mt-3': true, 'is-invalid': !! errors.description }"
                  placeholder="Insira uma breve descrição do departamento..."
                  v-model="form.description"
                  rows="2"></textarea>
                  <small class="form-text text-danger" v-show="!!errors.description">{{ errors.description }}</small>

                  <button type="submit" 
                  :class="{ 'btn btn-lg btn-success btn-block mt-3': true, 'is-loading': loading }">Adicionar departamento</button>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  </div><!-- Fim do conteúdo principal -->
</template>

<script>
import { post } from '../../../helpers/api.js';

export default {
  data() {
    return {
      loading: false,
      errors: {},
      form: {
        name: '',
        description: ''
      }
    };
  },
  methods: {
    cadastrar() {
      this.loading = true;
      for (let field in this.errors) {
        this.errors[field] = '';
      }

      post('/category', this.form)
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