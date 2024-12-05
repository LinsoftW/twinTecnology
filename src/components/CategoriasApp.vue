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
        <div class="col-xl-3 col-lg-5">
          <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
              style="text-align: center;">
              <h6 class="m-0 font-weight-bold text-info" v-if="editar == false"><span class="fa fa-plus"></span> AGREGAR
                NUEVA CATEGORÍA </h6>
              <h6 class="m-0 font-weight-bold text-info" v-if="editar == true"><span class="fa fa-edit"></span>
                MODIFICAR CATEGORÍA (<label style="color: red;">{{ formProductos.data.attributes.codigo
                  }}</label>)</h6>
            </div>
            <!-- Card Body -->
            <div class="card-body">

              <!-- Personas -->
              <div class="col-lg-12">
                <div class="">
                  <div class="text-center">
                    <h1 class="h6 text-gray-900 mb-4">CAMPOS OBLIGATORIOS (<label style="color: red;">*</label>)</h1>
                  </div>
                  <form class="user">

                    <!-- <div class="row"> -->
                    <!-- <FormKit label="Username" type="text" help="Pick a new username"
                        validation="required|matches:/^@[a-zA-Z]+$/|length:5" value="@FormKit" /> -->
                    <div class="form-group col-lg-12">
                      <label class="text-info">Categoría: <label style="color: red;">*</label></label>
                      <input type="text" class="form-control" id="codigo" aria-describedby="emailHelp"
                        v-model="formProductos.data.attributes.codigo" placeholder="Código" required>
                    </div>
                    <div class="form-group col-lg-12">
                      <label class="text-info">Descripción: <label style="color: red;">*</label></label>
                      <input type="text" class="form-control" id="descripcion" aria-describedby="emailHelp"
                        v-model="formProductos.data.attributes.descripcion" placeholder="Descripción del producto">
                    </div>
                    <div class="form-group col-lg-12">
                      <label class="text-info">Unidad de medida:</label>
                      <select class="form-group form-control">
                        <option value="">Und(s)</option>
                        <option value="">Kg(s)</option>
                        <option value="">Lts(s)</option>
                      </select>
                    </div>
                    <!-- </div> -->
                    <!-- <div class="form-group">
                      <label class="text-info">Imagen:</label>
                      <input type="file" class="form-control" id="foto"> Seleccione una foto para el producto...
                    </div> -->
                    <div class="row">
                      <div v-if="editar == false" class="col-lg-3"></div>
                      <!-- <div v-if="editar == false" class="form-group h4 col-lg-6">
                        <a @click="agregarU" class="btn btn-primary btn-user btn-block">
                          Archivar y continuar agregando
                        </a>
                      </div> -->
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
        </div>
        <!--Listado de productos -->
        <div class="col-xl-9 col-lg-7">
          <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 class="m-0 font-weight-bold text-info"><i class="fas fa-edit"></i> LISTADO DE CATEGORÍAS</h6>
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
                <div class="col-md-6 col-xl-6 col-lg-12">
                  <span class="text-info">Buscar: </span>
                  <input class="" type="text" v-model="searchValue" placeholder="" />
                </div>
              </div>
              <br>

              <EasyDataTable table-class-name="customize-table" :headers="headers" :items="items" buttons-pagination
                border-cell header-text-direction="center" body-text-direction="center" :search-field="searchField"
                :search-value="searchValue" :rows-per-page="5">
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
                <!-- <template #loading>
                <img src="https://i.pinimg.com/originals/94/fd/2b/94fd2bf50097ade743220761f41693d5.gif"
                  style="width: 100px; height: 80px;" />
              </template> -->
              </EasyDataTable>

            </div>
          </div>
        </div>
        <!-- FIN -->

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

  </div>
  <!-- <template v-if="esperando">
    <div v-on="loading('Actualizando datos...')">

    </div>
  </template> -->
</template>
<script setup>

import axios from 'axios';
import router from '@/router';
import Swal from 'sweetalert2';
import { onMounted, reactive, ref } from 'vue';

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

const itemsSelected = ref([]);

const searchField = ref(["attributes.codigo"]);

const searchValue = ref("");

const headers = [
  { text: "NO", value: "id", width: 50, sortable: true },
  // { text: "CODIGO", value: "attributes.codigo", sortable: true },
  { text: "CATEGORIA", value: "type" },
  { text: "UNIDAD DE MEDIDA", value: "precioC", sortable: true },
  { text: "FECHA CREACIÓN", value: "precioV", sortable: true },
  { text: "FECHA ACTUALIZACIÓN", value: "unidad" },
  { text: "OPCIONES", value: "opciones" }
];

const items = ref([]);

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

const ipPublica = ref('127.0.0.1');

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
      actualizar_datos();
      Swal.fire({
        icon: "success",
        title: "Producto agregado satisfactoriamente."
      })
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

}

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
  if (cargado.value = false) {
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
    cargado.value = true;
  } else {
    newListado.value = []
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

  items.value = [];
  for (let index = 0; index < listado.value.length; index++) {
    items.value.push(listado.value[index])
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
      listadoSucursales = obtenerListadoLimpioSucursales();
    });

  // }

}

const buscandoElemento = () => {
  clearTimeout(setTiempoBusca);
  setTiempoBusca = setTimeout(consultar, 360);
}

const editarU = () => {
  esperando.value = true;
  axios.put(`http://${ipPublica.value}/fullstack/public/productos/${id.value}`, formProductos)
    .then((response) => {
      // console.log(response)
      esperando.value = false;
      cerrarAlert();
      consultar();
      editar.value = false;
      formProductos.data.attributes.descripcion = ''
      formProductos.data.attributes.observacion = '';
      formProductos.data.attributes.codigo = '';
      Swal.fire({
        icon: "success",
        title: "Editado satisfactoriamente."
      })
      // editar.value = false;
      // localStorage.setItem("editar", editar.value);
    })
    .catch((error) => {
      if (error.status === 400) {
        errors.value = error.response.data;
      }
      esperando.value = false;
      cerrarAlert();
      Swal.fire({
        icon: "danger",
        title: "Error realizando operación."
      })
    })
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
      // Eliminar //
      axios.delete(`http://${ipPublica.value}/fullstack/public/productos/${id}`)
        .then(() => {
          esperando.value = false;
          consultar();
          // cancelarU();
          cerrarAlert();
          Swal.fire({
            title: "Eliminado",
            text: "Producto eliminado satisfactoriamente.",
            icon: "success"
          });
          cargado.value = false;
        })
    }
  }).catch((error) => {
    if (error.response.status === 400) {
      errors.value = error.response.data;
    }
    esperando.value = false;
    cerrarAlert();
  });
}
// Fin CRUD

const clickEditar = async (idSelect) => {
  editar.value = true;
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

onMounted(async () => {
  // localStorage.setItem("userName", form.nombre);
  if (localStorage.getItem('userName')) {
    if (localStorage.getItem('Carg_dat') != '0') {
      listado.value = JSON.parse(localStorage.getItem('ListadoCache'));
      obtenerListadoLimpio();
      listadoSucursales.value = JSON.parse(localStorage.getItem('ListadoCacheSucursal'));
      listadoSucursales = obtenerListadoLimpioSucursales();
    }

  } else {
    router.push('/login');
  }

  // console.log(datosPaginados1)
  // if (cargado.value == false) {
  //   consultar();
  //   consultarSucursales();
  // }

})
</script>
<style lang="scss" scoped></style>
