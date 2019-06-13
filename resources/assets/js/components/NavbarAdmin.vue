<template>
  <div class="col-lg-3"><!-- Sidebar do site -->
    <div class="card">
      <h4 class="card-header text-center">Contas</h4>
      <div class="card-block sidebar-offcanvas">
        <div class="list-group text-center">
            <router-link to="/admin/employee/create"><a class="list-group-item">Cadastro de funcionários</a></router-link>
            <router-link to="/admin/employee/manage"><a class="list-group-item">Gerenciamento de funcionários</a></router-link>
            <router-link to="/admin/employee/managec"><a class="list-group-item">Gerenciamento de clientes</a></router-link>
        </div>
      </div>
    </div>

    <div class="card">
      <h4 class="card-header text-center">Produtos</h4>
      <div class="card-block sidebar-offcanvas">
        <div class="list-group text-center">
            <router-link to="/admin/product/create"><a class="list-group-item">Cadastrar produto</a></router-link>
            <router-link to="/admin/product/entry"><a class="list-group-item">Entrada de estoque</a></router-link>
            <router-link to="/admin/product/depth"><a class="list-group-item">Cadastrar departamento</a></router-link>
        </div>
      </div>
    </div>
    
    <div class="card">
      <h4 class="card-header text-center">Relatórios</h4>
      <div class="card-block sidebar-offcanvas">
        <div class="list-group text-center">
            <router-link to="/admin/report/stock"><a class="list-group-item">Estoque</a></router-link>
            <router-link to="/admin/report/sells"><a class="list-group-item">Vendas totais</a></router-link>
            <router-link to="/admin/report/stockentry"><a class="list-group-item">Entrada de estoque</a></router-link>
        </div>
      </div>
    </div>

  </div><!-- Fim da sidebar -->
</template>

<script>
  export default{}
</script>
