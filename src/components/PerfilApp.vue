<template>
  <div class="container-fluid">
    <!-- <div>
        <div id="interactive" class="viewport"></div>
        <button @click="startScanner">Iniciar Escaneo</button>
        <p v-if="barcode">Código de barras detectado: {{ barcode }}</p>
      </div> -->
    <!-- <ImageBarcodeReader @decode="onDecode" @error="onError" /> -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-2 text-gray-800 text-center">PERFIL DE USUARIO</h1>
      <!-- <img src="/cargando2.gif" style="width: 40px; height:40px" > -->

      <!-- <router-link class="button" to="/gest_inventario">
          <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-info shadow-sm" v-b-tooltip.hover
            title="Generar resumen diario"><i class="fas fa-plus fa-sm "></i> Agregar productos</a>
        </router-link> -->
    </div>
    <!-- Nuevo Listado productos -->
    <div class="row">
      <div class="col-xl-2 col-md-2"></div>

      <div class="col-xl-8 col-lg-12">
        <div class="card shadow mb-4">
          <a href="#collapseCardExample" class="d-block card-header py-3" data-toggle="collapse" role="button"
            aria-expanded="true" aria-controls="collapseCardExample">
            <h6 class="m-0 font-weight-bold text-info"><i class="fa fa-eye"></i> MI PERFIL</h6>
          </a>
          <!-- <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                 <h6 class="m-0 font-weight-bold text-info"><i class="fas fa-edit"></i> DEPARTAMENTOS</h6>
                 <button class="btn btn-info" @click="abrirModalAddProd()"> <span class="fa fa-plus"></span> Nuevo</button>
               </div> -->
          <!-- Card Body -->
          <div class="collapse show" id="collapseCardExample">
            <div class="card-body">
              <div class="row">
                <div class="col-md-2 col-xl-2 col-lg-2">
                  <div class="justify-content-between">
                  </div>
                </div>
                <!-- <div class="col-md-3 col-xl-3 col-lg-3">
                   <span class="text-info">Filtrar por columna: </span>
                   <select v-model="searchField" @change="cuandoCambie()" class="form-control form-control-user">
                     <option>Tipo</option>
                     <option>Código</option>
                   </select>
                 </div> -->
                <!-- <div class=" text-center"> -->
                <div v-if="modifica == false" class="col-md-8 col-xl-8 col-lg-8 text-center">
                  <img src="/src/assets/new/img/undraw_profile.svg" class="img img-thumbnail img-profile rounded-circle"
                    style="height: 150px; width:150px" alt="">
                  <!-- <div class="col-lg-12">

                    <label for="avatar">Seleccione una imagen:</label><br>
                    <input type="file" id="file" name="file" accept="image/png, image/jpeg, image/jpg"
                      @change="cargarImagen()" />
                  </div> -->
                  <hr>
                  <div v-for="(i, index) in itemsPersonas1">
                    <strong v-if="i.attributes.alias == Store.formPersonas.data.attributes.alias">Alias:</strong> <label
                      :for="index" v-if="i.attributes.alias == Store.formPersonas.data.attributes.alias">{{
                        i.attributes.alias }}</label>
                    <!-- <strong>Alias:</strong> <label :for="index" v-if="i.attributes.alias == Store.formPersonas.data.attributes.alias">{{ i.attributes.alias }}</label> -->
                    <br><strong v-if="i.attributes.alias == Store.formPersonas.data.attributes.alias">Email:</strong>
                    <label :for="index" v-if="i.attributes.alias == Store.formPersonas.data.attributes.alias">&nbsp; {{
                      i.attributes.email }}</label>
                    <br><strong v-if="i.attributes.alias == Store.formPersonas.data.attributes.alias">Móvil:</strong>
                    <label :for="index" v-if="i.attributes.alias == Store.formPersonas.data.attributes.alias">&nbsp; {{
                      i.attributes.movil }}</label>
                  </div>
                  <a @click="Modificar()" class="btn btn-primary btn-sm btn-icon-split">
                    <span class="icon text-white-50">
                      <i class="fas fa-edit"></i>
                    </span>
                    <!-- d-md-none -->
                    <span :class="`text`">Actualizar</span>
                  </a>
                  <!-- <button class="btn btn-primary">Actualizar</button> -->
                  <!-- <span class="text-info">Buscar: </span>
                     <input class="form-control form-control-user" type="text" v-model="searchValue"
                       placeholder="Qué desea buscar" /> -->
                </div>
                <div v-if="modifica == true" class="col-md-8 col-xl-8 col-lg-8 text-center">
                  <!-- <img src="/src/assets/new/img/undraw_profile.svg" class="img img-thumbnail img-profile rounded-circle" style="height: 150px; width:150px" alt=""> -->
                  <div class="row">
                    <div class="col-lg-12">
                      <img v-if="imgPerfil" class="img-profile rounded-circle" v-bind:src="imgPerfil"
                        style="width: 150px; height: 150px">
                      <img v-else class="img-profile rounded-circle" src="/src/assets/new/img/undraw_profile.svg"
                        style="width: 150px; height: 150px">

                    </div>
                    <div class="col-lg-12"><br>
                      <label for="avatar">Seleccione una imagen:</label><br>
                      <input type="file" id="file" name="file" accept="image/png, image/jpeg"
                        @change="cargarImagen()" />
                    </div>
                  </div><br>
                  <div class="row">
                    <!-- <div class="row"> -->
                    <div class="form-group col-lg-12 text-left">
                      <label class="text-info">Alias: <label style="color: red;">*</label></label>
                      <input type="text" class="form-control" id="aliasP" @change="verificar_error(1)"
                        aria-describedby="emailHelp" v-model="Store.formPersonas.data.attributes.alias"
                        placeholder="Ej: Pepe" required>
                      <span style="color: red;">{{ errores.alias }}</span>
                    </div>
                    <div class="form-group col-lg-12 text-left">
                      <label class="text-info">Email: <label style="color: red;">*</label></label>
                      <input type="text" class="form-control" id="emailP" aria-describedby="emailHelp"
                        v-model="Store.formPersonas.data.attributes.email" @keyup="ValidacionEmail()"
                        @change="verificar_error(2)" placeholder="Ej: pepe@pep.pe">
                      <span style="color: red;">{{ errores.email }}</span>
                    </div>

                    <div class="form-group col-lg-12 text-left">
                      <label class="text-info">Móvil: <label style="color: red;">*</label></label>
                      <input type="text" class="form-control" id="movilP" aria-describedby="emailHelp"
                        v-model="Store.formPersonas.data.attributes.movil" @change="verificar_error(3)"
                        placeholder="Ej: 0000000" @input="validateInput">
                      <span style="color: red;">{{ errores.movil }}</span>
                    </div>

                    <!-- </div> -->
                  </div>

                  <hr>

                  <!-- <div v-for="(i, index) in itemsPersonas1">
                       <strong v-if="i.attributes.alias == Store.formPersonas.data.attributes.alias">Alias:</strong> <label :for="index" v-if="i.attributes.alias == Store.formPersonas.data.attributes.alias">{{ i.attributes.alias }}</label>
                       <br><strong v-if="i.attributes.alias == Store.formPersonas.data.attributes.alias">Email:</strong> <label :for="index" v-if="i.attributes.email == Store.formPersonas.data.attributes.email">{{ i.attributes.email }}</label>
                       <br><strong v-if="i.attributes.alias == Store.formPersonas.data.attributes.alias">Móvil:</strong> <label :for="index" v-if="i.attributes.movil == Store.formPersonas.data.attributes.movil">{{ i.attributes.movil }}</label>
                     </div> -->
                  <a @click="guardar()" class="btn btn-info btn-sm btn-icon-split">
                    <span class="icon text-white-50">
                      <i class="fas fa-check"></i>
                    </span>
                    <!-- d-md-none -->
                    <span :class="`text`">Guardar</span>
                  </a>&nbsp;
                  <a @click="Modificar()" class="btn btn-danger btn-sm btn-icon-split">
                    <span class="icon text-white-50">
                      <i class="fas fa-cancel"></i>
                    </span>
                    <!-- d-md-none -->
                    <span :class="`text`">Cancelar</span>
                  </a>
                  <!-- <span class="text-info">Buscar: </span>
                     <input class="form-control form-control-user" type="text" v-model="searchValue"
                       placeholder="Qué desea buscar" /> -->
                </div>
                <!-- </div> -->
              </div>
              <!-- <br> -->

            </div>
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
import { ref, onMounted } from 'vue';
import Swal from 'sweetalert2';
// import AddProducto from './modal/AddProducto.vue';
// import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import * as XLSX from 'xlsx';
import router from '@/router';
// import Quagga from 'quagga';
import { useStoreAxios } from '@/store/AxiosStore';
import { ErrorFull, successFull } from './controler/ControlerApp';
// import { EditarDatos, EliminarDatos, GuardarDatos, GuardarMinimos, obtenerDatos } from './helper/useAxios';
// import { data } from 'jquery';
import jsPDF from 'jspdf';
// import autoTable from 'jspdf-autotable';
import { EditarDatos, obtenerDatos } from './helper/useAxios';

const modifica = ref(false)

const Store = useStoreAxios()

// const searchField = ref(["id", "attributes.justificacion", "attributes.observacion", "attributes.cantidad"]);

const numericValue = ref("");

const validateInput = (event) => {
  const value = event.target.value;
  // Solo digitos, espacios y guiones
  numericValue.value = value.replace(/[^0-9\s\-+]/g, '');
  Store.formPersonas.data.attributes.movil = numericValue;
}

function ValidarEmail(params) {
  let regExp = /^\S+@\S+\.\S+$/;

  return regExp.test(params);
}

function ValidarArroba(params) {
  let regExp1 = /^[^\s@]+@[^\s@]+\.[^\s@]+/;

  return regExp1.test(params);
}

function ValidacionEmail() {
  // console.log(form.nombre.length)
  if (Store.formPersonas.data.attributes.email === 0) {
    // console.log("Vacio")
    errores.value.email = 'Debe llenar el campo';
    // color.value = 'red';
  } else if (!ValidarEmail(Store.formPersonas.data.attributes.email)) {
    errores.value.email = 'Email no válido';
    // color.value = 'red';
    // console.error('Email no valido')
  } else if (!ValidarArroba(Store.formPersonas.data.attributes.email)) {
    // console.error('Doble arroba')
    errores.value.email = 'Tiene repetido el arroba';
    // color.value = 'red';
  } else {
    errores.value.email = '';
    // color.value = 'green';
    return 'OKKK';
  }

}

const itemsOperaciones1 = ref([]);

const itemsLotes1 = ref([])

const itemsPersonas1 = ref([])

let imgPerfil = ref("");

const cargarImagen = async () => {
  let file = document.getElementById("file").files[0];
  imgPerfil.value = file;
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      // imgPerfil.value = e.target.result;
      // console.log(imgPerfil.value)
    };
    reader.readAsDataURL(file);
    // data.append
    // successFull("Imagen cambiada satisfactoriamente.", "top-start");
  }
}

const Modificar = () => {
  modifica.value = !modifica.value;
  errores.value.alias = '';
  errores.value.email = '';
  errores.value.movil = '';
}

const Asignar_Imagen = async (alias) => {
  var data = new FormData();
  if (imgPerfil.value) {
    data.append('imagen', imgPerfil.value);
    // data.append('_method', 'POST');
    // console.log(data)
    const response4 = await subirImagen(id, data);
    imgPerfil.value = ""
  }
}

const guardar = async () => {
  // console.log(Store.formPersonas)
  if ((Store.formPersonas.data.attributes.alias != '') && (Store.formPersonas.data.attributes.email != '') && (Store.formPersonas.data.attributes.movil != '')) {
    // console.log(IDPersona.value)
    const response = await EditarDatos(IDPersona.value, Store.formPersonas, 13);
    // console.log(response);
    if (response != null) {
      const response1 = await obtenerDatos(14);
      itemsPersonas1.value = [];
      itemsPersonas1.value = response1;
      // Asignar_Imagen(Store.formPersonas.data.attributes.alias)
      // console.log(response1)
      localStorage.removeItem('userName')
      localStorage.setItem('userName', Store.formPersonas.data.attributes.alias)
      successFull("Datos de usuario modificados satisfactoriamente.", "top-end")
    } else {
      ErrorFull("Error modificando los datos del usuario. Vuelva a intentarlo.", "top-start")
    }
    modifica.value = !modifica.value;
  } else {
    if ((Store.formPersonas.data.attributes.alias == '')) {
      errores.value.alias = "Este campo es obligatorio";
    } else {
      errores.value.alias = "";
    }
    if ((Store.formPersonas.data.attributes.email == '')) {
      errores.value.email = "Este campo es obligatorio";
    } else {
      errores.value.email = "";
    }
    if ((Store.formPersonas.data.attributes.movil == '')) {
      errores.value.movil = "Este campo es obligatorio";
    } else {
      errores.value.movil = "";
    }
  }

}

const errores = ref({ alias: "", email: "", movil: "" })

const verificar_error = (n) => {
  switch (n) {
    case 1:
      if (Store.formPersonas.data.attributes.alias != '') {
        errores.value.alias = "";
      } else {
        errores.value.alias = "Este campo es obligatorio"
      }
      break;
    case 2:
      if (Store.formPersonas.data.attributes.email != '') {
        errores.value.email = "";
      } else {
        errores.value.email = "Este campo es obligatorio"
      }
      break;
    case 3:
      if (Store.formPersonas.data.attributes.movil != 0) {
        errores.value.movil = "";
      } else {
        errores.value.movil = "Este campo es obligatorio"
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

let IDPersona = ref(0)

onMounted(async () => {

  if (localStorage.getItem('userName')) {
    // ipPublica.value = localStorage.getItem('Host_back');
    if (localStorage.getItem('Carg_datPe') == '0') {
      const response = await obtenerDatos(14);
      if (response != null) {
        Store.setListadoPersonas(response)
      }
      // Store.cambiaEstado(10)
      localStorage.setItem("Carg_datPe", "1");
      itemsPersonas1.value = Store.itemsPersonas;
      // Store.cambiaEstado(10)

    } else {
      // Store.cambiaEstado(10)
      itemsPersonas1.value = Store.itemsPersonas;
      // Store.cambiaEstado(10)
    }
    for (let index = 0; index < itemsPersonas1.value.length; index++) {
      if (itemsPersonas1.value[index].attributes.alias == localStorage.getItem('userName')) {
        IDPersona.value = itemsPersonas1.value[index].id;
        break;
      }
    }
    // console.log(itemsPersonas1.value)
  } else {
    router.push('/login');
  }
})


</script>
<style lang="scss" scoped>
a,
span {

  @media (max-width: 1024px) {
    span.text {
      display: none;
    }
  }
}

div,
h1 {
  @media (max-width: 1024px) {
    h1.h3.mb-2.text-gray-800 {
      font-size: small;
      font-weight: 600;
    }

    .container-fluid {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
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
