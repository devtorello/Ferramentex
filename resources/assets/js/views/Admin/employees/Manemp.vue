<template>
    <div class="col-lg-9"><!-- Conteúdo principal do site -->
      <div class="card">
        <h4 class="card-header">Gerenciamento de contas</h4>
        <div class="card-block"><!-- Início do card block -->
          <div class="container mt-3 mb-3">
            <div class="row">
              <div class="col-lg-12">
                <div class="input-group"><!-- Início do combobox-->
                  <select class="custom-select input-lg" id="cmb_type">
                    <option selected>Escolha um tipo de conta...</option>
                    <option value="Admin">Administrador</option>
                    <option value="Employee">Funcionário</option>
                    <option value="All">Todas</option>
                  </select>
                  <div class="input-group-append">
                    <button class="btn btn-success" type="submit" id="btn_confirmt">Confirmar</button>
                  </div>
                </div><!-- Fim do combobox -->
              </div>
            </div>
          </div><!-- Fim do card block -->

          <table class="table table-striped">
            <thead class="dark text-center">
              <tr>
                <td>ID</td>
                <td>Nome</td>
                <td>Sobrenome</td>
                <td>Usuário</td>
                <td>E-mail</td>
                <td>Tipo da conta</td>
                <td>Editar</td>
                <td>Excluir</td>
              </tr>
            </thead>
            <tbody class="text-center">
              <tr v-for="user in users" :key="user.id">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.last_name }}</td>
                <td>{{ user.username }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.type }}</td>
                <td><button class="btn btn-warning">Editar</button></td>
                <td><button class="btn btn-danger">Excluir</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div><!-- Fim do conteúdo principal -->
</template>

<script>
import { get } from '../../../helpers/api.js';
export default {
  data() {
    return {
      users: []
    };
  },

  mounted() {
    get('/auth', this.users)
      .then(res => {
        let { data } = res;
        this.users = data.data;
        console.log(data);
      })
      .catch(error => console.log(error));
  }
}
</script>
