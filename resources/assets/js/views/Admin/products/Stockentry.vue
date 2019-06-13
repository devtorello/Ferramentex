<template>
    <div class="col-lg-9"><!-- Conteúdo principal do site -->
      <div class="card">
        <h4 class="card-header">Entrada de estoque</h4>
        <div class="card-block">
          <div class="row">
            <div class="col-lg-12">

              <form>
                <div class="col-lg-12 mt-3">
                  <div class="form-row"><!-- Código e produto -->
                    <div class="col-lg-4">
                      <input type="text" class="form-control input-lg" placeholder="Código" id="id_product" required autofocus>
                    </div>

                    <div class="col-lg-8">
                      <input type="text" class="form-control input-lg" placeholder="Nome do produto" id="name_product" required disabled>
                    </div>
                  </div><!-- Código e produto -->

                  <div class="form-row mt-3"><!-- Marca e departamento -->
                    <div class="col-lg-5">
                      <input type="text" class="form-control input-lg" placeholder="Marca do produto" id="brand_product" required disabled>
                    </div>

                    <div class="col-lg-7">
                      <input type="text" class="form-control input-lg" placeholder="Departamento do produto" id="depth_product" required disabled>
                    </div>
                  </div><!-- Marca e departamento -->
                      
                  <div class="form-row mt-3"><!-- Descrição -->
                    <div class="col-lg-12">
                      <input type="text" class="form-control input-lg" placeholder="Descrição do produto" id="descript_product" required disabled>
                    </div>
                  </div><!-- Descrição-->

                  <div class="form-row mt-3"><!-- Preços e unidades -->
                    <div class="col-lg-4">
                      <input type="text" class="form-control input-lg" placeholder="Preço de compra do prod." id="buy_price" required disabled>
                    </div>

                    <div class="col-lg-4">
                      <input type="text" class="form-control input-lg" placeholder="Preço de venda do prod." id="sell_price" required disabled>
                    </div>

                    <div class="col-lg-4">
                      <input type="text" class="form-control input-lg" placeholder="Unidades" id="unity_product" required>
                    </div>
                  </div><!-- Preços e unidades-->

                  <div class="form-inline mt-3 mb-3">
                    <div class="col-lg-12">
                      <button type="submit" id="btn_cadprod" class="btn btn-success btn-block">Confirmar entrada de estoque</button> 
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div><!-- Fim do conteúdo principal -->
</template>

<script>
export default {}
</script>
