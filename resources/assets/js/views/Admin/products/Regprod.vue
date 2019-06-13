<template>
  <div class="col-lg-9"><!-- Conteúdo principal do site -->
    <div class="card">
      <h4 class="card-header">Cadastrar produtos</h4>
      <div class="card-block">
        <div class="row">
          <div class="col-lg-12">
                  
            <form @submit.prevent="cadastrar">
              <div class="col-lg-12 mt-3">

                <div class="form-row"><!-- Código e produto -->
                  <div class="col-lg-4">
                    <input type="text" 
                    :class="{ 'form-control input-lg': true, 'is-invalid': !!errors.sku }"
                    v-model="form.sku" 
                    placeholder="Código">
                    <small class="form-text text-danger" v-show="!!errors.sku">{{ errors.sku }}</small>
                  </div>

                  <div class="col-lg-8">
                    <input type="text"
                    :class="{ 'form-control input-lg': true, 'is-invalid': !!errors.name }" 
                    v-model="form.name"
                    placeholder="Nome do produto">
                    <small class="form-text text-danger" v-show="!!errors.name">{{ errors.name }}</small>
                  </div>
                </div><!-- Código e produto -->

                <div class="form-row mt-3"><!-- Marca e departamento -->
                  <div class="col-lg-7">
                    <input type="text" 
                    :class="{ 'form-control input-lg': true, 'is-invalid': !!errors.description }" 
                    placeholder="Breve descrição do produto"
                    v-model="form.description">
                    <small class="form-text text-danger" v-show="!!errors.description">{{ errors.description }}</small>
                  </div>

                  <div class="col-lg-5">
                    <input type="text" 
                    :class="{ 'form-control input-lg': true, 'is-invalid': !!errors.brand }" 
                    placeholder="Marca do produto"
                    v-model="form.brand">
                    <small class="form-text text-danger" v-show="!!errors.brand">{{ errors.brand }}</small>
                  </div>
                </div><!-- Marca e departamento -->

                <div class="form-row mt-3"><!-- Preços e unidades -->
                  <div class="col-lg-4">
                    <input type="text" 
                    :class="{ 'form-control input-lg': true, 'is-invalid': !!errors.buy_price }" 
                    placeholder="Preço de compra"
                    v-model="form.buy_price">
                    <small class="form-text text-danger" v-show="!!errors.buy_price">{{ errors.buy_price }}</small>
                  </div>

                  <div class="col-lg-4">
                    <input type="text" 
                    :class="{ 'form-control input-lg': true, 'is-invalid': !!errors.sell_price }" 
                    placeholder="Preço de venda" 
                    v-model="form.sell_price">
                    <small class="form-text text-danger" v-show="!!errors.sell_price">{{ errors.sell_price }}</small>
                  </div>

                  <div class="col-lg-4">
                    <input type="text" 
                    :class="{ 'form-control input-lg': true, 'is-invalid': !!errors.stock_quantity }"
                    placeholder="Unidades"
                    v-model="form.stock_quantity">
                    <small class="form-text text-danger" v-show="!!errors.stock_quantity">{{ errors.stock_quantity }}</small>
                  </div>
                </div><!-- Preços e unidades-->

                <button type="submit" 
                  :class="{ 'btn btn-lg btn-success btn-block mt-3 mb-3': true, 'is-loading': loading }">
                  Adicionar produto
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
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
        sku: '',
        name: '',
        description: '',
        brand: '',
        buy_price: '',
        sell_price: '',
        stock_quantity: '',
        status: ''
      }
    };
  },

  methods: {
    //Tenta registrar o produto
    cadastrar(){
      this.loading = true;
      //Limpa os erros
      for(let field in this.errors){
        this.errors[field] = '';
      }

      //Tenta registrar
      post('/product', this.form)
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