<template>
  <div v-if="!esperando" class="container-fluid">

    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">PÁGINA INICIAL</h1>
      <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-info shadow-sm" v-b-tooltip.hover
        title="Generar resumen diario" @click="generar_pdf()"><i class="fas fa-download fa-sm text-white-50"></i>
        Generar Resumen</a>
    </div>

    <!-- Content Row -->
    <div class="row">

      <!-- Cantidad de Moneda nacional -->
      <div class="col-xl-2 col-md-6 mb-4">
        <div class="card border-left-primary border-bottom-primary shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="h5 mb-0 font-weight-bold text-gray-800">100</div>
                <div class="text-md font-weight-bold text-primary mb-1">
                  Productos registrados</div>
              </div>
              <div class="col-auto">
                <i class="fas fa-poll-h fa-3x text-gray-300"></i>
              </div>
              <hr>

            </div>
          </div>
          <div class="card-footer"><a href="#"><label>Más información <i
                  class="far fa-arrow-alt-circle-right"></i></label></a></div>
        </div>
      </div>
      <!-- total de compras -->
      <div class="col-xl-2 col-md-6 mb-4">
        <div class="card border-left-success shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="h5 mb-0 font-weight-bold text-gray-800">S./ 109.15</div>
                <div class="text-md font-weight-bold text-success mb-1">
                  Total de compras</div>
              </div>
              <div class="col-auto">
                <i class="fas fa-shopping-bag fa-3x text-gray-300"></i>
              </div>
              <hr>

            </div>
          </div>
          <div class="card-footer"><a href="#"><label>Más información <i
                  class="far fa-arrow-alt-circle-right"></i></label></a></div>
        </div>
      </div>
      <!-- Total de ventas  -->
      <div class="col-xl-2 col-md-6 mb-4">
        <div class="card border-left-warning border-bottom-warning shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="h5 mb-0 font-weight-bold text-gray-800">100</div>
                <div class="text-md font-weight-bold text-warning mb-1">
                  Total de ventas</div>
              </div>
              <div class="col-auto">
                <i class="fas fa-cart-plus fa-3x text-gray-300"></i>
              </div>
              <hr>

            </div>
          </div>
          <div class="card-footer"><a href="#"><label>Más información <i
                  class="far fa-arrow-alt-circle-right"></i></label></a></div>
        </div>
      </div>

      <!-- Ganancias -->
      <div class="col-xl-2 col-md-6 mb-4">
        <div class="card border-left-danger border-bottom-danger shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="h5 mb-0 font-weight-bold text-gray-800">100</div>
                <div class="text-md font-weight-bold text-danger mb-1">
                  Ganancias</div>
              </div>
              <div class="col-auto">
                <i class="fas fa-chart-line fa-3x text-gray-300"></i>
              </div>
              <hr>

            </div>
          </div>
          <div class="card-footer"><a href="#"><label>Más información <i
                  class="far fa-arrow-alt-circle-right"></i></label></a></div>
        </div>
      </div>

      <!-- productos poco en stock  -->
      <div class="col-xl-2 col-md-6 mb-4">
        <div class="card border-left-info border-bottom-info shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="h5 mb-0 font-weight-bold text-gray-800">3</div>
                <div class="text-md font-weight-bold text-info mb-1">
                  Productos poco stock</div>
              </div>
              <div class="col-auto">
                <i class="fas fa-briefcase fa-3x text-gray-300"></i>
              </div>
              <hr>

            </div>
          </div>
          <div class="card-footer"><a href="#"><label>Más información <i
                  class="far fa-arrow-alt-circle-right"></i></label></a></div>
        </div>
      </div>

      <!-- Ventas del dia  -->
      <div class="col-xl-2 col-md-6 mb-4">
        <div class="card border-left-secondary border-bottom-secondary shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="h5 mb-0 font-weight-bold text-gray-800">100</div>
                <div class="text-md font-weight-bold text-secondary mb-1">
                  Ventas del día</div>
              </div>
              <div class="col-auto">
                <i class="fas fa-chart-line fa-3x text-gray-300"></i>
              </div>
              <hr>

            </div>
          </div>
          <div class="card-footer"><a href="#"><label>Más información <i
                  class="far fa-arrow-alt-circle-right"></i></label></a></div>
        </div>
      </div>

    </div>


    <!-- Content Row -->

    <div class="row">

      <div class="col-xl-12 col-lg-7">

        <!-- Area Chart -->
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">TOTAL DE VENTAS DEL MES</h6>
          </div>
          <div class="card-body">

              <BarChart ref="doughnutRef" :chartData="testData" :options="options" />

          </div>
        </div>

      </div>


    </div>

    <div class="row">

      <!-- Usuarios -->
      <div class="col-md-5 col-lg-6">
        <div class="card shadow mb-4">
          <!-- Card Header - Dropdown -->
          <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 class="m-0 font-weight-bold text-info">PRODUCTOS MÁS VENDIDOS</h6>
            <div class="dropdown no-arrow">
              <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
              </a>
              <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                aria-labelledby="dropdownMenuLink">
                <div class="dropdown-header">Acciones:</div>
                <a class="dropdown-item" href="#"><span class="fa fa-phone"></span> Llamar</a>
                <a class="dropdown-item" href="#"><span class="fa fa-comments"></span> Enviar mensaje</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Otras</a>
              </div>
            </div>
          </div>
          <!-- Card Body -->
          <div class="card-body">

            <div class="table-responsive">
              <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                  <tr style="text-align: center;">
                    <th>No</th>
                    <!-- <th>FOTO</th> -->
                    <th>CÓDIGO</th>
                    <th>SUCURSAL</th>
                    <th>DESCRIPCION</th>
                    <th>OBSERVACIONES</th>
                    <!-- <th>ACCIONES</th> -->
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="datos in datosPaginados" :key="datos.id">
                    <td v-if="datos.attributes.deleted_at == null">{{ datos.id }}</td>
                    <!-- <td style="text-align: end;"><img class="img-profile rounded-circle img-thumbnail"
                          src="../assets/new/img/undraw_profile_1.svg"> <i class="fas fa-circle text-primary"></i></td> -->
                    <td v-if="datos.attributes.deleted_at == null">{{ datos.attributes.codigo }}</td>
                    <td v-if="datos.attributes.deleted_at == null">Sucursal</td>
                    <td v-if="datos.attributes.deleted_at == null">{{ datos.attributes.descripcion }}</td>
                    <td v-if="datos.attributes.deleted_at == null">{{ datos.attributes.observacion }}</td>
                    <!-- <td v-if="datos.attributes.deleted_at == null" style="text-align: center;">
                      <button class="btn btn-success btn-sm btn-circle" @click="clickEditar(datos.id)" v-b-tooltip.hover
                        title="Editar"><span class="fas fa-edit"></span></button>&nbsp;

                      <button class="btn btn-danger btn-sm btn-circle"
                        @click="borrarU(datos.id, datos.attributes.codigo)" v-b-tooltip.hover title="Eliminar"><span
                          class="fas fa-trash"></span></button>
                    </td> -->
                  </tr>


                </tbody>
              </table>

              <div class="text-center">
                <nav aria-label="Page navigation example" style="text-align: center;">
                  <label>Mostrando &nbsp;</label>
                  <select style="width: 60px" @change="cambiarLimite()" v-model="elementPagina">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>

                  <label>&nbsp;registros </label>
                  <ul class="pagination Mestilo btn-sm">

                    <li class="page-item" :class="`${disableA}`" @click="obtenerAnterior"><a class="page-link"
                        href="#">Anterior</a></li>
                    <li v-for="pagina in cantidad" class="page-item" v-bind:class="isActivo(pagina)" :key="pagina"
                      @click="obtenerPagina(pagina)"><a class="page-link" href="#">{{ pagina
                        }}</a></li>
                    <li class="page-item" :class="`${disableS}`" @click="obtenerSiguiente"><a class="page-link"
                        href="#">Siguiente</a></li>
                  </ul>
                </nav>
              </div>
            </div>

            <!-- <div class="mt-4 text-center small">
              <span class="mr-2">
                <i class="fas fa-circle text-primary"></i> Activo
              </span>
              <span class="mr-2">
                <i class="fas fa-circle text-success"></i> En espera
              </span>
              <span class="mr-2">
                <i class="fas fa-circle text-info"></i> Baja
              </span>
            </div> -->
          </div>
        </div>
      </div>

      <!--Listado de productos -->
      <div class="col-md-6 col-lg-6">
        <div class="card shadow mb-4">
          <!-- Card Header - Dropdown -->
          <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 class="m-0 font-weight-bold text-info">PRODUCTOS POCO EN STOCK</h6>
          </div>
          <!-- Card Body -->
          <div class="card-body">

            <div class="table-responsive">
              <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                  <tr style="text-align: center;">
                    <th>No</th>
                    <!-- <th>FOTO</th> -->
                    <th>CÓDIGO</th>
                    <th>SUCURSAL</th>
                    <th>DESCRIPCION</th>
                    <th>OBSERVACIONES</th>
                    <!-- <th>ACCIONES</th> -->
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="datos in datosPaginados" :key="datos.id">
                    <td v-if="datos.attributes.deleted_at == null">{{ datos.id }}</td>
                    <!-- <td style="text-align: end;"><img class="img-profile rounded-circle img-thumbnail"
                          src="../assets/new/img/undraw_profile_1.svg"> <i class="fas fa-circle text-primary"></i></td> -->
                    <td v-if="datos.attributes.deleted_at == null">{{ datos.attributes.codigo }}</td>
                    <td v-if="datos.attributes.deleted_at == null">Sucursal</td>
                    <td v-if="datos.attributes.deleted_at == null">{{ datos.attributes.descripcion }}</td>
                    <td v-if="datos.attributes.deleted_at == null">{{ datos.attributes.observacion }}</td>
                    <!-- <td v-if="datos.attributes.deleted_at == null" style="text-align: center;">
                      <button class="btn btn-success btn-sm btn-circle" @click="clickEditar(datos.id)" v-b-tooltip.hover
                        title="Editar"><span class="fas fa-edit"></span></button>&nbsp;

                      <button class="btn btn-danger btn-sm btn-circle"
                        @click="borrarU(datos.id, datos.attributes.codigo)" v-b-tooltip.hover title="Eliminar"><span
                          class="fas fa-trash"></span></button>
                    </td> -->
                  </tr>


                </tbody>
              </table>

              <div class="text-center">
                <nav aria-label="Page navigation example" style="text-align: center;">
                  <label>Mostrando &nbsp;</label>
                  <select style="width: 60px" @change="cambiarLimite()" v-model="elementPagina">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>

                  <label>&nbsp;registros </label>
                  <ul class="pagination Mestilo btn-sm">

                    <li class="page-item" :class="`${disableA}`" @click="obtenerAnterior"><a class="page-link"
                        href="#">Anterior</a></li>
                    <li v-for="pagina in cantidad" class="page-item" v-bind:class="isActivo(pagina)" :key="pagina"
                      @click="obtenerPagina(pagina)"><a class="page-link" href="#">{{ pagina
                        }}</a></li>
                    <li class="page-item" :class="`${disableS}`" @click="obtenerSiguiente"><a class="page-link"
                        href="#">Siguiente</a></li>
                  </ul>
                </nav>
              </div>
            </div>

          </div>
        </div>
      </div>
      <!-- FIN -->



    </div>

    <template v-if="esperando">
      <div v-on="loading('Creando archivo PDF...')">

      </div>
    </template>

  </div>
</template>

<script setup>

import { computed, onMounted, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import router from '@/router';
import Swal from 'sweetalert2';
import { BarChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const data = ref([30, 40, 60, 70, 5]);

const doughnutRef = ref();

const testData = {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
      datasets: [
        {
          data: [30, 40, 60, 70, 5],
          backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
        },
      ],
    };

const options = ref({
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
        },
        title: {
          display: true,
          text: 'Ventas del mes',
        },
      },
    });

// const testData = computed(() => ({
//       labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
//       datasets: [
//         {
//           data: data.value,
//           backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
//         },
//       ],
//     }));

const esperando = ref(false);

const loading = (texto) => {
  Swal.fire({
    // title: "Sweet!",
    text: texto,
    imageUrl: "/cargando2.gif",
    imageWidth: 100,
    imageHeight: 100,
    imageAlt: "Custom image",
    showConfirmButton: false
  });
}

// let recarga = ref(false);

// const Cosc_Clar = ref('info');

const route = useRoute();
const bodyLogin = document.getElementById('page-top');

onMounted(async () => {
  if (localStorage.getItem('userName')) {
    bodyLogin.classList.remove('bg-gradient-info');
    // bodyLogin.classList.add('sidebar-toggled');
    // console.log("INICIO")
    // }
    // Cosc_Clar.value = localStorage.getItem('background');
    // consultar();
    listado.value = JSON.parse(localStorage.getItem('ListadoCache'));
    obtenerListadoLimpio();
  } else {
    router.push('/login');
  }

})

const cambiarLimite = () => {
  let i = 0;
  newListado.value = [];
  for (let index = 0; index < listado.value.length; index++) {
    const element = listado.value[index];
    if (element.attributes.deleted_at == null) {
      newListado.value[i] = element;
      i++;
    }
  }
  datosSinPaginar.value = newListado.value;
  cantidad.value = Math.ceil(newListado.value.length / elementPagina.value);
  obtenerPagina(1);
}

// CRUD completo

let errors = ref([]);

let listado = ref([]);

let datosPaginados = ref([]);

let datosSinPaginar = ref([]);

let buscando = ref('');

let editar = ref(false);

let id = ref('');

let cantidad = ref(0);

let elementPagina = ref(5);

let inicio = ref(0);

let fin = ref(0);

let paginaActual = ref(1);

let disableA = ref('');
let disableS = ref('');

let setTiempoBusca = '';

let cargado = ref(false);

const ipPublica = ref('192.168.121.123');

const formProductos = reactive({
  codigo: "",
  descripcion: "",
  observacion: "",
})

const clickEditar = async (idSelect) => {
  editar.value = true;
  localStorage.setItem("editar", editar.value);
  id.value = idSelect;

  let response = await axios.get(`http://localhost:8000/public/api/nom/productos/${id.value}`)
    .then((response) => {
      formProductos.descripcion = response.data.descripcion;
      formProductos.codigo = response.data.codigo;
      formProductos.observacion = response.data.observacion;
    })
}

const cancelarU = () => {
  editar.value = false;
  formProductos.descripcion = '';
  formProductos.codigo = '';
  formProductos.observacion = '';
}

const agregarU = () => {
  axios.post('http://localhost:8000/public/api/nom/productos', formProductos)
    .then((response) => {
      // console.log(response)
      consultar();
      formProductos.observacion = ''
      formProductos.descripcion = '';
      formProductos.codigo = '';
      toast.fire({
        icon: "success",
        title: "Agregado satisfactoriamente."
      })
      editar.value = false;
      localStorage.setItem("editar", editar.value);
    })
    .catch((error) => {
      if (error.response.status === 400) {
        errors.value = error.response.data;
      }
    })
}

const editarU = () => {
  axios.put(`http://localhost:8000/public/api/nom/productos/${id.value}`, formProductos)
    .then((response) => {
      // console.log(response)
      consultar();
      formProductos.descripcion = ''
      formProductos.observacion = '';
      formProductos.codigo = '';
      toast.fire({
        icon: "success",
        title: "Editado satisfactoriamente."
      })
      editar.value = false;
      localStorage.setItem("editar", editar.value);
    })
    .catch((error) => {
      if (error.response.status === 400) {
        errors.value = error.response.data;
      }
    })
}

const borrarU = (id, correo) => {
  Swal.fire({
    title: "Confirmación",
    text: `Está a punto de eliminar el producto: ${correo}`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, eliminar"
  }).then((result) => {
    if (result.isConfirmed) {
      // Eliminar //
      axios.delete(`http://${ipPublica.value}/fullstack/public/productos/${id}`)
        .then(() => {
          esperando.value = false;
          consultar();
          cancelarU();
          cerrarAlert();
          Swal.fire({
            title: "Eliminado",
            text: "Producto eliminado satisfactoriamente.",
            icon: "success"
          });
          cargado.value = false;
        })


    }
  });
}
// Fin CRUD

const cerrarAlert = () => {
  Swal.close();
}

// Paginado
const obtenerPagina = (nopage) => {
  paginaActual.value = nopage;
  inicio = (nopage * elementPagina.value) - elementPagina.value;
  fin = (nopage * elementPagina.value);
  datosPaginados.value = [];
  datosPaginados.value = datosSinPaginar.value.slice(inicio, fin);

}

const obtenerAnterior = () => {
  if (paginaActual.value > 1) {
    paginaActual.value--;
    disableA.value = '';
    disableS.value = '';
  } else {
    disableA.value = 'disabled';
    disableS.value = '';
  }
  obtenerPagina(paginaActual.value);
}

const obtenerSiguiente = () => {
  if (paginaActual.value < cantidad.value) {
    paginaActual.value++;
    disableS.value = '';
    disableA.value = '';
  } else {
    disableS.value = 'disabled';
    disableA.value = '';
  }
  obtenerPagina(paginaActual.value);
}

const isActivo = (nopage) => {
  if (nopage == paginaActual.value) {
    if (nopage == 1) {
      disableA.value = 'disabled';
      disableS.value = '';
    } else {
      if (nopage == cantidad.value) {
        disableS.value = 'disabled';
        disableA.value = '';
      } else {
        if ((nopage != 1) && (nopage != cantidad.value)) {
          disableS.value = '';
          disableA.value = '';
        }
      }
    }

    return 'active';
  } else {
    return '';
  }
}

let newListado = ref([]);

let newListadoSucursal = ref([]);

const obtenerListadoLimpio = () => {
  let i = 0;
  if (cargado.value = false) {
    newListado.value = [];
    for (let index = 0; index < listado.value.length; index++) {
      const element = listado.value[index];
      if (element.attributes.deleted_at == null) {
        newListado.value[i] = element;
        i++;
      }
    }
    datosSinPaginar.value = newListado.value;
    cantidad.value = Math.ceil(newListado.value.length / elementPagina.value);
    obtenerPagina(1);
    cargado.value = true;
  } else {
    newListado.value = []
    for (let index = 0; index < listado.value.length; index++) {
      const element = listado.value[index];
      if (element.attributes.deleted_at == null) {
        newListado.value[i] = element;
        i++;
      }
    }
    datosSinPaginar.value = newListado.value;
    cantidad.value = Math.ceil(newListado.value.length / elementPagina.value);
    obtenerPagina(1);
  }

}

const consultar = async () => {
  if (cargado.value == false) {
    let response = await axios.get(`http://` + ipPublica.value + `/fullstack/public/productos`)
      .then((response) => {
        listado.value = response.data.data;
        almacenDatosProductos(listado.value);
        obtenerListadoLimpio();
        actualizar_datos();
        cargado.value = true;
        // console.log(response.data.data)
        // datosSinPaginar.value = response.data.data;
        // cantidad.value = Math.ceil(response.data.data.length / elementPagina.value);
        // obtenerPagina(1);
        // cargado.value = true;
        // router.go();
      });
  } else {
    almacenDatosProductos(listado.value);
    obtenerListadoLimpio();
    actualizar_datos();
    cargado.value = true;
    // datosSinPaginar.value = listado.value;
    // cantidad.value = Math.ceil(listado.value.length / elementPagina.value);
    // obtenerPagina(1);
  }

}

const buscandoElemento = () => {
  clearTimeout(setTiempoBusca);
  setTiempoBusca = setTimeout(consultar, 360);
}

// Fin paginado

// IMPRIMIR

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const generar_pdf = async () => {

  esperando.value = true;

  let response = await axios.get(`http://` + ipPublica.value + `/fullstack/public/productos`)
    .then((response) => {
      listado.value = response.data.data;
    })

  let nuevoArreglo = ref([]);

  for (let index = 0; index < listado.value.length; index++) {
    nuevoArreglo.value.push({ id: listado.value[index].id, codigo: listado.value[index].attributes.codigo, type: listado.value[index].type, descripcion: listado.value[index].attributes.descripcion, observacion: listado.value[index].attributes.observacion })
  }

  // console.log(nuevoArreglo.value)
  // console.log(listado.value)
  const doc = new jsPDF('p', 'pt');

  let columnas = [
    { title: "No", dataKey: "id" },
    { title: "Codigo", dataKey: "codigo" },
    { title: "Sucursal", dataKey: "type" },
    { title: "Descripcion", dataKey: "descripcion" },
    { title: "Observacion", dataKey: "observacion" }
  ]

  doc.autoTable(columnas, nuevoArreglo.value)
  // const doc = new jsPDF({
  //   orientation: "landscape",
  //   unit: "in",
  //   format: [10, 10]
  // });

  doc.text("Listado de productos", 220, 25);
  doc.save("Resumen.pdf");

  cerrarAlert();
  esperando.value = false;

}


</script>

<style lang="scss" scoped></style>
