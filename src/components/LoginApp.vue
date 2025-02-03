<template>
  <!-- <Suspense> -->
  <div v-if="accesoRegistro" class="container" @keyup.enter="autenticate()">
    <!-- Outer Row -->
    <div class="row justify-content-center">

      <div class="col-xl-10 col-lg-12 col-md-9">
        <br>
        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row">
              <div class="col-lg-6 d-none d-lg-block">
                <img class="sidebar-card-illustration mb-2" src="/imgFull.jpg" style="width: 100%; height:100%"
                  alt="...">
              </div>
              <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <div class="sidebar-brand-icon rotate-n-15"><img src="/icono.jpg" alt=""
                        style="width: 35px; height:35px"></div>
                    <h1 class="h1 text-gray-900 mb-1"> MyInventory </h1>
                    <h4 class="h6 text-gray-900 mb-4">Todos detalles
                    </h4>

                  </div>
                  <form class="">
                    <div class="form-group text-left">
                      <label style="color: black;"><i class="fa fa-user-circle"></i> Correo
                        electrónico:</label>
                      <input type="text" class="form-control form-control-user" id="correo" aria-describedby=""
                        v-model="form.correo" placeholder="Correo electrónico" @change="ValidacionEmail()"
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
                    <a @click="accesoRegistro = false" class="small">Registrarse en el sistema</a>

                  </div>
                  <div class="text-center">
                    <router-link to="/"><a class="small">¿Olvidaste la contraseña?</a></router-link>
                  </div>
                  <hr>
                  <div class="text-center">
                    <label class="text-center" style="">@TwinTechnology</label><br>
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

  <div v-if="!accesoRegistro" class="container" @keyup.enter="accesoRegistro = true">
    <!-- Outer Row -->
    <div class="row justify-content-center">

      <div class="col-xl-10 col-lg-12 col-md-9">
        <br>
        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row">
              <div class="col-lg-6 d-none d-lg-block">
                <img class="sidebar-card-illustration mb-2" src="/src/imgFull.jpg" style="width: 100%; height:100%"
                  alt="...">
              </div>
              <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <div class="sidebar-brand-icon rotate-n-15"><img src="/icono.jpg" alt=""
                        style="width: 35px; height:35px"></div>
                    <h1 class="h1 text-gray-900 mb-1"> MyInventory </h1>
                    <h4 class="h6 text-gray-900 mb-4">Todos detalles
                    </h4>

                  </div>
                  <form class="">
                    <div class="form-group text-left">
                      <label style="color: black;"><i class="fa fa-user-circle"></i> Correo
                        electrónico:</label>
                      <input type="text" class="form-control form-control-user" id="correo" aria-describedby=""
                        v-model="form.correo" placeholder="Ej: pepe@ppe.co" @change="ValidacionEmail()"
                        @keyup="ValidacionEmail()" style="text-transform:lowercase;" value="admin@admin.co">
                      <div class="text-center"><label v-if="emailError" :style="'color: ' + color">{{ emailError
                          }}</label></div>
                    </div>
                    <div class="form-group text-left">
                      <label style="color: black;"><i class="fa fa-user-circle"></i> Nombre:</label>
                      <input type="text" class="form-control form-control-user" id="correo" aria-describedby=""
                        v-model="form.nombre" placeholder="Ej: Pepe" @change="validaNombre()" @keyup="validaNombre()"
                        value="admin@admin.co">
                      <div class="text-center"><label v-if="nombreError" :style="'color: ' + color">{{ nombreError
                          }}</label></div>
                    </div>
                    <div class="form-group text-left">
                      <label style="color: black;"><i class="fa fa-user-circle"></i> Primer apellido:</label>
                      <input type="text" class="form-control form-control-user" id="correo" aria-describedby=""
                        v-model="form.apellido1" placeholder="Ej: Perez" @change="validaApellidos1()"
                        @keyup="validaApellidos1()" value="admin@admin.co">
                      <div class="text-center"><label v-if="apellido1Error" :style="'color: ' + color">{{ apellido1Error
                          }}</label></div>
                    </div>
                    <div class="form-group text-left">
                      <label style="color: black;"><i class="fa fa-user-circle"></i> Segundo apellido:</label>
                      <input type="text" class="form-control form-control-user" id="correo" aria-describedby=""
                        v-model="form.apellido2" placeholder="Ej: Perez" @change="validaApellidos2()"
                        @keyup="validaApellidos2()" value="admin@admin.co">
                      <div class="text-center"><label v-if="apellido2Error" :style="'color: ' + color">{{ apellido2Error
                          }}</label></div>
                    </div>
                    <!-- <div class="form-group text-left">
                      <label style="color: black;"><i class="fa fa-key"></i> Contraseña:</label>
                      <input type="password" v-model="form.passw" class="form-control form-control-user" id="contras"
                        placeholder="Contraseña" @keyup="ValidarPassWord()" @change="ValidarPassWord()" value="123">
                      <div class="text-center"><label v-if="passwError" :style="'color: ' + colorP">{{ passwError
                          }}</label></div>
                    </div> -->
                    <!-- <div class="form-group">
                      <div class="custom-control custom-checkbox small">
                        <input type="checkbox" class="custom-control-input" id="customCheck">
                        <label class="custom-control-label" for="customCheck">Recuerdáme</label>
                      </div>
                    </div> -->
                    <hr>
                    <div class="row">
                      <div class="col-md-6">
                        <a @click="accesoRegistro = true" class="btn btn-info btn-user btn-block">
                          <i class="fa fa-check"></i> Registrarme
                        </a>
                      </div>
                      <div class="col-md-6">
                        <a @click="accesoRegistro = true" class="btn btn-secondary btn-user btn-block">
                          <i class="fa fa-cancel"></i> Cancelar
                        </a>
                      </div>
                    </div>
                  </form>
                  <!-- <hr> -->
                  <!-- <br> -->
                  <!-- <div class="text-center">
                    <router-link to="/"><a class="small">Registrarse en el sistema</a></router-link>

                  </div>
                  <div class="text-center">
                    <router-link to="/"><a class="small">¿Olvidaste la contraseña?</a></router-link>
                  </div> -->
                  <hr>
                  <div class="text-center">
                    <label class="text-center" style="">@TwinTechnology</label><br>
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
  <!-- <template v-if="esperando">
    <div v-on="loading()">

    </div>
  </template> -->
  <!-- </Suspense> -->
</template>

<script setup>
import router from '@/router';
import { onMounted, reactive, ref } from 'vue';
// import axios from 'axios';
import Swal from 'sweetalert2';
import { ErrorFull } from './controler/ControlerApp';
import { obtenerDatos } from './helper/useAxios';
import { useStoreAxios } from '@/store/AxiosStore';

const Store = useStoreAxios();
// import ModalApp from './ModalApp.vue';

const ipPublica = ref('');

// let listado = ref([]);

let color = ref('red');

let colorP = ref('red');

const emailError = ref('');

const nombreError = ref('');

const apellido1Error = ref('');

const apellido2Error = ref('');

const passwError = ref('');

const registrar = () => {
  ErrorFull("No implementado", "top-start")
}

const form = reactive({
  nombre: '',
  passw: '',
  correo: '',
  apellido1: '',
  apellido2: ''
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
  localStorage.setItem('Carg_datL', '0'); // Lotes
  localStorage.setItem('Carg_datMo', '0'); // Monedas
  localStorage.setItem('Carg_datIM', '0'); // Imagenes
  localStorage.setItem('Carg_datEP', '0'); // Etiqueta productos
  localStorage.setItem('Carg_datAu', '0'); // Auditorias
  localStorage.setItem('Carg_datPe', '0'); // Personas
  // localStorage.setItem('Host_back', 'localhost'); // IPPublica
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
    colorP.value = 'green';
  }
}

function ValidacionEmail() {
  // console.log(form.nombre.length)
  if (form.correo.length === 0) {
    // console.log("Vacio")
    emailError.value = 'Debe llenar el campo';
    color.value = 'red';
  } else if (!ValidarEmail(form.correo)) {
    emailError.value = 'Email no válido';
    color.value = 'red';
    // console.error('Email no valido')
  } else if (!ValidarArroba(form.correo)) {
    // console.error('Doble arroba')
    emailError.value = 'Tiene repetido el arroba';
    color.value = 'red';
  } else {
    emailError.value = '';
    color.value = 'green';
    return 'OKKK';
  }

}

function validaNombre() {
  if (form.nombre.length === 0) {
    nombreError.value = 'Debe llenar el campo';
    color.value = 'red';
  } else {
    nombreError.value = '';
    color.value = 'green';
    return 'OKKK';
  }
}

function validaApellidos1() {
  if (form.apellido1.length === 0) {
    apellido1Error.value = 'Debe llenar el campo';
    color.value = 'red';
  } else {
    apellido1Error.value = '';
    color.value = 'green';
    return 'OKKK';
  }
}

function validaApellidos2() {
  if (form.apellido2.length === 0) {
    apellido2Error.value = 'Debe llenar el campo';
    color.value = 'red';
  } else {
    apellido2Error.value = '';
    color.value = 'green';
    return 'OKKK';
  }
}
// Fin validacion

const accesoRegistro = ref(true);

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
  // console.log(response)
  if (ValidacionEmail() == "OKKK") {
    // consulto el correo y la contraseña
    const response = await obtenerDatos(14);
    const passw = await obtenerDatos(17);
    // si existen obtengo el token y le doy acceso
    // Cuando cierre la sesion le borro el token
    // console.log(passw)
    for (let index = 0; index < response.length; index++) {
      if (form.correo == response[index].attributes.email) {
        localStorage.setItem("userName", response[index].attributes.alias);
        Store.formPersonas.data.attributes.alias = response[index].attributes.alias;
        Store.formPersonas.data.attributes.email = response[index].attributes.email;
        Store.formPersonas.data.attributes.movil = response[index].attributes.movil;
        localStorage.setItem("Carg_dat", '0');
        localStorage.setItem("Wait", '1');
        successFull('Bienvenido al sistema', 'top-end');
        router.push('/inicio');
        break
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error de autenticación",
        });
      }

    }
    // if (form.correo == 'admin@admin.co' && form.passw == '123') {
    // }
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
    emailError.value = '';

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
