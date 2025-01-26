<template>
  <div class="container-fluid">
    <!-- <div>
        <div id="interactive" class="viewport"></div>
        <button @click="startScanner">Iniciar Escaneo</button>
        <p v-if="barcode">Código de barras detectado: {{ barcode }}</p>
      </div> -->
    <!-- <ImageBarcodeReader @decode="onDecode" @error="onError" /> -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-2 text-gray-800">AUDITORÍA</h1>
      <!-- <img src="/cargando2.gif" style="width: 40px; height:40px" v-if="esperando" > -->
      <div class="row">
        <div class="col-md-12 justify-content-between">
          <!-- <router-link class="button" to="/gest_inventario"> -->
          <!-- <a @click="abrirModalAddProd()" href="#" class="d-none d-sm-inline-block btn btn-sm btn-info shadow-sm"
              v-b-tooltip.hover title="Generar resumen diario"><i class="fas fa-plus fa-sm "></i> Agregar productos </a> -->
          <!-- </router-link> -->
          <!-- <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" v-b-tooltip.hover
              title="Generar resumen diario"><i class="fas fa-download fa-sm "></i> Excel</a> -->
          <!-- <a @click="CargaMasiva()" href="#" class="d-sm-inline-block btn btn-sm btn-danger shadow-sm m-2"
              v-b-tooltip.hover title="Agregar productos según archivo"><i class="fas fa-upload fa-sm "></i> Carga
              masiva</a> -->
          <!-- <a @click="ImprimirDoc()" href="#" class="d-sm-inline-block btn btn-sm btn-secondary shadow-sm"
              v-b-tooltip.hover title="Imprimir"><i class="fas fa-print fa-sm "></i> Imprimir</a> -->
          <!-- <a @click="escanea = true" href="#" class="d-sm-inline-block btn btn-sm btn-primary shadow-sm m-2"
              v-b-tooltip.hover data-toggle="modal" data-target="#escanearCode" title="Escanear código de barras"><i
                class="fa fa-barcode fa-sm "></i> Escanear</a> -->
        </div>
      </div>

      <!-- <router-link class="button" to="/gest_inventario">
          <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-info shadow-sm" v-b-tooltip.hover
            title="Generar resumen diario"><i class="fas fa-plus fa-sm "></i> Agregar productos</a>
        </router-link> -->
    </div>
    <!-- Nuevo Listado productos -->
    <div class="col-xl-12 col-lg-12">
      <div class="card shadow mb-4">
        <a href="#collapseCardExample" class="d-block card-header py-3" data-toggle="collapse" role="button"
          aria-expanded="true" aria-controls="collapseCardExample">
          <h6 class="m-0 font-weight-bold text-info"><i class="fa fa-list-ul"></i> OPERACIONES REALIZADAS</h6>
        </a>
        <!-- <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 class="m-0 font-weight-bold text-info"><i class="fas fa-edit"></i> DEPARTAMENTOS</h6>
              <button class="btn btn-info" @click="abrirModalAddProd()"> <span class="fa fa-plus"></span> Nuevo</button>
            </div> -->
        <!-- Card Body -->
        <div class="collapse show" id="collapseCardExample">
          <div class="card-body">
            <div class="row">
              <div class="col-md-6 col-xl-6 col-lg-6">
                <!-- <div class="row"> -->
                <div class="justify-content-between">
                  <!-- <router-link class="button" to="/gest_inventario"> -->
                  <!-- <a data-toggle="modal" @click="agrega()" data-target="#agregaProducto"
                      class="btn btn-info btn-sm btn-icon-split" :class="disabledProductos">
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
                    <a @click="ExportExcel()" class="btn btn-secondary btn-sm btn-icon-split"
                      :class="disabledProductos">
                      <span class="icon text-white-50">
                        <i class="fas fa-download"></i>
                      </span>
                      <span class="text">Excel</span>
                    </a>
                    <button class="btn btn-primary btn-sm dropdown-toggle m-2" type="button" id="dropdownMenuButton"
                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span class="icon text-white-50">
                        <i class="fas fa-plus"></i>
                      </span>
                      <span class="text"> Agregar</span>
                    </button>
                    <div class="dropdown-menu animated--fade-in" aria-labelledby="dropdownMenuButton">
                      <router-link class="button" to="/categorias">
                        <a class="dropdown-item" href="#"><span class="fa fa-list-alt"></span> Clasificaciones</a>
                      </router-link>
                      <router-link class="button" to="/gest_nomencladores">
                        <a class="dropdown-item" href="#"><span class="fas fa-ruler-horizontal"></span> Magnitudes</a>
                      </router-link>
                      <router-link class="button" to="/ubicaciones">
                        <a class="dropdown-item" href="#"><span class="fa fa-map-marker-alt"></span> Ubicaciones</a>
                      </router-link>

                    </div>
                    <a @click="EliminarSelecc()" class="btn btn-danger btn-sm btn-icon-split"
                      :class="disabledProductos">
                      <span class="icon text-white">
                        <i class="fas fa-trash"></i>
                      </span>
                      <span class="text text-white">Eliminar seleccionados</span>
                    </a> -->
                  <!-- <a @click="abrirModalAddProd()" href="#" class="d-sm-inline-block btn btn-sm btn-info shadow-sm"
                    v-b-tooltip.hover title="Agregar producto"><i class="fas fa-plus fa-sm "></i> Agregar productos </a> -->
                  <!-- <a @click="EliminarSelecc()" href="#" class="d-sm-inline-block btn btn-sm btn-danger shadow-sm m-2"
                      v-b-tooltip.hover title="Eliminar seleccionados"><i class="fas fa-trash fa-sm "></i> Eliminar
                      seleccionados </a> -->
                  <!-- </router-link> -->
                  <!-- <a @click="ExportExcel()" href="#" class="d-sm-inline-block btn btn-sm btn-primary shadow-sm m-2"
                    v-b-tooltip.hover title="Exportar a Excel"><i class="fas fa-download fa-sm "></i> Excel</a> -->
                </div>
                <!-- </div> -->
              </div>
              <!-- <div class="col-md-3 col-xl-3 col-lg-3">
                <span class="text-info">Filtrar por columna: </span>
                <select v-model="searchField" @change="cuandoCambie()" class="form-control form-control-user">
                  <option>Tipo</option>
                  <option>Código</option>
                </select>
              </div> -->
              <div class="col-md-6 col-xl-6 col-lg-12">
                <span class="text-info">Buscar: </span>
                <input class="form-control form-control-user" type="text" v-model="searchValue"
                  placeholder="Qué desea buscar" />
              </div>
            </div>
            <br>

            <EasyDataTable :headers="headers" :items="itemsAuditorias1" buttons-pagination border-cell
               header-text-direction="center" body-text-direction="center"
              :search-field="searchField" :search-value="searchValue" @click-row="showRow" :rows-per-page="5"
              :loading="Store.esperandoAuditoria">
              <!-- <template #item-image="item">
                  <a data-toggle="modal" data-target="#verImagen"
                    @click="obtenDescripcion(item.attributes.descripcion)">

                    <img :src="obtenImagen(item.id)" alt="No image" class="img img-thumbnail"
                      style="width: 50px; height: 50px;" />
                  </a>

                </template> -->
              <!-- <template #item-rows>
                <a>Filas por paginas</a>
              </template> -->
              <!-- <template #item-opciones="item">
                <div class="operation-wrapper">
                  <button class="btn btn-warning btn-sm btn-circle ml-1" @click="Detalles(item)" v-b-tooltip.hover
                    title="Detalles"><span class="fa fa-eye"></span></button>
                </div>
              </template> -->
              <!-- <template #item-codigo="item">
                  {{ item.relationships.departamento.data.id }}{{ item.relationships.articulo.data.id }}{{ item.id }}
                </template>
                <template #item-departamento="item">
                  {{ obtenDepartamento(item.relationships.departamento.data.id) }}
                </template> -->
              <template #item-operacion="item">
                <!-- {{ item.meta.foreign_keys_instances.operacion_id }} -->
                {{ obtenOperacion(item.meta.foreign_keys_instances.operacion_id) }}
              </template>
              <template #item-lote="item">
                <!-- {{ item.meta.foreign_keys_instances.lot_id }} -->
                {{ obtenLote(item.meta.foreign_keys_instances.lot_id) }}
              </template>
              <template #loading>
                <img src="/cargando4.gif" style="width: 100px; height: 80px;" />
              </template>
              <template #empty-message>
                <a>No hay datos que mostrar</a>
              </template>

            </EasyDataTable>

          </div>
        </div>
      </div>
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
    <!-- Nuevo Listado productos -->

  </div>

  <!-- <template v-if="esperando">
    <div v-on="loadingA('Actualizando datos...')">

    </div>
  </template> -->

  <!-- <div :class="showModBack" @click="abrirModal()"></div> -->
  <!-- <div :class="showModBack2" @click="cerrarModal()"></div> -->
</template>
<script setup>
import { ref, reactive, onMounted, watchEffect } from 'vue';
import Swal from 'sweetalert2';
// import AddProducto from './modal/AddProducto.vue';
// import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import * as XLSX from 'xlsx';
import Quagga from 'quagga';
import { useStoreAxios } from '@/store/AxiosStore';
import { ErrorFull, successFull } from './controler/ControlerApp';
// import { EditarDatos, EliminarDatos, GuardarDatos, GuardarMinimos, obtenerDatos } from './helper/useAxios';
import { data } from 'jquery';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { obtenerDatos } from './helper/useAxios';
const Store = useStoreAxios()

const searchField = ref(["id", "attributes.justificacion", "attributes.observacion", "attributes.cantidad"]);

const searchValue = ref("");

const itemsOperaciones1 = ref([]);

const itemsLotes1 = ref([])

const obtenOperacion = (id) => {
    for (let index = 0; index < itemsOperaciones1.value.length; index++) {
        if ((id == itemsOperaciones1.value[index].id)) {
          return itemsOperaciones1.value[index].attributes.operacion
        }
    }
  }

const obtenLote = (id) => {
    for (let index = 0; index < itemsLotes1.value.length; index++) {
        if ((id == itemsLotes1.value[index].id)) {
          return itemsLotes1.value[index].attributes.descripcion
        }
    }
  }

const generar_pdf = async () => {

  let nuevoArreglo = ref([]);

  for (let index = 0; index < itemsProductos1.value.length; index++) {
    nuevoArreglo.value.push({
      id: itemsProductos1.value[index].id,
      descripcion: itemsProductos1.value[index].attributes.descripcion,
      codigo: itemsProductos1.value[index].relationships.departamento.data.id.toString() + itemsProductos1.value[index].relationships.articulo.data.id.toString() + itemsProductos1.value[index].id.toString(),
      observacion: itemsProductos1.value[index].attributes.observacion,
      medida: obtenMedida(itemsProductos1.value[index].relationships.medida.data.id),
      cantidad: itemsProductos1.value[index].attributes.cantidad
    })
  }

  const doc = new jsPDF('p', 'pt');

  let columnas = [
    { title: "No", dataKey: "id" },
    { title: "Código", dataKey: "codigo" },
    { title: "En Stock", dataKey: "cantidad" },
    { title: "U. Medida", dataKey: "medida" },
    { title: "Descripción", dataKey: "descripcion" },
    { title: "Observación", dataKey: "observacion" }
  ]

  doc.autoTable({ columns: columnas, body: nuevoArreglo.value })
  // const doc = new jsPDF({
  //   orientation: "landscape",
  //   unit: "in",
  //   format: [10, 10]
  // });

  doc.text("Listado de productos", 220, 25);
  doc.save("Productos.pdf");

  // cerrarAlert();


}

const itemsProductos1 = ref([])

const itemsAuditorias1 = ref([])

const attachListeners = () => {
  Quagga.onDetected((data) => {
    barcode.value = data.codeResult.code; // Aquí obtienes el código de barras detectado
    console.log("Código de barras detectado:", barcode.value);
    Quagga.stop(); // Detener el escaneo si quieres solo un código
  });
}

const startScanner = () => {
  Quagga.init({
    locate: false,
    numOfWorkers: navigator.hardwareConcurrency || 2,
    inputStream: {
      name: "Live",
      type: "LiveStream",
      target: document.querySelector('#interactive'),
      constraints: {
        width: 600,
        height: 600,
        facingMode: "environment"
      }, // El elemento donde se mostrará el video
      area: {
        // update area if its small mobile
        top: "20%",
        right: "15%",
        left: "15%",
        bottom: "20%"
      }
    },
    decoder: {
      readers: [
        "code_128_reader",
        "ean_reader",
        "ean_8_reader",
        "code_39_reader",
        "code_39_vin_reader",
        "codabar_reader",
        "upc_reader",
        "upc_e_reader",
        "i2of5_reader"
      ], // Puedes agregar otros lectores según tus necesidades
    },
  }, function (err) {
    if (err) {
      console.error(err);
      return;
    }
    Quagga.start();
    // Quagga.onProcessed(function (result) {
    //   var drawingCtx = Quagga.canvas.ctx.overlay,
    //     drawingCanvas = Quagga.canvas.dom.overlay;

    //   if (result) {
    //     if (result.boxes) {
    //       drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
    //       result.boxes.filter(function (box) {
    //         return box !== result.box;
    //       }).forEach(function (box) {
    //         Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, { color: "green", lineWidth: 2 });
    //       });
    //     }

    //     if (result.box) {
    //       Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, { color: "#00F", lineWidth: 2 });
    //     }

    //     if (result.codeResult && result.codeResult.code) {
    //       Quagga.ImageDebug.drawPath(result.line, { x: 'x', y: 'y' }, drawingCtx, { color: 'red', lineWidth: 3 });
    //     }
    //   }
    // }),
    // attachListeners();
    Quagga.onDetected((data) => {
      barcode.value = data.codeResult.code; // Aquí obtienes el código de barras detectado
      // console.log("Código de barras detectado:", barcode.value);
      Quagga.stop(); // Detener el escaneo si quieres solo un código
    });
  });
}

const beforeDestroy = () => {
  Quagga.stop();
}

const showRow = () => {
  // if (itemsSelected.value.length > 1) {
  //   console.log("Selecciono " + itemsSelected.value.length)
  //   console.log(itemsSelected.value)
  // }

}

const headers = [
  { text: "NO", value: "id", width: 50, sortable: true },
  // { text: "IMAGEN", value: "image" },
  { text: "JUSTIFICACIÓN", value: "attributes.justificacion", width: 250 },
  { text: "CANTIDAD", value: "attributes.cantidad", width: 50, sortable: true },
  { text: "LOTE", value: "lote" },
  { text: "OPERACIÓN", value: "operacion" },
  { text: "OBSERVACIÓN", value: "attributes.observacion", width: 250 },
  { text: "FECHA CREACIÓN", value: "attributes.timestamps.created_at" },
  // { text: "U_MEDIDA", value: "unidad" },
  // { text: "STOCK", value: "attributes.cantidad", sortable: true },
  // { text: "VENTAS", value: "cantV", sortable: true },
  // { text: "OPCIONES", value: "opciones" }
];

onMounted(async () => {

  if (localStorage.getItem('userName')) {
    // ipPublica.value = localStorage.getItem('Host_back');
    if (localStorage.getItem('Carg_datAu') == '0') {
      const response = await obtenerDatos(15);
      if (response.length > 0) {
        Store.setListadoAuditorias(response)
      }
      Store.cambiaEstado(10)
      localStorage.setItem("Carg_datAu", "1");
      itemsAuditorias1.value = Store.itemsAuditorias;
      Store.cambiaEstado(10)

    } else {
      Store.cambiaEstado(10)
      itemsAuditorias1.value = Store.itemsAuditorias;
      Store.cambiaEstado(10)
    }

    // cargando lotes
    if (localStorage.getItem("Carg_datL") == '0') {
      const response = await obtenerDatos(10);
      if (response.length > 0) {
        // Store.cambiaEstado(9)
        Store.setListadoLotes(response)
        localStorage.setItem("Carg_datL", "1");
        itemsLotes1.value = Store.itemsLotes;
        // Store.cambiaEstado(9)
      }
    } else {
      itemsLotes1.value = Store.itemsLotes;
    }

    const response2 = await obtenerDatos(16);
    if (response2.length > 0) {
      Store.setListadoOperaciones(response2)
      itemsOperaciones1.value = Store.itemsOperaciones;
    }
    // console.log(itemsProductos1.value)

  } else {
    router.push('/login');
  }
})


</script>
<style lang="scss" scoped>

div,h1 {
  @media (max-width: 1024px) {
    h1.h3.mb-2.text-gray-800 {
      font-size: small;
      font-weight: 600;
    }
  }
}

.viewport {
  width: 100%;
  height: 400px;
  background-color: black;

  position: relative;
  overflow: hidden;
  /*display: none;*/
  padding-bottom: 56.25%;
  line-height: 0;

  video {
    z-index: 10;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    right: 50%;
    top: 50%;
    bottom: 50%;
    background: black
  }

  canvas.drawingBuffer {
    z-index: 20;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: none;
  }

  br {
    display: none;
  }
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
</style>
