import axios from 'axios';

// const url = "http://localhost/inventary/api/inventario/";
const url = "http://www.twintechnology.cu/inventario/";

const axiosInstance = axios.create({
  baseURL: url,
  // timeout: 5000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json',
    'Access-Control-Allow-Credentials': 'true',
    'Cache-control': 'no-cache, private'
  }
});

var config = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE',
    'Content-type': 'application/json',
    // 'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Headers': 'origin, content-Type, accept',
    'Cache-control': 'no-cache, private'
  },
  // OPTIONS: {
  //   'Access-Control-Allow-Origin': '*',
  //   'Access-Control-Allow-Headers': 'origin, content-Type, accept',
  //   'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
  //   'Access-Control-Allow-Credentials': 'true'
  // }
};

// Obtener datos
export async function obtenerDatos(n) {
  switch (n) {
    case 1:
      try {
        // axiosInstance.get('productos')
        //   .then(response => {
        //     console.log(response.data);
        //     return response.data.data;
        //   })
        //   .catch(error => {
        //     console.error('Hubo un error!', error);
        //   });
        const response = await axios.get(url + 'productos', config);
        // console.log(response)
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
        const response = await axios.get(url + 'magnitudes');
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 5:
      try {
        const response = await axios.get(url + 'articulos');
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 6:
      try {
        const response = await axios.get(url + 'departamentos');
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
    case 8:
      try {
        const response = await axios.get(url + 'etiquetas');
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 9:
      try {
        const response = await axios.get(url + 'minimos');
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

export async function GuardarMinimos(datos) {
  try {
    const response = await axios.post(url + 'minimos', datos);
    return response.data.data;
  } catch (error) {
    throw error;
  }
}

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
    case 8:
      try {
        const response = await axios.post(url + 'etiquetas', datos);
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
        console.log(datos);
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
    case 8:
      try {
        const response = await axios.post(url + 'etiquetas', datos);
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
    case 8:
      try {
        const response = await axios.delete(`${url}etiquetas/${id}`);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    default:
      break;
  }
}

// Editar datos
export async function EditarDatos(id, datos, n) {
  switch (n) {
    case 1:
      try {
        // console.log(datos)
        const response = await axios.patch(`${url}productos/${id}`, datos);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 2:
      try {
        const response = await axios.patch(`${url}sucursales/${id}`, datos);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 3:
      try {
        const response = await axios.patch(`${url}medidas/${id}`, datos);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 4:
      try {

        const response = await axios.patch(`${url}magnitudes/${id}`, datos);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 5:
      try {
        const response = await axios.patch(`${url}articulos/${id}`, datos);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 6:
      try {
        const response = await axios.patch(`${url}departamentos/${id}`, datos);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 7:
      try {
        const response = await axios.patch(`${url}ubicaciones/${id}`, datos);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 8:
      try {
        const response = await axios.patch(`${url}etiquetas/${id}`, datos);
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 9:
      try {
        const dato = await obtenerDatos(9);
        console.log(datos)
        for (let index = 0; index < dato.length; index++) {
          const element = dato[index].meta.foreign_keys_instances.producto_id;
          if (element == id) {
            console.log(dato[index].id)
            // const response = await axios.patch(`${url}minimos/${dato[index].id}`, datos);
            // return response.data.data;
            break;
          }
        }

      } catch (error) {
        throw error;
      }
      break;
    default:
      break;
  }
}
