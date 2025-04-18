<template>
  <div class="container-fluid">
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-2 text-gray-800 text-center">USUARIOS</h1>

    </div>

    <!-- Usuarios -->
    <div class="row">
      <div class="col-xl-12 col-lg-12">
        <div class="card shadow mb-4">
          <!-- Card Header - Dropdown -->
          <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 class="m-0 font-weight-bold text-info">LISTADO DE USUARIOS</h6>
            <div class="dropdown no-arrow">
              <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
              </a>
              <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                aria-labelledby="dropdownMenuLink">
                <div class="dropdown-header">Acciones:</div>
                <a class="dropdown-item" href="#"><span class="fa fa-cog"></span> Permisos</a>
                <a class="dropdown-item" href="#"><span class="fa fa-comments"></span> Enviar mensaje</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#"><span class="fa fa-trash"></span> Eliminar todos</a>
              </div>
            </div>
          </div>
          <!-- Card Body -->
          <div class="card-body">
            <div class="row">
              <div class="col-md-7">
                <a data-toggle="modal" @click="agrega()" data-target="#agregaUsuario"
                  class="btn btn-info btn-sm btn-icon-split" :class="disabledProductos">
                  <span class="icon text-white-50">
                    <i class="fas fa-plus"></i>
                  </span>
                  <!-- d-md-none -->
                  <span :class="`text`">Nuevo usuario</span>
                </a>
              </div>
              <!-- <div class="col-md-7"> -->
              <div class="col-md-5 col-xl-5 col-lg-12">
                <span class="text-info">Buscar: </span>
                <input class="form-control form-control-user" type="text" v-model="searchValue"
                  placeholder="Qué desea buscar" />
              </div>
              <!-- </div> -->
            </div>
            <br>
            <!-- <hr> -->

            <!-- Probandooo -->
            <!-- <div class="row">
              <table class="main composition">
                <tr>
                  <th></th>
                  <th>Per 4 Pack(200G)</th>
                  <th class="per-100g">Per 100g</th>
                  <th class="per-50g">Per Buttery(50G)</th>
                </tr>

                <tr>
                  <th>Calories</th>
                  <td>724</td>
                  <td class="per-100g">362</td>
                  <td class="per-50g">181</td>
                </tr>

                <tr>
                  <th>Fat</th>
                  <td>43.1g</td>
                  <td class="per-100g">21.6g</td>
                  <td class="per-50g">10.8g</td>
                </tr>

                <tr>
                  <th>Saturated</th>
                  <td>15.7g</td>
                  <td class="per-100g">7.9g</td>
                  <td class="per-50g">3.9g</td>
                </tr>

                <tr>
                  <th>Sodium</th>
                  <td>1,941.9mg</td>
                  <td class="per-100g">971mg</td>
                  <td class="per-50g">485.5mg</td>
                </tr>

                <tr>
                  <th>Carbohydrates</th>
                  <td>78.6g</td>
                  <td class="per-100g">39.3g</td>
                  <td class="per-50g">19.7g</td>
                </tr>

                <tr>
                  <th>Fiber</th>
                  <td>0g</td>
                  <td class="per-100g">0g</td>
                  <td class="per-50g">0g</td>
                </tr>

                <tr>
                  <th>Sugar</th>
                  <td>10.9g</td>
                  <td class="per-100g">5.5g</td>
                  <td class="per-50g">2.7g</td>
                </tr>

                <tr>
                  <th>Protein</th>
                  <td>10.5g</td>
                  <td class="per-100g">5.3g</td>
                  <td class="per-50g">2.6g</td>
                </tr>
              </table>

              <table class="mobile per-100g composition">
                <tr>
                  <th></th>
                  <th class="per-100g">Per 100g</th>
                </tr>

                <tr>
                  <th>Calories</th>
                  <td class="per-100g">362</td>
                </tr>

                <tr>
                  <th>Fat</th>
                  <td class="per-100g">21.6g</td>
                </tr>

                <tr>
                  <th>Saturated</th>
                  <td class="per-100g">7.9g</td>
                </tr>

                <tr>
                  <th>Sodium</th>
                  <td class="per-100g">971mg</td>
                </tr>

                <tr>
                  <th>Carbohydrates</th>
                  <td class="per-100g">39.3g</td>
                </tr>

                <tr>
                  <th>Fiber</th>
                  <td class="per-100g">0g</td>
                </tr>

                <tr>
                  <th>Sugar</th>
                  <td class="per-100g">5.5g</td>
                </tr>

                <tr>
                  <th>Protein</th>
                  <td class="per-100g">5.3g</td>
                </tr>
              </table>

              <table class="mobile per-50g composition">
                <tr>
                  <th></th>
                  <th class="per-50g">Per Buttery(50G)</th>
                </tr>

                <tr>
                  <th>Calories</th>
                  <td class="per-50g">181</td>
                </tr>

                <tr>
                  <th>Fat</th>
                  <td class="per-50g">10.8g</td>
                </tr>

                <tr>
                  <th>Saturated</th>
                  <td class="per-50g">3.9g</td>
                </tr>

                <tr>
                  <th>Sodium</th>
                  <td class="per-50g">485.5mg</td>
                </tr>

                <tr>
                  <th>Carbohydrates</th>
                  <td class="per-50g">19.7g</td>
                </tr>

                <tr>
                  <th>Fiber</th>
                  <td class="per-50g">0g</td>
                </tr>

                <tr>
                  <th>Sugar</th>
                  <td class="per-50g">2.7g</td>
                </tr>

                <tr>
                  <th>Protein</th>
                  <td class="per-50g">2.6g</td>
                </tr>
              </table>
            </div> -->

            <!-- Personas -->
            <EasyDataTable :headers="headers" :items="itemsPersonas1" buttons-pagination border-cell :labels="label"
              v-model:items-selected="itemsSelected" header-text-direction="center" body-text-direction="center"
              :search-field="searchField" :search-value="searchValue" @click-row="showRow" :rows-per-page="5"
              :loading="Store.esperandoProductos" :key="actualizaTabla" responsive="true">
              <template #item-image="item">
                <a data-toggle="modal" data-target="#verImagen" @click="obtenDescripcion(item.attributes.imagen_path)">
                  <!-- "{{ obtenImagen(item.id) }}" -->
                  <!-- {{ item.attributes.imagen_path }} -->
                  <img v-if="item.attributes.imagen_path != ''" :src="urlAuditoria + '/' + item.attributes.imagen_path"
                    alt="No image" class="img img-thumbnail" style="width: 50px; height: 50px;" />
                  <img v-else src="/productos.jpg" alt="No image" class="img img-thumbnail"
                    style="width: 50px; height: 50px;" />
                </a>

              </template>
              <!-- <template #rowsPerPageOptions="{ prevPage, nextPage, isFirstPage, isLastPage, rowsPerPageOptions }">
                <button :disabled="isFirstPage" @click="prevPage">
                  Anterior
                </button>
                <button :disabled="isLastPage" @click="nextPage">
                  Siguiente
                </button>
                <label :disabled="rowsPerPageOptions" @click="nextPage">
                  Siguiente
                </label>
              </template> -->
              <!-- <template #rowsPerPageOptions>
                  <a>Filas por paginas</a>
                </template> -->
              <template #item-opciones="item">
                <div class="operation-wrapper">
                  <!-- <button class="btn btn-success btn-sm btn-circle" @click="Aumentar(item)" 
                        title="Aumentar / Disminuir"><span class="fas fa-plus"></span> / <span
                          class="fas fa-minus"></span></button> -->
                  <button class="btn btn-primary btn-sm btn-circle ml-1" data-toggle="modal"
                    data-target="#agregaProducto" @click="clickEditarProducto(item.id)"
                    title="Modificar"><span class="fas fa-edit"></span></button>

                  <!-- <button class="btn btn-warning btn-sm btn-circle ml-1" @click="Disminuir(item)"
                      title="Restar"><span class="fas fa-minus"></span></button> -->

                  <!-- <button class="btn btn-info btn-sm btn-circle ml-1" data-toggle="modal" data-target="#BarCode"
                    @click="generarCodeBar(item.relationships.departamento.data.id, item.relationships.articulo.data.id, item.id)"
                     title="Código de barra"><span class="fas fas fa-barcode"></span></button> -->
                  <!-- <router-link to="/detalles"> -->
                  <!-- <button class="btn btn-warning btn-sm btn-circle ml-1" @click="Detalles(item)"
                      title="Detalles"><span class="fa fa-eye"></span></button> -->
                  <button class="btn btn-danger btn-sm btn-circle ml-1"
                    @click="borrarU(item.id, item.attributes.descripcion, 1)"  title="Eliminar"><span
                      class="fas fas fa-trash-alt"></span></button>
                  <!-- </router-link> -->
                </div>
              </template>
              <template #item-codigo="item">
                {{ item.relationships.departamento.data.id }}{{ item.relationships.articulo.data.id }}{{ item.id }}
              </template>
              <template #item-departamento="item">
                {{ obtenDepartamento(item.relationships.departamento.data.id) }}
                <!-- item.relationships.medida.data.id -->
              </template>
              <template #item-etiqueta="item">
                <!-- {{item}} -->
                {{ obtenEtiqueta(item.id) }}
              </template>
              <template #loading>
                <img src="/cargando2.gif" style="width: 60px; height: 60px;" />
              </template>
              <template #empty-message>
                <a>No hay datos que mostrar</a>
              </template>
              <!-- <template #empty-rowsPerPageOptions>
                <a>Filas por página</a>
              </template> -->

            </EasyDataTable>

            <div class="mt-4 text-center small">
              <span class="mr-2">
                <i class="fas fa-circle text-primary"></i> Activo
              </span>
              <span class="mr-2">
                <i class="fas fa-circle text-default"></i> Inactivo
              </span>
              <!-- <span class="mr-2">
                <i class="fas fa-circle text-info"></i> Baja
              </span> -->
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- Logout Modal-->
    <div :class="'modal fade ' + showModal1" id="agregaUsuario" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" :aria-hidden="activaHide1" :arial-modal="activaModal1" :style="displayModal1">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-info" id="exampleModalLabel" v-if="editar == false">NUEVO USUARIO</h5>
            <h5 class="modal-title text-info text-center" id="exampleModalLabel" v-if="editar == true"><span
                class="fa fa-edit"></span>
              MODIFICAR LOS DATOS DEL USUARIO
              <!-- <br>(<label style="color: red;">{{
              Store.formProductos.data.attributes.descripcion
            }}</label>) -->
            </h5>

            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" class="text-info">×</span>
            </button>
          </div>
          <div class="modal-body text-center">
            <!-- <div class="text-center">
            <h1 class="h6 text-gray-900 mb-4"><i>CAMPOS OBLIGATORIOS</i> (<label style="color: red;">*</label>)
            </h1>
          </div> -->
            <form class="user">
              <div class="row">
                <div class="col-lg-12">
                  <!-- <img v-if="Store.formPersonas.data.attributes.imagen_path" class="img-profile rounded-circle"
                  v-bind:src="urlAuditoria + '/' + Store.formProductos.data.attributes.imagen_path"
                  style="width: 100px; height: 100px"> -->
                  <img class="img-profile rounded-circle" src="/src/assets/new/img/undraw_profile.svg"
                    style="width: 100px; height: 100px">

                </div>
                <div class="col-lg-12">

                  <label for="avatar">Seleccione una imagen:</label>
                  <input type="file" id="file" name="file" accept="image/png, image/jpeg, image/jpg"
                    @change="cargarImagen()" />
                </div>
              </div>
              <hr>

              <div class="row">
                <div class="form-group col-lg-6 text-left">
                  <label class="text-info">Alias: <label style="color: red;">*</label></label>
                  <input type="text" class="form-control" id="descripcionP" @change="verificar_error(1)"
                    aria-describedby="emailHelp" v-model="Store.formPersonas.data.attributes.alias"
                    placeholder="Ej: Pepe" required>
                  <span style="color: red;">{{ errores.alias }}</span>
                </div>
                <div class="form-group col-lg-6 text-left">
                  <label class="text-info">Número telefónico: <label style="color: red;">*</label></label>
                  <input type="text" class="form-control" id="observacionP" aria-describedby="emailHelp"
                    v-model="Store.formProductos.data.attributes.movil" placeholder="Ej: 00000000">
                  <!-- <span style="color: red;">{{ errores.observacion }}</span> -->
                </div>
              </div>
              <div class="row">
                <div class="form-group col-lg-12 text-left">
                  <label class="text-info">Correo electrónico: <label style="color: red;">*</label></label>
                  <input type="text" class="form-control" id="minimo" v-model="Store.formPersonas.data.attributes.email"
                    aria-describedby="emailHelp" value="" placeholder="Ej: pepe@pepe.pe" required>
                  <span style="color: red;">{{ errores.email }}</span>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-lg-6 text-left">
                  <label class="text-info">Contraseña: <label style="color: red;">*</label></label>
                  <input type="password" class="form-control" id="minimo" v-model="formPassword.data.password"
                    aria-describedby="emailHelp" value="" placeholder="Contraseña" required>
                  <span style="color: red;">{{ errores.password }}</span>
                </div>
                <div class="form-group col-lg-6 text-left">
                  <label class="text-info">Repita la contraseña: <label style="color: red;">*</label></label>
                  <input type="password" class="form-control" id="minimo" v-model="formPassword.data.password2"
                    aria-describedby="emailHelp" value="" placeholder="Repetir contraseña" required>
                  <span style="color: red;">{{ errores.password2 }}</span>
                </div>
              </div>
              <!-- <div class="row">
                <div class="col-lg-11 text-left">
                  <label for="d" class="text-info">Seleccione el artículo:</label>
                </div>
                <div class="col-lg-1">
                  <label for="d" class="text-left"><button class="btn btn-danger"><span class="fa fa-plus"></span></button></label>
                </div>
              </div> -->
              <!-- <div class="row">
              <div class="form-group col-lg-12 text-left">
                <label class="text-info">Seleccione la ubicación: <label style="color: red;">*</label></label>
                <select name="articulo" id="articulo" @change="verificar_error(4)"
                  style="width: 100%; text-align:center" placeholder="Artículo" class="text-gray-900 form-control"
                  v-model="Store.formProductos.data.attributes.ubicacion_id">
                  <option v-for="dato in itemsUbicaciones1" :key="dato.id" :value="dato.id">{{
                    dato.attributes.ubicacion }}</option>
                </select>
                <span style="color: red;">{{ errores.ubicacion_id }}</span>
              </div>


            </div> -->
              <div class="text-center">
                <h1 class="h6 text-gray-900 mb-3">CAMPOS OBLIGATORIOS (<label style="color: red;">*</label>)
                </h1>
              </div>
              <div class="row">
                <div class="col-md-12 col-xl-12 col-lg-12">
                  <div class="justify-content-between">
                    <a v-if="editar == false" @click="agregarUPersona()" class="btn btn-info btn-icon-split m-2"
                      :class="disabledDepartamentodBtn">
                      <span class="icon text-white-50">
                        <i class="fas fa-plus"></i>
                      </span>
                      <span :class="`text`">{{ AgregarPersona }}</span>
                    </a>
                    <a data-dismiss="modal" aria-label="close" v-if="editar" @click="editarUPersona()"
                      class="btn btn-primary btn-icon-split m-2" :class="btnModificarClass">
                      <span class="icon text-white-50">
                        <i class="fas fa-edit"></i>
                      </span>
                      <span :class="`text`">{{ btnModificar }}</span>
                    </a>
                    <a class="btn btn-danger btn-icon-split" data-dismiss="modal" aria-label="close"
                      :class="btnModificarClass" >
                      <span class="icon text-white">
                        <i class="fas fa-close"></i>
                      </span>
                      <span class="text text-white">Cancelar</span>
                    </a>
                  </div>
                </div>
              </div>
              <!-- <div class="row">
                <div v-if="editar == false" class=" col-lg-2">

                </div>
                <div v-if="editar == false" class="col-lg-4">
                  <a @click="agregarUProducto(1)" class="btn btn-primary btn-block" :class="disabledProductoBtn">
                    <span>{{ AgregarPersona }}</span>
                  </a>
                </div>

                <div v-if="editar" class="form-group col-lg-4">
                  <a @click="editarU()" class="btn btn-info" :class="deactiva">
                    {{ btnModificarM }}
                  </a>
                </div>
                <div class="form-group col-lg-4">
                  <a class="btn btn-danger btn-block" data-dismiss="modal" aria-label="close" @click="cancelarU()"
                    :class="deactiva">
                    Cancelar
                  </a>
                </div>
              </div> -->


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


  </div>

</template>
<script setup>
import router from '@/router';
import { useStoreAxios } from '@/store/AxiosStore';
import { onMounted, reactive, ref } from 'vue';
import { obtenerDatos } from './helper/useAxios';

const Store = useStoreAxios()

const editar = ref(false)

const searchField = ref(["id", "attributes.descripcion", "attributes.observacion"]);

const searchField2 = ref(["id", "attributes.descripcion", "attributes.observacion", "attributes.cantidad"]);

const disabledProductos = ref('')

// const searchField1 = ref('')

const searchValue = ref("");

// const searchValue2 = ref("");

const itemsPersonas1 = ref([])

const AgregarPersona = ref('Agregar')

const formPassword = reactive({
  data: {
    id: '',
    password: '',
    password2: ''
  }
})

const agrega = () => {
  editar.value = false
  errores.value.password = "";
  errores.value.password2 = "";
  errores.value.movil = "";
  errores.value.alias = "";
  errores.value.email = "";
  formPassword.data.password = "";
  formPassword.data.password2 = "";
  Store.formPersonas.data.attributes.alias = "";
  Store.formProductos.data.attributes.movil = "";
  Store.formProductos.data.attributes.email = "";
}

const errores = ref({ alias: "", email: "", movil: "", password: "", password2: "" })

const headers = [
  { text: "NO", value: "id", width: 50, sortable: true },
  { text: "IMAGEN", value: "image" },
  { text: "ALIAS", value: "attributes.alias" },
  { text: "CORREO", value: "attributes.email", width: 250 },
  { text: "ESTADO", value: "estado" },
  // { text: "CANTIDAD", value: "cantidad" },
  // { text: "P.COMPRA", value: "precioc", sortable: true },
  // { text: "MÍNIMO STOCK", value: "attributes.minimo", sortable: true },
  // { text: "U_MEDIDA", value: "unidad" },
  // { text: "VENTAS", value: "cantV", sortable: true },
  { text: "OPCIONES", value: "opciones", width: 200 }
];

const verificar_error = (n) => {
  switch (n) {
    case 1:
      if (Store.formProductos.data.attributes.alias != '') {
        errores.value.alias = "";
      } else {
        errores.value.alias = "Este campo es obligatorio"
      }
      break;
    case 2:
      if (Store.formProductos.data.attributes.email != '') {
        errores.value.email = "";
      } else {
        errores.value.email = "Este campo es obligatorio"
      }
      break;
    // case 3:
    //   if (Store.formProductos.data.attributes.articulo_id != 0) {
    //     errores.value.articulo_id = "";
    //   } else {
    //     errores.value.articulo_id = "Este campo es obligatorio"
    //   }
    //   break;
    // case 5:
    //   if (Store.formProductos.data.attributes.cantidad != 0) {
    //     errores.value.cantidad = "";
    //   } else {
    //     errores.value.cantidad = "Este campo es obligatorio"
    //   }
    //   break;

    // case 6:
    //   if (Store.formLotes.data.attributes.descripcion != 0) {
    //     errores.value.descripLote = "";
    //   } else {
    //     errores.value.descripLote = "Este campo es obligatorio"
    //   }
    //   break;
    // case 7:
    //   if (Store.formLotes.data.attributes.producto_id != 0) {
    //     errores.value.producto_id = "";
    //   } else {
    //     errores.value.producto_id = "Este campo es obligatorio"
    //   }
    //   break;
    // case 8:
    //   if (Store.formLotes.data.attributes.ubicacion_id != 0) {
    //     errores.value.ubicacion_id = "";
    //   } else {
    //     errores.value.ubicacion_id = "Este campo es obligatorio"
    //   }
    //   break;
    // case 9:
    //   if (etiqueta_R != 0) {
    //     errores.value.etiqueta = "";
    //   } else {
    //     errores.value.etiqueta = "Este campo es obligatorio"
    //   }
    //   break;
    default:
      break;
  }
}

onMounted(async () => {
  if (localStorage.getItem('userName')) {
    if (localStorage.getItem('Carg_datPe') == '0') {
      const response = await obtenerDatos(14);
      if (response != null) {
        Store.setListadoPersonas(response)
      }
      Store.cambiaEstado(11)
      localStorage.setItem("Carg_datPe", "1");
      itemsPersonas1.value = Store.itemsPersonas;
      Store.cambiaEstado(11)

    } else {
      Store.cambiaEstado(11)
      itemsPersonas1.value = Store.itemsPersonas;
      Store.cambiaEstado(11)
    }
    // listado.value = JSON.parse(localStorage.getItem('ListadoCache'));
    // obtenerListadoLimpio();
    // listadoSucursales.value = JSON.parse(localStorage.getItem('ListadoCacheSucursal'));
    // listadoSucursales = obtenerListadoLimpioSucursales();
    // cargado.value = true;
  } else {
    router.push('/login');
  }
  // consultar();
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

/*table.main {
  width: 600px;
}

table.mobile {
  display: none;
}

table.composition {
  border: none;
  border-spacing: 0;
  border-collapse: collapse;
}

th,
td {
  padding: 7px 10px 10px 10px;
}

th {
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 90%;
  bottom-border: 2px solid #111111;
  border-top: 1px solid #999;
  text-align: left;
}

tr:nth-child(2n) {
  background-color: #efefef;
}

tr:hover {
  background-color: #c3e6e5;
}

@media screen and (max-width: 600px) {
  table.main .per-50g {
    display: none;
  }

  table.main .per-100g {
    display: none;
  }

  table.mobile {
    display: table;
  }

  table.composition {
    width: 100%;
  }

  table.composition td {
    width: 50%;
  }
}*/
</style>
