import axios from 'axios';

// const url = "http://localhost/inventary/api/inventario";
const url = "http://www.twintechnology.cu/inventary/api/inventario";

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

// Obtener datos
export async function obtenerDatos(n) {
  switch (n) {
    case 1:
      try {
        const response = await axiosInstance.get('/productos');
        // console.log(response)
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 2:
      try {
        const response = await axiosInstance.get('/sucursales');
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 3:
      try {
        const response = await axiosInstance.get('/medidas');
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 4:
      try {
        const response = await axiosInstance.get('/magnitudes');
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 5:
      try {
        const response = await axiosInstance.get('/articulos');
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 6:
      try {
        const response = await axiosInstance.get('/departamentos');
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 7:
      try {
        const response = await axiosInstance.get('/ubicaciones');
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 8:
      try {
        const response = await axiosInstance.get('/etiquetas');
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 9:
      try {
        const response = await axiosInstance.get('/minimos');
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 10:
      try {
        const response = await axiosInstance.get('/lotes');
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 11:
      try {
        const response = await axiosInstance.get('/monedas');
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
export async function GuardarDatos(datos, n) {
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
    default:
      break;
  }
}

// Insertar conjunto de datos
export async function GuardarColecciones(datos, n) {
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
    default:
      break;
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
        console.log(datos)
        for (let index = 0; index < dato.length; index++) {
          const element = dato[index].meta.foreign_keys_instances.producto_id;
          if (element == id) {
            console.log(dato[index].id)
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
    default:
      break;
  }
}
