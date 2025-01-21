import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';
import cloneDeep from 'lodash/cloneDeep';

export const useStoreAxios = defineStore('StoreAxios', () => {

  const ipPublica = ref('localhost');
  const actualiza = ref(false);
  const serecargo = ref(false);
  const esperandoProductos = ref(false);
  const esperandoDepartamentos = ref(false);
  const esperandoArticulos = ref(false);
  const esperandoMedidas = ref(false);
  const esperandoSucursales = ref(false);
  const esperandoUbicaciones = ref(false);
  const esperandoMagnitudes = ref(false);
  const esperandoEtiquetas = ref(false);
  const esperandoLotes = ref(false);
  const esperandoAuditoria = ref(false)
  const listadoDepartamentos = ref([]);
  const listadoArticulos = ref([]);
  const listadoProductos = ref([]);
  const listadoMedida = ref([]);
  const listadoSucursales = ref([]);
  const listadoUbicaciones = ref([]);
  const listadoMagnitudes = ref([]);
  const listadoEtiquetas = ref([]);
  const listadoLotes = ref([]);
  const listadoMonedas = ref([]);
  const listadoOperaciones = ref([]);
  const listadoImagenes = ref([]);
  const listadoAuditorias = ref([]);
  const listadoEtiquetasProductos = ref([]);
  const NewlistadoAgregar = ref({ data: [] });
  const itemsProductos = ref([])
  const itemsArticulos = ref([])
  const itemsDepartamentos = ref([])
  const itemsMagnitudes = ref([])
  const itemsMedidas = ref([])
  const itemsUbicaciones = ref([])
  const itemsSucursales = ref([])
  const itemsEtiquetas = ref([])
  const itemsAuditorias = ref([])
  const itemsOperaciones = ref([])
  const itemsEtiquetasProductos = ref([])
  const itemsLotes = ref([])
  const itemsMonedas = ref([])
  const itemsImagen = ref([])
  const loadingP = ref(false) // Productos
  const loadingD = ref(false) // Departamentos
  const loadingA = ref(false) // Articulos
  const loadingS = ref(false) // Sucursales
  const loadingMe = ref(false) // Unidades medida
  const loadingM = ref(false) // Magnitudes
  const loadingUb = ref(false) // Ubicaciones
  const loadingE = ref(false) // Etiquetas
  const id = ref(0); // Ids
  const collapsed = ref('collapsed');
  const collapsed2 = ref('collapsed');
  const activa = ref(false);
  const show = ref('')
  const activa2 = ref(false);
  const show2 = ref('')
  // IDs de las tablas
  const nextIDProducto = ref(1000);
  const nextIDDepartamento = ref(10);
  const nextIDSucursal = ref(1);
  const nextIDEtiqueta = ref(1);
  const nextIDArticulo = ref(100);
  const nextIDUbicacion = ref(1);
  const nextIDMagnitud = ref(1);
  const nextIDMedida = ref(1);
  const nextIDMinimos = ref(1);
  // Fin IDs tablas
  const cantidadProductos = ref(0);
  const setCantidadProductos = (c) => {
    cantidadProductos.value = c;
  }

  const cantidadArticulos = ref(0);
  const setCantidadArticulos = (c) => {
    cantidadArticulos.value = c;
  }

  const cantidadDepartamentos = ref(0);
  const setCantidadDepartamentos = (c) => {
    cantidadDepartamentos.value = c;
  }

  const limpiarDatos = () => {
    listadoArticulos.value = [];
    listadoDepartamentos.value = [];
    listadoProductos.value = [];
    listadoUbicaciones.value = [];
    listadoSucursales.value = [];
    listadoEtiquetas.value = [];
    listadoEtiquetasProductos.value = [];
    listadoMagnitudes.value = [];
    listadoMonedas.value = [];
    listadoImagenes.value = [];
    listadoLotes.value = [];
  }

  const cambiaEstado = (n) => {
    switch (n) {
      case 1:
        return esperandoProductos.value = !esperandoProductos.value;
        break;
      case 2:
        return esperandoDepartamentos.value = !esperandoDepartamentos.value;
        break;
      case 3:
        return esperandoArticulos.value = !esperandoArticulos.value;
        break;
      case 4:
        return esperandoSucursales.value = !esperandoSucursales.value;
        break;
      case 5:
        return esperandoEtiquetas.value = !esperandoEtiquetas.value;
        break;
      case 6:
        return esperandoMedidas.value = !esperandoMedidas.value;
        break;
      case 7:
        return esperandoUbicaciones.value = !esperandoUbicaciones.value;
        break;
      case 8:
        return esperandoMagnitudes.value = !esperandoMagnitudes.value;
        break;
      case 9:
        return esperandoLotes.value = !esperandoLotes.value;
        break;
      case 10:
        return esperandoAuditoria.value = !esperandoAuditoria.value;
        break;
      default:
        break;
    }
  }

  const formProductos = reactive({
    // id: 0,
    data: {
      attributes: {
        descripcion: "",
        observacion: "",
        minimo: 0,
        articulo_id: 99,
        producto_imagen_id: 1
      }
    }
  })

  const formInventario = reactive({
    data: {
      attributes: {
        justificacion: "",
        cantidad: 0,
      },
      meta: {
        foreign_keys_instances: {
          operacion_id: 0
        }
      }
    }
  })

  const formImagen = reactive({
    // id: 0,
    data: {
      attributes: {
        file: ""
      }
    }
  })

  const formImagenes = reactive({
    // id: 0,
    data: {
      attributes: {
        descripcion: "",
        path: "",
        observacion: "",
        producto_id: 999,
      }
    }
  })

  const formSucursal = reactive({
    // id: 0,
    data: {
      attributes: {
        sucursal: "",
        abreviatura: "",
        descripcion: "",
        observacion: ""
      }
    }
  })

  const formEtiqueta = reactive({
    data: {
      attributes: {
        etiqueta: "",
        descripcion: "",
        observacion: ""
      }
    }
  })

  const formEtiquetaProducto = reactive({
    // id: 0,
    data: {
      attributes: {
        etiqueta_id: "",
        producto_id: ""
      }
    }
  })

  const formMoneda = reactive({
    // id: 0,
    data: {
      attributes: {
        moneda: "",
        abreviatura: "",
        descripcion: "",
        observacion: ""
      }
    }
  })

  const formLotes = reactive({
    // id: 0,
    data: {
      attributes: {
        descripcion: "",
        producto_id: 999,
        ubicacion_id: 9,
        cantidad: 0,
        moneda_compra: '',
        precio_compra: '',
        fecha_compra: '',
        moneda_venta: '',
        precio_venta: '',
        observacion: "",
      }
    }
  })

  const formUbicaciones = reactive({
    // id: 0,
    data: {
      attributes: {
        ubicacion: "",
        descripcion: "",
        observacion: "",
        sucursal_id: 0
      }
    }
  })

  //Magnitudes
  const formMagnitud = reactive({
    // id: 0,
    data: {
      attributes: {
        magnitud: "",
        descripcion: "",
        observacion: ""
      }
    }
  })
  //Unidades de medida
  const formMedida = reactive({
    // id: 0,
    data: {
      attributes: {
        medida: "",
        descripcion: "",
        observacion: "",
        magnitud_id: 0
      }
    }
  })

  const setProductos = (data) => {
    formProductos.data.attributes.descripcion = data.descripcion;
    formProductos.data.attributes.observacion = data.observacion;
    formProductos.data.attributes.minimo = data.minimo;
    formProductos.data.attributes.articulo_id = data.articulo_id;
  }

  const setListadoProductos = (L) => {
    listadoProductos.value = [];
    listadoProductos.value = L;
    itemsProductos.value = [];
    for (let index = 0; index < listadoProductos.value.length; index++) {
      itemsProductos.value.push(listadoProductos.value[index])
    }
  }

  const AddProductos = (L) => {
    listadoProductos.value.push(L);
    setCantidadProductos(cantidadProductos.value + 1)
    setListadoProductos(listadoProductos.value);
  }

  const DeleteProducto = (newdato) => {
    itemsProductos.value = []
    setCantidadProductos(cantidadProductos.value - 1);
    for (let index = 0; index < listadoProductos.value.length; index++) {
      if (newdato.id == listadoProductos.value[index].id) {
        if (index == listadoProductos.value.length - 1) {
          listadoProductos.value.pop();
          break
        } else {
          listadoProductos.value.splice(index, 1)
        }
      }
      itemsProductos.value.push(listadoProductos.value[index])
    }
  }

  const AddDepartamento = (L) => {
    listadoDepartamentos.value.push(L);
    setCantidadDepartamentos(cantidadDepartamentos.value + 1)
    setListadoDepartamentos(listadoDepartamentos.value);
  }

  const EditProductos = (newdato) => {
    itemsProductos.value = [];
    for (let index = 0; index < listadoProductos.value.length; index++) {
      if (newdato.id == listadoProductos.value[index].id) {
        listadoProductos.value[index] = newdato;
      }
      itemsProductos.value.push(listadoProductos.value[index])
    }
  }

  const DeleteDepartamento = (newdato) => {
    itemsDepartamentos.value = []
    setCantidadDepartamentos(cantidadDepartamentos.value - 1)
    for (let index = 0; index < listadoDepartamentos.value.length; index++) {
      if (newdato.id == listadoDepartamentos.value[index].id) {
        if (index == listadoDepartamentos.value.length - 1) {
          listadoDepartamentos.value.pop();
          break
        } else {
          listadoDepartamentos.value.splice(index, 1)
        }
      }
      itemsDepartamentos.value.push(listadoDepartamentos.value[index])
    }
  }

  const EditDepartamento = (newdato) => {
    itemsDepartamentos.value = [];
    for (let index = 0; index < listadoDepartamentos.value.length; index++) {
      if (newdato.id == listadoDepartamentos.value[index].id) {
        listadoDepartamentos.value[index] = newdato;
      }
      itemsDepartamentos.value.push(listadoDepartamentos.value[index])
    }
  }

  const AddSucursal = (L) => {
    listadoSucursales.value.push(L);
    setListadoSucursales(listadoSucursales.value);
  }

  const DeleteSucursal = (newdato) => {
    itemsSucursales.value = []
    for (let index = 0; index < listadoSucursales.value.length; index++) {
      if (newdato.id == listadoSucursales.value[index].id) {
        if (index == listadoSucursales.value.length - 1) {
          listadoSucursales.value.pop();
          break
        } else {
          listadoSucursales.value.splice(index, 1)
        }
      }
      itemsSucursales.value.push(listadoSucursales.value[index])

    }
  }

  const EditSucursal = (newdato) => {
    itemsSucursales.value = [];
    for (let index = 0; index < listadoSucursales.value.length; index++) {
      if (newdato.id == listadoSucursales.value[index].id) {
        listadoSucursales.value[index] = newdato;
      }
      itemsSucursales.value.push(listadoSucursales.value[index])
    }
  }

  const AddImagen = (L) => {
    listadoImagenes.value.push(L);
    setListadoImagen(listadoImagenes.value);
  }

  const DeleteImagen = (newdato) => {
    itemsImagen.value = []
    for (let index = 0; index < listadoImagenes.value.length; index++) {
      if (newdato.id == listadoImagenes.value[index].id) {
        if (index == listadoImagenes.value.length - 1) {
          listadoImagenes.value.pop();
          break
        } else {
          listadoImagenes.value.splice(index, 1)
        }
      }
      itemsImagen.value.push(listadoImagenes.value[index])

    }
  }

  const EditImagen = (newdato) => {
    itemsImagen.value = [];
    for (let index = 0; index < listadoImagenes.value.length; index++) {
      if (newdato.id == listadoImagenes.value[index].id) {
        listadoImagenes.value[index] = newdato;
      }
      itemsImagen.value.push(listadoImagenes.value[index])
    }
  }

  const AddLotes = (L) => {
    listadoLotes.value.push(L);
    setListadoLotes(listadoLotes.value);
  }

  const DeleteLotes = (newdato) => {
    itemsLotes.value = []
    for (let index = 0; index < listadoLotes.value.length; index++) {
      if (newdato.id == listadoLotes.value[index].id) {
        if (index == listadoLotes.value.length - 1) {
          listadoLotes.value.pop();
          break
        } else {
          listadoLotes.value.splice(index, 1)
        }
      }
      itemsLotes.value.push(listadoLotes.value[index])

    }
  }

  const EditLotes = (newdato) => {
    itemsLotes.value = [];
    for (let index = 0; index < listadoLotes.value.length; index++) {
      if (newdato.id == listadoLotes.value[index].id) {
        listadoLotes.value[index] = newdato;
      }
      itemsLotes.value.push(listadoLotes.value[index])
    }
  }

  const AddOperaciones = (L) => {
    listadoOperaciones.value.push(L);
    setListadoOperaciones(listadoOperaciones.value);
  }

  const DeleteOperaciones = (newdato) => {
    itemsOperaciones.value = []
    for (let index = 0; index < listadoOperaciones.value.length; index++) {
      if (newdato.id == listadoOperaciones.value[index].id) {
        if (index == listadoOperaciones.value.length - 1) {
          listadoOperaciones.value.pop();
          break
        } else {
          listadoOperaciones.value.splice(index, 1)
        }
      }
      itemsOperaciones.value.push(listadoOperaciones.value[index])

    }
  }

  const EditOperaciones = (newdato) => {
    itemsOperaciones.value = [];
    for (let index = 0; index < listadoOperaciones.value.length; index++) {
      if (newdato.id == listadoOperaciones.value[index].id) {
        listadoOperaciones.value[index] = newdato;
      }
      itemsOperaciones.value.push(listadoOperaciones.value[index])
    }
  }

  const AddEtiquetaProducto = (L) => {
    listadoEtiquetasProductos.value.push(L);
    setListadoEtiquetasProductos(listadoEtiquetasProductos.value);
  }

  const DeleteEtiquetaProducto = (newdato) => {
    itemsEtiquetasProductos.value = []
    for (let index = 0; index < listadoEtiquetasProductos.value.length; index++) {
      if (newdato.id == listadoEtiquetasProductos.value[index].id) {
        if (index == listadoEtiquetasProductos.value.length - 1) {
          listadoEtiquetasProductos.value.pop();
          break
        } else {
          listadoEtiquetasProductos.value.splice(index, 1)
        }
      }
      itemsEtiquetasProductos.value.push(listadoEtiquetasProductos.value[index])

    }
  }

  const EditEtiquetaProducto = (newdato) => {
    itemsEtiquetasProductos.value = [];
    for (let index = 0; index < listadoEtiquetasProductos.value.length; index++) {
      if (newdato.id == listadoEtiquetasProductos.value[index].id) {
        listadoEtiquetasProductos.value[index] = newdato;
      }
      itemsEtiquetasProductos.value.push(listadoEtiquetasProductos.value[index])
    }
  }

  const AddMoneda = (L) => {
    listadoMonedas.value.push(L);
    setListadoMonedas(listadoMonedas.value);
  }

  const DeleteMoneda = (newdato) => {
    itemsMonedas.value = []
    for (let index = 0; index < listadoMonedas.value.length; index++) {
      if (newdato.id == listadoMonedas.value[index].id) {
        if (index == listadoMonedas.value.length - 1) {
          listadoMonedas.value.pop();
          break
        } else {
          listadoMonedas.value.splice(index, 1)
        }
      }
      itemsMonedas.value.push(listadoMonedas.value[index])

    }
  }

  const EditMoneda = (newdato) => {
    itemsMonedas.value = [];
    for (let index = 0; index < listadoMonedas.value.length; index++) {
      if (newdato.id == listadoMonedas.value[index].id) {
        listadoMonedas.value[index] = newdato;
      }
      itemsMonedas.value.push(listadoMonedas.value[index])
    }
  }

  const AddAuditoria = (L) => {
    listadoAuditorias.value.push(L);
    setListadoAuditorias(listadoAuditorias.value);
  }

  const AddEtiqueta = (L) => {
    listadoEtiquetas.value.push(L);
    setListadoEtiquetas(listadoEtiquetas.value);
  }

  const DeleteEtiqueta = (newdato) => {
    itemsEtiquetas.value = []
    for (let index = 0; index < listadoEtiquetas.value.length; index++) {
      if (newdato.id == listadoEtiquetas.value[index].id) {
        if (index == listadoEtiquetas.value.length - 1) {
          listadoEtiquetas.value.pop();
          break
        } else {
          listadoEtiquetas.value.splice(index, 1)
        }
      }
      itemsEtiquetas.value.push(listadoEtiquetas.value[index])
    }
  }

  const EditEtiqueta = (newdato) => {
    itemsEtiquetas.value = [];
    for (let index = 0; index < listadoEtiquetas.value.length; index++) {
      if (newdato.id == listadoEtiquetas.value[index].id) {
        listadoEtiquetas.value[index] = newdato;
      }
      itemsEtiquetas.value.push(listadoEtiquetas.value[index])
    }
  }

  const AddUbicaciones = (L) => {
    listadoUbicaciones.value.push(L);
    setListadoUbicaciones(listadoUbicaciones.value);
  }

  const DeleteUbicaciones = (newdato) => {
    itemsUbicaciones.value = []
    for (let index = 0; index < listadoUbicaciones.value.length; index++) {
      if (newdato.id == listadoUbicaciones.value[index].id) {
        if (index == listadoUbicaciones.value.length - 1) {
          listadoUbicaciones.value.pop();
          break
        } else {
          listadoUbicaciones.value.splice(index, 1)
        }
      }
      itemsUbicaciones.value.push(listadoUbicaciones.value[index])
    }
  }

  const EditUbicaciones = (newdato) => {
    itemsUbicaciones.value = [];
    for (let index = 0; index < listadoUbicaciones.value.length; index++) {
      if (newdato.id == listadoUbicaciones.value[index].id) {
        listadoUbicaciones.value[index] = newdato;
      }
      itemsUbicaciones.value.push(listadoUbicaciones.value[index])
    }
  }

  const AddArticulo = (L) => {
    listadoArticulos.value.push(L);
    setCantidadArticulos(cantidadArticulos.value + 1)
    setListadoArticulos(listadoArticulos.value);
  }

  const DeleteArticulo = (newdato) => {
    itemsArticulos.value = []
    setCantidadArticulos(cantidadArticulos.value - 1)
    for (let index = 0; index < listadoArticulos.value.length; index++) {
      if (newdato.id == listadoArticulos.value[index].id) {
        if (index == listadoArticulos.value.length - 1) {
          listadoArticulos.value.pop();
          break
        } else {
          listadoArticulos.value.splice(index, 1)
        }
      }
      itemsArticulos.value.push(listadoArticulos.value[index])
    }
  }

  const EditArticulo = (newdato) => {
    itemsArticulos.value = [];
    for (let index = 0; index < listadoArticulos.value.length; index++) {
      if (newdato.id == listadoArticulos.value[index].id) {
        listadoArticulos.value[index] = newdato;
      }
      itemsArticulos.value.push(listadoArticulos.value[index])
    }
  }

  const AddMagnitud = (L) => {
    listadoMagnitudes.value.push(L);
    setListadoMagnitud(listadoMagnitudes.value);
  }

  const DeleteMagnitud = (newdato) => {
    itemsMagnitudes.value = []
    for (let index = 0; index < listadoMagnitudes.value.length; index++) {
      if (newdato.id == listadoMagnitudes.value[index].id) {
        if (index == listadoMagnitudes.value.length - 1) {
          listadoMagnitudes.value.pop();
          break
        } else {
          listadoMagnitudes.value.splice(index, 1)
        }
      }
      itemsMagnitudes.value.push(listadoMagnitudes.value[index])
    }
  }

  const EditMagnitud = (newdato) => {
    itemsMagnitudes.value = [];
    for (let index = 0; index < listadoMagnitudes.value.length; index++) {
      if (newdato.id == listadoMagnitudes.value[index].id) {
        listadoMagnitudes.value[index] = newdato;
      }
      itemsMagnitudes.value.push(listadoMagnitudes.value[index])
    }
  }

  const AddMedida = (L) => {
    listadoMedida.value.push(L);
    setListadoMedidas(listadoMedida.value);
  }

  const EditMedida = (newdato) => {
    itemsMedidas.value = [];
    for (let index = 0; index < listadoMedida.value.length; index++) {
      if (newdato.id == listadoMedida.value[index].id) {
        listadoMedida.value[index] = newdato;
      }
      itemsMedidas.value.push(listadoMedida.value[index])
    }
  }

  const DeleteMedida = (newdato) => {
    itemsMedidas.value = []
    for (let index = 0; index < listadoMedida.value.length; index++) {
      if (newdato.id == listadoMedida.value[index].id) {
        if (index == listadoMedida.value.length - 1) {
          listadoMedida.value.pop();
          break
        } else {
          listadoMedida.value.splice(index, 1)
        }
      }
      itemsMedidas.value.push(listadoMedida.value[index])
    }
  }

  const getListadoProductos = () => {
    return listadoProductos;
  }

  const setListadoDepartamentos = (L) => {
    listadoDepartamentos.value = L;
    itemsDepartamentos.value = [];
    for (let index = 0; index < listadoDepartamentos.value.length; index++) {
      itemsDepartamentos.value.push(listadoDepartamentos.value[index])
    }
  }

  const getListadoDepartamentos = () => {
    return listadoDepartamentos;
  }

  const setListadoArticulos = (L) => {
    listadoArticulos.value = L;
    itemsArticulos.value = [];
    for (let index = 0; index < listadoArticulos.value.length; index++) {
      itemsArticulos.value.push(listadoArticulos.value[index])
    }
  }

  const getListadoArticulos = () => {
    return listadoArticulos;
  }

  const getListadoLotes = () => {
    return listadoLotes;
  }

  const setListadoSucursales = (L) => {
    listadoSucursales.value = L;
    itemsSucursales.value = [];
    for (let index = 0; index < listadoSucursales.value.length; index++) {
      itemsSucursales.value.push(listadoSucursales.value[index])
    }
  }

  const setListadoImagen = (L) => {
    listadoImagenes.value = L;
    itemsImagen.value = [];
    for (let index = 0; index < listadoImagenes.value.length; index++) {
      itemsImagen.value.push(listadoImagenes.value[index])
    }
  }

  const setListadoLotes = (L) => {
    listadoLotes.value = L;
    itemsLotes.value = [];
    for (let index = 0; index < listadoLotes.value.length; index++) {
      itemsLotes.value.push(listadoLotes.value[index])
    }
  }

  const setListadoOperaciones = (L) => {
    listadoOperaciones.value = L;
    itemsOperaciones.value = [];
    for (let index = 0; index < listadoOperaciones.value.length; index++) {
      itemsOperaciones.value.push(listadoOperaciones.value[index])
    }
  }

  const setListadoEtiquetasProductos = (L) => {
    listadoEtiquetasProductos.value = L;
    itemsEtiquetasProductos.value = [];
    for (let index = 0; index < listadoEtiquetasProductos.value.length; index++) {
      itemsEtiquetasProductos.value.push(listadoEtiquetasProductos.value[index])
    }
  }

  const setListadoMonedas = (L) => {
    listadoMonedas.value = L;
    itemsMonedas.value = [];
    for (let index = 0; index < listadoMonedas.value.length; index++) {
      itemsMonedas.value.push(listadoMonedas.value[index])
    }
  }

  const setListadoAuditorias = (L) => {
    listadoAuditorias.value = L;
    itemsAuditorias.value = [];
    for (let index = 0; index < listadoAuditorias.value.length; index++) {
      itemsAuditorias.value.push(listadoAuditorias.value[index])
    }
  }

  const getListadoSucursales = () => {
    return listadoSucursales;
  }

  const setListadoMedidas = (L) => {
    listadoMedida.value = L;
    itemsMedidas.value = [];
    for (let index = 0; index < listadoMedida.value.length; index++) {
      itemsMedidas.value.push(listadoMedida.value[index])
    }
  }

  const getListadoMedidas = () => {
    return listadoMedida;
  }

  const setListadoUbicaciones = (L) => {
    listadoUbicaciones.value = L;
    itemsUbicaciones.value = [];
    for (let index = 0; index < listadoUbicaciones.value.length; index++) {
      itemsUbicaciones.value.push(listadoUbicaciones.value[index])
    }
  }

  const getListadoUbicaciones = () => {
    return listadoUbicaciones;
  }

  const setListadoEtiquetas = (L) => {
    listadoEtiquetas.value = L;
    itemsEtiquetas.value = [];
    for (let index = 0; index < listadoEtiquetas.value.length; index++) {
      itemsEtiquetas.value.push(listadoEtiquetas.value[index])
    }
  }

  const getListadoEtiquetas = () => {
    return listadoEtiquetas;
  }

  const setListadoMagnitud = (L) => {
    listadoMagnitudes.value = L;
    itemsMagnitudes.value = [];
    for (let index = 0; index < listadoMagnitudes.value.length; index++) {
      itemsMagnitudes.value.push(listadoMagnitudes.value[index])
    }

  }

  const getListadoMagnitud = () => {
    return listadoMagnitudes;
  }

  const getProductos = () => {
    return formProductos;
  }

  const formArticulo = reactive({
    // id: 0,
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

  const setArticulos = (data) => {
    formArticulo.data.attributes.articulo = data.articulo;
    formArticulo.data.attributes.descripcion = data.descripcion;
    formArticulo.data.attributes.observacion = data.observacion;
    formArticulo.data.attributes.departamento_id = data.departamento_id;
    formArticulo.data.attributes.medida_id = data.medida_id;
  }

  const getArticulos = () => {
    return formArticulo;
  }

  const formDepartamentos = reactive({
    // id: 0,
    data: {
      attributes: {
        departamento: "",
        descripcion: "",
        observacion: "",
      }
    }
  })

  const setDepartamento = (data) => {
    formDepartamentos.data.attributes.departamento = data.departamento;
    formDepartamentos.data.attributes.descripcion = data.descripcion;
    formDepartamentos.data.attributes.observacion = data.observacion;
  }

  const getDepartamento = () => {
    return formDepartamentos;
  }

  return {
    cantidadProductos, setCantidadProductos,
    cantidadArticulos, setCantidadArticulos,
    cantidadDepartamentos, setCantidadDepartamentos,
    formProductos, formArticulo, formMoneda, formDepartamentos, formMagnitud, formMedida, formLotes,
    setProductos, getProductos, setArticulos, getArticulos, setDepartamento, getDepartamento,
    setListadoArticulos, setListadoLotes, setListadoEtiquetasProductos, setListadoDepartamentos, setListadoEtiquetas, setListadoMedidas, setListadoMonedas, setListadoMagnitud, setListadoProductos,
    setListadoSucursales, setListadoUbicaciones, getListadoArticulos, getListadoLotes, getListadoDepartamentos, getListadoEtiquetas, getListadoMagnitud,
    getListadoMedidas, getListadoProductos, getListadoSucursales, getListadoUbicaciones,
    esperandoArticulos, esperandoDepartamentos, esperandoLotes, itemsLotes, itemsMonedas, esperandoProductos, esperandoMedidas, esperandoEtiquetas, esperandoAuditoria, esperandoMagnitudes, esperandoSucursales, esperandoUbicaciones, loadingP, loadingA, loadingD, loadingE, loadingM, loadingMe, loadingS, loadingUb,
    itemsProductos, itemsDepartamentos, itemsMagnitudes, itemsArticulos, itemsEtiquetas, itemsUbicaciones, itemsMedidas, itemsSucursales, itemsEtiquetasProductos, listadoEtiquetasProductos,
    cambiaEstado, AddMagnitud, AddProductos, EditProductos, AddMoneda, DeleteMoneda, EditMoneda, DeleteMagnitud, AddAuditoria, DeleteProducto, AddMedida, AddLotes, DeleteMedida, EditLotes, EditMagnitud, EditMedida, AddDepartamento, DeleteDepartamento, EditDepartamento,
    AddArticulo, DeleteArticulo, EditArticulo, AddSucursal, DeleteSucursal, DeleteLotes, EditEtiquetaProducto, DeleteEtiquetaProducto, AddEtiquetaProducto, EditSucursal, AddUbicaciones, DeleteUbicaciones, EditUbicaciones, AddImagen, setListadoImagen, DeleteImagen, EditImagen, formSucursal, formUbicaciones,
    AddEtiqueta, EditEtiqueta, DeleteEtiqueta, formEtiqueta, setListadoEtiquetas, nextIDArticulo, nextIDProducto, nextIDDepartamento, nextIDEtiqueta, formEtiquetaProducto,
    nextIDMagnitud, nextIDMedida, nextIDSucursal, nextIDUbicacion, nextIDMinimos, id, collapsed, collapsed2, activa, activa2, show, show2, NewlistadoAgregar, formImagenes, itemsImagen, formImagen, serecargo, limpiarDatos, formInventario, itemsAuditorias, listadoAuditorias, setListadoAuditorias, setListadoOperaciones, AddOperaciones, EditOperaciones, DeleteOperaciones, itemsOperaciones, listadoOperaciones
  }
}, {
  persist: true
})

// Reset store
export default function storeReset({ store }) {
  const inicializar = cloneDeep(store.$state);
  store.$reset = () => store.$patch(cloneDeep(inicializar));
}

