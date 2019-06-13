<template>
    <header class="container-fluid"><!-- Início do conteúdo principal da header-->
      <div class="row">
        <nav class="col-lg-12 navbar navbar-expand-lg navbar-dark bg-dark"><!-- Navbar do topo-->
          <div class="container-fluid"><!-- Container dentro da navbar -->
            <div class="mr-auto">
              <p class="navbar-brand"> 
                <span class="ferramen">Ferramen</span>
                <span class="tex">tex</span> 
              </p>
            </div>

            <ul class="navbar-nav ml-auto">
              <router-link to="/" class="nav-item mr-2" tag="li" v-if="!authState.token">
                <a class="nav-link">Home<span class="sr-only">(current)</span></a>
              </router-link>
              <router-link to="/login" class="nav-item" tag="li" v-if="!authState.token">
                <a class="nav-link">Login</a>
              </router-link>

              <router-link to="/auth/home" class="nav-item mr-2" tag="li" v-if="!!authState.token">
                <a class="nav-link">Home<span class="sr-only">(current)</span></a>
              </router-link>
              
              <router-link to="/admin/home" class="nav-item mr-2" tag="li" v-if="currentUser.type === 'ADMIN'">
                <a class="nav-link">Admin</a>
              </router-link>

              <li class="nav-item" v-if="!!authState.token">
                <a href="" @click.prevent="logout" class="nav-link" v-if="!logoutLoading">Logout</a>
                <a href="#" class="nav-link" v-else>
                  <i class="fas fa-circle-notch fa-spin"></i>
                </a>
              </li>

            </ul>
          </div><!-- Fim do container dentro da navbar -->
        </nav><!-- Fim da navbar-->
      </div><!-- Fim do logo da navbar-->
    </header><!-- Fim da barra de navegação/logo/header-->
</template>

<script>
import { post } from '../helpers/api.js';
import Auth from '../store/auth.js';
import User from '../store/user.js';
export default {
data() {
    return {
      logoutLoading: false,
      authState: Auth.state,
      currentUser: User.data
    };
  },
  methods: {
    logout() {
      this.logoutLoading = true;
      Auth.remove();
      User.clear();
      this.logoutLoading = false;
      this.$router.push('/');
    }
  }
}
</script>
