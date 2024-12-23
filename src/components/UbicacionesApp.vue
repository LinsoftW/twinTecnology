<template>
  <div>
    <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">SUCURSALES Y UBICACIONES</h1>
      </div>
      <div class="row">
        <!--Listado de magnitudes -->
        <div class="col-xl-12 col-lg-12">
          <div class="card shadow mb-4 ">
            <!-- Card Header - Dropdown -->
            <a href="#collapseCardExample" class="d-block card-header py-3" data-toggle="collapse" role="button"
              aria-expanded="true" aria-controls="collapseCardExample">
              <h6 class="m-0 font-weight-bold text-info"><i class="fas fa-edit"></i> SUCURSALES</h6>
            </a>
            <div class="collapse show" id="collapseCardExample">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6 col-xl-6 col-lg-12">
                    <div class="justify-content-between">
                      <a data-toggle="modal" @click="agrega()" data-target="#agregaSucursales"
                        class="btn btn-info btn-sm btn-icon-split" :class="disabledMagnitud">
                        <span class="icon text-white-50">
                          <i class="fas fa-plus"></i>
                        </span>
                        <span class="text">Nuevo</span>
                      </a>
                      <a @click="abrirModalAddProd()" class="btn btn-secondary btn-sm btn-icon-split m-2"
                        :class="disabledMagnitud">
                        <span class="icon text-white-50">
                          <i class="fas fa-print"></i>
                        </span>
                        <span class="text">Imprimir</span>
                      </a>
                      <a @click="ExportExcel()" class="btn btn-primary btn-sm btn-icon-split" :class="disabledMagnitud">
                        <span class="icon text-white-50">
                          <i class="fas fa-download"></i>
                        </span>
                        <span class="text">Excel</span>
                      </a>

                    </div>
                  </div>
                  <div class="col-md-6 col-xl-6 col-lg-12 ">
                    <span class="text-info">Buscar: </span>
                    <input class="form-control form-control-user" type="text" v-model="searchValue"
                      placeholder="Tecle el nombre a buscar..." />
                  </div>
                </div>
                <br>
                <!--Tabla -->
                <EasyDataTable table-class-name="customize-table" :headers="headersSucursales" :items="itemsSucursales"
                  buttons-pagination border-cell v-model:items-selected="itemsSelected" header-text-direction="center"
                  body-text-direction="center" :search-field="searchField" :search-value="searchValue"
                  @click-row="showRow" :rows-per-page="5" show-index :loading="loading">



                  <template #empty-message>



                    <a>No hay datos que mostrar</a>
                  </template>
                  <template #item-opciones="item">
                    <div class="operation-wrapper">



                      <!-- <button class="btn btn-primary btn-sm btn-circle" data-toggle="modal"



                                      data-target="#EditarProducto" @click="seleccionaProducto(item)" v-b-tooltip.hover



                                      title="Modificar"><span class="fas fa-edit"></span></button> -->



                      <button class="btn btn-success btn-sm btn-circle" data-toggle="modal"
                        @click="clickEditar(item.id)" data-target="#editaSucursales" v-b-tooltip.hover
                        title="Editar"><span class="fas fa-edit"></span></button>
                      <!-- <button class="btn btn-info" data-toggle="modal" @click="clickEditar(item.id)" data-target="#agregaEditaMagnitudes"> <span
                  class="fa fa-plus"></span> Nuevo</button> -->



                      <!-- <button class="btn btn-success btn-sm btn-circle ml-1" @click="Aumentar(item)" v-b-tooltip.hover



                            title="Aumentar"><span class="fas fa-plus"></span></button>



                          <button class="btn btn-warning btn-sm btn-circle ml-1" @click="Disminuir(item)" v-b-tooltip.hover



                            title="Restar"><span class="fas fa-minus"></span></button> -->
                      <button class="btn btn-danger btn-sm btn-circle ml-1"
                        @click="borrarU(item.id, item.attributes.sucursal)" v-b-tooltip.hover title="Eliminar"><span
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
                  <template #loading>
                    <img src="/cargando4.gif"
                      style="width: 100px; height: 80px;" />
                  </template>
                </EasyDataTable>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="row">
        <div class="col-xl-12 col-lg-12">
          <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <a href="#collapseCardExample1" class="d-block card-header py-3" data-toggle="collapse" role="button"
              aria-expanded="true" aria-controls="collapseCardExample">
              <h6 class="m-0 font-weight-bold text-info"><i class="fas fa-edit"></i> UBICACIONES</h6>
            </a>
            <!-- Card Body -->
            <!-- <div class="card-body"> -->
            <div class="collapse show" id="collapseCardExample1">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6 col-xl-6 col-lg-12">
                    <div class="justify-content-between">
                      <!-- <router-link class="button" to="/gest_inventario"> -->
                      <a data-toggle="modal" @click="agrega()" data-target="#agregaUbicaciones"
                        class="btn btn-info btn-sm btn-icon-split" :class="disabledMedida">
                        <span class="icon text-white-50">
                          <i class="fas fa-plus"></i>
                        </span>
                        <span class="text">Nuevo</span>
                      </a>
                      <a @click="abrirModalAddProd()" class="btn btn-secondary btn-sm btn-icon-split m-2"
                        :class="disabledMedida">
                        <span class="icon text-white-50">
                          <i class="fas fa-print"></i>
                        </span>
                        <span class="text">Imprimir</span>
                      </a>
                      <a @click="ExportExcelMedidas()" class="btn btn-primary btn-sm btn-icon-split"
                        :class="disabledMedida">
                        <span class="icon text-white-50">
                          <i class="fas fa-download"></i>
                        </span>
                        <span class="text">Excel</span>
                      </a>
                      <!-- <a data-toggle="modal" @click="agrega()" data-target="#agregaMedidas"
                        class="d-sm-inline-block btn btn-sm btn-info shadow-sm m-2" v-b-tooltip.hover
                        title="Agregar unidad de medida"><i class="fas fa-plus fa-sm "></i> Nuevo </a>
                      <a @click="abrirModalAddProd()" href="#"
                        class="d-sm-inline-block btn btn-sm btn-secondary shadow-sm" v-b-tooltip.hover
                        title="Agregar producto"><i class="fas fa-print fa-sm "></i> Imprimir </a>
                      <a @click="ExportExcel()" href="#" class="d-sm-inline-block btn btn-sm btn-primary shadow-sm m-2"
                        v-b-tooltip.hover title="Exportar a Excel"><i class="fas fa-download fa-sm "></i> Excel</a> -->
                    </div>
                  </div>
                  <div class="col-md-6 col-xl-6 col-lg-12 ">
                    <span class="text-info">Buscar: </span>
                    <!-- <input class="form-control" type="text" v-model="searchValue" placeholder="" /> -->
                    <input class="form-control form-control-user" type="text" v-model="searchValueMedida"
                      placeholder="Teclee el nombre de la ubicación a buscar..." />
                  </div>
                </div>
                <br>

                <!--Tabla -->
                <EasyDataTable table-class-name="customize-table" :headers="headersUbicaciones"
                  :items="itemsUbicaciones" buttons-pagination border-cell v-model:items-selected="itemsSelected"
                  header-text-direction="center" body-text-direction="center" :search-field="searchFieldMedida"
                  :search-value="searchValueMedida" @click-row="showRow" :rows-per-page="5" :loading="loadingU"
                  show-index>
                  <template #empty-message>
                    <a>No hay datos que mostrar</a>
                  </template>
                  <template #item-opciones="item">
                    <div class="operation-wrapper">
                      <!-- <button class="btn btn-primary btn-sm btn-circle" data-toggle="modal"



                                      data-target="#EditarProducto" @click="seleccionaProducto(item)" v-b-tooltip.hover



                                      title="Modificar"><span class="fas fa-edit"></span></button> -->
                      <button class="btn btn-success btn-sm btn-circle" data-toggle="modal"
                        data-target="#editaUbicaciones" @click="clickEditarMedidas(item.id)" v-b-tooltip.hover
                        title="Editar"><span class="fas fa-edit"></span></button>
                      <!-- <button class="btn btn-success btn-sm btn-circle ml-1" @click="Aumentar(item)" v-b-tooltip.hover



                            title="Aumentar"><span class="fas fa-plus"></span></button>



                          <button class="btn btn-warning btn-sm btn-circle ml-1" @click="Disminuir(item)" v-b-tooltip.hover



                            title="Restar"><span class="fas fa-minus"></span></button> -->

                      <button class="btn btn-danger btn-sm btn-circle ml-1"
                        @click="borrarUMedida(item.id, item.attributes.ubicacion)" v-b-tooltip.hover
                        title="Eliminar"><span class="fas fas fa-trash-alt"></span></button>



                      <!-- <button class="btn btn-info btn-sm btn-circle ml-1" data-toggle="modal" data-target="#BarCode"



                            @click="generarCodeBar(item.attributes.codigo)" v-b-tooltip.hover title="Código de barra"><span



                              class="fas fas fa-barcode"></span></button> -->



                      <!-- <a class="dropdown-item btn btn-info btn-sm btn-circle ml-1" href="#" @click="generarCodeBar(item.attributes.codigo)" data-toggle="modal" data-target="#BarCode"



                            >



                            <span class="fas fa-barcode"></span>



                          </a> -->
                    </div>
                  </template>
                  <template #loading>
                    <img src="/cargando4.gif"
                      style="width: 100px; height: 80px;" />
                  </template>
                </EasyDataTable>
              </div>
            </div>

            <!-- </div> -->
          </div>
        </div>
      </div>
      <!-- Datos del producto a agregar -->

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

  <!-- Logout Modal-->
  <div :class="'modal fade ' + showModal1" id="agregaSucursales" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" :aria-hidden="activaHide1" :arial-modal="activaModal1" :style="displayModal1">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-info" id="exampleModalLabel" v-if="editar == false">NUEVA SUCURSAL</h5>
          <h5 class="modal-title text-info text-center" id="exampleModalLabel" v-if="editar == true"><span
              class="fa fa-edit"></span>
            MODIFICAR LOS DATOS DE LA SUCURSAL <br>(<label style="color: red;">{{
              formSucursal.data.attributes.sucursal
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
                <div class="text-center">
                  <h1 class="h6 text-gray-900 mb-4"><i>CAMPOS OBLIGATORIOS</i> (<label style="color: red;">*</label>)
                  </h1>
                </div>
                <form class="user">

                  <div class="row">
                    <div class="form-group col-lg-12">
                      <label class="text-info">Nombre de la sucursal: <label style="color: red;">*</label></label>
                      <input type="text" class="form-control" id="sucursal" aria-describedby="emailHelp"
                        v-model="formSucursal.data.attributes.sucursal" placeholder="Nombre de la sucursal" required>
                      <span v-if="magnitudVacio" style="color: red;">Campo en blanco</span>
                    </div>
                    <div class="form-group col-lg-12">
                      <label class="text-info">Abreviatura: <label style="color: red;">*</label></label>
                      <input type="text" class="form-control" id="abreviatura" aria-describedby="emailHelp"
                        v-model="formSucursal.data.attributes.abreviatura" placeholder="Abreviatura de la sucursal">
                      <span v-if="descripVacio" style="color: red;">Campo en blanco</span>
                    </div>
                    <div class="form-group col-lg-12">
                      <label class="text-info">Descripción: <label style="color: red;">*</label></label>
                      <input type="text" class="form-control" id="descripcion" aria-describedby="emailHelp"
                        v-model="formSucursal.data.attributes.descripcion" placeholder="Descripción de la sucursal">
                      <span v-if="descripVacio" style="color: red;">Campo en blanco</span>
                    </div>
                    <div class="form-group col-lg-12">
                      <label class="text-info">Observaciones:</label>
                      <textarea class="form-control" id="observaciones"
                        v-model="formSucursal.data.attributes.observacion"
                        placeholder="Observaciones de la sucursal"></textarea>

                    </div>
                  </div>
                  <!-- <div class="row">

                      </div> -->


                </form>
              </div>
              <div class="row">

                <div v-if="editar == false" class="form-group h4 col-lg-3">

                </div>
                <div v-if="editar == false" class="form-group h4 col-lg-6">
                  <a @click="agregarU" class="btn btn-info btn-block" :class="disabledMagnitudBtn">
                    {{ GuardarMag }}
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

  <div :class="'modal fade ' + showModal1" id="editaSucursales" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" :aria-hidden="activaHide1" :arial-modal="activaModal1" :style="displayModal1">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-info" id="exampleModalLabel" v-if="editar == false">NUEVA SUCURSAL</h5>
          <h5 class="modal-title text-info text-center" id="exampleModalLabel" v-if="editar == true"><span
              class="fa fa-edit"></span>
            MODIFICAR LOS DATOS DE LA SUCURSAL <br>(<label style="color: red;">{{
              formSucursal.data.attributes.sucursal
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
                <div class="text-center">
                  <h1 class="h6 text-gray-900 mb-4"><i>CAMPOS OBLIGATORIOS</i> (<label style="color: red;">*</label>)
                  </h1>
                </div>
                <form class="user">

                  <div class="row">
                    <div class="form-group col-lg-12">
                      <label class="text-info">Nombre de la sucursal: <label style="color: red;">*</label></label>
                      <input type="text" class="form-control" id="sucursal" aria-describedby="emailHelp"
                        v-model="formSucursal.data.attributes.sucursal" placeholder="Nombre de la sucursal" required>
                      <span v-if="magnitudVacio" style="color: red;">Campo en blanco</span>
                    </div>
                    <div class="form-group col-lg-12">
                      <label class="text-info">Abreviatura: <label style="color: red;">*</label></label>
                      <input type="text" class="form-control" id="abreviatura" aria-describedby="emailHelp"
                        v-model="formSucursal.data.attributes.abreviatura" placeholder="Abreviatura de la sucursal">
                      <span v-if="descripVacio" style="color: red;">Campo en blanco</span>
                    </div>
                    <div class="form-group col-lg-12">
                      <label class="text-info">Descripción: <label style="color: red;">*</label></label>
                      <input type="text" class="form-control" id="descripcion" aria-describedby="emailHelp"
                        v-model="formSucursal.data.attributes.descripcion" placeholder="Descripción de la sucursal">
                      <span v-if="descripVacio" style="color: red;">Campo en blanco</span>
                    </div>
                    <div class="form-group col-lg-12">
                      <label class="text-info">Observaciones:</label>
                      <textarea class="form-control" id="observaciones"
                        v-model="formSucursal.data.attributes.observacion"
                        placeholder="Observaciones de la sucursal"></textarea>

                    </div>
                  </div>
                  <!-- <div class="row">

                      </div> -->


                </form>
              </div>
              <div class="row">

                <div v-if="editar == false" class="form-group h4 col-lg-3">

                </div>
                <div v-if="editar == false" class="form-group h4 col-lg-6">
                  <a @click="agregarU" class="btn btn-info btn-block" :class="disabledMagnitudBtn">
                    {{ GuardarMag }}
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


  <!-- Logout Modal-->
  <div :class="'modal fade ' + showModal1" id="agregaUbicaciones" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" :aria-hidden="activaHide1" :arial-modal="activaModal1" :style="displayModal1">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-info" id="exampleModalLabel" v-if="editar == false">NUEVA UBICACIÓN</h5>
          <h5 class="modal-title text-info text-center" id="exampleModalLabel" v-if="editar == true"><span
              class="fa fa-edit"></span>
            MODIFICAR LOS DATOS DE LA UBICACIÓN <br>(<label style="color: red;">{{
              formUbicaciones.data.attributes.ubicacion
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
          <div class="text-center">
            <h1 class="h6 text-gray-900 mb-4"><i>CAMPOS OBLIGATORIOS</i> (<label style="color: red;">*</label>)
            </h1>
          </div>
          <form class="user">

            <div class="row">
              <div class="form-group col-lg-12">
                <label class="text-info">Nombre: <label style="color: red;">*</label></label>
                <input type="text" class="form-control" id="ubicacion" aria-describedby="emailHelp"
                  v-model="formUbicaciones.data.attributes.ubicacion" placeholder="Nombre de la ubicación" required>
              </div>
              <div class="form-group col-lg-12">
                <label class="text-info">Descripción: <label style="color: red;">*</label></label>
                <input type="text" class="form-control" id="descripcionUbic" aria-describedby="emailHelp"
                  v-model="formUbicaciones.data.attributes.descripcion" placeholder="Descripción de la ubicación">
              </div>

            </div>
            <div class="form-group ">
              <label class="text-info">Observaciones:</label>
              <textarea class="form-control" id="observacionesUbi" v-model="formUbicaciones.data.attributes.observacion"
                placeholder="Observaciones de la ubicación"></textarea>

            </div>
            <div class="form-group col-lg-12">
              <label class="text-info">Seleccione una Sucursal: <label style="color: red;">*</label></label>
              <select name="IDmagnitud" id="IDmagnitud" style="width: 100%; text-align:center"
                placeholder="Unidad de medida" class="text-gray-900 form-control"
                v-model="formUbicaciones.data.attributes.sucursal_id">
                <option v-for="dato in listadoSucursales" :key="dato.id" :value="dato.id">{{
                  dato.attributes.sucursal }}</option>
              </select>
            </div>

            <div class="row">
              <div v-if="editar == false" class="form-group h4 col-lg-3">

              </div>
              <div v-if="editar == false" class="form-group h4 col-lg-6">
                <a @click="agregarUMedida" class="btn btn-info btn-block" :class="disabledMedidaBtn">
                  {{ GuardarMedida }}
                </a>
              </div>
              <div v-if="editar" class="form-group h4 col-lg-6">
                <a @click="editarUMedida()" class="btn btn-info btn-block" :class="deactiva">
                  {{ btnModificarM }}
                </a>
              </div>
              <div v-if="editar" class="form-group h4 col-lg-6">
                <a class="btn btn-danger btn-block" data-dismiss="modal" aria-label="close" :class="deactiva">
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

  <div :class="'modal fade ' + showModal1" id="editaUbicaciones" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" :aria-hidden="activaHide1" :arial-modal="activaModal1" :style="displayModal1">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-info" id="exampleModalLabel" v-if="editar == false">NUEVA UBICACIÓN</h5>
          <h5 class="modal-title text-info text-center" id="exampleModalLabel" v-if="editar == true"><span
              class="fa fa-edit"></span>
            MODIFICAR LOS DATOS DE LA UBICACIÓN <br>(<label style="color: red;">{{
              formUbicaciones.data.attributes.ubicacion
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
          <div class="text-center">
            <h1 class="h6 text-gray-900 mb-4"><i>CAMPOS OBLIGATORIOS</i> (<label style="color: red;">*</label>)
            </h1>
          </div>
          <form class="user">

            <div class="row">
              <div class="form-group col-lg-12">
                <label class="text-info">Nombre: <label style="color: red;">*</label></label>
                <input type="text" class="form-control" id="ubicacion" aria-describedby="emailHelp"
                  v-model="formUbicaciones.data.attributes.ubicacion" placeholder="Nombre de la ubicación" required>
              </div>
              <div class="form-group col-lg-12">
                <label class="text-info">Descripción: <label style="color: red;">*</label></label>
                <input type="text" class="form-control" id="descripcionUbic" aria-describedby="emailHelp"
                  v-model="formUbicaciones.data.attributes.descripcion" placeholder="Descripción de la ubicación">
              </div>

            </div>
            <div class="form-group ">
              <label class="text-info">Observaciones:</label>
              <textarea class="form-control" id="observacionesUbi" v-model="formUbicaciones.data.attributes.observacion"
                placeholder="Observaciones de la ubicación"></textarea>

            </div>
            <div class="form-group col-lg-12">
              <label class="text-info">Seleccione una Sucursal: <label style="color: red;">*</label></label>
              <select name="IDmagnitud" id="IDmagnitud" style="width: 100%; text-align:center"
                placeholder="Unidad de medida" class="text-gray-900 form-control"
                v-model="formUbicaciones.data.attributes.sucursal_id">
                <option v-for="dato in listadoSucursales" :key="dato.id" :value="dato.id">{{
                  dato.attributes.sucursal }}</option>
              </select>
            </div>

            <div class="row">
              <div v-if="editar == false" class="form-group h4 col-lg-3">

              </div>
              <div v-if="editar == false" class="form-group h4 col-lg-6">
                <a @click="agregarUMedida" class="btn btn-info btn-block" :class="disabledMedidaBtn">
                  {{ GuardarMedida }}
                </a>
              </div>
              <div v-if="editar" class="form-group h4 col-lg-6">
                <a @click="editarUMedida()" class="btn btn-info btn-block" :class="deactiva">
                  {{ btnModificarM }}
                </a>
              </div>
              <div v-if="editar" class="form-group h4 col-lg-6">
                <a class="btn btn-danger btn-block" data-dismiss="modal" aria-label="close" :class="deactiva">
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
// import { load } from '@progress/kendo-vue-intl';
import * as XLSX from 'xlsx';

const esperando = ref(false);

const btnModificar = ref('Modificar')

const btnModificarM = ref('Modificar')

const deactiva = ref('')

const loading = ref(false);

const loadingU = ref(false);

const showModal1 = ref('')

const activaHide1 = ref('')

const activaModal1 = ref('')

const displayModal1 = ref('')

const disabledMagnitud = ref('')

const disabledMagnitudBtn = ref('')

const disabledMedida = ref('')

const disabledMedidaBtn = ref('')

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

// Excel

const nuevoArreglo = ref([]);
const elementos = ref([]);
function ExportExcel() {

  for (let index = 0; index < itemsSucursales.value.length; index++) {
    elementos.value.type = itemsSucursales.value[index].type;
    elementos.value.sucursal = itemsSucursales.value[index].attributes.sucursal;
    elementos.value.abreviatura = itemsSucursales.value[index].attributes.abreviatura;
    elementos.value.descripcion = itemsSucursales.value[index].attributes.descripcion;
    elementos.value.observacion = itemsSucursales.value[index].attributes.observacion;
    elementos.value.created_at = itemsSucursales.value[index].attributes.timestamps.created_at;
    elementos.value.updated_at = itemsSucursales.value[index].attributes.timestamps.updated_at;
    nuevoArreglo.value.push(elementos.value)
    elementos.value = []
  }
  // console.log(nuevoArreglo)
  const worksheet = XLSX.utils.json_to_sheet(nuevoArreglo.value);
  const workbook = XLSX.utils.book_new();
  // // Abriendo el excel
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  // // Generar el archivo
  const fileName = 'Sucursales.xlsx';
  // // Guardar el archivo execl
  XLSX.writeFile(workbook, fileName);
}
// Fin

function ExportExcelMedidas() {
  elementos.value = []
  nuevoArreglo.value = []
  for (let index = 0; index < itemsUbicaciones.value.length; index++) {
    elementos.value.type = itemsUbicaciones.value[index].type;
    elementos.value.medida = itemsUbicaciones.value[index].attributes.medida;
    elementos.value.descripcion = itemsUbicaciones.value[index].attributes.descripcion;
    elementos.value.observacion = itemsUbicaciones.value[index].attributes.observacion;
    elementos.value.created_at = itemsUbicaciones.value[index].attributes.timestamps.created_at;
    elementos.value.updated_at = itemsUbicaciones.value[index].attributes.timestamps.updated_at;
    nuevoArreglo.value.push(elementos.value)
    elementos.value = []
  }
  // console.log(nuevoArreglo)
  const worksheet = XLSX.utils.json_to_sheet(nuevoArreglo.value);
  const workbook = XLSX.utils.book_new();
  // // Abriendo el excel
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  // // Generar el archivo
  const fileName = 'Medidas.xlsx';
  // // Guardar el archivo execl
  XLSX.writeFile(workbook, fileName);
}

const IdMagnitud = ref(0);

const ObtenIdMagnitud = (ID) => {
  IdMagnitud.value = ID;
  // console.log(formUbicaciones.data.attributes.magnitud_id)
}

const cerrarAlert = () => {
  Swal.close();
}

const EliminarTodos = () => {
  Swal.fire({
    title: "Confirmación",
    text: `Está a punto de eliminar todos los registros de la tabla.`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, eliminar"
  }).then((result) => {
    if (result.isConfirmed) {
      esperando.value = true;
      // Eliminar //
      axios.delete(`http://${ipPublica.value}/fullstack/public/magnitudes`)
        .then(() => {
          esperando.value = false;
          loading.value = true;
          listadoMagnitudes.value = []
          successFull("Se han eliminado todos los datos satisfactoriamente.", "top-end")
          // cargado.value = false;
          loading.value = false;
          // esperando.value = false;
        })
        .catch((error) => {
          if (error.response.status === 400) {
            errors.value = error.response.data;
          }
          esperando.value = false;
          ErrorFull("Error realizando la operación.", "top-start")
        })
    }
  })
}

const EliminarTodosMedidas = () => {
  Swal.fire({
    title: "Confirmación",
    text: `Está a punto de eliminar todos los registros de la tabla.`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, eliminar"
  }).then((result) => {
    if (result.isConfirmed) {
      esperando.value = true;
      // Eliminar //
      axios.delete(`http://${ipPublica.value}/fullstack/public/medidas`)
        .then(() => {
          esperando.value = false;
          loadingU.value = true;
          listadoUbicaciones.value = []
          successFull("Se han eliminado todos los datos satisfactoriamente.", "top-end")
          // cargado.value = false;
          loadingU.value = false;
          // esperando.value = false;
        })
        .catch((error) => {
          if (error.response.status === 400) {
            errors.value = error.response.data;
          }
          esperando.value = false;
          ErrorFull("Error realizando la operación.", "top-start")
        })
    }
  })
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

const searchField = ref("attributes.magnitud");

const searchValue = ref("");

const searchFieldMedida = ref("attributes.medida");

const searchValueMedida = ref("");

let listadoMagnitudes = ref([]);

let listadoUbicaciones = ref([]);

let listadoSucursales = ref([]);

let datosPaginados = ref([]);

let datosSinPaginar = ref([]);

// let buscando = ref('');

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

const formSucursal = reactive({
  data: {
    attributes: {
      sucursal: "",
      abreviatura: "",
      descripcion: "",
      observacion: ""
    }
  }
})

const formUbicaciones = reactive({
  data: {
    attributes: {
      ubicacion: "",
      descripcion: "",
      observacion: "",
      sucursal_id: 0
    }
  }
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

const ErrorFull = (mensaje, posicion) => {

  const toast = Swal.mixin({
    toast: true,
    position: posicion,
    showConfirmButton: false,
    timer: 2500,
    //timerProgressBar: true,
  })
  toast.fire({
    icon: "error",
    title: mensaje
  })
}

const emit = defineEmits(['cerrar', 'actualiza']);

// const alerta = useAlertsStore;

function closeVentana() {
  emit('cerrar')
  // alerta.ActualizarDepartamentos();
}

let magnitudVacio = ref(false)

let descripVacio = ref(false)

const agrega = () => {
  editar.value = false
}

let GuardarMag = ref('Agregar sucursal')

const agregarU = async () => {
  // console.log(formSucursal)
  esperando.value = true;
  if (formSucursal.data.attributes.sucursal != '' && formSucursal.data.attributes.abreviatura != '' && formSucursal.data.attributes.descripcion != '') {
    // console.log("OKKKK")
    disabledMagnitudBtn.value = 'disabled'
    GuardarMag.value = 'Guardando...'
    await axios.post(`https://` + ipPublica.value + `/fullstack/public/sucursales`, formSucursal)
      .then((response) => {
        cargado.value = false;
        esperando.value = false;
        if (response.data.data == null) {
          ErrorFull("Está intentando agregar un dato que ya existe en la base datos.", "top-start")
          disabledMagnitudBtn.value = '';
          GuardarMag.value = 'Agregar sucursal'
        } else {
          formSucursal.data.attributes.observacion = ''
          formSucursal.data.attributes.descripcion = '';
          formSucursal.data.attributes.sucursal = '';
          // emit('actualiza', 7);
          loading.value = true;
          listadoSucursales.value.push(response.data.data)
          almacenDatosSucursales(listadoSucursales.value);
          listadoMagnitudes.value = JSON.parse(localStorage.getItem('ListadoCacheSucursal'));
          obtenerSucursales();
          disabledMagnitudBtn.value = ''
          GuardarMag.value = 'Agregar sucursal'
          loading.value = false;
          successFull("Sucursal agregada satisfactoriamente.", "top-end")
        }

      })
      .catch((error) => {
        if (error.response.status === 400) {
          errors.value = error.response.data.message;
        }
        esperando.value = false;
        ErrorFull(error.response.data.message, "top-start")
      })
  } else {
    if (formSucursal.data.attributes.sucursal == "") {
      magnitudVacio.value = true;
    }

    if (formSucursal.data.attributes.abreviatura == "") {
      descripVacio.value = true;
    }
    ErrorFull("Debe llenar todos los campos obligatorios", "top-start")
  }

  // console.log(datos_archivados.value);

}

let GuardarMedida = ref('Agregar ubicación');

const agregarUMedida = () => {
  // formUbicaciones.data.attributes.magnitud_id = IdMagnitud.value;
  // console.log(formUbicaciones)
  // formSucursal.data.type = 'Magnitud';
  esperando.value = true;
  if (formUbicaciones) {
    // console.log("OKKKK")
    GuardarMedida.value = 'Guardando...'
    disabledMedidaBtn.value = 'disabled'
    axios.post(`https://` + ipPublica.value + `/fullstack/public/ubicaciones`, formUbicaciones)
      .then((response) => {
        if (response.data.data == null) {
          // console.log(response.data.data)
          GuardarMedida.value = 'Agregar ubicación';
          disabledMedidaBtn.value = ''
          ErrorFull("Error realizando operacion", "top-start")
        } else {
          cargado.value = false;
          esperando.value = false;
          // cerrarAlert();
          // consultar();
          formUbicaciones.data.attributes.observacion = ''
          formUbicaciones.data.attributes.descripcion = '';
          formUbicaciones.data.attributes.ubicacion = '';
          // emit('actualiza', 7);
          loadingU.value = true;
          // emit('actualiza', 7)
          // emit('actualiza', 8)
          if (listadoUbicaciones.value.length == 0) {
            listadoUbicaciones.value.push(response.data.data)
          } else {
            listadoUbicaciones.value.push(response.data.data)
          }

          // console.log(listadoUbicaciones.value)
          almacenDatosUnidades(listadoUbicaciones.value);
          listadoMagnitudes.value = JSON.parse(localStorage.getItem('ListadoCacheUnidades'));
          obtenerListadoLimpioMedida()
          loadingU.value = false;
          GuardarMedida.value = 'Agregar ubicación';
          disabledMedidaBtn.value = ''
          successFull("Unidad de medida agregada satisfactoriamente.", "top-end")
          // closeVentana();
        }


      })
      .catch((error) => {
        if (error.response.status === 400) {
          errors.value = error.response.data.message;
        }
        esperando.value = false;
        ErrorFull(error.response.data.message, "top-start")
        // cerrarAlert();
        // Swal.fire({
        //   icon: "error",
        //   title: error.response.data.message
        // })
      })
  } else {
    if (formUbicaciones.data.attributes.magnitud == "") {
      medidaVacio.value = true;
    }

    if (formUbicaciones.data.attributes.descripcion == "") {
      descripMediVacio.value = true;
    }
    ErrorFull("Debe llenar todos los campos obligatorios", "top-start")
  }

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
  items.value = [];
  // cargar datos en tabla-vue
  // console.log('Actualizando 1...')
  for (let index = 0; index < listadoMagnitudes.value.length; index++) {
    items.value.push(listadoMagnitudes.value[index])
  }

  return await items;

}

const obtenerSucursales = async () => {
  let i = 0;
  itemsSucursales.value = [];
  // cargar datos en tabla-vue
  // console.log('Actualizando 1...')
  for (let index = 0; index < listadoSucursales.value.length; index++) {
    itemsSucursales.value.push(listadoSucursales.value[index])
  }

  return await items;

}

const obtenerListadoLimpioMedida = async () => {
  let i = 0;
  itemsUbicaciones.value = [];
  for (let index = 0; index < listadoUbicaciones.value.length; index++) {
    itemsUbicaciones.value.push(listadoUbicaciones.value[index])
  }

  return await itemsUbicaciones;

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
    inputLabel: `Modificar datos del producto: ` + `${formSucursal.data.attributes.magnitud}`,
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

const EditarListado = async (newdato) => {
  let i = 0;
  itemsSucursales.value = [];
  // cargar datos en tabla-vue
  // console.log('Actualizando 1...')
  for (let index = 0; index < listadoSucursales.value.length; index++) {
    if (newdato.id == listadoSucursales.value[index].id) {
      listadoSucursales.value[index] = newdato;
    }
    itemsSucursales.value.push(listadoSucursales.value[index])
  }
  almacenDatosSucursales(itemsSucursales.value);
  // console.log(items);

  return await itemsSucursales;

}

const btnModificarClass = ref('')

const editarU = async () => {
  esperando.value = true;
  btnModificar.value = 'Actualizando...'
  btnModificarClass.value = 'disabled'
  // deactiva.value = true;
  await axios.put(`https://${ipPublica.value}/fullstack/public/sucursales/${id.value}`, formSucursal)
    .then((response) => {
      if (response.data.data == null) {
        btnModificar.value = 'Modificar'
        btnModificarClass.value = ''
      } else {
        editar.value = false;
        formSucursal.data.attributes.descripcion = ''
        formSucursal.data.attributes.observacion = '';
        formSucursal.data.attributes.sucursal = '';
        formSucursal.data.attributes.abreviatura = '';
        loading.value = true;
        EditarListado(response.data.data)
        successFull("Sucursal editada satisfactoriamente.", "top-end")
        loading.value = false;
        esperando.value = false;
        btnModificar.value = 'Modificar'
        btnModificarClass.value = ''
      }
    })
    .catch((error) => {
      if (error.status === 400) {
        errors.value = error.response.data;
      }
      esperando.value = false;
      btnModificar.value = 'Modificar'
      btnModificarClass.value = ''
      ErrorFull('Error realizando la operacion. Inténtelo más tarde.')
      // cerrarAlert();
      // Swal.fire({
      //   icon: "danger",
      //   title: "Error realizando operación."
      // })
    })
}

const EditarlistadoUbicaciones = async (newdato) => {
  let i = 0;
  itemsUbicaciones.value = [];
  // cargar datos en tabla-vue
  // console.log(newdato.id)
  for (let index = 0; index < listadoUbicaciones.value.length; index++) {
    if (newdato.id == listadoUbicaciones.value[index].id) {
      listadoUbicaciones.value[index] = newdato;
    }
    itemsUbicaciones.value.push(listadoUbicaciones.value[index])
  }
  almacenDatosUbicaciones(itemsUbicaciones.value);
  // console.log(items);

  return await itemsUbicaciones;

}

const EliminarListado = async (newdato) => {
  let i = 0;
  itemsSucursales.value = [];
  // cargar datos en tabla-vue
  // console.log(newdato.id)
  for (let index = 0; index < listadoSucursales.value.length; index++) {
    if (newdato.id == listadoSucursales.value[index].id) {
      listadoSucursales.value.splice(index, 1)
    }
    itemsSucursales.value.push(listadoSucursales.value[index])
  }
  almacenDatosSucursales(itemsSucursales.value);
  // console.log(itemsUbicaciones);

  return await itemsSucursales;

}

const EliminarlistadoUbicaciones = async (newdato) => {
  let i = 0;
  itemsUbicaciones.value = [];
  // cargar datos en tabla-vue
  // console.log(newdato.id)
  for (let index = 0; index < listadoUbicaciones.value.length; index++) {
    if (newdato.id == listadoUbicaciones.value[index].id) {
      listadoUbicaciones.value.splice(index, 1)
    }
    itemsUbicaciones.value.push(listadoUbicaciones.value[index])
  }
  almacenDatosUnidades(itemsUbicaciones.value);
  // console.log(itemsUbicaciones);

  return await itemsUbicaciones;

}

const editarUMedida = async () => {
  esperando.value = true;
  btnModificarM.value = "Actualizando..."
  deactiva.value = 'disabled';
  await axios.put(`https://${ipPublica.value}/fullstack/public/ubicaciones/${id.value}`, formUbicaciones)
    .then((response) => {
      if (response.data.data == null) {
        btnModificarM.value = "Modificar"
        deactiva.value = ''
        ErrorFull("Error realizando operación.", "top-start")
      } else {
        editar.value = false;
        formUbicaciones.data.attributes.descripcion = ''
        formUbicaciones.data.attributes.observacion = '';
        formUbicaciones.data.attributes.ubicaciones = '';
        formUbicaciones.data.attributes.sucursal_id = '';
        loading.value = true;
        EditarlistadoUbicaciones(response.data.data)
        successFull("Ubicación editada satisfactoriamente.", "top-end")
        loading.value = false;
        esperando.value = false;
        btnModificarM.value = "Modificar"
        deactiva.value = ''
      }
    })
    .catch((error) => {
      if (error.response.status === 400) {
        errors.value = error.response.data;
      }
      esperando.value = false;
      ErrorFull("Error realizando operación.", "top-start")
    })
}

const borrarU = (id, correo) => {
  Swal.fire({
    title: "Confirmación",
    text: `Está a punto de eliminar la sucursal: ${correo}`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, eliminar"
  }).then((result) => {
    if (result.isConfirmed) {
      esperando.value = true;
      // Eliminar //
      axios.delete(`http://${ipPublica.value}/fullstack/public/sucursales/${id}`)
        .then((response) => {

          if (response.data.data == null) {

          } else {
            esperando.value = false;
            loading.value = true;
            EliminarListado(response.data.data)
            loading.value = false;
            successFull("Sucursal eliminada satisfactoriamente.", "top-end")
          }
        })
        .catch((error) => {
          if (error.response.status === 400) {
            errors.value = error.response.data;
          }
          esperando.value = false;
          ErrorFull("Error realizando la operación. Intente nuevamente.", "top-start")
        });
    }
  })
}

const borrarUMedida = (id, correo) => {
  Swal.fire({
    title: "Confirmación",
    text: `Está a punto de eliminar la ubicación: ${correo}`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, eliminar"
  }).then((result) => {
    if (result.isConfirmed) {
      esperando.value = true;
      // Eliminar //
      axios.delete(`https://${ipPublica.value}/fullstack/public/ubicaciones/${id}`)
        .then((response) => {
          esperando.value = false;
          loading.value = true;
          EliminarlistadoUbicaciones(response.data.data)
          successFull("Ubicación eliminada satisfactoriamente.", "top-end")
          loading.value = false;
        })
        .catch((error) => {
          if (error.response.status === 400) {
            errors.value = error.response.data;
          }
          esperando.value = false;
          ErrorFull("Error realizando la operación. Intente nuevamente.", "top-start")
          // cerrarAlert();
        });
    }
  })
}
// Fin CRUD

const clickEditar = async (idSelect) => {
  editar.value = true;
  // localStorage.setItem("editar", editar.value);
  id.value = idSelect;
  // console.log(id.value)
  // showModal1.value = 'show'
  // displayModal1.value = "display: block; padding-right: 17px;"
  // activaModal1.value = true;
  // activaHide1.value = true;
  // showModBack.value = 'modal-backdrop fade show';

  for (let index = 0; index < listadoSucursales.value.length; index++) {
    const element = listadoSucursales.value[index].id;
    if (element == idSelect) {
      formSucursal.data.attributes.descripcion = listadoSucursales.value[index].attributes.descripcion;
      formSucursal.data.attributes.sucursal = listadoSucursales.value[index].attributes.sucursal;
      formSucursal.data.attributes.abreviatura = listadoSucursales.value[index].attributes.abreviatura;
      formSucursal.data.attributes.observacion = listadoSucursales.value[index].attributes.observacion;
      break;
    }
    // console.log(element)
  }
}

const clickEditarMedidas = async (idSelect) => {
  editar.value = true;
  id.value = idSelect;
  // console.log(id.value)
  for (let index = 0; index < listadoUbicaciones.value.length; index++) {
    const element = listadoUbicaciones.value[index].id;
    if (element == idSelect) {
      // console.log(listadoUbicaciones.value[index])
      formUbicaciones.data.attributes.descripcion = listadoUbicaciones.value[index].attributes.descripcion;
      formUbicaciones.data.attributes.ubicacion = listadoUbicaciones.value[index].attributes.ubicacion;
      formUbicaciones.data.attributes.observacion = listadoUbicaciones.value[index].attributes.observacion;
      formUbicaciones.data.attributes.sucursal_id = listadoUbicaciones.value[index].relationships.sucursal.data.id;
      break;
    }
  }
}

const cancelarU = () => {
  editar.value = false;
  formSucursal.data.attributes.descripcion = '';
  formSucursal.data.attributes.magnitud = '';
  formSucursal.data.attributes.observacion = '';
}

const cancelarUMedida = () => {
  editar.value = false;
  formUbicaciones.data.attributes.descripcion = '';
  formUbicaciones.data.attributes.medida = '';
  formUbicaciones.data.attributes.observacion = '';
}

const actualizar_datos = () => {
  // localStorage.removeItem('ListadoCache');
  listado.value = JSON.parse(localStorage.getItem('ListadoCache'));
  obtenerListadoLimpio();
  // listadoSucursales.value = JSON.parse(localStorage.getItem('ListadoCacheSucursal'));
  // listadoSucursales = obtenerListadoLimpioSucursales();
}

const almacenDatosMagnitudes = (Lista) => {
  localStorage.removeItem('ListadoCacheMagnitudes');
  const parsed = JSON.stringify(Lista);
  localStorage.setItem('ListadoCacheMagnitudes', parsed);
}

const almacenDatosUnidades = (Lista) => {
  localStorage.removeItem('ListadoCacheUnidades');
  const parsed = JSON.stringify(Lista);
  localStorage.setItem('ListadoCacheUnidades', parsed);
}

const almacenDatosUbicaciones = (Lista) => {
  localStorage.removeItem('ListadoCacheUbicaciones');
  const parsed = JSON.stringify(Lista);
  localStorage.setItem('ListadoCacheUbicaciones', parsed);
}

const almacenDatosSucursales = (Lista) => {
  localStorage.removeItem('ListadoCacheSucursal');
  const parsed = JSON.stringify(Lista);
  localStorage.setItem('ListadoCacheSucursal', parsed);
}

onMounted(async () => {
  if (localStorage.getItem('userName')) {
    ipPublica.value = localStorage.getItem('Host_back');
    if (localStorage.getItem('Carg_datS') == '0') {
      // MAGNITUDES
      loading.value = true;
      disabledMagnitud.value = 'disabled'
      disabledMedida.value = 'disabled'
      // emit('actualiza', 7)
      // emit('actualiza', 8)
      await axios.get(`https://` + ipPublica.value + `/fullstack/public/sucursales`)
        .then((response) => {
          listadoSucursales.value = response.data.data;
          almacenDatosSucursales(listadoSucursales.value);
          listadoSucursales.value = JSON.parse(localStorage.getItem('ListadoCacheSucursal'));
          obtenerSucursales();
          loading.value = false;
          disabledMagnitud.value = ''
          localStorage.setItem('Carg_datS', '1')
        }).catch((error) => {
          if (error.response.status === 500) {
            errors.value = error.response.status;
          }
        })

    } else {
      loading.value = true;
      disabledMagnitud.value = 'disabled'
      listadoSucursales.value = await JSON.parse(localStorage.getItem('ListadoCacheSucursal'));
      obtenerSucursales();
      disabledMagnitud.value = ''
      loading.value = false;
    }

    if (localStorage.getItem('Carg_datU') == '0') {
      loadingU.value = true;
      // disabledMedida.value = 'disabled'
      await axios.get(`https://` + ipPublica.value + `/fullstack/public/ubicaciones`)
        .then((response) => {

          listadoUbicaciones.value = response.data.data;
          almacenDatosUbicaciones(listadoUbicaciones.value);
          listadoUbicaciones.value = JSON.parse(localStorage.getItem('ListadoCacheUbicaciones'));
          obtenerListadoLimpioMedida();
          localStorage.setItem('Carg_datU', '1')
          disabledMedida.value = ''
          loadingU.value = false;
        }).catch((error) => {
          if (error.response.status === 500) {
            errors.value = error.response.status;
          }
        });

    } else {
      loadingU.value = true;
      disabledMedida.value = 'disabled'
      listadoUbicaciones.value = await JSON.parse(localStorage.getItem('ListadoCacheUbicaciones'));
      obtenerListadoLimpioMedida();
      console.log(listadoUbicaciones.value)
      disabledMedida.value = ''
      loadingU.value = false;
    }

  } else {
    router.push('/login');
  }
})

const headersSucursales = [
  { text: "CÓDIGO", value: "id", width: 50, sortable: true },
  // { text: "CODIGO", value: "attributes.codigo", sortable: true },
  { text: "NOMBRE", value: "attributes.sucursal" },
  { text: "ABREVIATURA", value: "attributes.abreviatura" },
  { text: "DESCRIPCIÓN", value: "attributes.descripcion" },
  { text: "OBSERVACIONES", value: "attributes.observacion" },
  // { text: "UNIDAD", value: "unidad" },
  { text: "FECHA DE CREACIÓN", value: "attributes.timestamps.created_at", sortable: true },
  { text: "FECHA DE ACTUALIZACION", value: "attributes.timestamps.updated_at", sortable: true },
  // { text: "VENTAS", value: "cantV", sortable: true },
  { text: "OPCIONES", value: "opciones" }
];

const headersUbicaciones = [
  { text: "CÓDIGO", value: "id", width: 50, sortable: true },
  // { text: "CODIGO", value: "attributes.codigo", sortable: true },
  { text: "NOMBRE", value: "attributes.ubicacion" },
  { text: "SUCURSAL", value: "relationships.sucursal.data.id" },
  { text: "DESCRIPCIÓN", value: "attributes.descripcion" },
  { text: "OBSERVACIONES", value: "attributes.observacion" },
  // { text: "UNIDAD", value: "unidad" },
  { text: "FECHA DE CREACIÓN", value: "attributes.timestamps.created_at", sortable: true },
  { text: "FECHA DE ACTUALIZACION", value: "attributes.timestamps.updated_at", sortable: true },
  // { text: "VENTAS", value: "cantV", sortable: true },
  { text: "OPCIONES", value: "opciones" }
];

const items = ref([]);

const itemsUbicaciones = ref([]);

const itemsSucursales = ref([]);

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
