<template>
  <div class="container">
    <div class="row">
      <div class="offset-4 col-lg-4 offset-4 box-recu">
        <h3 class="text-center text-login">Recupere sua senha</h3>
        <p class="text-sublogin text-muted text-center">Insira o e-mail para ter acesso à senha.</p>

        <!-- Inputs de login/recuperar senha/botão -->
        <div class="row">
          <div class="offset-2 col-lg-8 offset-2">

            <form class="form-group">
              <input type="email" id="inprecu" class="form-control mb-4" placeholder="E-mail" aria-label="E-mail" required autofocus>
              <div class="text-right float-right" style="margin-bottom: 10px;"><router-link to="/auth/login" class="recu-senha"><a>Volte para o login</a></router-link></div>
              <button type="submit" id="btnrecup" class="btn btn-warning btn-block btn-lg radius-but mb-3">Recuperar</button>
            </form>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>