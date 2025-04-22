<template>
  <div>
    <div class="container-fluid" @click="CierraMenu()">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800 text-center">DEPARTAMENTOS, TIPOS DE ARTÍCULOS Y ETIQUETAS </h1>
      </div>

      <!-- Datos del producto a agregar -->
      <div class="row">

        <!--Listado de departamentos -->
        <div class="col-xl-12 col-lg-12">
          <div class="card shadow mb-4">
            <a href="#collapseCardExample" class="d-block card-header py-3" data-toggle="collapse" role="button"
              aria-expanded="true" aria-controls="collapseCardExample">
              <h6 class="m-0 font-weight-bold text-info"><i class="fas fa-edit"></i> DEPARTAMENTOS</h6>
            </a>
            <!-- <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 class="m-0 font-weight-bold text-info"><i class="fas fa-edit"></i> DEPARTAMENTOS</h6>
              <button class="btn btn-info" @click="abrirModalAddProd()"> <span class="fa fa-plus"></span> Nuevo</button>
            </div> -->
            <!-- Card Body -->
            <div class="collapse show" id="collapseCardExample">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6 col-xl-6 col-lg-12">
                    <div class="justify-content-between">
                      <!-- <router-link class="button" to="/gest_inventario"> -->
                      <a data-toggle="modal" @click="agrega()" data-target="#agregaDepartamento"
                        class="btn btn-info btn-sm btn-icon-split" :class="disabledDepartamento">
                        <span class="icon text-white-50">
                          <i class="fas fa-plus"></i>
                        </span>
                        <span class="text">Nuevo</span>
                      </a>
                      <!-- <a @click="generar_pdf()" class="btn btn-secondary btn-sm btn-icon-split m-2"
                        :class="disabledProductos">
                        <span class="icon text-white-50">
                          <i class="fas fa-file-pdf"></i>
                        </span>
                        <span class="text">PDF</span>
                      </a> -->
                      <a @click="ExportExcel()" class="btn btn-secondary btn-sm btn-icon-split m-2"
                        :class="disabledDepartamento">
                        <span class="icon text-white-50">
                          <i class="fas fa-download"></i>
                        </span>
                        <span class="text">Excel</span>
                      </a>
                      <a @click="EliminarSelecc()" class="btn btn-danger btn-sm btn-icon-split m-1"
                      :class="disabledDepartamento">
                      <span class="icon text-white">
                        <i class="fas fa-trash"></i>
                      </span>
                      <span class="text text-white">Eliminar seleccionados</span>
                    </a>
                    <a @click="actualizarDepartamento()" class="btn btn-success btn-sm btn-icon-split m-1"
                      :class="disabledDepartamento">
                      <span class="icon text-white">
                        <i v-if="actualizaTablaD == false" class="fas fa-refresh"></i>
                        <i v-else class="fa fa-spinner fa-spin"></i>
                      </span>
                      <span v-if="actualizaTablaD == false" class="text text-white">{{ Actualizar }}</span>
                      <span v-else class="text text-white">{{ Actualizar }}</span>
                    </a>
                    </div>
                  </div>
                  <div class="col-md-6 col-xl-6 col-lg-12 ">
                    <span class="text-info">Buscar: </span>
                    <input class="form-control" type="text" v-model="searchValue" placeholder="Qué desea buscar..." />
                  </div>
                </div>
                <br>

                <EasyDataTable table-class-name="customize-table" :headers="headers" :items="itemsDeparta1"
                  buttons-pagination border-cell header-text-direction="center" body-text-direction="center"
                  :search-field="searchField" :search-value="searchValue" :rows-per-page="5"
                  :loading="store.esperandoDepartamentos" v-model:items-selected="itemsSelected"><!-- show-index -->

                  <template #item-opciones="item">
                    <div class="operation-wrapper">
                      <button class="btn btn-primary btn-sm btn-circle" @click="clickEditar(item.id)"
                        title="Editar" data-toggle="modal" data-target="#agregaDepartamento"><span
                          class="fas fa-edit"></span></button>
                      <!-- <button class="btn btn-success btn-sm btn-circle ml-1" @click="Aumentar(item)"
                    title="Aumentar"><span class="fas fa-plus"></span></button>
                  <button class="btn btn-warning btn-sm btn-circle ml-1" @click="Disminuir(item)"
                    title="Restar"><span class="fas fa-minus"></span></button>-->
                      <button class="btn btn-danger btn-sm btn-circle ml-1"
                        @click="borrarU(item.id, item.attributes.departamento, 1)"  title="Eliminar"><span
                          class="fas fas fa-trash-alt"></span></button>
                    </div>
                  </template>
                  <template #loading>
                    <img src="/cargando2.gif" style="width: 60px; height: 60px;" />
                  </template>
                  <template #empty-message>
                    <a>No hay datos que mostrar</a>
                  </template>

                </EasyDataTable>

              </div>
            </div>
          </div>
        </div>
        <!-- FIN -->
        <!--Listado de articulos -->
        <div class="col-xl-12 col-lg-12">
          <div class="card shadow mb-4">
            <a href="#collapseCardExample1" class="d-block card-header py-3" data-toggle="collapse" role="button"
              aria-expanded="true" aria-controls="collapseCardExample">
              <h6 class="m-0 font-weight-bold text-info"><i class="fas fa-edit"></i> TIPOS DE ARTÍCULOS</h6>
            </a>
            <!-- <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 class="m-0 font-weight-bold text-info"><i class="fas fa-edit"></i> DEPARTAMENTOS</h6>
              <button class="btn btn-info" @click="abrirModalAddProd()"> <span class="fa fa-plus"></span> Nuevo</button>
            </div> -->
            <!-- Card Body -->
            <div class="collapse show" id="collapseCardExample1">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6 col-xl-6 col-lg-12">
                    <div class="justify-content-between">
                      <!-- <router-link class="button" to="/gest_inventario"> -->
                      <a data-toggle="modal" @click="agrega()" data-target="#agregaArticulos"
                        class="btn btn-info btn-sm btn-icon-split" :class="disabledArticulo">
                        <span class="icon text-white-50">
                          <i class="fas fa-plus"></i>
                        </span>
                        <span class="text">Nuevo</span>
                      </a>
                      <!-- <a @click="generar_pdfA()" class="btn btn-secondary btn-sm btn-icon-split m-2"
                        :class="disabledProductos">
                        <span class="icon text-white-50">
                          <i class="fas fa-file-pdf"></i>
                        </span>
                        <span class="text">PDF</span>
                      </a> -->
                      <a @click="ExportExcelArticulos()" class="btn btn-secondary btn-sm btn-icon-split m-2"
                        :class="disabledArticulo">
                        <span class="icon text-white-50">
                          <i class="fas fa-download"></i>
                        </span>
                        <span class="text">Excel</span>
                      </a>
                       <a @click="EliminarSeleccA()" class="btn btn-danger btn-sm btn-icon-split m-1"
                      :class="disabledArticulo">
                      <span class="icon text-white">
                        <i class="fas fa-trash"></i>
                      </span>
                      <span class="text text-white">Eliminar seleccionados</span>
                    </a>
                    <a @click="actualizarArticulo()" class="btn btn-success btn-sm btn-icon-split m-1"
                      :class="disabledArticulo">
                      <span class="icon text-white">
                        <i v-if="actualizaTablaA == false" class="fas fa-refresh"></i>
                        <i v-else class="fa fa-spinner fa-spin"></i>
                      </span>
                      <span v-if="actualizaTablaA == false" class="text text-white">{{ ActualizarA }}</span>
                      <span v-else class="text text-white">{{ ActualizarA }}</span>
                    </a>
                    </div>
                  </div>
                  <div class="col-md-6 col-xl-6 col-lg-12 ">
                    <span class="text-info">Buscar: </span>
                    <input class="form-control" type="text" v-model="searchValueArticulo"
                      placeholder="Qué desea buscar..." />
                  </div>
                </div>
                <br>

                <EasyDataTable table-class-name="customize-table" :headers="headersArticulos" :items="itemsArticulos1"
                  buttons-pagination border-cell header-text-direction="center" body-text-direction="center"
                  :search-field="searchFieldArticulo" :search-value="searchValueArticulo" :rows-per-page="5"
                  :loading="store.esperandoArticulos" v-model:items-selected="itemsSelected1">
                  <template #item-opciones="item">
                    <div class="operation-wrapper">
                      <button class="btn btn-primary btn-sm btn-circle" data-toggle="modal"
                        data-target="#agregaArticulos" @click="clickEditarArticulo(item.id)"
                        title="Editar"><span class="fas fa-edit"></span></button>
                      <!-- <button class="btn btn-success btn-sm btn-circle ml-1" @click="Aumentar(item)"
                    title="Aumentar"><span class="fas fa-plus"></span></button>
                  <button class="btn btn-warning btn-sm btn-circle ml-1" @click="Disminuir(item)"
                    title="Restar"><span class="fas fa-minus"></span></button>-->
                      <button class="btn btn-danger btn-sm btn-circle ml-1"
                        @click="borrarUArticulo(item.id, item.attributes.articulo, 1)"
                        title="Eliminar"><span class="fas fas fa-trash-alt"></span></button>
                    </div>
                  </template>
                  <template #loading>
                    <img src="/cargando2.gif"
                      style="width: 60px; height: 60px;" />
                  </template>
                  <template #empty-message>
                    <a>No hay datos que mostrar</a>
                  </template>
                </EasyDataTable>

              </div>
            </div>
          </div>
        </div>
        <!-- FIN -->
        <!--Listado de Etiquetas -->
        <div class="col-xl-12 col-lg-12">
          <div class="card shadow mb-4">
            <a href="#collapseCardExample2" class="d-block card-header py-3" data-toggle="collapse" role="button"
              aria-expanded="true" aria-controls="collapseCardExample">
              <h6 class="m-0 font-weight-bold text-info"><i class="fas fa-edit"></i> ETIQUETAS</h6>
            </a>
            <!-- <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 class="m-0 font-weight-bold text-info"><i class="fas fa-edit"></i> DEPARTAMENTOS</h6>
              <button class="btn btn-info" @click="abrirModalAddProd()"> <span class="fa fa-plus"></span> Nuevo</button>
            </div> -->
            <!-- Card Body -->
            <div class="collapse show" id="collapseCardExample2">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6 col-xl-6 col-lg-12">
                    <div class="justify-content-between">
                      <!-- <router-link class="button" to="/gest_inventario"> -->
                      <a data-toggle="modal" @click="agrega()" data-target="#agregaEtiqueta"
                        class="btn btn-info btn-sm btn-icon-split" :class="disabledArticulo">
                        <span class="icon text-white-50">
                          <i class="fas fa-plus"></i>
                        </span>
                        <span class="text">Nuevo</span>
                      </a>
                      <!-- <a @click="generar_pdfE()" class="btn btn-secondary btn-sm btn-icon-split m-2"
                        :class="disabledProductos">
                        <span class="icon text-white-50">
                          <i class="fas fa-file-pdf"></i>
                        </span>
                        <span class="text">PDF</span>
                      </a> -->
                      <a @click="ExportExcelEtiqueta()" class="btn btn-secondary btn-sm btn-icon-split m-2"
                        :class="disabledEtiqueta">
                        <span class="icon text-white-50">
                          <i class="fas fa-download"></i>
                        </span>
                        <span class="text">Excel</span>
                      </a>
                      <a @click="EliminarSeleccE()" class="btn btn-danger btn-sm btn-icon-split m-1"
                      :class="disabledEtiqueta">
                      <span class="icon text-white">
                        <i class="fas fa-trash"></i>
                      </span>
                      <span class="text text-white">Eliminar seleccionados</span>
                    </a>
                    <a @click="actualizarEtiqueta()" class="btn btn-success btn-sm btn-icon-split m-1"
                      :class="disabledEtiqueta">
                      <span class="icon text-white">
                        <i v-if="actualizaTablaE == false" class="fas fa-refresh"></i>
                        <i v-else class="fa fa-spinner fa-spin"></i>
                      </span>
                      <span v-if="actualizaTablaE == false" class="text text-white">{{ ActualizarE }}</span>
                      <span v-else class="text text-white">{{ ActualizarE }}</span>
                    </a>
                    </div>
                  </div>
                  <div class="col-md-6 col-xl-6 col-lg-12 ">
                    <span class="text-info">Buscar: </span>
                    <input class="form-control" type="text" v-model="searchValueEtiqueta"
                      placeholder="Qué desea buscar..." />
                  </div>
                </div>
                <br>

                <EasyDataTable table-class-name="customize-table" :headers="headersEtiqueta" :items="itemsEtiqueta1"
                  buttons-pagination border-cell header-text-direction="center" body-text-direction="center"
                  :search-field="searchFieldEtiqueta" :search-value="searchValueEtiqueta" :rows-per-page="5"
                  :loading="store.esperandoEtiquetas" v-model:items-selected="itemsSelected2">
                  <template #item-opciones="item">
                    <div class="operation-wrapper">
                      <button class="btn btn-primary btn-sm btn-circle" data-toggle="modal"
                        data-target="#agregaEtiqueta" @click="clickEditarEtiqueta(item.id)"
                        title="Editar"><span class="fas fa-edit"></span></button>
                      <!-- <button class="btn btn-success btn-sm btn-circle ml-1" @click="Aumentar(item)"
                    title="Aumentar"><span class="fas fa-plus"></span></button>
                  <button class="btn btn-warning btn-sm btn-circle ml-1" @click="Disminuir(item)"
                    title="Restar"><span class="fas fa-minus"></span></button>-->
                      <button class="btn btn-danger btn-sm btn-circle ml-1"
                        @click="borrarUEtiqueta(item.id, item.attributes.etiqueta, 1)"
                        title="Eliminar"><span class="fas fas fa-trash-alt"></span></button>
                    </div>
                  </template>
                  <template #loading>
                    <img src="/cargando2.gif"
                      style="width: 60px; height: 60px;" />
                  </template>
                  <template #empty-message>
                    <a>No hay datos que mostrar</a>
                  </template>
                </EasyDataTable>

              </div>
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
    <!-- Logout Departamentos-->
    <div :class="'modal fade '" id="agregaDepartamento" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      :aria-hidden="activaHide1" :arial-modal="activaModal1" :style="displayModal1">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-info" id="exampleModalLabel" v-if="editar == false">NUEVO DEPARTAMENTO </h5>
            <h5 class="modal-title text-info text-center" id="exampleModalLabel" v-if="editar == true"><span
                class="fa fa-edit"></span>
              MODIFICAR LOS DATOS DEL DEPARTAMENTO <br>(<label style="color: red;">{{
                store.formDepartamentos.data.attributes.departamento
              }}</label>)</h5>

            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" class="text-info">×</span>
            </button>
          </div>
          <div class="modal-body text-center">

            <!-- <form id="form"> -->

            <div class="col-lg-12">
              <div class="">

                <form class="">

                  <div class="row text-left">
                    <div class="form-group col-lg-12 ">
                      <label class="text-info">Nombre: <label style="color: red;">*</label></label>
                      <input type="text" class="form-control" id="departamentos"
                        v-model="store.formDepartamentos.data.attributes.departamento" placeholder="Ej: Departamento 1"
                        required @change="verificar_error(5)">
                      <span style="color: red;">{{ errores.departamento }}</span>
                    </div>
                    <div class="form-group col-lg-12">
                      <label class="text-info">Descripción: <label style="color: red;">*</label></label>
                      <input type="text" class="form-control" id="descripcion" aria-describedby="emailHelp"
                        v-model="store.formDepartamentos.data.attributes.descripcion"
                        placeholder="Ej: Departamento donde se guardan los artículos" @change="verificar_error(6)">
                      <span style="color: red;">{{ errores.descripcionDepatamento }}</span>
                    </div>
                    <div class="form-group col-lg-12">
                      <label class="text-info">Observaciones:</label>
                      <textarea class="form-control" id="observacion"
                        v-model="store.formDepartamentos.data.attributes.observacion"
                        placeholder="Ej: Observaciones del departamento"></textarea>

                    </div>
                  </div>
                </form>
              </div>
              <div class="text-center">
                <h1 class="h6 text-gray-900 mb-4"><i>CAMPOS OBLIGATORIOS</i> (<label style="color: red;">*</label>)
                </h1>
              </div>
              <div class="row">
                <div class="col-md-12 col-xl-12 col-lg-12">
                  <div class="justify-content-between">
                    <a v-if="editar == false" @click="agregarU()" class="btn btn-info btn-icon-split m-2"
                      :class="disabledDepartamentodBtn">
                      <span class="icon text-white-50">
                        <i class="fas fa-plus"></i>
                      </span>
                      <span :class="`text`">{{ GuardarDep }}</span>
                    </a>
                    <a data-dismiss="modal" aria-label="close" v-if="editar" @click="editarU()"
                      class="btn btn-primary btn-icon-split m-2" :class="btnModificarClass">
                      <span class="icon text-white-50">
                        <i class="fas fa-edit"></i>
                      </span>
                      <span :class="`text`">{{ btnModificar }}</span>
                    </a>
                    <a class="btn btn-danger btn-icon-split" data-dismiss="modal" aria-label="close"
                      :class="btnModificarClass" @click="cancelarU()">
                      <span class="icon text-white">
                        <i class="fas fa-close"></i>
                      </span>
                      <span class="text text-white">Cancelar</span>
                    </a>
                  </div>
                </div>
              </div>
              <!-- <div class="row">

                <div v-if="editar == false" class="form-group h4 col-lg-3">

                </div>
                <div v-if="editar == false" class="form-group h4 col-lg-6">
                  <a @click="agregarU()" class="btn btn-info btn-block" :class="disabledDepartamentodBtn">
                    {{ GuardarDep }}
                  </a>
                </div>
                <div v-if="editar" class="form-group h4 col-lg-6">
                  <a @click="editarU" class="btn btn-info btn-block" :class="btnModificarClass">
                    {{ btnModificar }}
                  </a>
                </div>
                <div v-if="editar" class="form-group h4 col-lg-6">
                  <a @click="cancelarU()" class="btn btn-danger btn-block" :class="btnModificarClass"
                    data-dismiss="modal" aria-label="Close">
                    Cancelar
                  </a>
                </div>
              </div> -->
            </div>
            <!-- </form> -->
          </div>

        </div>
      </div>
    </div>

    <!-- Logout articulos-->
    <div :class="'modal fade '" id="agregaArticulos" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      :aria-hidden="activaHide1" :arial-modal="activaModal1" :style="displayModal1">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-info" id="exampleModalLabel" v-if="editar == false">NUEVO ARTÍCULO </h5>
            <h5 class="modal-title text-info text-center" id="exampleModalLabel" v-if="editar == true"><span
                class="fa fa-edit"></span>
              MODIFICAR LOS DATOS DEL ARTÍCULO <br>(<label style="color: red;">{{
                store.formArticulo.data.attributes.articulo
              }}</label>)</h5>

            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" class="text-info">×</span>
            </button>
          </div>
          <div class="modal-body text-center">

            <!-- <form id="form"> -->

            <div class="col-lg-12">
              <div class="">

                <form class="">

                  <div class="row text-left">
                    <div class="form-group col-lg-12">
                      <label class="text-info">Nombre: <label style="color: red;">*</label></label>
                      <input type="text" class="form-control" id="articulo"
                        v-model="store.formArticulo.data.attributes.articulo" placeholder="Ej: Tablet" required
                        @change="verificar_error(1)">
                      <span style="color: red;">{{ errores.articulo }}</span>
                    </div>
                    <div class="form-group col-lg-12">
                      <label class="text-info">Descripción: <label style="color: red;">*</label></label>
                      <input type="text" class="form-control" id="descripcionA" aria-describedby="emailHelp"
                        v-model="store.formArticulo.data.attributes.descripcion" placeholder="Ej: Para entretenimiento"
                        @change="verificar_error(2)">
                      <span style="color: red;">{{ errores.descripcion }}</span>
                    </div>
                    <div class="form-group col-lg-12">
                      <label class="text-info">Observaciones:</label>
                      <textarea class="form-control" id="observacionA"
                        v-model="store.formArticulo.data.attributes.observacion"
                        placeholder="Ej: Observaciones del artículo"></textarea>

                    </div>
                  </div>
                  <div class="row">
                    <div class="form-group col-lg-6">
                      <label class="text-info">Seleccione el departamento: <label style="color: red;">*</label></label>
                      <select name="rol" id="rol" style="width: 100%; text-align:center" placeholder="Sucursal"
                        class="text-gray-900 form-control" v-model="store.formArticulo.data.attributes.departamento_id">
                        <option v-for="dato in itemsDeparta1" :key="dato.id" :value="dato.id">{{
                          dato.attributes.departamento }}</option>
                      </select>
                      <span style="color: red;">{{ errores.departamento_id }}</span>
                    </div>
                    <div class="form-group col-lg-6">
                      <label class="text-info">Seleccione la unidad de medida: <label
                          style="color: red;">*</label></label>
                      <select name="rol" id="rol" style="width: 100%; text-align:center" placeholder="Sucursal"
                        class="text-gray-900 form-control" v-model="store.formArticulo.data.attributes.medida_id">
                        <option v-for="dato in itemsMedida1" :key="dato.id" :value="dato.id">{{
                          dato.attributes.medida }}</option>
                      </select>
                      <span style="color: red;">{{ errores.medida_id }}</span>
                    </div>
                  </div>
                </form>
              </div>
              <div class="text-center">
                <h1 class="h6 text-gray-900 mb-4"><i>CAMPOS OBLIGATORIOS</i> (<label style="color: red;">*</label>)
                </h1>
              </div>

              <div class="row">
                <div class="col-md-12 col-xl-12 col-lg-12">
                  <div class="justify-content-between">
                    <a v-if="editar == false" @click="agregarUArticulo()" class="btn btn-info btn-icon-split m-2"
                      :class="disabledDepartamentodBtn">
                      <span class="icon text-white-50">
                        <i class="fas fa-plus"></i>
                      </span>
                      <span :class="`text`">{{ GuardarArt }}</span>
                    </a>
                    <a data-dismiss="modal" aria-label="close" v-if="editar" @click="editarUArticulo()"
                      class="btn btn-primary btn-icon-split m-2" :class="btnModificarClass">
                      <span class="icon text-white-50">
                        <i class="fas fa-edit"></i>
                      </span>
                      <span :class="`text`">{{ btnModificar }}</span>
                    </a>
                    <a class="btn btn-danger btn-icon-split" data-dismiss="modal" aria-label="close"
                      :class="btnModificarClass" @click="cancelarU()">
                      <span class="icon text-white">
                        <i class="fas fa-close"></i>
                      </span>
                      <span class="text text-white">Cancelar</span>
                    </a>
                  </div>
                </div>
              </div>
              <!-- <div class="row">

                <div v-if="editar == false" class="form-group h4 col-lg-3">

                </div>
                <div v-if="editar == false" class="form-group h4 col-lg-6">
                  <a @click="agregarUArticulo()" class="btn btn-info btn-block" :class="disabledDepartamentodBtn">
                    {{ GuardarArt }}
                  </a>
                </div>
                <div v-if="editar" class="form-group h4 col-lg-6">
                  <a @click="editarUArticulo" class="btn btn-info btn-block" :class="btnModificarClass">
                    {{ btnModificar }}
                  </a>
                </div>
                <div v-if="editar" class="form-group h4 col-lg-6">
                  <a @click="cancelarU()" class="btn btn-danger btn-block" :class="btnModificarClass"
                    data-dismiss="modal" aria-label="Close">
                    Cancelar
                  </a>
                </div>
              </div> -->
            </div>
            <!-- </form> -->
          </div>

        </div>
      </div>
    </div>

    <!-- Logout etiquetas-->
    <div :class="'modal fade '" id="agregaEtiqueta" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      :aria-hidden="activaHide1" :arial-modal="activaModal1" :style="displayModal1">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-info" id="exampleModalLabel" v-if="editar == false">NUEVA ETIQUETA </h5>
            <h5 class="modal-title text-info text-center" id="exampleModalLabel" v-if="editar == true"><span
                class="fa fa-edit"></span>
              MODIFICAR LOS DATOS DE LA ETIQUETA <br>(<label style="color: red;">{{
                store.formEtiqueta.data.attributes.etiqueta
              }}</label>)</h5>

            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" class="text-info">×</span>
            </button>
          </div>
          <div class="modal-body text-center">

            <!-- <form id="form"> -->

            <div class="col-lg-12">
              <div class="">

                <form class="">

                  <div class="row text-left">
                    <div class="form-group col-lg-12">
                      <label class="text-info">Nombre: <label style="color: red;">*</label></label>
                      <input type="text" class="form-control" id="articulo"
                        v-model="store.formEtiqueta.data.attributes.etiqueta" placeholder="Ej: Tablet" required
                        @change="verificar_error(8)">
                      <span style="color: red;">{{ errores.etiqueta }}</span>
                    </div>
                    <div class="form-group col-lg-12">
                      <label class="text-info">Descripción: <label style="color: red;">*</label></label>
                      <input type="text" class="form-control" id="descripcionA" aria-describedby="emailHelp"
                        v-model="store.formEtiqueta.data.attributes.descripcion" placeholder="Ej: Para entretenimiento"
                        @change="verificar_error(7)">
                      <span style="color: red;">{{ errores.descripcionEtiqueta }}</span>
                    </div>
                    <div class="form-group col-lg-12">
                      <label class="text-info">Observaciones:</label>
                      <textarea class="form-control" id="observacionA"
                        v-model="store.formEtiqueta.data.attributes.observacion"
                        placeholder="Ej: Observaciones de la etiqueta"></textarea>

                    </div>
                  </div>

                </form>
              </div>
              <div class="text-center">
                <h1 class="h6 text-gray-900 mb-4"><i>CAMPOS OBLIGATORIOS</i> (<label style="color: red;">*</label>)
                </h1>
              </div>

              <div class="row">
                <div class="col-md-12 col-xl-12 col-lg-12">
                  <div class="justify-content-between">
                    <a v-if="editar == false" @click="agregarUEtiqueta()" class="btn btn-info btn-icon-split m-2"
                      :class="disabledDepartamentodBtn">
                      <span class="icon text-white-50">
                        <i class="fas fa-plus"></i>
                      </span>
                      <span :class="`text`">{{ GuardarArt }}</span>
                    </a>
                    <a data-dismiss="modal" aria-label="close" v-if="editar" @click="editarUEtiqueta()"
                      class="btn btn-primary btn-icon-split m-2" :class="btnModificarClass">
                      <span class="icon text-white-50">
                        <i class="fas fa-edit"></i>
                      </span>
                      <span :class="`text`">{{ btnModificar }}</span>
                    </a>
                    <a class="btn btn-danger btn-icon-split" data-dismiss="modal" aria-label="close"
                      :class="btnModificarClass" @click="cancelarU()">
                      <span class="icon text-white">
                        <i class="fas fa-close"></i>
                      </span>
                      <span class="text text-white">Cancelar</span>
                    </a>
                  </div>
                </div>
              </div>
              <!-- <div class="row">

                <div v-if="editar == false" class="form-group h4 col-lg-3">

                </div>
                <div v-if="editar == false" class="form-group h4 col-lg-6">
                  <a @click="agregarUEtiqueta()" class="btn btn-info btn-block" :class="disabledDepartamentodBtn">
                    {{ GuardarArt }}
                  </a>
                </div>
                <div v-if="editar" class="form-group h4 col-lg-6">
                  <a @click="editarUEtiqueta" class="btn btn-info btn-block" :class="btnModificarClass">
                    {{ btnModificar }}
                  </a>
                </div>
                <div v-if="editar" class="form-group h4 col-lg-6">
                  <a @click="cancelarU()" class="btn btn-danger btn-block" :class="btnModificarClass"
                    data-dismiss="modal" aria-label="Close">
                    Cancelar
                  </a>
                </div>
              </div> -->
            </div>
            <!-- </form> -->
          </div>

        </div>
      </div>
    </div>
    <!-- <AddDepartamento v-show="popup" @cerrar="abrirModalAddProd()" @consulta="actualiza()" />
    <AddArticulo v-show="popupArt" @cerrar="abrirModalAddArti()" @consulta="actualizaArt()" /> -->
  </div>
  <!-- <template v-if="esperando">
    <div v-on="loadingA('Actualizando datos...')">

    </div>
  </template> -->
</template>
<script setup>
import router from '@/router';
import Swal from 'sweetalert2';
import { onMounted, ref } from 'vue';
// import AddDepartamento from './modal/AddDepartamento.vue';
// import 'vue3-easy-data-table/dist/style.css';
// import AddArticulo from './modal/AddArticulo.vue';
// import { load } from '@progress/kendo-vue-intl';
import * as XLSX from 'xlsx';
import { useStoreAxios } from '@/store/AxiosStore';
import { EditarDatos, EliminarDatos, GuardarDatos, obtenerDatos, verificarConexion } from './helper/useAxios';
import { ErrorFull, successFull } from './controler/ControlerApp';
import jsPDF from 'jspdf';

const store = useStoreAxios();

const actualizaTablaD = ref(false)

const actualizaTablaA = ref(false)

const actualizaTablaE = ref(false)

const Actualizar = ref('Actualizar')

const ActualizarA = ref('Actualizar')

const ActualizarE = ref('Actualizar')

const itemsArticulos1 = ref([])

const itemsEtiqueta1 = ref([])

const itemsDeparta1 = ref([])

const itemsMedida1 = ref([])

const esperando = ref(false);

const activaModal1 = ref(false);

const activaHide1 = ref(true);

const displayModal1 = ref('');

const disabledProductos = ref('')

const popup = ref(false);

const emit = defineEmits(['cerrar']);

const abrirModalAddProd = () => {
  popup.value = !popup.value;
  // console.log(x);
  // if (popup.value == false) {

  //   localStorage.removeItem('Carg_dat');
  //   if (localStorage.getItem('Carg_dat') != '0') {
  //     emit('consultar', 5);
  //     listado.value = JSON.parse(localStorage.getItem('ListadoCacheDepartamentos'));
  //     obtenerDepartamentos();
  //   }

  // }

}

// const itemsDepartamentos = ref([]);

// const obtenerDepartamentos = () => {
//   let i = 0;
//   itemsDepartamentos.value = [];
//   for (let index = 0; index < listadoDepartamentos.value.length; index++) {
//     itemsDepartamentos.value.push(listadoDepartamentos.value[index])
//   }

// }

const actualiza = () => {
  popup.value = !popup.value;
  // console.log(x);
  if (popup.value == false) {

    localStorage.removeItem('Carg_dat');
    if (localStorage.getItem('Carg_dat') != '0') {
      emit('consultar', 5);
      listado.value = JSON.parse(localStorage.getItem('ListadoCacheDepartamentos'));
      obtenerDepartamentos();
    }

  }

}

const actualizaArt = () => {
  popup.value = !popup.value;
  // console.log(x);
  if (popup.value == false) {

    localStorage.removeItem('Carg_dat');
    if (localStorage.getItem('Carg_dat') != '0') {
      emit('consultar', 6);
      listado.value = JSON.parse(localStorage.getItem('ListadoCacheDepartamentos'));
      obtenerDepartamentos();
    }

  }

}

const EliminarSelecc = () => {
  for (let index = 0; index < itemsSelected.value.length; index++) {
    // console.log(itemsSelected.value[index])
    borrarU(itemsSelected.value[index].id, itemsSelected.value[index].attributes.codigo, 2)
  }

}

const EliminarSeleccA = () => {
  for (let index = 0; index < itemsSelected1.value.length; index++) {
    // console.log(itemsSelected.value[index])
    borrarUArticulo(itemsSelected1.value[index].id, itemsSelected1.value[index].attributes.codigo, 2)
  }

}

const EliminarSeleccE = () => {
  for (let index = 0; index < itemsSelected2.value.length; index++) {
    // console.log(itemsSelected.value[index])
    borrarUEtiqueta(itemsSelected2.value[index].id, itemsSelected2.value[index].attributes.codigo, 2)
  }

}

const generar_pdf = async () => {
  if (itemsDeparta1.value.length > 0) {
    let nuevoArreglo = ref([]);

    for (let index = 0; index < itemsDeparta1.value.length; index++) {
      nuevoArreglo.value.push({
        id: itemsDeparta1.value[index].id,
        departamento: itemsDeparta1.value[index].attributes.departamento,
        descripcion: itemsDeparta1.value[index].attributes.descripcion,
        // codigo: itemsDeparta1.value[index].relationships.departamento.data.id.toString() + itemsDeparta1.value[index].relationships.articulo.data.id.toString() + itemsDeparta1.value[index].id.toString(),
        observacion: itemsDeparta1.value[index].attributes.observacion,
        fechaC: itemsDeparta1.value[index].attributes.timestamps.created_at,
        fechaU: itemsDeparta1.value[index].attributes.timestamps.updated_at
      })
    }

    const doc = new jsPDF('p', 'pt');

    let columnas = [
      { title: "No", dataKey: "id" },
      { title: "Nombre", dataKey: "departamento" },
      { title: "Descripción", dataKey: "descripcion" },
      { title: "Observación", dataKey: "observacion" },
      { title: "Fecha creación", dataKey: "fechaC" },
      { title: "Fecha actualización", dataKey: "fechaU" }
    ]

    doc.autoTable({ columns: columnas, body: nuevoArreglo.value })
    // const doc = new jsPDF({
    //   orientation: "landscape",
    //   unit: "in",
    //   format: [10, 10]
    // });

    doc.text("Listado de departamentos", 220, 25);
    doc.save("Departamentos.pdf");
  }
  // cerrarAlert();


}

const generar_pdfA = async () => {
  if (itemsArticulos1.value.length > 0) {
    let nuevoArreglo = ref([]);

    for (let index = 0; index < itemsArticulos1.value.length; index++) {
      nuevoArreglo.value.push({
        id: itemsArticulos1.value[index].id,
        articulo: itemsArticulos1.value[index].attributes.articulo,
        descripcion: itemsArticulos1.value[index].attributes.descripcion,
        // codigo: itemsDeparta1.value[index].relationships.departamento.data.id.toString() + itemsDeparta1.value[index].relationships.articulo.data.id.toString() + itemsDeparta1.value[index].id.toString(),
        observacion: itemsArticulos1.value[index].attributes.observacion,
        fechaC: itemsArticulos1.value[index].attributes.timestamps.created_at,
        fechaU: itemsArticulos1.value[index].attributes.timestamps.updated_at
      })
    }

    const doc = new jsPDF('p', 'pt');

    let columnas = [
      { header: "No", dataKey: "id" },
      { header: "Nombre", dataKey: "articulo" },
      { header: "Descripción", dataKey: "descripcion" },
      { header: "Observación", dataKey: "observacion" },
      { header: "Fecha creación", dataKey: "fechaC" },
      { header: "Fecha actualización", dataKey: "fechaU" }
    ]

    doc.autoTable({ columns: columnas, body: nuevoArreglo.value })
    // const doc = new jsPDF({
    //   orientation: "landscape",
    //   unit: "in",
    //   format: [10, 10]
    // });

    doc.text("Listado de artículos", 220, 25);
    doc.save("Articulos.pdf");
  }
  // cerrarAlert();


}

const generar_pdfE = async () => {
  if (itemsEtiqueta1.value.length > 0) {
    let nuevoArreglo = ref([]);

    for (let index = 0; index < itemsEtiqueta1.value.length; index++) {
      nuevoArreglo.value.push({
        id: itemsEtiqueta1.value[index].id,
        etiqueta: itemsEtiqueta1.value[index].attributes.etiqueta,
        descripcion: itemsEtiqueta1.value[index].attributes.descripcion,
        // codigo: itemsDeparta1.value[index].relationships.departamento.data.id.toString() + itemsDeparta1.value[index].relationships.articulo.data.id.toString() + itemsDeparta1.value[index].id.toString(),
        observacion: itemsEtiqueta1.value[index].attributes.observacion,
        fechaC: itemsEtiqueta1.value[index].attributes.timestamps.created_at,
        fechaU: itemsEtiqueta1.value[index].attributes.timestamps.updated_at
      })
    }

    const doc = new jsPDF('p', 'pt');

    let columnas = [
      { title: "No", dataKey: "id" },
      { title: "Nombre", dataKey: "etiqueta" },
      { title: "Descripción", dataKey: "descripcion" },
      { title: "Observación", dataKey: "observacion" },
      { title: "Fecha creación", dataKey: "fechaC" },
      { title: "Fecha actualización", dataKey: "fechaU" }
    ]

    doc.autoTable({ columns: columnas, body: nuevoArreglo.value })
    // const doc = new jsPDF({
    //   orientation: "landscape",
    //   unit: "in",
    //   format: [10, 10]
    // });

    doc.text("Listado de etiquetas", 220, 25);
    doc.save("Etiquetas.pdf");
  }
  // cerrarAlert();


}

const popupArt = ref(false)

const abrirModalAddArti = () => {
  popupArt.value = !popupArt.value;
  // console.log(x);
  // if (popupArt.value == false) {

  //   localStorage.removeItem('Carg_dat');
  //   if (localStorage.getItem('Carg_dat') != '0') {
  //     loading.value = true;
  //     emit('consultar', 6);
  //     listado.value = JSON.parse(localStorage.getItem('ListadoCacheArticulos'));
  //     obtenerArticulos();
  //     loading.value = false
  //   }

  // }

}

const loading = ref(false);

// const loadingD = ref(false);

// const loadingA = (texto) => {
//   Swal.fire({
//     // title: "Sweet!",
//     text: texto,
//     imageUrl: "/cargando2.gif",
//     imageWidth: 100,
//     imageHeight: 100,
//     imageAlt: "Custom image",
//     showConfirmButton: false
//   });
// }

const cerrarAlert = () => {
  Swal.close();
}

const itemsSelected = ref([]);

const itemsSelected1 = ref([]);

const itemsSelected2 = ref([]);

const searchField = ref(["attributes.departamento", "attributes.descripcion", "attributes.observacion"]);

const searchFieldArticulo = ref(["attributes.articulo", "attributes.descripcion", "attributes.observacion"]);

const searchFieldEtiqueta = ref(["attributes.etiqueta", "attributes.descripcion", "attributes.observacion"]);

const searchValue = ref("");

const searchValueArticulo = ref("");

const searchValueEtiqueta = ref("");

const headers = [
  { text: "CÓDIGO", value: "id", width: 50, sortable: true },
  // { text: "CODIGO", value: "attributes.codigo", sortable: true },
  { text: "NOMBRE", value: "attributes.departamento" },
  { text: "DESCRIPCIÓN", value: "attributes.descripcion", sortable: true },
  // { text: "OBSERVACIONES", value: "attributes.observacion", sortable: true },
  { text: "FECHA CREACIÓN", value: "attributes.timestamps.created_at" },
  { text: "FECHA ACTUALIZACIÓN", value: "attributes.timestamps.updated_at" },
  { text: "OPCIONES", value: "opciones" }
];

const headersArticulos = [
  { text: "CÓDIGO", value: "id", width: 50, sortable: true },
  // { text: "CODIGO", value: "attributes.codigo", sortable: true },
  { text: "NOMBRE", value: "attributes.articulo" },
  { text: "DESCRIPCIÓN", value: "attributes.descripcion", sortable: true },
  // { text: "OBSERVACIONES", value: "attributes.observacion", sortable: true },
  { text: "FECHA CREACIÓN", value: "attributes.timestamps.created_at" },
  { text: "FECHA ACTUALIZACIÓN", value: "attributes.timestamps.updated_at" },
  { text: "OPCIONES", value: "opciones" }
];

const headersEtiqueta = [
  { text: "CÓDIGO", value: "id", width: 50, sortable: true },
  // { text: "CODIGO", value: "attributes.codigo", sortable: true },
  { text: "NOMBRE", value: "attributes.etiqueta" },
  { text: "DESCRIPCIÓN", value: "attributes.descripcion", sortable: true },
  // { text: "OBSERVACIONES", value: "attributes.observacion", sortable: true },
  { text: "FECHA CREACIÓN", value: "attributes.timestamps.created_at" },
  { text: "FECHA ACTUALIZACIÓN", value: "attributes.timestamps.updated_at" },
  { text: "OPCIONES", value: "opciones" }
];

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

let errors = ref([]);

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

const CierraMenu = () => {
  store.collapsed = 'collapsed';
  store.activa = false;
  store.show = '';
  store.collapsed2 = 'collapsed';
  store.activa2 = false;
  store.show2 = '';
}

const agrega = () => {
  editar.value = false
  errores.value.departamento = "";
  errores.value.descripcion = "";
  errores.value.descripcionDepatamento = "";
  errores.value.observacion = "";
  errores.value.articulo = "";
  errores.value.departamento_id = "";
  errores.value.medida_id = "";
  errores.value.etiqueta = "";
  errores.value.descripcionEtiqueta = "";
  errores.value.observEtiqueta = "";
  store.formDepartamentos.data.attributes.departamento = '';
  store.formDepartamentos.data.attributes.descripcion = '';
  store.formDepartamentos.data.attributes.observacion = '';
  store.formArticulo.data.attributes.articulo = '';
  store.formArticulo.data.attributes.descripcion = '';
  store.formArticulo.data.attributes.observacion = '';
  store.formArticulo.data.attributes.departamento_id = '';
  store.formArticulo.data.attributes.medida_id = '';
  store.formEtiqueta.data.attributes.etiqueta = '';
  store.formEtiqueta.data.attributes.descripcion = '';
  store.formEtiqueta.data.attributes.observacion = '';
}

let btnModificarClass = ref('')

const btnModificar = ref('Modificar')

let GuardarDep = ref('Agregar')

let GuardarArt = ref('Agregar')

const disabledDepartamentodBtn = ref('')

const disabledDepartamento = ref('')

const disabledArticulo = ref('')
const disabledEtiqueta = ref('')

const errores = ref({ articulo: "", descripcion: "", departamento_id: "", medida_id: "", departamento: "", descripcionDepatamento: "", etiqueta: "", descripcionEtiqueta: "", observEtiqueta: "" })

const agregarU = async () => {

  if (store.formDepartamentos.data.attributes.descripcion != '' && store.formDepartamentos.data.attributes.departamento != '') {
    // console.log(formDepartamentos)
    store.cambiaEstado(2)
    disabledDepartamentodBtn.value = 'disabled';
    GuardarDep.value = 'Guardando...';
    // console.log(store.nextIDDepartamento)
    store.formDepartamentos.id = store.nextIDDepartamento + 1;
    const response = await GuardarDatos(store.formDepartamentos, 6);
    if (response == null) {
      store.cambiaEstado(2)
    } else {
      disabledDepartamentodBtn.value = '';
      GuardarDep.value = 'Agregar'
      // console.log(response)
      store.formDepartamentos.data.attributes.observacion = ''
      store.formDepartamentos.data.attributes.descripcion = '';
      store.formDepartamentos.data.attributes.departamento = '';
      store.AddDepartamento(response)
      itemsDeparta1.value = store.itemsDepartamentos;
      successFull("Departamento agregado satisfactoriamente.", "top-end")
      disabledDepartamentodBtn.value = '';
      GuardarDep.value = 'Agregar'
      store.cambiaEstado(2)
    }

  } else {
    if (store.formDepartamentos.data.attributes.departamento == "") {
      errores.value.departamento = "Este campo es obligatorio"
    } else {
      errores.value.departamento = ""
    }

    if (store.formDepartamentos.data.attributes.descripcion == "") {
      errores.value.descripcionDepatamento = "Este campo es obligatorio"
    } else {
      errores.value.descripcionDepatamento = ""
    }
    ErrorFull("Debe llenar todos los campos obligatorios", "top-start")
    // store.cambiaEstado(2);
    // console.log(errores.value.cod)
  }
}

const agregarUArticulo = async () => {

  if (store.formArticulo.data.attributes.descripcion != '' && store.formArticulo.data.attributes.articulo != '' && store.formArticulo.data.attributes.medida_id != 0 && store.formArticulo.data.attributes.departamento_id != 0) {
    // console.log(formDepartamentos)
    // esperando.value = true;
    store.cambiaEstado(3)
    disabledDepartamentodBtn.value = 'disabled';
    GuardarArt.value = 'Guardando...';
    // store.formArticulo.id = store.nextIDArticulo + 1;
    const response = await GuardarDatos(store.formArticulo, 5);
    if (response == null) {
      store.cambiaEstado(3)
    } else {
      disabledDepartamentodBtn.value = '';
      GuardarArt.value = 'Agregar'
      // console.log(response)
      store.formArticulo.data.attributes.observacion = ''
      store.formArticulo.data.attributes.descripcion = '';
      store.formArticulo.data.attributes.articulo = '';
      store.formArticulo.data.attributes.departamento_id = '';
      store.formArticulo.data.attributes.medida_id = '';
      store.AddArticulo(response)
      itemsArticulos1.value = store.itemsArticulos;
      successFull("Artículo agregado satisfactoriamente.", "top-end")
      disabledDepartamentodBtn.value = '';
      GuardarArt.value = 'Agregar'
      store.cambiaEstado(3)
    }
  } else {
    if (store.formArticulo.data.attributes.articulo == '') {
      errores.value.articulo = "Este campo es obligatorio.";
    } else {
      errores.value.articulo = "";
    }
    if (store.formArticulo.data.attributes.descripcion == '') {
      errores.value.descripcion = "Este campo es obligatorio.";
    } else {
      errores.value.descripcion = "";
    }
    if (store.formArticulo.data.attributes.departamento_id == "") {
      errores.value.departamento_id = "Este campo es obligatorio.";
    } else {
      errores.value.departamento_id = "";
    }
    if (store.formArticulo.data.attributes.medida_id == "") {
      errores.value.medida_id = "Este campo es obligatorio.";
    } else {
      errores.value.medida_id = "";
    }
    ErrorFull("Debe llenar todos los campos obligatorios", "top-start")
    // errores.value.descripcion = "Campo requerido";
    // console.log(errores.value.cod)
  }
}

const agregarUEtiqueta = async () => {

  if (store.formEtiqueta.data.attributes.descripcion != '' && store.formEtiqueta.data.attributes.etiqueta != '') {
    // console.log(formDepartamentos)
    // esperando.value = true;
    store.cambiaEstado(5)
    disabledDepartamentodBtn.value = 'disabled';
    GuardarArt.value = 'Guardando...';
    // store.formEtiqueta.id = store.nextIDEtiqueta + 1;
    const response = await GuardarDatos(store.formEtiqueta, 8);
    if (response == null) {
      store.cambiaEstado(5)
    } else {
      disabledDepartamentodBtn.value = '';
      GuardarArt.value = 'Agregar'
      // console.log(response)
      store.formEtiqueta.data.attributes.observacion = ''
      store.formEtiqueta.data.attributes.descripcion = '';
      store.formEtiqueta.data.attributes.etiqueta = '';
      store.AddEtiqueta(response)
      itemsEtiqueta1.value = store.itemsEtiquetas;
      successFull("Etiqueta agregada satisfactoriamente.", "top-end")
      disabledDepartamentodBtn.value = '';
      GuardarArt.value = 'Agregar'
      store.cambiaEstado(5)
    }
  } else {
    if (store.formEtiqueta.data.attributes.etiqueta == '') {
      errores.value.etiqueta = "Este campo es obligatorio.";
    } else {
      errores.value.etiqueta = "";
    }
    if (store.formEtiqueta.data.attributes.descripcion == '') {
      errores.value.descripcionEtiqueta = "Este campo es obligatorio.";
    } else {
      errores.value.descripcionEtiqueta = "";
    }
    ErrorFull("Debe llenar todos los campos obligatorios", "top-start")
    // errores.value.descripcion = "Campo requerido";
    // console.log(errores.value.cod)
  }
}

const verificar_error = (n) => {
  switch (n) {
    case 1:
      if (store.formArticulo.data.attributes.articulo != '') {
        errores.value.articulo = "";
      } else {
        errores.value.articulo = "Este campo es obligatorio"
      }
      break;
    case 2:
      if (store.formArticulo.data.attributes.descripcion != '') {
        errores.value.descripcion = "";
      } else {
        errores.value.descripcion = "Este campo es obligatorio"
      }
      break;
    case 3:
      if (store.formArticulo.data.attributes.departamento_id != 0) {
        errores.value.departamento_id = "";
      } else {
        errores.value.departamento_id = "Este campo es obligatorio"
      }
      break;
    case 4:
      if (store.formArticulo.data.attributes.medida_id != 0) {
        errores.value.medida_id = "";
      } else {
        errores.value.medida_id = "Este campo es obligatorio"
      }
      break;
    case 5:
      if (store.formDepartamentos.data.attributes.departamento != "") {
        errores.value.departamento = "";
      } else {
        errores.value.departamento = "Este campo es obligatorio"
      }
      break;
    case 6:
      if (store.formDepartamentos.data.attributes.descripcion != "") {
        errores.value.descripcionDepatamento = "";
      } else {
        errores.value.descripcionDepatamento = "Este campo es obligatorio"
      }
      break;
    case 7:
      if (store.formEtiqueta.data.attributes.descripcion != "") {
        errores.value.descripcionEtiqueta = "";
      } else {
        errores.value.descripcionEtiqueta = "Este campo es obligatorio"
      }
      break;

    case 8:
      if (store.formEtiqueta.data.attributes.etiqueta != "") {
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

// const obtenerListadoLimpio = () => {
//   let i = 0;
//   // if (cargado.value = false) {
//   //   newListado.value = [];
//   //   for (let index = 0; index < listado.value.length; index++) {
//   //     const element = listado.value[index];
//   //     if (element.attributes.deleted_at == null) {
//   //       newListado.value[i] = element;
//   //       i++;
//   //     }
//   //   }
//   //   datosSinPaginar.value = newListado.value;
//   //   cantidad.value = Math.ceil(newListado.value.length / elementPagina.value);
//   //   obtenerPagina(1);
//   //   cargado.value = true;
//   // } else {
//   //   newListado.value = []
//   //   for (let index = 0; index < listado.value.length; index++) {
//   //     const element = listado.value[index];
//   //     if (element.attributes.deleted_at == null) {
//   //       newListado.value[i] = element;
//   //       i++;
//   //     }
//   //   }
//   //   datosSinPaginar.value = newListado.value;
//   //   cantidad.value = Math.ceil(newListado.value.length / elementPagina.value);
//   //   obtenerPagina(1);
//   // }

//   items.value = [];
//   for (let index = 0; index < listado.value.length; index++) {
//     items.value.push(listado.value[index])
//   }

// }

// const obtenerDepartamentos = () => {
//   let i = 0;
//   // console.log(listadoDepartamentos)
//   itemsdepartamentos.value = [];
//   for (let index = 0; index < listadoDepartamentos.value.length; index++) {
//     itemsdepartamentos.value.push(listadoDepartamentos.value[index])
//   }

// }

// const obtenerArticulos = () => {
//   let i = 0;

//   itemsarticulos.value = [];
//   for (let index = 0; index < listadoArticulos.value.length; index++) {
//     itemsarticulos.value.push(listadoArticulos.value[index])
//   }

// }

// const obtenerListadoLimpioSucursales = () => {
//   let i = 0;
//   // if (cargado.value = false) {
//   newListadoSucursal.value = [];
//   for (let index = 0; index < listadoSucursales.value.length; index++) {
//     const element = listadoSucursales.value[index];
//     if (element.attributes.deleted_at == null) {
//       newListadoSucursal.value[i] = element;
//       i++;
//     }
//   }
//   return newListadoSucursal;
//   // }

// }

// const almacenDatosProductos = (Lista) => {
//   // if (localStorage.getItem('ListadoCache')) {
//   //datos_archivados.value.push(Lista);
//   localStorage.removeItem('ListadoCache');
//   //   }else{
//   const parsed = JSON.stringify(Lista);
//   localStorage.setItem('ListadoCache', parsed);
//   // dataCache.value = JSON.parse(localStorage.getItem('ListadoCache'));
//   // }
// }

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
    inputLabel: `Modificar datos del producto: ` + `${formDepartamentos.data.attributes.departamento}`,
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
  let response = await axios.get(`http://` + ipPublica.value + `/fullstack/public/sucursales`)
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

const EditarListadoDepartamentos = async (newdato) => {
  let i = 0;
  itemsdepartamentos.value = [];
  // cargar datos en tabla-vue
  // console.log(newdato.id)
  for (let index = 0; index < listadoDepartamentos.value.length; index++) {
    if (newdato.id == listadoDepartamentos.value[index].id) {
      listadoDepartamentos.value[index] = newdato;
    }
    itemsdepartamentos.value.push(listadoDepartamentos.value[index])
  }
  almacenDatosDepartamentos(itemsdepartamentos.value);
  // console.log(items);

  return await itemsdepartamentos;

}

const EditarListadoArticulos = async (newdato) => {
  let i = 0;
  itemsarticulos.value = [];
  // cargar datos en tabla-vue
  // console.log(newdato.id)
  for (let index = 0; index < listadoArticulos.value.length; index++) {
    if (newdato.id == listadoArticulos.value[index].id) {
      listadoArticulos.value[index] = newdato;
    }
    itemsarticulos.value.push(listadoArticulos.value[index])
  }
  almacenDatosArticulos(itemsarticulos.value);
  // console.log(items);

  return await itemsarticulos;

}

const editarU = async () => {
  esperando.value = true;
  btnModificar.value = 'Actualizando...'
  btnModificarClass.value = 'disabled'
  store.cambiaEstado(2);
  const response = await EditarDatos(id.value, store.formDepartamentos, 6);
  if (!response) {
    store.cambiaEstado(2);
  } else {
    // console.log(response)
    editar.value = false;
    store.formMagnitud.data.attributes.descripcion = ''
    store.formMagnitud.data.attributes.observacion = '';
    store.formMagnitud.data.attributes.magnitud = '';

    store.EditDepartamento(response)
    itemsDeparta1.value = store.itemsDepartamentos;
    btnModificar.value = 'Modificar'
    btnModificarClass.value = ''
    successFull("Departamento agregado satisfactoriamente.", "top-end")
    store.cambiaEstado(2);
  }

  // axios.put(`https://${ipPublica.value}/fullstack/public/departamentos/${id.value}`, formDepartamentos)
  //   .then((response) => {
  //     // console.log(response.data.data)
  //     esperando.value = false;
  //     cargado.value = false;

  //     editar.value = false;
  //     formDepartamentos.data.attributes.descripcion = ''
  //     formDepartamentos.data.attributes.observacion = '';
  //     formDepartamentos.data.attributes.departamento = '';
  //     loadingD.value = true;
  //     // listadoDepartamentos.value.push(response.data.data)
  //     // almacenDatosDepartamentos(listadoDepartamentos.value);
  //     // listadoDepartamentos.value = JSON.parse(localStorage.getItem('ListadoCacheDepartamentos'));
  //     // obtenerDepartamentos();
  //     EditarListadoDepartamentos(response.data.data)
  //     loadingD.value = false;
  //     successFull("Categoría modificada satisfactoriamente.", "top-end")
  //     btnModificar.value = 'Modificar'
  //     btnModificarClass.value = ''
  //     // Swal.fire({
  //     //   icon: "success",
  //     //   title: "Editado satisfactoriamente."
  //     // })
  //     // editar.value = false;
  //     // localStorage.setItem("editar", editar.value);
  //   })
  //   .catch((error) => {
  //     if (error.response.status === 500) {
  //       errors.value = error.response.data;
  //     }
  //     esperando.value = false;
  //     ErrorFull("Error realizando operación.", "top-start")
  //     // cerrarAlert();
  //     // Swal.fire({
  //     //   icon: "danger",
  //     //   title: "Error realizando operación."
  //     // })
  //   })
}

const editarUEtiqueta = async () => {
  esperando.value = true;
  btnModificar.value = 'Actualizando...'
  btnModificarClass.value = 'disabled'
  store.cambiaEstado(5);
  const response = await EditarDatos(id.value, store.formEtiqueta, 8);
  // console.log(response)
  if (!response) {
    store.cambiaEstado(5);
    btnModificar.value = 'Modificar'
    btnModificarClass.value = '';
    ErrorFull("Error modificando los datos. Verifíquelos y vuelva a intentarlo.", "top-start")
  } else {
    // console.log(response)
    editar.value = false;
    store.formEtiqueta.data.attributes.descripcion = ''
    store.formEtiqueta.data.attributes.observacion = '';
    store.formEtiqueta.data.attributes.etiqueta = '';

    store.EditEtiqueta(response)
    itemsEtiqueta1.value = store.itemsEtiquetas;
    btnModificar.value = 'Modificar'
    btnModificarClass.value = ''
    successFull("Etiqueta modificada satisfactoriamente.", "top-end")
    store.cambiaEstado(5);
  }
}

const editarUArticulo = async () => {
  btnModificar.value = 'Actualizando...'
  btnModificarClass.value = 'disabled'
  store.cambiaEstado(3);
  const response = await EditarDatos(id.value, store.formArticulo, 5);
  if (!response) {
    store.cambiaEstado(3);
  } else {
    // console.log(response)
    editar.value = false;
    store.formArticulo.data.attributes.descripcion = ''
    store.formArticulo.data.attributes.observacion = '';
    store.formArticulo.data.attributes.articulo = '';
    store.formArticulo.data.attributes.departamento_id = '';
    store.formArticulo.data.attributes.medida_id = '';

    store.EditArticulo(response)
    itemsArticulos1.value = store.itemsArticulos;
    btnModificar.value = 'Modificar'
    btnModificarClass.value = ''
    successFull("Artículo modificado satisfactoriamente.", "top-end")
    store.cambiaEstado(3);
  }
}

const EliminarListadoDepartamentos = async (newdato) => {
  let i = 0;
  itemsdepartamentos.value = [];
  // cargar datos en tabla-vue
  // console.log(newdato.id)
  for (let index = 0; index < listadoDepartamentos.value.length; index++) {
    if (newdato.id == listadoDepartamentos.value[index].id) {
      listadoDepartamentos.value.splice(index, 1)
    }
    itemsdepartamentos.value.push(listadoDepartamentos.value[index])
  }
  almacenDatosDepartamentos(itemsdepartamentos.value);
  // console.log(itemsMedidas);

  return await itemsdepartamentos;

}

const EliminarListadoArticulos = async (newdato) => {
  let i = 0;
  itemsarticulos.value = [];
  for (let index = 0; index < listadoArticulos.value.length; index++) {
    if (newdato.id == listadoArticulos.value[index].id) {
      listadoArticulos.value.splice(index, 1)
    }
    itemsarticulos.value.push(listadoArticulos.value[index])
  }
  almacenDatosArticulos(itemsarticulos.value);
  return await itemsarticulos;

}

const actualizarDepartamento = async () => {
  actualizaTablaD.value = true;
  Actualizar.value = 'Actualizando...'
  let bienActualizado = false;
  disabledDepartamento.value = 'disabled'
  // localStorage.removeItem('Carg_datA'); // Articulos
  localStorage.removeItem('Carg_datD'); // Departamentos
  // localStorage.removeItem('Carg_datMe'); // Unidades de medida
  // localStorage.removeItem('Carg_datM'); // Magitudes
  // localStorage.removeItem('Carg_datP'); // Productos
  // localStorage.removeItem('Carg_datS'); // Sucursales
  // localStorage.removeItem('Carg_datU'); // Ubicaciones
  // localStorage.removeItem('Carg_datE'); // Etiquetas
  // localStorage.removeItem('Carg_datL'); // Lotes
  // localStorage.removeItem('Carg_datMo'); // Monedas
  // localStorage.removeItem('Carg_datIM'); // Imagenes
  // localStorage.removeItem('Carg_datEP'); // Etiqueta productos
  // localStorage.removeItem('Carg_datAu'); // Auditoria
  // localStorage.removeItem('Carg_datPe'); // Personas
  localStorage.setItem('Carg_datD', '0'); // Departamentos
  // localStorage.setItem('Carg_datA', '0'); // Articulos
  // localStorage.setItem('Carg_datMe', '0'); // Unidades de medida
  // localStorage.setItem('Carg_datM', '0'); // Magitudes
  // localStorage.setItem('Carg_datP', '0'); // Productos
  // localStorage.setItem('Carg_datS', '0'); // Sucursales
  // localStorage.setItem('Carg_datU', '0'); // Ubicaciones
  // localStorage.setItem('Carg_datE', '0'); // Etiquetas
  // localStorage.setItem('Carg_datL', '0'); // Lotes
  // localStorage.setItem('Carg_datMo', '0'); // Monedas
  // localStorage.setItem('Carg_datIM', '0'); // Imagenes
  // localStorage.setItem('Carg_datEP', '0'); // Etiqueta productos
  // localStorage.setItem('Carg_datAu', '0'); // Auditorias
  // localStorage.setItem('Carg_datPe', '0'); // Personas

  if (localStorage.getItem('userName')) {
    // Cargando productos
    // console.log(Store.itemsProductos)
    // cargando departamentos
    if (localStorage.getItem('Carg_datD') == '0') {
      store.cambiaEstado(2);
      const response = await obtenerDatos(6);
      // console.log(response)
      if (response == null) {
        store.cambiaEstado(2);
        // console.log("Nooo")
      } else {
        if (response.length >= 0) {
          store.setListadoDepartamentos(response)
          bienActualizado = true;
        // } else {
        //   bienActualizado = false;
        }
        localStorage.setItem("Carg_datD", "1");
        itemsDeparta1.value = store.itemsDepartamentos;
        store.cambiaEstado(2);
      }
    } else {
      store.cambiaEstado(2);
      itemsDeparta1.value = store.itemsDepartamentos;
      store.cambiaEstado(2);
    }

    disabledDepartamento.value = '';
    actualizaTablaD.value = false;
    Actualizar.value = 'Actualizar'
    if (bienActualizado == true) {
      successFull("Datos actualizados satisfactoriamente.", "top-end")
    } else {
      ErrorFull("Hubo un error actualizando los datos. Vuelva a intentarlo.", "top-start")
    }
  }
}

const actualizarArticulo = async () => {
  actualizaTablaA.value = true;
  ActualizarA.value = 'Actualizando...'
  let bienActualizado = false;
  disabledArticulo.value = 'disabled'
  localStorage.removeItem('Carg_datA'); // Articulos
  // localStorage.removeItem('Carg_datD'); // Departamentos
  // localStorage.removeItem('Carg_datMe'); // Unidades de medida
  // localStorage.removeItem('Carg_datM'); // Magitudes
  // localStorage.removeItem('Carg_datP'); // Productos
  // localStorage.removeItem('Carg_datS'); // Sucursales
  // localStorage.removeItem('Carg_datU'); // Ubicaciones
  // localStorage.removeItem('Carg_datE'); // Etiquetas
  // localStorage.removeItem('Carg_datL'); // Lotes
  // localStorage.removeItem('Carg_datMo'); // Monedas
  // localStorage.removeItem('Carg_datIM'); // Imagenes
  // localStorage.removeItem('Carg_datEP'); // Etiqueta productos
  // localStorage.removeItem('Carg_datAu'); // Auditoria
  // localStorage.removeItem('Carg_datPe'); // Personas
  // localStorage.setItem('Carg_datD', '0'); // Departamentos
  localStorage.setItem('Carg_datA', '0'); // Articulos
  // localStorage.setItem('Carg_datMe', '0'); // Unidades de medida
  // localStorage.setItem('Carg_datM', '0'); // Magitudes
  // localStorage.setItem('Carg_datP', '0'); // Productos
  // localStorage.setItem('Carg_datS', '0'); // Sucursales
  // localStorage.setItem('Carg_datU', '0'); // Ubicaciones
  // localStorage.setItem('Carg_datE', '0'); // Etiquetas
  // localStorage.setItem('Carg_datL', '0'); // Lotes
  // localStorage.setItem('Carg_datMo', '0'); // Monedas
  // localStorage.setItem('Carg_datIM', '0'); // Imagenes
  // localStorage.setItem('Carg_datEP', '0'); // Etiqueta productos
  // localStorage.setItem('Carg_datAu', '0'); // Auditorias
  // localStorage.setItem('Carg_datPe', '0'); // Personas

  if (localStorage.getItem('userName')) {
    // Cargando productos
    // console.log(Store.itemsProductos)
    // cargando departamentos
    if (localStorage.getItem('Carg_datA') == '0') {
      store.cambiaEstado(3);
      const response = await obtenerDatos(5);
      // console.log(response)
      if (response == null) {
        store.cambiaEstado(3);
        // console.log("Nooo")
      } else {
        if (response.length >= 0) {
          store.setListadoArticulos(response)
          bienActualizado = true;
        // } else {
        //   bienActualizado = false;
        }
        localStorage.setItem("Carg_datA", "1");
        itemsArticulos1.value = store.itemsArticulos;
        store.cambiaEstado(3);
      }
    } else {
      store.cambiaEstado(3);
      itemsArticulos1.value = store.itemsArticulos;
      store.cambiaEstado(3);
    }

    disabledArticulo.value = '';
    actualizaTablaA.value = false;
    ActualizarA.value = 'Actualizar'
    if (bienActualizado == true) {
      successFull("Datos actualizados satisfactoriamente.", "top-end")
    } else {
      ErrorFull("Hubo un error actualizando los datos. Vuelva a intentarlo.", "top-start")
    }
  }
}

const actualizarEtiqueta = async () => {
  actualizaTablaE.value = true;
  ActualizarE.value = 'Actualizando...'
  let bienActualizado = false;
  disabledEtiqueta.value = 'disabled'
  localStorage.removeItem('Carg_datE'); // Articulos
  // localStorage.removeItem('Carg_datD'); // Departamentos
  // localStorage.removeItem('Carg_datMe'); // Unidades de medida
  // localStorage.removeItem('Carg_datM'); // Magitudes
  // localStorage.removeItem('Carg_datP'); // Productos
  // localStorage.removeItem('Carg_datS'); // Sucursales
  // localStorage.removeItem('Carg_datU'); // Ubicaciones
  // localStorage.removeItem('Carg_datE'); // Etiquetas
  // localStorage.removeItem('Carg_datL'); // Lotes
  // localStorage.removeItem('Carg_datMo'); // Monedas
  // localStorage.removeItem('Carg_datIM'); // Imagenes
  // localStorage.removeItem('Carg_datEP'); // Etiqueta productos
  // localStorage.removeItem('Carg_datAu'); // Auditoria
  // localStorage.removeItem('Carg_datPe'); // Personas
  // localStorage.setItem('Carg_datD', '0'); // Departamentos
  localStorage.setItem('Carg_datE', '0'); // Articulos
  // localStorage.setItem('Carg_datMe', '0'); // Unidades de medida
  // localStorage.setItem('Carg_datM', '0'); // Magitudes
  // localStorage.setItem('Carg_datP', '0'); // Productos
  // localStorage.setItem('Carg_datS', '0'); // Sucursales
  // localStorage.setItem('Carg_datU', '0'); // Ubicaciones
  // localStorage.setItem('Carg_datE', '0'); // Etiquetas
  // localStorage.setItem('Carg_datL', '0'); // Lotes
  // localStorage.setItem('Carg_datMo', '0'); // Monedas
  // localStorage.setItem('Carg_datIM', '0'); // Imagenes
  // localStorage.setItem('Carg_datEP', '0'); // Etiqueta productos
  // localStorage.setItem('Carg_datAu', '0'); // Auditorias
  // localStorage.setItem('Carg_datPe', '0'); // Personas

  if (localStorage.getItem('userName')) {
    // Cargando productos
    // console.log(Store.itemsProductos)
    // cargando departamentos
    if (localStorage.getItem('Carg_datE') == '0') {
      store.cambiaEstado(5);
      const response = await obtenerDatos(8);
      // console.log(response)
      if (response == null) {
        store.cambiaEstado(5);
        // console.log("Nooo")
      } else {
        if (response.length >= 0) {
          store.setListadoEtiquetas(response)
          bienActualizado = true;
        // } else {
        //   bienActualizado = false;
        }
        localStorage.setItem("Carg_datE", "1");
        itemsEtiqueta1.value = store.itemsEtiquetas;
        store.cambiaEstado(5);
      }
    } else {
      store.cambiaEstado(5);
      itemsEtiqueta1.value = store.itemsEtiquetas;
      store.cambiaEstado(5);
    }

    disabledEtiqueta.value = '';
    actualizaTablaE.value = false;
    ActualizarE.value = 'Actualizar'
    if (bienActualizado == true) {
      successFull("Datos actualizados satisfactoriamente.", "top-end")
    } else {
      ErrorFull("Hubo un error actualizando los datos. Vuelva a intentarlo.", "top-start")
    }
  }
}

const borrarU = (id, correo, caso) => {
  // console.log(correo)
  let correcto = true;
  if (caso == 1){
    Swal.fire({
      title: "Confirmación",
      text: `Está a punto de eliminar el departamento: ${correo}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar"
    }).then(async (result) => {
      if (result.isConfirmed) {
        disabledDepartamento.value = 'disabled'
        store.cambiaEstado(2);
        const response = await EliminarDatos(id, 6);
        if (!response) {
          store.cambiaEstado(2);
          ErrorFull("Error eliminando el departamento.", "top-start")
        } else {
          store.DeleteDepartamento(response);
          itemsDeparta1.value = store.itemsDepartamentos;
          successFull("Departamento eliminado satisfactoriamente.", "top-end")
          disabledDepartamento.value = ''
          store.cambiaEstado(2);
        }

      }
    })

  }else{
    Swal.fire({
      title: "Confirmación",
      text: `Está a punto de eliminar ${itemsSelected.value.length} departamentos. `,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar"
    }).then(async (result) => {
      if (result.isConfirmed) {
        store.cambiaEstado(2);
        disabledDepartamento.value = 'disabled'
        // Eliminar //
        for (let index = 0; index < itemsSelected.value.length; index++) {

          const response = await EliminarDatos(itemsSelected.value[index].id, 6);
          if (response == null) {
            // Store.cambiaEstado(1);
            correcto = false;
          } else {
            store.DeleteDepartamento(response);
            correcto = true;
            // Store.cambiaEstado(1);
          }
        }
        if (correcto == true) {
          itemsDeparta1.value = store.itemsDepartamentos;
          successFull("Departamentos eliminados satisfactoriamente.", "top-end")
          store.cambiaEstado(2);
          disabledDepartamento.value = ''
        } else {
          ErrorFull("Error eliminando los elementos seleccionados.", "top-start")
          store.cambiaEstado(2);
          disabledDepartamento.value = ''
        }
      }
    })
  }
}

const borrarUArticulo = (id, correo, caso) => {
  // console.log(correo)
  let correcto = false;
  if (caso == 1){
    Swal.fire({
      title: "Confirmación",
      text: `Está a punto de eliminar el artículo: ${correo}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar"
    }).then(async (result) => {
      if (result.isConfirmed) {
        disabledArticulo.value = 'disabled'
        store.cambiaEstado(3);
        const response = await EliminarDatos(id, 5);
        if (!response) {
          store.cambiaEstado(3);
        } else {
          store.DeleteArticulo(response);
          itemsArticulos1.value = store.itemsArticulos;
          successFull("Artículo eliminado satisfactoriamente.", "top-end")
          disabledArticulo.value = ''
          store.cambiaEstado(3);
        }

      }
    })
  }else{
    Swal.fire({
      title: "Confirmación",
      text: `Está a punto de eliminar ${itemsSelected1.value.length} artículos. `,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar"
    }).then(async (result) => {
      if (result.isConfirmed) {
        store.cambiaEstado(3);
        disabledArticulo.value = 'disabled'
        // Eliminar //
        for (let index = 0; index < itemsSelected1.value.length; index++) {

          const response = await EliminarDatos(itemsSelected1.value[index].id, 5);
          if (response == null) {
            // Store.cambiaEstado(1);
            correcto = false;
          } else {
            store.DeleteArticulo(response);
            correcto = true;
            // Store.cambiaEstado(1);
          }
        }
        if (correcto == true) {
          itemsArticulos1.value = store.itemsArticulos;
          successFull("Artículos eliminados satisfactoriamente.", "top-end")
          store.cambiaEstado(3);
          disabledArticulo.value = ''
        } else {
          ErrorFull("Error eliminando los elementos seleccionados.", "top-start")
          store.cambiaEstado(3);
          disabledArticulo.value = ''
        }
      }
    })
  }
}

const borrarUEtiqueta = (id, correo, caso) => {
  // console.log(correo)
  let correcto = false;
  if (caso == 1){
    Swal.fire({
      title: "Confirmación",
      text: `Está a punto de eliminar la etiqueta: ${correo}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar"
    }).then(async (result) => {
      if (result.isConfirmed) {
        disabledEtiqueta.value = 'disabled'
        store.cambiaEstado(5);
        const response = await EliminarDatos(id, 8);
        if (!response) {
          store.cambiaEstado(5);
        } else {
          store.DeleteEtiqueta(response);
          itemsEtiqueta1.value = store.itemsEtiquetas;
          successFull("Etiqueta eliminada satisfactoriamente.", "top-end")
          disabledEtiqueta.value = ''
          store.cambiaEstado(5);
        }

      }
    })
  }else{
    Swal.fire({
      title: "Confirmación",
      text: `Está a punto de eliminar ${itemsSelected2.value.length} etiquetas. `,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar"
    }).then(async (result) => {
      if (result.isConfirmed) {
        store.cambiaEstado(5);
        disabledEtiqueta.value = 'disabled'
        // Eliminar //
        for (let index = 0; index < itemsSelected2.value.length; index++) {

          const response = await EliminarDatos(itemsSelected2.value[index].id, 8);
          if (response == null) {
            // Store.cambiaEstado(1);
            correcto = false;
          } else {
            store.DeleteEtiqueta(response);
            correcto = true;
            // Store.cambiaEstado(1);
          }
        }
        if (correcto == true) {
          itemsEtiqueta1.value = store.itemsEtiquetas;
          successFull("Etiquetas eliminadas satisfactoriamente.", "top-end")
          store.cambiaEstado(5);
          disabledEtiqueta.value = ''
        } else {
          ErrorFull("Error eliminando los elementos seleccionados.", "top-start")
          store.cambiaEstado(5);
          disabledEtiqueta.value = ''
        }
      }
    })
  }
  // .then((result) => {
  //   if (result.isConfirmed) {
  //     esperando.value = true;
  //     // Eliminar //
  //     axios.delete(`https://${ipPublica.value}/fullstack/public/articulos/${id}`)
  //       .then((response) => {
  //         if (response.data.data == null) {
  //           ErrorFull("Error realizando operación.", "top-start");
  //         } else {
  //           esperando.value = false;
  //           loading.value = true;
  //           EliminarListadoArticulos(response.data.data)
  //           loading.value = false;
  //           successFull("Artículo eliminado satisfactoriamente.", "top-end")
  //         }

  //       })
  //   }
  // }).catch((error) => {
  //   if (error.response.status === 500) {
  //     errors.value = error.response.data;
  //   }
  //   esperando.value = false;
  //   ErrorFull("Error realizando operación.", "top-start")
  // });
}
// Fin CRUD

const clickEditar = async (idSelect) => {
  editar.value = true;
  errores.value.departamento = "";
  errores.value.descripcion = "";
  errores.value.descripcionDepatamento = "";
  errores.value.observacion = "";
  errores.value.articulo = "";
  errores.value.departamento_id = "";
  errores.value.medida_id = "";
  errores.value.etiqueta = "";
  errores.value.descripcionEtiqueta = "";
  errores.value.observEtiqueta = "";
  // console.log(idSelect)
  // localStorage.setItem("editar", editar.value);
  id.value = idSelect;

  for (let index = 0; index < itemsDeparta1.value.length; index++) {
    const element = itemsDeparta1.value[index].id;
    if (element == idSelect) {
      store.formDepartamentos.data.attributes.descripcion = itemsDeparta1.value[index].attributes.descripcion;
      store.formDepartamentos.data.attributes.departamento = itemsDeparta1.value[index].attributes.departamento;
      store.formDepartamentos.data.attributes.observacion = itemsDeparta1.value[index].attributes.observacion;
      break;
    }
  }
}

const clickEditarArticulo = async (idSelect) => {
  editar.value = true;
  errores.value.departamento = "";
  errores.value.descripcion = "";
  errores.value.descripcionDepatamento = "";
  errores.value.observacion = "";
  errores.value.articulo = "";
  errores.value.departamento_id = "";
  errores.value.medida_id = "";
  errores.value.etiqueta = "";
  errores.value.descripcionEtiqueta = "";
  errores.value.observEtiqueta = "";
  // console.log(idSelect)
  // localStorage.setItem("editar", editar.value);
  id.value = idSelect;

  for (let index = 0; index < itemsArticulos1.value.length; index++) {
    const element = itemsArticulos1.value[index].id;
    if (element == idSelect) {
      store.formArticulo.data.attributes.descripcion = itemsArticulos1.value[index].attributes.descripcion;
      store.formArticulo.data.attributes.articulo = itemsArticulos1.value[index].attributes.articulo;
      store.formArticulo.data.attributes.observacion = itemsArticulos1.value[index].attributes.observacion;
      store.formArticulo.data.attributes.departamento_id = itemsArticulos1.value[index].relationships.departamento.data.id;
      store.formArticulo.data.attributes.medida_id = itemsArticulos1.value[index].relationships.medida.data.id;
      break;
    }
  }
}

const clickEditarEtiqueta = async (idSelect) => {
  editar.value = true;
  errores.value.departamento = "";
  errores.value.descripcion = "";
  errores.value.descripcionDepatamento = "";
  errores.value.observacion = "";
  errores.value.articulo = "";
  errores.value.departamento_id = "";
  errores.value.medida_id = "";
  errores.value.etiqueta = "";
  errores.value.descripcionEtiqueta = "";
  errores.value.observEtiqueta = "";
  // console.log(idSelect)
  // localStorage.setItem("editar", editar.value);
  id.value = idSelect;

  for (let index = 0; index < itemsEtiqueta1.value.length; index++) {
    const element = itemsEtiqueta1.value[index].id;
    if (element == idSelect) {
      store.formEtiqueta.data.attributes.descripcion = itemsEtiqueta1.value[index].attributes.descripcion;
      store.formEtiqueta.data.attributes.etiqueta = itemsEtiqueta1.value[index].attributes.etiqueta;
      store.formEtiqueta.data.attributes.observacion = itemsEtiqueta1.value[index].attributes.observacion;
      break;
    }
  }
}

const cancelarU = () => {
  editar.value = false;
  store.formDepartamentos.data.attributes.descripcion = '';
  store.formDepartamentos.data.attributes.departamento = '';
  store.formDepartamentos.data.attributes.observacion = '';
}

const actualizar_datos = () => {
  // localStorage.removeItem('ListadoCache');
  listado.value = JSON.parse(localStorage.getItem('ListadoCache'));
  obtenerListadoLimpio();
  // listadoSucursales.value = JSON.parse(localStorage.getItem('ListadoCacheSucursal'));
  // listadoSucursales = obtenerListadoLimpioSucursales();
}
// Excel

const nuevoArreglo = ref([]);
const elementos = ref([]);
function ExportExcel() {
  if (itemsDeparta1.value.length > 0) {
    elementos.value = []
    nuevoArreglo.value = []
    for (let index = 0; index < itemsDeparta1.value.length; index++) {
      elementos.value.TIPO = itemsDeparta1.value[index].type;
      elementos.value.DEPARTAMENTO = itemsDeparta1.value[index].attributes.departamento;
      elementos.value.DESCRIPCIÓN = itemsDeparta1.value[index].attributes.descripcion;
      elementos.value.OBSERVACIÓN = itemsDeparta1.value[index].attributes.observacion;
      elementos.value.CREATED_AT = itemsDeparta1.value[index].attributes.timestamps.created_at;
      elementos.value.UPDATE_AT = itemsDeparta1.value[index].attributes.timestamps.updated_at;
      nuevoArreglo.value.push(elementos.value)
      elementos.value = []
    }
    // console.log(nuevoArreglo)
    const worksheet = XLSX.utils.json_to_sheet(nuevoArreglo.value);
    const workbook = XLSX.utils.book_new();
    // // Abriendo el excel
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    // // Generar el archivo
    const fileName = 'Departamentos.xlsx';
    // // Guardar el archivo execl
    XLSX.writeFile(workbook, fileName);
    successFull("Documento creado satisfactoriamente.", "top-end")
  }
}

function ExportExcelArticulos() {
  if (itemsArticulos1.value.length > 0) {
    elementos.value = []
    nuevoArreglo.value = []
    for (let index = 0; index < itemsArticulos1.value.length; index++) {
      elementos.value.TIPO = itemsArticulos1.value[index].type;
      elementos.value.ARTÍCULO = itemsArticulos1.value[index].attributes.articulo;
      elementos.value.DESCRIPCIÓN = itemsArticulos1.value[index].attributes.descripcion;
      elementos.value.OBSERVACIÓN = itemsArticulos1.value[index].attributes.observacion;
      elementos.value.CREADO = itemsArticulos1.value[index].attributes.timestamps.created_at;
      elementos.value.MODIFICADO = itemsArticulos1.value[index].attributes.timestamps.updated_at;
      nuevoArreglo.value.push(elementos.value)
      elementos.value = []
    }
    // console.log(nuevoArreglo)
    const worksheet = XLSX.utils.json_to_sheet(nuevoArreglo.value);
    const workbook = XLSX.utils.book_new();
    // // Abriendo el excel
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    // // Generar el archivo
    const fileName = 'Articulos.xlsx';
    // // Guardar el archivo execl
    XLSX.writeFile(workbook, fileName);
    successFull("Documento creado satisfactoriamente.", "top-end")
  }
}

function ExportExcelEtiqueta() {
  if (itemsEtiqueta1.value.length > 0) {
    elementos.value = []
    nuevoArreglo.value = []
    for (let index = 0; index < itemsEtiqueta1.value.length; index++) {
      elementos.value.TIPO = itemsEtiqueta1.value[index].type;
      elementos.value.ETIQUETA = itemsEtiqueta1.value[index].attributes.etiqueta;
      elementos.value.DESCRIPCIÓN = itemsEtiqueta1.value[index].attributes.descripcion;
      elementos.value.OBSERVACIÓN = itemsEtiqueta1.value[index].attributes.observacion;
      elementos.value.CREATED_AT = itemsEtiqueta1.value[index].attributes.timestamps.created_at;
      elementos.value.UPDATE_AT = itemsEtiqueta1.value[index].attributes.timestamps.updated_at;
      nuevoArreglo.value.push(elementos.value)
      elementos.value = []
    }
    // console.log(nuevoArreglo)
    const worksheet = XLSX.utils.json_to_sheet(nuevoArreglo.value);
    const workbook = XLSX.utils.book_new();
    // // Abriendo el excel
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    // // Generar el archivo
    const fileName = 'Etiquetas.xlsx';
    // // Guardar el archivo execl
    XLSX.writeFile(workbook, fileName);
    successFull("Documento creado satisfactoriamente.", "top-end")
  }
}
// Fin

onMounted(async () => {
  const verConexion = await verificarConexion()
  if (verConexion) {
    if (localStorage.getItem('userName')) {
      if (localStorage.getItem('Carg_datD') == '0') {
        store.cambiaEstado(2);
        const response = await obtenerDatos(6);
        // console.log(response)
        if (!response) {
          store.cambiaEstado(2);
        } else {
          if (response.length > 0) {
            store.setListadoDepartamentos(response)
          }
          localStorage.setItem("Carg_datD", "1");
          itemsDeparta1.value = store.itemsDepartamentos;
          store.cambiaEstado(2);
        }
      } else {
        store.cambiaEstado(2);
        itemsDeparta1.value = store.itemsDepartamentos;
        store.cambiaEstado(2);
      }
      if (localStorage.getItem('Carg_datA') == '0') {
        store.cambiaEstado(3);
        const response = await obtenerDatos(5);
        if (!response) {
          store.cambiaEstado(3);
        } else {
          if (response.length > 0) {
            store.setListadoArticulos(response)
          }
          localStorage.setItem("Carg_datA", "1");
          itemsArticulos1.value = store.itemsArticulos;
          store.cambiaEstado(3);
        }
      } else {
        store.cambiaEstado(3);
        itemsArticulos1.value = store.itemsArticulos;
        store.cambiaEstado(3);
      }
      if (localStorage.getItem("Carg_datMe") == "0") {

        const response = await obtenerDatos(3);
        if (!response) {

        } else {
          if (response.length > 0) {
            store.setListadoMedidas(response)
          }
          // for (let index = 0; index < response.length; index++) {
          //   store.nextIDMedida = response[index].id;
          // }

          localStorage.setItem("Carg_datMe", "1");
          itemsMedida1.value = store.itemsMedidas;
        }

      } else {
        itemsMedida1.value = store.itemsMedidas;
      }

      if (localStorage.getItem('Carg_datE') == '0') {
        store.cambiaEstado(5);
        const response = await obtenerDatos(8);
        if (!response) {
          store.cambiaEstado(5);
        } else {
          if (response.length > 0) {
            store.setListadoEtiquetas(response)
          }
          for (let index = 0; index < response.length; index++) {
            store.nextIDEtiqueta = response[index].id;
          }
          localStorage.setItem("Carg_datE", "1");
          itemsEtiqueta1.value = store.itemsEtiquetas;
          store.cambiaEstado(5);
        }
      } else {
        store.cambiaEstado(5);
        itemsEtiqueta1.value = store.itemsEtiquetas;
        store.cambiaEstado(5);
      }
    } else {
      router.push('/login');
    }
  }else{
ErrorFull("No tiene buena conexión a la red, vuelva a intentarlo más tarde.", "top-start")
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
    h1.h3.mb-0.text-gray-800 {
      font-size: small;
      font-weight: 600;
    }

    .container-fluid {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
  }
}
</style>
