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
            <h4 class="card-header">Gerenciamento de clientes</h4>
            <div class="card-block"><!-- Início do card block -->
              <div class="row">
                <div class="col-lg-12 mt-3 mb-3">
                  <div class="container">
                    <div class="input-group"><!-- Início do combobox-->
                      <input type="text" id="serachcli" class="form-control input-lg" placeholder="Insira o nome do cliente" required autofocus>
                      <div class="input-group-append">
                        <button class="btn btn-lg btn-success" type="submit" id="btnconfirmcli">Confirmar</button>
                      </div>
                    </div><!-- Fim do combobox -->
                  </div>
                </div>
              </div>
            </div><!-- Fim do card block -->

            <table class="table table-striped">
              <thead class="dark text-center">
                <tr>
                  <td>ID</td>
                  <td>Nome</td>
                  <td>CPF</td>
                  <td>Excluir</td>
                </tr>
              </thead>
              <tbody class="text-center"> 
                <tr v-for="client in clients" :key="client.id">
                  <td>{{ client.id }}</td>
                  <td>{{ client.full_name }}</td>
                  <td>{{ client.cpf }}</td>
                  <td><button class="btn btn-danger">Excluir</button></td>
                </tr>
              </tbody>
            </table>

          </div>
        </div><!-- Fim do conteúdo principal -->
      </div>
    </div><!-- Fim da sidebar e do conteúdo principal do site-->
</template>

<script>
import { get } from '../../../helpers/api.js';
export default {
  data() {
    return {
      clients: []
    };
  },

  mounted() {
    get('/client', this.clients)
      .then(res => {
        let { data } = res;
        this.clients = data.data;
        console.log(data);
      })
      .catch(error => console.log(error));

  }
}
</script>