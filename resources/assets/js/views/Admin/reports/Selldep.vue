<template>
        <div class="col-lg-9"><!-- Conteúdo principal do site -->
          <div class="card">
            <h4 class="card-header">Relatório de vendas por departamento</h4>
            <div class="card-block">
              <div class="container mt-3 mb-3">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="input-group"><!-- Início do combobox-->
                      <select class="custom-select input-lg" id="cmb_type">
                        <option selected>Escolha o departamento...</option>
                        <option value="Dep1">Departamento 1</option>
                        <option value="Dep2">Departamento 2</option>
                        <option value="All">Todos</option>
                      </select>
                      <div class="input-group-append">
                        <button class="btn btn-success" type="submit" id="btn_confirmt">Buscar</button>
                      </div>
                    </div><!-- Fim do combobox -->
                </div>
              </div>
            </div><!-- Fim do card block -->
          </div>

            <table class="table table-striped">
              <thead class="dark">
                <tr>
                  <td>ID</td>
                  <td>Produto</td>
                  <td>Departamento</td>
                  <td>Unidades</td>
                  <td>Total</td>
                  </tr>
                </thead>
              </table>
          </div>
        </div><!-- Fim do conteúdo principal -->
</template>

<script>
  export default{}
</script>
