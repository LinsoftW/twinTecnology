<template>
  <div>
    <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">TABLAS FIJAS (NOMENCLADORES)</h1>
        <!-- <img src="/cargando2.gif" style="width: 40px; height:40px" v-if="esperando" > -->
        <!-- {{ listado }} -->
        <!-- <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-info shadow-sm" v-b-tooltip.hover
        title="Generar resumen diario"><i class="fas fa-plus fa-sm "></i> Agregar productos</a> -->
      </div>

      <!-- Datos del producto a agregar -->
      <div class="row">

        <!--Listado de productos -->
        <div class="col-xl-12 col-lg-12">
          <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 class="m-0 font-weight-bold text-info">NOMENCLADORES</h6>
            </div>
            <!-- Card Body -->
            <div class="card-body">

              <ul role="tablist" class="tabs-component-tabs">
                <li :class="'tabs-component-tab--custom ' + isactive" role="presentation"><a role="tab"
                    :class="'tabs-component-tab-a--custom ' + isactive" aria-controls="first-tab-pane" :aria-selected="selec"
                    href="#first-tab" tabindex="0" @click="Tab1()">Tabla 1</a></li>
                <li :class="'tabs-component-tab--custom ' + isactive2" role="presentation"><a role="tab"
                    :class="'tabs-component-tab-a--custom '+ isactive2" aria-controls="second-tab-pane" :aria-selected="selec2"
                    href="#second-tab" tabindex="0" @click="Tab2()">Tabla 2</a></li>
                <!-- <li class="tabs-component-tab is-disabled" role="presentation"><a role="tab"
                    class="tabs-component-tab-a is-disabled" aria-controls="disabled-tab-pane" aria-selected="false"
                    href="#" tabindex="0">Tabla 3</a></li>
                <li class="tabs-component-tab is-inactive" role="presentation"><a role="tab"
                    class="tabs-component-tab-a is-inactive" aria-controls="oh-hi-mark-pane" aria-selected="false"
                    href="#oh-hi-mark" tabindex="0">Tabla 4</a></li>
                <li class="tabs-component-tab is-inactive" role="presentation"><a role="tab"
                    class="tabs-component-tab-a is-inactive" aria-controls="prefix-and-suffix-pane"
                    aria-selected="false" href="#prefix-and-suffix" tabindex="0"><span class="prefix">→</span>Tabla
                    5</a></li>
                <li class="tabs-component-tab--custom is-inactive" role="presentation"><a role="tab"
                    class="tabs-component-tab-a--custom is-inactive" aria-controls="custom-navigation-item-classes-pane"
                    aria-selected="false" href="#custom-navigation-item-classes" tabindex="0">Custom navigation item
                    classes</a></li> -->
              </ul>
              <div class="tabs-component-panels">
                <section id="first-tab-pane" data-tab-id="first-tab" :aria-hidden="vis" class="tabs-component-panel"
                  role="tabpanel" tabindex="-1" :style="display1">
                  <div class="row">
                    <div class="col-xl-8">
                      <div class="row">
                        <div class="col-md-6 col-xl-6 col-lg-6">
                          <h3>TABLA 1</h3>
                        </div>
                        <div class="col-md-3 col-xl-3 col-lg-3">
                          <span class="text-info">Filtrar por columna: </span>
                          <select v-model="searchField" class="form-control form-control-user">
                            <option>type</option>
                            <option>attributes.codigo</option>
                          </select>
                        </div>
                        <div class="col-md-3 col-xl-3 col-lg-3">
                          <span class="text-info">Buscar: </span>
                          <input class="form-control form-control-user" type="text" v-model="searchValue"
                            :placeholder="'Teclee el ' + searchField + ' a buscar ...'" />
                        </div>
                      </div><br>

                      <!-- </div> -->
                      <EasyDataTable table-class-name="customize-table" :headers="headers" :items="items"
                        buttons-pagination border-cell v-model:items-selected="itemsSelected"
                        header-text-direction="center" body-text-direction="center" :search-field="searchField"
                        :search-value="searchValue" @click-row="showRow" :rows-per-page="5">
                        <template #item-opciones="item">
                          <div class="operation-wrapper">
                            <!-- <button class="btn btn-primary btn-sm btn-circle" data-toggle="modal"
                              data-target="#EditarProducto" @click="seleccionaProducto(item)" v-b-tooltip.hover
                              title="Modificar"><span class="fas fa-edit"></span></button> -->
                            <button class="btn btn-success btn-sm btn-circle" @click="clickEditar(item.id)"
                              v-b-tooltip.hover title="Editar"><span class="fas fa-edit"></span></button>
                            <!-- <button class="btn btn-success btn-sm btn-circle ml-1" @click="Aumentar(item)" v-b-tooltip.hover
                    title="Aumentar"><span class="fas fa-plus"></span></button>
                  <button class="btn btn-warning btn-sm btn-circle ml-1" @click="Disminuir(item)" v-b-tooltip.hover
                    title="Restar"><span class="fas fa-minus"></span></button> -->
                            <button class="btn btn-danger btn-sm btn-circle ml-1"
                              @click="borrarU(item.id, item.attributes.codigo)" v-b-tooltip.hover title="Eliminar"><span
                                class="fas fas fa-trash-alt"></span></button>
                            <!-- <button class="btn btn-info btn-sm btn-circle ml-1" data-toggle="modal" data-target="#BarCode"
                    @click="generarCodeBar(item.attributes.codigo)" v-b-tooltip.hover title="Código de barra"><span
                      class="fas fas fa-barcode"></span></button> -->
                            <!-- <a class="dropdown-item btn btn-info btn-sm btn-circle ml-1" href="#" @click="generarCodeBar(item.attributes.codigo)" data-toggle="modal" data-target="#BarCode"
                    >
                    <span class="fas fa-barcode"></span>
                  </a> -->
                          </div>
                        </template>
                        <!-- <template #loading>
                <img src="https://i.pinimg.com/originals/94/fd/2b/94fd2bf50097ade743220761f41693d5.gif"
                  style="width: 100px; height: 80px;" />
              </template> -->
                      </EasyDataTable>

                      <!-- <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                          <thead>
                            <tr style="text-align: center;">
                              <th>No</th>

                              <th>CÓDIGO</th>
                              <th>SUCURSAL</th>
                              <th>DESCRIPCION</th>
                              <th>OBSERVACIONES</th>
                              <th>ACCIONES</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="datos in datosPaginados" :key="datos.id">
                              <td v-if="datos.attributes.deleted_at == null">{{ datos.id }}</td>

                              <td v-if="datos.attributes.deleted_at == null">{{ datos.attributes.codigo }}</td>
                              <td v-if="datos.attributes.deleted_at == null">Sucursal</td>
                              <td v-if="datos.attributes.deleted_at == null">{{ datos.attributes.descripcion }}</td>
                              <td v-if="datos.attributes.deleted_at == null">{{ datos.attributes.observacion }}</td>
                              <td v-if="datos.attributes.deleted_at == null" style="text-align: center;">
                                <button class="btn btn-success btn-sm btn-circle" @click="clickEditar(datos.id)"
                                  v-b-tooltip.hover title="Editar"><span class="fas fa-edit"></span></button>&nbsp;

                                <button class="btn btn-danger btn-sm btn-circle"
                                  @click="borrarU(datos.id, datos.attributes.codigo)" v-b-tooltip.hover
                                  title="Eliminar"><span class="fas fa-trash"></span></button>
                              </td>
                            </tr>


                          </tbody>
                        </table>
                        <div class="text-center">
                          <nav aria-label="Page navigation example" style="text-align: center;">
                            <label>Mostrando &nbsp;</label>
                            <select style="width: 60px" @change="cambiarLimite()" v-model="elementPagina">
                              <option value="5">5</option>
                              <option value="10">10</option>
                              <option value="20">20</option>
                              <option value="50">50</option>
                              <option value="100">100</option>
                            </select>

                            <label>&nbsp;registros </label>
                            <ul class="pagination Mestilo btn-sm">

                              <li class="page-item" :class="`${disableA}`" @click="obtenerAnterior"><a class="page-link"
                                  href="#">Anterior</a></li>
                              <li v-for="pagina in cantidad" class="page-item" v-bind:class="isActivo(pagina)"
                                :key="pagina" @click="obtenerPagina(pagina)"><a class="page-link" href="#">{{ pagina
                                  }}</a></li>
                              <li class="page-item" :class="`${disableS}`" @click="obtenerSiguiente"><a
                                  class="page-link" href="#">Siguiente</a></li>
                            </ul>
                          </nav>
                        </div>
                      </div> -->
                    </div>
                    <div class="col-xl-4">
                      <div class="">
                        <div class="card shadow mb-4">
                          <!-- Card Header - Dropdown -->
                          <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
                            style="text-align: center;">
                            <h6 class="m-0 font-weight-bold text-info" v-if="editar == false"><span
                                class="fa fa-plus"></span> AGREGAR
                              NUEVO PRODUCTO </h6>
                            <h6 class="m-0 font-weight-bold text-info" v-if="editar == true"><span
                                class="fa fa-edit"></span>
                              MODIFICAR LOS DATOS DEL PRODUCTO <br>(<label style="color: red;">{{
                                formProductos.data.attributes.codigo
                                }}</label>)</h6>
                          </div>
                          <!-- Card Body -->
                          <div class="card-body">

                            <!-- Personas -->
                            <div class="col-lg-12">
                              <div class="">
                                <div class="text-center">
                                  <h1 class="h6 text-gray-900 mb-4">CAMPOS OBLIGATORIOS (<label
                                      style="color: red;">*</label>)</h1>
                                </div>
                                <form class="user">

                                  <div class="row">
                                    <div class="form-group col-lg-4">
                                      <label class="text-info">Código: <label style="color: red;">*</label></label>
                                      <input type="text" class="form-control" id="codigo" aria-describedby="emailHelp"
                                        v-model="formProductos.data.attributes.codigo" placeholder="Código" required>
                                    </div>
                                    <div class="form-group col-lg-8">
                                      <label class="text-info">Descripción: <label style="color: red;">*</label></label>
                                      <input type="text" class="form-control" id="descripcion"
                                        aria-describedby="emailHelp" v-model="formProductos.data.attributes.descripcion"
                                        placeholder="Descripción del producto">
                                    </div>

                                  </div>
                                  <div class="form-group ">
                                    <label class="text-info">Observaciones:</label>
                                    <textarea class="form-control" id="observaciones"
                                      v-model="formProductos.data.attributes.observacion"
                                      placeholder="Observaciones acerca del producto"></textarea>

                                  </div>
                                  <div class="row">
                                    <div class="form-group col-lg-12">
                                      <label class="text-info">Sucursal: <label style="color: red;">*</label></label>
                                      <!-- <select name="rol" id="rol" style="width: 100%; text-align:center"
                                        placeholder="Sucursal" class="text-gray-900 form-control">
                                        <option v-for="dato in listadoSucursales" :key="dato.id"
                                          :value="dato.attributes.nombre">{{
                                            dato.attributes.nombre }}</option>
                                      </select> -->
                                    </div>
                                  </div>
                                  <div class="row">
                                    <!-- <div v-if="editar == false" class="col-lg-1"></div> -->
                                    <!-- <div v-if="editar == false" class="form-group h4 col-lg-6">
                                      <a @click="agregarU" class="btn btn-primary btn-user btn-block">
                                        Archivar y continuar agregando
                                      </a>
                                    </div> -->
                                    <div v-if="editar == false" class="form-group h4 col-lg-3">

                                    </div>
                                    <div v-if="editar == false" class="form-group h4 col-lg-6">
                                      <a @click="agregarU" class="btn btn-info btn-block">
                                        Guardar datos
                                      </a>
                                    </div>
                                    <div v-if="editar" class="form-group h4 col-lg-6">
                                      <a @click="editarU" class="btn btn-info btn-block">
                                        Modificar
                                      </a>
                                    </div>
                                    <div v-if="editar" class="form-group h4 col-lg-6">
                                      <a @click="cancelarU" class="btn btn-danger btn-block">
                                        Cancelar
                                      </a>
                                    </div>
                                  </div>


                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </section>
                <section id="second-tab-pane" data-tab-id="second-tab" :aria-hidden="vis2" class="tabs-component-panel"
                  role="tabpanel" tabindex="-1" :style="display2">
                  <div class="row">
                    <div class="col-xl-8">
                      <div class="row">
                        <div class="col-md-6 col-xl-6 col-lg-6">
                          <h3>TABLA 2</h3>
                        </div>
                        <div class="col-md-3 col-xl-3 col-lg-3">
                          <span class="text-info">Filtrar por columna: </span>
                          <select v-model="searchField" class="form-control form-control-user">
                            <option>type</option>
                            <option>attributes.codigo</option>
                          </select>
                        </div>
                        <div class="col-md-3 col-xl-3 col-lg-3">
                          <span class="text-info">Buscar: </span>
                          <input class="form-control form-control-user" type="text" v-model="searchValue"
                            :placeholder="'Teclee el ' + searchField + ' a buscar ...'" />
                        </div>
                      </div><br>

                      <!-- </div> -->
                      <EasyDataTable table-class-name="customize-table" :headers="headers" :items="items"
                        buttons-pagination border-cell v-model:items-selected="itemsSelected"
                        header-text-direction="center" body-text-direction="center" :search-field="searchField"
                        :search-value="searchValue" @click-row="showRow" :rows-per-page="5">
                        <template #item-opciones="item">
                          <div class="operation-wrapper">
                            <!-- <button class="btn btn-primary btn-sm btn-circle" data-toggle="modal"
                              data-target="#EditarProducto" @click="seleccionaProducto(item)" v-b-tooltip.hover
                              title="Modificar"><span class="fas fa-edit"></span></button> -->
                            <button class="btn btn-success btn-sm btn-circle" @click="clickEditar(item.id)"
                              v-b-tooltip.hover title="Editar"><span class="fas fa-edit"></span></button>
                            <!-- <button class="btn btn-success btn-sm btn-circle ml-1" @click="Aumentar(item)" v-b-tooltip.hover
                    title="Aumentar"><span class="fas fa-plus"></span></button>
                  <button class="btn btn-warning btn-sm btn-circle ml-1" @click="Disminuir(item)" v-b-tooltip.hover
                    title="Restar"><span class="fas fa-minus"></span></button> -->
                            <button class="btn btn-danger btn-sm btn-circle ml-1"
                              @click="borrarU(item.id, item.attributes.codigo)" v-b-tooltip.hover title="Eliminar"><span
                                class="fas fas fa-trash-alt"></span></button>
                            <!-- <button class="btn btn-info btn-sm btn-circle ml-1" data-toggle="modal" data-target="#BarCode"
                    @click="generarCodeBar(item.attributes.codigo)" v-b-tooltip.hover title="Código de barra"><span
                      class="fas fas fa-barcode"></span></button> -->
                            <!-- <a class="dropdown-item btn btn-info btn-sm btn-circle ml-1" href="#" @click="generarCodeBar(item.attributes.codigo)" data-toggle="modal" data-target="#BarCode"
                    >
                    <span class="fas fa-barcode"></span>
                  </a> -->
                          </div>
                        </template>
                        <!-- <template #loading>
                <img src="https://i.pinimg.com/originals/94/fd/2b/94fd2bf50097ade743220761f41693d5.gif"
                  style="width: 100px; height: 80px;" />
              </template> -->
                      </EasyDataTable>

                      <!-- <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                          <thead>
                            <tr style="text-align: center;">
                              <th>No</th>

                              <th>CÓDIGO</th>
                              <th>SUCURSAL</th>
                              <th>DESCRIPCION</th>
                              <th>OBSERVACIONES</th>
                              <th>ACCIONES</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="datos in datosPaginados" :key="datos.id">
                              <td v-if="datos.attributes.deleted_at == null">{{ datos.id }}</td>

                              <td v-if="datos.attributes.deleted_at == null">{{ datos.attributes.codigo }}</td>
                              <td v-if="datos.attributes.deleted_at == null">Sucursal</td>
                              <td v-if="datos.attributes.deleted_at == null">{{ datos.attributes.descripcion }}</td>
                              <td v-if="datos.attributes.deleted_at == null">{{ datos.attributes.observacion }}</td>
                              <td v-if="datos.attributes.deleted_at == null" style="text-align: center;">
                                <button class="btn btn-success btn-sm btn-circle" @click="clickEditar(datos.id)"
                                  v-b-tooltip.hover title="Editar"><span class="fas fa-edit"></span></button>&nbsp;

                                <button class="btn btn-danger btn-sm btn-circle"
                                  @click="borrarU(datos.id, datos.attributes.codigo)" v-b-tooltip.hover
                                  title="Eliminar"><span class="fas fa-trash"></span></button>
                              </td>
                            </tr>


                          </tbody>
                        </table>
                        <div class="text-center">
                          <nav aria-label="Page navigation example" style="text-align: center;">
                            <label>Mostrando &nbsp;</label>
                            <select style="width: 60px" @change="cambiarLimite()" v-model="elementPagina">
                              <option value="5">5</option>
                              <option value="10">10</option>
                              <option value="20">20</option>
                              <option value="50">50</option>
                              <option value="100">100</option>
                            </select>

                            <label>&nbsp;registros </label>
                            <ul class="pagination Mestilo btn-sm">

                              <li class="page-item" :class="`${disableA}`" @click="obtenerAnterior"><a class="page-link"
                                  href="#">Anterior</a></li>
                              <li v-for="pagina in cantidad" class="page-item" v-bind:class="isActivo(pagina)"
                                :key="pagina" @click="obtenerPagina(pagina)"><a class="page-link" href="#">{{ pagina
                                  }}</a></li>
                              <li class="page-item" :class="`${disableS}`" @click="obtenerSiguiente"><a
                                  class="page-link" href="#">Siguiente</a></li>
                            </ul>
                          </nav>
                        </div>
                      </div> -->
                    </div>
                    <div class="col-xl-4">
                      <div class="">
                        <div class="card shadow mb-4">
                          <!-- Card Header - Dropdown -->
                          <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
                            style="text-align: center;">
                            <h6 class="m-0 font-weight-bold text-info" v-if="editar == false"><span
                                class="fa fa-plus"></span> AGREGAR
                              NUEVO PRODUCTO </h6>
                            <h6 class="m-0 font-weight-bold text-info" v-if="editar == true"><span
                                class="fa fa-edit"></span>
                              MODIFICAR LOS DATOS DEL PRODUCTO <br>(<label style="color: red;">{{
                                formProductos.data.attributes.codigo
                                }}</label>)</h6>
                          </div>
                          <!-- Card Body -->
                          <div class="card-body">

                            <!-- Personas -->
                            <div class="col-lg-12">
                              <div class="">
                                <div class="text-center">
                                  <h1 class="h6 text-gray-900 mb-4">CAMPOS OBLIGATORIOS (<label
                                      style="color: red;">*</label>)</h1>
                                </div>
                                <form class="user">

                                  <div class="row">
                                    <div class="form-group col-lg-4">
                                      <label class="text-info">Código: <label style="color: red;">*</label></label>
                                      <input type="text" class="form-control" id="codigo" aria-describedby="emailHelp"
                                        v-model="formProductos.data.attributes.codigo" placeholder="Código" required>
                                    </div>
                                    <div class="form-group col-lg-8">
                                      <label class="text-info">Descripción: <label style="color: red;">*</label></label>
                                      <input type="text" class="form-control" id="descripcion"
                                        aria-describedby="emailHelp" v-model="formProductos.data.attributes.descripcion"
                                        placeholder="Descripción del producto">
                                    </div>

                                  </div>
                                  <div class="form-group ">
                                    <label class="text-info">Observaciones:</label>
                                    <textarea class="form-control" id="observaciones"
                                      v-model="formProductos.data.attributes.observacion"
                                      placeholder="Observaciones acerca del producto"></textarea>

                                  </div>
                                  <div class="row">
                                    <div class="form-group col-lg-12">
                                      <label class="text-info">Sucursal: <label style="color: red;">*</label></label>
                                      <!-- <select name="rol" id="rol" style="width: 100%; text-align:center"
                                        placeholder="Sucursal" class="text-gray-900 form-control">
                                        <option v-for="dato in listadoSucursales" :key="dato.id"
                                          :value="dato.attributes.nombre">{{
                                            dato.attributes.nombre }}</option>

                                      </select> -->
                                    </div>
                                  </div>
                                  <div class="row">
                                    <!-- <div v-if="editar == false" class="col-lg-1"></div> -->
                                    <!-- <div v-if="editar == false" class="form-group h4 col-lg-6">
                                      <a @click="agregarU" class="btn btn-primary btn-user btn-block">
                                        Archivar y continuar agregando
                                      </a>
                                    </div> -->
                                    <div v-if="editar == false" class="form-group h4 col-lg-3">

                                    </div>
                                    <div v-if="editar == false" class="form-group h4 col-lg-6">
                                      <a @click="agregarU" class="btn btn-info btn-block">
                                        Guardar datos
                                      </a>
                                    </div>
                                    <div v-if="editar" class="form-group h4 col-lg-6">
                                      <a @click="editarU" class="btn btn-info btn-block">
                                        Modificar
                                      </a>
                                    </div>
                                    <div v-if="editar" class="form-group h4 col-lg-6">
                                      <a @click="cancelarU" class="btn btn-danger btn-block">
                                        Cancelar
                                      </a>
                                    </div>
                                  </div>


                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section id="disabled-tab-pane" data-tab-id="disabled-tab" aria-hidden="true"
                  class="tabs-component-panel" role="tabpanel" tabindex="-1" style="display: none;">
                  <h2 class="page-subtitle">Disabled tab</h2> This content will be unavailable while :is-disabled prop
                  set to true
                </section>
                <section id="oh-hi-mark-pane" data-tab-id="oh-hi-mark" aria-hidden="true" class="tabs-component-panel"
                  role="tabpanel" tabindex="-1" style="display: none;">
                  <h2 class="page-subtitle">Custom fragment</h2> The hash that is appended to the url can be customized.
                </section>
                <section id="prefix-and-suffix-pane" data-tab-id="prefix-and-suffix" aria-hidden="true"
                  class="tabs-component-panel" role="tabpanel" tabindex="-1" style="display: none;">
                  <h2 class="page-subtitle">Prefix and suffix</h2> A prefix and a suffix can be added — HTML allowed.
                </section>
                <section id="custom-navigation-item-classes-pane" data-tab-id="custom-navigation-item-classes"
                  aria-hidden="true" class="tabs-component-panel" role="tabpanel" tabindex="-1" style="display: none;">
                  <h2 class="page-subtitle">Custom navigation item classes</h2> A custom nav-item-class &amp;
                  nav-item-link-class can be added to a tab's navigation item.
                </section>
              </div>
              <!-- <div class="">
                <ul class="tabs-component-tabs">
                  <li class="tabs-component-tab is-active">
                    <a class="tabs-component-tab-a is-active">
                      Articulos
                    </a>
                  </li>
                  <li class="tabs-component-tab is-inactive">
                    <a class="tabs-component-tab-a is-inactive">2</a>
                  </li>
                  <li class="tabs-component-tab is-inactive">
                    <a class="tabs-component-tab-a is-inactive">3</a>

                  </li>
                </ul>
                <div class="tabs-component-panels">
                  <section class="tabs-component-panel">
                    1.1
                  </section>
                </div>

              </div> -->

              <!-- <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                  <thead>
                    <tr style="text-align: center;">
                      <th>No</th>

                      <th>CÓDIGO</th>
                      <th>SUCURSAL</th>
                      <th>DESCRIPCION</th>
                      <th>OBSERVACIONES</th>
                      <th>ACCIONES</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="datos in datosPaginados" :key="datos.id">
                      <td v-if="datos.attributes.deleted_at == null">{{ datos.id }}</td>

                      <td v-if="datos.attributes.deleted_at == null">{{ datos.attributes.codigo }}</td>
                      <td v-if="datos.attributes.deleted_at == null">Sucursal</td>
                      <td v-if="datos.attributes.deleted_at == null">{{ datos.attributes.descripcion }}</td>
                      <td v-if="datos.attributes.deleted_at == null">{{ datos.attributes.observacion }}</td>
                      <td v-if="datos.attributes.deleted_at == null" style="text-align: center;">
                        <button class="btn btn-success btn-sm btn-circle" @click="clickEditar(datos.id)"
                          v-b-tooltip.hover title="Editar"><span class="fas fa-edit"></span></button>&nbsp;

                        <button class="btn btn-danger btn-sm btn-circle"
                          @click="borrarU(datos.id, datos.attributes.codigo)" v-b-tooltip.hover title="Eliminar"><span
                            class="fas fa-trash"></span></button>
                      </td>
                    </tr>


                  </tbody>
                </table>

                <div class="text-center">
                  <nav aria-label="Page navigation example" style="text-align: center;">
                    <label>Mostrando &nbsp;</label>
                    <select style="width: 60px" @change="cambiarLimite()" v-model="elementPagina">
                      <option value="5">5</option>
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                    </select>

                    <label>&nbsp;registros </label>
                    <ul class="pagination Mestilo btn-sm">

                      <li class="page-item" :class="`${disableA}`" @click="obtenerAnterior"><a class="page-link"
                          href="#">Anterior</a></li>
                      <li v-for="pagina in cantidad" class="page-item" v-bind:class="isActivo(pagina)" :key="pagina"
                        @click="obtenerPagina(pagina)"><a class="page-link" href="#">{{ pagina
                          }}</a></li>
                      <li class="page-item" :class="`${disableS}`" @click="obtenerSiguiente"><a class="page-link"
                          href="#">Siguiente</a></li>
                    </ul>
                  </nav>
                </div>
              </div> -->

            </div>
          </div>
        </div>
        <!-- FIN -->


      </div>

      <!-- TABLA INVENTARIOS -->
      <!-- codigo, descripcion, cantidad -->
      <!-- permitir seleccionar que quiere mostrar -->
      <!-- poner todos los datos en la tabla inventario -->
      <!-- elementos de busqueda -->
      <!-- por Sucursal -->
      <!-- por codigo -->
      <!-- por cantidad -->

    </div>

  </div>
  <!-- <template v-if="esperando">
    <div v-on="loading('Actualizando datos...')">

    </div>
  </template> -->
</template>
<script setup>

import axios from 'axios';
import router from '@/router';
import Swal from 'sweetalert2';
import { onMounted, reactive, ref } from 'vue';

const esperando = ref(false);

const loading = (texto) => {
  Swal.fire({
    // title: "Sweet!",
    text: texto,
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

// Definicion de props
// defineProps({
//  datosPaginados1 : {
//   type : []
// },
// listado : {
//   type : []
// },
// });
// Fin definicion

// CRUD completo

const isactive = ref('is-active')

const isactive2 = ref('is-inactive')

const isactive3 = ref('is-inactive')

const display1 = ref('')

const display2 = ref('display: none')

const vis = ref(false)

const vis2 = ref(true)

const selec = ref(true)

const selec2 = ref(false)

const Tab1 = () => {
  isactive.value = 'is-active'
  isactive2.value = 'is-inactive'
  isactive3.value = 'is-inactive'
  selec.value = true;
  selec2.value = false
  display1.value = ''
  display2.value = 'display: none'
  vis.value = false;
  vis2.value = true
}

const Tab2 = () => {
  isactive.value = 'is-inactive'
  isactive2.value = 'is-active'
  isactive3.value = 'is-inactive'
  selec.value = false;
  selec2.value = true
  display1.value = 'display: none'
  display2.value = ''
  vis2.value = false;
  vis.value = true
}

let errors = ref([]);

const searchField = ref("attributes.codigo");

const searchValue = ref("");

let listado = ref([]);

let listadoSucursales = ref([]);

let datosPaginados = ref([]);

let datosSinPaginar = ref([]);

let buscando = ref('');

let editar = ref(false);

let id = ref('');

let cantidad = ref(0);

let elementPagina = ref(5);

let cargado = ref(false);

let inicio = ref(0);

let fin = ref(0);

let paginaActual = ref(1);

let disableA = ref('');
let disableS = ref('');

let setTiempoBusca = '';

const datos_archivados = ref([]);

const ipPublica = ref('127.0.0.1');

const formProductos = reactive({
  data: {
    type: 'Producto',
    attributes: {
      codigo: "",
      descripcion: "",
      observacion: "",
    }
  }
})

const agregarU = () => {
  // console.log(formProductos.object)
  esperando.value = true;
  // datos_archivados.value.push(formProductos);
  axios.post(`http://` + ipPublica.value + `/fullstack/public/productos`, formProductos)
    .then((response) => {
      cargado.value = false;
      esperando.value = false;
      cerrarAlert();
      consultar();
      formProductos.data.attributes.observacion = ''
      formProductos.data.attributes.descripcion = '';
      formProductos.data.attributes.codigo = '';
      actualizar_datos();
      Swal.fire({
        icon: "success",
        title: "Producto agregado satisfactoriamente."
      })
    })
    .catch((error) => {
      if (error.response.status === 400) {
        errors.value = error.response.data.message;
      }
      esperando.value = false;
      cerrarAlert();
      Swal.fire({
        icon: "error",
        title: error.response.data.message
      })
    })
  // console.log(datos_archivados.value);

}

// Paginado
const obtenerPagina = (nopage) => {
  paginaActual.value = nopage;
  inicio.value = (nopage * elementPagina.value) - elementPagina.value;
  fin.value = (nopage * elementPagina.value);
  datosPaginados.value = [];
  datosPaginados.value = datosSinPaginar.value.slice(inicio, fin);

}

const obtenerAnterior = () => {
  if (paginaActual.value > 1) {
    paginaActual.value--;
    disableA.value = '';
    disableS.value = '';
  } else {
    disableA.value = 'disabled';
    disableS.value = '';
  }
  obtenerPagina(paginaActual.value);
}

const obtenerSiguiente = () => {
  if (paginaActual.value < cantidad.value) {
    paginaActual.value++;
    disableS.value = '';
    disableA.value = '';
  } else {
    disableS.value = 'disabled';
    disableA.value = '';
  }
  obtenerPagina(paginaActual.value);
}

const isActivo = (nopage) => {
  if (nopage == paginaActual.value) {
    if (nopage == 1) {
      disableA.value = 'disabled';
      disableS.value = '';
    } else {
      if (nopage == cantidad.value) {
        disableS.value = 'disabled';
        disableA.value = '';
      } else {
        if ((nopage != 1) && (nopage != cantidad.value)) {
          disableS.value = '';
          disableA.value = '';
        }
      }
    }

    return 'active';
  } else {
    return '';
  }
}

let newListado = ref([]);

let newListadoSucursal = ref([]);

const cambiarLimite = () => {
  let i = 0;
  newListado.value = [];
  for (let index = 0; index < listado.value.length; index++) {
    const element = listado.value[index];
    if (element.attributes.deleted_at == null) {
      newListado.value[i] = element;
      i++;
    }
  }
  datosSinPaginar.value = newListado.value;
  cantidad.value = Math.ceil(newListado.value.length / elementPagina.value);
  obtenerPagina(1);
}

const obtenerListadoLimpio = async () => {
  let i = 0;
  if (cargado.value = false) {
    newListado.value = [];
    for (let index = 0; index < listado.value.length; index++) {
      const element = listado.value[index];
      if (element.attributes.deleted_at == null) {
        newListado.value[i] = element;
        i++;
      }
    }
    datosSinPaginar.value = newListado.value;
    cantidad.value = Math.ceil(newListado.value.length / elementPagina.value);
    obtenerPagina(1);
    cargado.value = true;
  } else {
    newListado.value = []
    for (let index = 0; index < listado.value.length; index++) {
      const element = listado.value[index];
      if (element.attributes.deleted_at == null) {
        newListado.value[i] = element;
        i++;
      }
    }
    datosSinPaginar.value = newListado.value;
    cantidad.value = Math.ceil(newListado.value.length / elementPagina.value);
    obtenerPagina(1);
  }

  items.value = [];
  // cargar datos en tabla-vue
  // console.log('Actualizando 1...')
  for (let index = 0; index < listado.value.length; index++) {
    items.value.push(listado.value[index])
  }

  return await items;

}

const obtenerListadoLimpioSucursales = () => {
  let i = 0;
  // if (cargado.value = false) {
  newListadoSucursal.value = [];
  for (let index = 0; index < listadoSucursales.value.length; index++) {
    const element = listadoSucursales.value[index];
    if (element.attributes.deleted_at == null) {
      newListadoSucursal.value[i] = element;
      i++;
    }
  }
  return newListadoSucursal;
  // }

}

const almacenDatosProductos = (Lista) => {
  // if (localStorage.getItem('ListadoCache')) {
  //datos_archivados.value.push(Lista);
  localStorage.removeItem('ListadoCache');
  //   }else{
  const parsed = JSON.stringify(Lista);
  localStorage.setItem('ListadoCache', parsed);
  // dataCache.value = JSON.parse(localStorage.getItem('ListadoCache'));
  // }
}

const consultar = async () => {
  if (cargado.value == false) {
    let response = await axios.get(`http://` + ipPublica.value + `/fullstack/public/productos`)
      .then((response) => {
        listado.value = response.data.data;
        // console.log(listado.value)
        almacenDatosProductos(listado.value);
        obtenerListadoLimpio();
        // actualizar_datos();
        cargado.value = true;
        // console.log(response.data.data)
        // datosSinPaginar.value = response.data.data;
        // cantidad.value = Math.ceil(response.data.data.length / elementPagina.value);
        // obtenerPagina(1);
        // cargado.value = true;
        // router.go();
      });
  } else {
    // console.log(listado.value)
    almacenDatosProductos(listado.value);
    obtenerListadoLimpio();
    // actualizar_datos();
    // datosSinPaginar.value = listado.value;
    // cantidad.value = Math.ceil(listado.value.length / elementPagina.value);
    // obtenerPagina(1);
  }

}

const editarUModel = async () => {
  await Swal.fire({

    input: "textarea",
    inputLabel: `Modificar datos del producto: ` + `${formProductos.data.attributes.codigo}`,
    inputPlaceholder: "Observaciones del producto",
    inputAttributes: {
      "aria-label": "Observaciones del producto"
    },
    showCancelButton: true,
    confirmButtonText: "Modificar"
  });
  if (text) {
    Swal.fire(text);
  }
}

const consultarSucursales = async () => {
  // if (cargado.value == false) {
  let response = await axios.get(`http://` + ipPublica.value + `/fullstack/public/sucursals`)
    .then((response) => {
      listadoSucursales.value = response.data.data;
      // console.log(response.data)
      // datosSinPaginar.value = response.data.data;
      // cantidad.value = Math.ceil(response.data.data.length / elementPagina.value);
      // obtenerPagina(1);
      // cargado.value = true;
      // router.go();
      listadoSucursales.value = obtenerListadoLimpioSucursales();
    });

  // }

}

const buscandoElemento = () => {
  clearTimeout(setTiempoBusca);
  setTiempoBusca = setTimeout(consultar, 360);
}

const editarU = () => {
  esperando.value = true;
  axios.put(`http://${ipPublica.value}/fullstack/public/productos/${id.value}`, formProductos)
    .then((response) => {
      // console.log(response)
      esperando.value = false;
      cerrarAlert();
      consultar();
      editar.value = false;
      formProductos.data.attributes.descripcion = ''
      formProductos.data.attributes.observacion = '';
      formProductos.data.attributes.codigo = '';
      Swal.fire({
        icon: "success",
        title: "Editado satisfactoriamente."
      })
      // editar.value = false;
      // localStorage.setItem("editar", editar.value);
    })
    .catch((error) => {
      if (error.status === 400) {
        errors.value = error.response.data;
      }
      esperando.value = false;
      cerrarAlert();
      Swal.fire({
        icon: "danger",
        title: "Error realizando operación."
      })
    })
}

const borrarU = (id, correo) => {
  Swal.fire({
    title: "Confirmación",
    text: `Está a punto de eliminar el producto: ${correo}`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, eliminar"
  }).then((result) => {
    if (result.isConfirmed) {
      esperando.value = true;
      // Eliminar //
      axios.delete(`http://${ipPublica.value}/fullstack/public/productos/${id}`)
        .then(() => {
          esperando.value = false;
          consultar();
          // cancelarU();
          cerrarAlert();
          Swal.fire({
            title: "Eliminado",
            text: "Producto eliminado satisfactoriamente.",
            icon: "success"
          });
          cargado.value = false;
        })
    }
  }).catch((error) => {
    if (error.response.status === 400) {
      errors.value = error.response.data;
    }
    esperando.value = false;
    cerrarAlert();
  });
}
// Fin CRUD

const clickEditar = async (idSelect) => {
  editar.value = true;
  // localStorage.setItem("editar", editar.value);
  id.value = idSelect;

  for (let index = 0; index < listado.value.length; index++) {
    const element = listado.value[index].id;
    if (element == idSelect) {
      formProductos.data.attributes.descripcion = listado.value[index].attributes.descripcion;
      formProductos.data.attributes.codigo = listado.value[index].attributes.codigo;
      formProductos.data.attributes.observacion = listado.value[index].attributes.observacion;
      break;
    }
    // console.log(element)
  }

  // editarUModel()

  // let response = await axios.get(`http://localhost/fullstack/public/api/nom/productos/${id.value}`)
  //   .then((response) => {
  //     formProductos.data.attributes.descripcion = response.data.data.attributes.descripcion;
  //     formProductos.data.attributes.codigo = response.data.data.attributes.codigo;
  //     formProductos.data.attributes.observacion = response.data.data.attributes.observacion;
  //   })
}

const cancelarU = () => {
  editar.value = false;
  formProductos.data.attributes.descripcion = '';
  formProductos.data.attributes.codigo = '';
  formProductos.data.attributes.observacion = '';
}

const actualizar_datos = () => {
  // localStorage.removeItem('ListadoCache');
  listado.value = JSON.parse(localStorage.getItem('ListadoCache'));
  obtenerListadoLimpio();
  // listadoSucursales.value = JSON.parse(localStorage.getItem('ListadoCacheSucursal'));
  // listadoSucursales = obtenerListadoLimpioSucursales();
}

onMounted(async () => {
  if (localStorage.getItem('userName')) {
    if (localStorage.getItem('Carg_dat') != '0') {
      listado.value = JSON.parse(localStorage.getItem('ListadoCache'));
      obtenerListadoLimpio();
      listadoSucursales.value = JSON.parse(localStorage.getItem('ListadoCacheSucursal'));
      listadoSucursales.value = obtenerListadoLimpioSucursales();
    }

  } else {
    router.push('/login');
  }
  // console.log(datosPaginados1)
  // if (cargado.value == false) {
  //   consultar();
  //   consultarSucursales();
  // }

})

const headers = [
  { text: "NO", value: "id", width: 50, sortable: true },
  { text: "CODIGO", value: "attributes.codigo", sortable: true },
  { text: "CATEGORIA", value: "type" },
  { text: "P.COMPRA", value: "precioC", sortable: true },
  { text: "P.VENTA", value: "precioV", sortable: true },
  { text: "UNIDAD", value: "unidad" },
  { text: "STOCK", value: "stock", sortable: true },
  { text: "VENTAS", value: "cantV", sortable: true },
  { text: "OPCIONES", value: "opciones" }
];

const items = ref([]);
</script>
<style lang="scss" scoped>
.tabs-component {
  margin: 4em 0;
}

.tabs-component-tabs {
  border: solid 1px #ddd;
  border-radius: 6px;
  margin-bottom: 5px;
}

@media (min-width: 700px) {
  .tabs-component-tabs {
    border: 0;
    align-items: stretch;
    display: flex;
    justify-content: flex-start;
    margin-bottom: -1px;
  }
}

.tabs-component-tab,
.tabs-component-tab--custom {
  color: #999;
  font-size: 14px;
  font-weight: 600;
  margin-right: 0;
  list-style: none;
}

.tabs-component-tab:not(:last-child) {
  border-bottom: dotted 1px #ddd;
}

.tabs-component-tab:hover {
  color: #666;
}

.tabs-component-tab.is-active {
  color: #000;
}

.tabs-component-tab.is-disabled *,
.tabs-component-tab--custom.is-disabled * {
  color: #cdcdcd;
  cursor: not-allowed !important;
}

@media (min-width: 700px) {

  .tabs-component-tab,
  .tabs-component-tab--custom {
    background-color: #fff;
    border: solid 1px #ddd;
    border-radius: 3px 3px 0 0;
    margin-right: .5em;
    transform: translateY(2px);
    transition: transform .3s ease;
  }

  .tabs-component-tab.is-active,
  .tabs-component-tab--custom.is-active {
    border-bottom: solid 1px #fff;
    z-index: 2;
    transform: translateY(0);
  }
}

.tabs-component-tab-a,
.tabs-component-tab-a--custom {
  align-items: center;
  color: inherit;
  display: flex;
  padding: .75em 1em;
  text-decoration: none;
}

.tabs-component-panels {
  padding: 4em 0;
}

@media (min-width: 700px) {
  .tabs-component-panels {
    background-color: #fff;
    border: solid 1px #ddd;
    border-radius: 0 6px 6px 6px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .05);
    padding: 4em 2em;
  }
}

.tabs-component-btn {
  cursor: pointer;
  background: #e1ecf4;
  border-radius: 3px;
  border: 1px solid #7aa7c7;
  padding: 4px 8px;
  color: #39739d;
}

.tabs-component-btn:hover {
  background-color: #b3d3ea;
  color: #2c5777;
}

.tabs-component-btn:active {
  background-color: #a0c7e4;
  box-shadow: none;
  color: #2c5777;
}

.tabs-component-tab--custom {
  border-color: #e1ecf4;
  color: #68838d;
}

.tabs-component-tab--custom:hover {
  border-color: #e1ecf4;
  color: #39739d;
}

.tabs-component-tab--custom.is-active {
  color: #39739d;
  border-color: #7aa7c7;
  border-bottom: solid 1px #fff;
}
</style>
