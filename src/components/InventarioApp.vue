<template>
  <div>
    <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-2 text-gray-800">INVENTARIO</h1>
        <!-- <img src="/cargando2.gif" style="width: 40px; height:40px" v-if="esperando" > -->
        <div class="row">
          <div class="col-md-12 justify-content-between">
            <!-- <router-link class="button" to="/gest_inventario"> -->
            <!-- <a @click="abrirModalAddProd()" href="#" class="d-none d-sm-inline-block btn btn-sm btn-info shadow-sm"
              v-b-tooltip.hover title="Generar resumen diario"><i class="fas fa-plus fa-sm "></i> Agregar productos </a> -->
            <!-- </router-link> -->
            <!-- <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" v-b-tooltip.hover
              title="Generar resumen diario"><i class="fas fa-download fa-sm "></i> Excel</a> -->
            <a @click="ExportExcel()" href="#" class="d-sm-inline-block btn btn-sm btn-danger shadow-sm m-2"
                    v-b-tooltip.hover title="Agregar productos según archivo"><i class="fas fa-upload fa-sm "></i> Carga masiva</a>
              <a @click="ImprimirDoc()" href="#" class="d-sm-inline-block btn btn-sm btn-secondary shadow-sm"
              v-b-tooltip.hover title="Imprimir"><i class="fas fa-print fa-sm "></i> Imprimir</a>
          </div>
        </div>


        <!-- <router-link class="button" to="/gest_inventario">
          <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-info shadow-sm" v-b-tooltip.hover
            title="Generar resumen diario"><i class="fas fa-plus fa-sm "></i> Agregar productos</a>
        </router-link> -->

      </div>

      <!-- TABLA INVENTARIOS -->
      <!-- codigo, descripcion, cantidad -->
      <!-- permitir seleccionar que quiere mostrar -->
      <!-- poner todos los datos en la tabla inventario -->
      <!-- elementos de busqueda -->
      <!-- por Sucursal -->
      <!-- por codigo -->
      <!-- por cantidad -->
      <!--Opciones de busqueda -->
      <!-- <div class=""> -->
      <div class="col-xl-12 col-lg-12">
        <div class="card shadow mb-4">
          <!-- Card Header - Dropdown -->
          <div class=" card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 class="m-0 text-info">Criterios de búsqueda</h6>
          </div>
          <!-- Card Body -->
          <div class="card-body ">
            <div class="container-fluid row">
              <div class="col-xl-2 col-lg-3">

                <label>Por sucursal</label>
                <select class="form-control form-control-sm" name="" id="" placeholder="Por Sucursales">
                  <option value="">La Habana</option>
                  <option value="">Matanzas</option>
                </select>
              </div>
              <div class="col-xl-2 col-lg-3">
                <label>Por código</label>
                <!-- <input class="form-control form-control-sm" type="text" v-model="searchValue" placeholder="Codigo a buscar"> -->
                <select class="form-control form-control-sm" name="" id="" placeholder="Por codigos">
                  <option value="">124263</option>
                  <option value="">765849</option>
                </select>
              </div>
              <div class="col-xl-2 col-lg-3">
                <label>Por producto</label>
                <!-- <input class="form-control form-control-sm" type="text" v-model="searchNombre" placeholder="Nombre del producto"> -->
                <select class="form-control form-control-sm" name="" id="" placeholder="Por cantidades">
                  <option value="">5</option>
                  <option value="">10</option>
                </select>
              </div>
              <div class="col-xl-2 col-lg-3">
                <label>Por categoría</label>
                <select class="form-control form-control-sm" name="" id="" placeholder="Por cantidades">
                  <option value="">Zapatos</option>
                  <option value="">Pantalones</option>
                </select>
              </div>
              <div class="col-xl-2 col-lg-3">
                <label>Ventas desde</label>
                <VueDatePicker v-model="date"></VueDatePicker>
                <!-- <select class="form-control form-control-sm" name="" id="" placeholder="Por cantidades">
                  <option value="">Zapatos</option>
                  <option value="">Pantalones</option>
                </select> -->
              </div>
              <div class="col-xl-2 col-lg-3">
                <label>Ventas hasta</label>
                <VueDatePicker v-model="date2"></VueDatePicker>
                <!-- <select class="form-control form-control-sm" name="" id="" placeholder="Por cantidades">
                  <option value="">Zapatos</option>
                  <option value="">Pantalones</option>
                </select> -->
              </div>
            </div>
          </div>
        </div>

        <!-- </div> -->

        <!-- Elementos a mostrar en las columnas de la tabla -->
        <!-- <div class="col-xl-6 col-lg-12">
        <div class="mb-2">

          <div class=" justify-content-between">
            <h6 class="m-0 text-info">Columnas a mostrar</h6>
          </div>

          <div class="card-body shadow">
            <div class="container-fluid row">
              <div class="col-xl-3 col-lg-4">
                <label>Por Sucursal</label>
                <select class="form-control form-control-sm" name="" id="" placeholder="Por Sucursales">
                  <option value="">Sucursal 1</option>
                  <option value="">Sucursal 2</option>
                </select>
              </div>
              <div class="col-xl-3 col-lg-4">
                <label>Por código</label>
                <select class="form-control form-control-sm" name="" id="" placeholder="Por codigos">
                  <option value="">Código 1</option>
                  <option value="">Código 2</option>
                </select>
              </div>
              <div class="col-xl-3 col-lg-4">
                <label>Por cantidad</label>
                <select class="form-control form-control-sm" name="" id="" placeholder="Por cantidades">
                  <option value="">5</option>
                  <option value="">10</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      </div>

      <!--Listado de productos -->
      <div class="col-xl-12 col-lg-7">
        <div class="card shadow mb-4">
          <!-- Card Header - Dropdown -->
          <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 class="m-0 font-weight-bold text-info">PRODUCTOS EN STOCK</h6>
            <!-- <div :class="'dropdown no-arrow ' + show">
              <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                aria-haspopup="true" :aria-expanded="activaShow" @click="Exp_3Ptos()">
                <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
              </a>
              <div :class="'dropdown-menu dropdown-menu-right shadow animated--fade-in ' + show"
                aria-labelledby="dropdownMenuLink">
                <div class="dropdown-header">Acciones:</div>
                <a class="dropdown-item" href="#" @click="Exp_3Ptos()"><span class="fa fa-cog"></span> Administrar</a>
                <a class="dropdown-item" href="#" @click="Exp_3Ptos()"><span class="fa fa-check"></span> Conformar
                  pedidos</a>
                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#filasColumnas"
                  @click="abrirModal()">
                  <span class="fa fa-bars"></span> Agregar o quitar columnas
                </a>

                <a class="dropdown-item" href="#">Otros</a>
              </div>
            </div> -->
          </div>
          <!-- Card Body -->
          <div class="card-body">
            <!-- Tabla de vue -->
            <div class="row">
              <div class="col-md-6 col-xl-6 col-lg-6">
                <!-- <div class="row"> -->
                <div class="justify-content-between">
                  <!-- <router-link class="button" to="/gest_inventario"> -->
                  <a @click="abrirModalAddProd()" href="#" class="d-sm-inline-block btn btn-sm btn-info shadow-sm"
                    v-b-tooltip.hover title="Agregar producto"><i class="fas fa-plus fa-sm "></i> Agregar productos </a>
                  <!-- </router-link> -->
                  <a @click="ExportExcel()" href="#" class="d-sm-inline-block btn btn-sm btn-primary shadow-sm m-2"
                    v-b-tooltip.hover title="Exportar a Excel"><i class="fas fa-download fa-sm "></i> Excel</a>
                </div>
                <!-- </div> -->
              </div>
              <div class="col-md-3 col-xl-3 col-lg-3">
                <span class="text-info">Filtrar por columna: </span>
                <select v-model="searchField" class="form-control form-control-user">
                  <option>type</option>
                  <option>attributes.codigo</option>
                </select>
              </div>
              <div class="col-md-3 col-xl-3 col-lg-3">
                <span class="text-info">Buscar: </span>
                <input class="form-control form-control-user" type="text" v-model="searchValue" placeholder="" />
              </div>
            </div>
            <br>

            <EasyDataTable table-class-name="customize-table" :headers="headers" :items="items" buttons-pagination
              border-cell v-model:items-selected="itemsSelected" header-text-direction="center"
              body-text-direction="center" :search-field="searchField" :search-value="searchValue" @click-row="showRow"
              :rows-per-page="5">
              <template #item-opciones="item">
                <div class="operation-wrapper">
                  <button class="btn btn-primary btn-sm btn-circle" @click="editarU(item.id)" v-b-tooltip.hover
                    title="Modificar"><span class="fas fa-pencil-alt"></span></button>
                  <button class="btn btn-success btn-sm btn-circle ml-1" @click="Aumentar(item)" v-b-tooltip.hover
                    title="Aumentar"><span class="fas fa-plus"></span></button>
                  <button class="btn btn-warning btn-sm btn-circle ml-1" @click="Disminuir(item)" v-b-tooltip.hover
                    title="Restar"><span class="fas fa-minus"></span></button>
                  <button class="btn btn-danger btn-sm btn-circle ml-1"
                    @click="borrarU(item.id, item.attributes.codigo)" v-b-tooltip.hover title="Eliminar"><span
                      class="fas fas fa-trash-alt"></span></button>
                  <button class="btn btn-info btn-sm btn-circle ml-1" @click="generarCodeBar(item.attributes.codigo)"
                    v-b-tooltip.hover title="Código de barra"><span class="fas fas fa-barcode"></span></button>
                  <!-- <a class="dropdown-item" href="#" data-toggle="modal" data-target="#BarCode"
                    @click="abrirModalBarCode()">
                    <span class="fa fa-bars"></span> Agregar o quitar columnas
                  </a> -->
                </div>
              </template>
              <!-- <template #loading>
                <img src="https://i.pinimg.com/originals/94/fd/2b/94fd2bf50097ade743220761f41693d5.gif"
                  style="width: 100px; height: 80px;" />
              </template> -->
            </EasyDataTable>
            <!-- Fin -->
            <!-- <div class="table-responsive">
              <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                  <tr style="text-align: center;">
                    <th>No</th>

                    <th v-if="sicodigo">CÓDIGO</th>
                    <th v-if="sisucursal">SUCURSAL</th>
                    <th v-if="sidescripcion">DESCRIPCION</th>
                    <th v-if="siobservaciones">OBSERVACIONES</th>
                    <th v-if="siacciones">ACCIONES</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="datos in datosPaginados" :key="datos.id">
                    <td v-if="datos.attributes.deleted_at == null">{{ datos.id }}</td>

                    <td v-if="datos.attributes.deleted_at == null && sicodigo">{{ datos.attributes.codigo }}</td>
                    <td v-if="datos.attributes.deleted_at == null && sisucursal">Sucursal</td>
                    <td v-if="datos.attributes.deleted_at == null && sidescripcion">{{ datos.attributes.descripcion }}
                    </td>
                    <td v-if="datos.attributes.deleted_at == null && siobservaciones">{{ datos.attributes.observacion }}
                    </td>
                    <td v-if="datos.attributes.deleted_at == null && siacciones" style="text-align: center;">
                      <button class="btn btn-info btn-sm btn-circle" v-b-tooltip.hover title="Conformar pedido"><span
                          class="fas fa-check"></span></button>&nbsp;

                      <button class="btn btn-danger btn-sm btn-circle"
                        @click="borrarU(datos.id, datos.attributes.codigo)" v-b-tooltip.hover title="Eliminar"><span
                          class="fas fa-trash"></span></button>
                    </td>
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
            </div> -->

          </div>
        </div>
      </div>
      <!-- FIN -->
    </div>
    <!-- Logout Modal-->
    <div :class="'modal fade ' + showModal" id="filasColumnas" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" :aria-hidden="activaHide" :arial-modal="activaModal" :style="displayModal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Seleccione las columnas que desea visualizar</h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close" @click="abrirModal()">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            <h3 style="text-align: center;">Columnas a mostrar</h3>

            <ol>
              <!-- <li><input type="checkbox" name="foto" :checked="siFoto" @change="quitarFoto"> Foto</li> -->
              <li><input type="checkbox" name="codigo" :checked="sicodigo" @change="quitarcodigo"> Código</li>
              <li><input type="checkbox" name="sucursal" :checked="sisucursal" @change="quitarSucursal"> Sucursal</li>
              <li><input type="checkbox" name="descripcion" :checked="sidescripcion" @change="quitardescripcion">
                Descripción</li>
              <li><input type="checkbox" name="observaciones" :checked="siobservaciones" @change="quitarobservacion">
                Observaciones</li>
              <!-- <li><input type="checkbox" name="estado" :checked="siestado" @change="quitarestado"> Estado</li> -->
              <li><input type="checkbox" name="acciones" :checked="siacciones" @change="quitaracciones"> Acciones</li>
            </ol>

          </div>
          <div class="modal-footer">
            <!-- <a class="btn btn-info" @click="AColumnas">Aceptar</a> -->
            <a class="btn btn-primary btn-sm" @click="AColumnas">Ninguna</a>
            <a class="btn btn-info btn-sm" @click="MostrarTodas">Todas</a>
            <button class="btn btn-secondary btn-sm" type="button" data-dismiss="modal"
              @click="abrirModal()">Cerrar</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Logout Modal-->
    <div :class="'modal fade ' + showModal1" id="BarCode" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" :aria-hidden="activaHide1" :arial-modal="activaModal1" :style="displayModal1">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Codigo de barra</h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close" @click="abrirModalBarCode()">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body text-center">
            <vue-barcode :value="cod" tag="svg"></vue-barcode>

          </div>
          <div class="modal-footer">
            <!-- <a class="btn btn-info" @click="AColumnas">Aceptar</a> -->
            <button class="btn btn-secondary btn-sm" type="button" data-dismiss="modal"
              @click="abrirModalBarCode()">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
    <AddProducto v-show="popup" @cerrar="abrirModalAddProd()" />
  </div>
  <!-- <template v-if="esperando">
    <div v-on="loading('Actualizando datos...')">

    </div>
  </template> -->

  <div :class="showModBack" @click="abrirModal()"></div>
</template>
<script setup>
import { ref, reactive, onMounted, watch, computed } from 'vue';
import Swal from 'sweetalert2';
import axios from 'axios';
import AddProducto from './modal/AddProducto.vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const emit = defineEmits(['consultar'])

// const props = defineProps(['key'])

function Consultar_Productos() {
  emit('consultar', 1);
}

function ExportExcel() {
  emit('consultar', 2);
}

function ImprimirDoc() {
  emit('consultar', 3);
}

const date = ref();

const date2 = ref();

const itemsSelected = ref([]);

const popup = ref(false);

const abrirModalAddProd = () => {
  popup.value = !popup.value;
  // console.log(x);
  if (popup.value == false) {
    // console.log('Actualiza');
    localStorage.removeItem('Carg_dat');
    localStorage.setItem('Carg_dat', '0');
    emit('consultar', 1);
    listado.value = JSON.parse(localStorage.getItem('ListadoCache'));
    obtenerListadoLimpio();
  }

}

const showRow = () => {
  if (itemsSelected.value.length > 1) {
    console.log("Selecciono " + itemsSelected.value.length)
  }

}

const almacenDatosSucursales = (Lista) => {
  if (localStorage.getItem('ListadoCacheSucursal')) {
    localStorage.removeItem('ListadoCacheSucursal');
    const parsed = JSON.stringify(Lista);
    localStorage.setItem('ListadoCacheSucursal', parsed);
  } else {
    const parsed = JSON.stringify(Lista);
    localStorage.setItem('ListadoCacheSucursal', parsed);
    // dataCache.value = JSON.parse(localStorage.getItem('ListadoCacheSucursal'));
  }
}

const searchField = ref("attributes.codigo");

const searchValue = ref("");

const headers = [
  { text: "NO", value: "id", width: 50, sortable: true },
  { text: "CODIGO", value: "attributes.codigo", sortable: true },
  { text: "CATEGORIA", value: "type" },
  { text: "P.COMPRA", value: "precioC", sortable: true },
  { text: "P.VENTA", value: "precioV", sortable: true },
  { text: "UNIDAD", value: "unidad" },
  { text: "STOCK", value: "stock", sortable: true },
  { text: "VENTAS", value: "cantV", sortable: true },
  { text: "OPCIONES", value: "opciones" }
];

const items = ref([]);

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

const cerrarAlert = () => {
  Swal.close();
}

const cod = ref();

const generarCodeBar = (codig) => {
  abrirModalBarCode(codig);
  //   Swal.fire({
  //   title: "<strong>HTML <u>example</u></strong>",
  //   icon: "info",
  //   html: `
  //     <vue-barcode value="${codig}" tag="svg"></vue-barcode>
  //   `,
  //   showCloseButton: true,
  //   showCancelButton: true,
  //   focusConfirm: false,
  //   confirmButtonText: `
  //     <i class="fa fa-thumbs-up"></i> Great!
  //   `,
  //   confirmButtonAriaLabel: "Thumbs up, great!",
  //   cancelButtonText: `
  //     <i class="fa fa-thumbs-down"></i>
  //   `,
  //   cancelButtonAriaLabel: "Thumbs down"
  // });
}

const show = ref('');

const showModal = ref('');

const activaHide = ref(true);

const activaShow = ref(false);

const activaModal = ref(false);

const displayModal = ref(''); //display: block; padding-right: 17px;

const rolModal = ref(''); // dialog

const showModBack = ref(''); //modal-backdrop fade show

const abrirModal = () => {
  if (showModal.value == '') {
    showModal.value = 'show';
    activaModal.value = true;
    show.value = '';
    activaShow.value = false;
    activaHide.value = false;
    displayModal.value = 'display: block; padding-right: 17px;';
    showModBack.value = 'modal-backdrop fade show';
  } else {
    showModal.value = '';
    activaModal.value = false;
    show.value = '';
    activaShow.value = false;
    activaHide.value = true;
    displayModal.value = 'display: none;';
    showModBack.value = '';
  }
}

const show1 = ref('');

const showModal1 = ref('');

const activaHide1 = ref(true);

const activaShow1 = ref(false);

const activaModal1 = ref(false);

const displayModal1 = ref(''); //display: block; padding-right: 17px;

const rolModal1 = ref(''); // dialog

const showModBack1 = ref(''); //modal-backdrop fade show

const abrirModalBarCode = (codig) => {
  if (showModal1.value == '') {
    cod.value = codig;
    showModal1.value = 'show';
    activaModal1.value = true;
    show1.value = '';
    activaShow1.value = false;
    activaHide1.value = false;
    displayModal1.value = 'display: block; padding-right: 17px;';
    showModBack1.value = 'modal-backdrop fade show';
  } else {
    showModal1.value = '';
    activaModal1.value = false;
    show1.value = '';
    activaShow1.value = false;
    activaHide1.value = true;
    displayModal1.value = 'display: none;';
    showModBack1.value = '';
  }
}

const Exp_3Ptos = () => {
  if (show.value == '') {
    show.value = 'show';
    activaShow.value = true;
  } else {
    show.value = '';
    activaShow.value = false;
  }
}

const siFoto = ref(true);
const sicodigo = ref(true);
const sidescripcion = ref(true);
const siestado = ref(true);
const siobservaciones = ref(true);
const sisucursal = ref(true);
const siacciones = ref(true);

const AColumnas = () => {
  siFoto.value = false;
  sisucursal.value = false;
  sicodigo.value = false;
  siobservaciones.value = false;
  siestado.value = false;
  sidescripcion.value = false;
  siacciones.value = false;
}

const MostrarTodas = () => {
  siFoto.value = true;
  sisucursal.value = true;
  sicodigo.value = true;
  siobservaciones.value = true;
  siestado.value = true;
  sidescripcion.value = true;
  siacciones.value = true;
}

const quitarFoto = () => {
  siFoto.value = !siFoto.value;
}

const quitarSucursal = () => {
  sisucursal.value = !sisucursal.value;
}

const quitarestado = () => {
  siestado.value = !siestado.value;
}

const quitardescripcion = () => {
  sidescripcion.value = !sidescripcion.value;
}

const quitarobservacion = () => {
  siobservaciones.value = !siobservaciones.value;
}

const quitarcodigo = () => {
  sicodigo.value = !sicodigo.value;
}

const quitaracciones = () => {
  siacciones.value = !siacciones.value;
}

// CRUD
let errors = ref([]);

let listado = ref([]);

let listadoSucursales = ref([]);

let datosPaginados = ref([]);

let datosSinPaginar = ref([]);

let buscando = ref('');

let editar = ref(false);

let id = ref('');

let cantidad = ref(0);

let elementPagina = ref(5);

let cargado = ref(false);

let inicio = ref(0);

let fin = ref(0);

let paginaActual = ref(1);

let disableA = ref('');
let disableS = ref('');

let setTiempoBusca = '';

const ipPublica = ref('127.0.0.1');

const formProductos = reactive({
  data: {
    type: 'Productos',
    attributes: {
      codigo: "",
      descripcion: "",
      observacion: "",
    }
  }
})

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

const obtenerListadoLimpio = async () => {
  items.value = [];
  // cargar datos en tabla-vue
  // console.log('Actualizando 1...')
  for (let index = 0; index < listado.value.length; index++) {
    items.value.push(listado.value[index])
  }

  return await items;

}

const almacenDatosProductos = (Lista) => {
  localStorage.removeItem('ListadoCache');
  const parsed = JSON.stringify(Lista);
  localStorage.setItem('ListadoCache', parsed);
}

const consultar = async () => {
  if (cargado.value == false) {
    let response = await axios.get(`http://${ipPublica.value}/fullstack/public/productos`)
      .then((response) => {
        listado.value = response.data.data;
        almacenDatosProductos(listado.value);
        obtenerListadoLimpio();
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
    // datosSinPaginar.value = listado.value;
    // cantidad.value = Math.ceil(listado.value.length / elementPagina.value);
    // obtenerPagina(1);
  }

}

const cancelarU = () => {
  editar.value = false;
  formProductos.data.attributes.descripcion = '';
  formProductos.data.attributes.codigo = '';
  formProductos.data.attributes.observacion = '';
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
      esperando.value = true;
      cargado.value = false;
      // Eliminar //
      axios.delete(`http://${ipPublica.value}/fullstack/public/productos/${id}`)
        .then(() => {
          esperando.value = false;
          consultar();
          cerrarAlert();
          cancelarU();
          Swal.fire({
            title: "Eliminado",
            text: "Producto eliminado satisfactoriamente.",
            icon: "success"
          });
          // cargado.value = false;
        })
    }
  }).catch((error) => {
    esperando.value = false;
    cerrarAlert();
    Swal.fire({
      icon: "error",
      title: error.response.data.message
    })
  });
}

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

// watch(listado, async (newQuestion, oldQuestion) => {
//   // console.log(`El nuevo listado es ${newQuestion}`)
//   // console.log(`El nuevo listado es ${listado.value}`)
//   // almacenDatosProductos(listado.value);
//   obtenerListadoLimpio();
//   cargado.value = true;
//   // console.log(`El viejo listado es ${oldQuestion}`)
// })

onMounted(() => {
  if (localStorage.getItem('userName')) {
    listado.value = JSON.parse(localStorage.getItem('ListadoCache'));
    obtenerListadoLimpio();
    // console.log(itemsSelected.value);
    // listadoSucursales.value = JSON.parse(localStorage.getItem('ListadoCacheSucursal'));
    // listadoSucursales = obtenerListadoLimpioSucursales();
    cargado.value = true;
    // console.log(props.key)
  } else {
    router.push('/login');
  }
  // consultar();
})


</script>
<style scoped>
.customize-table {
  --easy-table-border: 1px solid #f5f5f7;
  --easy-table-row-border: 1px solid #c8ced8;

  --easy-table-header-font-size: 14px;
  --easy-table-header-height: 50px;
  --easy-table-header-font-color: #09111b;
  --easy-table-header-background-color: #d6ddde;

  --easy-table-header-item-padding: 10px 15px;

  --easy-table-body-even-row-font-color: #fff;
  --easy-table-body-even-row-background-color: #fff;

  --easy-table-body-row-font-color: #0f1011;
  --easy-table-body-row-background-color: #fff;
  --easy-table-body-row-height: 50px;
  --easy-table-body-row-font-size: 14px;

  --easy-table-body-row-hover-font-color: #2d3a4f;
  --easy-table-body-row-hover-background-color: #eee;

  --easy-table-body-item-padding: 10px 15px;

  --easy-table-footer-background-color: #d6ddde;
  --easy-table-footer-font-color: #0d0e11;
  --easy-table-footer-font-size: 14px;
  --easy-table-footer-padding: 0px 10px;
  --easy-table-footer-height: 50px;

  --easy-table-rows-per-page-selector-width: 70px;
  --easy-table-rows-per-page-selector-option-padding: 10px;
  --easy-table-rows-per-page-selector-z-index: 1;


  --easy-table-scrollbar-track-color: #2d3a4f;
  --easy-table-scrollbar-color: #2d3a4f;
  --easy-table-scrollbar-thumb-color: #4c5d7a;
  ;
  --easy-table-scrollbar-corner-color: #2d3a4f;

  --easy-table-loading-mask-background-color: #2d3a4f;
}
</style>
