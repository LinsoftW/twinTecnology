<template>
  <div>
    <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-2 text-gray-800">CARGA MASIVA DE ARCHIVOS</h1>
        <!-- <img src="/cargando2.gif" style="width: 40px; height:40px" v-if="esperando" > -->
        <!-- <div class="row">
          <div class="col-md-12 justify-content-between">
            <a @click="ImprimirDoc()" href="#" class="d-sm-inline-block btn btn-sm btn-secondary shadow-sm"
              v-b-tooltip.hover title="Imprimir"><i class="fas fa-print fa-sm "></i> Imprimir</a>
          </div>
        </div> -->


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
            <h6 class="m-0 font-weight-bold text-info">SELECCIONE EL ARCHIVO (* Excel)</h6>
          </div>
          <!-- Card Body -->
          <div class="card-body ">
            <div class="row d-sm-flex align-items-center justify-content-between mb-4 ">
              <!-- <div class="col-xl-3 col-lg-6 col-md-6 ">
                <label class="m-2 ">Por Sucursal</label>
                <select class="form-control form-control-user">
                  <option value="">Productos</option>
                  <option value="">Categorías</option>
                </select>
              </div> -->
              <div class="col-xl-8 col-lg-6 col-md-6">
                <!-- <label>Por Sucursal</label> -->
                <input type="file" id="archivoExcel" class="form-control form-control-user" @change="onFileChange"
                  accept=".xlsx, .xls" />
                <!---->
              </div>
              <!-- <div class="col-xl-2 col-lg-6 col-md-6 col-sm-4">
                <button class="form-control form-control-user d-sm-inline-block btn btn-sm btn-info shadow-sm m-2"
                  id="loadExcel" @click="loadExcel"><i class="fas fa-upload"></i> Cargar Excel</button>
              </div> -->
              <div class="col-xl-2 col-lg-6 col-md-6 col-sm-4">
                <button class="form-control form-control-user d-sm-inline-block btn btn-sm btn-primary shadow-sm m-2"
                  id="modifyExcel" @click="almacenarDatos()"><i class="fas fa-save"></i> Guardar datos</button>
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

      <!-- Excell -->
      <div class="col-xl-12 col-lg-12">
        <div class="card shadow mb-4">
          <!-- Card Header - Dropdown -->
          <div class=" card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 class="m-0 font-weight-bold text-info">DATOS CARGADOS</h6>

          </div>
          <!-- Card Body -->
          <div class="card-body ">
            <div class="row d-sm-flex align-items-center justify-content-between mb-4 ">
              <div class="col-xl-12 col-lg-12 col-md-12">
                <div class="spreadsheet-container">
                  <EasyDataTable :headers="headers2" :items="item" buttons-pagination border-cell
                    v-model:items-selected="itemsSelected" header-text-direction="center" body-text-direction="center"
                    @click-row="showRow" :rows-per-page="5">
                    <template #item-image="item">
                      <img src="/inventario.jpg" alt="No image" class="img img-thumbnail"
                        style="width: 50px; height: 50px;" />
                    </template>
                    <template #item-opciones="item">
                      <button disabled class="btn btn-info btn-sm btn-circle ml-1" data-toggle="modal"
                        data-target="#agregaProducto" @click="clickEditarProducto(item.id)" v-b-tooltip.hover
                        title="Modificar"><span class="fas fa-edit"></span></button>
                      <button disabled class="btn btn-danger btn-sm btn-circle ml-1"
                        @click="borrarU(item.id, item.attributes.descripcion, 1)" v-b-tooltip.hover
                        title="Eliminar"><span class="fas fas fa-trash-alt"></span></button>
                    </template>

                    <template #loading>
                      <img src="/cargando4.gif" style="width: 100px; height: 80px;" />
                    </template>
                    <template #empty-message>
                      <a>No hay datos que mostrar</a>
                    </template>

                  </EasyDataTable>
                  <!--EJEMPLO CARGARR EXCEL -->
                  <!-- <table v-if="sheetData.length" class="table table-bordered">
                    <thead>
                      <tr>
                        <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(row, rowIndex) in sheetData" :key="rowIndex">
                        <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
                      </tr>
                    </tbody>
                  </table> -->

                  <!-- <EasyDataTable table-class-name="customize-table" :headers="headers" :items="items" buttons-pagination
                    border-cell v-model:items-selected="itemsSelected" header-text-direction="center"
                    body-text-direction="center" :search-field="searchField1" :search-value="searchValue"
                    @click-row="showRow" :rows-per-page="5">
                    <template #item-image="item">
                      <img src="/inventario.jpg" alt="No image" class="img img-thumbnail"
                        style="width: 70px; height: 70px;" />
                    </template>
                    <template #item-opciones="item">
                      <div class="operation-wrapper">
                        <button class="btn btn-primary btn-sm btn-circle" data-toggle="modal"
                          data-target="#EditarProducto" @click="seleccionaProducto(item)" v-b-tooltip.hover
                          title="Modificar"><span class="fas fa-edit"></span></button>
                        <button class="btn btn-success btn-sm btn-circle ml-1" @click="Aumentar(item)" v-b-tooltip.hover
                          title="Aumentar"><span class="fas fa-plus"></span></button>
                        <button class="btn btn-warning btn-sm btn-circle ml-1" @click="Disminuir(item)"
                          v-b-tooltip.hover title="Restar"><span class="fas fa-minus"></span></button>
                        <button class="btn btn-danger btn-sm btn-circle ml-1"
                          @click="borrarU(item.id, item.attributes.codigo, 1)" v-b-tooltip.hover title="Eliminar"><span
                            class="fas fas fa-trash-alt"></span></button>
                        <button class="btn btn-info btn-sm btn-circle ml-1" data-toggle="modal" data-target="#BarCode"
                          @click="generarCodeBar(item.attributes.codigo)" v-b-tooltip.hover
                          title="Código de barra"><span class="fas fas fa-barcode"></span></button>

                      </div>
                    </template>

                  </EasyDataTable> -->

                  <!-- <div v-if="cantidad > 1" v-for="(sheet, index) in sheetsData" :key="index">
                    <h3>Hoja: {{ sheet.name }} </h3>
                    <table>
                      <thead>
                        <tr>
                          <th v-for="(header, hIndex) in sheet.headers1" :key="hIndex">{{ header }}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(row, rIndex) in sheet.data" :key="rIndex">
                          <td v-for="(cell, cIndex) in row" :key="cIndex">{{ cell }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div> -->
                  <!-- <gc-spread-sheets :hostClass='hostClass' @workbookInitialized='workbookInit'>
                    <gc-worksheet :dataSource='tableData' :autoGenerateColumns='autoGenerateColumns'>
                      <gc-column :width='50' :dataField="'id'" :headerText="'ID'" :visible='visible'
                        :resizable='resizable'>
                      </gc-column>
                      <gc-column :width='300' :dataField="'client'" :headerText="'Client'" :visible='visible'
                        :resizable='resizable'>
                      </gc-column>
                      <gc-column :width="350" :headerText="'Description'" :dataField="'description'" :visible='visible'
                        :resizable='resizable'>
                      </gc-column>
                      <gc-column :width="100" :dataField="'value'" :headerText="'Value'" :visible='visible'
                        :formatter='priceFormatter' :resizable='resizable'>
                      </gc-column>
                      <gc-column :width="100" :dataField="'itemCount'" :headerText="'Quantity'" :visible='visible'
                        :resizable='resizable'>
                      </gc-column>
                      <gc-column :width="100" :dataField="'soldBy'" :headerText="'Sold By'" :visible='visible'
                        :resizable='resizable'></gc-column>
                      <gc-column :width="100" :dataField="'country'" :headerText="'Country'" :visible='visible'
                        :resizable='resizable'></gc-column>
                    </gc-worksheet>
                  </gc-spread-sheets> -->
                  <!-- <div class="dashboardRow">
                    <button class="btn btn-primary dashboardButton" @click="exportSheet">
                      Exportar a Excel
                    </button>
                  </div><br> -->
                  <!-- <div>
                    <b>Importar archivo Excel:</b>
                    <div>
                      <input type="file" class="fileSelect" @change="changeFileDemo" />
                    </div>
                  </div> -->
                </div>


                <!-- <div class="spreadsheet-container">
                  <gc-spread-sheets class="spread-host" @workbookInitialized="initSpread()">
                  </gc-spread-sheets>
                  <div class="container-fluid">
                    <div class="option-row">
                      <div class="inputContainer">
                        <p>Open Excel File (.xlsx)</p>
                        <input type="file" id="fileDemo" class="input" @change="changeFileDemo" />
                        <input type="button" id="loadExcel" value="Open Excel" class="button" @click="loadExcel" />
                        <p>Add Data</p>
                        <input type="button" id="saveExcel" value="Add Revenue" class="button" @click="modifyExcel" />
                        <p>Save Excel File (.xlsx)</p>
                        <input id="exportFileName" value="export.xlsx" class="input" @change="changeExportFileName" />
                        <input type="button" id="saveExcel" value="Save Excel" class="button" @click="saveExcel" />
                      </div>
                    </div>
                  </div>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Fin excel -->

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
    <AddProducto v-show="popup" @cerrar="abrirModalAddProd()" />
  </div>
  <template v-if="esperando">
    <div v-on="loading('Cargando datos del archivo excel...')">

    </div>
  </template>

  <!-- <div :class="showModBack" @click="abrirModal()"></div> -->
</template>
<script>
import Swal from 'sweetalert2';
// import { ref } from 'vue';
// import "@mescius/spread-sheets/styles/gc.spread.sheets.excel2016colorful.css";
// SpreadJS imports
// import GC from "@mescius/spread-sheets";
// import "@mescius/spread-sheets-vue";
// import Excel from "@mescius/spread-excelio";
// import { saveAs } from 'file-saver';
// import "@mescius/spread-sheets-io";
// import readXlsxFile from 'read-excel-file';
import * as XLSX from 'xlsx'
import { successFull } from './controler/ControlerApp';
import { useStoreAxios } from '@/store/AxiosStore';
import { GuardarColecciones } from './helper/useAxios';

// const searchField = ref("attributes.codigo");

// const searchField1 = ref('')

// const searchValue = ref("");

// const itemsSelected = ref([]);

// const headers = [
//   { text: "NO", value: "id", width: 50, sortable: true },
//   { text: "IMAGEN", value: "image" },
//   { text: "CODIGO", value: "attributes.codigo", sortable: true },
//   { text: "CATEGORIA", value: "type" },
//   { text: "P.COMPRA", value: "precioC", sortable: true },
//   { text: "P.VENTA", value: "precioV", sortable: true },
//   { text: "UNIDAD", value: "unidad" },
//   { text: "STOCK", value: "stock", sortable: true },
//   { text: "VENTAS", value: "cantV", sortable: true },
//   { text: "OPCIONES", value: "opciones" }
// ];

// const items = ref([]);

export default {
  // components: { TablePanel },
  props: ["tableData"],
  data() {
    return {
      sheetName: 'Sales Data',
      hostClass: 'spreadsheet',
      // autoGenerateColumns: true,
      // width: 200,
      // visible: true,
      // resizable: true,
      // priceFormatter: "$ #.00",
      item: [],
      sheetData: [],
      sheetsData: [],
      headers: [],
      headers2: [],
      // esperando: false,
      cantidad: 0,
      store: useStoreAxios()
    }
  },
  methods: {
    onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.item = [];
        this.headers2 = [];
        this.headers = [];
        this.sheetData = [];
        const reader = new FileReader();
        reader.onload = (e) => {
          const data = new Uint8Array(e.target.result);
          const workbook = XLSX.read(data, { type: 'array' });
          const firstSheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[firstSheetName];
          this.sheetData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
          this.headers.push(this.sheetData[0]);
          this.sheetData.push(this.sheetData.slice(1)); // Remove the header row from data
          for (let index = 0; index < this.headers[0].length; index++) {
            const element = this.headers[0][index];
            this.headers2.push({ text: element, value: index.toString() })
          }
          this.headers2.push({ text: "OPCIONES", value: "opciones" });
          for (let index = 0; index < this.sheetData.length - 2; index++) {
            const element = this.sheetData.slice(1)[index];
            this.item.push(element)
          }
          this.preparar_Guardar(this.item)
        };
        // console.log(this.item)
        // this.preparar_Guardar(this.item)
        reader.readAsArrayBuffer(file);
      }

    },
    onFileChange2(event) {
      // console.log("entro")
      this.esperando = true;
      const file = event.target.files[0];
      // console.log(file)
      if (file) {
        // console.log("OKKK")
        const reader = new FileReader();
        reader.onload = (e) => {
          const data = new Uint8Array(e.target.result);
          const workbook = XLSX.read(data, { type: 'array' });
          this.sheetsData = [];
          console.log(workbook.SheetNames.length)
          this.cantidad = workbook.SheetNames.length;
          // console.log(this.cantidad)
          if (workbook.SheetNames.length > 1) {
            // Loop through each sheet in the workbook
            workbook.SheetNames.forEach((sheetName) => {
              const worksheet = workbook.Sheets[sheetName];
              const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
              const headers1 = jsonData[0]; // Assuming the first row contains headers
              const data = jsonData.slice(1); // Remove the header row from data

              this.sheetsData.push({
                name: sheetName,
                headers1: headers1,
                data: data,
              });
            });
            reader.readAsArrayBuffer(file);
            this.successFull("Datos cargados satisfactoriamente.")
          } else {
            if (file) {
              const reader = new FileReader();
              reader.onload = (e) => {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const firstSheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[firstSheetName];
                this.sheetData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
                this.headers = this.sheetData[0]; // Assuming the first row contains headers
                this.sheetData = this.sheetData.slice(1); // Remove the header row from data
                // console.log(this.sheetData[0][3]) De esta forma leo los valores del excel para poder guardarlos en la base de datos
              };
              reader.readAsArrayBuffer(file);
            }
          }
        }
        this.esperando = false;
      }

    },
    successFull: (mensaje, posicion) => {

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
    },
    ErrorFull: (mensaje, posicion) => {

      const toast = Swal.mixin({
        toast: true,
        position: posicion,
        showConfirmButton: false,
        timer: 2800,
        //timerProgressBar: true,
      })
      toast.fire({
        icon: "error",
        title: mensaje
      })
    },
    preparar_Guardar(listado) {
      this.store.NewlistadoAgregar.data = [];
      switch (listado[0][0]) {
        case "articulo":
          for (let index = 0; index < listado.length; index++) {
            const element = listado[index];
            // console.log(element)
            this.store.NewlistadoAgregar.data.push(
              {
                attributes: {
                  articulo: element[1],
                  descripcion: element[2],
                  observacion: element[3],
                  departamento_id: element[4],
                  medida_id: element[5],
                }
              }
            )
          }
          // console.log(this.store.NewlistadoAgregar);
          // const response = GuardarColecciones(this.store.NewlistadoAgregar, 5)
          // console.log(response)
          break;
        case "departamento":
          successFull("Departamento", "top-start")
          break;
        case "sucursal":
          successFull("Sucursal", "top-start")
          break;
        case "medida":
          successFull("Unidad de medida", "top-start")
          break;
        case "etiqueta":
          successFull("Etiqueta", "top-start")
          break;
        case "ubicacion":
          successFull("Ubicacion", "top-start")
          break;
        case "producto":
          successFull("Producto", "top-start")
          break;
        case "magnitud":
          successFull("Magnitud", "top-start")
          break;
        default:
          break;
      }
    },
    async almacenarDatos() {
      // console.log(this.store.NewlistadoAgregar);
      const response = await GuardarColecciones(this.store.NewlistadoAgregar, 5)
      console.log(response)
    }
  },
  loading: (texto) => {
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
};
</script>
<!-- <script setup>
import { ref, reactive, onMounted, watch, computed } from 'vue';
import Swal from 'sweetalert2';
import axios, { spread } from 'axios';
import AddProducto from './modal/AddProducto.vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

// import "@mescius/spread-sheets/styles/gc.spread.sheets.excel2016colorful.css";
// import * as GC from "@mescius/spread-sheets";
// import "@mescius/spread-sheets-io";
// import { saveAs } from "file-saver";

const emit = defineEmits(['consultar'])

function Consultar_Productos() {
  emit('consultar', 1);
}

function ExportExcel() {
  emit('consultar', 2);
}

function ImprimirDoc() {
  emit('consultar', 3);
}

// funciones de excel
import GC from "@mescius/spread-sheets";
import "@mescius/spread-sheets-vue";
import Excel from "@mescius/spread-excelio";

const sheetName = 'Sales Data';
const hostClass = 'spreadsheet';
const autoGenerateColumns = true;
const width = 200;
const visible = true;
const resizable = true;
const priceFormatter = "$ #.00";

// function workbookInit(_spread_) {
//   _spread = spread;
//   var self = _spread_;
//   spread.bind(GC.Spread.Sheets.Events.ValueChanged, function () {
//     const store = self.$store;
//     var sheet = self._spread.getSheetFromName("Sales Data");
//     var newSalesData = sheet.getDataSource();
//     store.commit('UPDATE_RECENT_SALES', newSalesData);
//   });
// }


// const initSpread = (spread) => {
//   spread = spread;
//   let sheet = spread.getActiveSheet();
//   sheet.revenueCount = 8;
//   sheet.newRowIndex = 11;
// }

const changeFileDemo = (e) => {
  spread.importExcelFile = e.target.files[0];
}

const changeExportFileName = (e) => {
  spread.exportFileName = e.target.value;
}

const loadExcel = (spread) => {
  // Load an existing Excel file into the Vue spreadsheet app
  // let spread = spread;
  let excelFile = spread.importExcelFile;
  let options = {
    fileType: GC.Spread.Sheets.FileType.excel,
  };
  // Import an existing Excel file to Vue spreadsheet
  spread.import(
    excelFile,
    () => {
      console.log("Import successful");
    },
    (e) => {
      console.error("Error during import:", e);
    },
    options
  );
}
const modifyExcel = () => {
  // Modify the import Excel file within the Vue instance
}
const saveExcel = () => {
  // Save Vue spreadsheet to local Excel XLSX file
}
// Fin excel

const date = ref();

const date2 = ref();

const itemsSelected = ref([]);

const popup = ref(false);

const abrirModalAddProd = () => {
  popup.value = !popup.value;
  // console.log(x);
  if (popup.value == false) {
    // console.log('Actualiza');
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

const obtenerListadoLimpio = () => {
  let i = 0;
  items.value = [];
  // cargar datos en tabla-vue
  for (let index = 0; index < listado.value.length; index++) {
    items.value.push(listado.value[index])
  }

}

const almacenDatosProductos = (Lista) => {
  // if (localStorage.getItem('ListadoCache')) {
  localStorage.removeItem('ListadoCache');
  //   }else{
  const parsed = JSON.stringify(Lista);
  localStorage.setItem('ListadoCache', parsed);
  // console.log(JSON.parse(localStorage.getItem('ListadoCache')));
  // dataCache.value = JSON.parse(localStorage.getItem('ListadoCache'));
  // }
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
          cerrarAlert();
          consultar();
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

watch(listado.value, (newX) => {
  console.log(`El nuevo listado es ${newX}`)
})

onMounted(() => {
  if (localStorage.getItem('userName')) {
    listado.value = JSON.parse(localStorage.getItem('ListadoCache'));
    obtenerListadoLimpio();
    // console.log(itemsSelected.value);
    // listadoSucursales.value = JSON.parse(localStorage.getItem('ListadoCacheSucursal'));
    // listadoSucursales = obtenerListadoLimpioSucursales();
    cargado.value = true;
  } else {
    router.push('/login');
  }
  // consultar();
})


</script> -->
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

.spreadsheet {
  width: 100%;
  height: 400px;
  border: 1px solid lightgray;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}
</style>
