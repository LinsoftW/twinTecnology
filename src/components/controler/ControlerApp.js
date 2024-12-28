import Swal from 'sweetalert2';
import { reactive, ref, watchEffect } from 'vue';
// import { almacenDatosProductos } from '../service/servicio';

export const ipPublica = ref('localhost')

export const cantidadProductos = ref(0);

export const cantidadDepartamentos = ref(0);

export const cantidadArticulos = ref(0);

export const actualiza = ref(false);

export const esperandoProductos = ref(false);

export const esperandoDepartamentos = ref(false);

export const esperandoArticulos = ref(false);

export const listadoDepartamentos = ref([]);

export const listadoArticulos = ref([]);

export const listadoProductos = ref([]);

export const listadoMedida = ref([]);

export const listadoSucursales = ref([]);

export const listadoUbicaciones = ref([]);

export const listadoMagnitudes = ref([]);

export const listadoEtiquetas = ref([]);

export const itemsProductos = ref([])

export const itemsArticulos = ref([])

// export const itemsDepartamentos = ref([])

export const itemsMagnitudes = ref([])

export const itemsMedidas = ref([])

export const itemsUbicaciones = ref([])

export const itemsSucursales = ref([])

export const itemsEtiquetas = ref([])

export const loadingP = ref(false) // Productos

export const loadingD = ref(false) // Departamentos

export const loadingA = ref(false) // Articulos

export const loadingS = ref(false) // Sucursales

export const loadingMe = ref(false) // Unidades medida

export const loadingM = ref(false) // Magnitudes

export const loadingUb = ref(false) // Ubicaciones

export const loadingE = ref(false) // Etiquetas

export const disabledProductos = ref('')

export const disabledMagnitud = ref('')

export const successFull = (mensaje, posicion) => {

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

export const ErrorFull = (mensaje, posicion) => {

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



