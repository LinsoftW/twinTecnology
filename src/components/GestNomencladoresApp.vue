<template>
  <div>
    <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">MAGNITUDES Y UNIDADES DE MEDIDAS</h1>
      </div>
      <div class="row">
        <!--Listado de magnitudes -->
        <div class="col-xl-12 col-lg-12">
          <div class="card shadow mb-4 ">
            <!-- Card Header - Dropdown -->
            <a href="#collapseCardExample" class="d-block card-header py-3" data-toggle="collapse" role="button"
              aria-expanded="true" aria-controls="collapseCardExample">
              <h6 class="m-0 font-weight-bold text-info"><i class="fas fa-edit"></i> MAGNITUDES</h6>
            </a>
            <div class="collapse show" id="collapseCardExample">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6 col-xl-6 col-lg-12">
                    <div class="justify-content-between">
                      <a data-toggle="modal" @click="agrega()" data-target="#agregaMagnitudes"
                        class="btn btn-info btn-sm btn-icon-split" :class="disabledMagnitud">
                        <span class="icon text-white-50">
                          <i class="fas fa-plus"></i>
                        </span>
                        <span class="text">Nuevo</span>
                      </a>
                      <a @click="generar_pdf()" class="btn btn-secondary btn-sm btn-icon-split m-2"
                        :class="disabledProductos">
                        <span class="icon text-white-50">
                          <i class="fas fa-file-pdf"></i>
                        </span>
                        <span class="text">PDF</span>
                      </a>
                      <a @click="ExportExcel()" class="btn btn-secondary btn-sm btn-icon-split" :class="disabledMagnitud">
                        <span class="icon text-white-50">
                          <i class="fas fa-download"></i>
                        </span>
                        <span class="text">Excel</span>
                      </a>
                      <!-- <a data-toggle="modal" @click="agrega()" data-target="#agregaMagnitudes"
                        class="d-sm-inline-block btn btn-sm btn-info shadow-sm m-2" v-b-tooltip.hover
                        title="Agregar magnitud" disabled><i class="fas fa-plus fa-sm "></i> Nuevo </a> -->
                      <!-- <a @click="abrirModalAddProd()" href="#"
                        class="d-sm-inline-block btn btn-sm btn-secondary shadow-sm" v-b-tooltip.hover
                        title="Agregar producto"><i class="fas fa-print fa-sm "></i> Imprimir </a> -->
                      <!-- <a @click="ExportExcel()" href="#" class="d-sm-inline-block btn btn-sm btn-primary shadow-sm m-2"
                        v-b-tooltip.hover title="Exportar a Excel"><i class="fas fa-download fa-sm "></i> Excel</a> -->
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
                <EasyDataTable table-class-name="customize-table" :headers="headers" :items="itemsMagnitud1"
                  buttons-pagination border-cell v-model:items-selected="itemsSelected" header-text-direction="center"
                  body-text-direction="center" :search-field="searchField" :search-value="searchValue"
                  @click-row="showRow" :rows-per-page="5" show-index :loading="store.esperandoMagnitudes">



                  <template #empty-message>



                    <a>No hay datos que mostrar</a>
                  </template>
                  <template #item-opciones="item">
                    <div class="operation-wrapper">



                      <!-- <button class="btn btn-primary btn-sm btn-circle" data-toggle="modal"



                                      data-target="#EditarProducto" @click="seleccionaProducto(item)" v-b-tooltip.hover



                                      title="Modificar"><span class="fas fa-edit"></span></button> -->



                      <button class="btn btn-primary btn-sm btn-circle" data-toggle="modal"
                        @click="clickEditar(item.id)" data-target="#agregaMagnitudes" v-b-tooltip.hover
                        title="Editar"><span class="fas fa-edit"></span></button>
                      <!-- <button class="btn btn-info" data-toggle="modal" @click="clickEditar(item.id)" data-target="#agregaEditaMagnitudes"> <span
                  class="fa fa-plus"></span> Nuevo</button> -->



                      <!-- <button class="btn btn-success btn-sm btn-circle ml-1" @click="Aumentar(item)" v-b-tooltip.hover



                            title="Aumentar"><span class="fas fa-plus"></span></button>



                          <button class="btn btn-warning btn-sm btn-circle ml-1" @click="Disminuir(item)" v-b-tooltip.hover



                            title="Restar"><span class="fas fa-minus"></span></button> -->
                      <button class="btn btn-danger btn-sm btn-circle ml-1"
                        @click="borrarU(item.id, item.attributes.magnitud)" v-b-tooltip.hover title="Eliminar"><span
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
              <h6 class="m-0 font-weight-bold text-info"><i class="fas fa-edit"></i> UNIDADES DE MEDIDAS</h6>
            </a>
            <!-- Card Body -->
            <!-- <div class="card-body"> -->
            <div class="collapse show" id="collapseCardExample1">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6 col-xl-6 col-lg-12">
                    <div class="justify-content-between">
                      <!-- <router-link class="button" to="/gest_inventario"> -->
                      <a data-toggle="modal" @click="agrega()" data-target="#agregaMedidas"
                        class="btn btn-info btn-sm btn-icon-split" :class="disabledMedida">
                        <span class="icon text-white-50">
                          <i class="fas fa-plus"></i>
                        </span>
                        <span class="text">Nuevo</span>
                      </a>
                      <a @click="generar_pdfMed()" class="btn btn-secondary btn-sm btn-icon-split m-2"
                        :class="disabledProductos">
                        <span class="icon text-white-50">
                          <i class="fas fa-file-pdf"></i>
                        </span>
                        <span class="text">PDF</span>
                      </a>
                      <a @click="ExportExcelMedidas()" class="btn btn-secondary btn-sm btn-icon-split"
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
                <EasyDataTable table-class-name="customize-table" :headers="headersMedidas" :items="itemsMedida1"
                  buttons-pagination border-cell v-model:items-selected="itemsSelected" header-text-direction="center"
                  body-text-direction="center" :search-field="searchFieldMedida" :search-value="searchValueMedida"
                  @click-row="showRow" :rows-per-page="5" :loading="store.esperandoMedidas" show-index>
                  <template #empty-message>
                    <a>No hay datos que mostrar</a>
                  </template>
                  <template #item-magnitud="item">
                    {{ obtenMagnitud(item.relationships.magnitud.data.id) }} <!-- item.relationships.medida.data.id -->
                  </template>
                  <template #item-opciones="item">
                    <div class="operation-wrapper">
                      <!-- <button class="btn btn-primary btn-sm btn-circle" data-toggle="modal"



                                      data-target="#EditarProducto" @click="seleccionaProducto(item)" v-b-tooltip.hover



                                      title="Modificar"><span class="fas fa-edit"></span></button> -->
                      <button class="btn btn-primary btn-sm btn-circle" data-toggle="modal" data-target="#agregaMedidas"
                        @click="clickEditarMedidas(item.id)" v-b-tooltip.hover title="Editar"><span
                          class="fas fa-edit"></span></button>
                      <!-- <button class="btn btn-success btn-sm btn-circle ml-1" @click="Aumentar(item)" v-b-tooltip.hover



                            title="Aumentar"><span class="fas fa-plus"></span></button>



                          <button class="btn btn-warning btn-sm btn-circle ml-1" @click="Disminuir(item)" v-b-tooltip.hover



                            title="Restar"><span class="fas fa-minus"></span></button> -->

                      <button class="btn btn-danger btn-sm btn-circle ml-1"
                        @click="borrarUMedida(item.id, item.attributes.medida)" v-b-tooltip.hover title="Eliminar"><span
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
  <div :class="'modal fade ' + showModal1" id="agregaMagnitudes" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" :aria-hidden="activaHide1" :arial-modal="activaModal1" :style="displayModal1">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-info" id="exampleModalLabel" v-if="editar == false">NUEVA MAGNITUD</h5>
          <h5 class="modal-title text-info text-center" id="exampleModalLabel" v-if="editar == true"><span
              class="fa fa-edit"></span>
            MODIFICAR LOS DATOS DE LA MAGNITUD <br>(<label style="color: red;">{{
              store.formMagnitud.data.attributes.magnitud
            }}</label>)</h5>
          <!-- <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
            style="text-align: center;">
            <h6 class="m-0 font-weight-bold text-info" v-if="editar == false"><span class="fa fa-plus"></span>
              AGREGAR
              NUEVA MAGNITUD / <i style="color: red;">CAMPOS OBLIGATORIOS</i> (<label style="color: red;">*</label>)
            </h6>
            <h6 class="m-0 font-weight-bold text-info" v-if="editar == true"><span class="fa fa-edit"></span>
              MODIFICAR LOS DATOS DE LA MAGNITUD <br>(<label style="color: red;">{{
                store.formMagnitud.data.attributes.magnitud
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
                      <label class="text-info">Nombre de la magnitud: <label style="color: red;">*</label></label>
                      <input type="text" class="form-control" id="magnitud" aria-describedby="emailHelp"
                        v-model="store.formMagnitud.data.attributes.magnitud" placeholder="Ej: Kg" required
                        @change="verificar_error(3)">
                      <span style="color: red;">{{ errores.magnitud }}</span>
                    </div>
                    <div class="form-group col-lg-12 text-left">
                      <label class="text-info">Descripción: <label style="color: red;">*</label></label>
                      <input type="text" class="form-control" id="descripcion" aria-describedby="emailHelp"
                        v-model="store.formMagnitud.data.attributes.descripcion"
                        placeholder="Ej: Los kilos de un producto" @change="verificar_error(1)">
                      <span style="color: red;">{{ errores.descripcion }}</span>
                    </div>
                    <div class="form-group col-lg-12 text-left">
                      <label class="text-info">Observaciones:</label>
                      <textarea class="form-control" id="observaciones"
                        v-model="store.formMagnitud.data.attributes.observacion"
                        placeholder="Ej: Magnitud de kg"></textarea>

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
  <div :class="'modal fade ' + showModal1" id="agregaMedidas" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" :aria-hidden="activaHide1" :arial-modal="activaModal1" :style="displayModal1">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-info" id="exampleModalLabel" v-if="editar == false">NUEVA UNIDAD DE MEDIDA</h5>
          <h5 class="modal-title text-info text-center" id="exampleModalLabel" v-if="editar == true"><span
              class="fa fa-edit"></span>
            MODIFICAR LOS DATOS DE LA UNIDAD DE MEDIDAS <br>(<label style="color: red;">{{
              store.formMedida.data.attributes.medida
            }}</label>)</h5>

          <!-- <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
            style="text-align: center;">
            <h6 class="m-0 font-weight-bold text-info" v-if="editar == false"><span class="fa fa-plus"></span>
              AGREGAR
              NUEVA MAGNITUD / <i style="color: red;">CAMPOS OBLIGATORIOS</i> (<label style="color: red;">*</label>)
            </h6>
            <h6 class="m-0 font-weight-bold text-info" v-if="editar == true"><span class="fa fa-edit"></span>
              MODIFICAR LOS DATOS DE LA MAGNITUD <br>(<label style="color: red;">{{
                store.formMagnitud.data.attributes.magnitud
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
                <input type="text" class="form-control" id="medida" aria-describedby="emailHelp"
                  v-model="store.formMedida.data.attributes.medida" placeholder="Ej: Kilogramos"
                  @change="verificar_error(4)" required>
                <span style="color: red;">{{ errores.medida }}</span>
              </div>
              <div class="form-group col-lg-12 text-left">
                <label class="text-info">Descripción: <label style="color: red;">*</label></label>
                <input type="text" class="form-control" id="descripcionMed" aria-describedby="emailHelp"
                  v-model="store.formMedida.data.attributes.descripcion" placeholder="Ej: Kilogramos de un producto"
                  @change="verificar_error(5)">
                <span style="color: red;">{{ errores.descripMedida }}</span>
              </div>

            </div>
            <div class="form-group text-left">
              <label class="text-info">Observaciones:</label>
              <textarea class="form-control" id="observacionesMed"
                v-model="store.formMedida.data.attributes.observacion"
                placeholder="Ej: Esta unidad de medida es de kilogramos"></textarea>

            </div>
            <div class="form-group col-lg-12 text-left">
              <label class="text-info">Seleccione una magnitud: <label style="color: red;">*</label></label>
              <select name="IDmagnitud" id="IDmagnitud" style="width: 100%; text-align:center"
                placeholder="Unidad de medida" class="text-gray-900 form-control"
                v-model="store.formMedida.data.attributes.magnitud_id" @change="ObtenIdMagnitud(selected)">
                <option v-for="dato in itemsMagnitud1" :key="dato.id" :value="dato.id">{{
                  dato.attributes.magnitud }}</option>
              </select>
              <span style="color: red;">{{ errores.magnitud_id }}</span>
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
                <a class="btn btn-danger btn-block" data-dismiss="modal" aria-label="close" :class="deactiva">
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
import { ErrorFull, successFull } from './controler/ControlerApp';
import { EditarDatos, EliminarDatos, GuardarDatos, obtenerDatos } from './helper/useAxios';
import jsPDF from 'jspdf';

const itemsMagnitud1 = ref([])

const itemsMedida1 = ref([])

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

// const disabledMagnitud = ref('')

const disabledMagnitudBtn = ref('')

const disabledMedida = ref('')

const disabledMedidaBtn = ref('')

// Excel
const nuevoArreglo = ref([]);
const elementos = ref([]);
function ExportExcel() {
  elementos.value = []
  nuevoArreglo.value = []
  for (let index = 0; index < itemsMagnitud1.value.length; index++) {
    elementos.value.TIPO = itemsMagnitud1.value[index].type;
    elementos.value.MAGNITUD = itemsMagnitud1.value[index].attributes.magnitud;
    elementos.value.DESCRIPCIÓN = itemsMagnitud1.value[index].attributes.descripcion;
    elementos.value.OBSERVACIÓN = itemsMagnitud1.value[index].attributes.observacion;
    elementos.value.CREADO = itemsMagnitud1.value[index].attributes.timestamps.created_at;
    elementos.value.MODIFICADO = itemsMagnitud1.value[index].attributes.timestamps.updated_at;
    nuevoArreglo.value.push(elementos.value)
    elementos.value = []
  }
  // console.log(nuevoArreglo)
  const worksheet = XLSX.utils.json_to_sheet(nuevoArreglo.value);
  const workbook = XLSX.utils.book_new();
  // // Abriendo el excel
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  // // Generar el archivo
  const fileName = 'Magnitudes.xlsx';
  // // Guardar el archivo execl
  XLSX.writeFile(workbook, fileName);
  successFull("Documento exportado satisfactoriamente.", "top-end")
}
// Fin

const obtenMagnitud = (id) => {
  for (let index = 0; index < itemsMagnitud1.value.length; index++) {
    if (id == itemsMagnitud1.value[index].id) {
      // console.log(listadoMedida.value[index].id)
      return itemsMagnitud1.value[index].attributes.magnitud
    }
  }

}

function ExportExcelMedidas() {
  elementos.value = []
  nuevoArreglo.value = []
  for (let index = 0; index < itemsMedida1.value.length; index++) {
    elementos.value.TIPO = itemsMedida1.value[index].type;
    elementos.value.U_MEDIDA = itemsMedida1.value[index].attributes.medida;
    elementos.value.DESCRIPCIÓN = itemsMedida1.value[index].attributes.descripcion;
    elementos.value.OBSERVACIÓN = itemsMedida1.value[index].attributes.observacion;
    elementos.value.MAGNITUD = obtenMagnitud(itemsMedida1.value[index].relationships.magnitud.data.id);
    elementos.value.CREADO = itemsMedida1.value[index].attributes.timestamps.created_at;
    elementos.value.MODIFCADO = itemsMedida1.value[index].attributes.timestamps.updated_at;
    nuevoArreglo.value.push(elementos.value)
    elementos.value = []
  }
  // console.log(nuevoArreglo)
  const worksheet = XLSX.utils.json_to_sheet(nuevoArreglo.value);
  const workbook = XLSX.utils.book_new();
  // // Abriendo el excel
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  // // Generar el archivo
  const fileName = 'Medidas.xlsx';
  // // Guardar el archivo execl
  XLSX.writeFile(workbook, fileName);
  successFull("Documento exportado satisfactoriamente.", "top-end")
}

const IdMagnitud = ref(0);

const ObtenIdMagnitud = (ID) => {
  IdMagnitud.value = ID;
}

const cerrarAlert = () => {
  Swal.close();
}

const generar_pdf = async () => {

  let nuevoArreglo = ref([]);

  for (let index = 0; index < itemsMagnitud1.value.length; index++) {
    nuevoArreglo.value.push({
      id: itemsMagnitud1.value[index].id,
      magnitud: itemsMagnitud1.value[index].attributes.magnitud,
      descripcion: itemsMagnitud1.value[index].attributes.descripcion,
      // codigo: itemsDeparta1.value[index].relationships.departamento.data.id.toString() + itemsDeparta1.value[index].relationships.articulo.data.id.toString() + itemsDeparta1.value[index].id.toString(),
      observacion: itemsMagnitud1.value[index].attributes.observacion,
      fechaC: itemsMagnitud1.value[index].attributes.timestamps.created_at,
      fechaU: itemsMagnitud1.value[index].attributes.timestamps.updated_at
    })
  }

  const doc = new jsPDF('p', 'pt');

  let columnas = [
    { title: "No", dataKey: "id" },
    { title: "Nombre", dataKey: "magnitud" },
    { title: "Descripción", dataKey: "descripcion" },
    { title: "Observación", dataKey: "observacion" },
    { title: "Fecha creación", dataKey: "fechaC" },
    { title: "Fecha actualización", dataKey: "fechaU" }
  ]

  doc.autoTable({columns: columnas, body: nuevoArreglo.value})
  // const doc = new jsPDF({
  //   orientation: "landscape",
  //   unit: "in",
  //   format: [10, 10]
  // });

  doc.text("Listado de magnitudes", 220, 25);
  doc.save("Magnitudes.pdf");

  // cerrarAlert();


}

const generar_pdfMed = async () => {

  let nuevoArreglo = ref([]);

  for (let index = 0; index < itemsMedida1.value.length; index++) {
    nuevoArreglo.value.push({
      id: itemsMedida1.value[index].id,
      medida: itemsMedida1.value[index].attributes.medida,
      descripcion: itemsMedida1.value[index].attributes.descripcion,
      observacion: itemsMedida1.value[index].attributes.observacion,
      fechaC: itemsMedida1.value[index].attributes.timestamps.created_at,
      fechaU: itemsMedida1.value[index].attributes.timestamps.updated_at
    })
  }

  const doc = new jsPDF('p', 'pt');

  let columnas = [
    { title: "No", dataKey: "id" },
    { title: "Nombre", dataKey: "medida" },
    { title: "Descripción", dataKey: "descripcion" },
    { title: "Observación", dataKey: "observacion" },
    { title: "Fecha creación", dataKey: "fechaC" },
    { title: "Fecha actualización", dataKey: "fechaU" }
  ]

  doc.autoTable({columns: columnas, body: nuevoArreglo.value})
  // const doc = new jsPDF({
  //   orientation: "landscape",
  //   unit: "in",
  //   format: [10, 10]
  // });

  doc.text("Listado de unidades de medidas", 220, 25);
  doc.save("U_Medidas.pdf");
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
          listadoMedida.value = []
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

const searchField = ref(["attributes.magnitud", "attributes.descripcion", "attributes.observacion"]);

const searchValue = ref("");

const searchFieldMedida = ref(["attributes.medida", "attributes.descripcion", "attributes.observacion"]);

const searchValueMedida = ref("");

let datosPaginados = ref([]);

let datosSinPaginar = ref([]);

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

const emit = defineEmits(['cerrar', 'actualiza']);

function closeVentana() {
  emit('cerrar')
  // alerta.ActualizarDepartamentos();
}

let magnitudVacio = ref(false)

let descripVacio = ref(false)

const agrega = () => {
  editar.value = false
  errores.value.descripcion = "";
  errores.value.obserMedida = "";
  errores.value.observacion = "";
  errores.value.magnitud = "";
  errores.value.medida = "";
  errores.value.magnitud_id = "";
  errores.value.descripMedida = "";
  store.formMedida.data.attributes.medida = '';
  store.formMedida.data.attributes.descripcion = '';
  store.formMedida.data.attributes.observacion = '';
  store.formMedida.data.attributes.magnitud_id = '';
  store.formMagnitud.data.attributes.magnitud = '';
  store.formMagnitud.data.attributes.descripcion = '';
  store.formMagnitud.data.attributes.observacion = '';
}

const errores = ref({ descripcion: "", observacion: "", magnitud: "", descripMedida: "", obserMedida: "", medida: "", magnitud_id: "" })

const verificar_error = (n) => {
  switch (n) {
    case 1:
      if (store.formMagnitud.data.attributes.descripcion != '') {
        errores.value.descripcion = "";
      } else {
        errores.value.descripcion = "Este campo es obligatorio"
      }
      break;
    case 2:
      if (store.formMagnitud.data.attributes.observacion != '') {
        errores.value.observacion = "";
      } else {
        errores.value.observacion = "Este campo es obligatorio"
      }
      break;
    case 3:
      if (store.formMagnitud.data.attributes.magnitud != "") {
        errores.value.magnitud = "";
      } else {
        errores.value.magnitud = "Este campo es obligatorio"
      }
      break;

    case 4:
      if (store.formMedida.data.attributes.medida != "") {
        errores.value.medida = "";
      } else {
        errores.value.medida = "Este campo es obligatorio"
      }
      break;
    case 5:
      if (store.formMedida.data.attributes.descripcion != "") {
        errores.value.descripMedida = "";
      } else {
        errores.value.descripMedida = "Este campo es obligatorio"
      }
      break;
    case 6:
      if (store.formMedida.data.attributes.observacion != "") {
        errores.value.obserMedida = "";
      } else {
        errores.value.obserMedida = "Este campo es obligatorio"
      }
      break;
    case 7:
      if (store.formMedida.data.attributes.magnitud_id != "") {
        errores.value.magnitud_id = "";
      } else {
        errores.value.magnitud_id = "Este campo es obligatorio"
      }
      break;

    default:
      break;
  }
  // if (formProductos.data.attributes.descripcion != '') {
  //   errores.value.descripcion = "";
  // }
  // if (formProductos.data.attributes.observacion != '') {
  //   errores.value.observacion = "";
  // }
  // if (formProductos.data.attributes.articulo_id != 0) {
  //   errores.value.articulo_id = -1;
  // }
  // if (formProductos.data.attributes.ubicacion_id != 0) {
  //   errores.value.ubicacion_id = -1;
  // }
  // if (formProductos.data.attributes.cantidad != 0) {
  //   errores.value.cantidad = -1;
  // }
}

let GuardarMag = ref('Agregar')

const agregarU = async () => {
  store.cambiaEstado(8);
  if (store.formMagnitud.data.attributes.magnitud != '' && store.formMagnitud.data.attributes.descripcion != '') {
    // console.log("OKKKK")
    disabledMagnitudBtn.value = 'disabled'
    GuardarMag.value = 'Guardando...';
    store.formMagnitud.id = store.nextIDMagnitud + 1;
    const response = await GuardarDatos(store.formMagnitud, 4)
    store.formMagnitud.data.attributes.observacion = ''
    store.formMagnitud.data.attributes.descripcion = '';
    store.formMagnitud.data.attributes.magnitud = '';
    store.AddMagnitud(response)
    itemsMagnitud1.value = store.itemsMagnitudes;
    disabledMagnitudBtn.value = ''
    GuardarMag.value = 'Agregar'
    store.cambiaEstado(8);
    successFull("Magnitud agregada satisfactoriamente.", "top-end")
  } else {
    if (store.formMagnitud.data.attributes.magnitud == "") {
      errores.value.magnitud = "Este campo es obligatorio"
    } else {
      errores.value.magnitud = ""
    }

    if (store.formMagnitud.data.attributes.descripcion == "") {
      errores.value.descripcion = "Este campo es obligatorio"
    } else {
      errores.value.descripcion = ""
    }
    ErrorFull("Debe llenar todos los campos obligatorios", "top-start")
    store.cambiaEstado(8);
  }

}

let GuardarMedida = ref('Agregar');

const agregarUMedida = async () => {

  if (store.formMedida.data.attributes.medida != "" && store.formMedida.data.attributes.descripcion != "" && store.formMedida.data.attributes.magnitud_id != 0) {
    GuardarMedida.value = 'Guardando...'
    disabledMedidaBtn.value = 'disabled';
    store.formMedida.id = store.nextIDMedida + 1;
    store.cambiaEstado(6);
    const response = await GuardarDatos(store.formMedida, 3)
    store.formMedida.data.attributes.observacion = ''
    store.formMedida.data.attributes.descripcion = '';
    store.formMedida.data.attributes.medida = '';
    store.formMedida.data.attributes.magnitud_id = '';
    store.AddMedida(response)
    itemsMedida1.value = store.itemsMedidas;
    disabledMedidaBtn.value = ''
    GuardarMedida.value = 'Agregar'
    store.cambiaEstado(6);
    successFull("Unidad de medida agregada satisfactoriamente.", "top-end")

  } else {
    if (store.formMedida.data.attributes.medida == "") {
      errores.value.medida = "Este campo es obligatorio"
    } else {
      errores.value.medida = ""
    }

    if (store.formMedida.data.attributes.descripcion == "") {
      errores.value.descripMedida = "Este campo es obligatorio"
    } else {
      errores.value.descripMedida = ""
    }

    if (store.formMedida.data.attributes.magnitud_id == 0) {
      errores.value.magnitud_id = "Este campo es obligatorio"
    } else {
      errores.value.magnitud_id = ""
    }
    ErrorFull("Debe llenar todos los campos obligatorios", "top-start")
  }

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

const obtenerListadoLimpioMedida = async () => {
  let i = 0;
  // if (cargado.value = false) {
  //   newListado.value = [];
  //   for (let index = 0; index < listado.value.length; index++) {
  //     const element = listado.value[index];
  //     if (element.attributes.deleted_at == null) {
  //       newListado.value[i] = element;
  //       i++;
  //     }
  //   }
  //   datosSinPaginar.value = newListado.value;
  //   cantidad.value = Math.ceil(newListado.value.length / elementPagina.value);
  //   obtenerPagina(1);
  //   cargado.value = true;
  // } else {
  //   newListado.value = []
  //   for (let index = 0; index < listado.value.length; index++) {
  //     const element = listado.value[index];
  //     if (element.attributes.deleted_at == null) {
  //       newListado.value[i] = element;
  //       i++;
  //     }
  //   }
  //   datosSinPaginar.value = newListado.value;
  //   cantidad.value = Math.ceil(newListado.value.length / elementPagina.value);
  //   obtenerPagina(1);
  // }

  itemsMedidas.value = [];
  // cargar datos en tabla-vue
  // console.log('Actualizando 1...')
  for (let index = 0; index < listadoMedida.value.length; index++) {
    itemsMedidas.value.push(listadoMedida.value[index])
  }

  return await itemsMedidas;

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
    inputLabel: `Modificar datos del producto: ` + `${store.formMagnitud.data.attributes.magnitud}`,
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
  items.value = [];
  // cargar datos en tabla-vue
  // console.log('Actualizando 1...')
  for (let index = 0; index < listadoMagnitudes.value.length; index++) {
    if (newdato.id == listadoMagnitudes.value[index].id) {
      listadoMagnitudes.value[index] = newdato;
    }
    items.value.push(listadoMagnitudes.value[index])
  }
  almacenDatosMagnitudes(items.value);
  // console.log(items);

  return await items;

}

const btnModificarClass = ref('')

const editarU = async () => {
  store.cambiaEstado(8);
  btnModificar.value = 'Actualizando...'
  btnModificarClass.value = 'disabled';
  const response = await EditarDatos(id.value, store.formMagnitud, 4);
  editar.value = false;
  store.formMagnitud.data.attributes.descripcion = ''
  store.formMagnitud.data.attributes.observacion = '';
  store.formMagnitud.data.attributes.magnitud = '';
  store.EditMagnitud(response)
  itemsMagnitud1.value = store.itemsMagnitudes;
  btnModificar.value = 'Modificar'
  btnModificarClass.value = ''
  successFull("Magnitud modificada satisfactoriamente.", "top-end")
  store.cambiaEstado(8);
}

const EditarlistadoMedida = async (newdato) => {
  let i = 0;
  itemsMedidas.value = [];
  // cargar datos en tabla-vue
  // console.log(newdato.id)
  for (let index = 0; index < listadoMedida.value.length; index++) {
    if (newdato.id == listadoMedida.value[index].id) {
      listadoMedida.value[index] = newdato;
    }
    itemsMedidas.value.push(listadoMedida.value[index])
  }
  almacenDatosUnidades(itemsMedidas.value);
  // console.log(items);

  return await itemsMedidas;

}

const EliminarListado = async (newdato) => {
  let i = 0;
  items.value = [];
  // cargar datos en tabla-vue
  // console.log(newdato.id)
  for (let index = 0; index < listadoMagnitudes.value.length; index++) {
    if (newdato.id == listadoMagnitudes.value[index].id) {
      listadoMagnitudes.value.splice(index, 1)
    }
    items.value.push(listadoMagnitudes.value[index])
  }
  almacenDatosMagnitudes(items.value);
  // console.log(itemsMedidas);

  return await items;

}

const EliminarlistadoMedida = async (newdato) => {
  let i = 0;
  itemsMedidas.value = [];
  // cargar datos en tabla-vue
  // console.log(newdato.id)
  for (let index = 0; index < listadoMedida.value.length; index++) {
    if (newdato.id == listadoMedida.value[index].id) {
      listadoMedida.value.splice(index, 1)
    }
    itemsMedidas.value.push(listadoMedida.value[index])
  }
  almacenDatosUnidades(itemsMedidas.value);
  // console.log(itemsMedidas);

  return await itemsMedidas;

}

const editarUMedida = async () => {
  btnModificarM.value = "Actualizando..."
  deactiva.value = 'disabled';
  store.cambiaEstado(6);
  const response = await EditarDatos(id.value, store.formMedida, 3);
  editar.value = false;
  store.formMedida.data.attributes.descripcion = ''
  store.formMedida.data.attributes.observacion = '';
  store.formMedida.data.attributes.medida = '';
  store.formMedida.data.attributes.magnitud_id = '';
  store.EditMedida(response)
  itemsMedida1.value = store.itemsMedidas;
  btnModificarM.value = "Modificar"
  deactiva.value = '';
  successFull("Unidad de medida modificada satisfactoriamente.", "top-end")
  store.cambiaEstado(6);
}

const borrarU = (id, correo) => {
  Swal.fire({
    title: "Confirmación",
    text: `Está a punto de eliminar la magnitud: ${correo}`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, eliminar"
  }).then(async (result) => {
    if (result.isConfirmed) {
      store.cambiaEstado(8);
      const response = await EliminarDatos(id, 4);
      if (!response) {
        store.cambiaEstado(8);
      } else {
        store.DeleteMagnitud(response);
        itemsMagnitud1.value = store.itemsMagnitudes;
        successFull("Magnitud eliminada satisfactoriamente.", "top-end")
        store.cambiaEstado(8);
      }

    }
  })
}

const borrarUMedida = (id, correo) => {
  Swal.fire({
    title: "Confirmación",
    text: `Está a punto de eliminar la unidad de medida: ${correo}`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, eliminar"
  }).then(async (result) => {
    if (result.isConfirmed) {
      store.cambiaEstado(6);
      const response = await EliminarDatos(id, 3);
      if (!response) {
        store.cambiaEstado(6);
      } else {
        store.DeleteMedida(response);
        itemsMedida1.value = store.itemsMedidas;
        successFull("Unidad de medida eliminada satisfactoriamente.", "top-end")
        store.cambiaEstado(6);
      }

    }
  })
}
// Fin CRUD

const clickEditar = async (idSelect) => {
  editar.value = true;
  errores.value.descripMedida = "";
  errores.value.descripcion = "";
  errores.value.magnitud = "";
  errores.value.obserMedida = "";
  errores.value.medida = "";
  errores.value.observacion = "";
  errores.value.magnitud_id = "";
  id.value = idSelect;

  for (let index = 0; index < itemsMagnitud1.value.length; index++) {
    const element = itemsMagnitud1.value[index].id;
    if (element == idSelect) {
      store.formMagnitud.data.attributes.descripcion = itemsMagnitud1.value[index].attributes.descripcion;
      store.formMagnitud.data.attributes.magnitud = itemsMagnitud1.value[index].attributes.magnitud;
      store.formMagnitud.data.attributes.observacion = itemsMagnitud1.value[index].attributes.observacion;
      break;
    }
  }
}

const clickEditarMedidas = async (idSelect) => {
  editar.value = true;
  errores.value.descripMedida = "";
  errores.value.descripcion = "";
  errores.value.magnitud = "";
  errores.value.obserMedida = "";
  errores.value.medida = "";
  errores.value.observacion = "";
  errores.value.magnitud_id = "";
  id.value = idSelect;
  // console.log(id.value)
  for (let index = 0; index < itemsMedida1.value.length; index++) {
    const element = itemsMedida1.value[index].id;
    if (element == idSelect) {
      // console.log(listadoMedida.value[index])
      store.formMedida.data.attributes.descripcion = itemsMedida1.value[index].attributes.descripcion;
      store.formMedida.data.attributes.medida = itemsMedida1.value[index].attributes.medida;
      store.formMedida.data.attributes.observacion = itemsMedida1.value[index].attributes.observacion;
      store.formMedida.data.attributes.magnitud_id = itemsMedida1.value[index].relationships.magnitud.data.id;
      break;
    }
  }
}

const cancelarU = () => {
  editar.value = false;
  store.formMagnitud.data.attributes.descripcion = '';
  store.formMagnitud.data.attributes.magnitud = '';
  store.formMagnitud.data.attributes.observacion = '';
}

const cancelarUMedida = () => {
  editar.value = false;
  store.formMedida.data.attributes.descripcion = '';
  store.formMedida.data.attributes.medida = '';
  store.formMedida.data.attributes.observacion = '';
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

onMounted(async () => {
  if (localStorage.getItem('userName')) {
    // console.log("okk")
    // ipPublica.value = localStorage.getItem('Host_back');
    if (localStorage.getItem('Carg_datM') == '0') {
      // MAGNITUDES
      store.cambiaEstado(8)
      const response = await obtenerDatos(4);
      if (response.length > 0) {
        store.setListadoMagnitud(response)
      }
      for (let index = 0; index < response.length; index++) {
        store.nextIDMagnitud = response[index].id;
      }
      localStorage.setItem("Carg_datM", "1");
      itemsMagnitud1.value = store.itemsMagnitudes;
      store.cambiaEstado(8)

    } else {
      store.cambiaEstado(8)
      itemsMagnitud1.value = store.itemsMagnitudes;
      store.cambiaEstado(8)
    }

    if (localStorage.getItem('Carg_datMe') == '0') {
      store.cambiaEstado(6)
      const response = await obtenerDatos(3);
      if (response.length > 0) {
        store.setListadoMedidas(response)
      }
      for (let index = 0; index < response.length; index++) {
          store.nextIDMedida = response[index].id;
        }
      localStorage.setItem("Carg_datMe", "1");
      itemsMedida1.value = store.itemsMedidas;
      store.cambiaEstado(6)

    } else {
      store.cambiaEstado(6)
      itemsMedida1.value = store.itemsMedidas;
      store.cambiaEstado(6)
    }

  } else {
    router.push('/login');
  }
})

const headers = [
  { text: "CÓDIGO", value: "id", width: 50, sortable: true },
  // { text: "CODIGO", value: "attributes.codigo", sortable: true },
  { text: "NOMBRE", value: "attributes.magnitud" },
  { text: "DESCRIPCIÓN", value: "attributes.descripcion" },
  { text: "OBSERVACIONES", value: "attributes.observacion" },
  // { text: "UNIDAD", value: "unidad" },
  { text: "FECHA DE CREACIÓN", value: "attributes.timestamps.created_at", sortable: true },
  { text: "FECHA DE ACTUALIZACION", value: "attributes.timestamps.updated_at", sortable: true },
  // { text: "VENTAS", value: "cantV", sortable: true },
  { text: "OPCIONES", value: "opciones" }
];

const headersMedidas = [
  { text: "CÓDIGO", value: "id", width: 50, sortable: true },
  // { text: "CODIGO", value: "attributes.codigo", sortable: true },
  { text: "NOMBRE", value: "attributes.medida" },
  { text: "MAGNITUD", value: "magnitud" },
  { text: "DESCRIPCIÓN", value: "attributes.descripcion" },
  { text: "OBSERVACIONES", value: "attributes.observacion" },

  { text: "FECHA DE CREACIÓN", value: "attributes.timestamps.created_at", sortable: true },
  { text: "FECHA DE ACTUALIZACION", value: "attributes.timestamps.updated_at", sortable: true },
  // { text: "VENTAS", value: "cantV", sortable: true },
  { text: "OPCIONES", value: "opciones" }
];

const items = ref([]);

const itemsMedidas = ref([]);
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
