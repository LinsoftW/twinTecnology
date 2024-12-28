import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';

export const useStoreAxios = defineStore('StoreAxios', () => {

  const ipPublica = ref('localhost');
  const actualiza = ref(false);
  const esperandoProductos = ref(false);
  const esperandoDepartamentos = ref(false);
  const esperandoArticulos = ref(false);
  const esperandoMedidas = ref(false);
  const esperandoSucursales = ref(false);
  const esperandoUbicaciones = ref(false);
  const esperandoMagnitudes = ref(false);
  const esperandoEtiquetas = ref(false);
  const listadoDepartamentos = ref([]);
  const listadoArticulos = ref([]);
  const listadoProductos = ref([]);
  const listadoMedida = ref([]);
  const listadoSucursales = ref([]);
  const listadoUbicaciones = ref([]);
  const listadoMagnitudes = ref([]);
  const listadoEtiquetas = ref([]);
  const itemsProductos = ref([])
  const itemsArticulos = ref([])
  const itemsDepartamentos = ref([])
  const itemsMagnitudes = ref([])
  const itemsMedidas = ref([])
  const itemsUbicaciones = ref([])
  const itemsSucursales = ref([])
  const itemsEtiquetas = ref([])
  const loadingP = ref(false) // Productos
  const loadingD = ref(false) // Departamentos
  const loadingA = ref(false) // Articulos
  const loadingS = ref(false) // Sucursales
  const loadingMe = ref(false) // Unidades medida
  const loadingM = ref(false) // Magnitudes
  const loadingUb = ref(false) // Ubicaciones
  const loadingE = ref(false) // Etiquetas
  const disabledProductos = ref('')
  const disabledMagnitud = ref('');
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
      default:
        break;
    }
  }

  const formProductos = reactive({
    data: {
      attributes: {
        descripcion: "",
        observacion: "",
        cantidad: 0,
        articulo_id: 99,
        ubicacion_id: 0
      }
    }
  })

  //Magnitudes
  const formMagnitud = reactive({
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
    formProductos.data.attributes.cantidad = data.cantidad;
    formProductos.data.attributes.articulo_id = data.articulo_id;
    formProductos.data.attributes.ubicacion_id = data.ubicacion_id;
  }

  const setListadoProductos = (L) => {
    listadoProductos.value = L;
    itemsProductos.value = [];
    for (let index = 0; index < listadoProductos.value.length; index++) {
      itemsProductos.value.push(listadoProductos.value[index])
    }
  }

  const AddProductos = (L) => {
    listadoProductos.value.push(L);
    setCantidadProductos(cantidadProductos.value-1)
    setListadoProductos(listadoProductos.value);
  }

  const DeleteProducto = (newdato) => {
    setCantidadProductos(cantidadProductos.value-1)
    for (let index = 0; index < listadoProductos.value.length; index++) {
      if (newdato.id == listadoProductos.value[index].id) {
        listadoProductos.value.splice(index, 1)
      }
      itemsProductos.value.push(listadoProductos.value[index])
    }
  }

  const AddDepartamento = (L) => {
    listadoDepartamentos.value.push(L);
    setCantidadDepartamentos(cantidadDepartamentos.value+1)
    setListadoDepartamentos(listadoDepartamentos.value);
  }

  const DeleteDepartamento = (newdato) => {
    itemsDepartamentos.value = []
    setCantidadDepartamentos(cantidadDepartamentos.value-1)
    for (let index = 0; index < listadoDepartamentos.value.length; index++) {
      if (newdato.id == listadoDepartamentos.value[index].id) {
        listadoDepartamentos.value.splice(index, 1)
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

  const AddArticulo = (L) => {
    listadoArticulos.value.push(L);
    setCantidadArticulos(cantidadArticulos.value+1)
    setListadoArticulos(listadoArticulos.value);
  }

  const DeleteArticulo = (newdato) => {
    itemsArticulos.value = []
    setCantidadArticulos(cantidadArticulos.value-1)
    for (let index = 0; index < listadoArticulos.value.length; index++) {
      if (newdato.id == listadoArticulos.value[index].id) {
        listadoArticulos.value.splice(index, 1)
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
        listadoMagnitudes.value.splice(index, 1)
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
        listadoMedida.value.splice(index, 1)
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

  const setListadoSucursales = (L) => {
    listadoSucursales.value = L;
    itemsSucursales.value = [];
    for (let index = 0; index < listadoSucursales.value.length; index++) {
      itemsSucursales.value.push(listadoSucursales.value[index])
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
    formProductos, formArticulo, formDepartamentos, formMagnitud, formMedida,
    setProductos, getProductos, setArticulos, getArticulos, setDepartamento, getDepartamento,
    setListadoArticulos, setListadoDepartamentos, setListadoEtiquetas, setListadoMedidas, setListadoMagnitud, setListadoProductos,
    setListadoSucursales, setListadoUbicaciones, getListadoArticulos, getListadoDepartamentos, getListadoEtiquetas, getListadoMagnitud,
    getListadoMedidas, getListadoProductos, getListadoSucursales, getListadoUbicaciones,
    esperandoArticulos, esperandoDepartamentos, esperandoProductos, esperandoMedidas, esperandoEtiquetas, esperandoMagnitudes, esperandoSucursales, esperandoUbicaciones, loadingP, loadingA, loadingD, loadingE, loadingM, loadingMe, loadingS, loadingUb,
    itemsProductos, itemsDepartamentos, itemsMagnitudes, itemsArticulos, itemsEtiquetas, itemsUbicaciones, itemsMedidas, itemsSucursales,
    cambiaEstado, AddMagnitud, AddProductos, DeleteMagnitud, DeleteProducto, AddMedida, DeleteMedida, EditMagnitud, EditMedida, AddDepartamento, DeleteDepartamento, EditDepartamento,
    AddArticulo, DeleteArticulo, EditArticulo
  }
})
