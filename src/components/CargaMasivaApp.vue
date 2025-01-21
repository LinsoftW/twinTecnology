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
                <button v-if="cargado"
                  class="form-control form-control-user d-sm-inline-block btn btn-sm btn-primary shadow-sm m-2"
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

      <!-- <div class="col-xl-12 col-lg-12" v-if="editaItem">
        <div class="card shadow mb-4">
          <div class="card-body ">
            <div class="row align-items-center justify-content-between ">

              <div class="col-xl-12 col-lg-6 col-md-6">
                <div class="row form-control-user text-center">

                  <div v-for="(ite, index) in itemEditar" class="input-container">

                    <input type="text" :value="ite" :key="index" class="form-control form-control-user">
                  </div>
                  <button v-if="editaItem" class="d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                    @click="guardaCambio()">Modificar</button>

                </div>
              </div>

            </div>
          </div>
        </div>

      </div> -->

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
                  <div class="row form-control-user text-center" v-if="editaItem">
                    <div class="col-md-1"></div>
                    <div v-for="(ite, index) in itemEditar" class="col-md-2 m-1">
                      <!-- <label :for="itemEditar">{{ ite }}</label><hr> -->
                      <input type="text" :value="ite" :key="index" class="form-control form-control-user">
                    </div>
                    <div class="text-center row">
                      <button v-if="editaItem" class="d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                        @click="guardaCambio()">Modificar</button>
                    </div>
                    <!-- </div> -->
                  </div><br>
                  <EasyDataTable :headers="headers2" :items="item" buttons-pagination border-cell
                    v-model:items-selected="itemsSelected" header-text-direction="center" body-text-direction="center"
                    @click-row="showRow" :rows-per-page="5">
                    <template #item-image="item">
                      <img src="/inventario.jpg" alt="No image" class="img img-thumbnail"
                        style="width: 50px; height: 50px;" />
                    </template>
                    <template #item-opciones="item">
                      <button class="btn btn-primary btn-sm btn-circle ml-1" data-toggle="modal"
                        data-target="#agregaProducto" @click="editar(item)" v-b-tooltip.hover title="Modificar"><span
                          class="fas fa-edit"></span></button>
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
                  <!-- <input v-if="editaItem" type="text" v-model="item" placeholder="Escriba el nuevo valor"> -->
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
      listados: [],
      cargado: false,
      editaItem: false,
      itemEditar: [],
      // esperando: false,
      cantidad: 0,
      store: useStoreAxios()
    }
  },
  methods: {
    editar(item) {
      this.editaItem = true;
      this.itemEditar = []
      // console.log(this.getObjectSize(item));
      for (let index = 1; index < this.getObjectSize(item) - 1; index++) {
        // console.log(item[index])
        this.itemEditar.push(item[index])
      }
    },
    guardaCambio() {
      this.editaItem = false;
    },
    getObjectSize(obj) { return Object.keys(obj).length; },
    onFileChange(event) {
      const file = event.target.files[0];
      this.editaItem = false;
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
          this.cargado = true;
          this.listados = this.item;
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
          // console.log(workbook.SheetNames.length)
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
          // this.almacenarDatos(5)
          break;
        case "departamento":
          for (let index = 0; index < listado.length; index++) {
            const element = listado[index];
            // console.log(element)
            this.store.NewlistadoAgregar.data.push(
              {
                attributes: {
                  departamento: element[1],
                  descripcion: element[2],
                  observacion: element[3],
                }
              }
            )
          }
          // this.almacenarDatos(6)
          break;
        case "sucursal":
          for (let index = 0; index < listado.length; index++) {
            const element = listado[index];
            // console.log(element)
            this.store.NewlistadoAgregar.data.push(
              {
                attributes: {
                  sucursal: element[1],
                  abreviatura: element[2],
                  descripcion: element[3],
                  observacion: element[4],
                }
              }
            )
          }
          // this.almacenarDatos(2)
          break;
        case "medida":
          for (let index = 0; index < listado.length; index++) {
            const element = listado[index];
            // console.log(element)
            this.store.NewlistadoAgregar.data.push(
              {
                attributes: {
                  medida: element[1],
                  descripcion: element[2],
                  observacion: element[3],
                  magnitud_id: element[4],
                }
              }
            )
          }
          // this.almacenarDatos(3)
          break;
        case "etiqueta":
          for (let index = 0; index < listado.length; index++) {
            const element = listado[index];
            // console.log(element)
            this.store.NewlistadoAgregar.data.push(
              {
                attributes: {
                  etiqueta: element[1],
                  descripcion: element[2],
                  observacion: element[3],
                }
              }
            )
          }
          // this.almacenarDatos(8)
          break;
        case "ubicacion":
          for (let index = 0; index < listado.length; index++) {
            const element = listado[index];
            // console.log(element)
            this.store.NewlistadoAgregar.data.push(
              {
                attributes: {
                  ubicacion: element[1],
                  descripcion: element[2],
                  observacion: element[3],
                  sucursal_id: element[4],
                }
              }
            )
          }
          // this.almacenarDatos(7)
          break;
        case "producto":
          for (let index = 0; index < listado.length; index++) {
            const element = listado[index];
            // console.log(element)
            this.store.NewlistadoAgregar.data.push(
              {
                attributes: {
                  descripcion: element[1],
                  observacion: element[2],
                  articulo_id: element[3],
                  minimo: element[4],
                }
              }
            )
          }
          // this.almacenarDatos(1)
          break;
        case "magnitud":
          for (let index = 0; index < listado.length; index++) {
            const element = listado[index];
            // console.log(element)
            this.store.NewlistadoAgregar.data.push(
              {
                attributes: {
                  magnitud: element[1],
                  descripcion: element[2],
                  observacion: element[3],
                }
              }
            )
          }
          // this.almacenarDatos(4)
          break;
        default:
          break;
      }
    },
    async almacenarDatos(n) {
      // console.log(this.listados[0][0])
      if (this.cargado == true) {
        switch (this.listados[0][0]) {
          case 'articulo':
            // this.almacenarDatos(5)
            const response1 = await GuardarColecciones(this.store.NewlistadoAgregar, 5)
            if (response1 != null) {
              successFull("Registros agregados satisfactoriamente.", "top-end")
            } else {
              this.ErrorFull("Hubo un error agregando los datos. Verifíquelos y vuelva a intentarlo.", "top-start")
            }
            break;
          case 'magnitud':
            // this.almacenarDatos(4)
            const response2 = await GuardarColecciones(this.store.NewlistadoAgregar, 4)
            if (response2 != null) {
              successFull("Registros agregados satisfactoriamente.", "top-end")
            } else {
              this.ErrorFull("Hubo un error agregando los datos. Verifíquelos y vuelva a intentarlo.", "top-start")
            }
            break;
          case 'producto':
            // this.almacenarDatos(1)
            const response3 = await GuardarColecciones(this.store.NewlistadoAgregar, 1)
            if (response3 != null) {
              successFull("Registros agregados satisfactoriamente.", "top-end")
            } else {
              this.ErrorFull("Hubo un error agregando los datos. Verifíquelos y vuelva a intentarlo.", "top-start")
            }
            break;
          case 'ubicacion':
            // this.almacenarDatos(7)
            const response4 = await GuardarColecciones(this.store.NewlistadoAgregar, 7)
            if (response4 != null) {
              successFull("Registros agregados satisfactoriamente.", "top-end")
            } else {
              this.ErrorFull("Hubo un error agregando los datos. Verifíquelos y vuelva a intentarlo.", "top-start")
            }
            break;
          case 'etiqueta':
            // this.almacenarDatos(8)
            const response5 = await GuardarColecciones(this.store.NewlistadoAgregar, 8)
            if (response5 != null) {
              successFull("Registros agregados satisfactoriamente.", "top-end")
            } else {
              this.ErrorFull("Hubo un error agregando los datos. Verifíquelos y vuelva a intentarlo.", "top-start")
            }
            break;
          case 'medida':
            // this.almacenarDatos(3)
            const response6 = await GuardarColecciones(this.store.NewlistadoAgregar, 3)
            if (response6 != null) {
              successFull("Registros agregados satisfactoriamente.", "top-end")
            } else {
              this.ErrorFull("Hubo un error agregando los datos. Verifíquelos y vuelva a intentarlo.", "top-start")
            }
            break;
          case 'sucursal':
            // this.almacenarDatos(2)
            const response7 = await GuardarColecciones(this.store.NewlistadoAgregar, 2)
            if (response7 != null) {
              successFull("Registros agregados satisfactoriamente.", "top-end")
            } else {
              this.ErrorFull("Hubo un error agregando los datos. Verifíquelos y vuelva a intentarlo.", "top-start")
            }
            break;
          case 'departamento':
            // this.almacenarDatos(6)
            const response8 = await GuardarColecciones(this.store.NewlistadoAgregar, 6)
            if (response8 != null) {
              successFull("Registros agregados satisfactoriamente.", "top-end")
            } else {
              this.ErrorFull("Hubo un error agregando los datos. Verifíquelos y vuelva a intentarlo.", "top-start")
            }
            break;
          default:
            break;
        }

      } else {

      }

      // console.log(response)
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
  },

};
</script>

<style scoped>
.input-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.input-container input {
  flex: 1;
  margin-right: 10px;
}

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
