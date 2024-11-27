<template>
  <div class="container-fluid">

    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">PEDIDOS</h1>
      <!-- <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                class="fas fa-download fa-sm text-white-50"></i> Generar Resumen</a> -->
    </div>

    <!-- Fila con PEDIDOS -->

    <!-- Content Row -->

    <div class="container-fluid">
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-info">LISTADO DE PEDIDOS <img class="img-fluid" style="width:50px;"
              src="../assets/new/img/undraw_posting_photo.svg" alt="..."></h6>
          <!-- <div class="text-right">
                            <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style="width:5rem;" src="../assets/new/img/undraw_posting_photo.svg" alt="...">
                        </div> -->
        </div>
        <div class="card-body">
          <!-- <div class="text-left">
                            <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style="width: 10rem;" src="../assets/new/img/undraw_posting_photo.svg" alt="...">
                        </div> -->
          <!-- Tabla Pedidos -->
          <div class="table-responsive">
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
              <thead>
                <tr>
                  <th>PRODUCTO</th>
                  <th>DIRECCIÓN DE ENTREGA</th>
                  <th>MANAGER</th>
                  <th>GESTOR</th>
                  <th>MÉTODO DE PAGO</th>
                  <th>ESTADO</th>
                </tr>
              </thead>
              <!-- <tfoot>
                                    <tr>
                                        <th>PRODUCTO</th>
                                        <th>DIRECCIÓN DE ENTREGA</th>
                                        <th>MANAGER</th>
                                        <th>GESTOR</th>
                                        <th>MÉTODO DE PAGO</th>
                                        <th>ESTADO</th>
                                    </tr>
                                </tfoot> -->
              <tbody>
                <tr>
                  <th>Tablet</th>
                  <th>La Habana Cuba</th>
                  <th>Eugenio</th>
                  <th>Pepe</th>
                  <th>Pendiente</th>
                  <th>Pendiente</th>
                </tr>
                <tr>
                  <th>Tablet</th>
                  <th>La Habana Cuba</th>
                  <th>Eugenio</th>
                  <th>Pepe</th>
                  <th>Pendiente</th>
                  <th>Pendiente</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>


    </div>

  </div>
</template>
<script setup>
import router from '@/router';
import { onMounted } from 'vue';

onMounted(() => {
if (localStorage.getItem('userName')) {
    // listado.value = JSON.parse(localStorage.getItem('ListadoCache'));
    // obtenerListadoLimpio();
    // listadoSucursales.value = JSON.parse(localStorage.getItem('ListadoCacheSucursal'));
    // listadoSucursales = obtenerListadoLimpioSucursales();
  } else {
    router.push('/login');
  }
  // consultar();
})

</script>
<style lang="scss" scoped></style>
