<template>
    <div class="container-fluid" v-if="!detalle">
      <!-- <div>
        <div id="interactive" class="viewport"></div>
        <button @click="startScanner">Iniciar Escaneo</button>
        <p v-if="barcode">Código de barras detectado: {{ barcode }}</p>
      </div> -->
      <!-- <ImageBarcodeReader @decode="onDecode" @error="onError" /> -->
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
import { EditarDatos, EliminarDatos, GuardarDatos, GuardarMinimos, obtenerDatos } from './helper/useAxios';
import { data } from 'jquery';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
// import { almacenDatosProductos, GuardarDatos, obtenerArticulos, obtenerProductos, obtenerUbicaciones } from './service/servicio';
// import { disabledProductos, esperandoProductos, formProductos, itemsProductos, listadoArticulos, listadoMedida, listadoProductos, listadoUbicaciones, loadingP } from './controler/ControlerApp';
const Store = useStoreAxios()

const detalle = ref(false)

const searchField = ref(["id", "attributes.descripcion", "attributes.observacion", "attributes.cantidad"]);

const searchField1 = ref('')

const searchValue = ref("");

const critBusq = ref([], [], []);

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

const disabledProductos = ref('')

const prueba = () => {
  successFull("Okkk", "top-center")
}

const formCantidad = reactive({
  data: {
    attributes: {
      cantidad: 0,
    }
  }
})

const nombreProd = ref('');
const idProd = ref('');
const descProd = ref('');
const obsProd = ref('');
const ubicaProd = ref('');
const codProd = ref('');
const cantProd = ref(0);
const medidProd = ref('');
const artiProd = ref('');

const Atras = () => {
  detalle.value = false;
}

const Detalles = (dato) => {
  // console.log(dato)
  detalle.value = true;
  nombreProd.value = dato.attributes.descripcion;
  idProd.value = dato.id;
  codProd.value = dato.relationships.departamento.data.id.toString() + dato.relationships.articulo.data.id.toString() + dato.id.toString();
  obsProd.value = dato.attributes.observacion;
  medidProd.value = obtenMedida(dato.relationships.medida.data.id)
  artiProd.value = obtenarticulo(dato.relationships.articulo.data.id)
  descProd.value = dato.attributes.descripcion;
  cantProd.value = dato.attributes.cantidad;
  ubicaProd.value = obtenUbicacion(dato.relationships.ubicacion.data.id)

}

const Aumentar = async (dato) => {
  const { value: formValues } = await Swal.fire({
    title: `Cantidad actual en Stock: ${dato.attributes.cantidad} `,
    html: `
    <label> Aumentar: Ej: 5 / Disminuir: Ej: -5 </label><input id="swal-input2" class="swal2-input" placeholder="Ej: 5 ó -5">
  `,
    focusConfirm: false,
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Modificar",
    cancelButtonText: "Cancelar",
    preConfirm: () => {
      return [
        document.getElementById("swal-input2").value
      ];
    }
  });
  if (formValues) {
    Store.cambiaEstado(1);
    formCantidad.data.attributes.cantidad = parseInt(dato.attributes.cantidad) + parseInt(formValues[0]);
    const response = await EditarDatos(dato.id, formCantidad, 1);
    Store.EditProductos(response)
    itemsProductos1.value = Store.itemsProductos;
    successFull("Cantidad modificada satisfactoriamente.", "top-end")
    Store.cambiaEstado(1);
  }
}

const barcode = ref();

let GuardarProducto = ref('Agregar');
let GuardarProductoC = ref('Agregar y Continuar');

let btnModificarM = ref('Modificar');

const disabledProductoBtn = ref('')

const itemsMedidas1 = ref([])

const itemsProductos1 = ref([])

const itemsArticulos1 = ref([])

const itemsUbicaciones1 = ref([])

const agrega = () => {
  editar.value = false
  errores.value.articulo_id = "";
  errores.value.ubicacion_id = "";
  errores.value.descripcion = "";
  errores.value.observacion = "";
  errores.value.cantidad = "";
  Store.formProductos.data.attributes.articulo_id = "";
  Store.formProductos.data.attributes.descripcion = "";
  Store.formProductos.data.attributes.ubicacion_id = "";
  Store.formProductos.data.attributes.observacion = "";
  Store.formProductos.data.attributes.cantidad = "";
}

let y = 0;

const obtenMedida = (id) => {
  const val = ref('')

  for (let index = 0; index < itemsMedidas1.value.length; index++) {
    if (id == itemsMedidas1.value[index].id) {
      // console.log(listadoMedida.value[index].id)
      return itemsMedidas1.value[index].attributes.medida
    }
  }

}

const obtenUbicacion = (id) => {
  const val = ref('')

  for (let index = 0; index < itemsUbicaciones1.value.length; index++) {
    if (id == itemsUbicaciones1.value[index].id) {
      // console.log(listadoMedida.value[index].id)
      return itemsUbicaciones1.value[index].attributes.ubicacion
    }
  }

}

const obtenarticulo = (id) => {
  const val = ref('')

  for (let index = 0; index < itemsArticulos1.value.length; index++) {
    if (id == itemsArticulos1.value[index].id) {
      // console.log(listadoMedida.value[index].id)
      return itemsArticulos1.value[index].attributes.articulo
    }
  }

}

const verificar_error = (n) => {
  switch (n) {
    case 1:
      if (Store.formProductos.data.attributes.descripcion != '') {
        errores.value.descripcion = "";
      } else {
        errores.value.descripcion = "Este campo es obligatorio"
      }
      break;
    case 2:
      if (Store.formProductos.data.attributes.observacion != '') {
        errores.value.observacion = "";
      } else {
        errores.value.observacion = "Este campo es obligatorio"
      }
      break;
    case 3:
      if (Store.formProductos.data.attributes.articulo_id != 0) {
        errores.value.articulo_id = "";
      } else {
        errores.value.articulo_id = "Este campo es obligatorio"
      }
      break;
    case 4:
      if (Store.formProductos.data.attributes.ubicacion_id != 0) {
        errores.value.ubicacion_id = "";
      } else {
        errores.value.ubicacion_id = "Este campo es obligatorio"
      }
      break;
    case 5:
      if (Store.formProductos.data.attributes.cantidad != 0) {
        errores.value.cantidad = "";
      } else {
        errores.value.cantidad = "Este campo es obligatorio"
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

const errores = ref({ descripcion: "", observacion: "", articulo_id: "", ubicacion_id: "", cantidad: "" })

const minimos = reactive({
  // id: 0,
  data: {
    attributes: {
      persona_id: 0,
      producto_id: 0,
      cantidad: 0,
    }
  }
})

const agregarUProducto = async (n) => {
  if (Store.formProductos.data.attributes.descripcion != '' && Store.formProductos.data.attributes.articulo_id != 0 && Store.formProductos.data.attributes.observacion != '' && Store.formProductos.data.attributes.ubicacion_id != "") {
    // editando.value = true;
    if (n == 1) {
      GuardarProductoC.value = 'Guardando...';
      disabledProductoBtn.value = 'disabled';
      Store.formProductos.id = Store.nextIDProducto + 1;
      // console.log(Store.formProductos);
      // Agregar_Productos();
      Store.cambiaEstado(1)
      const response = await GuardarDatos(Store.formProductos, 1);
      // console.log(response)
      if (response == null) {
        Store.cambiaEstado(1)
        disabledProductoBtn.value = '';
        GuardarProductoC.value = 'Agregar y continuar';
        errores.value.descripcion = "Este dato ya existe en el sistema";
        ErrorFull("Descripción de producto ya existente.", "top-start")
      } else {
        disabledProductoBtn.value = '';
        GuardarProductoC.value = 'Agregar y continuar'
        Store.formProductos.data.attributes.cantidad = '';
        Store.formProductos.data.attributes.descripcion = '';
        Store.formProductos.data.attributes.ubicacion_id = '';
        Store.formProductos.data.attributes.articulo_id = '';
        Store.formProductos.data.attributes.observacion = '';
        Store.AddProductos(response)
        itemsProductos1.value = Store.itemsProductos;
        minimos.data.attributes.persona_id = 1;
        minimos.data.attributes.producto_id = response.id;
        for (let index = 0; index < itemsProductos1.value.length; index++) {
          Store.nextIDProducto = itemsProductos1.value[index].id;
        }
        const response2 = await obtenerDatos(9)
        for (let index = 0; index < response2.length; index++) {
          Store.nextIDMinimos = response2[index].id;
        }
        // minimos.data.attributes.id = Store.nextIDMinimos + 1;
        GuardarMinimos(minimos);
        successFull("Producto agregado satisfactoriamente.", "top-end")
        GuardarProductoC.value = 'Agregar y continuar';
        disabledProductoBtn.value = '';
        Store.cambiaEstado(1)
      }
    } else {
      GuardarProducto.value = 'Guardando...';
      disabledProductoBtn.value = 'disabled';
      Store.formProductos.id = Store.nextIDProducto + 1;
      // console.log(Store.formProductos);
      // Agregar_Productos();
      Store.cambiaEstado(1)
      const response = await GuardarDatos(Store.formProductos, 1);
      // console.log(response)
      if (response == null) {
        Store.cambiaEstado(1)
        disabledProductoBtn.value = '';
        GuardarProducto.value = 'Agregar';
        errores.value.descripcion = "Este dato ya existe en el sistema";
        ErrorFull("Descripción de producto ya existente.", "top-start")
      } else {
        disabledProductoBtn.value = '';
        GuardarProducto.value = 'Agregar'
        Store.formProductos.data.attributes.cantidad = '';
        Store.formProductos.data.attributes.descripcion = '';
        Store.formProductos.data.attributes.ubicacion_id = '';
        Store.formProductos.data.attributes.articulo_id = '';
        Store.formProductos.data.attributes.observacion = '';
        Store.AddProductos(response)
        itemsProductos1.value = Store.itemsProductos;
        minimos.data.attributes.persona_id = 1;
        minimos.data.attributes.producto_id = response.id;
        for (let index = 0; index < itemsProductos1.value.length; index++) {
          Store.nextIDProducto = itemsProductos1.value[index].id;
        }
        const response2 = await obtenerDatos(9)
        for (let index = 0; index < response2.length; index++) {
          Store.nextIDMinimos = response2[index].id;
        }
        // minimos.data.attributes.id = Store.nextIDMinimos + 1;
        GuardarMinimos(minimos);
        successFull("Producto agregado satisfactoriamente.", "top-end")
        GuardarProducto.value = 'Agregar';
        disabledProductoBtn.value = '';
        Store.cambiaEstado(1)
      }
    }
    // editando.value = false;

  } else {
    // editando.value = false;
    if (Store.formProductos.data.attributes.descripcion == '') {
      errores.value.descripcion = "Este campo es obligatorio";
    } else {
      errores.value.descripcion = "";
    }

    if (Store.formProductos.data.attributes.observacion == '') {
      errores.value.observacion = "Este campo es obligatorio";
    } else {
      errores.value.observacion = "";
    }
    if (Store.formProductos.data.attributes.articulo_id == '') {
      errores.value.articulo_id = 'Este campo es obligatorio';
    } else {
      errores.value.articulo_id = "";
    }
    if (Store.formProductos.data.attributes.ubicacion_id == '') {
      errores.value.ubicacion_id = 'Este campo es obligatorio';
    } else {
      errores.value.ubicacion_id = "";
    }
    if (Store.formProductos.data.attributes.cantidad == '') {
      errores.value.cantidad = 'Este campo es obligatorio';
    } else {
      errores.value.cantidad = "";
    }
    GuardarProducto.value = 'Agregar';
    disabledProductoBtn.value = ''
    // Store.cambiaEstado(1)
    ErrorFull("Debe llenar todos los campos obligatorios", "top-start")
  }

}

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
// import { StreamBarcodeReader, ImageBarcodeReader } from '@teckel/vue-barcode-reader';
// import DataTable from 'datatables.net-vue3';
// import DataTablesCore from 'datatables.net-dt';
// import DataTableLib from 'datatables.net-bs5';
// import ButtonsHtml5 from 'datatables.net-buttons/js/buttons.html5';
// import Buttons from 'datatables.net-buttons-bs5';
// import print from 'datatables.net-buttons/js/buttons.print';
// import pdfmake from 'pdfmake';
// import pdfFonts from 'pdfmake/build/vfs_fonts';
// import 'datatables.net-responsive-bs5'
// import JsZip from 'JsZip'

// DataTable.use(DataTableLib);
// DataTable.use(pdfmake);
// DataTable.use(ButtonsHtml5);

const image1 = ref('')

const selecImagenO = () => {
  let imagen = document.getElementById('avatar1');
  //Recuperamos el archivo subido
  let file = imagen.files[0];
  //Creamos la url
  let objectURL = URL.createObjectURL(file);
  image1.value = objectURL
  // console.log(image.value)
}

const escanea = ref(false);

const decodedText = ref('')

const onDecode = (result) => {
  decodedText.value = result
}

const onLoaded = () => {
  console.log('loaded')
}

const emit = defineEmits(['consultar'])

// const props = defineProps(['key'])

function Agregar_Productos() {
  return emit('consultar', 1);
}

const nuevoArreglo = ref([]);
const elementos = ref([]);

function ExportExcel() {
  // emit('consultar', 2);
  // console.log(items.value)
  elementos.value = []
  nuevoArreglo.value = []
  for (let index = 0; index < itemsProductos1.value.length; index++) {
    elementos.value.TIPO = itemsProductos1.value[index].type;
    elementos.value.CANTIDAD = itemsProductos1.value[index].attributes.cantidad;
    elementos.value.DESCRIPCIÓN = itemsProductos1.value[index].attributes.descripcion;
    elementos.value.OBSERVACIÓN = itemsProductos1.value[index].attributes.observacion;
    elementos.value.U_MEDIDA = obtenMedida(itemsProductos1.value[index].relationships.medida.data.id)
    elementos.value.CÓDIGO = itemsProductos1.value[index].relationships.departamento.data.id.toString() + itemsProductos1.value[index].relationships.articulo.data.id.toString() + itemsProductos1.value[index].id.toString()
    nuevoArreglo.value.push(elementos.value)
    elementos.value = []
  }
  // console.log(nuevoArreglo)
  const worksheet = XLSX.utils.json_to_sheet(nuevoArreglo.value);
  // console.log(worksheet)
  const workbook = XLSX.utils.book_new();
  // // Abriendo el excel
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  // // Generar el archivo
  const fileName = 'Productos.xlsx';
  // // Guardar el archivo execl
  XLSX.writeFile(workbook, fileName);
  successFull("Documento creado satisfactoriamente.", "top-end")
}

function ImprimirDoc() {
  emit('consultar', 3);
}

function CargaMasiva() {
  emit('consultar', 4);
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
    if (localStorage.getItem('Carg_dat') != '0') {
      // localStorage.setItem('Carg_dat', '0');
      emit('consultar', 1);
      listado.value = JSON.parse(localStorage.getItem('ListadoCache'));
      obtenerListadoLimpio();
    }

  }

}

const deactiva = ref('')

const editarU = async () => {
  Store.cambiaEstado(1);
  btnModificarM.value = 'Actualizando...'
  deactiva.value = 'disabled';
  const response = await EditarDatos(Store.id, Store.formProductos, 1);
  // console.log(Store.id)
  editar.value = false;
  Store.formProductos.data.attributes.descripcion = ''
  Store.formProductos.data.attributes.ubicacion_id = ''
  Store.formProductos.data.attributes.observacion = '';
  Store.formProductos.data.attributes.articulo_id = ''
  Store.formProductos.data.attributes.cantidad = '';
  Store.EditProductos(response)
  // console.log(minimos)
  const response2 = await EditarDatos(minimos.data.attributes.producto_id, minimos, 9);
  console.log(response2)
  itemsProductos1.value = Store.itemsProductos;
  btnModificarM.value = 'Modificar'
  deactiva.value = '';
  if (detalle.value == true) {
    detalle.value = false;
  }
  successFull("Producto modificado satisfactoriamente.", "top-end")
  Store.cambiaEstado(1);
}

const showRow = () => {
  // if (itemsSelected.value.length > 1) {
  //   console.log("Selecciono " + itemsSelected.value.length)
  //   console.log(itemsSelected.value)
  // }

}

const EliminarSelecc = () => {
  for (let index = 0; index < itemsSelected.value.length; index++) {
    // console.log(itemsSelected.value[index])
    borrarU(itemsSelected.value[index].id, itemsSelected.value[index].attributes.codigo, 2)
  }

}

// const almacenDatosSucursales = (Lista) => {
//   if (localStorage.getItem('ListadoCacheSucursal')) {
//     localStorage.removeItem('ListadoCacheSucursal');
//     const parsed = JSON.stringify(Lista);
//     localStorage.setItem('ListadoCacheSucursal', parsed);
//   } else {
//     const parsed = JSON.stringify(Lista);
//     localStorage.setItem('ListadoCacheSucursal', parsed);
//     // dataCache.value = JSON.parse(localStorage.getItem('ListadoCacheSucursal'));
//   }
// }

watchEffect(() => {
  // Se activa de forma inmediata y cuando name o surname cambie
  // Haz algo (side effects) 👁
  if (critBusq.value[0]) {
    searchValue.value = critBusq.value[0]
  }
  if (critBusq.value[1]) {
    searchValue.value = critBusq.value[1]
  }
  if (critBusq.value[2]) {
    searchValue.value = critBusq.value[2]
  }

});

const cuandoCambie = () => {
  if (searchField.value == 'Código') {
    searchField1.value = "attributes.codigo";
  }
  if (searchField.value == 'Tipo') {
    searchField1.value = "type";
  }
}

// const columnas = [
//   { title: "NO" },
//   { title: "IMAGEN" },
//   { title: "CODIGO" },
//   { title: "CATEGORIA" },
//   { title: "P. COMPRA" },
//   { title: "P. VENTA" },
//   { title: "UNIDAD" },
//   { title: "STOCK" },
//   { title: "VENTAS" },
//   { title: "OPCIONES" }
// ];

// const options = {
//   responsive: true,
//   select: true,
//   autoWidth: false,
//   dom: 'Bfrtip',
//   language:
//   {
//     search: 'Buscar', zeroRecords: 'No hay registros para mostrar',
//     info: 'Mostrando del _START_ a _END_ de _TOTAL registros',
//     infoFiltered: '(Filtrados de _MAX_ registros.)',
//     paginate: { first: 'Primero', previous: 'Anterior', next: 'Siguiente', last: 'Último' }
//   }
// };
// const p = ref("10-100-1001")
const headers = [
  { text: "NO", value: "id", width: 50, sortable: true },
  { text: "IMAGEN", value: "image" },
  { text: "CODIGO", value: "codigo" },
  { text: "DESCRIPCIÓN", value: "attributes.descripcion", width: 250 },
  // { text: "OBSERVACIONES", value: "attributes.observacion", width: 50 },
  { text: "P.COMPRA", value: "precioC", sortable: true },
  { text: "P.VENTA", value: "precioV", sortable: true },
  { text: "U_MEDIDA", value: "unidad" },
  { text: "STOCK", value: "attributes.cantidad", sortable: true },
  { text: "VENTAS", value: "cantV", sortable: true },
  { text: "OPCIONES", value: "opciones" }
];

const items = ref([]);

const esperando = ref(false);

const loading = ref(false)

// const loadingP = ref(false)

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

const cerrarAlert = () => {
  Swal.close();
}

const cod = ref();

// const codProd = ref();

// const descProd = ref();

// const obsProd = ref();

const clickEditarProducto = async (idSelect) => {
  editar.value = true;
  errores.value.articulo_id = "";
  errores.value.ubicacion_id = "";
  errores.value.descripcion = "";
  errores.value.observacion = "";
  errores.value.cantidad = "";
  // console.log(idSelect)
  // localStorage.setItem("editar", editar.value);
  Store.id = idSelect;
  for (let index = 0; index < itemsProductos1.value.length; index++) {
    const element = itemsProductos1.value[index].id;
    if (element == idSelect) {
      // Store.formProductos.id = itemsProductos1.value[index].id;
      Store.formProductos.data.attributes.descripcion = itemsProductos1.value[index].attributes.descripcion;
      Store.formProductos.data.attributes.cantidad = itemsProductos1.value[index].attributes.cantidad;
      Store.formProductos.data.attributes.observacion = itemsProductos1.value[index].attributes.observacion;
      Store.formProductos.data.attributes.articulo_id = itemsProductos1.value[index].relationships.articulo.data.id;
      Store.formProductos.data.attributes.ubicacion_id = itemsProductos1.value[index].relationships.ubicacion.data.id;
      // console.log(Store.formProductos.id)
      minimos.data.attributes.producto_id = itemsProductos1.value[index].id;
      // Detalles(Store.formProductos.data)
      break;
    }
  }
}

const seleccionaProducto = (prod) => {
  id.value = prod.id;
  editar.value = true;
  formProductos.data.attributes.cantidad = prod.attributes.cantidad;
  formProductos.data.attributes.descripcion = prod.attributes.descripcion;
  formProductos.data.attributes.observacion = prod.attributes.observacion;
  formProductos.data.attributes.articulo_id = prod.attributes.relationships.articulo.data.id;
}

const generarCodeBar = (codig, cod2, cod3) => {
  cod.value = codig.toString() + cod2.toString() + cod3.toString();
  // console.log(typeof codig, typeof cod2, typeof cod3)
  // abrirModalBarCode(codig);
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

// const rolModal = ref(''); // dialog

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

// const cerrarModal = () => {
//   // if (showModal2.value == '') {
//   //   showModal2.value = 'show';
//   //   activaModal2.value = true;
//   //   // show2.value = '';
//   //   // activaShow.value = false;
//   //   // activaHide.value = false;
//   //   // displayModal.value = 'display: block; padding-right: 17px;';
//   //   // showModBack.value = 'modal-backdrop fade show';
//   // } else {
//   showModal2.value = '';
//   activaModal2.value = false;
//   // show2.value = '';
//   activaShow2.value = false;
//   activaHide2.value = true;
//   displayModal2.value = 'display: none;';
//   showModBack2.value = '';
//   // }
// }

// const show1 = ref('');

const showModal1 = ref('');

const activaHide1 = ref(true);

// const activaShow1 = ref(false);

const activaModal1 = ref(false);

const displayModal1 = ref(''); //display: block; padding-right: 17px;

// const rolModal1 = ref(''); // dialog

// const showModBack1 = ref(''); //modal-backdrop fade show

// const show2 = ref('');

const showModal2 = ref('');

const activaHide2 = ref(true);

const activaShow2 = ref(false);

const activaModal2 = ref(false);

const displayModal2 = ref(''); //display: block; padding-right: 17px;

// const rolModal2 = ref(''); // dialog

const showModBack2 = ref(''); //modal-backdrop fade show

// const abrirModalBarCode = (codig) => {
//   if (showModal1.value == '') {
//     cod.value = codig;
//     showModal1.value = 'show';
//     activaModal1.value = true;
//     show1.value = '';
//     activaShow1.value = false;
//     activaHide1.value = false;
//     displayModal1.value = 'display: block; padding-right: 17px;';
//     showModBack1.value = 'modal-backdrop fade show';
//   } else {
//     showModal1.value = '';
//     activaModal1.value = false;
//     show1.value = '';
//     activaShow1.value = false;
//     activaHide1.value = true;
//     displayModal1.value = 'display: none;';
//     showModBack1.value = '';
//   }
// }

// const Exp_3Ptos = () => {
//   if (show.value == '') {
//     show.value = 'show';
//     activaShow.value = true;
//   } else {
//     show.value = '';
//     activaShow.value = false;
//   }
// }

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

// const quitarFoto = () => {
//   siFoto.value = !siFoto.value;
// }

const quitarSucursal = () => {
  sisucursal.value = !sisucursal.value;
}

// const quitarestado = () => {
//   siestado.value = !siestado.value;
// }

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

// let listadoProductos = ref([]);

// let listadoArticulos = ref([]);

// let listadoUbicaciones = ref([]);

// let listadoMedida = ref([])

// let listadoSucursales = ref([]);

// let datosPaginados = ref([]);

// let datosSinPaginar = ref([]);

// let buscando = ref('');

let editar = ref(false);

let id = ref('');

// let cantidad = ref(0);

// let elementPagina = ref(5);

let cargado = ref(false);

// let inicio = ref(0);

// let fin = ref(0);

// let paginaActual = ref(1);

// let disableA = ref('');
// let disableS = ref('');

// let setTiempoBusca = '';

// Paginado
// const obtenerPagina = (nopage) => {
//   paginaActual.value = nopage;
//   inicio.value = (nopage * elementPagina.value) - elementPagina.value;
//   fin.value = (nopage * elementPagina.value);
//   datosPaginados.value = [];
//   datosPaginados.value = datosSinPaginar.value.slice(inicio, fin);

// }

// const obtenerAnterior = () => {
//   if (paginaActual.value > 1) {
//     paginaActual.value--;
//     disableA.value = '';
//     disableS.value = '';
//   } else {
//     disableA.value = 'disabled';
//     disableS.value = '';
//   }
//   obtenerPagina(paginaActual.value);
// }

// const obtenerSiguiente = () => {
//   if (paginaActual.value < cantidad.value) {
//     paginaActual.value++;
//     disableS.value = '';
//     disableA.value = '';
//   } else {
//     disableS.value = 'disabled';
//     disableA.value = '';
//   }
//   obtenerPagina(paginaActual.value);
// }

// const isActivo = (nopage) => {
//   if (nopage == paginaActual.value) {
//     if (nopage == 1) {
//       disableA.value = 'disabled';
//       disableS.value = '';
//     } else {
//       if (nopage == cantidad.value) {
//         disableS.value = 'disabled';
//         disableA.value = '';
//       } else {
//         if ((nopage != 1) && (nopage != cantidad.value)) {
//           disableS.value = '';
//           disableA.value = '';
//         }
//       }
//     }

//     return 'active';
//   } else {
//     return '';
//   }
// }

// let newListado = ref([]);

// let newListadoSucursal = ref([]);

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
  Store.formProductos.data.attributes.descripcion = '';
  Store.formProductos.data.attributes.cantidad = '';
  Store.formProductos.data.attributes.articulo_id = '';
  Store.formProductos.data.attributes.ubicacion_id = '';
  Store.formProductos.data.attributes.observacion = '';
}

const borrarU = async (id, correo, caso) => {
  let correcto = true;
  if (caso == 1) {
    Swal.fire({
      title: "Confirmación",
      text: `Está a punto de eliminar el producto: ${correo}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar"
    }).then(async (result) => {
      if (result.isConfirmed) {
        Store.cambiaEstado(1);
        const response = await EliminarDatos(id, 1);
        if (response == null) {
          Store.cambiaEstado(1);
        } else {
          Store.DeleteProducto(response);
          itemsProductos1.value = Store.itemsProductos;
          if (detalle.value == true) {
            detalle.value = false;
          }
          successFull("Producto eliminado satisfactoriamente.", "top-end")
          Store.cambiaEstado(1);
        }

      }
    })
  } else {
    Swal.fire({
      title: "Confirmación",
      text: `Está a punto de eliminar ${itemsSelected.value.length} productos: `,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar"
    }).then(async (result) => {
      if (result.isConfirmed) {
        Store.cambiaEstado(1);
        // Eliminar //
        for (let index = 0; index < itemsSelected.value.length; index++) {

          const response = await EliminarDatos(itemsSelected.value[index].id, 1);
          if (response == null) {
            // Store.cambiaEstado(1);
            correcto = false;
          } else {
            Store.DeleteProducto(response);
            correcto = true;
            // Store.cambiaEstado(1);
          }
        }
        if (correcto == true) {
          itemsProductos1.value = Store.itemsProductos;
          successFull("Productos eliminados satisfactoriamente.", "top-end")
          Store.cambiaEstado(1);
        } else {
          ErrorFull("Error eliminando los elementos seleccionados.", "top-start")
          Store.cambiaEstado(1);
        }
      }
    })
  }

}

// const cambiarLimite = () => {
//   let i = 0;
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
// }

// watch(listado, async (newQuestion, oldQuestion) => {
//   // console.log(`El nuevo listado es ${newQuestion}`)
//   // console.log(`El nuevo listado es ${listado.value}`)
//   // almacenDatosProductos(listado.value);
//   obtenerListadoLimpio();
//   cargado.value = true;
//   // console.log(`El viejo listado es ${oldQuestion}`)
// })

// const itemsProductos = ref(listadoProductos)

onMounted(async () => {

  if (localStorage.getItem('userName')) {
    // ipPublica.value = localStorage.getItem('Host_back');
    if (localStorage.getItem('Carg_datP') == '0') {
      disabledProductos.value = 'disabled';
      Store.cambiaEstado(1)
      const response = await obtenerDatos(1);
      if (response.length > 0) {
        Store.setListadoProductos(response)
      }
      localStorage.setItem("Carg_datP", "1");
      itemsProductos1.value = Store.itemsProductos;
      Store.cambiaEstado(1)

    } else {
      Store.cambiaEstado(1)
      itemsProductos1.value = Store.itemsProductos;
      Store.cambiaEstado(1)
    }
    // console.log(itemsProductos1.value)

    if (localStorage.getItem('Carg_datA') == '0') {
      Store.cambiaEstado(3)
      const response = await obtenerDatos(5);
      if (response.length > 0) {
        Store.setListadoArticulos(response)
      }
      localStorage.setItem("Carg_datA", "1");
      itemsArticulos1.value = Store.itemsArticulos;
      Store.cambiaEstado(3)

    } else {
      Store.cambiaEstado(3)
      itemsArticulos1.value = Store.itemsArticulos;
      Store.cambiaEstado(3)
    }

    if (localStorage.getItem("Carg_datU") == '0') {
      Store.cambiaEstado(7)
      const response = await obtenerDatos(7);
      if (response.length > 0) {
        Store.setListadoUbicaciones(response)
        localStorage.setItem("Carg_datU", "1");
        itemsUbicaciones1.value = Store.itemsUbicaciones;
        Store.cambiaEstado(7)
      }
    } else {
      Store.cambiaEstado(7)
      itemsUbicaciones1.value = Store.itemsUbicaciones;
      Store.cambiaEstado(7)

    }

    if (localStorage.getItem("Carg_datMe") == "0") {

      const response = await obtenerDatos(3);
      if (!response) {

      } else {
        if (response.length > 0) {
          Store.setListadoMedidas(response)
        }
        localStorage.setItem("Carg_datMe", "1");
        itemsMedidas1.value = Store.itemsMedidas;
      }

    } else {
      itemsMedidas1.value = Store.itemsMedidas;
    }
    disabledProductos.value = '';

  } else {
    router.push('/login');
  }
})


</script>
<style scoped>
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
