import './assets/main.css';
import '/src/assets/new/vendor/jquery/jquery'
import '/src/assets/new/vendor/bootstrap/js/bootstrap.bundle';
import '/src/assets/jquery.easing.min';
import '/src/assets/sb-admin-2.min';
import { createApp } from 'vue'
import { plugin, defaultConfig } from '@formkit/vue'
import { DoughnutChart } from 'vue-chart-3';
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import VueBarcode from '@chenfengyuan/vue-barcode';
// import {
//   GcSpreadSheets,
//   GcWorksheet,
//   GcColumn,
// } from "@mescius/spread-sheets-vue";
// import {Tabs, Tab} from 'vue3-tabs-component';
// import 'vue3-tabs-component/dist/style.css';

import App from './App.vue'

// Importando las rutas
import router from './router'

const app = createApp(App);

app.component('EasyDataTable', Vue3EasyDataTable)
.component('VueDatePicker', VueDatePicker)
.component(VueBarcode.name, VueBarcode)
// .component("gc-spread-sheets", GcSpreadSheets)
// .component("gc-worksheet", GcWorksheet)
// .component("gc-column", GcColumn);

app.use(router, plugin, defaultConfig, DoughnutChart).mount('#app')
