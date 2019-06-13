<template>
  <div>
    <app-header></app-header>
    <app-navbar :extended="true"></app-navbar>
    <router-view></router-view>
  </div>
</template>
  
<script>
import Header from '../components/Header.vue';
import Navbar from '../components/Navbar.vue';
import Auth from '../store/auth.js';
import User from '../store/user.js';
export default {
  components: {
    'app-header': Header,
    'app-navbar': Navbar
  }
}
</script>