<template>
  <!-- <div v-if="!esperando" class="container-fluid"> -->
  <transition name="fade-modal">
    <div class="backdrop-modal">
      <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
        <header class="modal-header" id="modalTitle">
          <slot name="header">
            DATOS DEL NUEVO ARTÍCULO
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
                <h4 class="h6 text-gray-900 mb-4">CAMPOS OBLIGATORIOS (<label style="color: red;">*</label>)</h4>
              </div>
              <form class="user">
                <!-- <div class="row"> -->
                <!-- <div class="text-center">
                  <img v-if="image == ''" src="/inventario.jpg" class="img img-thumbnail"
                    style="width: 160px; height:160px" alt="No image">
                  <img v-if="image != ''" :src="image" class="img img-thumbnail" style="width: 160px; height:160px"
                    alt="No image">
                  <br><br>
                  <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" @change="selecImagen()" />
                </div><br> -->

                <div class="row">
                  <div class="form-group col-lg-5">
                    <label class="text-info">Nombre: <label style="color: red;">*</label></label>

                    <input type="text" class="form-control" id="depart" aria-describedby="emailHelp"
                      v-model="formArticulo.data.attributes.articulo" placeholder="Nombre del artículo" required>
                    <!-- <input v-if="nombVacio" style="background-color: red;" type="text" class="form-control" id="departament" aria-describedby="emailHelp"
                      v-model="formArticulo.data.attributes.departamento" placeholder="Nombre del departamento"
                      required> -->
                    <span v-if="nombVacio" style="color: red;">Campo en blanco</span>

                  </div>

                  <div class="form-group col-lg-7">
                    <label class="text-info">Descripción: <label style="color: red;">*</label></label>
                    <input type="text" class="form-control" id="descrip" aria-describedby="emailHelp1"
                      v-model="formArticulo.data.attributes.descripcion" placeholder="Descripción del artículo"
                      required>
                    <span v-if="descripVacio" style="color: red;">Campo en blanco</span>
                  </div>

                </div>
                <div class="form-group">
                  <div class="row">

                    <div class="col-xl-12">
                      <label class="text-info">Observaciones:</label>
                      <textarea class="form-control" id="observa" v-model="formArticulo.data.attributes.observacion"
                        placeholder="Observaciones acerca del artículo"></textarea>

                    </div>
                  </div>
                  <br>
                  <div class="row">
                    <div class="form-group col-lg-6">
                      <label class="text-info">Seleccione el departamento: <label style="color: red;">*</label></label>
                      <select name="rol" id="rol" style="width: 100%; text-align:center" placeholder="Sucursal"
                        class="text-gray-900 form-control">
                        <option v-for="dato in listadoDepartamentos" :key="dato.id"
                          :value="dato.attributes.departamento">{{
                            dato.attributes.departamento }}</option>
                      </select>
                    </div>
                    <div class="form-group col-lg-6">
                      <label class="text-info">Seleccione la unidad de medida: <label style="color: red;">*</label></label>
                      <select name="rol" id="rol" style="width: 100%; text-align:center" placeholder="Sucursal"
                        class="text-gray-900 form-control">
                        <option v-for="dato in listadoMedida" :key="dato.id"
                          :value="dato.id">{{
                            dato.attributes.medida }}</option>
                      </select>
                    </div>
                  </div>

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
              <a @click="agregarC()" class="btn btn-primary btn-user btn-block">
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
import { onMounted, reactive, ref, defineEmits } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';
import router from '@/router'
import { useAlertsStore } from '../ComunicacionApp';

const image = ref('')

const nombVacio = ref(false)

const descripVacio = ref(false)

const selecImagen = () => {
  let imagen = document.getElementById('avatar');
  //Recuperamos el archivo subido
  let file = imagen.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      image.value = e.target.result; // Esto es el Base64
    };
    reader.readAsDataURL(file);
  }
  // console.log(image)
  //Creamos la url
  // let objectURL = URL.createObjectURL(file);
  // console.log(objectURL)
  // image.value = objectURL
  // console.log(image.value)
}

const emit = defineEmits(['cerrar', 'actualiza']);

const alerta = useAlertsStore;

function closeVentana() {
  emit('cerrar')
  // alerta.ActualizarDepartamentos();
}

const formArticulo = reactive({
  data: {
    attributes: {
      articulo: "",
      descripcion: "",
      observacion: "",
      departamento_id: 0, //ID del departamento con el cual se relaciona, números de 2 dítios comenzando en 10, ej. 10
      medida_id: 0 //IP de la medida en que se contabiliza el artículo
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

const cat_salud_belleza = [
  { cod: '0001 ', valor: 'Cosméticos' },
  { cod: '0002 ', valor: 'Cuidado personal' },
  { cod: '0003 ', valor: 'Productos para el cabello' },
  { cod: '0004 ', valor: 'Perfumes y fragancias' },
  { cod: '0005 ', valor: 'Equipos médicos y de cuidado personal' },
  { cod: '0006 ', valor: 'Deportes y Ocio' },
]

const cat_ropa_deportiva = [
  { cod: '0001 ', valor: 'Accesorios para fitness' },
  { cod: '0002 ', valor: 'Camping y actividades al aire libre' },
  { cod: '0003 ', valor: 'Juguetes y juegos' },
  { cod: '0004 ', valor: 'Material de ciclismo' },
]

const cat_juguetes_ninos = [
  { cod: '0001 ', valor: 'Juguetes para bebés' },
  { cod: '0002 ', valor: 'Juguetes educativos' },
  { cod: '0003 ', valor: 'Ropa infantil' },
  { cod: '0004 ', valor: 'Mobiliario para niños' },
  { cod: '0005 ', valor: 'Accesorios y productos de cuidado infantil' },
]

const cat_maletas_equipaje = [
  { cod: '0001 ', valor: 'Accesorios de viaje' },
  { cod: '0002 ', valor: 'Ropa de viaje y outdoor' },
  { cod: '0003 ', valor: 'Artículos para camping' },
]

const cat_pinturas_lienzos = [
  { cod: '0001 ', valor: 'Material para dibujo' },
  { cod: '0002 ', valor: 'Herramientas para manualidades' },
  { cod: '0003 ', valor: 'Kits de DIY(hazlo tú mismo)' },
]

const cat_bebes_maternidad = [
  { cod: '0001 ', valor: 'Ropa para bebés' },
  { cod: '0002 ', valor: 'Artículos de cuidado infantil(pañales, biberones)' },
  { cod: '0003 ', valor: 'Juguetes para bebés' },
]

const cat_productos_temporada = [
  { cod: '0001 ', valor: 'Artículos de Navidad' },
  { cod: '0002 ', valor: 'Artículos de Halloween' },
  { cod: '0003 ', valor: 'Artículos de verano(sombrillas, toallas)' },
  { cod: '0004 ', valor: 'Artículos de invierno(ropa, guantes, bufandas)' },
]

const categoriasH = ref([]);

// const seleccionado = ref();

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

// const ObtenCategHijaF = (valor) => {
//   formArticulo.data.attributes.codigo = valor;
//   codig_final.value = valor;
//   switch (valor) {
//   case 10:
//     categoriasH.value = cat_Electronica
//     break;
//   case 11:
//     categoriasH.value = cat_ropa_moda
//     break;
//   case 12:
//     categoriasH.value = cat_hogares_muebles
//     break;
//   case 13:
//     categoriasH.value = cat_salud_belleza
//     break;
//   case 14:
//     categoriasH.value = cat_ropa_deportiva
//     break;
//   case 15:
//     categoriasH.value = cat_juguetes_ninos
//     break;
//   case 16:
//     categoriasH.value = cat_maletas_equipaje
//     break;
//   case 17:
//     categoriasH.value = cat_pinturas_lienzos
//     break;
//   case 18:
//     categoriasH.value = cat_bebes_maternidad
//     break;
//   case 19:
//     categoriasH.value = cat_productos_temporada
//     break;
//   default:
//     console.log("Lo lamentamos, por el momento no disponemos de " + valor + ".");
// }
// }

const ObtenCategHija = (valor) => {
  formArticulo.data.attributes.codigo = valor;
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
  if (valor == 13) {
    categoriasH.value = cat_salud_belleza
  }
  if (valor == 14) {
    categoriasH.value = cat_ropa_deportiva
  }
  if (valor == 15) {
    categoriasH.value = cat_juguetes_ninos
  }
  if (valor == 16) {
    categoriasH.value = cat_maletas_equipaje
  }
  if (valor == 17) {
    categoriasH.value = cat_pinturas_lienzos
  }
  if (valor == 18) {
    categoriasH.value = cat_bebes_maternidad
  }
  if (valor == 19) {
    categoriasH.value = cat_productos_temporada
  }
}

const ObtenCodigoHijo = (valor) => {
  formArticulo.data.attributes.codigo = codig_final.value + '-' + valor;
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
  if (cod.value.length < 4) {
    generarBArCode();
  }
  // cod.value = '10-0001'
  formArticulo.data.attributes.codigo = cod.value;
}
// const mostrar = ref(false);

let errors = ref([]);

let listado = ref([]);

let listadoSucursales = ref([]);

let listadoDepartamentos = ref([]);

let newListado = ref([]);

let newListadoSucursal = ref([]);

let datosSinPaginar = ref([]);

let editar = ref(false);

let cantidad = ref(0);

let elementPagina = ref(5);

let cargado = ref(false);

const ipPublica = ref('192.168.121.123');

const esperando = ref(false);

// const loading = (texto) => {
//   Swal.fire({
//     // title: "Sweet!",
//     text: texto,
//     imageUrl: "/cargando2.gif",
//     imageWidth: 100,
//     imageHeight: 100,
//     imageAlt: "Custom image",
//     showConfirmButton: false
//   });
// }

// const cerrarAlert = () => {
//   Swal.close();
// }

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
  console.log(formArticulo)
  if (formArticulo.is_valid) {
    esperando.value = true;
    axios.post(`http://` + ipPublica.value + `/fullstack/public/articulos`, formArticulo)
      .then(() => {
        formArticulo.data.attributes.observacion = ''
        formArticulo.data.attributes.descripcion = '';
        formArticulo.data.attributes.departamento = '';
        // useAlertsStore.ActualizarDepartamentos();
        successFull("Artículo agregado satisfactoriamente.", "top-center")
        // closeVentana();
        emit('actualiza')
      })
      .catch((error) => {
        if (error.response.status === 400) {
          errors.value = error.response.data.message;
        }
        esperando.value = false;
        ErrorFull(error.response.data.message, "top-start")
        closeVentana();
      })
  } else {
    if (formArticulo.data.attributes.departamento == "") {
      nombVacio.value = true;
    }

    if (formArticulo.data.attributes.descripcion == "") {
      descripVacio.value = true;
    }

    ErrorFull("Debe llenar todos los campos obligatorios", "top-start")
  }

}

const agregarC = () => {
  if (formArticulo.is_valid) {
    esperando.value = true;
    axios.post(`https://` + ipPublica.value + `/fullstack/public/articulos`, formArticulo)
      .then(() => {
        formArticulo.data.attributes.observacion = ''
        formArticulo.data.attributes.descripcion = '';
        formArticulo.data.attributes.departamento = '';
        successFull("Artículo agregado satisfactoriamente.", "top-center")
        // closeVentana();

      })
      .catch((error) => {
        if (error.response.status === 400) {
          errors.value = error.response.data.message;
        }
        esperando.value = false;
        ErrorFull(error.response.data.message, "top-start")
        // closeVentana();
      })
  } else {
    ErrorFull("Debe llenar todos los campos obligatorios", "top-start")
  }

}

const cancelarU = () => {
  // editar.value = false;
  formArticulo.data.attributes.descripcion = '';
  formArticulo.data.attributes.departamento = '';
  formArticulo.data.attributes.observacion = '';
  closeVentana();
}

const obtenerListadoLimpio = () => {
  let i = 0;
  if (cargado.value == false) {
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

onMounted(async () => {
  if (localStorage.getItem('userName')) {
    // if (localStorage.getItem('Carg_dat') != '0') {
    // generarBArCode()
    listadoDepartamentos.value = JSON.parse(localStorage.getItem('ListadoCacheDepartamentos'));
    listadoMedida.value = JSON.parse(localStorage.getItem('ListadoCacheUnidades'));
    // obtenerListadoLimpio();
    cargado.value = true;
    // }

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
  width: 40%;
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
