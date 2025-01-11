<template>
  <!-- <Suspense> -->
  <div v-if="!esperando" class="container" @keyup.enter="autenticate()">
    <!-- Outer Row -->
    <div class="row justify-content-center">

      <div class="col-xl-10 col-lg-12 col-md-9">
        <br>
        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row">
              <div class="col-lg-6 d-none d-lg-block">
                <img class="sidebar-card-illustration mb-2" src="/1631285117380.png" style="width: 100%; height:100%"
                  alt="...">
              </div>
              <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <div class="sidebar-brand-icon rotate-n-15"><img src="/clipboard-list.png" alt=""
                        style="width: 35px; height:35px"></div>
                    <h1 class="h1 text-gray-900 mb-1"> MyInventary </h1>
                    <h4 class="h6 text-gray-900 mb-4">Todos detalles
                    </h4>

                  </div>
                  <form class="">
                    <div class="form-group text-left">
                      <label style="color: black;"><i class="fa fa-user-circle"></i> Correo
                        electrónico:</label>
                      <input type="text" class="form-control form-control-user" id="correo" aria-describedby=""
                        v-model="form.nombre" placeholder="Correo electrónico" @change="ValidacionEmail()"
                        @keyup="ValidacionEmail()" style="text-transform:lowercase;" value="admin@admin.co">
                      <div class="text-center"><label v-if="emailError" :style="'color: ' + color">{{ emailError
                          }}</label></div>

                      <!--<input type="email" class="form-control form-control-user" id="exampleInputEmail"
                          aria-describedby="emailHelp" placeholder="Nombre de usuario o correo electrónico">-->
                    </div>
                    <div class="form-group text-left">
                      <label style="color: black;"><i class="fa fa-key"></i> Contraseña:</label>
                      <input type="password" v-model="form.passw" class="form-control form-control-user" id="contras"
                        placeholder="Contraseña" @keyup="ValidarPassWord()" @change="ValidarPassWord()" value="123">
                      <div class="text-center"><label v-if="passwError" :style="'color: ' + colorP">{{ passwError
                          }}</label></div>
                    </div>
                    <!-- <div class="form-group">
                      <div class="custom-control custom-checkbox small">
                        <input type="checkbox" class="custom-control-input" id="customCheck">
                        <label class="custom-control-label" for="customCheck">Recuerdáme</label>
                      </div>
                    </div> -->
                    <!-- <hr> -->
                    <a @click="autenticate" class="btn btn-info btn-user btn-block">
                      <i class="fa fa-check"></i> Continuar
                    </a>
                  </form>
                  <hr>
                   <!-- <br> -->
                  <div class="text-center">
                    <router-link to="/"><a class="small">Registrarse en el sistema</a></router-link>

                  </div>
                  <div class="text-center">
                    <router-link to="/"><a class="small">¿Olvidaste la contraseña?</a></router-link>
                  </div>
                  <hr>
                  <div class="text-center">
                    <label class="text-center" style="">@TwinTecnology</label><br>
                    <!-- <label class="text-center small" style="color: black;">Copyright © Todos los derechos reservados.
                      2024</label> -->
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <!-- <div class="text-center">
      <label class="text-center" style="color: black;">Copyright © Todos los derechos reservados.
        2024</label>
    </div> -->

  </div>
  <template v-if="esperando">
    <div v-on="loading()">

    </div>
  </template>
  <!-- </Suspense> -->
</template>

<script setup>
import router from '@/router';
import { onMounted, reactive, ref } from 'vue';
// import axios from 'axios';
import Swal from 'sweetalert2';
// import ModalApp from './ModalApp.vue';

const ipPublica = ref('');

// let listado = ref([]);

let color = ref('red');

let colorP = ref('red');

const emailError = ref('');

const passwError = ref('');

// let dataCache = ref([]);

// const almacenDatosProductos = (Lista) => {
//   if (localStorage.getItem('ListadoCache')) {
//     localStorage.removeItem('ListadoCache');
//   } else {
//     const parsed = JSON.stringify(Lista);
//     localStorage.setItem('ListadoCache', parsed);
//     // dataCache.value = JSON.parse(localStorage.getItem('ListadoCache'));
//   }
// }

// const almacenDatosSucursales = (Lista) => {
//   if (localStorage.getItem('ListadoCacheSucursal')) {
//     localStorage.removeItem('ListadoCacheSucursal');
//   } else {
//     const parsed = JSON.stringify(Lista);
//     localStorage.setItem('ListadoCacheSucursal', parsed);
//     // dataCache.value = JSON.parse(localStorage.getItem('ListadoCacheSucursal'));
//   }
// }

// const consultar = async () => {
//   let response = await axios.get(`http://` + ipPublica.value + `/fullstack/public/productos`)
//     .then((response) => {
//       listado.value = response.data.data;
//       almacenDatosProductos(listado.value);
//     })

// }

// const consultarSucursales = async () => {
//   let response = await axios.get(`http://` + ipPublica.value + `/fullstack/public/sucursals`)
//     .then((response) => {
//       listado.value = response.data.data;
//       almacenDatosSucursales(listado.value);
//       esperando.value = false;
//       cerrarAlert();
//     })

// }

const form = reactive({
  nombre: '',
  passw: ''
})

let bodyLogin1 = document.getElementById('page-top');

onMounted(async () => {
  // form.nombre = "admin@admin.co";
  // form.passw = "123";
  localStorage.setItem('ListadoCache', []);
  localStorage.setItem('ListadoCacheSucursal', []);
  localStorage.setItem('Carg_datA', '0'); // Articulos
  localStorage.setItem('Carg_datD', '0'); // Departamentos
  localStorage.setItem('Carg_datMe', '0'); // Unidades de medida
  localStorage.setItem('Carg_datM', '0'); // Magitudes
  localStorage.setItem('Carg_datP', '0'); // Productos
  localStorage.setItem('Carg_datS', '0'); // Sucursales
  localStorage.setItem('Carg_datU', '0'); // Ubicaciones
  localStorage.setItem('Carg_datE', '0'); // Etiquetas
  localStorage.setItem('Host_back', 'localhost'); // IPPublica
  localStorage.setItem('Wait', '1'); // Esperar para cargar el inicio
  localStorage.setItem('Wait2', '1'); // Esperar para cargar el inicio
  localStorage.setItem('Wait3', '1'); // Esperar para cargar el inicio
  bodyLogin1.classList.add('bg-gradient-info');
  bodyLogin1.classList.remove('sidebar-toggled');
  // await consultar();
  // await consultarSucursales();
})

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

// Validar campos
function ValidarEmail(params) {
  let regExp = /^\S+@\S+\.\S+$/;

  return regExp.test(params);
}

function ValidarArroba(params) {
  let regExp1 = /^[^\s@]+@[^\s@]+\.[^\s@]+/;

  return regExp1.test(params);
}

function ValidarPassWord() {
  // console.log('OKk')
  if (form.passw.length === 0) {
    // console.log("Vacio")
    passwError.value = 'Debe llenar el campo';
    colorP.value = 'red';
  } else {
    passwError.value = '';
  }
}

function ValidacionEmail() {
  // console.log(form.nombre.length)
  if (form.nombre.length === 0) {
    // console.log("Vacio")
    emailError.value = 'Debe llenar el campo';
    color.value = 'red';
  } else if (!ValidarEmail(form.nombre)) {
    emailError.value = 'Email no válido';
    color.value = 'red';
    // console.error('Email no valido')
  } else if (!ValidarArroba(form.nombre)) {
    // console.error('Doble arroba')
    emailError.value = 'Tiene repetido el arroba';
    color.value = 'red';
  } else {
    emailError.value = 'Email válido';
    color.value = 'green';
    return 'OKKK';
  }

}
// Fin validacion

const esperando = ref(false);

const autenticate = async () => {
  // for (let index = 0; index < listado.value.length; index++) {
  //   if (form.nombre == listado.value[index].direccion && form.passw == listado.value[index].password) {
  //     localStorage.setItem("userName", form.nombre);
  //     successFull('Bienvenido al sistema', 'top-end');
  //     router.push('/inicio');
  //     break
  //   }else {
  //   Swal.fire({
  //     icon: "error",
  //     title: "Oops...",
  //     text: "Error de autenticación",
  //   });
  // }

  // }
  if (ValidacionEmail() == "OKKK") {
    // console.log('Okkkk')
    if (form.nombre == 'admin@admin.co' && form.passw == '123') {
      localStorage.setItem("userName", form.nombre);
      localStorage.setItem("Carg_dat", '0');
      localStorage.setItem("Wait", '1');
      // const start = new Date();
      // esperando.value = true;
      // console.log(esperando.value)
      // await consultar();
      // await consultarSucursales();
      // if (esperando.value == false) {
      successFull('Bienvenido al sistema', 'top-end');
      router.push('/inicio');
      // }
      // console.log(esperando.value)
      // const end = new Date();
      // tiempo.value = end.getTime() - start.getTime();
      // console.log(tiempo.value)

      // esperar();
      // console.log(end.getTime() - start.getTime(), "ms");
      // successFull('Bienvenido al sistema', 'top-end');
      // window.location = '/inicio';
      // router.push('/inicio')
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error de autenticación",
      });
    }
  } else {
    if (emailError.value != 'Email válido') {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: emailError.value,
      });
    }
    if (form.passw.length == 0 || form.passw == null) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Campo contraseña en blanco",
      });
    }

  }

}

// let timerInterval;

const loading = () => {
  Swal.fire({
    // title: "Sweet!",
    text: "Cargando datos...",
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

</script>
<style lang="scss" scoped></style>
