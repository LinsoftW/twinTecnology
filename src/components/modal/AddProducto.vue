<template>
  <!-- <div v-if="!esperando" class="container-fluid"> -->
  <transition name="fade-modal">
    <div class="backdrop-modal">
      <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
        <header class="modal-header" id="modalTitle">
          <slot name="header">
            DATOS DEL NUEVO PRODUCTO
          </slot>
          <div class="btn-close" @click="closeVentana">
            &times;
          </div>
          <!-- <button type="button" class="btn-close" @click="close" aria-label="Close modal">
            X
          </button> -->
        </header>

        <section class="modal-body" id="modalDescription">

          <div class="col-lg-12">
            <div class="">
              <div class="text-center">
                <h3 class="h6 text-gray-900 mb-4">CAMPOS OBLIGATORIOS (<label style="color: red;">*</label>)</h3>
              </div>
              <form class="user">

                <div class="row">
                  <div class="form-group col-lg-4">
                    <label class="text-info">Categoría: <label style="color: red;">*</label></label> <i
                      class="fas fa-barcode"></i>
                    <!-- <a class="btn btn-secondary btn-xs" @click="generarBArCode()"><i
                        class="fas fa-sync"></i></a> -->
                    <select id="categM" class="form-control" v-model="selected" @change="ObtenCategHija(selected)">
                      <option disabled value="">Seleccione una categoría</option>
                      <option v-for="cate in categoriasM" :key="cate.cod" :value="cate.cod">{{ cate.valor }} </option>
                    </select>

                  </div>

                  <!-- <div class="col-lg-4"></div> -->

                  <div class="form-group col-lg-4">
                    <label class="text-info">Subcategoría: <label style="color: red;">*</label></label> <i
                      class="fas fa-barcode"></i>
                    <!-- <a class="btn btn-secondary btn-xs" @click="generarBArCode()"><i
                        class="fas fa-sync"></i></a> -->
                    <select id="categH" class="form-control" v-model="selected" @change="ObtenCodigoHijo(selected)">
                      <option v-for="categ in categoriasH" :value="categ.cod"> {{ categ.valor }} </option>
                    </select>

                  </div>
                  <!-- <FormKit label="Username" type="text" help="Pick a new username"
                        validation="required|matches:/^@[a-zA-Z]+$/|length:5" value="@FormKit" /> -->
                  <div class="form-group col-lg-4">
                    <label class="text-info">Código: <label style="color: red;">*</label></label> <i
                      class="fas fa-barcode"></i>
                    <!-- <a class="btn btn-secondary btn-xs" @click="generarBArCode()"><i
                        class="fas fa-sync"></i></a> -->
                    <input disabled type="text" class="form-control" id="codigo" aria-describedby="emailHelp"
                      v-model="formProductos.data.attributes.codigo" placeholder="Código" required>

                  </div>
                  <!-- <div class="col-lg-3 form-group">
                      <vue-barcode :value="cod" tag="svg"></vue-barcode>
                    </div> -->
                  <div class="form-group col-lg-4">
                    <label class="text-info">Descripción: <label style="color: red;">*</label></label>
                    <input type="text" class="form-control" id="descripcion" aria-describedby="emailHelp"
                      v-model="formProductos.data.attributes.descripcion" placeholder="Descripción del producto">
                  </div>
                  <div class="form-group col-lg-4">
                    <label class="text-info">Sucursal: <label style="color: red;">*</label></label>
                    <select name="rol" id="rol" style="width: 100%; text-align:center" placeholder="Sucursal"
                      class="text-gray-900 form-control">
                      <option v-for="dato in listadoSucursales" :key="dato.id" :value="dato.attributes.nombre">{{
                        dato.attributes.nombre }}</option>
                    </select>
                  </div>
                  <div class="form-group col-lg-4">
                    <label class="text-info">Categoría: <label style="color: red;">*</label></label>
                    <select name="rol" id="rol" style="width: 100%; text-align:center" placeholder="Sucursal"
                      class="text-gray-900 form-control">
                      <option v-for="dato in listadoSucursales" :key="dato.id" :value="dato.attributes.nombre">{{
                        dato.attributes.nombre }}</option>
                    </select>
                  </div>

                </div>
                <div class="form-group ">
                  <label class="text-info">Observaciones:</label>
                  <textarea class="form-control" id="observaciones" v-model="formProductos.data.attributes.observacion"
                    placeholder="Observaciones acerca del producto"></textarea>
                  <!-- <input type="text" class="form-control" id="observaciones"
                        aria-describedby="emailHelp" v-model="form.apellido1" placeholder="Observaciones acerca del producto"> -->
                </div>
                <div class="row">

                </div>
                <!-- <div class="form-group">
                      <label class="text-info">Imagen:</label>
                      <input type="file" class="form-control" id="foto"> Seleccione una foto para el producto...
                    </div> -->

              </form>
            </div>
          </div>
          <!-- <slot name="body">

          </slot> -->
        </section>

        <footer class="modal-footer">
          <div class="row m-1">
            <!-- <div v-if="editar == false" class="col-lg-1"></div> -->
            <div class=" col-xs-4">
              <a @click="agregarU()" class="btn btn-primary btn-user btn-block">
                Archivar y continuar
              </a>
            </div>
            <div class="col-xs-4 ml-2">
              <a @click="agregarU()" class="btn btn-info btn-user btn-block">
                Guardar datos
              </a>
            </div>
            <!-- <div v-if="editar" class="form-group h4 col-lg-6">
                    <a @click="editarU" class="btn btn-info btn-user btn-block">
                      Modificar producto
                    </a>
                  </div> -->
            <div class="col-xs-4 ml-2">
              <a @click="cancelarU()" class="btn btn-danger btn-user btn-block">
                Cerrar
              </a>
            </div>
          </div>

        </footer>
      </div>
    </div>
  </transition>
  <!-- </div> -->

  <!-- <template v-if="esperando">
    <div v-on="loading('Actualizando datos...')">

    </div>
  </template> -->
</template>

<script setup>
import { onActivated, onMounted, reactive, ref } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';

const emit = defineEmits(['cerrar'])

function closeVentana() {
  emit('cerrar');
}

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

const cat_Electronica = [
  { cod: '0001 ', valor: 'Audio y sonido(audífonos)' },
  { cod: '0002 ', valor: 'Relojes y dispositivos recargables' }
]

const cat_ropa_moda = [
  { cod: '0001 ', valor: 'Ropa masculina' },
  { cod: '0002 ', valor: 'Ropa femenina' },
  { cod: '0003 ', valor: 'Ropa infantil' },
  { cod: '0004 ', valor: 'Calzado' },
  { cod: '0005 ', valor: 'Accesorios (gorras, cinturones, bufandas)' },
  { cod: '0006 ', valor: 'Joyería y relojería' },
]

const cat_hogares_muebles = [
  { cod: '0001 ', valor: 'Decoración (arte, lámparas, alfombras)' },
  { cod: '0002 ', valor: 'Electrodomésticos pequeños' },
  { cod: '0003 ', valor: 'Artículos para el baño' },
  { cod: '0004 ', valor: 'Cocina y utensilios' },
]

const categoriasH = ref([]);

const seleccionado = ref();

const categoriasM = [
  {
    cod: '10', valor: 'Electrónica'
  },
  {
    cod: '11', valor: 'Ropa y Moda'
  },
  {
    cod: '12', valor: 'Hogar y Muebles'
  },
  {
    cod: '13', valor: 'Salud y Belleza'
  },
  {
    cod: '14', valor: 'Ropa deportiva'
  },
  {
    cod: '15', valor: 'Juguetes y Niños'
  },
  {
    cod: '16', valor: 'Maletas y equipaje'
  },
  {
    cod: '17', valor: 'Pinturas y Lienzos'
  },
  {
    cod: '18', valor: 'Bebés y Maternidad'
  },
  {
    cod: '19', valor: 'Productos de Temporada'
  },

]

const codig_final = ref();

const ObtenCategHija = (valor) => {
  formProductos.data.attributes.codigo = valor;
  codig_final.value = valor;
  if (valor == 10) {
    categoriasH.value = cat_Electronica
  }
  if (valor == 11) {
    categoriasH.value = cat_ropa_moda
  }
  if (valor == 12) {
    categoriasH.value = cat_hogares_muebles
  }
}

const ObtenCodigoHijo = (valor) => {
  formProductos.data.attributes.codigo = codig_final.value + '-' + valor;
}

const cod = ref();

function generarBArCode() {
  // codigos segun categorias y productos
  //   10 - Electrónica
  // 0001 Audio y sonido(audífonos)
  // 0002 Relojes y dispositivos recargables

  //   11 - Ropa y Moda
  // 0001 - Ropa masculina
  // 0002 - Ropa femenina
  // 0003 - Ropa infantil
  // 0004 - Calzado
  // 0005 - Accesorios(gorras, cinturones, bufandas)
  // 0006 - Joyería y relojería

  //   12 - Hogar y Muebles
  // 0001 - Decoración(arte, lámparas, alfombras)
  // 0002 - Electrodomésticos pequeños
  // 0003 - Artículos para el baño
  // 0004 - Cocina y utensilios

  //   13 - Salud y Belleza
  // 0001 - Cosméticos
  // 0002 - Cuidado personal
  // 0003 - Productos para el cabello
  // 0004 - Perfumes y fragancias
  // 0005 - Equipos médicos y de cuidado personal
  // 0006 - Deportes y Ocio

  //   14 - Ropa deportiva
  // 0001 - Accesorios para fitness
  // 0002 - Camping y actividades al aire libre
  // 0003 - Juguetes y juegos
  // 0004 - Material de ciclismo
  //   15 - Juguetes y Niños
  // 0001 - Juguetes para bebés
  // 0002 - Juguetes educativos
  // 0003 - Ropa infantil
  // 0004 - Mobiliario para niños
  // 0005 - Accesorios y productos de cuidado infantil

  //   16 - Maletas y equipaje
  // 0001 - Accesorios de viaje
  // 0002 - Ropa de viaje y outdoor
  // 0003 - Artículos para camping

  //   17 - Pinturas y lienzos
  // 0001 - Material para dibujo
  // 0002 - Herramientas para manualidades
  // 0003 - Kits de DIY(hazlo tú mismo)

  //   18 - Bebés y Maternidad
  // 0001 - Ropa para bebés
  // 0002 - Artículos de cuidado infantil(pañales, biberones)
  // 0003 - Juguetes para bebés

  //   19 - Productos de Temporada
  // 0001 - Artículos de Navidad
  // 0002 - Artículos de Halloween
  // 0003 - Artículos de verano(sombrillas, toallas)
  // 0004 - Artículos de invierno(ropa, guantes, bufandas)
  // Fin

  cod.value = Math.floor(Math.random() * 9999);
  if (cod.length < 4) {
    generarBArCode();
  }
  cod.value = '10-0001'
  formProductos.data.attributes.codigo = cod.value;
}
const mostrar = ref(false);

let errors = ref([]);

let listado = ref([]);

let listadoSucursales = ref([]);

let newListado = ref([]);

let newListadoSucursal = ref([]);

let datosSinPaginar = ref([]);

let editar = ref(false);

let cantidad = ref(0);

let elementPagina = ref(5);

let cargado = ref(false);

const ipPublica = ref('192.168.121.123');

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

const agregarU = () => {
  esperando.value = true;
  axios.post(`http://` + ipPublica.value + `/fullstack/public/productos`, formProductos)
    .then((response) => {
      // cargado.value = false;
      // esperando.value = false;
      // console.log(response.data.data)
      // cerrarAlert();
      // consultar();
      formProductos.data.attributes.observacion = ''
      formProductos.data.attributes.descripcion = '';
      formProductos.data.attributes.codigo = '';
      // actualizar_datos();
      successFull("Producto agregado satisfactoriamente.","top-center")
      // Swal.fire({
      //   icon: "success",
      //   title: "Producto agregado satisfactoriamente."
      // })
      // localStorage.removeItem('Carg_dat');
      // localStorage.setItem('Carg_dat', '3');
      closeVentana();
    })
    .catch((error) => {
      if (error.response.status === 400) {
        errors.value = error.response.data.message;
      }
      esperando.value = false;
      ErrorFull(error.response.data.message ,"top-start")
      closeVentana();
      // cerrarAlert();
      // Swal.fire({
      //   icon: "error",
      //   title: error.response.data.message
      // })
    })
  // console.log(datos_archivados.value);

}

const cancelarU = () => {
  editar.value = false;
  formProductos.data.attributes.descripcion = '';
  formProductos.data.attributes.codigo = '';
  formProductos.data.attributes.observacion = '';
  closeVentana();
}

const actualizar_datos = () => {
  // localStorage.removeItem('ListadoCache');
  listado.value = JSON.parse(localStorage.getItem('ListadoCache'));
  obtenerListadoLimpio();
  // listadoSucursales.value = JSON.parse(localStorage.getItem('ListadoCacheSucursal'));
  // listadoSucursales = obtenerListadoLimpioSucursales();
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
    // obtenerPagina(1);
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
    // obtenerPagina(1);
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
  localStorage.removeItem('ListadoCache');
  const parsed = JSON.stringify(Lista);
  localStorage.setItem('ListadoCache', parsed);
}

const consultar = async () => {
  if (cargado.value == false) {
    let response = await axios.get(`http://` + ipPublica.value + `/fullstack/public/productos`)
      .then((response) => {
        listado.value = response.data.data;
        almacenDatosProductos(listado.value);
        obtenerListadoLimpio();
        cargado.value = true;
      });
  } else {
    almacenDatosProductos(listado.value);
  }

}

// onActivated(async () => {
//   generarBArCode()
// })

onMounted(async () => {
  // localStorage.setItem("userName", form.nombre);
  if (localStorage.getItem('userName')) {
    if (localStorage.getItem('Carg_dat') != '0') {
      generarBArCode()
      listado.value = JSON.parse(localStorage.getItem('ListadoCache'));
      obtenerListadoLimpio();
      listadoSucursales.value = JSON.parse(localStorage.getItem('ListadoCacheSucursal'));
      listadoSucursales = obtenerListadoLimpioSucursales();
      cargado.value = true;
    }

  } else {
    router.push('/login');
  }

})
</script>

<style lang="scss" scoped>
.backdrop-modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  padding: 32px 16px 120px;
  background-color: rgba(0, 0, 0, 0.3);
  height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;
  //justify-content: center;
  //align-items: center;
}

.modal {
  background: #FFFFFF;
  color: #000;
  position: relative;
  width: 60%;
  box-shadow: 0px 5px 5px, rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  transition: all 250ms ease-in-out;
  overflow: scroll;
  scrollbar-color: #66bab8 #858796;
  scrollbar-width: thin;

  @media (max-width: 768px) {
    width: 95%;
  }

}

.modal-header,
.modal-footer {
  padding: 20px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #4AAEAC;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  position: absolute;
  border: none;
  top: 0;
  right: 0;

  font-size: 22px;
  padding: 11px;
  cursor: pointer;
  font-weight: bold;
  color: #4AAEAC;
  background: transparent;
}

.green-btn {
  color: white;
  background: #4AAEAC;
  border: 1px solid #4AAEAC;
  border-radius: 3px;
}

.fade-modal-enter,
.fade-modal-leave-to {
  opacity: 0;

  .modal {
    opacity: 0;
    transform: translateY(-32px);
  }
}

.fade-modal-enter-active,
.fade-modal-leave-active {
  transition: all 250ms ease-in-out;
}

.fade-modal-leave-active {
  transition-delay: 250ms;
}
</style>
