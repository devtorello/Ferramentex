<template>
  <div class="container mt-4"><!-- Sidebar e conteúdo principal do site -->
    <div class="row">
      <div class="col-lg-12"><!-- Conteúdo principal do site -->
          <div class="card">
            <h4 class="card-header text-center">Selecione o que deseja</h4>
            <div class="card-block">
              <div class="container mt-3">
                <div class="form-row">
                  <div class="col-lg-12">
                    <input type="text" id="txtprod" class="form-control input-block input-lg mt-2" aria-label="Product ID" placeholder="Insira o nome, o ID, marca ou departamento do produto...">
                  </div>

                  <div class="col-lg-12">
                    <button type="submit" class="btn btn-success btn-block btn-lg btn-edit  mt-3" id="btnok">Confirmar</button>
                  </div>

                </div>
              </div>
            </div>
              
            <h4 class="card-header text-center mt-3">Produtos</h4>
            <div class="card-body">

              <div class="container">
                <div class="row">
                <div class="col-md-4" :key="product.id" v-for="product in products">
                  <div class="card mt-2">
                    <div class="card-body">
                      <h3 class="card-title text-center">{{ product.name}}</h3>
                      <p class="card-text text-center">{{ product.description }}</p>
                      <p class="card-text text-center">R$ {{ product.sell_price }}</p>
                    </div>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div><!-- Fim do conteúdo principal -->
    </div>
  </div>
</template>

<script>
import { get } from '../../helpers/api.js';
export default {
  data() {
    return {
      products: []
    };
  },

  mounted() {
    get('/product', this.form)
      .then(res => {
        let { data } = res;
        this.products = data.data;
        console.log(data);
      })
      .catch(error => {console.log('Error', error);});
  }
}
</script>
