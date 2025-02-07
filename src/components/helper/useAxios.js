import axios from 'axios';
// import { error } from 'jquery';
const cache = new Map;
const endpointP = [];
const endpointA = [];
const endpointD = [];
const endpointS = [];
const endpointU = [];
const endpointE = [];
const endpointL = [];
const endpointM = [];
const endpointMa = [];
const endpointMo = [];
const endpointMi = [];
const endpointI = [];
const endpointIn = [];
const endpointEp = [];
const endpointOp = [];
const endpointPe = [];

// Nube
export const urlAuditoria = "http://www.twintechnology.cu/inventory/api";
export const url = "http://www.twintechnology.cu/inventory/api/inventario";
export const urlImagen = "http://www.twintechnology.cu/inventory/api/imagen/producto_imagenes";
export const urlPersonas = urlAuditoria + "/autenticacion/";

// Local
// export const url = "http://localhost/inventory/api/inventario";
// export const urlAuditoria = "http://localhost/inventory/api";
// export const urlPersonas = urlAuditoria + "/autenticacion/";
// export const urlImagen = "http://localhost/inventory/api/inventario/productos";

// const urlUploadImagen = "http://www.twintechnology.cu/inventory/api/imagen/producto_imagenes/upload";

const axiosInstance = axios.create({
  baseURL: url,
  timeout: 5000,
  // headers: {
  //   'Access-Control-Allow-Origin': '*',
  //   'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE',
  //   'Content-type': 'application/json',
  //   'Access-Control-Allow-Credentials': 'true',
  //   'Access-Control-Allow-Headers': 'origin, content-Type, accept',
  //   'Cache-control': 'no-cache, private'
  // }
});

const axiosInstanceA = axios.create({
  baseURL: urlAuditoria,
  timeout: 5000,
  // headers: {
  //   'Access-Control-Allow-Origin': '*',
  //   'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE',
  //   'Content-type': 'application/json',
  //   'Access-Control-Allow-Credentials': 'true',
  //   'Access-Control-Allow-Headers': 'origin, content-Type, accept',
  //   'Cache-control': 'no-cache, private'
  // }
});

// Obtener datos
export async function obtenerDatos(n) {
  switch (n) {
    case 1:
      // if (cache.has(endpointP)) {
      //   return cache.get(endpointP);
      // }
      try {
        const response = await axiosInstance.get('/productos');
        // cache.set(endpointP, response.data.data);
        return response.data.data;
      } catch (error) {
        // throw error;
        return error;
      }
      break;
    case 2:
      // if (cache.has(endpointS)) {
      //   return cache.get(endpointS);
      // }
      try {
        const response = await axiosInstance.get('/sucursales');
        // cache.set(endpointS, response.data.data);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 3:
      // if (cache.has(endpointM)) {
      //   return cache.get(endpointM);
      // }
      try {
        const response = await axiosInstance.get('/medidas');
        // cache.set(endpointM, response.data.data);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 4:
      // if (cache.has(endpointMa)) {
      //   return cache.get(endpointMa);
      // }
      try {
        const response = await axiosInstance.get('/magnitudes');
        // cache.set(endpointMa, response.data.data);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 5:
      // if (cache.has(endpointA)) {
      //   return cache.get(endpointA);
      // }
      try {
        const response = await axiosInstance.get('/articulos');
        // cache.set(endpointA, response.data.data);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 6:
      // if (cache.has(endpointD)) {
      //   return cache.get(endpointD);
      // }
      try {
        const response = await axiosInstance.get('/departamentos');
        // cache.set(endpointD, response.data.data);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 7:
      // if (cache.has(endpointU)) {
      //   return cache.get(endpointU);
      // }
      try {
        const response = await axiosInstance.get('/ubicaciones');
        // cache.set(endpointU, response.data.data);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 8:
      // if (cache.has(endpointE)) {
      //   return cache.get(endpointE);
      // }
      try {
        const response = await axiosInstance.get('/etiquetas');
        // cache.set(endpointE, response.data.data);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 9:
      // if (cache.has(endpointMi)) {
      //   return cache.get(endpointMi);
      // }
      try {
        const response = await axiosInstance.get('/minimos');
        // cache.set(endpointMi, response.data.data);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 10:
      // if (cache.has(endpointL)) {
      //   return cache.get(endpointL);
      // }
      try {
        const response = await axiosInstance.get('/lotes');
        // cache.set(endpointL, response.data.data);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 11:
      // if (cache.has(endpointMo)) {
      //   return cache.get(endpointMo);
      // }
      try {
        const response = await axiosInstance.get('/monedas');
        // cache.set(endpointMo, response.data.data);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 12:
      // if (cache.has(endpointI)) {
      //   return cache.get(endpointI);
      // }
      try {
        const response = await axios.get(urlImagen);
        // cache.set(endpointI, response.data.data);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 13:
      // if (cache.has(endpointEp)) {
      //   return cache.get(endpointEp);
      // }
      try {
        const response = await axiosInstance.get('/etiqueta_productos');
        // cache.set(endpointEp, response.data.data);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 14:
      // if (cache.has(endpointPe)) {
      //   return cache.get(endpointPe);
      // }
      try {
        const response = await axios.get(urlPersonas + 'personas');
        // cache.set(endpointPe, response.data.data);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 15:
      // if (cache.has(endpointIn)) {
      //   return cache.get(endpointIn);
      // }
      try {
        const response = await axiosInstanceA.get('/auditoria/inventario');
        // cache.set(endpointIn, response.data.data);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 16:
      // if (cache.has(endpointOp)) {
      //   return cache.get(endpointOp);
      // }
      try {
        const response = await axiosInstance.get('/operaciones');
        // cache.set(endpointOp, response.data.data);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 17:
      // if (cache.has(endpointPe)) {
      //   return cache.get(endpointPe);
      // }
      try {
        const response = await axios.get(urlPersonas + 'passwords');
        // cache.set(endpointPe, response.data.data);
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

// export async function GuardarMinimos(datos) {
//   try {
//     const response = await axiosInstance.post('/minimos', datos);
//     return response.data.data;
//   } catch (error) {
//     throw error;
//   }
// }

// Insertar datos
export async function GuardarDatos(datos, n, i) {
  switch (n) {
    case 1:
      try {
        const response = await axiosInstance.post('/productos', datos);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 2:
      try {
        const response = await axiosInstance.post('/sucursales', datos);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 3:
      try {
        const response = await axiosInstance.post('/medidas', datos);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 4:
      try {
        const response = await axiosInstance.post('/magnitudes', datos);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 5:
      try {
        const response = await axiosInstance.post('/articulos', datos);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 6:
      try {
        const response = await axiosInstance.post('/departamentos', datos);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 7:
      try {
        const response = await axiosInstance.post('/ubicaciones', datos);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 8:
      try {
        const response = await axiosInstance.post('/etiquetas', datos);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 9:
      try {
        const response = await axiosInstance.post('/minimos', datos);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 10:
      try {
        const response = await axiosInstance.post('/lotes', datos);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 11:
      try {
        const response = await axiosInstance.post('/monedas', datos);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 12:
      try {
        const response = await axios.post(urlImagen, datos);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 13:
      try {
        const response = await axiosInstance.post('/etiqueta_producto', datos);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 14:
      try {
        // /inventario/lots/1?function[name]=ajustar_cantidad
        // console.log(i)
        const response = await axiosInstanceA.patch(`/inventario/lots/${i}?function[name]=ajustar_cantidad`, datos);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 15:
      try {
        const response = await axiosInstance.post('/personas', datos);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    default:
      break;
  }
}

// Insertar conjunto de datos
export async function GuardarColecciones(datos, n) {
  // console.log(datos)
  switch (n) {
    case 1:
      try {
        const response = await axiosInstance.post('/productos', datos);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 2:
      try {
        const response = await axiosInstance.post('/sucursales', datos);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 3:
      try {
        const response = await axiosInstance.post('/medidas', datos);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 4:
      try {
        const response = await axiosInstance.post('/magnitudes', datos);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 5:
      try {
        // console.log(datos);
        const response = await axiosInstance.post('/articulos', datos);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 6:
      try {
        const response = await axiosInstance.post('/departamentos', datos);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 7:
      try {
        const response = await axiosInstance.post('/ubicaciones', datos);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 8:
      try {
        const response = await axiosInstance.post('/etiquetas', datos);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 9:
      try {
        const response = await axiosInstance.post('/lotes', datos);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 10:
      try {
        const response = await axiosInstance.post('/monedas', datos);
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
        const response = await axiosInstance.delete(`${url}/productos/${id}`);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 2:
      try {
        const response = await axiosInstance.delete(`${url}/sucursales/${id}`);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 3:
      try {
        const response = await axiosInstance.delete(`${url}/medidas/${id}`);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 4:
      try {
        const response = await axiosInstance.delete(`${url}/magnitudes/${id}`);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 5:
      try {
        const response = await axiosInstance.delete(`${url}/articulos/${id}`);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 6:
      try {
        const response = await axiosInstance.delete(`${url}/departamentos/${id}`);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 7:
      try {
        const response = await axiosInstance.delete(`${url}/ubicaciones/${id}`);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 8:
      try {
        const response = await axiosInstance.delete(`${url}/etiquetas/${id}`);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 9:
      try {
        const response = await axiosInstance.delete(`${url}/lotes/${id}`);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 10:
      try {
        const response = await axiosInstance.delete(`${url}/monedas/${id}`);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 11:
      try {
        const response = await axios.delete(`${urlImagen}/${id}`);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 12:
      try {
        const response = await axiosInstance.delete(`${url}/etiqueta_productos/${id}`);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    default:
      break;
  }
}

export async function subirImagen(id, imagen) {
  try {
    // console.log(imagen)
    const response = axiosInstance.post(`/productos/${id}?function[name]=upload_image`, imagen, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response
  } catch (error) {
    throw error;
  }
}

export async function ActualizarImagen(id, imagen) {
  try {
    // console.log(imagen)
    const response = axiosInstance.post(`/productos/${id}?function[name]=update_image`, imagen, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response
  } catch (error) {
    throw error;
  }
}

export async function Delete_Imagen(id) {
  try {
    // console.log(imagen)
    const response = axiosInstance.post(`/productos/${id}?function[name]=delete_image`);
    return response
  } catch (error) {
    throw error;
  }
}

// Editar datos
export async function EditarDatos(id, datos, n) {
  // console.log(datos)
  switch (n) {
    case 1:
      try {
        // console.log(datos)
        const response = await axiosInstance.patch(`${url}/productos/${id}`, datos);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 2:
      try {
        const response = await axiosInstance.patch(`${url}/sucursales/${id}`, datos);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 3:
      try {
        const response = await axiosInstance.patch(`${url}/medidas/${id}`, datos);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 4:
      try {

        const response = await axiosInstance.patch(`${url}/magnitudes/${id}`, datos);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 5:
      try {
        const response = await axiosInstance.patch(`${url}/articulos/${id}`, datos);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 6:
      try {
        const response = await axiosInstance.patch(`${url}/departamentos/${id}`, datos);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 7:
      try {
        const response = await axiosInstance.patch(`${url}/ubicaciones/${id}`, datos);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 8:
      try {
        const response = await axiosInstance.patch(`${url}/etiquetas/${id}`, datos);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 9:
      try {
        const dato = await obtenerDatos(9);
        // console.log(datos)
        for (let index = 0; index < dato.length; index++) {
          const element = dato[index].meta.foreign_keys_instances.producto_id;
          if (element == id) {
            // console.log(dato[index].id)
            // const response = await axiosInstance.patch(`${url}minimos/${dato[index].id}`, datos);
            // return response.data.data;
            break;
          }
        }

      } catch (error) {
        throw error;
      }
      break;
    case 10:
      try {
        const response = await axiosInstance.patch(`${url}/lotes/${id}`, datos);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 11:
      try {
        const response = await axiosInstance.patch(`${url}/monedas/${id}`, datos);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 12:
      try {
        const dato = await obtenerDatos(13);
        // console.log(dato)
        const response = await axiosInstance.patch(`${url}/etiqueta_productos/${id}`, datos);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 13:
      try {
        const response = await axiosInstance.patch(`${url}/personas/${id}`, datos);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    default:
      break;
  }

}
