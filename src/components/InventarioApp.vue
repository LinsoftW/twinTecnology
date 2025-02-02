<template>
  <!-- <div> -->
  <div class="container-fluid" v-if="!detalle">
    <!-- <div>
        <div id="interactive" class="viewport"></div>
        <button @click="startScanner">Iniciar Escaneo</button>
        <p v-if="barcode">Código de barras detectado: {{ barcode }}</p>
      </div> -->
    <!-- <ImageBarcodeReader @decode="onDecode" @error="onError" /> -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-2 text-gray-800 text-center">INVENTARIO</h1>

    </div>

    <!-- TABLA INVENTARIOS -->
    <!-- codigo, descripcion, cantidad -->
    <!-- permitir seleccionar que quiere mostrar -->
    <!-- poner todos los datos en la tabla inventario -->
    <!-- elementos de busqueda -->
    <!-- por Sucursal -->
    <!-- por codigo -->
    <!-- por cantidad -->
    <!--Opciones de busqueda -->
    <!-- <div class=""> -->
    <div class="row">

      <div class="col-xl-6 col-lg-12">
        <div class="card shadow mb-4">
          <!-- Card Header - Dropdown -->
          <div class=" card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 class="m-0 text-info">Criterios de búsqueda</h6>
          </div>
          <!-- Card Body -->
          <div class="card-body ">
            <div class="container-fluid row">
              <!-- <div class="col-xl-4 col-lg-3">

                  <label>Etiqueta</label>
                  <input type="text" class="form-control form-control-sm" placeholder="Ej: La Habana"
                    v-model="critBusq[0]">

                </div> -->
              <div class="col-xl-6 col-lg-3">
                <label>Código</label>
                <input type="text" class="form-control form-control-sm" placeholder="Ej: 0000" v-model="critBusq[1]">
              </div>
              <div class="col-xl-6 col-lg-3">
                <label>Producto</label>
                <input type="text" class="form-control form-control-sm" placeholder="Ej: Producto 1"
                  v-model="critBusq[2]">
              </div>
              <!-- {{ critBusq }} -->
              <!-- <div class="col-xl-2 col-lg-3">
                  <label>Por categoría</label>
                  <select class="form-control form-control-sm" name="" id="" placeholder="Por cantidades">
                    <option value="">Zapatos</option>
                    <option value="">Pantalones</option>
                  </select>
                </div> -->
              <!-- <div class="col-xl-2 col-lg-3">
                  <label>Ventas desde</label>
                  <VueDatePicker v-model="date"></VueDatePicker>

                </div> -->
              <!-- <div class="col-xl-2 col-lg-3">
                  <label>Ventas hasta</label>
                  <VueDatePicker v-model="date2"></VueDatePicker>

                </div> -->
            </div>
          </div>
        </div>

        <!-- </div> -->

        <!-- Elementos a mostrar en las columnas de la tabla -->
        <!-- <div class="col-xl-6 col-lg-12">
          <div class="mb-2">

            <div class=" justify-content-between">
              <h6 class="m-0 text-info">Columnas a mostrar</h6>
            </div>

            <div class="card-body shadow">
              <div class="container-fluid row">
                <div class="col-xl-3 col-lg-4">
                  <label>Por Sucursal</label>
                  <select class="form-control form-control-sm" name="" id="" placeholder="Por Sucursales">
                    <option value="">Sucursal 1</option>
                    <option value="">Sucursal 2</option>
                  </select>
                </div>
                <div class="col-xl-3 col-lg-4">
                  <label>Por código</label>
                  <select class="form-control form-control-sm" name="" id="" placeholder="Por codigos">
                    <option value="">Código 1</option>
                    <option value="">Código 2</option>
                  </select>
                </div>
                <div class="col-xl-3 col-lg-4">
                  <label>Por cantidad</label>
                  <select class="form-control form-control-sm" name="" id="" placeholder="Por cantidades">
                    <option value="">5</option>
                    <option value="">10</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div> -->
      </div>
      <!-- Nuevo Listado productos -->
      <div class="col-xl-12 col-lg-12">
        <div class="card shadow mb-4">
          <a href="#collapseCardExample" class="d-block card-header py-3" data-toggle="collapse" role="button"
            aria-expanded="true" aria-controls="collapseCardExample">
            <h6 class="m-0 font-weight-bold text-info"><i class="fa fa-list-ul"></i> PRODUCTOS EN STOCK</h6>
          </a>
          <!-- <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text-info"><i class="fas fa-edit"></i> DEPARTAMENTOS</h6>
                <button class="btn btn-info" @click="abrirModalAddProd()"> <span class="fa fa-plus"></span> Nuevo</button>
              </div> -->
          <!-- Card Body -->
          <div class="collapse show" id="collapseCardExample">
            <div class="card-body">
              <div class="row">
                <div class="col-md-6 col-xl-6 col-lg-6">
                  <!-- <div class="row"> -->
                  <div class="justify-content-between">
                    <!-- <router-link class="button" to="/gest_inventario"> -->
                    <a data-toggle="modal" @click="agrega()" data-target="#agregaProducto"
                      class="btn btn-info btn-sm btn-icon-split" :class="disabledProductos">
                      <span class="icon text-white-50">
                        <i class="fas fa-plus"></i>
                      </span>
                      <!-- d-md-none -->
                      <span :class="`text`">Nuevo</span>
                    </a>
                    <a @click="generar_pdf()" class="btn btn-secondary btn-sm btn-icon-split m-2"
                      :class="disabledProductos">
                      <span class="icon text-white-50">
                        <i class="fas fa-file-pdf"></i>
                      </span>
                      <span class="text">PDF</span>
                    </a>
                    <a @click="ExportExcel()" class="btn btn-secondary btn-sm btn-icon-split"
                      :class="disabledProductos">
                      <span class="icon text-white-50">
                        <i class="fas fa-download"></i>
                      </span>
                      <span class="text">Excel</span>
                    </a>
                    <button class="btn btn-primary btn-sm dropdown-toggle m-2" type="button" id="dropdownMenuButton"
                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-b-tooltip.hover
                      title="Agregar">
                      <span class="icon text-white-50">
                        <i class="fas fa-plus" v-b-tooltip.hover title="Agregar"></i>
                      </span>
                      <span class="text"> Agregar</span>
                    </button>
                    <div class="dropdown-menu animated--fade-in" aria-labelledby="dropdownMenuButton">
                      <router-link class="button" to="/categorias">
                        <a class="dropdown-item" href="#"><span class="fa fa-list-alt"></span> Clasificaciones</a>
                      </router-link>
                      <router-link class="button" to="/gest_nomencladores">
                        <a class="dropdown-item" href="#"><span class="fas fa-ruler-horizontal"></span> Magnitudes</a>
                      </router-link>
                      <router-link class="button" to="/ubicaciones">
                        <a class="dropdown-item" href="#"><span class="fa fa-map-marker-alt"></span> Ubicaciones</a>
                      </router-link>

                    </div>
                    <a @click="EliminarSelecc()" class="btn btn-danger btn-sm btn-icon-split"
                      :class="disabledProductos">
                      <span class="icon text-white">
                        <i class="fas fa-trash"></i>
                      </span>
                      <span class="text text-white">Eliminar seleccionados</span>
                    </a>
                    <!-- <a @click="abrirModalAddProd()" href="#" class="d-sm-inline-block btn btn-sm btn-info shadow-sm"
                      v-b-tooltip.hover title="Agregar producto"><i class="fas fa-plus fa-sm "></i> Agregar productos </a> -->
                    <!-- <a @click="EliminarSelecc()" href="#" class="d-sm-inline-block btn btn-sm btn-danger shadow-sm m-2"
                        v-b-tooltip.hover title="Eliminar seleccionados"><i class="fas fa-trash fa-sm "></i> Eliminar
                        seleccionados </a> -->
                    <!-- </router-link> -->
                    <!-- <a @click="ExportExcel()" href="#" class="d-sm-inline-block btn btn-sm btn-primary shadow-sm m-2"
                      v-b-tooltip.hover title="Exportar a Excel"><i class="fas fa-download fa-sm "></i> Excel</a> -->
                  </div>
                  <!-- </div> -->
                </div>
                <!-- <div class="col-md-3 col-xl-3 col-lg-3">
                  <span class="text-info">Filtrar por columna: </span>
                  <select v-model="searchField" @change="cuandoCambie()" class="form-control form-control-user">
                    <option>Tipo</option>
                    <option>Código</option>
                  </select>
                </div> -->
                <div class="col-md-6 col-xl-6 col-lg-12">
                  <span class="text-info">Buscar: </span>
                  <input class="form-control form-control-user" type="text" v-model="searchValue"
                    placeholder="Qué desea buscar" />
                </div>
              </div>
              <br>

              <EasyDataTable :headers="headers" :items="itemsProductos1" buttons-pagination border-cell
                v-model:items-selected="itemsSelected" header-text-direction="center" body-text-direction="center"
                :search-field="searchField" :search-value="searchValue" @click-row="showRow" :rows-per-page="5"
                :loading="Store.esperandoProductos" :key="actualizaTabla">
                <template #item-image="item">
                  <a data-toggle="modal" data-target="#verImagen"
                    @click="obtenDescripcion(item.attributes.imagen_path)">
                    <!-- "{{ obtenImagen(item.id) }}" -->
                    <!-- {{ item.attributes.imagen_path }} -->
                    <img v-if="item.attributes.imagen_path != ''"
                      :src="urlAuditoria + '/' + item.attributes.imagen_path" alt="No image" class="img img-thumbnail"
                      style="width: 50px; height: 50px;" />
                    <img v-else src="/productos.jpg" alt="No image" class="img img-thumbnail"
                      style="width: 50px; height: 50px;" />
                  </a>

                </template>
                <!-- <template #item-rows>
                  <a>Filas por paginas</a>
                </template> -->
                <template #item-opciones="item">
                  <div class="operation-wrapper">
                    <!-- <button class="btn btn-success btn-sm btn-circle" @click="Aumentar(item)" v-b-tooltip.hover
                        title="Aumentar / Disminuir"><span class="fas fa-plus"></span> / <span
                          class="fas fa-minus"></span></button> -->
                    <button class="btn btn-primary btn-sm btn-circle ml-1" data-toggle="modal"
                      data-target="#agregaProducto" @click="clickEditarProducto(item.id)" v-b-tooltip.hover
                      title="Modificar"><span class="fas fa-edit"></span></button>

                    <!-- <button class="btn btn-warning btn-sm btn-circle ml-1" @click="Disminuir(item)" v-b-tooltip.hover
                      title="Restar"><span class="fas fa-minus"></span></button> -->

                    <button class="btn btn-info btn-sm btn-circle ml-1" data-toggle="modal" data-target="#BarCode"
                      @click="generarCodeBar(item.relationships.departamento.data.id, item.relationships.articulo.data.id, item.id)"
                      v-b-tooltip.hover title="Código de barra"><span class="fas fas fa-barcode"></span></button>
                    <!-- <router-link to="/detalles"> -->
                    <button class="btn btn-warning btn-sm btn-circle ml-1" @click="Detalles(item)" v-b-tooltip.hover
                      title="Detalles"><span class="fa fa-eye"></span></button>
                    <button class="btn btn-danger btn-sm btn-circle ml-1"
                      @click="borrarU(item.id, item.attributes.descripcion, 1)" v-b-tooltip.hover title="Eliminar"><span
                        class="fas fas fa-trash-alt"></span></button>
                    <!-- </router-link> -->
                  </div>
                </template>
                <template #item-codigo="item">
                  {{ item.relationships.departamento.data.id }}{{ item.relationships.articulo.data.id }}{{ item.id }}
                </template>
                <template #item-departamento="item">
                  {{ obtenDepartamento(item.relationships.departamento.data.id) }}
                  <!-- item.relationships.medida.data.id -->
                </template>
                <template #item-etiqueta="item">
                  <!-- {{item}} -->
                  {{ obtenEtiqueta(item.id) }}
                </template>
                <template #loading>
                  <img src="/cargando4.gif" style="width: 100px; height: 80px;" />
                </template>
                <template #empty-message>
                  <a>No hay datos que mostrar</a>
                </template>
                <template #empty-pagination__rows-per-page>
                  <a>Filas por página</a>
                </template>

              </EasyDataTable>

            </div>
          </div>
        </div>
      </div>

      <!-- Nuevo Listado por lotes -->
      <div class="col-xl-12 col-lg-12">
        <div class="card shadow mb-4">
          <a href="#collapseCardExample1" class="d-block card-header py-3" data-toggle="collapse" role="button"
            aria-expanded="true" aria-controls="collapseCardExample">
            <h6 class="m-0 font-weight-bold text-info"><i class="fa fa-list-ul"></i> LOTES</h6>
          </a>
          <!-- <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text-info"><i class="fas fa-edit"></i> DEPARTAMENTOS</h6>
                <button class="btn btn-info" @click="abrirModalAddProd()"> <span class="fa fa-plus"></span> Nuevo</button>
              </div> -->
          <!-- Card Body -->
          <div class="collapse show" id="collapseCardExample1">
            <div class="card-body">
              <div class="row">
                <div class="col-md-6 col-xl-6 col-lg-6">
                  <!-- <div class="row"> -->
                  <div class="justify-content-between">
                    <!-- <router-link class="button" to="/gest_inventario"> -->
                    <a data-toggle="modal" @click="agrega()" data-target="#agregaLote"
                      class="btn btn-info btn-sm btn-icon-split" :class="disabledProductos">
                      <span class="icon text-white-50">
                        <i class="fas fa-plus"></i>
                      </span>
                      <span class="text">Nuevo</span>
                    </a>
                    <!-- <a @click="generar_pdf1()" class="btn btn-secondary btn-sm btn-icon-split m-2"
                        :class="disabledProductos">
                        <span class="icon text-white-50">
                          <i class="fas fa-file-pdf"></i>
                        </span>
                        <span class="text">PDF</span>
                      </a>
                      <a @click="ExportExcel1()" class="btn btn-secondary btn-sm btn-icon-split"
                        :class="disabledProductos">
                        <span class="icon text-white-50">
                          <i class="fas fa-download"></i>
                        </span>
                        <span class="text">Excel</span>
                      </a> -->
                    <!-- <button class="btn btn-primary btn-sm dropdown-toggle m-2" type="button" id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="icon text-white-50">
                          <i class="fas fa-plus"></i>
                        </span>
                        <span class="text"> Agregar</span>
                      </button> -->
                    <!-- <div class="dropdown-menu animated--fade-in" aria-labelledby="dropdownMenuButton">
                        <router-link class="button" to="/categorias">
                          <a class="dropdown-item" href="#"><span class="fa fa-list-alt"></span> Clasificaciones</a>
                        </router-link>
                        <router-link class="button" to="/gest_nomencladores">
                          <a class="dropdown-item" href="#"><span class="fas fa-ruler-horizontal"></span> Magnitudes</a>
                        </router-link>
                        <router-link class="button" to="/ubicaciones">
                          <a class="dropdown-item" href="#"><span class="fa fa-map-marker-alt"></span> Ubicaciones</a>
                        </router-link>

                      </div> -->
                    <!-- <a @click="EliminarSelecc()" class="btn btn-danger btn-sm btn-icon-split"
                        :class="disabledProductos">
                        <span class="icon text-white">
                          <i class="fas fa-trash"></i>
                        </span>
                        <span class="text text-white">Eliminar seleccionados</span>
                      </a> -->
                    <!-- <a @click="abrirModalAddProd()" href="#" class="d-sm-inline-block btn btn-sm btn-info shadow-sm"
                      v-b-tooltip.hover title="Agregar producto"><i class="fas fa-plus fa-sm "></i> Agregar productos </a> -->
                    <!-- <a @click="EliminarSelecc()" href="#" class="d-sm-inline-block btn btn-sm btn-danger shadow-sm m-2"
                        v-b-tooltip.hover title="Eliminar seleccionados"><i class="fas fa-trash fa-sm "></i> Eliminar
                        seleccionados </a> -->
                    <!-- </router-link> -->
                    <!-- <a @click="ExportExcel()" href="#" class="d-sm-inline-block btn btn-sm btn-primary shadow-sm m-2"
                      v-b-tooltip.hover title="Exportar a Excel"><i class="fas fa-download fa-sm "></i> Excel</a> -->
                  </div>
                  <!-- </div> -->
                </div>
                <!-- <div class="col-md-3 col-xl-3 col-lg-3">
                  <span class="text-info">Filtrar por columna: </span>
                  <select v-model="searchField" @change="cuandoCambie()" class="form-control form-control-user">
                    <option>Tipo</option>
                    <option>Código</option>
                  </select>
                </div> -->
                <div class="col-md-6 col-xl-6 col-lg-12">
                  <span class="text-info">Buscar: </span>
                  <input class="form-control form-control-user" type="text" v-model="searchValue2"
                    placeholder="Qué desea buscar" />
                </div>
              </div>
              <br>

              <EasyDataTable :headers="headers1" :items="itemsLotes1" buttons-pagination border-cell
                header-text-direction="center" body-text-direction="center" :search-field="searchField2"
                :search-value="searchValue2" :rows-per-page="5" :loading="Store.esperandoLotes">
                <!-- <template #item-image="item">
                    <a data-toggle="modal" data-target="#verImagen"
                      @click="obtenDescripcion(item.attributes.descripcion)">
                      <img src="/inventario.jpg" alt="No image" class="img img-thumbnail"
                        style="width: 50px; height: 50px;" />
                    </a>

                  </template> -->
                <!-- <template #item-rows>
                  <a>Filas por paginas</a>
                </template> -->
                <template #item-opciones="item">
                  <div class="operation-wrapper">
                    <!-- @click="Aumentar(item)" -->
                    <button class="btn btn-success btn-sm btn-circle" data-toggle="modal" @click="Aumentar(item)"
                      data-target="#agregaAuditoria" v-b-tooltip.hover title="Aumentar / Disminuir"><span
                        class="fas fa-plus"></span> / <span class="fas fa-minus"></span></button>
                    <button class="btn btn-primary btn-sm btn-circle ml-1" data-toggle="modal" data-target="#agregaLote"
                      @click="clickEditarProducto1(item.id)" v-b-tooltip.hover title="Modificar"><span
                        class="fas fa-edit"></span></button>

                    <!-- <button class="btn btn-warning btn-sm btn-circle ml-1" @click="Disminuir(item)" v-b-tooltip.hover
                      title="Restar"><span class="fas fa-minus"></span></button> -->

                    <!-- <button class="btn btn-info btn-sm btn-circle ml-1" data-toggle="modal" data-target="#BarCode"
                        @click="generarCodeBar(item.relationships.departamento.data.id, item.relationships.articulo.data.id, item.id)"
                        v-b-tooltip.hover title="Código de barra"><span class="fas fas fa-barcode"></span></button> -->
                    <!-- <router-link to="/detalles"> -->
                    <!-- <button class="btn btn-warning btn-sm btn-circle ml-1" @click="Detalles(item)" v-b-tooltip.hover
                        title="Detalles"><span class="fa fa-eye"></span></button> -->
                    <button class="btn btn-danger btn-sm btn-circle ml-1"
                      @click="borrarUL(item.id, item.attributes.descripcion, 1)" v-b-tooltip.hover
                      title="Eliminar"><span class="fas fas fa-trash-alt"></span></button>
                    <!-- </router-link> -->
                  </div>
                </template>
                <template #item-precioC="item">
                  {{ item.attributes.precio_compra }} {{ obtenMoneda(item.attributes.moneda_compra) }}
                </template>
                <template #item-precioV="item">
                  {{ item.attributes.precio_venta }} {{ obtenMoneda(item.attributes.moneda_venta) }}
                </template>
                <!-- <template #item-departamento="item">
                    {{ obtenDepartamento(item.relationships.departamento.data.id) }}
                  </template> -->
                <!-- <template #item-etiqueta="item">
                    {{ obtenEtiqueta(item.relationships.etiquetas.data.id) }}
                  </template> -->
                <template #loading>
                  <img src="/cargando4.gif" style="width: 100px; height: 80px;" />
                </template>
                <template #empty-message>
                  <a>No hay datos que mostrar</a>
                </template>

              </EasyDataTable>

            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
  <div class="container-fluid" v-if="detalle">
    <!-- <div>
        <div id="interactive" class="viewport"></div>
        <button @click="startScanner">Iniciar Escaneo</button>
        <p v-if="barcode">Código de barras detectado: {{ barcode }}</p>
      </div> -->
    <!-- <ImageBarcodeReader @decode="onDecode" @error="onError" /> -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-2 text-gray-800 text-center">DETALLES</h1>
    </div>

    <!-- TABLA INVENTARIOS -->
    <!-- codigo, descripcion, cantidad -->
    <!-- permitir seleccionar que quiere mostrar -->
    <!-- poner todos los datos en la tabla inventario -->
    <!-- elementos de busqueda -->
    <!-- por Sucursal -->
    <!-- por codigo -->
    <!-- por cantidad -->
    <!--Opciones de busqueda -->
    <!-- <div class=""> -->

    <!-- Nuevo Listado productos -->
    <div class="row">

      <div class="col-xl-12 col-lg-12">
        <div class="card shadow mb-4">
          <a href="#collapseCardExample" class="d-block card-header py-3" data-toggle="collapse" role="button"
            aria-expanded="true" aria-controls="collapseCardExample">
            <h6 class="m-0 font-weight-bold text-info"><i class="fa fa-eye"></i> PRODUCTO <i>"{{ nombreProd }}"</i>
            </h6>
          </a>
          <!-- <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                 <h6 class="m-0 font-weight-bold text-info"><i class="fas fa-edit"></i> DEPARTAMENTOS</h6>
                 <button class="btn btn-info" @click="abrirModalAddProd()"> <span class="fa fa-plus"></span> Nuevo</button>
               </div> -->
          <!-- Card Body -->
          <div class="collapse show" id="collapseCardExample">
            <div class="card-body">
              <div class="row">
                <div class="col-md-6 col-xl-6 col-lg-6">
                  <!-- <div class="row"> -->
                  <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%">
                      <thead>
                        <tr>
                          <th>ID: </th>
                          <td>{{ idProd }}</td>
                        </tr>
                        <tr>
                          <th>Código: </th>
                          <td>{{ codProd }}</td>
                        </tr>
                        <tr>
                          <th>Nombre: </th>
                          <td>{{ nombreProd }}</td>
                        </tr>
                        <tr>
                          <th>Cantidad mínima: </th>
                          <td>{{ minProd }}</td>
                        </tr>
                        <tr>
                          <th>Tipo de artículo: </th>
                          <td>{{ artiProd }}</td>
                        </tr>
                        <tr>
                          <th>Unidad de medida: </th>
                          <td>{{ medidProd }}</td>
                        </tr>
                        <tr>
                          <th>Etiqueta: </th>
                          <td>{{ obtenEtiqueta(idProd) }}</td>
                        </tr>
                        <!-- <tr>
                             <th>Departamento: </th>
                             <td>{{ obtenDepartamento(idProd) }}</td>
                           </tr> -->
                        <!-- <tr>
                             <th>Ubicación: </th>
                             <td>{{ ubicaProd }}</td>
                           </tr> -->

                        <tr>
                          <th>Descripción: </th>
                          <td>{{ nombreProd }}</td>
                        </tr>
                        <tr>
                          <th>Observaciones: </th>
                          <td>{{ obsProd }}</td>
                        </tr>
                      </thead>
                      <tbody>

                      </tbody>
                    </table>
                  </div>
                  <!-- <strong><label for="n">Nombre: </label></strong>
                     <label for="n1"> {{ nombreProd }}</label>
                     <strong><label for="n">Nombre: </label></strong>
                     <label for="n1"> {{ nombreProd }}</label> -->
                  <!-- </div> -->
                </div>
                <div class="col-md-6 col-xl-6 col-lg-6 text-center">
                  <!-- <div class="row"> -->
                  <img :src="urlAuditoria + '/' + image_path" alt="No image" class="img img-thumbnail m-5"
                    style="width: 80%; height:80%;" />

                  <!-- <strong><label for="n">Nombre: </label></strong>
                     <label for="n1"> {{ nombreProd }}</label>
                     <strong><label for="n">Nombre: </label></strong>
                     <label for="n1"> {{ nombreProd }}</label> -->
                  <!-- </div> -->
                </div>
                <div class="container">

                  <div class="col-md-12 text-center">
                    <button class="btn btn-primary btn-sm m-1" data-toggle="modal" data-target="#agregaProducto"
                      @click="clickEditarProducto(idProd)" v-b-tooltip.hover title="Modificar"><span
                        class="fas fa-edit"></span> Modificar</button>
                    <button class="btn btn-danger btn-sm m-1" @click="borrarU(idProd, nombreProd, 1)" v-b-tooltip.hover
                      title="Eliminar"><span class="fas fas fa-trash-alt"></span> Eliminar</button>
                    <button class="btn btn-info btn-sm m-1" @click="Atras()"> Atrás</button>
                  </div>
                </div>
                <!-- <div class="col-md-3 col-xl-3 col-lg-3">
                   <span class="text-info">Filtrar por columna: </span>
                   <select v-model="searchField" @change="cuandoCambie()" class="form-control form-control-user">
                     <option>Tipo</option>
                     <option>Código</option>
                   </select>
                 </div> -->

              </div>
              <br>

            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
  <!-- Logout Modal-->
  <div :class="'modal fade ' + showModal" id="filasColumnas" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" :aria-hidden="activaHide" :arial-modal="activaModal" :style="displayModal">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Seleccione las columnas que desea visualizar</h5>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close" @click="abrirModal()">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">
          <h3 style="text-align: center;">Columnas a mostrar</h3>

          <ol>
            <!-- <li><input type="checkbox" name="foto" :checked="siFoto" @change="quitarFoto"> Foto</li> -->
            <li><input type="checkbox" name="codigo" :checked="sicodigo" @change="quitarcodigo"> Código</li>
            <li><input type="checkbox" name="sucursal" :checked="sisucursal" @change="quitarSucursal"> Sucursal</li>
            <li><input type="checkbox" name="descripcion" :checked="sidescripcion" @change="quitardescripcion">
              Descripción</li>
            <li><input type="checkbox" name="observaciones" :checked="siobservaciones" @change="quitarobservacion">
              Observaciones</li>
            <!-- <li><input type="checkbox" name="estado" :checked="siestado" @change="quitarestado"> Estado</li> -->
            <li><input type="checkbox" name="acciones" :checked="siacciones" @change="quitaracciones"> Acciones</li>
          </ol>

        </div>
        <div class="modal-footer">
          <!-- <a class="btn btn-info" @click="AColumnas">Aceptar</a> -->
          <a class="btn btn-primary btn-sm" @click="AColumnas">Ninguna</a>
          <a class="btn btn-info btn-sm" @click="MostrarTodas">Todas</a>
          <button class="btn btn-secondary btn-sm" type="button" data-dismiss="modal"
            @click="abrirModal()">Cerrar</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Logout Modal-->
  <div :class="'modal fade ' + showModal1" id="BarCode" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    :aria-hidden="activaHide1" :arial-modal="activaModal1" :style="displayModal1">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-info" id="exampleModalLabel">Código de barra</h5>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true" class="text-info">×</span>
          </button>
        </div>
        <div class="modal-body text-center">
          <vue-barcode :value="cod" tag="svg"></vue-barcode>

        </div>
        <div class="modal-footer">
          <!-- <a class="btn btn-info" @click="AColumnas">Aceptar</a> -->
          <button class="btn btn-info btn-sm" type="button" data-dismiss="modal">Cerrar</button>
        </div>
      </div>
    </div>
  </div>


  <!-- Editar producto Modal-->
  <div @click="beforeDestroy()" :class="'modal fade ' + showModal2" id="escanearCode" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" :aria-hidden="activaHide2" :arial-modal="activaModal2" :style="displayModal2">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <!-- <div class="modal-header">
            <h5 class="modal-title text-info" id="exampleModalLabel">Apunte la cámara hacia el código de barra
            </h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close" @click="beforeDestroy()">
              <span aria-hidden="true" class="text-info">×</span>
            </button>
          </div> -->
        <!-- <div class="modal-body text-center"> -->
        <!-- <vue-barcode :value="cod" tag="svg"></vue-barcode> -->
        <!-- <div class="row col-lg-12 text-center"> -->

        <div class="text-center">
          <!-- <div data-barcode-canvas class="barcode-canvas"></div>
            <div data-barcode-msg class="barcode-message"></div> -->
          <div id="interactive" class="viewport"></div><br>
          <div class="row">
            <div class="col-xl-4">
              <button class="btn btn-primary mx-2" @click="startScanner">Iniciar Escaneo</button>
            </div>
            <div class="col-xl-4">
              <button class="btn btn-danger" @click="beforeDestroy">Detener Escaneo</button>
            </div>
            <div class="col-xl-4">
              <button class="btn btn-info" @click="beforeDestroy()" data-dismiss="modal">Cerrar</button>
            </div>
          </div>
          <br>
          <p v-if="barcode">Código de barras detectado: {{ barcode }}</p>
        </div>
        <!-- <StreamBarcodeReader v-if="escanea" torch no-front-cameras @decode="onDecode" @loaded="onLoaded"
            style="width: 100%; height:100%" />
          <h2 v-if="escanea" style="color:white">Código: {{ decodedText }}</h2> -->
        <!-- </div> -->
        <!-- <ImageBarcodeReader @decode="onDecode" @error="onError" /> -->

      </div>

      <!-- </div>
        <div class="modal-footer">
          <a class="btn btn-info btn-sm" @click="beforeDestroy()" data-dismiss="modal">Cerrar</a>

        </div> -->
    </div>

  </div>
  <!-- <AddProducto v-show="popup" @cerrar="abrirModalAddProd()" /> -->
  <!-- </div> -->

  <div :class="'modal fade ' + showModal1" id="verImagen" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" :aria-hidden="activaHide1" :arial-modal="activaModal1" :style="displayModal1">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-info" id="exampleModalLabel">{{ fileName }}</h5>

          <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true" class="text-info">×</span>
          </button>
        </div>
        <div class="modal-body text-center">
          <!-- <div class="text-center">
            <h1 class="h6 text-gray-900 mb-4"><i>CAMPOS OBLIGATORIOS</i> (<label style="color: red;">*</label>)
            </h1>
          </div> -->
          <form class="user">

            <div class="row">
              <div class="form-group col-lg-12 text-left">
                <img :src="urlAuditoria + '/' + NombreProducto" alt="No image" class="img img-thumbnail"
                  style="width: 100%; height: 100%;" />
              </div>

            </div>

            <div class="row">
              <div class="col-lg-3"></div>
              <div class="form-group h4 col-lg-6">
                <a class="btn btn-danger btn-block" data-dismiss="modal" aria-label="close" :class="deactiva">
                  <i style="" class="fa">&#xf00d;</i> Cerrar
                </a>
              </div>
            </div>


          </form>

          <!-- <div>
            <card class="card-section" style="width: 450px; margin: auto">
              <h1>Contact Form</h1>
              <form ref="values" @submit.prevent="sendEmail">
                <div class="form-group">
                  <KInput class="form-input" :style="{ width: '290px' }" name="name" v-model="user_name"
                    placeholder="Name"></KInput>
                </div>
                <div class="form-group">
                  <KInput class="form-input" :style="{ width: '290px' }" name="email" v-model="user_email"
                    placeholder="email address"></KInput>
                </div>
                <div class="form-group">
                  <kTextarea class="form-input" :style="{ width: '290px' }" name="message" v-model="user_message"
                    placeholder="Message" :rows="4" />
                </div>
                <div class="example-col">
                  <kButton :style="{ width: '100px' }" id="submit-btn">Submit form</kButton>
                </div>
              </form>
            </card>
          </div> -->
          <!-- <vue-barcode :value="cod" tag="svg"></vue-barcode> -->
        </div>

      </div>
    </div>
  </div>

  <!-- Logout Modal-->
  <div :class="'modal fade ' + showModal1" id="agregaProducto" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" :aria-hidden="activaHide1" :arial-modal="activaModal1" :style="displayModal1">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-info" id="exampleModalLabel" v-if="editar == false">NUEVO PRODUCTO</h5>
          <h5 class="modal-title text-info text-center" id="exampleModalLabel" v-if="editar == true"><span
              class="fa fa-edit"></span>
            MODIFICAR LOS DATOS DEL PRODUCTO <br>(<label style="color: red;">{{
              Store.formProductos.data.attributes.descripcion
            }}</label>)</h5>

          <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true" class="text-info">×</span>
          </button>
        </div>
        <div class="modal-body text-center">
          <!-- <div class="text-center">
            <h1 class="h6 text-gray-900 mb-4"><i>CAMPOS OBLIGATORIOS</i> (<label style="color: red;">*</label>)
            </h1>
          </div> -->
          <form class="user">
            <div class="row">
              <div class="col-lg-12">
                <img v-if="imgPerfil" class="img-profile rounded-circle" v-bind:src="imgPerfil"
                  style="width: 150px; height: 150px">
                <img v-else class="img-profile rounded-circle" src="/src/assets/new/img/undraw_profile.svg"
                  style="width: 150px; height: 150px">

              </div>
              <div class="col-lg-12">

                <label for="avatar">Seleccione una imagen:</label>
                <input type="file" id="file" name="file" accept="image/png, image/jpeg" @change="cargarImagen()" />
              </div>
            </div>
            <hr>

            <div class="row">
              <div class="form-group col-lg-12 text-left">
                <label class="text-info">Descripción del producto: <label style="color: red;">*</label></label>
                <input type="text" class="form-control" id="descripcionP" @change="verificar_error(1)"
                  aria-describedby="emailHelp" v-model="Store.formProductos.data.attributes.descripcion"
                  placeholder="Ej: Blusa" required>
                <span style="color: red;">{{ errores.descripcion }}</span>
              </div>
              <div class="form-group col-lg-12 text-left">
                <label class="text-info">Observaciones: </label>
                <input type="text" class="form-control" id="observacionP" aria-describedby="emailHelp"
                  v-model="Store.formProductos.data.attributes.observacion" placeholder="Ej: La blusa es para la playa">
                <!-- <span style="color: red;">{{ errores.observacion }}</span> -->
              </div>

            </div>
            <div class="row">
              <div class="form-group col-lg-12 text-left">
                <label class="text-info ">Seleccione el artículo: <label style="color: red;">*</label>&nbsp; &nbsp;
                  &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
                  &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
                  &nbsp;&nbsp; &nbsp; &nbsp;
                  <!-- <router-link class="button" to="/categorias">
                    <button class="btn btn-danger" v-b-tooltip.hover title="Agregar artículo"><span
                        class="fa fa-plus"></span></button>
                  </router-link> -->
                </label>
                <select name="articulo" id="articulo" @change="verificar_error(3)"
                  style="width: 100%; text-align:center" placeholder="Artículo" class="text-gray-900 form-control"
                  v-model="Store.formProductos.data.attributes.articulo_id">
                  <option v-for="dato in itemsArticulos1" :key="dato.id" :value="dato.id">{{
                    dato.attributes.articulo }}</option>
                </select>
                <span style="color: red;">{{ errores.articulo_id }}</span>
              </div>
              <div class="form-group col-lg-12 text-left">
                <label class="text-info ">Seleccione una etiqueta: <label style="color: red;">*</label>&nbsp; &nbsp;
                  &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
                  &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
                  &nbsp;&nbsp; &nbsp; &nbsp;
                  <!-- <router-link class="button" to="/categorias">
                    <button class="btn btn-danger" v-b-tooltip.hover title="Agregar artículo"><span
                        class="fa fa-plus"></span></button>
                  </router-link> -->
                </label>
                <select name="etiqueta" id="etiqueta" @change="verificar_error(9)"
                  style="width: 100%; text-align:center" placeholder="Etiqueta" class="text-gray-900 form-control"
                  v-model="etiqueta_R">
                  <option v-for="dato in itemsEtiqueta1" :key="dato.id" :value="dato.id">{{
                    dato.attributes.etiqueta }}</option>
                </select>
                <span style="color: red;">{{ errores.etiqueta }}</span>
              </div>
            </div>
            <!-- <div class="row">
                <div class="col-lg-11 text-left">
                  <label for="d" class="text-info">Seleccione el artículo:</label>
                </div>
                <div class="col-lg-1">
                  <label for="d" class="text-left"><button class="btn btn-danger"><span class="fa fa-plus"></span></button></label>
                </div>
              </div> -->
            <!-- <div class="row">
              <div class="form-group col-lg-12 text-left">
                <label class="text-info">Seleccione la ubicación: <label style="color: red;">*</label></label>
                <select name="articulo" id="articulo" @change="verificar_error(4)"
                  style="width: 100%; text-align:center" placeholder="Artículo" class="text-gray-900 form-control"
                  v-model="Store.formProductos.data.attributes.ubicacion_id">
                  <option v-for="dato in itemsUbicaciones1" :key="dato.id" :value="dato.id">{{
                    dato.attributes.ubicacion }}</option>
                </select>
                <span style="color: red;">{{ errores.ubicacion_id }}</span>
              </div>


            </div> -->
            <div class="row">
              <div class="form-group col-lg-6 text-left">
                <!-- <label class="text-info">Cantidad:</label>
                <input type="text" class="form-control" id="cantidadP" aria-describedby="emailHelp"
                  v-model="Store.formProductos.data.attributes.minimo" placeholder="Ej: 5" value="0" required> -->

              </div>
              <div class="form-group col-lg-12 text-left">
                <label class="text-info">Mínimo en Stock: </label>
                <input type="text" class="form-control" id="minimo" v-model="Store.formProductos.data.attributes.minimo"
                  aria-describedby="emailHelp" value="0" placeholder="Ej: 5" required>

              </div>
            </div>
            <div class="text-center">
              <h1 class="h6 text-gray-900 mb-3">CAMPOS OBLIGATORIOS (<label style="color: red;">*</label>)
              </h1>
            </div>

            <div class="row">
              <div v-if="editar == false" class="form-group h4 col-lg-2">

              </div>
              <div v-if="editar == false" class="form-group h4 col-lg-5">
                <a @click="agregarUProducto(1)" class="btn btn-primary btn-block" :class="disabledProductoBtn">
                  {{ GuardarProductoC }}
                </a>
              </div>
              <div v-if="editar == false" class="form-group h4 col-lg-3">
                <a @click="agregarUProducto(2)" class="btn btn-info btn-block" data-dismiss="modal" aria-label="close"
                  :class="disabledProductoBtn">
                  {{ GuardarProducto }}
                </a>
              </div>
              <div v-if="editar" class="form-group h4 col-lg-6">
                <a @click="editarU()" class="btn btn-info btn-block" :class="deactiva">
                  {{ btnModificarM }}
                </a>
              </div>
              <div v-if="editar" class="form-group h4 col-lg-6">
                <a class="btn btn-danger btn-block" data-dismiss="modal" aria-label="close" @click="cancelarU()"
                  :class="deactiva">
                  Cancelar
                </a>
              </div>
            </div>


          </form>

          <!-- <div>
            <card class="card-section" style="width: 450px; margin: auto">
              <h1>Contact Form</h1>
              <form ref="values" @submit.prevent="sendEmail">
                <div class="form-group">
                  <KInput class="form-input" :style="{ width: '290px' }" name="name" v-model="user_name"
                    placeholder="Name"></KInput>
                </div>
                <div class="form-group">
                  <KInput class="form-input" :style="{ width: '290px' }" name="email" v-model="user_email"
                    placeholder="email address"></KInput>
                </div>
                <div class="form-group">
                  <kTextarea class="form-input" :style="{ width: '290px' }" name="message" v-model="user_message"
                    placeholder="Message" :rows="4" />
                </div>
                <div class="example-col">
                  <kButton :style="{ width: '100px' }" id="submit-btn">Submit form</kButton>
                </div>
              </form>
            </card>
          </div> -->
          <!-- <vue-barcode :value="cod" tag="svg"></vue-barcode> -->
        </div>

      </div>
    </div>
  </div>

  <div :class="'modal fade ' + showModal1" id="agregaLote" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" :aria-hidden="activaHide1" :arial-modal="activaModal1" :style="displayModal1">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-info" id="exampleModalLabel" v-if="editar == false">NUEVO LOTE</h5>
          <h5 class="modal-title text-info text-center" id="exampleModalLabel" v-if="editar == true"><span
              class="fa fa-edit"></span>
            MODIFICAR LOS DATOS DEL LOTE <br>(<label style="color: red;">{{
              Store.formLotes.data.attributes.descripcion
            }}</label>)</h5>
          <!-- <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
            style="text-align: center;">
            <h6 class="m-0 font-weight-bold text-info" v-if="editar == false"><span class="fa fa-plus"></span>
              AGREGAR
              NUEVA MAGNITUD / <i style="color: red;">CAMPOS OBLIGATORIOS</i> (<label style="color: red;">*</label>)
            </h6>
            <h6 class="m-0 font-weight-bold text-info" v-if="editar == true"><span class="fa fa-edit"></span>
              MODIFICAR LOS DATOS DE LA MAGNITUD <br>(<label style="color: red;">{{
                formSucursal.data.attributes.magnitud
              }}</label>)</h6>
          </div> -->
          <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true" class="text-info">×</span>
          </button>
        </div>
        <div class="modal-body text-center">

          <form id="form">

            <div class="col-lg-12">
              <div class="">

                <form class="user">

                  <div class="row">
                    <div class="form-group col-lg-12 text-left">
                      <label class="text-info">Descripción: <label style="color: red;">*</label></label>
                      <input @change="verificar_error(6)" type="text" class="form-control" id="sucursal"
                        aria-describedby="emailHelp" v-model="Store.formLotes.data.attributes.descripcion"
                        placeholder="Ej: Lote de productos" required>
                      <span style="color: red;">{{ errores.descripLote }}</span>
                    </div>
                    <div class="form-group col-lg-12 text-left">
                      <!-- <label class="text-info">Producto: <label style="color: red;">*</label></label> -->
                      <label class="text-info ">Seleccione el producto: <label style="color: red;">*</label>&nbsp;
                        &nbsp;
                        &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;
                        &nbsp;
                        &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;
                        &nbsp;
                        &nbsp;&nbsp; &nbsp; &nbsp;
                      </label>
                      <select name="produc" id="produc" @change="verificar_error(7)"
                        style="width: 100%; text-align:center" placeholder="Ej: Lapicez"
                        class="text-gray-900 form-control" v-model="Store.formLotes.data.attributes.producto_id">
                        <option v-for="dato in itemsProductos1" :key="dato.id" :value="dato.id">{{
                          dato.attributes.descripcion }}</option>
                      </select>
                      <span style="color: red;">{{ errores.producto_id }}</span>
                    </div>

                    <div class="form-group col-lg-12 text-left">
                      <label class="text-info">Cantidad: </label>
                      <input type="text" class="form-control" id="sucursal" aria-describedby="emailHelp"
                        v-model="Store.formLotes.data.attributes.cantidad" placeholder="Ej: 25" required>

                    </div>
                  </div>
                  <div class="row">
                    <div class="form-group col-lg-6 text-left">
                      <label class="text-info">Ubicación: <label style="color: red;">*</label></label>
                      <select name="produc" id="produc" @change="verificar_error(8)"
                        style="width: 100%; text-align:center" placeholder="Ej: Ubicaciones"
                        class="text-gray-900 form-control" v-model="Store.formLotes.data.attributes.ubicacion_id">
                        <option v-for="dato in itemsUbicaciones1" :key="dato.id" :value="dato.id">{{
                          dato.attributes.ubicacion }}</option>
                      </select>
                      <span style="color: red;">{{ errores.ubicacion_id }}</span>
                    </div>
                    <div class="form-group col-lg-6 text-left">
                      <label class="text-info">Fecha de compra: </label>
                      <input type="datetime-local" class="form-control" id="fechaC" aria-describedby="emailHelp"
                        v-model="Store.formLotes.data.attributes.fecha_compra" placeholder="Ej: 10/10/2024" required>
                    </div>
                  </div>
                  <div class="row">
                    <div class="form-group col-lg-6 text-left">
                      <label class="text-info">Precio de compra: </label>
                      <input type="text" class="form-control" id="sucursal" aria-describedby="emailHelp"
                        v-model="Store.formLotes.data.attributes.precio_compra" placeholder="Ej: 50" required>

                    </div>
                    <div class="form-group col-lg-6 text-left">
                      <label class="text-info">Moneda de compra: </label>
                      <select name="produc" id="produc" style="width: 100%; text-align:center" placeholder="Artículo"
                        class="text-gray-900 form-control" v-model="Store.formLotes.data.attributes.moneda_compra">
                        <option v-for="dato in itemsMoneda1" :key="dato.id" :value="dato.id">{{
                          dato.attributes.abreviatura }}</option>
                      </select>

                    </div>
                  </div>
                  <div class="row">
                    <div class="form-group col-lg-6 text-left">
                      <label class="text-info">Precio de venta: </label>
                      <input type="text" class="form-control" id="sucursal" aria-describedby="emailHelp"
                        v-model="Store.formLotes.data.attributes.precio_venta" placeholder="Ej: 100" required>

                    </div>
                    <div class="form-group col-lg-6 text-left">
                      <label class="text-info">Moneda de venta: </label>
                      <select name="produc" id="produc" style="width: 100%; text-align:center" placeholder="Ej: USD"
                        class="text-gray-900 form-control" v-model="Store.formLotes.data.attributes.moneda_venta">
                        <option v-for="dato in itemsMoneda1" :key="dato.id" :value="dato.id">{{
                          dato.attributes.abreviatura }}</option>
                      </select>

                    </div>
                    <div class="form-group col-lg-12 text-left">
                      <label class="text-info">Observaciones: </label>
                      <textarea class="form-control" id="observaciones"
                        v-model="Store.formLotes.data.attributes.observacion"
                        placeholder="Ej: Observaciones del lote"></textarea>
                      <!-- <span style="color: red;">{{ errores.descripLote }}</span> -->
                    </div>
                  </div>
                  <!-- <div class="row">

                      </div> -->


                </form>
              </div>
              <div class="text-center">
                <h1 class="h6 text-gray-900 mb-4"><i>CAMPOS OBLIGATORIOS</i> (<label style="color: red;">*</label>)
                </h1>
              </div>
              <div class="row">

                <div v-if="editar == false" class="form-group h4 col-lg-3">

                </div>
                <div v-if="editar == false" class="form-group h4 col-lg-6">
                  <a @click="agregarULote(1)" class="btn btn-info btn-block" data-dismiss="modal" aria-label="Close"
                    :class="disabledProductoBtn">
                    {{ GuardarMag }}
                  </a>
                </div>
                <div v-if="editar" class="form-group h4 col-lg-6">
                  <a @click="editarULote()" class="btn btn-info btn-block" :class="disabledProductoBtn">
                    {{ btnModificarL }}
                  </a>
                </div>
                <div v-if="editar" class="form-group h4 col-lg-6">
                  <a @click="cancelarU()" class="btn btn-danger btn-block" :class="disabledProductoBtn"
                    data-dismiss="modal" aria-label="Close">
                    Cancelar
                  </a>
                </div>
              </div>
            </div>

            <!-- <div class="modal-footer" style="text-align: center;"> -->
            <!-- <a class="btn btn-info" @click="AColumnas">Aceptar</a> -->
            <!-- <button class="btn btn-secondary btn-sm" type="submit" id="button" @click="enviarEmail()">Enviar</button> -->
            <!-- <div class="row">

              <div v-if="editar == false" class="form-group h4 col-lg-1">

              </div>
              <div v-if="editar == false" class="form-group h4 col-lg-6">
                <a @click="agregarU" class="btn btn-info btn-block">
                  Guardar datos
                </a>
              </div>
              <div v-if="editar" class="form-group h4 col-lg-6">
                <a @click="editarU" class="btn btn-info btn-block">
                  {{ btnModificar }}
                </a>
              </div>
              <div v-if="editar" class="form-group h4 col-lg-6">
                <a @click="cancelarU()" class="btn btn-danger btn-block" data-dismiss="modal" aria-label="Close">
                  Cancelar
                </a>
              </div>
              </div> -->
            <!-- </div> -->
          </form>

          <!-- <div>
            <card class="card-section" style="width: 450px; margin: auto">
              <h1>Contact Form</h1>
              <form ref="values" @submit.prevent="sendEmail">
                <div class="form-group">
                  <KInput class="form-input" :style="{ width: '290px' }" name="name" v-model="user_name"
                    placeholder="Name"></KInput>
                </div>
                <div class="form-group">
                  <KInput class="form-input" :style="{ width: '290px' }" name="email" v-model="user_email"
                    placeholder="email address"></KInput>
                </div>
                <div class="form-group">
                  <kTextarea class="form-input" :style="{ width: '290px' }" name="message" v-model="user_message"
                    placeholder="Message" :rows="4" />
                </div>
                <div class="example-col">
                  <kButton :style="{ width: '100px' }" id="submit-btn">Submit form</kButton>
                </div>
              </form>
            </card>
          </div> -->
          <!-- <vue-barcode :value="cod" tag="svg"></vue-barcode> -->
        </div>

      </div>
    </div>
  </div>

  <div :class="'modal fade ' + showModal1" id="agregaAuditoria" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" :aria-hidden="activaHide1" :arial-modal="activaModal1" :style="displayModal1">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-info" id="exampleModalLabel">LOTE (<label style="color: red;">{{
            Store.formLotes.data.attributes.descripcion
              }}</label>) </h5>
          <!-- <h5 class="modal-title text-info text-center" id="exampleModalLabel" v-if="editar == true"><span
              class="fa fa-edit"></span>
            MODIFICAR LOS DATOS DEL LOTE <br>(<label style="color: red;">{{
              Store.formLotes.data.attributes.descripcion
            }}</label>)</h5> -->
          <!-- <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
            style="text-align: center;">
            <h6 class="m-0 font-weight-bold text-info" v-if="editar == false"><span class="fa fa-plus"></span>
              AGREGAR
              NUEVA MAGNITUD / <i style="color: red;">CAMPOS OBLIGATORIOS</i> (<label style="color: red;">*</label>)
            </h6>
            <h6 class="m-0 font-weight-bold text-info" v-if="editar == true"><span class="fa fa-edit"></span>
              MODIFICAR LOS DATOS DE LA MAGNITUD <br>(<label style="color: red;">{{
                formSucursal.data.attributes.magnitud
              }}</label>)</h6>
          </div> -->
          <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true" class="text-info">×</span>
          </button>
        </div>
        <div class="modal-body text-center">

          <form id="form">

            <div class="col-lg-12">
              <div class="">

                <form class="user">

                  <div class="row">
                    <label for="">
                      Cantidad actual: {{
                        cantInicial
                      }}
                    </label>
                    <div class="form-group col-lg-12 text-left">
                      <label class="text-info">Aumentar o disminuir: </label>
                      <input type="text" class="form-control" id="sucursal" aria-describedby="emailHelp"
                        v-model="Store.formLotes.data.attributes.cantidad" placeholder="Ej: 5" required>

                    </div>
                  </div>

                  <div class="row">
                    <div class="form-group col-lg-12 text-left">
                      <!-- <label class="text-info">Producto: <label style="color: red;">*</label></label> -->
                      <label class="text-info ">Seleccione la operación: <label style="color: red;">*</label>&nbsp;
                        &nbsp;
                        &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;
                        &nbsp;
                        &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;
                        &nbsp;
                        &nbsp;&nbsp; &nbsp; &nbsp;
                      </label>
                      <select name="produc" id="produc" @change="verificar_error(7)"
                        style="width: 100%; text-align:center" placeholder="Ej: Lapicez"
                        class="text-gray-900 form-control"
                        v-model="Store.formInventario.data.meta.foreign_keys_instances.operacion_id">
                        <option v-for="dato in itemsOperaciones1" :key="dato.id" :value="dato.id">{{
                          dato.attributes.operacion }}</option>
                      </select>
                      <span style="color: red;">{{ errores.producto_id }}</span>
                    </div>

                    <div class="form-group col-lg-12 text-left">
                      <label class="text-info">Justificación: </label>
                      <textarea class="form-control" id="justificacion"
                        v-model="Store.formInventario.data.attributes.justificacion"
                        placeholder="Ej: Por qué está aumentando o disminuyendo la cantidad?"></textarea>
                      <!-- <span style="color: red;">{{ errores.descripLote }}</span> -->
                    </div>
                  </div>
                  <!-- <div class="row">

                      </div> -->


                </form>
              </div>
              <div class="text-center">
                <h1 class="h6 text-gray-900 mb-4"><i>CAMPOS OBLIGATORIOS</i> (<label style="color: red;">*</label>)
                </h1>
              </div>
              <div class="row">

                <div class="form-group h4 col-lg-3">

                </div>
                <div class="form-group h4 col-lg-6">
                  <a @click="aceptarCambio()" class="btn btn-info btn-block" data-dismiss="modal" aria-label="Close"
                    :class="disabledLoteBtn">
                    {{ AceptarAD }}
                  </a>
                </div>
                <!-- <div v-if="editar" class="form-group h4 col-lg-6">
                  <a @click="editarULote()" class="btn btn-info btn-block" :class="disabledProductoBtn">
                    {{ btnModificarL }}
                  </a>
                </div> -->
                <!-- <div v-if="editar" class="form-group h4 col-lg-6">
                  <a @click="cancelarU()" class="btn btn-danger btn-block" :class="disabledProductoBtn"
                    data-dismiss="modal" aria-label="Close">
                    Cancelar
                  </a>
                </div> -->
              </div>
            </div>

            <!-- <div class="modal-footer" style="text-align: center;"> -->
            <!-- <a class="btn btn-info" @click="AColumnas">Aceptar</a> -->
            <!-- <button class="btn btn-secondary btn-sm" type="submit" id="button" @click="enviarEmail()">Enviar</button> -->
            <!-- <div class="row">

              <div v-if="editar == false" class="form-group h4 col-lg-1">

              </div>
              <div v-if="editar == false" class="form-group h4 col-lg-6">
                <a @click="agregarU" class="btn btn-info btn-block">
                  Guardar datos
                </a>
              </div>
              <div v-if="editar" class="form-group h4 col-lg-6">
                <a @click="editarU" class="btn btn-info btn-block">
                  {{ btnModificar }}
                </a>
              </div>
              <div v-if="editar" class="form-group h4 col-lg-6">
                <a @click="cancelarU()" class="btn btn-danger btn-block" data-dismiss="modal" aria-label="Close">
                  Cancelar
                </a>
              </div>
              </div> -->
            <!-- </div> -->
          </form>

          <!-- <div>
            <card class="card-section" style="width: 450px; margin: auto">
              <h1>Contact Form</h1>
              <form ref="values" @submit.prevent="sendEmail">
                <div class="form-group">
                  <KInput class="form-input" :style="{ width: '290px' }" name="name" v-model="user_name"
                    placeholder="Name"></KInput>
                </div>
                <div class="form-group">
                  <KInput class="form-input" :style="{ width: '290px' }" name="email" v-model="user_email"
                    placeholder="email address"></KInput>
                </div>
                <div class="form-group">
                  <kTextarea class="form-input" :style="{ width: '290px' }" name="message" v-model="user_message"
                    placeholder="Message" :rows="4" />
                </div>
                <div class="example-col">
                  <kButton :style="{ width: '100px' }" id="submit-btn">Submit form</kButton>
                </div>
              </form>
            </card>
          </div> -->
          <!-- <vue-barcode :value="cod" tag="svg"></vue-barcode> -->
        </div>

      </div>
    </div>
  </div>
  <!-- <template v-if="esperando">
    <div v-on="loadingA('Actualizando datos...')">

    </div>
  </template> -->

  <!-- <div :class="showModBack" @click="abrirModal()"></div> -->
  <!-- <div :class="showModBack2" @click="cerrarModal()"></div> -->
</template>
<script setup>
import { ref, reactive, onMounted, watchEffect } from 'vue';
import Swal from 'sweetalert2';
// import AddProducto from './modal/AddProducto.vue';
// import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import * as XLSX from 'xlsx';
// import Quagga from 'quagga';
import { useStoreAxios } from '@/store/AxiosStore';
import { ErrorFull, successFull } from './controler/ControlerApp';
import { EditarDatos, EliminarDatos, GuardarDatos, obtenerDatos, subirImagen, url, urlAuditoria } from './helper/useAxios';
// import { data } from 'jquery';
import jsPDF from 'jspdf';
// import { event } from 'jquery';
import ClickRowArgument from 'vue3-easy-data-table';
// import { ClickRowArgument } from "vue3-easy-data-table";
// import autoTable from 'jspdf-autotable';
// import { almacenDatosProductos, GuardarDatos, obtenerArticulos, obtenerProductos, obtenerUbicaciones } from './service/servicio';
// import { disabledProductos, esperandoProductos, formProductos, itemsProductos, listadoArticulos, listadoMedida, listadoProductos, listadoUbicaciones, loadingP } from './controler/ControlerApp';
const Store = useStoreAxios()

const detalle = ref(false)

const searchField = ref(["id", "attributes.descripcion", "attributes.observacion"]);

const searchField2 = ref(["id", "attributes.descripcion", "attributes.observacion", "attributes.cantidad"]);

const searchField1 = ref('')

const searchValue = ref("");

const searchValue2 = ref("");

const critBusq = ref([], [], []);

const etiqueta_R = ref(0)

const itemsOperaciones1 = ref([]);

let imgPerfil = ref("");
const nombreIMG = ref("");

const cargarImagen = async () => {
  let file = document.getElementById("file").files[0];
  nombreIMG.value = file.name.split('.').pop();
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      imgPerfil.value = e.target.result;
      // console.log(imgPerfil.value)
    };
    reader.readAsDataURL(file);
    // data.append
    // successFull("Imagen cambiada satisfactoriamente.", "top-start");
  }
}

const actualizaTabla = ref(0)

const generar_pdf = async () => {

  let nuevoArreglo = ref([]);

  for (let index = 0; index < itemsProductos1.value.length; index++) {
    nuevoArreglo.value.push({
      id: itemsProductos1.value[index].id,
      descripcion: itemsProductos1.value[index].attributes.descripcion,
      codigo: itemsProductos1.value[index].relationships.departamento.data.id.toString() + itemsProductos1.value[index].relationships.articulo.data.id.toString() + itemsProductos1.value[index].id.toString(),
      observacion: itemsProductos1.value[index].attributes.observacion,
      medida: obtenMedida(itemsProductos1.value[index].relationships.medida.data.id),
      minimo: itemsProductos1.value[index].attributes.minimo
    })
  }

  const doc = new jsPDF('p', 'pt');

  let columnas = [
    { title: "No", dataKey: "id" },
    { title: "Código", dataKey: "codigo" },
    { title: "En Stock", dataKey: "cantidad" },
    { title: "Mínimo stock", dataKey: "minimo" },
    { title: "Descripción", dataKey: "descripcion" },
    { title: "Observación", dataKey: "observacion" }
  ]

  doc.autoTable({ columns: columnas, body: nuevoArreglo.value })

  doc.text("Listado de productos", 220, 25);
  doc.save("Productos.pdf");
}

const NombreProducto = ref('');
const fileName = ref('');
const obtenDescripcion = (d) => {
  NombreProducto.value = d;
  const segments = NombreProducto.value.split('/');
  // Toma el último segmento que es el nombre del archivo
  fileName.value = segments.pop();
}

const disabledProductos = ref('')

const prueba = () => {
  successFull("Okkk", "top-center")
}

const formCantidad = reactive({
  data: {
    attributes: {
      cantidad: 0,
    }
  }
})

const aceptarCambio = async () => {
  Store.cambiaEstado(9);
  AceptarAD.value = 'Actualizando...'
  disabledLoteBtn.value = 'disabled'
  // guardo la operacion en la auditoria
  Store.formInventario.data.attributes.cantidad = parseInt(Store.formLotes.data.attributes.cantidad);
  // console.log(IdLote.value)
  const response2 = await GuardarDatos(Store.formInventario, 14, IdLote.value);
  // console.log(response2)
  Store.formLotes.data.attributes.cantidad = response2.attributes.cantidad;
  // const response = await EditarDatos(IdLote.value, Store.formLotes, 10);
  Store.EditLotes(response2)
  itemsLotes1.value = Store.itemsLotes;
  successFull("Cantidad modificada satisfactoriamente.", "top-end")
  Store.formLotes.data.attributes.cantidad = '';
  Store.formInventario.data.attributes.justificacion = '';
  Store.cambiaEstado(9);
  disabledLoteBtn.value = '';
  AceptarAD.value = 'Aceptar';
}

const nombreProd = ref('');
const idProd = ref('');
const image_path = ref('');
const descProd = ref('');
const obsProd = ref('');
const ubicaProd = ref('');
const codProd = ref('');
const cantProd = ref(0);
const minProd = ref(0);
const medidProd = ref('');
const artiProd = ref('');
const GuardarMag = ref('Agregar')

const Atras = () => {
  detalle.value = false;
}

const Detalles = (dato) => {
  // console.log(dato)
  detalle.value = true;
  nombreProd.value = dato.attributes.descripcion;
  idProd.value = dato.id;
  codProd.value = dato.relationships.departamento.data.id.toString() + dato.relationships.articulo.data.id.toString() + dato.id.toString();
  obsProd.value = dato.attributes.observacion;
  medidProd.value = obtenMedida(dato.relationships.medida.data.id)
  artiProd.value = obtenarticulo(dato.relationships.articulo.data.id)
  descProd.value = dato.attributes.descripcion;
  image_path.value = dato.attributes.imagen_path;
  // cantProd.value = dato.attributes.cantidad;
  minProd.value = dato.attributes.minimo;
  // ubicaProd.value = obtenUbicacion(dato.relationships.ubicacion.data.id)

}

const cantInicial = ref(0);

const IdLote = ref(0);

const Aumentar = async (dato) => {
  // const { value: formValues } = await Swal.fire({
  //   title: `Cantidad actual en Stock: ${dato.attributes.cantidad} `,
  //   html: `
  //   <label> Aumentar: Ej: 5 / Disminuir: Ej: -5 </label>
  //   <input id="swal-input2" class="swal2-input" placeholder="Ej: 5 ó -5">
  //   <label> Operación: </label>
  //   <input id="swal-input1" class="swal2-input" placeholder="">
  // `,
  //   focusConfirm: false,
  //   showCancelButton: true,
  //   confirmButtonColor: "#3085d6",
  //   cancelButtonColor: "#d33",
  //   confirmButtonText: "Modificar",
  //   cancelButtonText: "Cancelar",
  //   preConfirm: () => {
  //     return [
  //       document.getElementById("swal-input2").value
  //     ];
  //   }
  // });
  // if (formValues) {
  //   Store.cambiaEstado(9);
  Store.formLotes.data.attributes.descripcion = dato.attributes.descripcion;
  Store.formLotes.data.attributes.producto_id = dato.attributes.producto_id;
  Store.formLotes.data.attributes.observacion = dato.attributes.observacion;
  Store.formLotes.data.attributes.ubicacion_id = dato.attributes.ubicacion_id;
  Store.formLotes.data.attributes.moneda_compra = dato.attributes.moneda_compra;
  Store.formLotes.data.attributes.precio_compra = dato.attributes.precio_compra;
  Store.formLotes.data.attributes.precio_venta = dato.attributes.precio_venta;
  Store.formLotes.data.attributes.moneda_venta = dato.attributes.moneda_venta;
  Store.formLotes.data.attributes.fecha_compra = dato.attributes.fecha_compra;
  cantInicial.value = dato.attributes.cantidad;
  IdLote.value = dato.id;
  // if (dato.attributes.cantidad == null) {
  //   Store.formLotes.data.attributes.cantidad = parseInt(formValues[0]);
  // } else {
  //   Store.formLotes.data.attributes.cantidad = parseInt(dato.attributes.cantidad) + parseInt(formValues[0]);
  // }
  // formCantidad.data.attributes.cantidad = parseInt(dato.attributes.cantidad) + parseInt(formValues[0]);
  // const response = await EditarDatos(dato.id, Store.formLotes, 10);
  // // console.log(response)
  // Store.EditLotes(response)
  // itemsLotes1.value = Store.itemsLotes;
  // // guardo la operacion en la auditoria
  // Store.formInventario.data.attributes.justificacion = "Aumentando / disminuyendo la cantidad del lote.";
  // Store.formInventario.data.attributes.cantidad = parseInt(formValues[0]);
  // Store.formInventario.data.attributes.lot_id = response.id;
  // Store.formInventario.data.attributes.operacion_id = 6;
  // Store.formInventario.data.attributes.observacion = "Perfecto";
  // const response2 = await GuardarDatos(Store.formInventario, 14);
  // successFull("Cantidad modificada satisfactoriamente.", "top-end")
  // Store.cambiaEstado(9);
  // }
}

const barcode = ref();

let GuardarProducto = ref('Agregar');

let AceptarAD = ref('Aceptar');

let GuardarProductoC = ref('Agregar y Continuar');

let btnModificarM = ref('Modificar');

let btnModificarL = ref('Modificar');

const disabledProductoBtn = ref('')

const disabledLoteBtn = ref('')

const itemsMedidas1 = ref([])

const itemsDeparta1 = ref([])

const itemsMoneda1 = ref([])

const itemsEtiqueta1 = ref([])

const itemsEtiquetaProductos1 = ref([])

const itemsProductos1 = ref([])

const itemsImagenes1 = ref([])

const itemsArticulos1 = ref([])

const itemsUbicaciones1 = ref([])

const itemsLotes1 = ref([])

const agrega = () => {
  editar.value = false
  errores.value.articulo_id = "";
  errores.value.ubicacion_id = "";
  errores.value.descripcion = "";
  errores.value.observacion = "";
  errores.value.cantidad = "";
  Store.formProductos.data.attributes.articulo_id = "";
  Store.formProductos.data.attributes.descripcion = "";
  Store.formProductos.data.attributes.observacion = "";
  Store.formProductos.data.attributes.minimo = "";
  Store.formLotes.data.attributes.cantidad = 0;
  Store.formLotes.data.attributes.descripcion = "";
  Store.formLotes.data.attributes.producto_id = 0;
  Store.formLotes.data.attributes.ubicacion_id = 0;
  Store.formLotes.data.attributes.moneda_compra = 0;
  Store.formLotes.data.attributes.precio_compra = "";
  Store.formLotes.data.attributes.fecha_compra = "";
  Store.formLotes.data.attributes.precio_venta = "";
  Store.formLotes.data.attributes.observacion = "";
}

let y = 0;

const obtenMedida = (id) => {
  for (let index = 0; index < itemsMedidas1.value.length; index++) {
    if (id == itemsMedidas1.value[index].id) {
      // console.log(listadoMedida.value[index].id)
      return itemsMedidas1.value[index].attributes.medida
    }
  }

}
const obtenImagen = (id) => {
  // for (let index = 0; index < itemsImagenes1.value.length; index++) {
  //   if (id == itemsImagenes1.value[index].relationships.producto.data.id) {
  //     // console.log(listadoMedida.value[index].id)
  //     // console.log(itemsImagenes1.value[index].attributes.path)
  //     return itemsImagenes1.value[index].attributes.path
  //   }
  // }

}

const obtenDepartamento = (id) => {
  for (let index = 0; index < itemsDeparta1.value.length; index++) {
    if (id == itemsDeparta1.value[index].id) {
      // console.log(listadoMedida.value[index].id)
      return itemsDeparta1.value[index].attributes.departamento
    }
  }

}

const obtenMoneda = (id) => {
  for (let index = 0; index < itemsMoneda1.value.length; index++) {
    if (id == itemsMoneda1.value[index].id) {
      // console.log(listadoMedida.value[index].id)
      return itemsMoneda1.value[index].attributes.abreviatura
    }
  }

}

const obtenEtiqueta = (id) => {
  // console.log(id)
  for (let index = 0; index < itemsEtiquetaProductos1.value.length; index++) {
    // console.log(itemsEtiqueta1.value[index].relationships.productos.data[0].id)
    for (let index1 = 0; index1 < itemsEtiqueta1.value.length; index1++) {
      if ((id == itemsEtiquetaProductos1.value[index].meta.foreign_keys_instances.producto_id) && (itemsEtiquetaProductos1.value[index].meta.foreign_keys_instances.etiqueta_id == itemsEtiqueta1.value[index1].id)) {
        return itemsEtiqueta1.value[index1].attributes.etiqueta
      }
    }
  }

}

const obtenUbicacion = (id) => {
  const val = ref('')

  for (let index = 0; index < itemsUbicaciones1.value.length; index++) {
    if (id == itemsUbicaciones1.value[index].id) {
      // console.log(listadoMedida.value[index].id)
      return itemsUbicaciones1.value[index].attributes.ubicacion
    }
  }

}

const obtenarticulo = (id) => {
  const val = ref('')

  for (let index = 0; index < itemsArticulos1.value.length; index++) {
    if (id == itemsArticulos1.value[index].id) {
      // console.log(listadoMedida.value[index].id)
      return itemsArticulos1.value[index].attributes.articulo
    }
  }

}

const verificar_error = (n) => {
  switch (n) {
    case 1:
      if (Store.formProductos.data.attributes.descripcion != '') {
        errores.value.descripcion = "";
      } else {
        errores.value.descripcion = "Este campo es obligatorio"
      }
      break;
    case 2:
      if (Store.formProductos.data.attributes.observacion != '') {
        errores.value.observacion = "";
      } else {
        errores.value.observacion = "Este campo es obligatorio"
      }
      break;
    case 3:
      if (Store.formProductos.data.attributes.articulo_id != 0) {
        errores.value.articulo_id = "";
      } else {
        errores.value.articulo_id = "Este campo es obligatorio"
      }
      break;
    case 5:
      if (Store.formProductos.data.attributes.cantidad != 0) {
        errores.value.cantidad = "";
      } else {
        errores.value.cantidad = "Este campo es obligatorio"
      }
      break;

    case 6:
      if (Store.formLotes.data.attributes.descripcion != 0) {
        errores.value.descripLote = "";
      } else {
        errores.value.descripLote = "Este campo es obligatorio"
      }
      break;
    case 7:
      if (Store.formLotes.data.attributes.producto_id != 0) {
        errores.value.producto_id = "";
      } else {
        errores.value.producto_id = "Este campo es obligatorio"
      }
      break;
    case 8:
      if (Store.formLotes.data.attributes.ubicacion_id != 0) {
        errores.value.ubicacion_id = "";
      } else {
        errores.value.ubicacion_id = "Este campo es obligatorio"
      }
      break;
    case 9:
      if (etiqueta_R != 0) {
        errores.value.etiqueta = "";
      } else {
        errores.value.etiqueta = "Este campo es obligatorio"
      }
      break;
    default:
      break;
  }
  // if (formProductos.data.attributes.descripcion != '') {
  //   errores.value.descripcion = "";
  // }
  // if (formProductos.data.attributes.observacion != '') {
  //   errores.value.observacion = "";
  // }
  // if (formProductos.data.attributes.articulo_id != 0) {
  //   errores.value.articulo_id = -1;
  // }
  // if (formProductos.data.attributes.ubicacion_id != 0) {
  //   errores.value.ubicacion_id = -1;
  // }
  // if (formProductos.data.attributes.cantidad != 0) {
  //   errores.value.cantidad = -1;
  // }
}

const Asignar_Imagen = async (id) => {
  var data = new FormData();
  data.append('imagen', imgPerfil.value);
  // data.append('_method', 'PUT');
  // console.log(data)
  const response4 = await subirImagen(id, data);
  // console.log(id+"."+nombreIMG.value)
  // if (response4 != null) {
  // } else {
  //   Store.formProductos.data.attributes.imagen_path = 1;
  // }
  // console.log(id)
  const response1 = await obtenerDatos(1)
  // console.log(response1)
  for (let index = 0; index < response1.length; index++) {
    if (id == response1[index].id) {
      Store.formProductos.data.attributes.descripcion = response1[index].attributes.descripcion;
      Store.formProductos.data.attributes.observacion = response1[index].attributes.observacion;
      Store.formProductos.data.attributes.articulo_id = response1[index].relationships.articulo.data.id;
      Store.formProductos.data.attributes.minimo = response1[index].attributes.minimo;
    }
  }
  Store.formProductos.data.attributes.imagen_path = "back/resources/imagenes/inventario/productos/" + id + "." + nombreIMG.value;
  // Store.formProductos.data.attributes.producto_imagen_id = 1;
  // console.log(Store.formProductos)
  const response = await EditarDatos(id, Store.formProductos, 1);
  // console.log(response)
  editar.value = false;
  Store.formProductos.data.attributes.descripcion = ''
  Store.formProductos.data.attributes.observacion = '';
  Store.formProductos.data.attributes.articulo_id = ''
  Store.formProductos.data.attributes.minimo = '';
  Store.formProductos.data.attributes.imagen_path = '';
  Store.EditProductos(response)
  itemsProductos1.value = [];
  itemsProductos1.value = Store.itemsProductos;
}

const errores = ref({ descripcion: "", observacion: "", articulo_id: "", ubicacion_id: "", cantidad: "", descripLote: "", precio_compra: "", precio_venta: "", moneda_compra: "", moneda_venta: "", producto_id: "", obsvacLote: "" })

const agregarUProducto = async (n) => {
  if (Store.formProductos.data.attributes.descripcion != '' && Store.formProductos.data.attributes.articulo_id != 0) {
    // editando.value = true;
    Store.formProductos.data.attributes.imagen_path = '';
    if (n == 1) {
      GuardarProductoC.value = 'Guardando...';
      disabledProductoBtn.value = 'disabled';
      Store.cambiaEstado(1)
      const response = await GuardarDatos(Store.formProductos, 1);
      // console.log(response)
      if (response == null) {
        Store.cambiaEstado(1)
        disabledProductoBtn.value = '';
        GuardarProductoC.value = 'Agregar y continuar';
        // errores.value.descripcion = "Este dato ya existe en el sistema";
        ErrorFull("Error realizando operación, vuelva a intentarlo.", "top-start")
      } else {
        disabledProductoBtn.value = '';
        GuardarProductoC.value = 'Agregar y continuar'
        Store.formProductos.data.attributes.minimo = '';
        Store.formProductos.data.attributes.descripcion = '';
        Store.formProductos.data.attributes.articulo_id = '';
        Store.formProductos.data.attributes.observacion = '';
        Store.formProductos.data.attributes.imagen_path = '';
        Store.AddProductos(response)
        Asignar_Imagen(response.id);
        itemsProductos1.value = Store.itemsProductos;
        actualizaTabla.value = actualizaTabla.value + 1;
        // Store.cambiaEstado(1)
        Store.formEtiquetaProducto.data.attributes.producto_id = response.id;
        Store.formEtiquetaProducto.data.attributes.etiqueta_id = etiqueta_R.value;
        const response2 = await GuardarDatos(Store.formEtiquetaProducto, 13);
        successFull("Producto agregado satisfactoriamente.", "top-end")
        GuardarProductoC.value = 'Agregar y continuar';
        disabledProductoBtn.value = '';
        Store.cambiaEstado(1)
      }
    } else {
      GuardarProducto.value = 'Guardando...';
      disabledProductoBtn.value = 'disabled';
      // Store.formProductos.id = Store.nextIDProducto + 1;
      // console.log(Store.formProductos);
      // Agregar_Productos();
      Store.cambiaEstado(1)
      const response = await GuardarDatos(Store.formProductos, 1);
      // console.log(response)
      if (response == null) {
        Store.cambiaEstado(1)
        disabledProductoBtn.value = '';
        GuardarProducto.value = 'Agregar';
        // errores.value.descripcion = "Este dato ya existe en el sistema";
        ErrorFull("Error realizando operación, vuelva a intentarlo.", "top-start")
      } else {
        disabledProductoBtn.value = '';
        GuardarProducto.value = 'Agregar'
        Store.formProductos.data.attributes.minimo = '';
        Store.formProductos.data.attributes.descripcion = '';
        Store.formProductos.data.attributes.articulo_id = '';
        Store.formProductos.data.attributes.observacion = '';
        Store.formProductos.data.attributes.imagen_path = '';
        Store.AddProductos(response)
        Asignar_Imagen(response.id);
        itemsProductos1.value = Store.itemsProductos;
        actualizaTabla.value = actualizaTabla.value + 1;
        Store.formEtiquetaProducto.data.attributes.producto_id = response.id;
        Store.formEtiquetaProducto.data.attributes.etiqueta_id = etiqueta_R.value;
        const response2 = await GuardarDatos(Store.formEtiquetaProducto, 13);
        successFull("Producto agregado satisfactoriamente.", "top-end")
        GuardarProducto.value = 'Agregar';
        disabledProductoBtn.value = '';
        Store.cambiaEstado(1)
      }
    }

    // editando.value = false;

  } else {
    // editando.value = false;
    if (Store.formProductos.data.attributes.descripcion == '') {
      errores.value.descripcion = "Este campo es obligatorio";
    } else {
      errores.value.descripcion = "";
    }

    if (Store.formProductos.data.attributes.observacion == '') {
      errores.value.observacion = "Este campo es obligatorio";
    } else {
      errores.value.observacion = "";
    }
    if (Store.formProductos.data.attributes.articulo_id == '') {
      errores.value.articulo_id = 'Este campo es obligatorio';
    } else {
      errores.value.articulo_id = "";
    }
    if (Store.formProductos.data.attributes.minimo == '') {
      errores.value.cantidad = 'Este campo es obligatorio';
    } else {
      errores.value.cantidad = "";
    }
    GuardarProducto.value = 'Agregar';
    disabledProductoBtn.value = ''
    // Store.cambiaEstado(1)
    ErrorFull("Debe llenar todos los campos obligatorios", "top-start")
  }

}

const agregarULote = async (n) => {
  if (Store.formLotes.data.attributes.descripcion != '' && Store.formLotes.data.attributes.producto_id != 0 && Store.formLotes.data.attributes.ubicacion_id != 0) {
    // editando.value = true;
    if (n == 1) {
      GuardarMag.value = 'Guardando...';
      disabledProductoBtn.value = 'disabled';
      Store.cambiaEstado(9)
      if (Store.formLotes.data.attributes.cantidad == '') { Store.formLotes.data.attributes.cantidad = null }
      const response = await GuardarDatos(Store.formLotes, 10);
      // console.log(response)
      if (response == null) {
        Store.cambiaEstado(9)
        disabledProductoBtn.value = '';
        GuardarMag.value = 'Agregar y continuar';
        errores.value.descripcion = "Este dato ya existe en el sistema";
        ErrorFull("Error insertando los datos. Verifíquelos", "top-start")
      } else {
        disabledProductoBtn.value = '';
        GuardarMag.value = 'Agregar y continuar'
        Store.formLotes.data.attributes.cantidad = '';
        Store.formLotes.data.attributes.descripcion = '';
        Store.formLotes.data.attributes.producto_id = '';
        Store.formLotes.data.attributes.observacion = '';
        Store.formLotes.data.attributes.precio_compra = '';
        Store.formLotes.data.attributes.moneda_compra = '';
        Store.formLotes.data.attributes.precio_venta = '';
        Store.formLotes.data.attributes.precio_venta = '';
        // guardo la operacion en la auditoria
        Store.formInventario.data.attributes.justificacion = "Inicializando los valores del lote.";
        if (response.attributes.cantidad == null) { Store.formInventario.data.attributes.cantidad = 0 } else {
          Store.formInventario.data.attributes.cantidad = response.attributes.cantidad;
        }
        // Store.formInventario.data.attributes.lot_id = response.id;
        Store.formInventario.data.meta.foreign_keys_instances.operacion_id = 1;
        // Store.formInventario.data.attributes.observacion = "Agregando nuevo lote.";
        const response2 = await GuardarDatos(Store.formInventario, 14, response.id);
        Store.AddLotes(response)
        itemsLotes1.value = Store.itemsLotes;
        Store.AddAuditoria(response2)
        // console.log(response2)
        successFull("Lote agregado satisfactoriamente.", "top-end")
        GuardarMag.value = 'Agregar y continuar';
        disabledProductoBtn.value = '';
        Store.cambiaEstado(9)
      }
    } else {
      GuardarMag.value = 'Guardando...';
      disabledProductoBtn.value = 'disabled';
      // Store.formProductos.id = Store.nextIDProducto + 1;
      // console.log(Store.formProductos);
      // Agregar_Productos();
      Store.cambiaEstado(9)
      const response = await GuardarDatos(Store.formLotes, 10);
      // console.log(response)
      if (response == null) {
        Store.cambiaEstado(9)
        disabledProductoBtn.value = '';
        GuardarMag.value = 'Agregar';
        errores.value.descripLote = "Este dato ya existe en el sistema";
        ErrorFull("Descripción de lote ya existente.", "top-start")
      } else {
        disabledProductoBtn.value = '';
        GuardarMag.value = 'Agregar'
        Store.formLotes.data.attributes.cantidad = '';
        Store.formLotes.data.attributes.descripcion = '';
        Store.formLotes.data.attributes.producto_id = '';
        Store.formLotes.data.attributes.observacion = '';
        Store.formLotes.data.attributes.precio_compra = '';
        Store.formLotes.data.attributes.moneda_compra = '';
        Store.formLotes.data.attributes.precio_venta = '';
        Store.formLotes.data.attributes.precio_venta = '';
        Store.AddLotes(response)
        itemsLotes1.value = Store.itemsLotes;
        // guardo la operacion en la auditoria
        Store.formInventario.data.attributes.justificacion = "Inicializando los valores del lote";
        Store.formInventario.data.attributes.cantidad = response.attributes.cantidad;
        // Store.formInventario.data.attributes.lot_id = response.id;
        // Store.formInventario.data.attributes.operacion_id = 1;
        // Store.formInventario.data.attributes.observacion = "Perfecto";
        // Store.formInventario.data.meta.foreign_keys_instances.operacion_id = 1;
        Store.formInventario.data.meta.foreign_keys_instances.operacion_id = 1;
        const response2 = await GuardarDatos(Store.formInventario, 14);
        successFull("Lote agregado satisfactoriamente.", "top-end")
        GuardarMag.value = 'Agregar';
        disabledProductoBtn.value = '';
        Store.cambiaEstado(9)
      }
    }
    // editando.value = false;

  } else {
    // editando.value = false;
    if (Store.formLotes.data.attributes.descripcion == '') {
      errores.value.descripLote = "Este campo es obligatorio";
    } else {
      errores.value.descripLote = "";
    }
    if (Store.formLotes.data.attributes.producto_id == '') {
      errores.value.producto_id = 'Este campo es obligatorio';
    } else {
      errores.value.producto_id = "";
    }
    if (Store.formLotes.data.attributes.ubicacion_id == '') {
      errores.value.ubicacion_id = 'Este campo es obligatorio';
    } else {
      errores.value.ubicacion_id = "";
    }
    GuardarMag.value = 'Agregar';
    disabledProductoBtn.value = ''
    // Store.cambiaEstado(1)
    ErrorFull("Debe llenar todos los campos obligatorios", "top-start")
  }

}

const attachListeners = () => {
  Quagga.onDetected((data) => {
    barcode.value = data.codeResult.code; // Aquí obtienes el código de barras detectado
    console.log("Código de barras detectado:", barcode.value);
    Quagga.stop(); // Detener el escaneo si quieres solo un código
  });
}

const startScanner = () => {
  Quagga.init({
    locate: false,
    numOfWorkers: navigator.hardwareConcurrency || 2,
    inputStream: {
      name: "Live",
      type: "LiveStream",
      target: document.querySelector('#interactive'),
      constraints: {
        width: 600,
        height: 600,
        facingMode: "environment"
      }, // El elemento donde se mostrará el video
      area: {
        // update area if its small mobile
        top: "20%",
        right: "15%",
        left: "15%",
        bottom: "20%"
      }
    },
    decoder: {
      readers: [
        "code_128_reader",
        "ean_reader",
        "ean_8_reader",
        "code_39_reader",
        "code_39_vin_reader",
        "codabar_reader",
        "upc_reader",
        "upc_e_reader",
        "i2of5_reader"
      ], // Puedes agregar otros lectores según tus necesidades
    },
  }, function (err) {
    if (err) {
      console.error(err);
      return;
    }
    Quagga.start();
    // Quagga.onProcessed(function (result) {
    //   var drawingCtx = Quagga.canvas.ctx.overlay,
    //     drawingCanvas = Quagga.canvas.dom.overlay;

    //   if (result) {
    //     if (result.boxes) {
    //       drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
    //       result.boxes.filter(function (box) {
    //         return box !== result.box;
    //       }).forEach(function (box) {
    //         Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, { color: "green", lineWidth: 2 });
    //       });
    //     }

    //     if (result.box) {
    //       Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, { color: "#00F", lineWidth: 2 });
    //     }

    //     if (result.codeResult && result.codeResult.code) {
    //       Quagga.ImageDebug.drawPath(result.line, { x: 'x', y: 'y' }, drawingCtx, { color: 'red', lineWidth: 3 });
    //     }
    //   }
    // }),
    // attachListeners();
    Quagga.onDetected((data) => {
      barcode.value = data.codeResult.code; // Aquí obtienes el código de barras detectado
      // console.log("Código de barras detectado:", barcode.value);
      Quagga.stop(); // Detener el escaneo si quieres solo un código
    });
  });
}

const beforeDestroy = () => {
  Quagga.stop();
}
// import { StreamBarcodeReader, ImageBarcodeReader } from '@teckel/vue-barcode-reader';
// import DataTable from 'datatables.net-vue3';
// import DataTablesCore from 'datatables.net-dt';
// import DataTableLib from 'datatables.net-bs5';
// import ButtonsHtml5 from 'datatables.net-buttons/js/buttons.html5';
// import Buttons from 'datatables.net-buttons-bs5';
// import print from 'datatables.net-buttons/js/buttons.print';
// import pdfmake from 'pdfmake';
// import pdfFonts from 'pdfmake/build/vfs_fonts';
// import 'datatables.net-responsive-bs5'
// import JsZip from 'JsZip'

// DataTable.use(DataTableLib);
// DataTable.use(pdfmake);
// DataTable.use(ButtonsHtml5);

const image1 = ref('')

const selecImagenO = () => {
  let imagen = document.getElementById('avatar1');
  //Recuperamos el archivo subido
  let file = imagen.files[0];
  //Creamos la url
  let objectURL = URL.createObjectURL(file);
  image1.value = objectURL
  // console.log(image.value)
}

const escanea = ref(false);

const decodedText = ref('')

const onDecode = (result) => {
  decodedText.value = result
}

const onLoaded = () => {
  console.log('loaded')
}

const emit = defineEmits(['consultar'])

// const props = defineProps(['key'])

function Agregar_Productos() {
  return emit('consultar', 1);
}

const nuevoArreglo = ref([]);
const elementos = ref([]);

function ExportExcel() {
  // emit('consultar', 2);
  // console.log(items.value)
  elementos.value = []
  nuevoArreglo.value = []
  for (let index = 0; index < itemsProductos1.value.length; index++) {
    elementos.value.TIPO = itemsProductos1.value[index].type;
    elementos.value.CÓDIGO = itemsProductos1.value[index].relationships.departamento.data.id.toString() + itemsProductos1.value[index].relationships.articulo.data.id.toString() + itemsProductos1.value[index].id.toString()
    elementos.value.MINIMO = itemsProductos1.value[index].attributes.minimo;
    elementos.value.DESCRIPCIÓN = itemsProductos1.value[index].attributes.descripcion;
    elementos.value.OBSERVACIÓN = itemsProductos1.value[index].attributes.observacion;
    elementos.value.U_MEDIDA = obtenMedida(itemsProductos1.value[index].relationships.medida.data.id)
    nuevoArreglo.value.push(elementos.value)
    elementos.value = []
  }
  // console.log(nuevoArreglo)
  const worksheet = XLSX.utils.json_to_sheet(nuevoArreglo.value);
  // console.log(worksheet)
  const workbook = XLSX.utils.book_new();
  // // Abriendo el excel
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  // // Generar el archivo
  const fileName = 'Productos.xlsx';
  // // Guardar el archivo execl
  XLSX.writeFile(workbook, fileName);
  successFull("Documento creado satisfactoriamente.", "top-end")
}

function ImprimirDoc() {
  emit('consultar', 3);
}

function CargaMasiva() {
  emit('consultar', 4);
}

const date = ref();

const date2 = ref();

const itemsSelected = ref([]);

const popup = ref(false);

const abrirModalAddProd = () => {
  popup.value = !popup.value;
  // console.log(x);
  if (popup.value == false) {
    // console.log('Actualiza');
    localStorage.removeItem('Carg_dat');
    if (localStorage.getItem('Carg_dat') != '0') {
      // localStorage.setItem('Carg_dat', '0');
      emit('consultar', 1);
      listado.value = JSON.parse(localStorage.getItem('ListadoCache'));
      obtenerListadoLimpio();
    }

  }

}

const deactiva = ref('')

const editarU = async () => {
  Store.cambiaEstado(1);
  btnModificarM.value = 'Actualizando...'
  deactiva.value = 'disabled';
  // console.log(Store.formProductos.id)
  const response = await EditarDatos(Store.id, Store.formProductos, 1);
  // console.log(response)
  editar.value = false;
  Store.formProductos.data.attributes.descripcion = ''
  Store.formProductos.data.attributes.observacion = '';
  Store.formProductos.data.attributes.articulo_id = ''
  Store.formProductos.data.attributes.minimo = '';
  Store.EditProductos(response)
  itemsProductos1.value = Store.itemsProductos;
  btnModificarM.value = 'Modificar'
  deactiva.value = '';
  if (detalle.value == true) {
    detalle.value = false;
  }
  Store.formEtiquetaProducto.data.attributes.producto_id = response.id;
  Store.formEtiquetaProducto.data.attributes.etiqueta_id = etiqueta_R.value;
  const response2 = await EditarDatos(Store.formEtiquetaProducto, 12);
  // console.log(Store.formEtiquetaProducto)
  successFull("Producto modificado satisfactoriamente.", "top-end")
  Store.cambiaEstado(1);
}

const editarULote = async () => {
  Store.cambiaEstado(9);
  btnModificarL.value = 'Actualizando...'
  deactiva.value = 'disabled';
  // console.log(Store.formProductos.id)
  const response = await EditarDatos(Store.id, Store.formLotes, 10);
  // console.log(response)
  editar.value = false;
  Store.formLotes.data.attributes.cantidad = '';
  Store.formLotes.data.attributes.descripcion = '';
  Store.formLotes.data.attributes.producto_id = '';
  Store.formLotes.data.attributes.observacion = '';
  Store.formLotes.data.attributes.precio_compra = '';
  Store.formLotes.data.attributes.moneda_compra = '';
  Store.formLotes.data.attributes.precio_venta = '';
  Store.formLotes.data.attributes.precio_venta = '';
  Store.EditLotes(response)
  itemsLotes1.value = Store.itemsLotes;
  btnModificarL.value = 'Modificar'
  deactiva.value = '';
  // guardo la operacion en la auditoria
  Store.formInventario.data.attributes.justificacion = "Modificación de los valores del lote.";
  Store.formInventario.data.attributes.cantidad = response.attributes.cantidad;
  // Store.formInventario.data.attributes.lot_id = response.id;
  // Store.formInventario.data.attributes.operacion_id = 5;
  Store.formInventario.data.meta.foreign_keys_instances.operacion_id = 5;
  // Store.formInventario.data.attributes.observacion = "Se modificaron los valores del lote.";
  const response2 = await GuardarDatos(Store.formInventario, 14, Store.id);
  Store.AddAuditoria(response2)
  successFull("Lote modificado satisfactoriamente.", "top-end")
  Store.cambiaEstado(9);
}

const showRow = (item = ClickRowArgument) => {
  const NewLote = [];
  for (let index = 0; index < Store.getListadoLotes().value.length; index++) {
    const element = Store.getListadoLotes().value[index];
    if (element.relationships.producto.data.id == item.id) {
      NewLote.push(Store.getListadoLotes().value[index])
    }
  }
  itemsLotes1.value = NewLote;
  // console.log(itemsLotes1.value)
}

const EliminarSelecc = () => {
  for (let index = 0; index < itemsSelected.value.length; index++) {
    // console.log(itemsSelected.value[index])
    borrarU(itemsSelected.value[index].id, itemsSelected.value[index].attributes.codigo, 2)
  }

}

// const almacenDatosSucursales = (Lista) => {
//   if (localStorage.getItem('ListadoCacheSucursal')) {
//     localStorage.removeItem('ListadoCacheSucursal');
//     const parsed = JSON.stringify(Lista);
//     localStorage.setItem('ListadoCacheSucursal', parsed);
//   } else {
//     const parsed = JSON.stringify(Lista);
//     localStorage.setItem('ListadoCacheSucursal', parsed);
//     // dataCache.value = JSON.parse(localStorage.getItem('ListadoCacheSucursal'));
//   }
// }

watchEffect(() => {
  // Se activa de forma inmediata y cuando name o surname cambie
  // Haz algo (side effects) 👁
  if (critBusq.value[0]) {
    searchValue.value = critBusq.value[0]
  }
  if (critBusq.value[1]) {
    searchValue.value = critBusq.value[1]
  }
  if (critBusq.value[2]) {
    searchValue.value = critBusq.value[2]
  }

});

const cuandoCambie = () => {
  if (searchField.value == 'Código') {
    searchField1.value = "attributes.codigo";
  }
  if (searchField.value == 'Tipo') {
    searchField1.value = "type";
  }
}

// const columnas = [
//   { title: "NO" },
//   { title: "IMAGEN" },
//   { title: "CODIGO" },
//   { title: "CATEGORIA" },
//   { title: "P. COMPRA" },
//   { title: "P. VENTA" },
//   { title: "UNIDAD" },
//   { title: "STOCK" },
//   { title: "VENTAS" },
//   { title: "OPCIONES" }
// ];

// const options = {
//   responsive: true,
//   select: true,
//   autoWidth: false,
//   dom: 'Bfrtip',
//   language:
//   {
//     search: 'Buscar', zeroRecords: 'No hay registros para mostrar',
//     info: 'Mostrando del _START_ a _END_ de _TOTAL registros',
//     infoFiltered: '(Filtrados de _MAX_ registros.)',
//     paginate: { first: 'Primero', previous: 'Anterior', next: 'Siguiente', last: 'Último' }
//   }
// };
// const p = ref("10-100-1001")
const headers = [
  { text: "NO", value: "id", width: 50, sortable: true },
  { text: "IMAGEN", value: "image" },
  { text: "CODIGO", value: "codigo" },
  { text: "DESCRIPCIÓN", value: "attributes.descripcion", width: 250 },
  { text: "DEPARTAMENTO", value: "departamento" },
  { text: "ETIQUETA", value: "etiqueta" },
  // { text: "CANTIDAD", value: "cantidad" },
  // { text: "P.COMPRA", value: "precioc", sortable: true },
  { text: "MÍNIMO STOCK", value: "attributes.minimo", sortable: true },
  // { text: "U_MEDIDA", value: "unidad" },
  // { text: "VENTAS", value: "cantV", sortable: true },
  { text: "OPCIONES", value: "opciones", width: 200 }
];

const headers1 = [
  { text: "NO", value: "id", width: 50, sortable: true },
  // { text: "IMAGEN", value: "image" },
  // { text: "CODIGO", value: "codigo" },
  { text: "DESCRIPCIÓN", value: "attributes.descripcion", width: 250 },
  // { text: "DEPARTAMENTO", value: "departamento" },
  // { text: "ETIQUETA", value: "etiquetas" },
  { text: "CANTIDAD", value: "attributes.cantidad", sortable: true },
  { text: "P. COMPRA (Moneda)", value: "precioC" },
  // { text: "MONEDA. COMPRA", value: "moneda_compra"},
  // { text: "MONEDA. VENTA", value: "attributes.mondeda_venta"},
  { text: "P. VENTA (Moneda)", value: "precioV" },
  { text: "FECHA. COMPRA", value: "attributes.fecha_compra" },
  // { text: "P.COMPRA", value: "precioc", sortable: true },
  // { text: "MÍNIMO STOCK", value: "attributes.minimo", sortable: true },
  // { text: "U_MEDIDA", value: "unidad" },
  // { text: "VENTAS", value: "cantV", sortable: true },
  { text: "OPCIONES", value: "opciones", width: 200 }
];

const items = ref([]);

const esperando = ref(false);

const loading = ref(false)

// const loadingP = ref(false)

const loadingA = (texto) => {
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

const cod = ref();

// const codProd = ref();

// const descProd = ref();

// const obsProd = ref();

const clickEditarProducto = async (idSelect) => {
  editar.value = true;
  errores.value.articulo_id = "";
  errores.value.ubicacion_id = "";
  errores.value.descripcion = "";
  errores.value.observacion = "";
  errores.value.cantidad = "";
  // console.log(idSelect)
  // localStorage.setItem("editar", editar.value);
  Store.id = idSelect;
  // console.log(itemsProductos1)
  for (let index = 0; index < itemsProductos1.value.length; index++) {
    const element = itemsProductos1.value[index].id;
    if (element == idSelect) {
      Store.formProductos.data.attributes.descripcion = itemsProductos1.value[index].attributes.descripcion;
      Store.formProductos.data.attributes.minimo = itemsProductos1.value[index].attributes.minimo;
      Store.formProductos.data.attributes.observacion = itemsProductos1.value[index].attributes.observacion;
      Store.formProductos.data.attributes.articulo_id = itemsProductos1.value[index].relationships.articulo.data.id;
      etiqueta_R.value = itemsProductos1.value[index].relationships.etiquetas.data[0].id;
      break;
    }
  }
  // console.log(etiqueta_R.value)
}

const clickEditarProducto1 = async (idSelect) => {
  editar.value = true;
  errores.value.producto_id = "";
  errores.value.ubicacion_id = "";
  errores.value.descripcion = "";
  errores.value.observacion = "";
  errores.value.cantidad = "";
  // console.log(idSelect)
  // localStorage.setItem("editar", editar.value);
  Store.id = idSelect;
  // console.log(itemsProductos1)
  for (let index = 0; index < itemsLotes1.value.length; index++) {
    const element = itemsLotes1.value[index].id;
    if (element == idSelect) {
      Store.formLotes.data.attributes.descripcion = itemsLotes1.value[index].attributes.descripcion;
      Store.formLotes.data.attributes.cantidad = itemsLotes1.value[index].attributes.cantidad;
      Store.formLotes.data.attributes.observacion = itemsLotes1.value[index].attributes.observacion;
      Store.formLotes.data.attributes.precio_compra = itemsLotes1.value[index].attributes.precio_compra;
      Store.formLotes.data.attributes.precio_venta = itemsLotes1.value[index].attributes.precio_venta;
      Store.formLotes.data.attributes.moneda_compra = itemsLotes1.value[index].attributes.moneda_compra;
      Store.formLotes.data.attributes.moneda_venta = itemsLotes1.value[index].attributes.moneda_venta;
      Store.formLotes.data.attributes.producto_id = itemsLotes1.value[index].relationships.producto.data.id;
      Store.formLotes.data.attributes.ubicacion_id = itemsLotes1.value[index].relationships.ubicacion.data.id;
      Store.formLotes.data.attributes.fecha_compra = itemsLotes1.value[index].attributes.fecha_compra;
      break;
    }
  }
}

const seleccionaProducto = (prod) => {
  id.value = prod.id;
  editar.value = true;
  formProductos.data.attributes.minimo = prod.attributes.minimo;
  formProductos.data.attributes.descripcion = prod.attributes.descripcion;
  formProductos.data.attributes.observacion = prod.attributes.observacion;
  formProductos.data.attributes.articulo_id = prod.attributes.relationships.articulo.data.id;
}

const generarCodeBar = (codig, cod2, cod3) => {
  cod.value = codig.toString() + cod2.toString() + cod3.toString();
  // console.log(typeof codig, typeof cod2, typeof cod3)
  // abrirModalBarCode(codig);
  //   Swal.fire({
  //   title: "<strong>HTML <u>example</u></strong>",
  //   icon: "info",
  //   html: `
  //     <vue-barcode value="${codig}" tag="svg"></vue-barcode>
  //   `,
  //   showCloseButton: true,
  //   showCancelButton: true,
  //   focusConfirm: false,
  //   confirmButtonText: `
  //     <i class="fa fa-thumbs-up"></i> Great!
  //   `,
  //   confirmButtonAriaLabel: "Thumbs up, great!",
  //   cancelButtonText: `
  //     <i class="fa fa-thumbs-down"></i>
  //   `,
  //   cancelButtonAriaLabel: "Thumbs down"
  // });
}

const show = ref('');

const showModal = ref('');

const activaHide = ref(true);

const activaShow = ref(false);

const activaModal = ref(false);

const displayModal = ref(''); //display: block; padding-right: 17px;

// const rolModal = ref(''); // dialog

const showModBack = ref(''); //modal-backdrop fade show

const abrirModal = () => {
  if (showModal.value == '') {
    showModal.value = 'show';
    activaModal.value = true;
    show.value = '';
    activaShow.value = false;
    activaHide.value = false;
    displayModal.value = 'display: block; padding-right: 17px;';
    showModBack.value = 'modal-backdrop fade show';
  } else {
    showModal.value = '';
    activaModal.value = false;
    show.value = '';
    activaShow.value = false;
    activaHide.value = true;
    displayModal.value = 'display: none;';
    showModBack.value = '';
  }
}

// const cerrarModal = () => {
//   // if (showModal2.value == '') {
//   //   showModal2.value = 'show';
//   //   activaModal2.value = true;
//   //   // show2.value = '';
//   //   // activaShow.value = false;
//   //   // activaHide.value = false;
//   //   // displayModal.value = 'display: block; padding-right: 17px;';
//   //   // showModBack.value = 'modal-backdrop fade show';
//   // } else {
//   showModal2.value = '';
//   activaModal2.value = false;
//   // show2.value = '';
//   activaShow2.value = false;
//   activaHide2.value = true;
//   displayModal2.value = 'display: none;';
//   showModBack2.value = '';
//   // }
// }

// const show1 = ref('');

const showModal1 = ref('');

const activaHide1 = ref(true);

// const activaShow1 = ref(false);

const activaModal1 = ref(false);

const displayModal1 = ref(''); //display: block; padding-right: 17px;

// const rolModal1 = ref(''); // dialog

// const showModBack1 = ref(''); //modal-backdrop fade show

// const show2 = ref('');

const showModal2 = ref('');

const activaHide2 = ref(true);

const activaShow2 = ref(false);

const activaModal2 = ref(false);

const displayModal2 = ref(''); //display: block; padding-right: 17px;

// const rolModal2 = ref(''); // dialog

const showModBack2 = ref(''); //modal-backdrop fade show

// const abrirModalBarCode = (codig) => {
//   if (showModal1.value == '') {
//     cod.value = codig;
//     showModal1.value = 'show';
//     activaModal1.value = true;
//     show1.value = '';
//     activaShow1.value = false;
//     activaHide1.value = false;
//     displayModal1.value = 'display: block; padding-right: 17px;';
//     showModBack1.value = 'modal-backdrop fade show';
//   } else {
//     showModal1.value = '';
//     activaModal1.value = false;
//     show1.value = '';
//     activaShow1.value = false;
//     activaHide1.value = true;
//     displayModal1.value = 'display: none;';
//     showModBack1.value = '';
//   }
// }

// const Exp_3Ptos = () => {
//   if (show.value == '') {
//     show.value = 'show';
//     activaShow.value = true;
//   } else {
//     show.value = '';
//     activaShow.value = false;
//   }
// }

const siFoto = ref(true);
const sicodigo = ref(true);
const sidescripcion = ref(true);
const siestado = ref(true);
const siobservaciones = ref(true);
const sisucursal = ref(true);
const siacciones = ref(true);

const AColumnas = () => {
  siFoto.value = false;
  sisucursal.value = false;
  sicodigo.value = false;
  siobservaciones.value = false;
  siestado.value = false;
  sidescripcion.value = false;
  siacciones.value = false;
}

const MostrarTodas = () => {
  siFoto.value = true;
  sisucursal.value = true;
  sicodigo.value = true;
  siobservaciones.value = true;
  siestado.value = true;
  sidescripcion.value = true;
  siacciones.value = true;
}

// const quitarFoto = () => {
//   siFoto.value = !siFoto.value;
// }

const quitarSucursal = () => {
  sisucursal.value = !sisucursal.value;
}

// const quitarestado = () => {
//   siestado.value = !siestado.value;
// }

const quitardescripcion = () => {
  sidescripcion.value = !sidescripcion.value;
}

const quitarobservacion = () => {
  siobservaciones.value = !siobservaciones.value;
}

const quitarcodigo = () => {
  sicodigo.value = !sicodigo.value;
}

const quitaracciones = () => {
  siacciones.value = !siacciones.value;
}

// CRUD
let errors = ref([]);

// let listadoProductos = ref([]);

// let listadoArticulos = ref([]);

// let listadoUbicaciones = ref([]);

// let listadoMedida = ref([])

// let listadoSucursales = ref([]);

// let datosPaginados = ref([]);

// let datosSinPaginar = ref([]);

// let buscando = ref('');

let editar = ref(false);

let id = ref('');

// let cantidad = ref(0);

// let elementPagina = ref(5);

let cargado = ref(false);

// let inicio = ref(0);

// let fin = ref(0);

// let paginaActual = ref(1);

// let disableA = ref('');
// let disableS = ref('');

// let setTiempoBusca = '';

// Paginado
// const obtenerPagina = (nopage) => {
//   paginaActual.value = nopage;
//   inicio.value = (nopage * elementPagina.value) - elementPagina.value;
//   fin.value = (nopage * elementPagina.value);
//   datosPaginados.value = [];
//   datosPaginados.value = datosSinPaginar.value.slice(inicio, fin);

// }

// const obtenerAnterior = () => {
//   if (paginaActual.value > 1) {
//     paginaActual.value--;
//     disableA.value = '';
//     disableS.value = '';
//   } else {
//     disableA.value = 'disabled';
//     disableS.value = '';
//   }
//   obtenerPagina(paginaActual.value);
// }

// const obtenerSiguiente = () => {
//   if (paginaActual.value < cantidad.value) {
//     paginaActual.value++;
//     disableS.value = '';
//     disableA.value = '';
//   } else {
//     disableS.value = 'disabled';
//     disableA.value = '';
//   }
//   obtenerPagina(paginaActual.value);
// }

// const isActivo = (nopage) => {
//   if (nopage == paginaActual.value) {
//     if (nopage == 1) {
//       disableA.value = 'disabled';
//       disableS.value = '';
//     } else {
//       if (nopage == cantidad.value) {
//         disableS.value = 'disabled';
//         disableA.value = '';
//       } else {
//         if ((nopage != 1) && (nopage != cantidad.value)) {
//           disableS.value = '';
//           disableA.value = '';
//         }
//       }
//     }

//     return 'active';
//   } else {
//     return '';
//   }
// }

// let newListado = ref([]);

// let newListadoSucursal = ref([]);

const consultar = async () => {
  if (cargado.value == false) {
    let response = await axios.get(`http://${ipPublica.value}/fullstack/public/productos`)
      .then((response) => {
        listado.value = response.data.data;
        almacenDatosProductos(listado.value);
        obtenerListadoLimpio();
        cargado.value = true;
        // console.log(response.data.data)
        // datosSinPaginar.value = response.data.data;
        // cantidad.value = Math.ceil(response.data.data.length / elementPagina.value);
        // obtenerPagina(1);
        // cargado.value = true;
        // router.go();
      });
  } else {
    almacenDatosProductos(listado.value);
    obtenerListadoLimpio();
    // datosSinPaginar.value = listado.value;
    // cantidad.value = Math.ceil(listado.value.length / elementPagina.value);
    // obtenerPagina(1);
  }

}

const cancelarU = () => {
  editar.value = false;
  Store.formProductos.data.attributes.descripcion = '';
  Store.formProductos.data.attributes.minimo = '';
  Store.formProductos.data.attributes.articulo_id = '';
  Store.formProductos.data.attributes.observacion = '';
}

const borrarU = async (id, correo, caso) => {
  let correcto = true;
  if (caso == 1) {
    Swal.fire({
      title: "Confirmación",
      text: `Está a punto de eliminar el producto: ${correo}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar"
    }).then(async (result) => {
      if (result.isConfirmed) {
        Store.cambiaEstado(1);
        const response = await EliminarDatos(id, 1);
        if (response == null) {
          Store.cambiaEstado(1);
        } else {
          Store.DeleteProducto(response);
          itemsProductos1.value = Store.itemsProductos;
          if (detalle.value == true) {
            detalle.value = false;
          }
          successFull("Producto eliminado satisfactoriamente.", "top-end")
          Store.cambiaEstado(1);
        }

      }
    })
  } else {
    Swal.fire({
      title: "Confirmación",
      text: `Está a punto de eliminar ${itemsSelected.value.length} productos: `,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar"
    }).then(async (result) => {
      if (result.isConfirmed) {
        Store.cambiaEstado(1);
        // Eliminar //
        for (let index = 0; index < itemsSelected.value.length; index++) {

          const response = await EliminarDatos(itemsSelected.value[index].id, 1);
          if (response == null) {
            // Store.cambiaEstado(1);
            correcto = false;
          } else {
            Store.DeleteProducto(response);
            correcto = true;
            // Store.cambiaEstado(1);
          }
        }
        if (correcto == true) {
          itemsProductos1.value = Store.itemsProductos;
          successFull("Productos eliminados satisfactoriamente.", "top-end")
          Store.cambiaEstado(1);
        } else {
          ErrorFull("Error eliminando los elementos seleccionados.", "top-start")
          Store.cambiaEstado(1);
        }
      }
    })
  }

}

const borrarUL = async (id, correo, caso) => {
  let correcto = true;
  if (caso == 1) {
    Swal.fire({
      title: "Confirmación",
      text: `Está a punto de eliminar el lote: ${correo}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar"
    }).then(async (result) => {
      if (result.isConfirmed) {
        Store.cambiaEstado(9);
        // guardo la operacion en la auditoria
        for (let index = 0; index < itemsLotes1.value.length; index++) {
          if (id == itemsLotes1.value[index].id) {
            // console.log("Okkk")
            Store.formInventario.data.attributes.justificacion = "Eliminando el lote.";
            Store.formInventario.data.attributes.cantidad = itemsLotes1.value[index].attributes.cantidad;
            Store.formInventario.data.meta.foreign_keys_instances.operacion_id = 15;
            const response2 = await GuardarDatos(Store.formInventario, 14, id);
            Store.AddAuditoria(response2)
            Store.DeleteLotes(response2);
            itemsLotes1.value = Store.itemsLotes;
          }
        }
        successFull("Lote eliminado satisfactoriamente.", "top-end")
        Store.cambiaEstado(9);
        // const response = await EliminarDatos(id, 9);
        // if (response == null) {
        //   Store.cambiaEstado(9);
        // } else {
        //   Store.DeleteLotes(response);
        //   itemsLotes1.value = Store.itemsLotes;
        //   if (detalle.value == true) {
        //     detalle.value = false;
        //   }
        //   // guardo la operacion en la auditoria
        //   Store.formInventario.data.attributes.justificacion = "Eliminando el lote.";
        //   Store.formInventario.data.attributes.cantidad = response.attributes.cantidad;
        //   // Store.formInventario.data.attributes.lot_id = response.id;
        //   // Store.formInventario.data.attributes.operacion_id = 15;
        //   // Store.formInventario.data.attributes.observacion = "Se eliminó el lote";
        //   Store.formInventario.data.meta.foreign_keys_instances.operacion_id = 15;
        //   const response2 = await GuardarDatos(Store.formInventario, 14, id);
        //   Store.AddAuditoria(response2)
        //   successFull("Lote eliminado satisfactoriamente.", "top-end")
        //   Store.cambiaEstado(9);
        // }

      }
    })
  } else {
    Swal.fire({
      title: "Confirmación",
      text: `Está a punto de eliminar ${itemsSelected.value.length} productos: `,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar"
    }).then(async (result) => {
      if (result.isConfirmed) {
        Store.cambiaEstado(9);
        // Eliminar //
        for (let index = 0; index < itemsSelected.value.length; index++) {
          // guardo la operacion en la auditoria
          // for (let index = 0; index < itemsLotes1.value.length; index++) {
          Store.formInventario.data.attributes.justificacion = "Eliminando el lote.";
          Store.formInventario.data.attributes.cantidad = itemsSelected.value[index].attributes.cantidad;
          Store.formInventario.data.meta.foreign_keys_instances.operacion_id = 15;
          const response2 = await GuardarDatos(Store.formInventario, 14, itemsSelected.value[index].id);
          Store.AddAuditoria(response2)
          Store.DeleteLotes(response2);
          itemsLotes1.value = Store.itemsLotes;
          correcto = true;
          // if (itemsSelected.value[index].id == itemsLotes1.value[index].id) {
          //   // console.log("Okkk")
          // }
          // }

          // const response = await EliminarDatos(itemsSelected.value[index].id, 1);
          // if (response == null) {
          //   // Store.cambiaEstado(1);
          //   correcto = false;
          // } else {
          //   Store.DeleteProducto(response);
          //   correcto = true;
          //   // Store.cambiaEstado(1);
          // }
        }
        // if (correcto == true) {
        //   itemsProductos1.value = Store.itemsProductos;
        //   successFull("Productos eliminados satisfactoriamente.", "top-end")
        //   Store.cambiaEstado(1);
        // } else {
        //   ErrorFull("Error eliminando los elementos seleccionados.", "top-start")
        //   Store.cambiaEstado(1);
        // }
      }
    })
  }

}

// const cambiarLimite = () => {
//   let i = 0;
//   newListado.value = [];
//   for (let index = 0; index < listado.value.length; index++) {
//     const element = listado.value[index];
//     if (element.attributes.deleted_at == null) {
//       newListado.value[i] = element;
//       i++;
//     }
//   }
//   datosSinPaginar.value = newListado.value;
//   cantidad.value = Math.ceil(newListado.value.length / elementPagina.value);
//   obtenerPagina(1);
// }

// watch(listado, async (newQuestion, oldQuestion) => {
//   // console.log(`El nuevo listado es ${newQuestion}`)
//   // console.log(`El nuevo listado es ${listado.value}`)
//   // almacenDatosProductos(listado.value);
//   obtenerListadoLimpio();
//   cargado.value = true;
//   // console.log(`El viejo listado es ${oldQuestion}`)
// })

// const itemsProductos = ref(listadoProductos)

onMounted(async () => {
  // console.log(Store.itemsProductos)
  // console.log(localStorage.getItem('Carg_datP'))
  if (localStorage.getItem('userName')) {
    // Cargando productos
    // console.log(Store.itemsProductos)
    if (localStorage.getItem('Carg_datP') == '0') {
      disabledProductos.value = 'disabled';
      Store.cambiaEstado(1)
      const response = await obtenerDatos(1);
      if (response.length > 0) {
        Store.setListadoProductos(response)
      }
      localStorage.setItem("Carg_datP", "1");
      // localStorage.setItem("LProductos", Store.itemsProductos);
      itemsProductos1.value = Store.itemsProductos;
      Store.cambiaEstado(1)

    } else {
      Store.cambiaEstado(1)
      itemsProductos1.value = Store.itemsProductos;
      Store.cambiaEstado(1)
    }
    // cargando imagenes
    if (localStorage.getItem('Carg_datIM') == '0') {
      const response2 = await obtenerDatos(12);
      // console.log(response2)
      if (response2 != null) {
        Store.setListadoImagen(response2);
        itemsImagenes1.value = Store.itemsImagen;
        localStorage.setItem("Carg_datIM", "1");
      }
    } else {
      itemsImagenes1.value = Store.itemsImagen;
    }

    // cargando articulos
    if (localStorage.getItem('Carg_datA') == '0') {
      Store.cambiaEstado(3)
      const response = await obtenerDatos(5);
      if (response.length > 0) {
        Store.setListadoArticulos(response)
      }
      localStorage.setItem("Carg_datA", "1");
      itemsArticulos1.value = Store.itemsArticulos;
      Store.cambiaEstado(3)

    } else {
      Store.cambiaEstado(3)
      itemsArticulos1.value = Store.itemsArticulos;
      Store.cambiaEstado(3)
    }
    // cargando lotes
    if (localStorage.getItem("Carg_datL") == '0') {
      const response = await obtenerDatos(10);
      if (response.length > 0) {
        Store.cambiaEstado(9)
        Store.setListadoLotes(response)
        localStorage.setItem("Carg_datL", "1");
        itemsLotes1.value = Store.itemsLotes;
        Store.cambiaEstado(9)
      }
    } else {
      Store.cambiaEstado(9)
      itemsLotes1.value = Store.itemsLotes;
      Store.cambiaEstado(9)

    }
    // cargando unidades de medidas
    if (localStorage.getItem("Carg_datMe") == "0") {

      const response = await obtenerDatos(3);
      if (!response) {

      } else {
        if (response.length > 0) {
          Store.setListadoMedidas(response)
        }
        localStorage.setItem("Carg_datMe", "1");
        itemsMedidas1.value = Store.itemsMedidas;
      }

    } else {
      itemsMedidas1.value = Store.itemsMedidas;
    }
    // cargando monedas
    if (localStorage.getItem("Carg_datMo") == "0") {

      const response = await obtenerDatos(11);
      if (!response) {

      } else {
        if (response.length > 0) {
          Store.setListadoMonedas(response)
        }
        localStorage.setItem("Carg_datMo", "1");
        itemsMoneda1.value = Store.itemsMonedas;
      }

    } else {
      itemsMoneda1.value = Store.itemsMonedas;
    }
    // cargando departamentos
    if (localStorage.getItem('Carg_datD') == '0') {
      Store.cambiaEstado(2);
      const response = await obtenerDatos(6);
      if (!response) {
        Store.cambiaEstado(2);
      } else {
        if (response.length > 0) {
          Store.setListadoDepartamentos(response)
        }
        localStorage.setItem("Carg_datD", "1");
        itemsDeparta1.value = Store.itemsDepartamentos;
        Store.cambiaEstado(2);
      }
    } else {
      Store.cambiaEstado(2);
      itemsDeparta1.value = Store.itemsDepartamentos;
      Store.cambiaEstado(2);
    }
    // cargando etiquetas
    if (localStorage.getItem('Carg_datE') == '0') {
      Store.cambiaEstado(5);
      const response = await obtenerDatos(8);
      if (!response) {
        Store.cambiaEstado(5);
      } else {
        if (response.length > 0) {
          Store.setListadoEtiquetas(response)
        }
        for (let index = 0; index < response.length; index++) {
          Store.nextIDEtiqueta = response[index].id;
        }
        localStorage.setItem("Carg_datE", "1");
        itemsEtiqueta1.value = Store.itemsEtiquetas;
        Store.cambiaEstado(5);
      }
    } else {
      Store.cambiaEstado(5);
      itemsEtiqueta1.value = Store.itemsEtiquetas;
      Store.cambiaEstado(5);
    }

    // cargando etiqueta_productos
    if (localStorage.getItem('Carg_datEP') == '0') {
      // Store.cambiaEstado(5);
      const response = await obtenerDatos(13);
      if (!response) {
        // Store.cambiaEstado(5);
      } else {
        if (response.length > 0) {
          Store.setListadoEtiquetasProductos(response)
        }
        for (let index = 0; index < response.length; index++) {
          Store.nextIDEtiqueta = response[index].id;
        }
        localStorage.setItem("Carg_datEP", "1");
        itemsEtiquetaProductos1.value = Store.itemsEtiquetasProductos;
        // Store.cambiaEstado(5);
      }
    } else {
      // Store.cambiaEstado(5);
      itemsEtiquetaProductos1.value = Store.itemsEtiquetasProductos;
      // Store.cambiaEstado(5);
    }

    // cargando ubicaciones
    if (localStorage.getItem('Carg_datU') == '0') {
      // Ubicaciones
      Store.cambiaEstado(7)
      const response = await obtenerDatos(7);
      if (response.length > 0) {
        Store.setListadoUbicaciones(response)
      }
      for (let index = 0; index < response.length; index++) {
        Store.nextIDUbicacion = response[index].id;
      }
      localStorage.setItem("Carg_datU", "1");
      itemsUbicaciones1.value = Store.itemsUbicaciones;
      Store.cambiaEstado(7)

    } else {
      Store.cambiaEstado(7)
      itemsUbicaciones1.value = Store.itemsUbicaciones;
      Store.cambiaEstado(7)
    }
    // console.log(itemsEtiqueta1.value)
    const response2 = await obtenerDatos(16);
    if (response2.length > 0) {
      Store.setListadoOperaciones(response2)
      itemsOperaciones1.value = Store.itemsOperaciones;
    }

    disabledProductos.value = '';

  } else {
    router.push('/login');
  }
})


</script>
<style lang="scss" scoped>
a,
span {

  @media (max-width: 1024px) {
    span.text {
      display: none;
    }
  }
}

div,
h1 {
  @media (max-width: 1024px) {
    h1.h3.mb-2.text-gray-800 {
      font-size: small;
      font-weight: 600;
    }

    .container-fluid {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
  }
}

/*div.col-md-12.text-center {
  @media (max-width: 1024px) {
    button.btn.btn-primary.btn-sm.m-1 {
      display: none;
    }
  }
}*/

.viewport {
  width: 100%;
  height: 400px;
  background-color: black;

  position: relative;
  overflow: hidden;
  /*display: none;*/
  padding-bottom: 56.25%;
  line-height: 0;

  video {
    z-index: 10;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    right: 50%;
    top: 50%;
    bottom: 50%;
    background: black
  }

  canvas.drawingBuffer {
    z-index: 20;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: none;
  }

  br {
    display: none;
  }
}

.customize-table {
  --easy-table-border: 1px solid #f5f5f7;
  --easy-table-row-border: 1px solid #c8ced8;

  --easy-table-header-font-size: 14px;
  --easy-table-header-height: 50px;
  --easy-table-header-font-color: #09111b;
  --easy-table-header-background-color: #d6ddde;

  --easy-table-header-item-padding: 10px 15px;

  --easy-table-body-even-row-font-color: #fff;
  --easy-table-body-even-row-background-color: #fff;

  --easy-table-body-row-font-color: #0f1011;
  --easy-table-body-row-background-color: #fff;
  --easy-table-body-row-height: 50px;
  --easy-table-body-row-font-size: 14px;

  --easy-table-body-row-hover-font-color: #2d3a4f;
  --easy-table-body-row-hover-background-color: #eee;

  --easy-table-body-item-padding: 10px 15px;

  --easy-table-footer-background-color: #d6ddde;
  --easy-table-footer-font-color: #0d0e11;
  --easy-table-footer-font-size: 14px;
  --easy-table-footer-padding: 0px 10px;
  --easy-table-footer-height: 50px;

  --easy-table-rows-per-page-selector-width: 70px;
  --easy-table-rows-per-page-selector-option-padding: 10px;
  --easy-table-rows-per-page-selector-z-index: 1;


  --easy-table-scrollbar-track-color: #2d3a4f;
  --easy-table-scrollbar-color: #2d3a4f;
  --easy-table-scrollbar-thumb-color: #4c5d7a;
  ;
  --easy-table-scrollbar-corner-color: #2d3a4f;

  --easy-table-loading-mask-background-color: #2d3a4f;
}
</style>
