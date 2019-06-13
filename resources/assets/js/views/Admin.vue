<template>
  <div>
    <app-header></app-header>
    <div class="container-fluid mt-4 float-left"><!-- Sidebar e conteúdo principal do site -->
      <div class="row">
        <app-navbaradmin></app-navbaradmin>
        <router-view></router-view>
      </div>
    </div>
    
  </div>
</template>
  
<script>
import Header from '../components/Header.vue';
import NavbarAdmin from '../components/NavbarAdmin.vue';
export default {
  components: {
    'app-header': Header,
    'app-navbaradmin': NavbarAdmin
  }
}
</script>