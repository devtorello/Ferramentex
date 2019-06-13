<template>
    <div class="container mt-4" v-if="extended"><!-- Conteúdo da barra de navegação principal-->
      <div class="row">
        <nav class="col-lg-12 navbar navbar-expand navbar-dark">
          <ul class="navbar-nav"><!-- Links do menu -->
            <router-link to="/auth/cart" class="nav-item ml-3 mr-3" tag="li"><a class="nav-link">Caixa</a></router-link>
            <router-link to="/auth/client/manage" class="nav-item ml-3 mr-3" tag="li"><a class="nav-link">Clientes</a></router-link>
            <router-link to="/auth/product" class="nav-item ml-3 mr-3" tag="li"><a class="nav-link">Produtos</a></router-link>
            <router-link to="/auth/stock" class="nav-item ml-3 mr-3" tag="li"><a class="nav-link">Estoque</a></router-link>
          </ul>
        </nav>
      </div>
    </div><!-- Fim do conteúdo da barra de navegação principal -->
</template>

<script>
export default {
    props: [ 'extended' ]
}
</script>

<style>

</style>