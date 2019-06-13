<template>
  <main class="container mt-5">
    <div class="jumbotron">
      <h1 class="display-4 text-center mb-3s">Bem-vindo ao seu sistema administrativo!</h1>
      <hr class="my-4">
      <p class="text-center">{{ message }}</p>
    </div>
  </main>
</template>

<script>
import Auth from '../../store/auth.js';
  export default {
    data() {
      return {
        authState: Auth.state,
        date: null
      }
    },

    computed: {
      message() {
        return this.authState.token ? 'Seu login foi efetuado com sucesso!' : 'Você não está logado!';
      }
    }
  }
</script>