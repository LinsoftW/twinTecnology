<template>
  <div>
    <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">CATEGORÍAS </h1>
        <!-- <img src="/cargando2.gif" style="width: 40px; height:40px" v-if="esperando" > -->
        <!-- {{ listado }} -->
        <!-- <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-info shadow-sm" v-b-tooltip.hover
        title="Generar resumen diario"><i class="fas fa-plus fa-sm "></i> Agregar productos</a> -->
      </div>

      <!-- Datos del producto a agregar -->
      <div class="row">

        <!--Listado de departamentos -->
        <div class="col-xl-12 col-lg-12">
          <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 class="m-0 font-weight-bold text-info"><i class="fas fa-edit"></i> DEPARTAMENTOS</h6>
              <button class="btn btn-info" @click="abrirModalAddProd()"> <span class="fa fa-plus"></span> Nuevo</button>
            </div>
            <!-- Card Body -->
            <div class="card-body">
              <div class="row">
                <div class="col-md-6 col-xl-6 col-lg-12">
                  <div class="justify-content-between">
                    <!-- <router-link class="button" to="/gest_inventario"> -->
                    <a @click="abrirModalAddProd()" href="#"
                      class="d-sm-inline-block btn btn-sm btn-secondary shadow-sm" v-b-tooltip.hover
                      title="Agregar producto"><i class="fas fa-print fa-sm "></i> Imprimir </a>
                    <!-- </router-link> -->
                    <a @click="ExportExcel()" href="#" class="d-sm-inline-block btn btn-sm btn-primary shadow-sm m-2"
                      v-b-tooltip.hover title="Exportar a Excel"><i class="fas fa-download fa-sm "></i> Excel</a>
                  </div>
                </div>
                <div class="col-md-6 col-xl-6 col-lg-12 ">
                  <span class="text-info">Buscar: </span>
                  <input class="form-control" type="text" v-model="searchValue" placeholder="" />
                </div>
              </div>
              <br>

              <EasyDataTable table-class-name="customize-table" :headers="headers" :items="itemsdepartamentos"
                buttons-pagination border-cell header-text-direction="center" body-text-direction="center"
                :search-field="searchField" :search-value="searchValue" :rows-per-page="5" :loading="loadingD"
                show-index>
                <template #item-opciones="item">
                  <div class="operation-wrapper">
                    <button class="btn btn-success btn-sm btn-circle" @click="clickEditar(item.id)" v-b-tooltip.hover
                      title="Editar"><span class="fas fa-edit"></span></button>
                    <!-- <button class="btn btn-success btn-sm btn-circle ml-1" @click="Aumentar(item)" v-b-tooltip.hover
                    title="Aumentar"><span class="fas fa-plus"></span></button>
                  <button class="btn btn-warning btn-sm btn-circle ml-1" @click="Disminuir(item)" v-b-tooltip.hover
                    title="Restar"><span class="fas fa-minus"></span></button>-->
                    <button class="btn btn-danger btn-sm btn-circle ml-1"
                      @click="borrarU(item.id, item.attributes.departamento)" v-b-tooltip.hover title="Eliminar"><span
                        class="fas fas fa-trash-alt"></span></button>
                  </div>
                </template>
                <template #loading>
                  <img src="https://i.pinimg.com/originals/94/fd/2b/94fd2bf50097ade743220761f41693d5.gif"
                    style="width: 100px; height: 80px;" />
                </template>
                <template #empty-message>
                  <a>No hay datos que mostrar</a>
                </template>

              </EasyDataTable>
              <!-- <div class="customize-pagination">
                <button class="prev-page" @click="prevPage" :disabled="isFirstPage">prev page</button>
                <button class="next-page" @click="nextPage" :disabled="isLastPage">next page</button>
              </div> -->
            </div>
          </div>
        </div>
        <!-- FIN -->
        <!--Listado de articulos -->
        <div class="col-xl-12 col-lg-12">
          <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 class="m-0 font-weight-bold text-info"><i class="fas fa-edit"></i> TIPOS DE ARTÍCULOS</h6>
              <button class="btn btn-info" @click="abrirModalAddArti()"> <span class="fa fa-plus"></span> Nuevo</button>
            </div>
            <!-- Card Body -->
            <div class="card-body">
              <div class="row">
                <div class="col-md-6 col-xl-6 col-lg-12">
                  <div class="justify-content-between">
                    <!-- <router-link class="button" to="/gest_inventario"> -->
                    <a @click="abrirModalAddProd()" href="#"
                      class="d-sm-inline-block btn btn-sm btn-secondary shadow-sm" v-b-tooltip.hover
                      title="Agregar producto"><i class="fas fa-print fa-sm "></i> Imprimir </a>
                    <!-- </router-link> -->
                    <a @click="ExportExcel()" href="#" class="d-sm-inline-block btn btn-sm btn-primary shadow-sm m-2"
                      v-b-tooltip.hover title="Exportar a Excel"><i class="fas fa-download fa-sm "></i> Excel</a>
                  </div>
                </div>
                <div class="col-md-6 col-xl-6 col-lg-12 ">
                  <span class="text-info">Buscar: </span>
                  <input class="form-control" type="text" v-model="searchValue" placeholder="" />
                </div>
              </div>
              <br>

              <EasyDataTable table-class-name="customize-table" :headers="headersArticulos" :items="itemsarticlos"
                buttons-pagination border-cell header-text-direction="center" body-text-direction="center"
                :search-field="searchFieldArticulo" :search-value="searchValueArticulo" :rows-per-page="5"
                :loading="loading" show-index>
                <template #item-opciones="item">
                  <div class="operation-wrapper">
                    <button class="btn btn-success btn-sm btn-circle" @click="clickEditar(item.id)" v-b-tooltip.hover
                      title="Editar"><span class="fas fa-edit"></span></button>
                    <!-- <button class="btn btn-success btn-sm btn-circle ml-1" @click="Aumentar(item)" v-b-tooltip.hover
                    title="Aumentar"><span class="fas fa-plus"></span></button>
                  <button class="btn btn-warning btn-sm btn-circle ml-1" @click="Disminuir(item)" v-b-tooltip.hover
                    title="Restar"><span class="fas fa-minus"></span></button>-->
                    <button class="btn btn-danger btn-sm btn-circle ml-1"
                      @click="borrarU(item.id, item.attributes.codigo)" v-b-tooltip.hover title="Eliminar"><span
                        class="fas fas fa-trash-alt"></span></button>
                  </div>
                </template>
                <template #loading>
                  <img src="https://i.pinimg.com/originals/94/fd/2b/94fd2bf50097ade743220761f41693d5.gif"
                    style="width: 100px; height: 80px;" />
                </template>
                <template #empty-message>
                  <a>No hay datos que mostrar</a>
                </template>
              </EasyDataTable>

            </div>
          </div>
        </div>
        <!-- FIN -->
        <!-- <div class="col-xl-3 col-lg-5">
          <div class="card shadow mb-4">

            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
              style="text-align: center;">
              <h6 class="m-0 font-weight-bold text-info" v-if="editar == false"><span class="fa fa-plus"></span> AGREGAR
                NUEVA CATEGORÍA </h6>
              <h6 class="m-0 font-weight-bold text-info" v-if="editar == true"><span class="fa fa-edit"></span>
                MODIFICAR CATEGORÍA (<label style="color: red;">{{ formProductos.data.attributes.codigo
                  }}</label>)</h6>
            </div>

            <div class="card-body">


              <div class="col-lg-12">
                <div class="">
                  <div class="text-center">
                    <h1 class="h6 text-gray-900 mb-4">CAMPOS OBLIGATORIOS (<label style="color: red;">*</label>)</h1>
                  </div>
                  <form class="user">


                    <div class="form-group col-lg-12">
                      <label class="text-info">Categoría: <label style="color: red;">*</label></label>
                      <input type="text" class="form-control" id="codigo" aria-describedby="emailHelp"
                        v-model="formProductos.data.attributes.codigo" placeholder="Código" required>
                    </div>
                    <div class="form-group col-lg-12">
                      <label class="text-info">Descripción: <label style="color: red;">*</label></label>
                      <input type="text" class="form-control" id="descripcion" aria-describedby="emailHelp"
                        v-model="formProductos.data.attributes.descripcion" placeholder="Descripción del producto"
                        required>
                      <label v-if="errores"> {{ errores.value }}</label>
                    </div>
                    <div class="form-group col-lg-12">
                      <label class="text-info">Unidad de medida:</label>
                      <select class="form-group form-control">
                        <option value="">Und(s)</option>
                        <option value="">Kg(s)</option>
                        <option value="">Lts(s)</option>
                      </select>
                    </div>

                    <div class="row">
                      <div v-if="editar == false" class="col-lg-3"></div>

                      <div v-if="editar == false" class="form-group h4 col-lg-6">
                        <a @click="agregarU" class="btn btn-info btn-block">
                          Agregar
                        </a>
                      </div>
                      <div v-if="editar" class="form-group h4 col-lg-6">
                        <a @click="editarU" class="btn btn-info btn-block">
                          Modificar
                        </a>
                      </div>
                      <div v-if="editar" class="form-group h4 col-lg-6">
                        <a @click="cancelarU" class="btn btn-danger btn-block">
                          Cancelar
                        </a>
                      </div>
                    </div>


                  </form>
                </div>
              </div>
            </div>
          </div>
        </div> -->
      </div>

      <!-- TABLA INVENTARIOS -->
      <!-- codigo, descripcion, cantidad -->
      <!-- permitir seleccionar que quiere mostrar -->
      <!-- poner todos los datos en la tabla inventario -->
      <!-- elementos de busqueda -->
      <!-- por Sucursal -->
      <!-- por codigo -->
      <!-- por cantidad -->

    </div>
    <AddDepartamento v-show="popup" @cerrar="abrirModalAddProd()" @consulta="actualiza()" />
    <AddArticulo v-show="popupArt" @cerrar="abrirModalAddArti()" @consulta="actualizaArt()" />
  </div>
  <template v-if="esperando">
    <div v-on="loadingA('Actualizando datos...')">

    </div>
  </template>
</template>
<script setup>

import axios from 'axios';
import router from '@/router';
import Swal from 'sweetalert2';
import { onMounted, reactive, ref } from 'vue';
import AddDepartamento from './modal/AddDepartamento.vue';
import 'vue3-easy-data-table/dist/style.css';
import AddArticulo from './modal/AddArticulo.vue';
import { load } from '@progress/kendo-vue-intl';

const esperando = ref(false);

const popup = ref(false);

const emit = defineEmits(['cerrar']);

const abrirModalAddProd = () => {
  popup.value = !popup.value;
  // console.log(x);
  // if (popup.value == false) {

  //   localStorage.removeItem('Carg_dat');
  //   if (localStorage.getItem('Carg_dat') != '0') {
  //     emit('consultar', 5);
  //     listado.value = JSON.parse(localStorage.getItem('ListadoCacheDepartamentos'));
  //     obtenerDepartamentos();
  //   }

  // }

}

const actualiza = () => {
  popup.value = !popup.value;
  // console.log(x);
  if (popup.value == false) {

    localStorage.removeItem('Carg_dat');
    if (localStorage.getItem('Carg_dat') != '0') {
      emit('consultar', 5);
      listado.value = JSON.parse(localStorage.getItem('ListadoCacheDepartamentos'));
      obtenerDepartamentos();
    }

  }

}

const actualizaArt = () => {
  popup.value = !popup.value;
  // console.log(x);
  if (popup.value == false) {

    localStorage.removeItem('Carg_dat');
    if (localStorage.getItem('Carg_dat') != '0') {
      emit('consultar', 6);
      listado.value = JSON.parse(localStorage.getItem('ListadoCacheDepartamentos'));
      obtenerDepartamentos();
    }

  }

}

const popupArt = ref(false)

const abrirModalAddArti = () => {
  popupArt.value = !popupArt.value;
  // console.log(x);
  // if (popupArt.value == false) {

  //   localStorage.removeItem('Carg_dat');
  //   if (localStorage.getItem('Carg_dat') != '0') {
  //     loading.value = true;
  //     emit('consultar', 6);
  //     listado.value = JSON.parse(localStorage.getItem('ListadoCacheArticulos'));
  //     obtenerArticulos();
  //     loading.value = false
  //   }

  // }

}

const loading = ref(false);

const loadingD = ref(false);

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

const itemsSelected = ref([]);

const searchField = ref(["attributes.departamento"]);

const searchFieldArticulo = ref(["attributes.articulo"]);

const searchValue = ref("");

const searchValueArticulo = ref("");

const headers = [
  { text: "CÓDIGO", value: "id", width: 50, sortable: true },
  // { text: "CODIGO", value: "attributes.codigo", sortable: true },
  { text: "NOMBRE", value: "attributes.departamento" },
  { text: "DESCRIPCIÓN", value: "attributes.descripcion", sortable: true },
  { text: "OBSERVACIONES", value: "attributes.observacion", sortable: true },
  { text: "FECHA CREACIÓN", value: "attributes.timestamps.created_at" },
  { text: "FECHA ACTUALIZACIÓN", value: "attributes.timestamps.updated_at" },
  { text: "OPCIONES", value: "opciones" }
];

const headersArticulos = [
  { text: "CÓDIGO", value: "id", width: 50, sortable: true },
  // { text: "CODIGO", value: "attributes.codigo", sortable: true },
  { text: "NOMBRE", value: "attributes.articulo" },
  { text: "DESCRIPCIÓN", value: "attributes.descripcion", sortable: true },
  { text: "OBSERVACIONES", value: "attributes.observacion", sortable: true },
  { text: "FECHA CREACIÓN", value: "attributes.timestamps.created_at" },
  { text: "FECHA ACTUALIZACIÓN", value: "attributes.timestamps.updated_at" },
  { text: "OPCIONES", value: "opciones" }
];

const items = ref([]);

const itemsdepartamentos = ref([]);

const itemsarticlos = ref([]);

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

let errors = ref([]);

let listado = ref([]);

let listadoDepartamentos = ref([]);

let listadoMedida = ref([])

let listadoArticulos = ref([]);

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

const datos_archivados = ref([]);

const ipPublica = ref('localhost');

const formProductos = reactive({
  data: {
    type: 'Producto',
    attributes: {
      codigo: "",
      descripcion: "",
      observacion: "",
    }
  }
})

const agregarU = () => {
  if (formProductos.data.attributes.descripcion != '' || formProductos.data.attributes.codigo != '') {
    // console.log(formProductos.object)
    esperando.value = true;
    // datos_archivados.value.push(formProductos);
    axios.post(`http://` + ipPublica.value + `/fullstack/public/productos`, formProductos)
      .then((response) => {
        cargado.value = false;
        esperando.value = false;
        cerrarAlert();
        consultar();
        formProductos.data.attributes.observacion = ''
        formProductos.data.attributes.descripcion = '';
        formProductos.data.attributes.codigo = '';
        // actualizar_datos();
        successFull("Producto agregado satisfactoriamente.", "top-end")
        // Swal.fire({
        //   icon: "success",
        //   title: "Producto agregado satisfactoriamente."
        // })
      })
      .catch((error) => {
        if (error.response.status === 400) {
          errors.value = error.response.data.message;
        }
        esperando.value = false;
        cerrarAlert();
        Swal.fire({
          icon: "error",
          title: error.response.data.message
        })
      })
    // console.log(datos_archivados.value);
  } else {
    let errores = ref({ cod: "Campo requerido", descripcion: "Campo requerido" })
    console.log(errores.value.cod)
  }


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

const obtenerListadoLimpio = () => {
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

  items.value = [];
  for (let index = 0; index < listado.value.length; index++) {
    items.value.push(listado.value[index])
  }

}

const obtenerDepartamentos = () => {
  let i = 0;
  // console.log(listadoDepartamentos)
  itemsdepartamentos.value = [];
  for (let index = 0; index < listadoDepartamentos.value.length; index++) {
    itemsdepartamentos.value.push(listadoDepartamentos.value[index])
  }

}

const obtenerArticulos = () => {
  let i = 0;

  itemsarticlos.value = [];
  for (let index = 0; index < listadoArticulos.value.length; index++) {
    itemsarticlos.value.push(listadoArticulos.value[index])
  }

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
    inputLabel: `Modificar datos del producto: ` + `${formProductos.data.attributes.codigo}`,
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
    timer: 2800,
    //timerProgressBar: true,
  })
  toast.fire({
    icon: "error",
    title: mensaje
  })
}

const editarU = () => {
  esperando.value = true;
  axios.put(`http://${ipPublica.value}/fullstack/public/productos/${id.value}`, formProductos)
    .then((response) => {
      // console.log(response)
      esperando.value = false;
      cargado.value = false;
      cerrarAlert();
      consultar();
      editar.value = false;
      formProductos.data.attributes.descripcion = ''
      formProductos.data.attributes.observacion = '';
      formProductos.data.attributes.codigo = '';
      successFull("Categoría modificada satisfactoriamente.", "top-end")
      // Swal.fire({
      //   icon: "success",
      //   title: "Editado satisfactoriamente."
      // })
      // editar.value = false;
      // localStorage.setItem("editar", editar.value);
    })
    .catch((error) => {
      if (error.response.status === 500) {
        errors.value = error.response.data;
      }
      esperando.value = false;
      ErrorFull("Error realizando operación.", "top-start")
      // cerrarAlert();
      // Swal.fire({
      //   icon: "danger",
      //   title: "Error realizando operación."
      // })
    })
}

const borrarU = (id, correo) => {
  // console.log(correo)
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
      // Eliminar //
      axios.delete(`http://${ipPublica.value}/fullstack/public/productos/${id}`)
        .then(() => {
          esperando.value = false;
          consultar();
          // cancelarU();
          cerrarAlert();
          successFull("Categoría eliminada satisfactoriamente.", "top-end")
          // Swal.fire({
          //   title: "Eliminado",
          //   text: "Producto eliminado satisfactoriamente.",
          //   icon: "success"
          // });
          cargado.value = false;
        })
    }
  }).catch((error) => {
    if (error.response.status === 500) {
      errors.value = error.response.data;
    }
    esperando.value = false;
    cerrarAlert();
    ErrorFull("Error realizando operación.", "top-start")
    // Swal.fire({
    //   icon: "danger",
    //   title: "Error realizando operación."
    // })
  });
}
// Fin CRUD

const clickEditar = async (idSelect) => {
  editar.value = true;
  // console.log(idSelect)
  // localStorage.setItem("editar", editar.value);
  id.value = idSelect;

  for (let index = 0; index < listado.value.length; index++) {
    const element = listado.value[index].id;
    if (element == idSelect) {
      formProductos.data.attributes.descripcion = listado.value[index].attributes.descripcion;
      formProductos.data.attributes.codigo = listado.value[index].attributes.codigo;
      formProductos.data.attributes.observacion = listado.value[index].attributes.observacion;
      break;
    }
    // console.log(element)
  }

  // editarUModel()

  // let response = await axios.get(`http://localhost/fullstack/public/api/nom/productos/${id.value}`)
  //   .then((response) => {
  //     formProductos.data.attributes.descripcion = response.data.data.attributes.descripcion;
  //     formProductos.data.attributes.codigo = response.data.data.attributes.codigo;
  //     formProductos.data.attributes.observacion = response.data.data.attributes.observacion;
  //   })
}

const cancelarU = () => {
  editar.value = false;
  formProductos.data.attributes.descripcion = '';
  formProductos.data.attributes.codigo = '';
  formProductos.data.attributes.observacion = '';
}

const actualizar_datos = () => {
  // localStorage.removeItem('ListadoCache');
  listado.value = JSON.parse(localStorage.getItem('ListadoCache'));
  obtenerListadoLimpio();
  // listadoSucursales.value = JSON.parse(localStorage.getItem('ListadoCacheSucursal'));
  // listadoSucursales = obtenerListadoLimpioSucursales();
}

const almacenDatosDepartamentos = (Lista) => {
  localStorage.removeItem('ListadoCacheDepartamentos');
  const parsed = JSON.stringify(Lista);
  localStorage.setItem('ListadoCacheDepartamentos', parsed);
}

const almacenDatosArticulos = (Lista) => {
  localStorage.removeItem('ListadoCacheArticulos');
  const parsed = JSON.stringify(Lista);
  localStorage.setItem('ListadoCacheArticulos', parsed);
}

const almacenDatosMedida = (Lista) => {
  localStorage.removeItem('ListadoCacheUnidades');
  const parsed = JSON.stringify(Lista);
  localStorage.setItem('ListadoCacheUnidades', parsed);
}

onMounted(async () => {
  if (localStorage.getItem('userName')) {

    if (localStorage.getItem('Carg_datD') == '0') {
      // DEPARTAMENTOS
      loadingD.value = true;
      await axios.get(`https://` + ipPublica.value + `/fullstack/public/departamentos`)
        .then((response) => {
          listadoDepartamentos.value = response.data.data;
          almacenDatosDepartamentos(listadoDepartamentos.value);
          // Kcategorias.value = Kcategorias.value + 1;

        }).catch((error) => {
          console.log(error)
          if (error.response.status === 500) {
            errors.value = error.response.status;
          }
        })
      listadoDepartamentos.value = await JSON.parse(localStorage.getItem('ListadoCacheDepartamentos'));
      obtenerDepartamentos();
      localStorage.setItem('Carg_datD', '1')
      loadingD.value = false;

    } else {
      loadingD.value = true;
      listadoDepartamentos.value = await JSON.parse(localStorage.getItem('ListadoCacheDepartamentos'));
      obtenerDepartamentos();
      loadingD.value = false;
    }
    if (localStorage.getItem('Carg_datA') == '0') {
      loading.value = true;
      // UNIDADES DE MEDIDA
      await axios.get(`https://` + ipPublica.value + `/fullstack/public/medidas`)
        .then((response) => {
          listadoMedida.value = response.data.data;
          almacenDatosMedida(listadoMedida.value);
          // Kcategorias.value = Kcategorias.value + 1;

        }).catch((error) => {
          if (error.response.status === 500) {
            errors.value = error.response.status;
          }
        })

      // ARTICULOS
      await axios.get(`https://` + ipPublica.value + `/fullstack/public/articulos`)
        .then((response) => {
          listadoArticulos.value = response.data.data;
          almacenDatosArticulos(listadoArticulos.value);
          // Kcategorias.value = Kcategorias.value + 1;

        }).catch((error) => {
          if (error.response.status === 500) {
            errors.value = error.response.status;
          }
        })
      listadoArticulos.value = await JSON.parse(localStorage.getItem('ListadoCacheArticulos'));
      obtenerArticulos();
      listadoMedida.value = await JSON.parse(localStorage.getItem('ListadoCacheUnidades'));
      localStorage.setItem('Carg_datA', '1')
      loading.value = false
    } else {
      loading.value = true;
      listadoArticulos.value = await JSON.parse(localStorage.getItem('ListadoCacheArticulos'));
      obtenerArticulos();
      listadoMedida.value = await JSON.parse(localStorage.getItem('ListadoCacheUnidades'));
      loading.value = false;
    }

  } else {
    router.push('/login');
  }
})
</script>
<style lang="scss" scoped></style>
