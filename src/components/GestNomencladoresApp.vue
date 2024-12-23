<template>
  <div>
    <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">MAGNITUDES Y UNIDADES DE MEDIDAS</h1>
      </div>
      <div class="row">
        <!--Listado de magnitudes -->
        <div class="col-xl-12 col-lg-12">
          <div class="card shadow mb-4 ">
            <!-- Card Header - Dropdown -->
            <a href="#collapseCardExample" class="d-block card-header py-3" data-toggle="collapse" role="button"
              aria-expanded="true" aria-controls="collapseCardExample">
              <h6 class="m-0 font-weight-bold text-info"><i class="fas fa-edit"></i> MAGNITUDES</h6>
            </a>
            <div class="collapse show" id="collapseCardExample">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6 col-xl-6 col-lg-12">
                    <div class="justify-content-between">
                      <a data-toggle="modal" @click="agrega()" data-target="#agregaMagnitudes"
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
                      <!-- <a data-toggle="modal" @click="agrega()" data-target="#agregaMagnitudes"
                        class="d-sm-inline-block btn btn-sm btn-info shadow-sm m-2" v-b-tooltip.hover
                        title="Agregar magnitud" disabled><i class="fas fa-plus fa-sm "></i> Nuevo </a> -->
                      <!-- <a @click="abrirModalAddProd()" href="#"
                        class="d-sm-inline-block btn btn-sm btn-secondary shadow-sm" v-b-tooltip.hover
                        title="Agregar producto"><i class="fas fa-print fa-sm "></i> Imprimir </a> -->
                      <!-- <a @click="ExportExcel()" href="#" class="d-sm-inline-block btn btn-sm btn-primary shadow-sm m-2"
                        v-b-tooltip.hover title="Exportar a Excel"><i class="fas fa-download fa-sm "></i> Excel</a> -->
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
                <EasyDataTable table-class-name="customize-table" :headers="headers" :items="items" buttons-pagination
                  border-cell v-model:items-selected="itemsSelected" header-text-direction="center"
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
                        @click="clickEditar(item.id)" data-target="#EditaMagnitudes" v-b-tooltip.hover
                        title="Editar"><span class="fas fa-edit"></span></button>
                      <!-- <button class="btn btn-info" data-toggle="modal" @click="clickEditar(item.id)" data-target="#agregaEditaMagnitudes"> <span
                  class="fa fa-plus"></span> Nuevo</button> -->



                      <!-- <button class="btn btn-success btn-sm btn-circle ml-1" @click="Aumentar(item)" v-b-tooltip.hover



                            title="Aumentar"><span class="fas fa-plus"></span></button>



                          <button class="btn btn-warning btn-sm btn-circle ml-1" @click="Disminuir(item)" v-b-tooltip.hover



                            title="Restar"><span class="fas fa-minus"></span></button> -->
                      <button class="btn btn-danger btn-sm btn-circle ml-1"
                        @click="borrarU(item.id, item.attributes.magnitud)" v-b-tooltip.hover title="Eliminar"><span
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
                    <img src="/cargando4.gif" style="width: 100px; height: 80px;" />
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
              <h6 class="m-0 font-weight-bold text-info"><i class="fas fa-edit"></i> UNIDADES DE MEDIDAS</h6>
            </a>
            <!-- Card Body -->
            <!-- <div class="card-body"> -->
            <div class="collapse show" id="collapseCardExample1">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6 col-xl-6 col-lg-12">
                    <div class="justify-content-between">
                      <!-- <router-link class="button" to="/gest_inventario"> -->
                      <a data-toggle="modal" @click="agrega()" data-target="#agregaMedidas"
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
                      placeholder="Teclee el nombre a buscar..." />
                  </div>
                </div>
                <br>

                <!--Tabla -->
                <EasyDataTable table-class-name="customize-table" :headers="headersMedidas" :items="itemsMedidas"
                  buttons-pagination border-cell v-model:items-selected="itemsSelected" header-text-direction="center"
                  body-text-direction="center" :search-field="searchFieldMedida" :search-value="searchValueMedida"
                  @click-row="showRow" :rows-per-page="5" :loading="loadingU" show-index>
                  <template #empty-message>
                    <a>No hay datos que mostrar</a>
                  </template>
                  <template #item-opciones="item">
                    <div class="operation-wrapper">
                      <!-- <button class="btn btn-primary btn-sm btn-circle" data-toggle="modal"



                                      data-target="#EditarProducto" @click="seleccionaProducto(item)" v-b-tooltip.hover



                                      title="Modificar"><span class="fas fa-edit"></span></button> -->
                      <button class="btn btn-success btn-sm btn-circle" data-toggle="modal" data-target="#EditaMedidas"
                        @click="clickEditarMedidas(item.id)" v-b-tooltip.hover title="Editar"><span
                          class="fas fa-edit"></span></button>
                      <!-- <button class="btn btn-success btn-sm btn-circle ml-1" @click="Aumentar(item)" v-b-tooltip.hover



                            title="Aumentar"><span class="fas fa-plus"></span></button>



                          <button class="btn btn-warning btn-sm btn-circle ml-1" @click="Disminuir(item)" v-b-tooltip.hover



                            title="Restar"><span class="fas fa-minus"></span></button> -->

                      <button class="btn btn-danger btn-sm btn-circle ml-1"
                        @click="borrarUMedida(item.id, item.attributes.medida)" v-b-tooltip.hover title="Eliminar"><span
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
                    <img src="/cargando4.gif" style="width: 100px; height: 80px;" />
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
  <div :class="'modal fade ' + showModal1" id="agregaMagnitudes" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" :aria-hidden="activaHide1" :arial-modal="activaModal1" :style="displayModal1">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-info" id="exampleModalLabel" v-if="editar == false">NUEVA MAGNITUD</h5>
          <h5 class="modal-title text-info text-center" id="exampleModalLabel" v-if="editar == true"><span
              class="fa fa-edit"></span>
            MODIFICAR LOS DATOS DE LA MAGNITUD <br>(<label style="color: red;">{{
              formMagnitud.data.attributes.magnitud
            }}</label>)</h5>
          <!-- <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
            style="text-align: center;">
            <h6 class="m-0 font-weight-bold text-info" v-if="editar == false"><span class="fa fa-plus"></span>
              AGREGAR
              NUEVA MAGNITUD / <i style="color: red;">CAMPOS OBLIGATORIOS</i> (<label style="color: red;">*</label>)
            </h6>
            <h6 class="m-0 font-weight-bold text-info" v-if="editar == true"><span class="fa fa-edit"></span>
              MODIFICAR LOS DATOS DE LA MAGNITUD <br>(<label style="color: red;">{{
                formMagnitud.data.attributes.magnitud
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
                      <label class="text-info">Nombre de la magnitud: <label style="color: red;">*</label></label>
                      <input type="text" class="form-control" id="magnitud" aria-describedby="emailHelp"
                        v-model="formMagnitud.data.attributes.magnitud" placeholder="Nombre de la magnitud" required>
                      <span v-if="magnitudVacio" style="color: red;">Campo en blanco</span>
                    </div>
                    <div class="form-group col-lg-12">
                      <label class="text-info">Descripción: <label style="color: red;">*</label></label>
                      <input type="text" class="form-control" id="descripcion" aria-describedby="emailHelp"
                        v-model="formMagnitud.data.attributes.descripcion" placeholder="Descripción de la magnitud">
                      <span v-if="descripVacio" style="color: red;">Campo en blanco</span>
                    </div>
                    <div class="form-group col-lg-12">
                      <label class="text-info">Observaciones:</label>
                      <textarea class="form-control" id="observaciones"
                        v-model="formMagnitud.data.attributes.observacion"
                        placeholder="Observaciones de la magnitud"></textarea>

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

  <div :class="'modal fade ' + showModal1" id="EditaMagnitudes" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" :aria-hidden="activaHide1" :arial-modal="activaModal1" :style="displayModal1">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-info" id="exampleModalLabel" v-if="editar == false">NUEVA MAGNITUD</h5>
          <h5 class="modal-title text-info text-center" id="exampleModalLabel" v-if="editar == true"><span
              class="fa fa-edit"></span>
            MODIFICAR LOS DATOS DE LA MAGNITUD <br>(<label style="color: red;">{{
              formMagnitud.data.attributes.magnitud
            }}</label>)</h5>
          <!-- <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
            style="text-align: center;">
            <h6 class="m-0 font-weight-bold text-info" v-if="editar == false"><span class="fa fa-plus"></span>
              AGREGAR
              NUEVA MAGNITUD / <i style="color: red;">CAMPOS OBLIGATORIOS</i> (<label style="color: red;">*</label>)
            </h6>
            <h6 class="m-0 font-weight-bold text-info" v-if="editar == true"><span class="fa fa-edit"></span>
              MODIFICAR LOS DATOS DE LA MAGNITUD <br>(<label style="color: red;">{{
                formMagnitud.data.attributes.magnitud
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
                      <label class="text-info">Nombre de la magnitud: <label style="color: red;">*</label></label>
                      <input type="text" class="form-control" id="magnitud" aria-describedby="emailHelp"
                        v-model="formMagnitud.data.attributes.magnitud" placeholder="Nombre de la magnitud" required>
                      <span v-if="magnitudVacio" style="color: red;">Campo en blanco</span>
                    </div>
                    <div class="form-group col-lg-12">
                      <label class="text-info">Descripción: <label style="color: red;">*</label></label>
                      <input type="text" class="form-control" id="descripcion" aria-describedby="emailHelp"
                        v-model="formMagnitud.data.attributes.descripcion" placeholder="Descripción de la magnitud">
                      <span v-if="descripVacio" style="color: red;">Campo en blanco</span>
                    </div>
                    <div class="form-group col-lg-12">
                      <label class="text-info">Observaciones:</label>
                      <textarea class="form-control" id="observaciones"
                        v-model="formMagnitud.data.attributes.observacion"
                        placeholder="Observaciones de la magnitud"></textarea>

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
                  <a class="btn btn-danger btn-block" data-dismiss="modal" aria-label="Close">
                    Cancelar
                  </a>
                </div>
              </div>
            </div>

            <!-- <div class="modal-footer" style="text-align: center;"> -->
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
  <div :class="'modal fade ' + showModal1" id="agregaMedidas" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" :aria-hidden="activaHide1" :arial-modal="activaModal1" :style="displayModal1">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-info" id="exampleModalLabel" v-if="editar == false">NUEVA UNIDAD DE MEDIDA</h5>
          <h5 class="modal-title text-info text-center" id="exampleModalLabel" v-if="editar == true"><span
              class="fa fa-edit"></span>
            MODIFICAR LOS DATOS DE LA UNIDAD DE MEDIDAS <br>(<label style="color: red;">{{
              formMedida.data.attributes.medida
            }}</label>)</h5>

          <!-- <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
            style="text-align: center;">
            <h6 class="m-0 font-weight-bold text-info" v-if="editar == false"><span class="fa fa-plus"></span>
              AGREGAR
              NUEVA MAGNITUD / <i style="color: red;">CAMPOS OBLIGATORIOS</i> (<label style="color: red;">*</label>)
            </h6>
            <h6 class="m-0 font-weight-bold text-info" v-if="editar == true"><span class="fa fa-edit"></span>
              MODIFICAR LOS DATOS DE LA MAGNITUD <br>(<label style="color: red;">{{
                formMagnitud.data.attributes.magnitud
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
                <input type="text" class="form-control" id="medida" aria-describedby="emailHelp"
                  v-model="formMedida.data.attributes.medida" placeholder="Nombre de la unidad de medida" required>
              </div>
              <div class="form-group col-lg-12">
                <label class="text-info">Descripción: <label style="color: red;">*</label></label>
                <input type="text" class="form-control" id="descripcionMed" aria-describedby="emailHelp"
                  v-model="formMedida.data.attributes.descripcion" placeholder="Descripción del producto">
              </div>

            </div>
            <div class="form-group ">
              <label class="text-info">Observaciones:</label>
              <textarea class="form-control" id="observacionesMed" v-model="formMedida.data.attributes.observacion"
                placeholder="Observaciones acerca de la uidad de medida"></textarea>

            </div>
            <div class="form-group col-lg-12">
              <label class="text-info">Seleccione una magnitud: <label style="color: red;">*</label></label>
              <select name="IDmagnitud" id="IDmagnitud" style="width: 100%; text-align:center"
                placeholder="Unidad de medida" class="text-gray-900 form-control"
                v-model="formMedida.data.attributes.magnitud_id" @change="ObtenIdMagnitud(selected)">
                <option v-for="dato in listadoMagnitudes" :key="dato.id" :value="dato.id">{{
                  dato.attributes.magnitud }}</option>
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

  <div :class="'modal fade ' + showModal1" id="EditaMedidas" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" :aria-hidden="activaHide1" :arial-modal="activaModal1" :style="displayModal1">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-info" id="exampleModalLabel" v-if="editar == false">NUEVA UNIDAD DE MEDIDA</h5>
          <h5 class="modal-title text-info text-center" id="exampleModalLabel" v-if="editar == true"><span
              class="fa fa-edit"></span>
            MODIFICAR LOS DATOS DE LA UNIDAD DE MEDIDA <br>(<label style="color: red;">{{
              formMedida.data.attributes.medida
            }}</label>)</h5>

          <!-- <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
            style="text-align: center;">
            <h6 class="m-0 font-weight-bold text-info" v-if="editar == false"><span class="fa fa-plus"></span>
              AGREGAR
              NUEVA MAGNITUD / <i style="color: red;">CAMPOS OBLIGATORIOS</i> (<label style="color: red;">*</label>)
            </h6>
            <h6 class="m-0 font-weight-bold text-info" v-if="editar == true"><span class="fa fa-edit"></span>
              MODIFICAR LOS DATOS DE LA MAGNITUD <br>(<label style="color: red;">{{
                formMagnitud.data.attributes.magnitud
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
                <input type="text" class="form-control" id="medida" aria-describedby="emailHelp"
                  v-model="formMedida.data.attributes.medida" placeholder="Nombre de la unidad de medida" required>
              </div>
              <div class="form-group col-lg-12">
                <label class="text-info">Descripción: <label style="color: red;">*</label></label>
                <input type="text" class="form-control" id="descripcionMed" aria-describedby="emailHelp"
                  v-model="formMedida.data.attributes.descripcion" placeholder="Descripción del producto">
              </div>

            </div>
            <div class="form-group ">
              <label class="text-info">Observaciones:</label>
              <textarea class="form-control" id="observacionesMed" v-model="formMedida.data.attributes.observacion"
                placeholder="Observaciones acerca de la uidad de medida"></textarea>

            </div>
            <div class="form-group col-lg-12">
              <label class="text-info">Seleccione una magnitud: <label style="color: red;">*</label></label>
              <select name="IDmagnitud" id="IDmagnitud" style="width: 100%; text-align:center"
                placeholder="Unidad de medida" class="text-gray-900 form-control"
                v-model="formMedida.data.attributes.magnitud_id" @change="ObtenIdMagnitud(selected)">
                <option v-for="dato in listadoMagnitudes" :key="dato.id" :value="dato.id">{{
                  dato.attributes.magnitud }}</option>
              </select>
            </div>

            <div class="row">
              <div v-if="editar == false" class="form-group h4 col-lg-3">

              </div>
              <div v-if="editar == false" class="form-group h4 col-lg-6">
                <a @click="agregarUMedida" class="btn btn-info btn-block">
                  Guardar datos
                </a>
              </div>
              <div v-if="editar" class="form-group h4 col-lg-6">
                <a @click="editarUMedida" class="btn btn-info btn-block">
                  {{ btnModificarM }}
                </a>
              </div>
              <div v-if="editar" class="form-group h4 col-lg-6">
                <a class="btn btn-danger btn-block" data-dismiss="modal" aria-label="close">
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

  for (let index = 0; index < items.value.length; index++) {
    elementos.value.type = items.value[index].type;
    elementos.value.magnitud = items.value[index].attributes.magnitud;
    elementos.value.descripcion = items.value[index].attributes.descripcion;
    elementos.value.observacion = items.value[index].attributes.observacion;
    elementos.value.created_at = items.value[index].attributes.timestamps.created_at;
    elementos.value.updated_at = items.value[index].attributes.timestamps.updated_at;
    nuevoArreglo.value.push(elementos.value)
    elementos.value = []
  }
  // console.log(nuevoArreglo)
  const worksheet = XLSX.utils.json_to_sheet(nuevoArreglo.value);
  const workbook = XLSX.utils.book_new();
  // // Abriendo el excel
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  // // Generar el archivo
  const fileName = 'Magnitudes.xlsx';
  // // Guardar el archivo execl
  XLSX.writeFile(workbook, fileName);
}
// Fin

function ExportExcelMedidas() {
  elementos.value = []
  nuevoArreglo.value = []
  for (let index = 0; index < itemsMedidas.value.length; index++) {
    elementos.value.type = itemsMedidas.value[index].type;
    elementos.value.medida = itemsMedidas.value[index].attributes.medida;
    elementos.value.descripcion = itemsMedidas.value[index].attributes.descripcion;
    elementos.value.observacion = itemsMedidas.value[index].attributes.observacion;
    elementos.value.created_at = itemsMedidas.value[index].attributes.timestamps.created_at;
    elementos.value.updated_at = itemsMedidas.value[index].attributes.timestamps.updated_at;
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
  // console.log(formMedida.data.attributes.magnitud_id)
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
          listadoMedidas.value = []
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

let listadoMedidas = ref([]);

// let listadoSucursales = ref([]);

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

const formMagnitud = reactive({
  data: {
    attributes: {
      magnitud: "",
      descripcion: "",
      observacion: ""
    }
  }
})

const formMedida = reactive({
  data: {
    attributes: {
      medida: "",
      descripcion: "",
      observacion: "",
      magnitud_id: 0
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

let GuardarMag = ref('Agregar magnitud')

const agregarU = async () => {
  // console.log(formMagnitud)
  esperando.value = true;
  if (formMagnitud.data.attributes.magnitud != '' && formMagnitud.data.attributes.descripcion != '') {
    // console.log("OKKKK")
    disabledMagnitudBtn.value = 'disabled'
    GuardarMag.value = 'Guardando...'
    await axios.post(`https://` + ipPublica.value + `/fullstack/public/magnitudes`, formMagnitud)
      .then((response) => {
        cargado.value = false;
        esperando.value = false;
        if (response.data.data == null) {
          ErrorFull("Está intentando agregar un dato que ya existe en la base datos.", "top-start")
          disabledMagnitudBtn.value = '';
          GuardarMag.value = 'Agregar departamento'
        } else {
          formMagnitud.data.attributes.observacion = ''
          formMagnitud.data.attributes.descripcion = '';
          formMagnitud.data.attributes.magnitud = '';
          // emit('actualiza', 7);
          loading.value = true;
          listadoMagnitudes.value.push(response.data.data)
          almacenDatosMagnitudes(listadoMagnitudes.value);
          listadoMagnitudes.value = JSON.parse(localStorage.getItem('ListadoCacheMagnitudes'));
          obtenerListadoLimpio();
          disabledMagnitudBtn.value = ''
          GuardarMag.value = 'Agregar magnitud'
          loading.value = false;
          successFull("Magnitud agregada satisfactoriamente.", "top-end")
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
    if (formMagnitud.data.attributes.magnitud == "") {
      magnitudVacio.value = true;
    }

    if (formMagnitud.data.attributes.descripcion == "") {
      descripVacio.value = true;
    }
    ErrorFull("Debe llenar todos los campos obligatorios", "top-start")
  }

  // console.log(datos_archivados.value);

}

let GuardarMedida = ref('Agregar u. medida');

const agregarUMedida = () => {
  // formMedida.data.attributes.magnitud_id = IdMagnitud.value;
  // console.log(formMedida)
  // formMagnitud.data.type = 'Magnitud';
  esperando.value = true;
  if (formMedida) {
    // console.log("OKKKK")
    GuardarMedida.value = 'Guardando...'
    disabledMedidaBtn.value = 'disabled'
    axios.post(`https://` + ipPublica.value + `/fullstack/public/medidas`, formMedida)
      .then((response) => {
        cargado.value = false;
        esperando.value = false;
        // cerrarAlert();
        // consultar();
        formMedida.data.attributes.observacion = ''
        formMedida.data.attributes.descripcion = '';
        formMedida.data.attributes.medida = '';
        // emit('actualiza', 7);
        loadingU.value = true;
        // emit('actualiza', 7)
        // emit('actualiza', 8)
        if (listadoMedidas.value.length == 0) {
          listadoMedidas.value.push(response.data.data)
        } else {
          listadoMedidas.value.push(response.data.data)
        }

        // console.log(listadoMedidas.value)
        almacenDatosUnidades(listadoMedidas.value);
        listadoMagnitudes.value = JSON.parse(localStorage.getItem('ListadoCacheUnidades'));
        obtenerListadoLimpioMedida()
        listadoMagnitudes.value = JSON.parse(localStorage.getItem('ListadoCacheMagnitudes'));
        obtenerListadoLimpio();
        loadingU.value = false;
        GuardarMedida.value = 'Agregar u. medida';
        disabledMedidaBtn.value = ''
        successFull("Unidad de medida agregada satisfactoriamente.", "top-end")
        // closeVentana();

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
    if (formMedida.data.attributes.magnitud == "") {
      medidaVacio.value = true;
    }

    if (formMedida.data.attributes.descripcion == "") {
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

const obtenerListadoLimpioMedida = async () => {
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

  itemsMedidas.value = [];
  // cargar datos en tabla-vue
  // console.log('Actualizando 1...')
  for (let index = 0; index < listadoMedidas.value.length; index++) {
    itemsMedidas.value.push(listadoMedidas.value[index])
  }

  return await itemsMedidas;

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
    inputLabel: `Modificar datos del producto: ` + `${formMagnitud.data.attributes.magnitud}`,
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
  items.value = [];
  // cargar datos en tabla-vue
  // console.log('Actualizando 1...')
  for (let index = 0; index < listadoMagnitudes.value.length; index++) {
    if (newdato.id == listadoMagnitudes.value[index].id) {
      listadoMagnitudes.value[index] = newdato;
    }
    items.value.push(listadoMagnitudes.value[index])
  }
  almacenDatosMagnitudes(items.value);
  // console.log(items);

  return await items;

}

const btnModificarClass = ref('')

const editarU = async () => {
  esperando.value = true;
  btnModificar.value = 'Actualizando...'
  btnModificarClass.value = 'disabled'
  // deactiva.value = true;
  await axios.put(`https://${ipPublica.value}/fullstack/public/magnitudes/${id.value}`, formMagnitud)
    .then((response) => {
      if (response.data.data == null) {
        btnModificar.value = 'Modificar'
        btnModificarClass.value = ''
      } else {
        editar.value = false;
        formMagnitud.data.attributes.descripcion = ''
        formMagnitud.data.attributes.observacion = '';
        formMagnitud.data.attributes.magnitud = '';
        loading.value = true;
        EditarListado(response.data.data)
        successFull("Magnitud editada satisfactoriamente.", "top-end")
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

const EditarListadoMedidas = async (newdato) => {
  let i = 0;
  itemsMedidas.value = [];
  // cargar datos en tabla-vue
  // console.log(newdato.id)
  for (let index = 0; index < listadoMedidas.value.length; index++) {
    if (newdato.id == listadoMedidas.value[index].id) {
      listadoMedidas.value[index] = newdato;
    }
    itemsMedidas.value.push(listadoMedidas.value[index])
  }
  almacenDatosUnidades(itemsMedidas.value);
  // console.log(items);

  return await itemsMedidas;

}

const EliminarListado = async (newdato) => {
  let i = 0;
  items.value = [];
  // cargar datos en tabla-vue
  // console.log(newdato.id)
  for (let index = 0; index < listadoMagnitudes.value.length; index++) {
    if (newdato.id == listadoMagnitudes.value[index].id) {
      listadoMagnitudes.value.splice(index, 1)
    }
    items.value.push(listadoMagnitudes.value[index])
  }
  almacenDatosMagnitudes(items.value);
  // console.log(itemsMedidas);

  return await items;

}

const EliminarListadoMedidas = async (newdato) => {
  let i = 0;
  itemsMedidas.value = [];
  // cargar datos en tabla-vue
  // console.log(newdato.id)
  for (let index = 0; index < listadoMedidas.value.length; index++) {
    if (newdato.id == listadoMedidas.value[index].id) {
      listadoMedidas.value.splice(index, 1)
    }
    itemsMedidas.value.push(listadoMedidas.value[index])
  }
  almacenDatosUnidades(itemsMedidas.value);
  // console.log(itemsMedidas);

  return await itemsMedidas;

}

const editarUMedida = async () => {
  esperando.value = true;
  btnModificarM.value = "Actualizando..."
  deactiva.value = 'disabled';
  await axios.put(`https://${ipPublica.value}/fullstack/public/medidas/${id.value}`, formMedida)
    .then((response) => {
      if (response.data.data == null) {
        btnModificarM.value = "Modificar"
        deactiva.value = ''
        ErrorFull("Error realizando operación.", "top-start")
      } else {
        editar.value = false;
        formMedida.data.attributes.descripcion = ''
        formMedida.data.attributes.observacion = '';
        formMedida.data.attributes.medida = '';
        formMedida.data.attributes.magnitud_id = '';
        loading.value = true;
        EditarListadoMedidas(response.data.data)
        successFull("Unidad de medida editada satisfactoriamente.", "top-end")
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
    text: `Está a punto de eliminar la magnitud: ${correo}`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, eliminar"
  }).then((result) => {
    if (result.isConfirmed) {
      esperando.value = true;
      // Eliminar //
      axios.delete(`http://${ipPublica.value}/fullstack/public/magnitudes/${id}`)
        .then((response) => {

          if (response.data.data == null) {

          } else {
            esperando.value = false;
            loading.value = true;
            EliminarListado(response.data.data)
            loading.value = false;
            successFull("Magnitud eliminada satisfactoriamente.", "top-end")
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
    text: `Está a punto de eliminar la unidad de medida: ${correo}`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, eliminar"
  }).then((result) => {
    if (result.isConfirmed) {
      esperando.value = true;
      // Eliminar //
      axios.delete(`https://${ipPublica.value}/fullstack/public/medidas/${id}`)
        .then((response) => {
          esperando.value = false;
          loading.value = true;
          EliminarListadoMedidas(response.data.data)
          successFull("Unidad de medida eliminada satisfactoriamente.", "top-end")
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

  for (let index = 0; index < listadoMagnitudes.value.length; index++) {
    const element = listadoMagnitudes.value[index].id;
    if (element == idSelect) {
      formMagnitud.data.attributes.descripcion = listadoMagnitudes.value[index].attributes.descripcion;
      formMagnitud.data.attributes.magnitud = listadoMagnitudes.value[index].attributes.magnitud;
      formMagnitud.data.attributes.observacion = listadoMagnitudes.value[index].attributes.observacion;
      break;
    }
    // console.log(element)
  }

  // editarUModel()

  // let response = await axios.get(`http://localhost/fullstack/public/api/nom/productos/${id.value}`)
  //   .then((response) => {
  //     formMagnitud.data.attributes.descripcion = response.data.data.attributes.descripcion;
  //     formMagnitud.data.attributes.codigo = response.data.data.attributes.codigo;
  //     formMagnitud.data.attributes.observacion = response.data.data.attributes.observacion;
  //   })
}

const clickEditarMedidas = async (idSelect) => {
  editar.value = true;
  id.value = idSelect;
  // console.log(id.value)
  for (let index = 0; index < listadoMedidas.value.length; index++) {
    const element = listadoMedidas.value[index].id;
    if (element == idSelect) {
      // console.log(listadoMedidas.value[index])
      formMedida.data.attributes.descripcion = listadoMedidas.value[index].attributes.descripcion;
      formMedida.data.attributes.medida = listadoMedidas.value[index].attributes.medida;
      formMedida.data.attributes.observacion = listadoMedidas.value[index].attributes.observacion;
      formMedida.data.attributes.magnitud_id = listadoMedidas.value[index].relationships.magnitud.data.id;
      break;
    }
  }
}

const cancelarU = () => {
  editar.value = false;
  formMagnitud.data.attributes.descripcion = '';
  formMagnitud.data.attributes.magnitud = '';
  formMagnitud.data.attributes.observacion = '';
}

const cancelarUMedida = () => {
  editar.value = false;
  formMedida.data.attributes.descripcion = '';
  formMedida.data.attributes.medida = '';
  formMedida.data.attributes.observacion = '';
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

onMounted(async () => {
  if (localStorage.getItem('userName')) {
    ipPublica.value = localStorage.getItem('Host_back');
    if (localStorage.getItem('Carg_datM') == '0') {
      // MAGNITUDES
      loading.value = true;
      disabledMagnitud.value = 'disabled'
      disabledMedida.value = 'disabled'
      // emit('actualiza', 7)
      // emit('actualiza', 8)
      await axios.get(`https://` + ipPublica.value + `/fullstack/public/magnitudes`)
        .then((response) => {
          listadoMagnitudes.value = response.data.data;
          almacenDatosMagnitudes(listadoMagnitudes.value);
          listadoMagnitudes.value = JSON.parse(localStorage.getItem('ListadoCacheMagnitudes'));
          obtenerListadoLimpio();
          loading.value = false;
          disabledMagnitud.value = ''
          localStorage.setItem('Carg_datM', '1')
        }).catch((error) => {
          if (error.response.status === 500) {
            errors.value = error.response.status;
          }
        })

    } else {
      loading.value = true;
      disabledMagnitud.value = 'disabled'
      listadoMagnitudes.value = await JSON.parse(localStorage.getItem('ListadoCacheMagnitudes'));
      obtenerListadoLimpio();
      disabledMagnitud.value = ''
      loading.value = false;
    }

    if (localStorage.getItem('Carg_datMe') == '0') {
      loadingU.value = true;
      // disabledMedida.value = 'disabled'
      await axios.get(`https://` + ipPublica.value + `/fullstack/public/medidas`)
        .then((response) => {
          listadoMedidas.value = response.data.data;
          almacenDatosUnidades(listadoMedidas.value);
          listadoMedidas.value = JSON.parse(localStorage.getItem('ListadoCacheUnidades'));
          obtenerListadoLimpioMedida();
          localStorage.setItem('Carg_datMe', '1')
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
      listadoMedidas.value = await JSON.parse(localStorage.getItem('ListadoCacheUnidades'));
      obtenerListadoLimpioMedida();
      disabledMedida.value = ''
      loadingU.value = false;
    }

  } else {
    router.push('/login');
  }
})

const headers = [
  { text: "CÓDIGO", value: "id", width: 50, sortable: true },
  // { text: "CODIGO", value: "attributes.codigo", sortable: true },
  { text: "NOMBRE", value: "attributes.magnitud" },
  { text: "DESCRIPCIÓN", value: "attributes.descripcion" },
  { text: "OBSERVACIONES", value: "attributes.observacion" },
  // { text: "UNIDAD", value: "unidad" },
  { text: "FECHA DE CREACIÓN", value: "attributes.timestamps.created_at", sortable: true },
  { text: "FECHA DE ACTUALIZACION", value: "attributes.timestamps.updated_at", sortable: true },
  // { text: "VENTAS", value: "cantV", sortable: true },
  { text: "OPCIONES", value: "opciones" }
];

const headersMedidas = [
  { text: "CÓDIGO", value: "id", width: 50, sortable: true },
  // { text: "CODIGO", value: "attributes.codigo", sortable: true },
  { text: "NOMBRE", value: "attributes.medida" },
  { text: "DESCRIPCIÓN", value: "attributes.descripcion" },
  { text: "OBSERVACIONES", value: "attributes.observacion" },
  // { text: "UNIDAD", value: "unidad" },
  { text: "FECHA DE CREACIÓN", value: "attributes.timestamps.created_at", sortable: true },
  { text: "FECHA DE ACTUALIZACION", value: "attributes.timestamps.updated_at", sortable: true },
  // { text: "VENTAS", value: "cantV", sortable: true },
  { text: "OPCIONES", value: "opciones" }
];

const items = ref([]);

const itemsMedidas = ref([]);
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
