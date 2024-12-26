import axios from 'axios';

const url = "https://localhost/fullstack/public/";

const apiService = axios.create({
  baseURL: url,
  timeout: 5000,
});

const cache = new Map();

// Obtener datos
export async function obtenerDatos(n) {
  switch (n) {
    case 1:
      try {
        const response = await axios.get(url+'productos');
        console.log(response.data.data)
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 2:
      try {
        const response = await axios.get(url+'sucursales');
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 3:
      try {
        const response = await axios.get(url+'medidas');
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 4:
      try {
        const response = await axios.get(url+'magnitudes');
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 5:
      try {
        const response = await axios.get(url+'articulos');
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 6:
      try {
        const response = await axios.get(url+'departamentos');
        return response.data.data;
      } catch (error) {
        throw error;
      }
      break;
    case 7:
      try {
        const response = await axios.get(url+'ubicaciones');
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

// export default fecthData;
