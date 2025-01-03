import axios from 'axios';
import { cantidadArticulos, cantidadProductos, disabledMagnitud, disabledProductos, esperandoArticulos, esperandoDepartamentos, esperandoProductos, itemsArticulos, itemsProductos, itemsUbicaciones, listadoArticulos, listadoDepartamentos, listadoProductos, listadoUbicaciones, loadingA, loadingD, loadingM, loadingP } from '../controler/ControlerApp';

const url = "https://localhost/fullstack/public/inventario/";

const apiService = axios.create({
  baseURL: url,
  timeout: 5000,
});

const cache = new Map();

// watchEffect(listadoProductos, () => {
//   cantidadProductos.value = listadoProductos.value.length;
//   almacenDatosProductos(listadoProductos.value)
//   console.log("Cargado los productos");
// })

export const obtenerProductos = () => {
  let i = 0;
  itemsProductos.value = [];
  for (let index = 0; index < listadoProductos.value.length; index++) {
    itemsProductos.value.push(listadoProductos.value[index])
  }

}

export const obtenerArticulos = () => {
  let i = 0;
  itemsArticulos.value = [];
  for (let index = 0; index < listadoArticulos.value.length; index++) {
    itemsArticulos.value.push(listadoArticulos.value[index])
  }

}

// const obtenerDepartamentos = () => {
//   let i = 0;
//   itemsDepartamentos.value = [];
//   // console.log(listadoDepartamentos.value)
//   for (let index = 0; index < listadoDepartamentos.value.length; index++) {
//     itemsDepartamentos.value.push(listadoDepartamentos.value[index])
//   }
//   // console.log(itemsDepartamentos.value)

// }

export const obtenerUbicaciones = () => {
  let i = 0;
  itemsUbicaciones.value = [];
  for (let index = 0; index < listadoUbicaciones.value.length; index++) {
    itemsUbicaciones.value.push(listadoUbicaciones.value[index])
  }

}


// Obtener datos
export async function obtenerDatos(n) {
  switch (n) {
    case 1:
      try {
        esperandoProductos.value = true;
        loadingP.value = true;
        disabledProductos.value = 'disabled';
        const response = await axios.get(url + 'productos');
        almacenDatosProductos(response.data.data)
        // obtenerProductos();
        localStorage.setItem("Carg_datP", "1")
        esperandoProductos.value = false;
        loadingP.value = false;
        disabledProductos.value = '';
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 2:
      try {

        const response = await axios.get(url + 'sucursales');
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 3:
      try {
        const response = await axios.get(url + 'medidas');
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 4:
      try {
        loadingM.value = true;
        disabledMagnitud.value = 'disabled'
        const response = await axios.get(url + 'magnitudes');
        almacenDatosMagnitudes(response.data.data)
        loadingM.value = false;
        disabledMagnitud.value = ''
        localStorage.setItem("Carg_datM", "1")
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 5:
      try {
        esperandoArticulos.value = true;
        loadingA.value = true;
        const response = await axios.get(url + 'articulos');
        // console.log(response.data.data)
        almacenDatosArticulos(response.data.data);
        // obtenerArticulos();
        localStorage.setItem("Carg_datA", "1")
        // listadoArticulos.value = response.data.data;
        // cantidadArticulos.value = response.data.data.length;
        esperandoArticulos.value = false;
        loadingA.value = false;
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 6:
      try {
        esperandoDepartamentos.value = true;
        loadingD.value = true;
        const response = await axios.get(url + 'departamentos');
        almacenDatosDepartamentos(response.data.data);
        // obtenerDepartamentos();
        localStorage.setItem("Carg_datD", "1")
        esperandoDepartamentos.value = false;
        loadingD.value = false;
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 7:
      try {
        const response = await axios.get(url + 'ubicaciones');
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    default:
      break;
  }
}

export async function fecthData(endpoint) {
  if (cache.has(endpoint)) {
    return cache.get(endpoint);
  }

  try {
    const response = await apiService.get(endpoint);
    cache.set(endpoint, response.data.data);
    return response.data.data;
  } catch (error) {
    console.error("Error en la solicitud:", error);
    throw error;
  }
}

// 1- productos
// 2- sucursales
// 3- unidades de medidas
// 4- magnitudes
// 5- articulos
// 6- departamentos
// 7- ubicaciones

// Insertar datos
export async function GuardarDatos(datos, n) {
  switch (n) {
    case 1:
      try {
        const response = await axios.post(url + 'productos', datos);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 2:
      try {
        const response = await axios.post(url + 'sucursales', datos);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 3:
      try {
        const response = await axios.post(url + 'medidas', datos);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 4:
      try {
        const response = await axios.post(url + 'magnitudes', datos);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 5:
      try {
        const response = await axios.post(url + 'articulos', datos);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 6:
      try {
        const response = await axios.post(url + 'departamentos', datos);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 7:
      try {
        const response = await axios.post(url + 'ubicaciones', datos);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    default:
      break;
  }
}

// Eliminar datos
export async function EliminarDatos(id, n) {
  switch (n) {
    case 1:
      try {
        const response = await axios.delete(`${url}productos/${id}`);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 2:
      try {
        const response = await axios.delete(`${url}sucursales/${id}`);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 3:
      try {
        const response = await axios.delete(`${url}medidas/${id}`);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 4:
      try {
        const response = await axios.delete(`${url}magnitudes/${id}`);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 5:
      try {
        const response = await axios.delete(`${url}articulos/${id}`);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 6:
      try {
        const response = await axios.delete(`${url}departamentos/${id}`);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 7:
      try {
        const response = await axios.delete(`${url}ubicaciones/${id}`);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    default:
      break;
  }
}

// Almacenar datos
export const almacenDatosProductos = (Lista) => {
  localStorage.removeItem('ListadoCacheProductos');
  const parsed = JSON.stringify(Lista);
  localStorage.setItem('ListadoCacheProductos', parsed);
}

export const almacenDatosSucursales = (Lista) => {
  localStorage.removeItem('ListadoCacheSucursal');
  const parsed = JSON.stringify(Lista);
  localStorage.setItem('ListadoCacheSucursal', parsed);
}

export const almacenDatosDepartamentos = (Lista) => {
  localStorage.removeItem('ListadoCacheDepartamentos');
  const parsed = JSON.stringify(Lista);
  localStorage.setItem('ListadoCacheDepartamentos', parsed);
  // obtenerDepartamentos();
}

export const almacenDatosArticulos = (Lista) => {
  localStorage.removeItem('ListadoCacheArticulos');
  const parsed = JSON.stringify(Lista);
  localStorage.setItem('ListadoCacheArticulos', parsed);
}

export const almacenDatosMagnitudes = (Lista) => {
  localStorage.removeItem('ListadoCacheMagnitudes');
  const parsed = JSON.stringify(Lista);
  localStorage.setItem('ListadoCacheMagnitudes', parsed);
}

export const almacenDatosUnidades = (Lista) => {
  localStorage.removeItem('ListadoCacheUnidades');
  const parsed = JSON.stringify(Lista);
  localStorage.setItem('ListadoCacheUnidades', parsed);
}

export const almacenDatosUbicaciones = (Lista) => {
  localStorage.removeItem('ListadoCacheUbicaciones');
  const parsed = JSON.stringify(Lista);
  localStorage.setItem('ListadoCacheUbicaciones', parsed);
}

export const almacenDatosEtiquetas = (Lista) => {
  localStorage.removeItem('ListadoCacheEtiquetas');
  const parsed = JSON.stringify(Lista);
  localStorage.setItem('ListadoCacheEtiquetas', parsed);
}

// export default fecthData;
