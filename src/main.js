import './assets/main.css';
// import $ from 'jquery';
// window.$ = $;
// window.jQuery = $;

// import '/src/assets/new/vendor/jquery/jquery'
// import '/src/assets/new/vendor/bootstrap/js/bootstrap.bundle';

// import '/src/assets/jquery.easing.min';
// import '/src/assets/sb-admin-2.min';
// import '/src/assets/Chart.min.js'
// import '/src/assets/chart-area-demo.js'

// import { tooltip } from './assets/new/css/bootstrap'
// import Swal from 'sweetalert2';
import { createApp } from 'vue'
import { plugin, defaultConfig } from '@formkit/vue'
import { DoughnutChart } from 'vue-chart-3';
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

import App from './App.vue'

// Importando las rutas
import router from './router'

const app = createApp(App);

app.component('EasyDataTable', Vue3EasyDataTable);

app.component('VueDatePicker', VueDatePicker);

app.use(router, plugin, defaultConfig, DoughnutChart).mount('#app')

// app.directive('tooltip', tooltip)
