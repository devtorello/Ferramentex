<template>
   <div class="container mt-4"><!-- Sidebar e conteúdo principal do site -->
      <div class="row">
        <div class="col-lg-12"><!-- Conteúdo principal do site -->
          <div class="card">
            <h4 class="card-header">Estoque principal</h4>
            <div class="card-block">
              <div class="container mt-3">
                <div class="form-row">
                  <div class="col-lg-12">
                    <input type="text" id="txtprod" class="form-control input-block input-lg mt-2" aria-label="Product ID" placeholder="Insira o nome, o ID ou marca do produto...">
                  </div>

                  <div class="col-lg-12">
                    <button type="submit" class="btn btn-success btn-block btn-lg btn-edit  mt-3" id="btnok">Confirmar</button>
                  </div>
                </div>
              </div>
            
              <table class="table table-striped mt-3">
                <thead class="dark text-center">
                  <td>Código do produto</td>
                  <td>Nome</td>
                  <td>Descrição</td>
                  <td>Marca</td>
                  <td>Preço de compra</td>
                  <td>Preço de venda</td>
                  <td>Unidades</td>
                  <td>Status</td>
                </thead>
                <tbody class="text-center">
                  <tr v-for="product in products" :key="product.id">
                    <td>{{ product.sku }}</td>
                    <td>{{ product.name }}</td>
                    <td>{{ product.description }}</td>
                    <td>{{ product.brand }}</td>
                    <td>R$ {{ product.buy_price }}</td>
                    <td>R$ {{ product.sell_price }}</td>
                    <td>{{ product.stock_quantity }}</td>
                    <td>{{ product.status }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div><!-- Fim do conteúdo principal -->
      </div>
    </div><!-- Fim da sidebar e do conteúdo principal do site-->
</template>

<script>
import { get } from '../../helpers/api.js';
export default {
  data() {
    return{
      products: []
    };
  },

  mounted() {
    get('/product', this.products)
      .then(res =>{
        let { data } = res;
        this.products = data.data;
        console.log(data);
      })
      .catch(error => console.log(error));
  } 
}
</script>