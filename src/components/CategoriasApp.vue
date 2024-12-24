<template>
  <div>
    <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">DEPARTAMENTOS Y TIPOS DE ARTÍCULOS </h1>
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
                      <a @click="abrirModalAddProd()" class="btn btn-secondary btn-sm btn-icon-split m-2"
                        :class="disabledDepartamento">
                        <span class="icon text-white-50">
                          <i class="fas fa-print"></i>
                        </span>
                        <span class="text">Imprimir</span>
                      </a>
                      <a @click="ExportExcel()" class="btn btn-primary btn-sm btn-icon-split"
                        :class="disabledDepartamento">
                        <span class="icon text-white-50">
                          <i class="fas fa-download"></i>
                        </span>
                        <span class="text">Excel</span>
                      </a>
                    </div>
                  </div>
                  <div class="col-md-6 col-xl-6 col-lg-12 ">
                    <span class="text-info">Buscar: </span>
                    <input class="form-control" type="text" v-model="searchValue"
                      placeholder="Teclee el nombre del departamento a buscar..." />
                  </div>
                </div>
                <br>

                <EasyDataTable table-class-name="customize-table" :headers="headers" :items="itemsdepartamentos"
                  buttons-pagination border-cell header-text-direction="center" body-text-direction="center"
                  :search-field="searchField" :search-value="searchValue" :rows-per-page="5" :loading="loadingD"
                  show-index>
                  <template #item-opciones="item">
                    <div class="operation-wrapper">
                      <button class="btn btn-success btn-sm btn-circle" @click="clickEditar(item.id)" v-b-tooltip.hover
                        title="Editar" data-toggle="modal" data-target="#editaDepartamento"><span
                          class="fas fa-edit"></span></button>
                      <!-- <button class="btn btn-success btn-sm btn-circle ml-1" @click="Aumentar(item)" v-b-tooltip.hover
                    title="Aumentar"><span class="fas fa-plus"></span></button>
                  <button class="btn btn-warning btn-sm btn-circle ml-1" @click="Disminuir(item)" v-b-tooltip.hover
                    title="Restar"><span class="fas fa-minus"></span></button>-->
                      <button class="btn btn-danger btn-sm btn-circle ml-1"
                        @click="borrarU(item.id, item.attributes.departamento)" v-b-tooltip.hover title="Eliminar"><span
                          class="fas fas fa-trash-alt"></span></button>
                    </div>
                  </template>
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
                      <a @click="abrirModalAddProd()" class="btn btn-secondary btn-sm btn-icon-split m-2"
                        :class="disabledArticulo">
                        <span class="icon text-white-50">
                          <i class="fas fa-print"></i>
                        </span>
                        <span class="text">Imprimir</span>
                      </a>
                      <a @click="ExportExcelArticulos()" class="btn btn-primary btn-sm btn-icon-split"
                        :class="disabledArticulo">
                        <span class="icon text-white-50">
                          <i class="fas fa-download"></i>
                        </span>
                        <span class="text">Excel</span>
                      </a>
                    </div>
                  </div>
                  <div class="col-md-6 col-xl-6 col-lg-12 ">
                    <span class="text-info">Buscar: </span>
                    <input class="form-control" type="text" v-model="searchValue"
                      placeholder="Teclee el nombre del artículo a buscar..." />
                  </div>
                </div>
                <br>

                <EasyDataTable table-class-name="customize-table" :headers="headersArticulos" :items="itemsarticulos"
                  buttons-pagination border-cell header-text-direction="center" body-text-direction="center"
                  :search-field="searchFieldArticulo" :search-value="searchValueArticulo" :rows-per-page="5"
                  :loading="loading" show-index>
                  <template #item-opciones="item">
                    <div class="operation-wrapper">
                      <button class="btn btn-success btn-sm btn-circle" data-toggle="modal"
                        data-target="#editaArticulos" @click="clickEditarArticulo(item.id)" v-b-tooltip.hover
                        title="Editar"><span class="fas fa-edit"></span></button>
                      <!-- <button class="btn btn-success btn-sm btn-circle ml-1" @click="Aumentar(item)" v-b-tooltip.hover
                    title="Aumentar"><span class="fas fa-plus"></span></button>
                  <button class="btn btn-warning btn-sm btn-circle ml-1" @click="Disminuir(item)" v-b-tooltip.hover
                    title="Restar"><span class="fas fa-minus"></span></button>-->
                      <button class="btn btn-danger btn-sm btn-circle ml-1"
                        @click="borrarUArticulo(item.id, item.attributes.articulo)" v-b-tooltip.hover
                        title="Eliminar"><span class="fas fas fa-trash-alt"></span></button>
                    </div>
                  </template>
                  <template #loading>
                    <img src="https://i.pinimg.com/originals/94/fd/2b/94fd2bf50097ade743220761f41693d5.gif"
                      style="width: 100px; height: 80px;" />
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
    <div :class="'modal fade ' + showModal1" id="agregaDepartamento" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" :aria-hidden="activaHide1" :arial-modal="activaModal1" :style="displayModal1">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-info" id="exampleModalLabel" v-if="editar == false">NUEVO DEPARTAMENTO </h5>
            <h5 class="modal-title text-info text-center" id="exampleModalLabel" v-if="editar == true"><span
                class="fa fa-edit"></span>
              MODIFICAR LOS DATOS DEL DEPARTAMENTO <br>(<label style="color: red;">{{
                formDepartamentos.data.attributes.departamento
              }}</label>)</h5>

            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" class="text-info">×</span>
            </button>
          </div>
          <div class="modal-body text-center">

            <!-- <form id="form"> -->

            <div class="col-lg-12">
              <div class="">
                <div class="text-center">
                  <h1 class="h6 text-gray-900 mb-4"><i>CAMPOS OBLIGATORIOS</i> (<label style="color: red;">*</label>)
                  </h1>
                </div>
                <form class="">

                  <div class="row">
                    <div class="form-group col-lg-12">
                      <label class="text-info">Nombre del departamento: <label style="color: red;">*</label></label>
                      <input type="text" class="form-control" id="departamentos"
                        v-model="formDepartamentos.data.attributes.departamento" placeholder="Nombre del departamento"
                        required>
                      <span v-if="errores.cod" style="color: red;">Campo en blanco</span>
                    </div>
                    <div class="form-group col-lg-12">
                      <label class="text-info">Descripción: <label style="color: red;">*</label></label>
                      <input type="text" class="form-control" id="descripcion" aria-describedby="emailHelp"
                        v-model="formDepartamentos.data.attributes.descripcion"
                        placeholder="Descripción del departamento">
                      <span v-if="errores.descripcion" style="color: red;">Campo en blanco</span>
                    </div>
                    <div class="form-group col-lg-12">
                      <label class="text-info">Observaciones:</label>
                      <textarea class="form-control" id="observacion"
                        v-model="formDepartamentos.data.attributes.observacion"
                        placeholder="Observaciones del departamento"></textarea>

                    </div>
                  </div>
                </form>
              </div>
              <div class="row">

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
              </div>
            </div>
            <!-- </form> -->
          </div>

        </div>
      </div>
    </div>
    <!-- Logout Editar Departamentos-->
    <div :class="'modal fade ' + showModal1" id="editaDepartamento" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" :aria-hidden="activaHide1" :arial-modal="activaModal1" :style="displayModal1">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-info" id="exampleModalLabel" v-if="editar == false">NUEVO DEPARTAMENTO </h5>
            <h5 class="modal-title text-info text-center" id="exampleModalLabel" v-if="editar == true"><span
                class="fa fa-edit"></span>
              MODIFICAR LOS DATOS DEL DEPARTAMENTO <br>(<label style="color: red;">{{
                formDepartamentos.data.attributes.departamento
              }}</label>)</h5>

            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" class="text-info">×</span>
            </button>
          </div>
          <div class="modal-body text-center">

            <!-- <form id="form"> -->

            <div class="col-lg-12">
              <div class="">
                <div class="text-center">
                  <h1 class="h6 text-gray-900 mb-4"><i>CAMPOS OBLIGATORIOS</i> (<label style="color: red;">*</label>)
                  </h1>
                </div>
                <form class="">

                  <div class="row">
                    <div class="form-group col-lg-12">
                      <label class="text-info">Nombre del departamento: <label style="color: red;">*</label></label>
                      <input type="text" class="form-control" id="departamentos"
                        v-model="formDepartamentos.data.attributes.departamento" placeholder="Nombre del departamento"
                        required>
                      <span v-if="errores.cod" style="color: red;">Campo en blanco</span>
                    </div>
                    <div class="form-group col-lg-12">
                      <label class="text-info">Descripción: <label style="color: red;">*</label></label>
                      <input type="text" class="form-control" id="descripcion" aria-describedby="emailHelp"
                        v-model="formDepartamentos.data.attributes.descripcion"
                        placeholder="Descripción del departamento">
                      <span v-if="errores.descripcion" style="color: red;">Campo en blanco</span>
                    </div>
                    <div class="form-group col-lg-12">
                      <label class="text-info">Observaciones:</label>
                      <textarea class="form-control" id="observacion"
                        v-model="formDepartamentos.data.attributes.observacion"
                        placeholder="Observaciones del departamento"></textarea>

                    </div>
                  </div>
                </form>
              </div>
              <div class="row">

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
              </div>
            </div>
            <!-- </form> -->
          </div>

        </div>
      </div>
    </div>

    <!-- Logout articulos-->
    <div :class="'modal fade ' + showModal1" id="agregaArticulos" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" :aria-hidden="activaHide1" :arial-modal="activaModal1" :style="displayModal1">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-info" id="exampleModalLabel" v-if="editar == false">NUEVO ARTÍCULO </h5>
            <h5 class="modal-title text-info text-center" id="exampleModalLabel" v-if="editar == true"><span
                class="fa fa-edit"></span>
              MODIFICAR LOS DATOS DEL ARTÍCULO <br>(<label style="color: red;">{{
                formArticulo.data.attributes.articulo
              }}</label>)</h5>

            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" class="text-info">×</span>
            </button>
          </div>
          <div class="modal-body text-center">

            <!-- <form id="form"> -->

            <div class="col-lg-12">
              <div class="">
                <div class="text-center">
                  <h1 class="h6 text-gray-900 mb-4"><i>CAMPOS OBLIGATORIOS</i> (<label style="color: red;">*</label>)
                  </h1>
                </div>
                <form class="">

                  <div class="row">
                    <div class="form-group col-lg-12">
                      <label class="text-info">Nombre del artículo: <label style="color: red;">*</label></label>
                      <input type="text" class="form-control" id="articulo"
                        v-model="formArticulo.data.attributes.articulo" placeholder="Nombre del artículo" required>
                      <span v-if="errores.cod" style="color: red;">Campo en blanco</span>
                    </div>
                    <div class="form-group col-lg-12">
                      <label class="text-info">Descripción: <label style="color: red;">*</label></label>
                      <input type="text" class="form-control" id="descripcionA" aria-describedby="emailHelp"
                        v-model="formArticulo.data.attributes.descripcion" placeholder="Descripción del artículo">
                      <span v-if="errores.descripcion" style="color: red;">Campo en blanco</span>
                    </div>
                    <div class="form-group col-lg-12">
                      <label class="text-info">Observaciones:</label>
                      <textarea class="form-control" id="observacionA"
                        v-model="formArticulo.data.attributes.observacion"
                        placeholder="Observaciones del artículo"></textarea>

                    </div>
                  </div>
                  <div class="row">
                    <div class="form-group col-lg-6">
                      <label class="text-info">Seleccione el departamento: <label style="color: red;">*</label></label>
                      <select name="rol" id="rol" style="width: 100%; text-align:center" placeholder="Sucursal"
                        class="text-gray-900 form-control" v-model="formArticulo.data.attributes.departamento_id">
                        <option v-for="dato in listadoDepartamentos" :key="dato.id" :value="dato.id">{{
                          dato.attributes.departamento }}</option>
                      </select>
                    </div>
                    <div class="form-group col-lg-6">
                      <label class="text-info">Seleccione la unidad de medida: <label
                          style="color: red;">*</label></label>
                      <select name="rol" id="rol" style="width: 100%; text-align:center" placeholder="Sucursal"
                        class="text-gray-900 form-control" v-model="formArticulo.data.attributes.medida_id">
                        <option v-for="dato in listadoMedida" :key="dato.id" :value="dato.id">{{
                          dato.attributes.medida }}</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
              <div class="row">

                <div v-if="editar == false" class="form-group h4 col-lg-3">

                </div>
                <div v-if="editar == false" class="form-group h4 col-lg-6">
                  <a @click="agregarUArticulo()" class="btn btn-info btn-block" :class="disabledDepartamentodBtn">
                    {{ GuardarArt }}
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
              </div>
            </div>
            <!-- </form> -->
          </div>

        </div>
      </div>
    </div>
    <!-- Logout Editar articulos-->
    <div :class="'modal fade ' + showModal1" id="editaArticulos" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" :aria-hidden="activaHide1" :arial-modal="activaModal1" :style="displayModal1">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-info" id="exampleModalLabel" v-if="editar == false">NUEVO ARTÍCULO </h5>
            <h5 class="modal-title text-info text-center" id="exampleModalLabel" v-if="editar == true"><span
                class="fa fa-edit"></span>
              MODIFICAR LOS DATOS DEL ARTÍCULO <br>(<label style="color: red;">{{
                formArticulo.data.attributes.articulo
              }}</label>)</h5>

            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" class="text-info">×</span>
            </button>
          </div>
          <div class="modal-body text-center">

            <!-- <form id="form"> -->

            <div class="col-lg-12">
              <div class="">
                <div class="text-center">
                  <h1 class="h6 text-gray-900 mb-4"><i>CAMPOS OBLIGATORIOS</i> (<label style="color: red;">*</label>)
                  </h1>
                </div>
                <form class="">

                  <div class="row">
                    <div class="form-group col-lg-12">
                      <label class="text-info">Nombre del artículo: <label style="color: red;">*</label></label>
                      <input type="text" class="form-control" id="articulo"
                        v-model="formArticulo.data.attributes.articulo" placeholder="Nombre del artículo" required>
                      <span v-if="errores.cod" style="color: red;">Campo en blanco</span>
                    </div>
                    <div class="form-group col-lg-12">
                      <label class="text-info">Descripción: <label style="color: red;">*</label></label>
                      <input type="text" class="form-control" id="descripcionA" aria-describedby="emailHelp"
                        v-model="formArticulo.data.attributes.descripcion" placeholder="Descripción del artículo">
                      <span v-if="errores.descripcion" style="color: red;">Campo en blanco</span>
                    </div>
                    <div class="form-group col-lg-12">
                      <label class="text-info">Observaciones:</label>
                      <textarea class="form-control" id="observacionA"
                        v-model="formArticulo.data.attributes.observacion"
                        placeholder="Observaciones del artículo"></textarea>

                    </div>
                  </div>
                  <div class="row">
                    <div class="form-group col-lg-6">
                      <label class="text-info">Seleccione el departamento: <label style="color: red;">*</label></label>
                      <select name="rol" id="rol" style="width: 100%; text-align:center" placeholder="Sucursal"
                        class="text-gray-900 form-control" v-model="formArticulo.data.attributes.departamento_id">
                        <option v-for="dato in listadoDepartamentos" :key="dato.id" :value="dato.id">{{
                          dato.attributes.departamento }}</option>
                      </select>
                    </div>
                    <div class="form-group col-lg-6">
                      <label class="text-info">Seleccione la unidad de medida: <label
                          style="color: red;">*</label></label>
                      <select name="rol" id="rol" style="width: 100%; text-align:center" placeholder="Sucursal"
                        class="text-gray-900 form-control" v-model="formArticulo.data.attributes.medida_id">
                        <option v-for="dato in listadoMedida" :key="dato.id" :value="dato.id">{{
                          dato.attributes.medida }}</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
              <div class="row">

                <div v-if="editar == false" class="form-group h4 col-lg-3">

                </div>
                <div v-if="editar == false" class="form-group h4 col-lg-6">
                  <a @click="agregarUArticulo()" class="btn btn-info btn-block" :class="disabledDepartamentodBtn">
                    {{ GuardarDep }}
                  </a>
                </div>
                <div v-if="editar" class="form-group h4 col-lg-6">
                  <a @click="editarUArticulo()" class="btn btn-info btn-block" :class="btnModificarClass">
                    {{ btnModificar }}
                  </a>
                </div>
                <div v-if="editar" class="form-group h4 col-lg-6">
                  <a @click="cancelarU()" class="btn btn-danger btn-block" :class="btnModificarClass"
                    data-dismiss="modal" aria-label="Close">
                    Cancelar
                  </a>
                </div>
              </div>
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

import axios from 'axios';
import router from '@/router';
import Swal from 'sweetalert2';
import { onMounted, reactive, ref } from 'vue';
// import AddDepartamento from './modal/AddDepartamento.vue';
import 'vue3-easy-data-table/dist/style.css';
// import AddArticulo from './modal/AddArticulo.vue';
// import { load } from '@progress/kendo-vue-intl';
import * as XLSX from 'xlsx';

const esperando = ref(false);

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

const formArticulo = reactive({
  data: {
    attributes: {
      articulo: "",
      descripcion: "",
      observacion: "",
      departamento_id: 0, //ID del departamento con el cual se relaciona, números de 2 dítios comenzando en 10, ej. 10
      medida_id: 0 //IP de la medida en que se contabiliza el artículo
    }
  }
})

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

const loadingD = ref(false);

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

const itemsSelected = ref([]);

const searchField = ref(["attributes.departamento"]);

const searchFieldArticulo = ref(["attributes.articulo"]);

const searchValue = ref("");

const searchValueArticulo = ref("");

const headers = [
  { text: "CÓDIGO", value: "id", width: 50, sortable: true },
  // { text: "CODIGO", value: "attributes.codigo", sortable: true },
  { text: "NOMBRE", value: "attributes.departamento" },
  { text: "DESCRIPCIÓN", value: "attributes.descripcion", sortable: true },
  { text: "OBSERVACIONES", value: "attributes.observacion", sortable: true },
  { text: "FECHA CREACIÓN", value: "attributes.timestamps.created_at" },
  { text: "FECHA ACTUALIZACIÓN", value: "attributes.timestamps.updated_at" },
  { text: "OPCIONES", value: "opciones" }
];

const headersArticulos = [
  { text: "CÓDIGO", value: "id", width: 50, sortable: true },
  // { text: "CODIGO", value: "attributes.codigo", sortable: true },
  { text: "NOMBRE", value: "attributes.articulo" },
  { text: "DESCRIPCIÓN", value: "attributes.descripcion", sortable: true },
  { text: "OBSERVACIONES", value: "attributes.observacion", sortable: true },
  { text: "FECHA CREACIÓN", value: "attributes.timestamps.created_at" },
  { text: "FECHA ACTUALIZACIÓN", value: "attributes.timestamps.updated_at" },
  { text: "OPCIONES", value: "opciones" }
];

const items = ref([]);

const itemsdepartamentos = ref([]);

const itemsarticulos = ref([]);

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

let listado = ref([]);

let listadoDepartamentos = ref([]);

let listadoMedida = ref([])

let listadoArticulos = ref([]);

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

const ipPublica = ref('192.168.121.154');

const formDepartamentos = reactive({
  data: {
    attributes: {
      departamento: "",
      descripcion: "",
      observacion: "",
    }
  }
})

const agrega = () => {
  editar.value = false
}

let btnModificarClass = ref('')

const btnModificar = ref('Modificar')

let GuardarDep = ref('Agregar departamento')

let GuardarArt = ref('Agregar artículo')

const disabledDepartamentodBtn = ref('')

const disabledDepartamento = ref('')

const disabledArticulo = ref('')

const errores = ref({ cod: "", descripcion: "" })

const agregarU = () => {

  if (formDepartamentos.data.attributes.descripcion != '' && formDepartamentos.data.attributes.departamento != '') {
    // console.log(formDepartamentos)
    esperando.value = true;
    disabledDepartamentodBtn.value = 'disabled';
    GuardarDep.value = 'Gardando...'
    // datos_archivados.value.push(formDepartamentos);
    axios.post(`https://` + ipPublica.value + `/fullstack/public/departamentos`, formDepartamentos)
      .then((response) => {
        esperando.value = false;
        if (response.data.data == null) {
          ErrorFull("Está intentando agregar un dato que ya existe en la base datos.", "top-start")
          disabledDepartamentodBtn.value = '';
          GuardarDep.value = 'Agregar'
        } else {
          formDepartamentos.data.attributes.observacion = ''
          formDepartamentos.data.attributes.descripcion = '';
          formDepartamentos.data.attributes.departamento = '';
          loadingD.value = true;
          listadoDepartamentos.value.push(response.data.data)
          almacenDatosDepartamentos(listadoDepartamentos.value);
          listadoDepartamentos.value = JSON.parse(localStorage.getItem('ListadoCacheDepartamentos'));
          obtenerDepartamentos();
          successFull("Departamento agregado satisfactoriamente.", "top-end")
          disabledDepartamentodBtn.value = '';
          GuardarDep.value = 'Agregar departamento'
          loadingD.value = false;
        }
      })
      .catch((error) => {
        if (error.response.status === 500) {
          errors.value = error.response.data.message;
        }
        esperando.value = false;
        ErrorFull("Error realizando la operación.", "top-start")
        // cerrarAlert();
        // Swal.fire({
        //   icon: "error",
        //   title: error.response.data.message
        // })
      })
    // console.log(datos_archivados.value);
  } else {
    errores.value.cod = "Campo requerido";
    errores.value.descripcion = "Campo requerido";
    // console.log(errores.value.cod)
  }
}

const agregarUArticulo = () => {

  if (formArticulo.data.attributes.descripcion != '' && formArticulo.data.attributes.articulo != '') {
    // console.log(formDepartamentos)
    esperando.value = true;
    disabledDepartamentodBtn.value = 'disabled';
    GuardarArt.value = 'Gardando...'
    // console.log(formArticulo.data)
    axios.post(`https://` + ipPublica.value + `/fullstack/public/articulos`, formArticulo)
      .then((response) => {
        esperando.value = false;
        if (response.data.data == null) {
          ErrorFull("Está intentando agregar un dato que ya existe en la base datos.", "top-start")
          disabledDepartamentodBtn.value = '';
          GuardarArt.value = 'Agregar artículo';
        } else {
          formDepartamentos.data.attributes.observacion = '';
          formDepartamentos.data.attributes.descripcion = '';
          formDepartamentos.data.attributes.departamento = '';
          loadingD.value = true;
          listadoArticulos.value.push(response.data.data)
          almacenDatosArticulos(listadoArticulos.value);
          listadoArticulos.value = JSON.parse(localStorage.getItem('ListadoCacheArticulos'));
          obtenerArticulos();
          successFull("Artículo agregado satisfactoriamente.", "top-end")
          disabledDepartamentodBtn.value = '';
          GuardarArt.value = 'Agregar artículo'
          loadingD.value = false;
        }
      })
      .catch((error) => {
        if (error.response.status === 400) {
          errors.value = error.response.data.message;
        }
        esperando.value = false;
        ErrorFull("Error realizando la operación.", "top-start")
      })
  } else {
    errores.value.cod = "Campo requerido";
    errores.value.descripcion = "Campo requerido";
    // console.log(errores.value.cod)
  }
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

const obtenerListadoLimpio = () => {
  let i = 0;
  // if (cargado.value = false) {
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
  //   cargado.value = true;
  // } else {
  //   newListado.value = []
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

  items.value = [];
  for (let index = 0; index < listado.value.length; index++) {
    items.value.push(listado.value[index])
  }

}

const obtenerDepartamentos = () => {
  let i = 0;
  // console.log(listadoDepartamentos)
  itemsdepartamentos.value = [];
  for (let index = 0; index < listadoDepartamentos.value.length; index++) {
    itemsdepartamentos.value.push(listadoDepartamentos.value[index])
  }

}

const obtenerArticulos = () => {
  let i = 0;

  itemsarticulos.value = [];
  for (let index = 0; index < listadoArticulos.value.length; index++) {
    itemsarticulos.value.push(listadoArticulos.value[index])
  }

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

const ErrorFull = (mensaje, posicion) => {

  const toast = Swal.mixin({
    toast: true,
    position: posicion,
    showConfirmButton: false,
    timer: 2800,
    //timerProgressBar: true,
  })
  toast.fire({
    icon: "error",
    title: mensaje
  })
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

const editarU = () => {
  esperando.value = true;
  btnModificar.value = 'Actualizando...'
  btnModificarClass.value = 'disabled'
  axios.put(`https://${ipPublica.value}/fullstack/public/departamentos/${id.value}`, formDepartamentos)
    .then((response) => {
      // console.log(response.data.data)
      esperando.value = false;
      cargado.value = false;

      editar.value = false;
      formDepartamentos.data.attributes.descripcion = ''
      formDepartamentos.data.attributes.observacion = '';
      formDepartamentos.data.attributes.departamento = '';
      loadingD.value = true;
      // listadoDepartamentos.value.push(response.data.data)
      // almacenDatosDepartamentos(listadoDepartamentos.value);
      // listadoDepartamentos.value = JSON.parse(localStorage.getItem('ListadoCacheDepartamentos'));
      // obtenerDepartamentos();
      EditarListadoDepartamentos(response.data.data)
      loadingD.value = false;
      successFull("Categoría modificada satisfactoriamente.", "top-end")
      btnModificar.value = 'Modificar'
      btnModificarClass.value = ''
      // Swal.fire({
      //   icon: "success",
      //   title: "Editado satisfactoriamente."
      // })
      // editar.value = false;
      // localStorage.setItem("editar", editar.value);
    })
    .catch((error) => {
      if (error.response.status === 500) {
        errors.value = error.response.data;
      }
      esperando.value = false;
      ErrorFull("Error realizando operación.", "top-start")
      // cerrarAlert();
      // Swal.fire({
      //   icon: "danger",
      //   title: "Error realizando operación."
      // })
    })
}

const editarUArticulo = () => {
  esperando.value = true;
  btnModificar.value = 'Actualizando...'
  btnModificarClass.value = 'disabled'
  axios.put(`https://${ipPublica.value}/fullstack/public/articulos/${id.value}`, formArticulo)
    .then((response) => {
      // console.log(response.data.data)
      esperando.value = false;
      cargado.value = false;

      editar.value = false;
      formArticulo.data.attributes.descripcion = ''
      formArticulo.data.attributes.observacion = '';
      formArticulo.data.attributes.articulo = '';
      loadingD.value = true;
      // listadoDepartamentos.value.push(response.data.data)
      // almacenDatosDepartamentos(listadoDepartamentos.value);
      // listadoDepartamentos.value = JSON.parse(localStorage.getItem('ListadoCacheDepartamentos'));
      // obtenerDepartamentos();
      EditarListadoArticulos(response.data.data)
      loadingD.value = false;
      successFull("Artículo modificado satisfactoriamente.", "top-end")
      btnModificar.value = 'Modificar'
      btnModificarClass.value = ''
      // Swal.fire({
      //   icon: "success",
      //   title: "Editado satisfactoriamente."
      // })
      // editar.value = false;
      // localStorage.setItem("editar", editar.value);
    })
    .catch((error) => {
      if (error.response.status === 500) {
        errors.value = error.response.data;
      }
      esperando.value = false;
      ErrorFull("Error realizando operación.", "top-start")
      // cerrarAlert();
      // Swal.fire({
      //   icon: "danger",
      //   title: "Error realizando operación."
      // })
    })
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

const borrarU = (id, correo) => {
  // console.log(correo)
  Swal.fire({
    title: "Confirmación",
    text: `Está a punto de eliminar el departamento: ${correo}`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, eliminar"
  }).then((result) => {
    if (result.isConfirmed) {
      esperando.value = true;
      // Eliminar //
      axios.delete(`https://${ipPublica.value}/fullstack/public/departamentos/${id}`)
        .then((response) => {
          esperando.value = false;
          // consultar();
          // // cancelarU();
          // cerrarAlert();
          loadingD.value = true;
          EliminarListadoDepartamentos(response.data.data)
          loadingD.value = false;
          successFull("Departamento eliminado satisfactoriamente.", "top-end")
          // Swal.fire({
          //   title: "Eliminado",
          //   text: "Producto eliminado satisfactoriamente.",
          //   icon: "success"
          // });
          cargado.value = false;
        })
    }
  }).catch((error) => {
    if (error.response.status === 500) {
      errors.value = error.response.data;
    }
    esperando.value = false;
    // cerrarAlert();
    ErrorFull("Error realizando operación.", "top-start")
    // Swal.fire({
    //   icon: "danger",
    //   title: "Error realizando operación."
    // })
  });
}

const borrarUArticulo = (id, correo) => {
  // console.log(correo)
  Swal.fire({
    title: "Confirmación",
    text: `Está a punto de eliminar el articulo: ${correo}`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, eliminar"
  }).then((result) => {
    if (result.isConfirmed) {
      esperando.value = true;
      // Eliminar //
      axios.delete(`https://${ipPublica.value}/fullstack/public/articulos/${id}`)
        .then((response) => {
          if (response.data.data == null) {
            ErrorFull("Error realizando operación.", "top-start");
          } else {
            esperando.value = false;
            loading.value = true;
            EliminarListadoArticulos(response.data.data)
            loading.value = false;
            successFull("Artículo eliminado satisfactoriamente.", "top-end")
          }

        })
    }
  }).catch((error) => {
    if (error.response.status === 500) {
      errors.value = error.response.data;
    }
    esperando.value = false;
    ErrorFull("Error realizando operación.", "top-start")
  });
}
// Fin CRUD

const clickEditar = async (idSelect) => {
  editar.value = true;
  // console.log(idSelect)
  // localStorage.setItem("editar", editar.value);
  id.value = idSelect;

  for (let index = 0; index < listadoDepartamentos.value.length; index++) {
    const element = listadoDepartamentos.value[index].id;
    if (element == idSelect) {
      formDepartamentos.data.attributes.descripcion = listadoDepartamentos.value[index].attributes.descripcion;
      formDepartamentos.data.attributes.departamento = listadoDepartamentos.value[index].attributes.departamento;
      formDepartamentos.data.attributes.observacion = listadoDepartamentos.value[index].attributes.observacion;
      break;
    }
  }
}

const clickEditarArticulo = async (idSelect) => {
  editar.value = true;
  // console.log(idSelect)
  // localStorage.setItem("editar", editar.value);
  id.value = idSelect;

  for (let index = 0; index < listadoArticulos.value.length; index++) {
    const element = listadoArticulos.value[index].id;
    if (element == idSelect) {
      formArticulo.data.attributes.descripcion = listadoArticulos.value[index].attributes.descripcion;
      formArticulo.data.attributes.articulo = listadoArticulos.value[index].attributes.articulo;
      formArticulo.data.attributes.observacion = listadoArticulos.value[index].attributes.observacion;
      formArticulo.data.attributes.departamento_id = listadoArticulos.value[index].relationships.departamento.data.id;
      formArticulo.data.attributes.medida_id = listadoArticulos.value[index].relationships.medida.data.id;
      break;
    }
  }
}

const cancelarU = () => {
  editar.value = false;
  formDepartamentos.data.attributes.descripcion = '';
  formDepartamentos.data.attributes.departamento = '';
  formDepartamentos.data.attributes.observacion = '';
}

const actualizar_datos = () => {
  // localStorage.removeItem('ListadoCache');
  listado.value = JSON.parse(localStorage.getItem('ListadoCache'));
  obtenerListadoLimpio();
  // listadoSucursales.value = JSON.parse(localStorage.getItem('ListadoCacheSucursal'));
  // listadoSucursales = obtenerListadoLimpioSucursales();
}

const almacenDatosDepartamentos = (Lista) => {
  localStorage.removeItem('ListadoCacheDepartamentos');
  const parsed = JSON.stringify(Lista);
  localStorage.setItem('ListadoCacheDepartamentos', parsed);
}

const almacenDatosArticulos = (Lista) => {
  localStorage.removeItem('ListadoCacheArticulos');
  const parsed = JSON.stringify(Lista);
  localStorage.setItem('ListadoCacheArticulos', parsed);
}

const almacenDatosMedida = (Lista) => {
  localStorage.removeItem('ListadoCacheUnidades');
  const parsed = JSON.stringify(Lista);
  localStorage.setItem('ListadoCacheUnidades', parsed);
}

// Excel

const nuevoArreglo = ref([]);
const elementos = ref([]);
function ExportExcel() {

  for (let index = 0; index < itemsdepartamentos.value.length; index++) {
    elementos.value.type = itemsdepartamentos.value[index].type;
    elementos.value.departamento = itemsdepartamentos.value[index].attributes.departamento;
    elementos.value.descripcion = itemsdepartamentos.value[index].attributes.descripcion;
    elementos.value.observacion = itemsdepartamentos.value[index].attributes.observacion;
    elementos.value.created_at = itemsdepartamentos.value[index].attributes.timestamps.created_at;
    elementos.value.updated_at = itemsdepartamentos.value[index].attributes.timestamps.updated_at;
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
}

function ExportExcelArticulos() {

  for (let index = 0; index < itemsarticulos.value.length; index++) {
    elementos.value.type = itemsarticulos.value[index].type;
    elementos.value.articulo = itemsarticulos.value[index].attributes.articulo;
    elementos.value.descripcion = itemsarticulos.value[index].attributes.descripcion;
    elementos.value.observacion = itemsarticulos.value[index].attributes.observacion;
    elementos.value.created_at = itemsarticulos.value[index].attributes.timestamps.created_at;
    elementos.value.updated_at = itemsarticulos.value[index].attributes.timestamps.updated_at;
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
}
// Fin

onMounted(async () => {
  if (localStorage.getItem('userName')) {
    ipPublica.value = localStorage.getItem('Host_back');
    if (localStorage.getItem('Carg_datD') == '0') {
      // DEPARTAMENTOS
      loadingD.value = true;
      disabledDepartamento.value = 'disabled'
      await axios.get(`https://` + ipPublica.value + `/fullstack/public/departamentos`)
        .then((response) => {
          listadoDepartamentos.value = response.data.data;
          almacenDatosDepartamentos(listadoDepartamentos.value);
          listadoDepartamentos.value = JSON.parse(localStorage.getItem('ListadoCacheDepartamentos'));
          obtenerDepartamentos();
          disabledDepartamento.value = '';
          loadingD.value = false;
          localStorage.setItem("Carg_datD", "1")
          // Kcategorias.value = Kcategorias.value + 1;

        }).catch((error) => {
          // console.log(error)
          if (error.response.status === 500) {
            errors.value = error.response.status;
          }
          loadingD.value = false;
        })
    } else {
      loadingD.value = true;
      disabledDepartamento.value = 'disabled';
      listadoDepartamentos.value = await JSON.parse(localStorage.getItem('ListadoCacheDepartamentos'));
      obtenerDepartamentos();
      loadingD.value = false;
      disabledDepartamento.value = '';
    }
    if (localStorage.getItem('Carg_datA') == '0') {
      loading.value = true;
      // UNIDADES DE MEDIDA
      disabledArticulo.value = 'disabled'
      await axios.get(`https://` + ipPublica.value + `/fullstack/public/medidas`)
        .then((response) => {
          listadoMedida.value = response.data.data;
          almacenDatosMedida(listadoMedida.value);
          // Kcategorias.value = Kcategorias.value + 1;

        }).catch((error) => {
          if (error.response.status === 500) {
            errors.value = error.response.status;
          }
        })

      // ARTICULOS
      await axios.get(`https://` + ipPublica.value + `/fullstack/public/articulos`)
        .then((response) => {
          if (response.data.data == null) {
            disabledArticulo.value = ''
            ErrorFull("Error realizando la operación.", "top-start")
          } else {
            listadoArticulos.value = response.data.data;
            almacenDatosArticulos(listadoArticulos.value);
            disabledArticulo.value = ''
            // Kcategorias.value = Kcategorias.value + 1;
            listadoArticulos.value = JSON.parse(localStorage.getItem('ListadoCacheArticulos'));
            obtenerArticulos();
            listadoMedida.value = JSON.parse(localStorage.getItem('ListadoCacheUnidades'));
            localStorage.setItem('Carg_datA', '1')
            loading.value = false
          }

        }).catch((error) => {
          if (error.response.status === 500) {
            errors.value = error.response.status;
          }
          ErrorFull("Error realizando la operación.", "top-start")
        })

    } else {
      loading.value = true;
      disabledArticulo.value = 'disabled';
      listadoArticulos.value = JSON.parse(localStorage.getItem('ListadoCacheArticulos'));
      obtenerArticulos();
      loading.value = false;
      disabledArticulo.value = '';
      if (localStorage.getItem("Carg_datMe") == "1") {
        listadoMedida.value = JSON.parse(localStorage.getItem('ListadoCacheUnidades'));
      } else {
        await axios.get(`https://` + ipPublica.value + `/fullstack/public/medidas`)
          .then((response) => {
            listadoMedida.value = response.data.data;
            almacenDatosMedida(listadoMedida.value);
            // Kcategorias.value = Kcategorias.value + 1;

          }).catch((error) => {
            if (error.response.status === 500) {
              errors.value = error.response.status;
            }
          })
      }

      // listadoMedida.value = JSON.parse(localStorage.getItem('ListadoCacheUnidades'));
    }

  } else {
    router.push('/login');
  }
})
</script>
<style lang="scss" scoped></style>
