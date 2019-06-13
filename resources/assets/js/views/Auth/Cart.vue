<template>
  <div class="container mt-4"><!-- Começo do container -->
    <div class="row">
      <div class="col-lg-12"><!-- Conteúdo principal -->

        <div class="card" style="font-size: 16px;">
          <h4 class="card-header">Caixa</h4>
          <div class="card-block">
            <div class="container mt-3">
              <div class="input-group"><!-- Início do combobox-->
                <input type="text" id="serachcli" class="form-control input-lg" placeholder="Insira o nome do cliente" required autofocus>
                <div class="input-group-append">
                  <button class="btn btn-lg btn-success" type="submit" id="btnconfirmcli">Confirmar</button>
                </div>
              </div><!-- Fim do combobox -->
            </div>
          </div>

        <table class="table table-striped mt-3" style="font-size: 16px;"><!-- Começo do carrinho -->
              <thead class="dark">
                <tr>
                  <td scope="col"> </td>
                  <td scope="col">Código</td>
                  <td scope="col">Produto</td>
                  <td scope="col">Marca</td>
                  <td scope="col">Departamento</td>
                  <td scope="col">Quantidade</td>
                  <td scope="col">Pagamento</td>
                  <td scope="col">Desconto</td>
                  <td scope="col">Preço</td>
                  <td scope="col"> </td>
                </tr>
              </thead>

              <tfoot>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><strong>Total</strong></td>
                  <td><input id="total_compra" class="form-control" type="text" readonly></td>
                </tr>
              </tfoot>
            </table> <!-- Fim do carrinho -->

          <div class="card-block">
            <div class="offset-8 col-lg-4 mb-2">
              <div class="btn-group" role="group">
                <button type="submit" class="btn btn-success btn-lg" id="btn_finish">Finalizar compra</button>
                <button type="button" class="btn btn-dark btn-lg radius-butcx" id="btn_cadclie" data-toggle="modal" data-target="#janela_cpf">Cliente cadastrado</button>
              </div>
            </div>
          </div>
        </div>  
      </div>
    </div><!-- Fim do conteúdo principal -->
  </div><!-- Conteúdo do container -->
</template>

<script>
  export default{}
</script>