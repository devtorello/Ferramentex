<template>
  <div>
    <app-header></app-header>
    <app-navbar :extender="false"></app-navbar>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
export default {
  components: {
    'app-header': Header,
    'app-navbar': Navbar,
    'app-footer': Footer
  }
}
</script>