<template>
  <div>
    <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">SUCURSALES Y UBICACIONES</h1>
      </div>
      <div class="row">
        <!--Listado de magnitudes -->
        <div class="col-xl-12 col-lg-12">
          <div class="card shadow mb-4 ">
            <!-- Card Header - Dropdown -->
            <a href="#collapseCardExample" class="d-block card-header py-3" data-toggle="collapse" role="button"
              aria-expanded="true" aria-controls="collapseCardExample">
              <h6 class="m-0 font-weight-bold text-info"><i class="fas fa-edit"></i> SUCURSALES</h6>
            </a>
            <div class="collapse show" id="collapseCardExample">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6 col-xl-6 col-lg-12">
                    <div class="justify-content-between">
                      <a data-toggle="modal" @click="agrega()" data-target="#agregaSucursales"
                        class="btn btn-info btn-sm btn-icon-split" :class="disabledMagnitud">
                        <span class="icon text-white-50">
                          <i class="fas fa-plus"></i>
                        </span>
                        <span class="text">Nuevo</span>
                      </a>
                      <a @click="abrirModalAddProd()" class="btn btn-secondary btn-sm btn-icon-split m-2"
                        :class="disabledMagnitud">
                        <span class="icon text-white-50">
                          <i class="fas fa-file-pdf"></i>
                        </span>
                        <span class="text">PDF</span>
                      </a>
                      <a @click="ExportExcel()" class="btn btn-primary btn-sm btn-icon-split" :class="disabledMagnitud">
                        <span class="icon text-white-50">
                          <i class="fas fa-download"></i>
                        </span>
                        <span class="text">Excel</span>
                      </a>

                    </div>
                  </div>
                  <div class="col-md-6 col-xl-6 col-lg-12 ">
                    <span class="text-info">Buscar: </span>
                    <input class="form-control form-control-user" type="text" v-model="searchValue"
                      placeholder="Qué desea buscar..." />
                  </div>
                </div>
                <br>
                <!--Tabla -->
                <EasyDataTable table-class-name="customize-table" :headers="headersSucursales" :items="itemsSucursales1"
                  buttons-pagination border-cell v-model:items-selected="itemsSelected" header-text-direction="center"
                  body-text-direction="center" :search-field="searchField" :search-value="searchValue"
                  @click-row="showRow" :rows-per-page="5" show-index :loading="loading">



                  <template #empty-message>



                    <a>No hay datos que mostrar</a>
                  </template>
                  <template #item-opciones="item">
                    <div class="operation-wrapper">



                      <!-- <button class="btn btn-primary btn-sm btn-circle" data-toggle="modal"



                                      data-target="#EditarProducto" @click="seleccionaProducto(item)" v-b-tooltip.hover



                                      title="Modificar"><span class="fas fa-edit"></span></button> -->



                      <button class="btn btn-success btn-sm btn-circle" data-toggle="modal"
                        @click="clickEditar(item.id)" data-target="#agregaSucursales" v-b-tooltip.hover
                        title="Editar"><span class="fas fa-edit"></span></button>
                      <!-- <button class="btn btn-info" data-toggle="modal" @click="clickEditar(item.id)" data-target="#agregaEditaMagnitudes"> <span
                  class="fa fa-plus"></span> Nuevo</button> -->



                      <!-- <button class="btn btn-success btn-sm btn-circle ml-1" @click="Aumentar(item)" v-b-tooltip.hover



                            title="Aumentar"><span class="fas fa-plus"></span></button>



                          <button class="btn btn-warning btn-sm btn-circle ml-1" @click="Disminuir(item)" v-b-tooltip.hover



                            title="Restar"><span class="fas fa-minus"></span></button> -->
                      <button class="btn btn-danger btn-sm btn-circle ml-1"
                        @click="borrarU(item.id, item.attributes.sucursal)" v-b-tooltip.hover title="Eliminar"><span
                          class="fas fas fa-trash-alt"></span></button>

                      <!-- <button class="btn btn-info btn-sm btn-circle ml-1" data-toggle="modal" data-target="#BarCode"



                            @click="generarCodeBar(item.attributes.codigo)" v-b-tooltip.hover title="Código de barra"><span



                              class="fas fas fa-barcode"></span></button> -->



                      <!-- <a class="dropdown-item btn btn-info btn-sm btn-circle ml-1" href="#" @click="generarCodeBar(item.attributes.codigo)" data-toggle="modal" data-target="#BarCode"



                            >



                            <span class="fas fa-barcode"></span>



                          </a> -->



                    </div>
                  </template>
                  <template #loading>
                    <img src="/cargando4.gif" style="width: 100px; height: 80px;" />
                  </template>
                </EasyDataTable>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="row">
        <div class="col-xl-12 col-lg-12">
          <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <a href="#collapseCardExample1" class="d-block card-header py-3" data-toggle="collapse" role="button"
              aria-expanded="true" aria-controls="collapseCardExample">
              <h6 class="m-0 font-weight-bold text-info"><i class="fas fa-edit"></i> UBICACIONES</h6>
            </a>
            <!-- Card Body -->
            <!-- <div class="card-body"> -->
            <div class="collapse show" id="collapseCardExample1">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6 col-xl-6 col-lg-12">
                    <div class="justify-content-between">
                      <!-- <router-link class="button" to="/gest_inventario"> -->
                      <a data-toggle="modal" @click="agrega()" data-target="#agregaUbicaciones"
                        class="btn btn-info btn-sm btn-icon-split" :class="disabledMedida">
                        <span class="icon text-white-50">
                          <i class="fas fa-plus"></i>
                        </span>
                        <span class="text">Nuevo</span>
                      </a>
                      <a @click="abrirModalAddProd()" class="btn btn-secondary btn-sm btn-icon-split m-2"
                        :class="disabledMedida">
                        <span class="icon text-white-50">
                          <i class="fas fa-file-pdf"></i>
                        </span>
                        <span class="text">PDF</span>
                      </a>
                      <a @click="ExportExcelMedidas()" class="btn btn-primary btn-sm btn-icon-split"
                        :class="disabledMedida">
                        <span class="icon text-white-50">
                          <i class="fas fa-download"></i>
                        </span>
                        <span class="text">Excel</span>
                      </a>
                      <!-- <a data-toggle="modal" @click="agrega()" data-target="#agregaMedidas"
                        class="d-sm-inline-block btn btn-sm btn-info shadow-sm m-2" v-b-tooltip.hover
                        title="Agregar unidad de medida"><i class="fas fa-plus fa-sm "></i> Nuevo </a>
                      <a @click="abrirModalAddProd()" href="#"
                        class="d-sm-inline-block btn btn-sm btn-secondary shadow-sm" v-b-tooltip.hover
                        title="Agregar producto"><i class="fas fa-print fa-sm "></i> Imprimir </a>
                      <a @click="ExportExcel()" href="#" class="d-sm-inline-block btn btn-sm btn-primary shadow-sm m-2"
                        v-b-tooltip.hover title="Exportar a Excel"><i class="fas fa-download fa-sm "></i> Excel</a> -->
                    </div>
                  </div>
                  <div class="col-md-6 col-xl-6 col-lg-12 ">
                    <span class="text-info">Buscar: </span>
                    <!-- <input class="form-control" type="text" v-model="searchValue" placeholder="" /> -->
                    <input class="form-control form-control-user" type="text" v-model="searchValueMedida"
                      placeholder="Qué desea buscar..." />
                  </div>
                </div>
                <br>

                <!--Tabla -->
                <EasyDataTable table-class-name="customize-table" :headers="headersUbicaciones"
                  :items="itemsUbicaciones1" buttons-pagination border-cell v-model:items-selected="itemsSelected"
                  header-text-direction="center" body-text-direction="center" :search-field="searchFieldMedida"
                  :search-value="searchValueMedida" @click-row="showRow" :rows-per-page="5" :loading="loadingU"
                  show-index>
                  <template #empty-message>
                    <a>No hay datos que mostrar</a>
                  </template>
                  <template #item-sucursalid="item">
                    {{ obtenSucursal(item.relationships.sucursal.data.id) }} <!-- item.relationships.medida.data.id -->
                  </template>
                  <template #item-opciones="item">
                    <div class="operation-wrapper">
                      <!-- <button class="btn btn-primary btn-sm btn-circle" data-toggle="modal"



                                      data-target="#EditarProducto" @click="seleccionaProducto(item)" v-b-tooltip.hover



                                      title="Modificar"><span class="fas fa-edit"></span></button> -->
                      <button class="btn btn-success btn-sm btn-circle" data-toggle="modal"
                        data-target="#agregaUbicaciones" @click="clickEditarMedidas(item.id)" v-b-tooltip.hover
                        title="Editar"><span class="fas fa-edit"></span></button>
                      <!-- <button class="btn btn-success btn-sm btn-circle ml-1" @click="Aumentar(item)" v-b-tooltip.hover



                            title="Aumentar"><span class="fas fa-plus"></span></button>



                          <button class="btn btn-warning btn-sm btn-circle ml-1" @click="Disminuir(item)" v-b-tooltip.hover



                            title="Restar"><span class="fas fa-minus"></span></button> -->

                      <button class="btn btn-danger btn-sm btn-circle ml-1"
                        @click="borrarUMedida(item.id, item.attributes.ubicacion)" v-b-tooltip.hover
                        title="Eliminar"><span class="fas fas fa-trash-alt"></span></button>



                      <!-- <button class="btn btn-info btn-sm btn-circle ml-1" data-toggle="modal" data-target="#BarCode"



                            @click="generarCodeBar(item.attributes.codigo)" v-b-tooltip.hover title="Código de barra"><span



                              class="fas fas fa-barcode"></span></button> -->



                      <!-- <a class="dropdown-item btn btn-info btn-sm btn-circle ml-1" href="#" @click="generarCodeBar(item.attributes.codigo)" data-toggle="modal" data-target="#BarCode"



                            >



                            <span class="fas fa-barcode"></span>



                          </a> -->
                    </div>
                  </template>
                  <template #loading>
                    <img src="/cargando4.gif" style="width: 100px; height: 80px;" />
                  </template>
                </EasyDataTable>
              </div>
            </div>

            <!-- </div> -->
          </div>
        </div>
      </div>
      <!-- Datos del producto a agregar -->

      <!-- TABLA INVENTARIOS -->
      <!-- codigo, descripcion, cantidad -->
      <!-- permitir seleccionar que quiere mostrar -->
      <!-- poner todos los datos en la tabla inventario -->
      <!-- elementos de busqueda -->
      <!-- por Sucursal -->
      <!-- por codigo -->
      <!-- por cantidad -->

    </div>

  </div>

  <!-- Logout Modal-->
  <div :class="'modal fade ' + showModal1" id="agregaSucursales" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" :aria-hidden="activaHide1" :arial-modal="activaModal1" :style="displayModal1">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-info" id="exampleModalLabel" v-if="editar == false">NUEVA SUCURSAL</h5>
          <h5 class="modal-title text-info text-center" id="exampleModalLabel" v-if="editar == true"><span
              class="fa fa-edit"></span>
            MODIFICAR LOS DATOS DE LA SUCURSAL <br>(<label style="color: red;">{{
              store.formSucursal.data.attributes.sucursal
            }}</label>)</h5>
          <!-- <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
            style="text-align: center;">
            <h6 class="m-0 font-weight-bold text-info" v-if="editar == false"><span class="fa fa-plus"></span>
              AGREGAR
              NUEVA MAGNITUD / <i style="color: red;">CAMPOS OBLIGATORIOS</i> (<label style="color: red;">*</label>)
            </h6>
            <h6 class="m-0 font-weight-bold text-info" v-if="editar == true"><span class="fa fa-edit"></span>
              MODIFICAR LOS DATOS DE LA MAGNITUD <br>(<label style="color: red;">{{
                formSucursal.data.attributes.magnitud
              }}</label>)</h6>
          </div> -->
          <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true" class="text-info">×</span>
          </button>
        </div>
        <div class="modal-body text-center">

          <form id="form">

            <div class="col-lg-12">
              <div class="">

                <form class="user">

                  <div class="row">
                    <div class="form-group col-lg-12 text-left">
                      <label class="text-info">Nombre: <label style="color: red;">*</label></label>
                      <input type="text" class="form-control" id="sucursal" aria-describedby="emailHelp"
                        v-model="store.formSucursal.data.attributes.sucursal" placeholder="Ej: La Habana" required>
                      <span style="color: red;">{{ errores.sucursal }}</span>
                    </div>
                    <div class="form-group col-lg-12 text-left">
                      <label class="text-info">Abreviatura: <label style="color: red;">*</label></label>
                      <input type="text" class="form-control" id="abreviatura" aria-describedby="emailHelp"
                        v-model="store.formSucursal.data.attributes.abreviatura" placeholder="Ej: HAB">
                      <span style="color: red;">{{ errores.abreviatura }}</span>
                    </div>
                    <div class="form-group col-lg-12 text-left">
                      <label class="text-info">Descripción: <label style="color: red;">*</label></label>
                      <input type="text" class="form-control" id="descripcion" aria-describedby="emailHelp"
                        v-model="store.formSucursal.data.attributes.descripcion" placeholder="Ej: La bella Habana">
                      <span style="color: red;">{{ errores.descripcion }}</span>
                    </div>
                    <div class="form-group col-lg-12 text-left">
                      <label class="text-info">Observaciones:</label>
                      <textarea class="form-control" id="observaciones"
                        v-model="store.formSucursal.data.attributes.observacion"
                        placeholder="Ej: Observaciones de la Habana"></textarea>

                    </div>
                  </div>
                  <!-- <div class="row">

                      </div> -->


                </form>
              </div>
              <div class="text-center">
                <h1 class="h6 text-gray-900 mb-4"><i>CAMPOS OBLIGATORIOS</i> (<label style="color: red;">*</label>)
                </h1>
              </div>
              <div class="row">

                <div v-if="editar == false" class="form-group h4 col-lg-3">

                </div>
                <div v-if="editar == false" class="form-group h4 col-lg-6">
                  <a @click="agregarU" class="btn btn-info btn-block" :class="disabledMagnitudBtn">
                    {{ GuardarMag }}
                  </a>
                </div>
                <div v-if="editar" class="form-group h4 col-lg-6">
                  <a @click="editarU" class="btn btn-info btn-block" :class="btnModificarClass">
                    {{ btnModificar }}
                  </a>
                </div>
                <div v-if="editar" class="form-group h4 col-lg-6">
                  <a @click="cancelarU()" class="btn btn-danger btn-block" :class="btnModificarClass"
                    data-dismiss="modal" aria-label="Close">
                    Cancelar
                  </a>
                </div>
              </div>
            </div>

            <!-- <div class="modal-footer" style="text-align: center;"> -->
            <!-- <a class="btn btn-info" @click="AColumnas">Aceptar</a> -->
            <!-- <button class="btn btn-secondary btn-sm" type="submit" id="button" @click="enviarEmail()">Enviar</button> -->
            <!-- <div class="row">

              <div v-if="editar == false" class="form-group h4 col-lg-1">

              </div>
              <div v-if="editar == false" class="form-group h4 col-lg-6">
                <a @click="agregarU" class="btn btn-info btn-block">
                  Guardar datos
                </a>
              </div>
              <div v-if="editar" class="form-group h4 col-lg-6">
                <a @click="editarU" class="btn btn-info btn-block">
                  {{ btnModificar }}
                </a>
              </div>
              <div v-if="editar" class="form-group h4 col-lg-6">
                <a @click="cancelarU()" class="btn btn-danger btn-block" data-dismiss="modal" aria-label="Close">
                  Cancelar
                </a>
              </div>
              </div> -->
            <!-- </div> -->
          </form>

          <!-- <div>
            <card class="card-section" style="width: 450px; margin: auto">
              <h1>Contact Form</h1>
              <form ref="values" @submit.prevent="sendEmail">
                <div class="form-group">
                  <KInput class="form-input" :style="{ width: '290px' }" name="name" v-model="user_name"
                    placeholder="Name"></KInput>
                </div>
                <div class="form-group">
                  <KInput class="form-input" :style="{ width: '290px' }" name="email" v-model="user_email"
                    placeholder="email address"></KInput>
                </div>
                <div class="form-group">
                  <kTextarea class="form-input" :style="{ width: '290px' }" name="message" v-model="user_message"
                    placeholder="Message" :rows="4" />
                </div>
                <div class="example-col">
                  <kButton :style="{ width: '100px' }" id="submit-btn">Submit form</kButton>
                </div>
              </form>
            </card>
          </div> -->
          <!-- <vue-barcode :value="cod" tag="svg"></vue-barcode> -->
        </div>

      </div>
    </div>
  </div>


  <!-- Logout Modal-->
  <div :class="'modal fade ' + showModal1" id="agregaUbicaciones" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" :aria-hidden="activaHide1" :arial-modal="activaModal1" :style="displayModal1">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-info" id="exampleModalLabel" v-if="editar == false">NUEVA UBICACIÓN</h5>
          <h5 class="modal-title text-info text-center" id="exampleModalLabel" v-if="editar == true"><span
              class="fa fa-edit"></span>
            MODIFICAR LOS DATOS DE LA UBICACIÓN <br>(<label style="color: red;">{{
              store.formUbicaciones.data.attributes.ubicacion
            }}</label>)</h5>

          <!-- <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
            style="text-align: center;">
            <h6 class="m-0 font-weight-bold text-info" v-if="editar == false"><span class="fa fa-plus"></span>
              AGREGAR
              NUEVA MAGNITUD / <i style="color: red;">CAMPOS OBLIGATORIOS</i> (<label style="color: red;">*</label>)
            </h6>
            <h6 class="m-0 font-weight-bold text-info" v-if="editar == true"><span class="fa fa-edit"></span>
              MODIFICAR LOS DATOS DE LA MAGNITUD <br>(<label style="color: red;">{{
                formSucursal.data.attributes.magnitud
              }}</label>)</h6>
          </div> -->
          <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true" class="text-info">×</span>
          </button>
        </div>
        <div class="modal-body text-center">

          <form class="user">

            <div class="row">
              <div class="form-group col-lg-12 text-left">
                <label class="text-info">Nombre: <label style="color: red;">*</label></label>
                <input type="text" class="form-control" id="ubicacion" aria-describedby="emailHelp"
                  v-model="store.formUbicaciones.data.attributes.ubicacion" placeholder="Ej: Casa de Pepe" required>
                <span style="color: red;">{{ errores.ubicacion }}</span>
              </div>
              <div class="form-group col-lg-12 text-left">
                <label class="text-info">Descripción: <label style="color: red;">*</label></label>
                <input type="text" class="form-control" id="descripcionUbic" aria-describedby="emailHelp"
                  v-model="store.formUbicaciones.data.attributes.descripcion" placeholder="Ej: La casa de Pepe">
                <span style="color: red;">{{ errores.descripcionUbica }}</span>
              </div>

            </div>
            <div class="form-group text-left">
              <label class="text-info">Observaciones:</label>
              <textarea class="form-control" id="observacionesUbi"
                v-model="store.formUbicaciones.data.attributes.observacion"
                placeholder="Observaciones de la ubicación"></textarea>

            </div>
            <div class="form-group col-lg-12 text-left">
              <label class="text-info">Seleccione una Sucursal: <label style="color: red;">*</label></label>
              <select name="IDmagnitud" id="IDmagnitud" style="width: 100%; text-align:center"
                placeholder="Unidad de medida" class="text-gray-900 form-control"
                v-model="store.formUbicaciones.data.attributes.sucursal_id">
                <option v-for="dato in itemsSucursales1" :key="dato.id" :value="dato.id">{{
                  dato.attributes.sucursal }}</option>
              </select>
              <span style="color: red;">{{ errores.sucursal_id }}</span>
            </div>
            <div class="text-center">
              <h1 class="h6 text-gray-900 mb-4"><i>CAMPOS OBLIGATORIOS</i> (<label style="color: red;">*</label>)
              </h1>
            </div>

            <div class="row">
              <div v-if="editar == false" class="form-group h4 col-lg-3">

              </div>
              <div v-if="editar == false" class="form-group h4 col-lg-6">
                <a @click="agregarUMedida" class="btn btn-info btn-block" :class="disabledMedidaBtn">
                  {{ GuardarMedida }}
                </a>
              </div>
              <div v-if="editar" class="form-group h4 col-lg-6">
                <a @click="editarUMedida()" class="btn btn-info btn-block" :class="deactiva">
                  {{ btnModificarM }}
                </a>
              </div>
              <div v-if="editar" class="form-group h4 col-lg-6">
                <a class="btn btn-danger btn-block" data-dismiss="modal" aria-label="close" :class="deactiva"
                  @click="cancelarUMedida()">
                  Cancelar
                </a>
              </div>
            </div>


          </form>

          <!-- <div>
            <card class="card-section" style="width: 450px; margin: auto">
              <h1>Contact Form</h1>
              <form ref="values" @submit.prevent="sendEmail">
                <div class="form-group">
                  <KInput class="form-input" :style="{ width: '290px' }" name="name" v-model="user_name"
                    placeholder="Name"></KInput>
                </div>
                <div class="form-group">
                  <KInput class="form-input" :style="{ width: '290px' }" name="email" v-model="user_email"
                    placeholder="email address"></KInput>
                </div>
                <div class="form-group">
                  <kTextarea class="form-input" :style="{ width: '290px' }" name="message" v-model="user_message"
                    placeholder="Message" :rows="4" />
                </div>
                <div class="example-col">
                  <kButton :style="{ width: '100px' }" id="submit-btn">Submit form</kButton>
                </div>
              </form>
            </card>
          </div> -->
          <!-- <vue-barcode :value="cod" tag="svg"></vue-barcode> -->
        </div>

      </div>
    </div>
  </div>
  <!-- <template v-if="esperando">
    <div v-on="loadingA('Actualizando datos...')">

    </div>
  </template> -->
</template>
<script setup>
import axios from 'axios';
import router from '@/router';
import Swal from 'sweetalert2';
import { onMounted, reactive, ref } from 'vue';
// import { load } from '@progress/kendo-vue-intl';
import * as XLSX from 'xlsx';
import { useStoreAxios } from '@/store/AxiosStore';
import { EditarDatos, EliminarDatos, GuardarDatos, obtenerDatos } from './helper/useAxios';

const store = useStoreAxios();

const btnModificar = ref('Modificar')

const btnModificarM = ref('Modificar')

const deactiva = ref('')

const loading = ref(false);

const loadingU = ref(false);

const showModal1 = ref('')

const activaHide1 = ref('')

const activaModal1 = ref('')

const displayModal1 = ref('')

const disabledMagnitud = ref('')

const disabledMagnitudBtn = ref('')

const disabledMedida = ref('')

const disabledMedidaBtn = ref('')

const loadingA = (texto) => {
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

const obtenSucursal = (id) => {
  const val = ref('')
  for (let index = 0; index < itemsSucursales1.value.length; index++) {
    if (id == itemsSucursales1.value[index].id) {
      // console.log(listadoMedida.value[index].id)
      return itemsSucursales1.value[index].attributes.sucursal
    }
  }

}

// Excel

const nuevoArreglo = ref([]);
const elementos = ref([]);
function ExportExcel() {
  elementos.value = []
  nuevoArreglo.value = []
  for (let index = 0; index < itemsSucursales1.value.length; index++) {
    elementos.value.TIPO = itemsSucursales1.value[index].type;
    elementos.value.SUCURSAL = itemsSucursales1.value[index].attributes.sucursal;
    elementos.value.ABREVIATURA = itemsSucursales1.value[index].attributes.abreviatura;
    elementos.value.DESCRIPCIÓN = itemsSucursales1.value[index].attributes.descripcion;
    elementos.value.OBSERVACIÓN = itemsSucursales1.value[index].attributes.observacion;
    elementos.value.CREADO = itemsSucursales1.value[index].attributes.timestamps.created_at;
    elementos.value.MODIFICADO = itemsSucursales1.value[index].attributes.timestamps.updated_at;
    nuevoArreglo.value.push(elementos.value)
    elementos.value = []
  }
  // console.log(nuevoArreglo)
  const worksheet = XLSX.utils.json_to_sheet(nuevoArreglo.value);
  const workbook = XLSX.utils.book_new();
  // // Abriendo el excel
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  // // Generar el archivo
  const fileName = 'Sucursales.xlsx';
  // // Guardar el archivo execl
  XLSX.writeFile(workbook, fileName);
  successFull("Documento creado satisfactoriamente.", "top-end")
}
// Fin

function ExportExcelMedidas() {
  elementos.value = []
  nuevoArreglo.value = []
  for (let index = 0; index < itemsUbicaciones1.value.length; index++) {
    elementos.value.TIPO = itemsUbicaciones1.value[index].type;
    elementos.value.UBICACIÓN = itemsUbicaciones1.value[index].attributes.ubicacion;
    elementos.value.DESCRIPCIÓN = itemsUbicaciones1.value[index].attributes.descripcion;
    elementos.value.OBSERVACIÓN = itemsUbicaciones1.value[index].attributes.observacion;
    elementos.value.CREADO = itemsUbicaciones1.value[index].attributes.timestamps.created_at;
    elementos.value.MODIFICADO = itemsUbicaciones1.value[index].attributes.timestamps.updated_at;
    nuevoArreglo.value.push(elementos.value)
    elementos.value = []
  }
  // console.log(nuevoArreglo)
  const worksheet = XLSX.utils.json_to_sheet(nuevoArreglo.value);
  const workbook = XLSX.utils.book_new();
  // // Abriendo el excel
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  // // Generar el archivo
  const fileName = 'Ubicaciones.xlsx';
  // // Guardar el archivo execl
  XLSX.writeFile(workbook, fileName);
  successFull("Documento creado satisfactoriamente.", "top-end")
}

const IdMagnitud = ref(0);

const ObtenIdMagnitud = (ID) => {
  IdMagnitud.value = ID;
  // console.log(formUbicaciones.data.attributes.magnitud_id)
}

const cerrarAlert = () => {
  Swal.close();
}

const EliminarTodos = () => {
  Swal.fire({
    title: "Confirmación",
    text: `Está a punto de eliminar todos los registros de la tabla.`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, eliminar"
  }).then((result) => {
    if (result.isConfirmed) {
      esperando.value = true;
      // Eliminar //
      axios.delete(`http://${ipPublica.value}/fullstack/public/magnitudes`)
        .then(() => {
          esperando.value = false;
          loading.value = true;
          listadoMagnitudes.value = []
          successFull("Se han eliminado todos los datos satisfactoriamente.", "top-end")
          // cargado.value = false;
          loading.value = false;
          // esperando.value = false;
        })
        .catch((error) => {
          if (error.response.status === 400) {
            errors.value = error.response.data;
          }
          esperando.value = false;
          ErrorFull("Error realizando la operación.", "top-start")
        })
    }
  })
}

const EliminarTodosMedidas = () => {
  Swal.fire({
    title: "Confirmación",
    text: `Está a punto de eliminar todos los registros de la tabla.`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, eliminar"
  }).then((result) => {
    if (result.isConfirmed) {
      esperando.value = true;
      // Eliminar //
      axios.delete(`http://${ipPublica.value}/fullstack/public/medidas`)
        .then(() => {
          esperando.value = false;
          loadingU.value = true;
          listadoUbicaciones.value = []
          successFull("Se han eliminado todos los datos satisfactoriamente.", "top-end")
          // cargado.value = false;
          loadingU.value = false;
          // esperando.value = false;
        })
        .catch((error) => {
          if (error.response.status === 400) {
            errors.value = error.response.data;
          }
          esperando.value = false;
          ErrorFull("Error realizando la operación.", "top-start")
        })
    }
  })
}
// Definicion de props
// defineProps({
//  datosPaginados1 : {
//   type : []
// },
// listado : {
//   type : []
// },
// });
// Fin definicion

// CRUD completo

const isactive = ref('is-active')

const isactive2 = ref('is-inactive')

const isactive3 = ref('is-inactive')

const display1 = ref('')

const display2 = ref('display: none')

const vis = ref(false)

const vis2 = ref(true)

const selec = ref(true)

const selec2 = ref(false)

const Tab1 = () => {
  isactive.value = 'is-active'
  isactive2.value = 'is-inactive'
  isactive3.value = 'is-inactive'
  selec.value = true;
  selec2.value = false
  display1.value = ''
  display2.value = 'display: none'
  vis.value = false;
  vis2.value = true
}

const Tab2 = () => {
  isactive.value = 'is-inactive'
  isactive2.value = 'is-active'
  isactive3.value = 'is-inactive'
  selec.value = false;
  selec2.value = true
  display1.value = 'display: none'
  display2.value = ''
  vis2.value = false;
  vis.value = true
}

let errors = ref([]);

const searchField = ref(["attributes.sucursal", "attributes.abreviatura", "attributes.descripcion", "attributes.observacion"]);

const searchValue = ref("");

const searchFieldMedida = ref(["attributes.ubicacion", "attributes.descripcion", "attributes.observacion"]);

const searchValueMedida = ref("");

let listadoMagnitudes = ref([]);

let listadoUbicaciones = ref([]);

let listadoSucursales = ref([]);

let datosPaginados = ref([]);

let datosSinPaginar = ref([]);

// let buscando = ref('');

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

const datos_archivados = ref([]);

const successFull = (mensaje, posicion) => {

  const toast = Swal.mixin({
    toast: true,
    position: posicion,
    showConfirmButton: false,
    timer: 1500,
    //timerProgressBar: true,
  })
  toast.fire({
    icon: "success",
    title: mensaje
  })
}

const ErrorFull = (mensaje, posicion) => {

  const toast = Swal.mixin({
    toast: true,
    position: posicion,
    showConfirmButton: false,
    timer: 2500,
    //timerProgressBar: true,
  })
  toast.fire({
    icon: "error",
    title: mensaje
  })
}

const emit = defineEmits(['cerrar', 'actualiza']);

// const alerta = useAlertsStore;

function closeVentana() {
  emit('cerrar')
  // alerta.ActualizarDepartamentos();
}

let magnitudVacio = ref(false)

let descripVacio = ref(false)

const agrega = () => {
  editar.value = false
  errores.value.sucursal = "";
  errores.value.descripcion = "";
  errores.value.observacion = "";
  errores.value.abreviatura = "";
  errores.value.ubicacion = "";
  errores.value.descripcionUbica = "";
  errores.value.obserUbica = "";
  errores.value.sucursal_id = "";
  store.formUbicaciones.data.attributes.ubicacion = '';
  store.formUbicaciones.data.attributes.descripcion = '';
  store.formUbicaciones.data.attributes.observacion = '';
  store.formUbicaciones.data.attributes.sucursal_id = '';
  store.formSucursal.data.attributes.sucursal = '';
  store.formSucursal.data.attributes.descripcion = '';
  store.formSucursal.data.attributes.observacion = '';
  store.formSucursal.data.attributes.abreviatura = '';
}

let GuardarMag = ref('Agregar')

const errores = ref({ sucursal: "", abreviatura: "", descripcion: "", observacion: "", ubicacion: "", descripcionUbica: "", obserUbica: "", sucursal_id: "" })

const agregarU = async () => {
  // console.log(formSucursal)
  store.cambiaEstado(4)
  if (store.formSucursal.data.attributes.sucursal != '' && store.formSucursal.data.attributes.abreviatura != '' && store.formSucursal.data.attributes.descripcion != '') {
    // console.log("OKKKK")
    disabledMagnitudBtn.value = 'disabled'
    GuardarMag.value = 'Guardando...';
    store.formSucursal.id = store.nextIDSucursal + 1;
    const response = await GuardarDatos(store.formSucursal, 2);
    if (response == null) {
      store.cambiaEstado(4)
    } else {
      disabledMagnitudBtn.value = '';
      GuardarMag.value = 'Agregar'
      // console.log(response)
      store.formSucursal.data.attributes.sucursal = '';
      store.formSucursal.data.attributes.descripcion = '';
      store.formSucursal.data.attributes.abreviatura = '';
      store.formSucursal.data.attributes.observacion = '';
      store.AddSucursal(response)
      itemsSucursales1.value = store.itemsSucursales;
      successFull("Sucursal agregada satisfactoriamente.", "top-end")
      disabledMagnitudBtn.value = '';
      GuardarMag.value = 'Agregar'
      store.cambiaEstado(4)
    }
  } else {
    store.cambiaEstado(4);
    if (store.formSucursal.data.attributes.sucursal == "") {
      errores.value.sucursal = "Este campo es obligatorio"
    } else {
      errores.value.sucursal = ""
    }

    if (store.formSucursal.data.attributes.abreviatura == "") {
      errores.value.abreviatura = "Este campo es obligatorio"
    } else {
      errores.value.abreviatura = ""
    }

    if (store.formSucursal.data.attributes.descripcion == "") {
      errores.value.descripcion = "Este campo es obligatorio"
    } else {
      errores.value.descripcion = ""
    }
    ErrorFull("Debe llenar todos los campos obligatorios", "top-start")
  }

  // console.log(datos_archivados.value);

}

let GuardarMedida = ref('Agregar');

const agregarUMedida = async () => {

  store.cambiaEstado(7)
  if (store.formUbicaciones.data.attributes.sucursal != '' && store.formUbicaciones.data.attributes.observacion != '' && store.formUbicaciones.data.attributes.descripcion != '' && store.formUbicaciones.data.attributes.sucursal_id != '') {
    // console.log("OKKKK")
    disabledMedidaBtn.value = 'disabled'
    GuardarMedida.value = 'Guardando...';
    store.formUbicaciones.id = store.nextIDUbicacion + 1;
    const response = await GuardarDatos(store.formUbicaciones, 7);
    if (response == null) {
      store.cambiaEstado(7)
    } else {
      disabledMedidaBtn.value = '';
      GuardarMedida.value = 'Agregar'
      // console.log(response)
      store.formUbicaciones.data.attributes.ubicacion = '';
      store.formUbicaciones.data.attributes.descripcion = '';
      store.formUbicaciones.data.attributes.sucursal_id = '';
      store.formUbicaciones.data.attributes.observacion = '';
      store.AddUbicaciones(response)
      itemsUbicaciones1.value = store.itemsUbicaciones;
      successFull("Ubicación agregada satisfactoriamente.", "top-end")
      disabledMedidaBtn.value = '';
      GuardarMedida.value = 'Agregar'
      store.cambiaEstado(7)
    }
  } else {
    store.cambiaEstado(7);
    if (store.formUbicaciones.data.attributes.ubicacion == "") {
      errores.value.ubicacion = "Este campo es obligatorio"
    } else {
      errores.value.ubicacion = ""
    }

    if (store.formUbicaciones.data.attributes.descripcion == "") {
      errores.value.descripcionUbica = "Este campo es obligatorio"
    } else {
      errores.value.descripcionUbica = ""
    }

    if (store.formUbicaciones.data.attributes.observacion == "") {
      errores.value.obserUbica = "Este campo es obligatorio"
    } else {
      errores.value.obserUbica = ""
    }
    if (store.formUbicaciones.data.attributes.sucursal_id == "") {
      errores.value.sucursal_id = "Este campo es obligatorio"
    } else {
      errores.value.sucursal_id = ""
    }
    ErrorFull("Debe llenar todos los campos obligatorios", "top-start")
  }

  // esperando.value = true;
  // if (formUbicaciones) {
  //   // console.log("OKKKK")
  //   GuardarMedida.value = 'Guardando...'
  //   disabledMedidaBtn.value = 'disabled'
  //   axios.post(`https://` + ipPublica.value + `/fullstack/public/ubicaciones`, formUbicaciones)
  //     .then((response) => {
  //       if (response.data.data == null) {
  //         // console.log(response.data.data)
  //         GuardarMedida.value = 'Agregar ubicación';
  //         disabledMedidaBtn.value = ''
  //         ErrorFull("Error realizando operacion", "top-start")
  //       } else {
  //         cargado.value = false;
  //         esperando.value = false;
  //         // cerrarAlert();
  //         // consultar();
  //         formUbicaciones.data.attributes.observacion = ''
  //         formUbicaciones.data.attributes.descripcion = '';
  //         formUbicaciones.data.attributes.ubicacion = '';
  //         // emit('actualiza', 7);
  //         loadingU.value = true;
  //         // emit('actualiza', 7)
  //         // emit('actualiza', 8)
  //         if (listadoUbicaciones.value.length == 0) {
  //           listadoUbicaciones.value.push(response.data.data)
  //         } else {
  //           listadoUbicaciones.value.push(response.data.data)
  //         }

  //         // console.log(listadoUbicaciones.value)
  //         almacenDatosUnidades(listadoUbicaciones.value);
  //         listadoMagnitudes.value = JSON.parse(localStorage.getItem('ListadoCacheUnidades'));
  //         obtenerListadoLimpioMedida()
  //         loadingU.value = false;
  //         GuardarMedida.value = 'Agregar ubicación';
  //         disabledMedidaBtn.value = ''
  //         successFull("Unidad de medida agregada satisfactoriamente.", "top-end")
  //         // closeVentana();
  //       }


  //     })
  //     .catch((error) => {
  //       if (error.response.status === 400) {
  //         errors.value = error.response.data.message;
  //       }
  //       esperando.value = false;
  //       ErrorFull(error.response.data.message, "top-start")
  //       // cerrarAlert();
  //       // Swal.fire({
  //       //   icon: "error",
  //       //   title: error.response.data.message
  //       // })
  //     })
  // } else {
  //   if (formUbicaciones.data.attributes.magnitud == "") {
  //     medidaVacio.value = true;
  //   }

  //   if (formUbicaciones.data.attributes.descripcion == "") {
  //     descripMediVacio.value = true;
  //   }
  //   ErrorFull("Debe llenar todos los campos obligatorios", "top-start")
  // }

  // console.log(datos_archivados.value);

}

// Paginado
const obtenerPagina = (nopage) => {
  paginaActual.value = nopage;
  inicio.value = (nopage * elementPagina.value) - elementPagina.value;
  fin.value = (nopage * elementPagina.value);
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

const obtenerListadoLimpio = async () => {
  let i = 0;
  items.value = [];
  // cargar datos en tabla-vue
  // console.log('Actualizando 1...')
  for (let index = 0; index < listadoMagnitudes.value.length; index++) {
    items.value.push(listadoMagnitudes.value[index])
  }

  return await items;

}

const obtenerSucursales = async () => {
  let i = 0;
  itemsSucursales.value = [];
  // cargar datos en tabla-vue
  // console.log('Actualizando 1...')
  for (let index = 0; index < listadoSucursales.value.length; index++) {
    itemsSucursales.value.push(listadoSucursales.value[index])
  }

  return await items;

}

const obtenerListadoLimpioMedida = async () => {
  let i = 0;
  itemsUbicaciones.value = [];
  for (let index = 0; index < listadoUbicaciones.value.length; index++) {
    itemsUbicaciones.value.push(listadoUbicaciones.value[index])
  }

  return await itemsUbicaciones;

}

const obtenerListadoLimpioSucursales = () => {
  let i = 0;
  // if (cargado.value = false) {
  newListadoSucursal.value = [];
  for (let index = 0; index < listadoSucursales.value.length; index++) {
    const element = listadoSucursales.value[index];
    if (element.attributes.deleted_at == null) {
      newListadoSucursal.value[i] = element;
      i++;
    }
  }
  return newListadoSucursal;
  // }

}

const almacenDatosProductos = (Lista) => {
  // if (localStorage.getItem('ListadoCache')) {
  //datos_archivados.value.push(Lista);
  localStorage.removeItem('ListadoCache');
  //   }else{
  const parsed = JSON.stringify(Lista);
  localStorage.setItem('ListadoCache', parsed);
  // dataCache.value = JSON.parse(localStorage.getItem('ListadoCache'));
  // }
}

const consultar = async () => {
  if (cargado.value == false) {
    let response = await axios.get(`http://` + ipPublica.value + `/fullstack/public/productos`)
      .then((response) => {
        listado.value = response.data.data;
        // console.log(listado.value)
        almacenDatosProductos(listado.value);
        obtenerListadoLimpio();
        // actualizar_datos();
        cargado.value = true;
        // console.log(response.data.data)
        // datosSinPaginar.value = response.data.data;
        // cantidad.value = Math.ceil(response.data.data.length / elementPagina.value);
        // obtenerPagina(1);
        // cargado.value = true;
        // router.go();
      });
  } else {
    // console.log(listado.value)
    almacenDatosProductos(listado.value);
    obtenerListadoLimpio();
    // actualizar_datos();
    // datosSinPaginar.value = listado.value;
    // cantidad.value = Math.ceil(listado.value.length / elementPagina.value);
    // obtenerPagina(1);
  }

}

const editarUModel = async () => {
  await Swal.fire({

    input: "textarea",
    inputLabel: `Modificar datos del producto: ` + `${formSucursal.data.attributes.magnitud}`,
    inputPlaceholder: "Observaciones del producto",
    inputAttributes: {
      "aria-label": "Observaciones del producto"
    },
    showCancelButton: true,
    confirmButtonText: "Modificar"
  });
  if (text) {
    Swal.fire(text);
  }
}

const consultarSucursales = async () => {
  // if (cargado.value == false) {
  let response = await axios.get(`http://` + ipPublica.value + `/fullstack/public/sucursals`)
    .then((response) => {
      listadoSucursales.value = response.data.data;
      // console.log(response.data)
      // datosSinPaginar.value = response.data.data;
      // cantidad.value = Math.ceil(response.data.data.length / elementPagina.value);
      // obtenerPagina(1);
      // cargado.value = true;
      // router.go();
      listadoSucursales.value = obtenerListadoLimpioSucursales();
    });

  // }

}

const buscandoElemento = () => {
  clearTimeout(setTiempoBusca);
  setTiempoBusca = setTimeout(consultar, 360);
}

const EditarListado = async (newdato) => {
  let i = 0;
  itemsSucursales.value = [];
  // cargar datos en tabla-vue
  // console.log('Actualizando 1...')
  for (let index = 0; index < listadoSucursales.value.length; index++) {
    if (newdato.id == listadoSucursales.value[index].id) {
      listadoSucursales.value[index] = newdato;
    }
    itemsSucursales.value.push(listadoSucursales.value[index])
  }
  almacenDatosSucursales(itemsSucursales.value);
  // console.log(items);

  return await itemsSucursales;

}

const btnModificarClass = ref('')

const editarU = async () => {
  store.cambiaEstado(4);
  btnModificar.value = 'Actualizando...'
  btnModificarClass.value = 'disabled'
  const response = await EditarDatos(id.value, store.formSucursal, 2);
  // console.log(response)
  editar.value = false;
  store.formSucursal.data.attributes.descripcion = ''
  store.formSucursal.data.attributes.observacion = '';
  store.formSucursal.data.attributes.sucursal = '';
  store.formSucursal.data.attributes.abreviatura = '';
  store.EditSucursal(response)
  itemsSucursales1.value = store.itemsSucursales;
  btnModificar.value = 'Modificar'
  btnModificarClass.value = ''
  successFull("Sucursal modificada satisfactoriamente.", "top-end")
  store.cambiaEstado(4);
  // esperando.value = true;
  // btnModificar.value = 'Actualizando...'
  // btnModificarClass.value = 'disabled'
  // // deactiva.value = true;
  // await axios.put(`https://${ipPublica.value}/fullstack/public/sucursales/${id.value}`, formSucursal)
  //   .then((response) => {
  //     if (response.data.data == null) {
  //       btnModificar.value = 'Modificar'
  //       btnModificarClass.value = ''
  //     } else {
  //       editar.value = false;
  //       formSucursal.data.attributes.descripcion = ''
  //       formSucursal.data.attributes.observacion = '';
  //       formSucursal.data.attributes.sucursal = '';
  //       formSucursal.data.attributes.abreviatura = '';
  //       loading.value = true;
  //       EditarListado(response.data.data)
  //       successFull("Sucursal editada satisfactoriamente.", "top-end")
  //       loading.value = false;
  //       esperando.value = false;
  //       btnModificar.value = 'Modificar'
  //       btnModificarClass.value = ''
  //     }
  //   })
  //   .catch((error) => {
  //     if (error.status === 400) {
  //       errors.value = error.response.data;
  //     }
  //     esperando.value = false;
  //     btnModificar.value = 'Modificar'
  //     btnModificarClass.value = ''
  //     ErrorFull('Error realizando la operacion. Inténtelo más tarde.')
  //     // cerrarAlert();
  //     // Swal.fire({
  //     //   icon: "danger",
  //     //   title: "Error realizando operación."
  //     // })
  //   })
}

const EditarlistadoUbicaciones = async (newdato) => {
  let i = 0;
  itemsUbicaciones.value = [];
  // cargar datos en tabla-vue
  // console.log(newdato.id)
  for (let index = 0; index < listadoUbicaciones.value.length; index++) {
    if (newdato.id == listadoUbicaciones.value[index].id) {
      listadoUbicaciones.value[index] = newdato;
    }
    itemsUbicaciones.value.push(listadoUbicaciones.value[index])
  }
  almacenDatosUbicaciones(itemsUbicaciones.value);
  // console.log(items);

  return await itemsUbicaciones;

}

const EliminarListado = async (newdato) => {
  let i = 0;
  itemsSucursales.value = [];
  // cargar datos en tabla-vue
  // console.log(newdato.id)
  for (let index = 0; index < listadoSucursales.value.length; index++) {
    if (newdato.id == listadoSucursales.value[index].id) {
      listadoSucursales.value.splice(index, 1)
    }
    itemsSucursales.value.push(listadoSucursales.value[index])
  }
  almacenDatosSucursales(itemsSucursales.value);
  // console.log(itemsUbicaciones);

  return await itemsSucursales;

}

const EliminarlistadoUbicaciones = async (newdato) => {
  let i = 0;
  itemsUbicaciones.value = [];
  // cargar datos en tabla-vue
  // console.log(newdato.id)
  for (let index = 0; index < listadoUbicaciones.value.length; index++) {
    if (newdato.id == listadoUbicaciones.value[index].id) {
      listadoUbicaciones.value.splice(index, 1)
    }
    itemsUbicaciones.value.push(listadoUbicaciones.value[index])
  }
  almacenDatosUnidades(itemsUbicaciones.value);
  // console.log(itemsUbicaciones);

  return await itemsUbicaciones;

}

const editarUMedida = async () => {
  store.cambiaEstado(7);
  btnModificar.value = 'Actualizando...'
  btnModificarClass.value = 'disabled'
  const response = await EditarDatos(id.value, store.formUbicaciones, 7);
  // console.log(response)
  editar.value = false;
  store.formUbicaciones.data.attributes.descripcion = ''
  store.formUbicaciones.data.attributes.observacion = '';
  store.formUbicaciones.data.attributes.ubicacion = '';
  store.formUbicaciones.data.attributes.sucursal_id = '';
  store.EditUbicaciones(response)
  itemsUbicaciones1.value = store.itemsUbicaciones;
  btnModificar.value = 'Modificar'
  btnModificarClass.value = ''
  successFull("Ubicación modificada satisfactoriamente.", "top-end")
  store.cambiaEstado(7);
  // esperando.value = true;
  // btnModificarM.value = "Actualizando..."
  // deactiva.value = 'disabled';
  // await axios.put(`https://${ipPublica.value}/fullstack/public/ubicaciones/${id.value}`, formUbicaciones)
  //   .then((response) => {
  //     if (response.data.data == null) {
  //       btnModificarM.value = "Modificar"
  //       deactiva.value = ''
  //       ErrorFull("Error realizando operación.", "top-start")
  //     } else {
  //       editar.value = false;
  //       formUbicaciones.data.attributes.descripcion = ''
  //       formUbicaciones.data.attributes.observacion = '';
  //       formUbicaciones.data.attributes.ubicaciones = '';
  //       formUbicaciones.data.attributes.sucursal_id = '';
  //       loading.value = true;
  //       EditarlistadoUbicaciones(response.data.data)
  //       successFull("Ubicación editada satisfactoriamente.", "top-end")
  //       loading.value = false;
  //       esperando.value = false;
  //       btnModificarM.value = "Modificar"
  //       deactiva.value = ''
  //     }
  //   })
  //   .catch((error) => {
  //     if (error.response.status === 400) {
  //       errors.value = error.response.data;
  //     }
  //     esperando.value = false;
  //     ErrorFull("Error realizando operación.", "top-start")
  //   })
}

const borrarU = (id, correo) => {
  Swal.fire({
    title: "Confirmación",
    text: `Está a punto de eliminar la sucursal: ${correo}`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, eliminar"
  }).then(async (result) => {
    if (result.isConfirmed) {
      store.cambiaEstado(4);
      const response = await EliminarDatos(id, 2);
      if (!response) {
        store.cambiaEstado(4);
      } else {
        store.DeleteSucursal(response);
        itemsSucursales1.value = store.itemsSucursales;
        successFull("Sucursal eliminada satisfactoriamente.", "top-end")
        store.cambiaEstado(4);
      }

    }
  })
}

const borrarUMedida = (id, correo) => {
  Swal.fire({
    title: "Confirmación",
    text: `Está a punto de eliminar la ubicación: ${correo}`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, eliminar"
  }).then(async (result) => {
    if (result.isConfirmed) {
      store.cambiaEstado(7);
      const response = await EliminarDatos(id, 7);
      if (!response) {
        store.cambiaEstado(7);
      } else {
        store.DeleteUbicaciones(response);
        itemsUbicaciones1.value = store.itemsUbicaciones;
        successFull("Ubicación eliminada satisfactoriamente.", "top-end")
        store.cambiaEstado(7);
      }

    }
  })
}
// Fin CRUD

const clickEditar = async (idSelect) => {
  editar.value = true;
  errores.value.sucursal = "";
  errores.value.descripcion = "";
  errores.value.observacion = "";
  errores.value.abreviatura = "";
  errores.value.ubicacion = "";
  errores.value.descripcionUbica = "";
  errores.value.obserUbica = "";
  errores.value.sucursal_id = "";
  // localStorage.setItem("editar", editar.value);
  id.value = idSelect;

  for (let index = 0; index < itemsSucursales1.value.length; index++) {
    const element = itemsSucursales1.value[index].id;
    if (element == idSelect) {
      store.formSucursal.data.attributes.descripcion = itemsSucursales1.value[index].attributes.descripcion;
      store.formSucursal.data.attributes.sucursal = itemsSucursales1.value[index].attributes.sucursal;
      store.formSucursal.data.attributes.abreviatura = itemsSucursales1.value[index].attributes.abreviatura;
      store.formSucursal.data.attributes.observacion = itemsSucursales1.value[index].attributes.observacion;
      break;
    }
    // console.log(element)
  }
}

const clickEditarMedidas = async (idSelect) => {
  editar.value = true;
  errores.value.sucursal = "";
  errores.value.descripcion = "";
  errores.value.observacion = "";
  errores.value.abreviatura = "";
  errores.value.ubicacion = "";
  errores.value.descripcionUbica = "";
  errores.value.obserUbica = "";
  errores.value.sucursal_id = "";
  id.value = idSelect;
  // console.log(id.value)
  for (let index = 0; index < itemsUbicaciones1.value.length; index++) {
    const element = itemsUbicaciones1.value[index].id;
    if (element == idSelect) {
      // console.log(listadoUbicaciones.value[index])
      store.formUbicaciones.data.attributes.descripcion = itemsUbicaciones1.value[index].attributes.descripcion;
      store.formUbicaciones.data.attributes.ubicacion = itemsUbicaciones1.value[index].attributes.ubicacion;
      store.formUbicaciones.data.attributes.observacion = itemsUbicaciones1.value[index].attributes.observacion;
      store.formUbicaciones.data.attributes.sucursal_id = itemsUbicaciones1.value[index].relationships.sucursal.data.id;
      break;
    }
  }
}

const cancelarU = () => {
  editar.value = false;
  store.formSucursal.data.attributes.descripcion = '';
  store.formSucursal.data.attributes.sucursal = '';
  store.formSucursal.data.attributes.abreviatura = '';
  store.formSucursal.data.attributes.observacion = '';
}

const cancelarUMedida = () => {
  editar.value = false;
  store.formUbicaciones.data.attributes.descripcion = '';
  store.formUbicaciones.data.attributes.ubicacion = '';
  store.formUbicaciones.data.attributes.observacion = '';
  store.formUbicaciones.data.attributes.sucursal_id = '';
}

const actualizar_datos = () => {
  // localStorage.removeItem('ListadoCache');
  listado.value = JSON.parse(localStorage.getItem('ListadoCache'));
  obtenerListadoLimpio();
  // listadoSucursales.value = JSON.parse(localStorage.getItem('ListadoCacheSucursal'));
  // listadoSucursales = obtenerListadoLimpioSucursales();
}

const almacenDatosMagnitudes = (Lista) => {
  localStorage.removeItem('ListadoCacheMagnitudes');
  const parsed = JSON.stringify(Lista);
  localStorage.setItem('ListadoCacheMagnitudes', parsed);
}

const almacenDatosUnidades = (Lista) => {
  localStorage.removeItem('ListadoCacheUnidades');
  const parsed = JSON.stringify(Lista);
  localStorage.setItem('ListadoCacheUnidades', parsed);
}

const almacenDatosUbicaciones = (Lista) => {
  localStorage.removeItem('ListadoCacheUbicaciones');
  const parsed = JSON.stringify(Lista);
  localStorage.setItem('ListadoCacheUbicaciones', parsed);
}

const almacenDatosSucursales = (Lista) => {
  localStorage.removeItem('ListadoCacheSucursal');
  const parsed = JSON.stringify(Lista);
  localStorage.setItem('ListadoCacheSucursal', parsed);
}

const itemsSucursales1 = ref([])

const itemsUbicaciones1 = ref([])

onMounted(async () => {
  if (localStorage.getItem('userName')) {

    if (localStorage.getItem('Carg_datS') == '0') {
      // Sucursales
      store.cambiaEstado(4)
      const response = await obtenerDatos(2);
      if (response.length > 0) {
        store.setListadoSucursales(response)
      }
      for (let index = 0; index < response.length; index++) {
        store.nextIDSucursal = response[index].id;
      }
      localStorage.setItem("Carg_datS", "1");
      itemsSucursales1.value = store.itemsSucursales;
      store.cambiaEstado(4)

    } else {
      store.cambiaEstado(4)
      itemsSucursales1.value = store.itemsSucursales;
      store.cambiaEstado(4)
    }

    if (localStorage.getItem('Carg_datU') == '0') {
      // Ubicaciones
      store.cambiaEstado(7)
      const response = await obtenerDatos(7);
      if (response.length > 0) {
        store.setListadoUbicaciones(response)
      }
      for (let index = 0; index < response.length; index++) {
        store.nextIDUbicacion = response[index].id;
      }
      localStorage.setItem("Carg_datU", "1");
      itemsUbicaciones1.value = store.itemsUbicaciones;
      store.cambiaEstado(7)

    } else {
      store.cambiaEstado(7)
      itemsUbicaciones1.value = store.itemsUbicaciones;
      store.cambiaEstado(7)
    }

  } else {
    router.push('/login');
  }
})

const headersSucursales = [
  { text: "CÓDIGO", value: "id", width: 50, sortable: true },
  // { text: "CODIGO", value: "attributes.codigo", sortable: true },
  { text: "NOMBRE", value: "attributes.sucursal" },
  { text: "ABREVIATURA", value: "attributes.abreviatura" },
  { text: "DESCRIPCIÓN", value: "attributes.descripcion" },
  { text: "OBSERVACIONES", value: "attributes.observacion" },
  // { text: "UNIDAD", value: "unidad" },
  { text: "FECHA DE CREACIÓN", value: "attributes.timestamps.created_at", sortable: true },
  { text: "FECHA DE ACTUALIZACION", value: "attributes.timestamps.updated_at", sortable: true },
  // { text: "VENTAS", value: "cantV", sortable: true },
  { text: "OPCIONES", value: "opciones" }
];

const headersUbicaciones = [
  { text: "CÓDIGO", value: "id", width: 50, sortable: true },
  // { text: "CODIGO", value: "attributes.codigo", sortable: true },
  { text: "NOMBRE", value: "attributes.ubicacion" },
  { text: "SUCURSAL", value: "sucursalid" },
  { text: "DESCRIPCIÓN", value: "attributes.descripcion" },
  { text: "OBSERVACIONES", value: "attributes.observacion" },
  // { text: "UNIDAD", value: "unidad" },
  { text: "FECHA DE CREACIÓN", value: "attributes.timestamps.created_at", sortable: true },
  { text: "FECHA DE ACTUALIZACION", value: "attributes.timestamps.updated_at", sortable: true },
  // { text: "VENTAS", value: "cantV", sortable: true },
  { text: "OPCIONES", value: "opciones" }
];

const items = ref([]);

const itemsUbicaciones = ref([]);

const itemsSucursales = ref([]);

</script>
<style lang="scss" scoped>
.tabs-component {
  margin: 4em 0;
}

.tabs-component-tabs {
  border: solid 1px #ddd;
  border-radius: 6px;
  margin-bottom: 5px;
}

@media (min-width: 700px) {
  .tabs-component-tabs {
    border: 0;
    align-items: stretch;
    display: flex;
    justify-content: flex-start;
    margin-bottom: -1px;
  }
}

.tabs-component-tab,
.tabs-component-tab--custom {
  color: #999;
  font-size: 14px;
  font-weight: 600;
  margin-right: 0;
  list-style: none;
}

.tabs-component-tab:not(:last-child) {
  border-bottom: dotted 1px #ddd;
}

.tabs-component-tab:hover {
  color: #666;
}

.tabs-component-tab.is-active {
  color: #000;
}

.tabs-component-tab.is-disabled *,
.tabs-component-tab--custom.is-disabled * {
  color: #cdcdcd;
  cursor: not-allowed !important;
}

@media (min-width: 700px) {

  .tabs-component-tab,
  .tabs-component-tab--custom {
    background-color: #fff;
    border: solid 1px #ddd;
    border-radius: 3px 3px 0 0;
    margin-right: .5em;
    transform: translateY(2px);
    transition: transform .3s ease;
  }

  .tabs-component-tab.is-active,
  .tabs-component-tab--custom.is-active {
    border-bottom: solid 1px #fff;
    z-index: 2;
    transform: translateY(0);
  }
}

.tabs-component-tab-a,
.tabs-component-tab-a--custom {
  align-items: center;
  color: inherit;
  display: flex;
  padding: .75em 1em;
  text-decoration: none;
}

.tabs-component-panels {
  padding: 4em 0;
}

@media (min-width: 700px) {
  .tabs-component-panels {
    background-color: #fff;
    border: solid 1px #ddd;
    border-radius: 0 6px 6px 6px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .05);
    padding: 4em 2em;
  }
}

.tabs-component-btn {
  cursor: pointer;
  background: #e1ecf4;
  border-radius: 3px;
  border: 1px solid #7aa7c7;
  padding: 4px 8px;
  color: #39739d;
}

.tabs-component-btn:hover {
  background-color: #b3d3ea;
  color: #2c5777;
}

.tabs-component-btn:active {
  background-color: #a0c7e4;
  box-shadow: none;
  color: #2c5777;
}

.tabs-component-tab--custom {
  border-color: #e1ecf4;
  color: #68838d;
}

.tabs-component-tab--custom:hover {
  border-color: #e1ecf4;
  color: #39739d;
}

.tabs-component-tab--custom.is-active {
  color: #39739d;
  border-color: #7aa7c7;
  border-bottom: solid 1px #fff;
}
</style>
