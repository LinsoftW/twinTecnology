<template>
  <div>
    <div class="container-fluid">
      <!-- <div>
        <div id="interactive" class="viewport"></div>
        <button @click="startScanner">Iniciar Escaneo</button>
        <p v-if="barcode">Código de barras detectado: {{ barcode }}</p>
      </div> -->
      <!-- <ImageBarcodeReader @decode="onDecode" @error="onError" /> -->
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-2 text-gray-800">INVENTARIO</h1>
        <!-- <img src="/cargando2.gif" style="width: 40px; height:40px" v-if="esperando" > -->
        <div class="row">
          <div class="col-md-12 justify-content-between">
            <!-- <router-link class="button" to="/gest_inventario"> -->
            <!-- <a @click="abrirModalAddProd()" href="#" class="d-none d-sm-inline-block btn btn-sm btn-info shadow-sm"
              v-b-tooltip.hover title="Generar resumen diario"><i class="fas fa-plus fa-sm "></i> Agregar productos </a> -->
            <!-- </router-link> -->
            <!-- <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" v-b-tooltip.hover
              title="Generar resumen diario"><i class="fas fa-download fa-sm "></i> Excel</a> -->
            <!-- <a @click="CargaMasiva()" href="#" class="d-sm-inline-block btn btn-sm btn-danger shadow-sm m-2"
              v-b-tooltip.hover title="Agregar productos según archivo"><i class="fas fa-upload fa-sm "></i> Carga
              masiva</a> -->
            <!-- <a @click="ImprimirDoc()" href="#" class="d-sm-inline-block btn btn-sm btn-secondary shadow-sm"
              v-b-tooltip.hover title="Imprimir"><i class="fas fa-print fa-sm "></i> Imprimir</a> -->
            <!-- <a @click="escanea = true" href="#" class="d-sm-inline-block btn btn-sm btn-primary shadow-sm m-2"
              v-b-tooltip.hover data-toggle="modal" data-target="#escanearCode" title="Escanear código de barras"><i
                class="fa fa-barcode fa-sm "></i> Escanear</a> -->
          </div>
        </div>


        <!-- <router-link class="button" to="/gest_inventario">
          <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-info shadow-sm" v-b-tooltip.hover
            title="Generar resumen diario"><i class="fas fa-plus fa-sm "></i> Agregar productos</a>
        </router-link> -->

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
      <div class="col-xl-6 col-lg-12">
        <div class="card shadow mb-4">
          <!-- Card Header - Dropdown -->
          <div class=" card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 class="m-0 text-info">Criterios de búsqueda</h6>
          </div>
          <!-- Card Body -->
          <div class="card-body ">
            <div class="container-fluid row">
              <div class="col-xl-4 col-lg-3">

                <label>Por sucursal</label>
                <select class="form-control form-control-sm" name="" id="" placeholder="Por Sucursales">
                  <option value="">La Habana</option>
                  <option value="">Matanzas</option>
                </select>
              </div>
              <div class="col-xl-4 col-lg-3">
                <label>Por código</label>
                <!-- <input class="form-control form-control-sm" type="text" v-model="searchValue" placeholder="Codigo a buscar"> -->
                <select class="form-control form-control-sm" name="" id="" placeholder="Por codigos">
                  <option value="">124263</option>
                  <option value="">765849</option>
                </select>
              </div>
              <div class="col-xl-4 col-lg-3">
                <label>Por producto</label>
                <!-- <input class="form-control form-control-sm" type="text" v-model="searchNombre" placeholder="Nombre del producto"> -->
                <select class="form-control form-control-sm" name="" id="" placeholder="Por cantidades">
                  <option value="">5</option>
                  <option value="">10</option>
                </select>
              </div>
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

      <!--Listado de productos -->
      <div class="col-xl-12 col-lg-12">
        <div class="card shadow mb-4">
          <!-- Card Header - Dropdown -->
          <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 class="m-0 font-weight-bold text-info">PRODUCTOS EN STOCK</h6>
            <!-- <div :class="'dropdown no-arrow ' + show">
              <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                aria-haspopup="true" :aria-expanded="activaShow" @click="Exp_3Ptos()">
                <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
              </a>
              <div :class="'dropdown-menu dropdown-menu-right shadow animated--fade-in ' + show"
                aria-labelledby="dropdownMenuLink">
                <div class="dropdown-header">Acciones:</div>
                <a class="dropdown-item" href="#" @click="Exp_3Ptos()"><span class="fa fa-cog"></span> Administrar</a>
                <a class="dropdown-item" href="#" @click="Exp_3Ptos()"><span class="fa fa-check"></span> Conformar
                  pedidos</a>
                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#filasColumnas"
                  @click="abrirModal()">
                  <span class="fa fa-bars"></span> Agregar o quitar columnas
                </a>

                <a class="dropdown-item" href="#">Otros</a>
              </div>
            </div> -->
            <!-- <a class="dropdown-item" href="#" data-toggle="modal" data-target="#filasColumnas"
                  >
                  <span class="fa fa-bars"></span> Agregar o quitar columnas
                </a> -->
          </div>
          <!-- Card Body -->
          <div class="card-body">
            <!-- Tabla de vue -->
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
                    <span class="text">Nuevo</span>
                  </a>
                  <a @click="abrirModalAddProd()" class="btn btn-secondary btn-sm btn-icon-split m-2"
                    :class="disabledProductos">
                    <span class="icon text-white-50">
                      <i class="fas fa-file-pdf"></i>
                    </span>
                    <span class="text">PDF</span>
                  </a>
                  <a @click="ExportExcel()" class="btn btn-primary btn-sm btn-icon-split" :class="disabledProductos">
                    <span class="icon text-white-50">
                      <i class="fas fa-download"></i>
                    </span>
                    <span class="text">Excel</span>
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
              <div class="col-md-3 col-xl-3 col-lg-3">
                <span class="text-info">Filtrar por columna: </span>
                <select v-model="searchField" @change="cuandoCambie()" class="form-control form-control-user">
                  <option>Tipo</option>
                  <option>Código</option>
                </select>
              </div>
              <div class="col-md-3 col-xl-3 col-lg-3">
                <span class="text-info">Buscar: </span>
                <input class="form-control form-control-user" type="text" v-model="searchValue"
                  :placeholder="'Teclee el ' + searchField1 + ' a buscar ...'" />
              </div>
            </div>
            <br>

            <!-- Aqui la tabla -->
            <!-- <DataTable :columns="columnas" :data="items" :options="{ options }"
              class="table table-striped table-bordered display">

            </DataTable> -->
            <!-- Fin -->

            <EasyDataTable :headers="headers" :items="itemsProductos" buttons-pagination border-cell
              v-model:items-selected="itemsSelected" header-text-direction="center" body-text-direction="center"
              :search-field="searchField1" :search-value="searchValue" @click-row="showRow" :rows-per-page="5"
              :loading="loadingP">
              <template #item-image="item">
                <img src="/inventario.jpg" alt="No image" class="img img-thumbnail"
                  style="width: 70px; height: 70px;" />
              </template>
              <template #item-opciones="item">
                <div class="operation-wrapper">
                  <button class="btn btn-primary btn-sm btn-circle" data-toggle="modal" data-target="#editaProducto"
                    @click="clickEditarProducto(item.id)" v-b-tooltip.hover title="Modificar"><span
                      class="fas fa-edit"></span></button>
                  <button class="btn btn-success btn-sm btn-circle ml-1" @click="Aumentar(item)" v-b-tooltip.hover
                    title="Aumentar"><span class="fas fa-plus"></span></button>
                  <button class="btn btn-warning btn-sm btn-circle ml-1" @click="Disminuir(item)" v-b-tooltip.hover
                    title="Restar"><span class="fas fa-minus"></span></button>
                  <button class="btn btn-danger btn-sm btn-circle ml-1"
                    @click="borrarU(item.id, item.attributes.codigo, 1)" v-b-tooltip.hover title="Eliminar"><span
                      class="fas fas fa-trash-alt"></span></button>
                  <button class="btn btn-info btn-sm btn-circle ml-1" data-toggle="modal" data-target="#BarCode"
                    @click="generarCodeBar(item.relationships.departamento.data.id,item.relationships.departamento.data.id,item.id)" v-b-tooltip.hover title="Código de barra"><span
                      class="fas fas fa-barcode"></span></button>

                </div>
              </template>
              <template #item-codigo="item">
                 {{ item.relationships.departamento.data.id }}{{ item.relationships.articulo.data.id }}{{ item.id }}
              </template>
              <template #loadingP>
                <img src="/cargando4.gif" style="width: 100px; height: 80px;" />
              </template>
              <template #empty-message>
                <a>No hay datos que mostrar</a>
              </template>

            </EasyDataTable>
            <!-- Fin -->
            <!-- <div class="table-responsive">
              <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                  <tr style="text-align: center;">
                    <th>No</th>

                    <th v-if="sicodigo">CÓDIGO</th>
                    <th v-if="sisucursal">SUCURSAL</th>
                    <th v-if="sidescripcion">DESCRIPCION</th>
                    <th v-if="siobservaciones">OBSERVACIONES</th>
                    <th v-if="siacciones">ACCIONES</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="datos in datosPaginados" :key="datos.id">
                    <td v-if="datos.attributes.deleted_at == null">{{ datos.id }}</td>

                    <td v-if="datos.attributes.deleted_at == null && sicodigo">{{ datos.attributes.codigo }}</td>
                    <td v-if="datos.attributes.deleted_at == null && sisucursal">Sucursal</td>
                    <td v-if="datos.attributes.deleted_at == null && sidescripcion">{{ datos.attributes.descripcion }}
                    </td>
                    <td v-if="datos.attributes.deleted_at == null && siobservaciones">{{ datos.attributes.observacion }}
                    </td>
                    <td v-if="datos.attributes.deleted_at == null && siacciones" style="text-align: center;">
                      <button class="btn btn-info btn-sm btn-circle" v-b-tooltip.hover title="Conformar pedido"><span
                          class="fas fa-check"></span></button>&nbsp;

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
    <div :class="'modal fade ' + showModal1" id="BarCode" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" :aria-hidden="activaHide1" :arial-modal="activaModal1" :style="displayModal1">
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
            <button class="btn btn-secondary btn-sm" type="button" data-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Editar producto Modal-->
    <div :class="'modal fade ' + showModal2" id="editaProductoss" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" :aria-hidden="activaHide2" :arial-modal="activaModal2" :style="displayModal2">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-info" id="exampleModalLabel">Datos del producto: " <i>{{
              formProductos.data.attributes.descripcion }}</i> "
            </h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" class="text-info">×</span>
            </button>
          </div>
          <div class="modal-body text-center">
            <!-- <vue-barcode :value="cod" tag="svg"></vue-barcode> -->
            <div class="col-lg-12">
              <div class="">
                <div class="text-center">
                  <h1 class="h6 text-gray-900 mb-4">CAMPOS OBLIGATORIOS (<label style="color: red;">*</label>)</h1>
                </div>
                <form class="user">

                  <div class="">
                    <div class="text-center">
                      <img v-if="image1 == ''" src="/inventario.jpg" style="width: 160px; height:160px"
                        class="img img-thumbnail" alt="No image">
                      <img v-if="image1 != ''" :src="image1" class="img img-thumbnail"
                        style="width: 160px; height:160px" alt="No image">
                      <br><br>
                      <input type="file" id="avatar1" name="avatar1" accept="image/png, image/jpeg"
                        @change="selecImagenO()" />
                    </div>
                  </div><br>
                  <!-- <div class="row"> -->
                  <!-- <FormKit label="Username" type="text" help="Pick a new username"
                        validation="required|matches:/^@[a-zA-Z]+$/|length:5" value="@FormKit" /> -->
                  <div class="form-group col-lg-12">
                    <label class="text-info">Código: <label style="color: red;">*</label></label>
                    <input type="text" class="form-control" id="codigo" aria-describedby="emailHelp"
                      v-model="formProductos.data.attributes.codigo" placeholder="Código" required>
                  </div>
                  <div class="form-group col-lg-12">
                    <label class="text-info">Descripción: <label style="color: red;">*</label></label>
                    <input type="text" class="form-control" id="descripcion" aria-describedby="emailHelp"
                      v-model="formProductos.data.attributes.descripcion" placeholder="Descripción del producto">
                  </div>
                  <div class="form-group col-lg-12">
                    <label class="text-info">Observaciones: <label style="color: red;">*</label></label>
                    <input type="text" class="form-control" id="descripcion" aria-describedby="emailHelp"
                      v-model="formProductos.data.attributes.observacion" placeholder="Observaciones del producto">
                  </div>
                  <div class="form-group col-lg-12">
                    <label class="text-info">Unidad de medida:</label>
                    <select class="form-group form-control">
                      <option value="">Und(s)</option>
                      <option value="">Kg(s)</option>
                      <option value="">Lts(s)</option>
                    </select>
                  </div>
                  <!-- </div> -->
                  <!-- <div class="form-group">
                      <label class="text-info">Imagen:</label>
                      <input type="file" class="form-control" id="foto"> Seleccione una foto para el producto...
                    </div> -->
                </form>
              </div>
            </div>

          </div>
          <div class="modal-footer">
            <a class="btn btn-info btn-sm" @click="editarU()" data-dismiss="modal">Modificar</a>
            <button class="btn btn-secondary btn-sm" type="button" data-dismiss="modal">Cerrar</button>
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
              formProductos.data.attributes.descripcion
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
              <div class="form-group col-lg-12 text-left">
                <label class="text-info">Descripción del producto: <label style="color: red;">*</label></label>
                <input type="text" class="form-control" id="descripcionP" @change="verificar_error(1)"
                  aria-describedby="emailHelp" v-model="formProductos.data.attributes.descripcion"
                  placeholder="Ej: Blusa" required>
                <span style="color: red;">{{ errores.descripcion }}</span>
              </div>
              <div class="form-group col-lg-12 text-left">
                <label class="text-info">Observaciones: <label style="color: red;">*</label></label>
                <input type="text" class="form-control" id="observacionP" @change="verificar_error(2)"
                  aria-describedby="emailHelp" v-model="formProductos.data.attributes.observacion"
                  placeholder="Ej: La blusa es para la playa">
                <span style="color: red;">{{ errores.observacion }}</span>
              </div>

            </div>
            <div class="row">
              <div class="form-group col-lg-12 text-left">
                <label class="text-info ">Seleccione el artículo: <label style="color: red;">*</label>&nbsp; &nbsp;
                  &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
                  &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
                  &nbsp;&nbsp; &nbsp; &nbsp;
                  <router-link class="button" to="/categorias">
                    <button class="btn btn-danger" v-b-tooltip.hover title="Agregar artículo"><span
                        class="fa fa-plus"></span></button>
                  </router-link>
                </label>
                <select name="articulo" id="articulo" @change="verificar_error(3)"
                  style="width: 100%; text-align:center" placeholder="Artículo" class="text-gray-900 form-control"
                  v-model="formProductos.data.attributes.articulo_id">
                  <option v-for="dato in listadoArticulos" :key="dato.id" :value="dato.id">{{
                    dato.attributes.articulo }}</option>
                </select>
                <span style="color: red;">{{ errores.articulo_id }}</span>
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
            <div class="row">
              <div class="form-group col-lg-12 text-left">
                <label class="text-info">Seleccione la ubicación: <label style="color: red;">*</label>&nbsp; &nbsp;
                  &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
                  &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
                  &nbsp;&nbsp; &nbsp;<button class="btn btn-danger" v-b-tooltip.hover title="Agregar ubicación"><span
                      class="fa fa-plus"></span></button></label>
                <select name="articulo" id="articulo" @change="verificar_error(4)"
                  style="width: 100%; text-align:center" placeholder="Artículo" class="text-gray-900 form-control"
                  v-model="formProductos.data.attributes.ubicacion_id">
                  <option v-for="dato in listadoUbicaciones" :key="dato.id" :value="dato.id">{{
                    dato.attributes.ubicacion }}</option>
                </select>
                <span style="color: red;">{{ errores.ubicacion_id }}</span>
              </div>

              <div class="form-group col-lg-12 text-left">
                <label class="text-info">Cantidad: <label style="color: red;">*</label></label>
                <input type="text" class="form-control" id="cantidadP" @change="verificar_error(5)"
                  aria-describedby="emailHelp" v-model="formProductos.data.attributes.cantidad" placeholder="Ej: 5"
                  required>
                <span style="color: red;">{{ errores.cantidad }}</span>
                <!-- <select name="cantidad" id="cantidad" @change="verificar_error(5)" style="width: 100%; text-align:center"
                  placeholder="Artículo" class="text-gray-900 form-control"
                  v-model="formProductos.data.attributes.cantidad">
                  <option value="1"> 1 </option>
                  <option value="10"> 10 </option>
                </select> -->
                <!-- <span v-if="errores.ubicacion_id == 0" style="color: red;">Este campo es obligatorio</span> -->
              </div>
            </div>

            <div class="text-center">
              <h1 class="h6 text-gray-900 mb-3">CAMPOS OBLIGATORIOS (<label style="color: red;">*</label>)
              </h1>
            </div>

            <div class="row">
              <div v-if="editar == false" class="form-group h4 col-lg-3">

              </div>
              <div v-if="editar == false" class="form-group h4 col-lg-6">
                <a @click="agregarUProducto()" class="btn btn-info btn-block" :class="disabledProductoBtn">
                  {{ GuardarProducto }}
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
  <div :class="'modal fade ' + showModal1" id="editaProducto" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" :aria-hidden="activaHide1" :arial-modal="activaModal1" :style="displayModal1">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-info" id="exampleModalLabel" v-if="editar == false">NUEVO PRODUCTO</h5>
          <h5 class="modal-title text-info text-center" id="exampleModalLabel" v-if="editar == true"><span
              class="fa fa-edit"></span>
            MODIFICAR LOS DATOS DEL PRODUCTO <br>(<label style="color: red;">{{
              formProductos.data.attributes.descripcion
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
              <div class="form-group col-lg-12 text-left">
                <label class="text-info">Descripción del producto: <label style="color: red;">*</label></label>
                <input type="text" class="form-control" id="descripcionP" @change="verificar_error(1)"
                  aria-describedby="emailHelp" v-model="formProductos.data.attributes.descripcion"
                  placeholder="Ej: Blusa" required>
                <span style="color: red;">{{ errores.descripcion }}</span>
              </div>
              <div class="form-group col-lg-12 text-left">
                <label class="text-info">Observaciones: <label style="color: red;">*</label></label>
                <input type="text" class="form-control" id="observacionP" @change="verificar_error(2)"
                  aria-describedby="emailHelp" v-model="formProductos.data.attributes.observacion"
                  placeholder="Ej: La blusa es para la playa">
                <span style="color: red;">{{ errores.observacion }}</span>
              </div>

            </div>
            <div class="row">
              <div class="form-group col-lg-12 text-left">
                <label class="text-info ">Seleccione el artículo: <label style="color: red;">*</label>&nbsp; &nbsp;
                  &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
                  &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
                  &nbsp;&nbsp; &nbsp; &nbsp;
                  <router-link class="button" to="/categorias">
                    <button class="btn btn-danger" v-b-tooltip.hover title="Agregar artículo"><span
                        class="fa fa-plus"></span></button>
                  </router-link>
                </label>
                <select name="articulo" id="articulo" @change="verificar_error(3)"
                  style="width: 100%; text-align:center" placeholder="Artículo" class="text-gray-900 form-control"
                  v-model="formProductos.data.attributes.articulo_id">
                  <option v-for="dato in listadoArticulos" :key="dato.id" :value="dato.id">{{
                    dato.attributes.articulo }}</option>
                </select>
                <span style="color: red;">{{ errores.articulo_id }}</span>
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
            <div class="row">
              <div class="form-group col-lg-12 text-left">
                <label class="text-info">Seleccione la ubicación: <label style="color: red;">*</label>&nbsp; &nbsp;
                  &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
                  &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
                  &nbsp;&nbsp; &nbsp;<button class="btn btn-danger" v-b-tooltip.hover title="Agregar ubicación"><span
                      class="fa fa-plus"></span></button></label>
                <select name="articulo" id="articulo" @change="verificar_error(4)"
                  style="width: 100%; text-align:center" placeholder="Artículo" class="text-gray-900 form-control"
                  v-model="formProductos.data.attributes.ubicacion_id">
                  <option v-for="dato in listadoUbicaciones" :key="dato.id" :value="dato.id">{{
                    dato.attributes.ubicacion }}</option>
                </select>
                <span style="color: red;">{{ errores.ubicacion_id }}</span>
              </div>

              <div class="form-group col-lg-12 text-left">
                <label class="text-info">Cantidad: <label style="color: red;">*</label></label>
                <input type="text" class="form-control" id="cantidadP" @change="verificar_error(5)"
                  aria-describedby="emailHelp" v-model="formProductos.data.attributes.cantidad" placeholder="Ej: 5"
                  required>
                <span style="color: red;">{{ errores.cantidad }}</span>
                <!-- <select name="cantidad" id="cantidad" @change="verificar_error(5)" style="width: 100%; text-align:center"
                  placeholder="Artículo" class="text-gray-900 form-control"
                  v-model="formProductos.data.attributes.cantidad">
                  <option value="1"> 1 </option>
                  <option value="10"> 10 </option>
                </select> -->
                <!-- <span v-if="errores.ubicacion_id == 0" style="color: red;">Este campo es obligatorio</span> -->
              </div>
            </div>

            <div class="text-center">
              <h1 class="h6 text-gray-900 mb-3">CAMPOS OBLIGATORIOS (<label style="color: red;">*</label>)
              </h1>
            </div>

            <div class="row">
              <div v-if="editar == false" class="form-group h4 col-lg-3">

              </div>
              <div v-if="editar == false" class="form-group h4 col-lg-6">
                <a @click="agregarUProducto()" class="btn btn-info btn-block" :class="disabledProductoBtn">
                  {{ GuardarProducto }}
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

  <!-- <div :class="showModBack" @click="abrirModal()"></div> -->
  <!-- <div :class="showModBack2" @click="cerrarModal()"></div> -->
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue';
import Swal from 'sweetalert2';
import axios from 'axios';
// import AddProducto from './modal/AddProducto.vue';
// import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import * as XLSX from 'xlsx';
import Quagga from 'quagga';

const prueba = () => {
  successFull("Okkk", "top-center")
}

const barcode = ref();

let GuardarProducto = ref('Agregar');

let btnModificarM = ref('Modificar');

const disabledProductoBtn = ref('')

const agrega = () => {
  editar.value = false
}

const verificar_error = (n) => {
  switch (n) {
    case 1:
      if (formProductos.data.attributes.descripcion != '') {
        errores.value.descripcion = "";
      } else {
        errores.value.descripcion = "Este campo es obligatorio"
      }
      break;
    case 2:
      if (formProductos.data.attributes.observacion != '') {
        errores.value.observacion = "";
      } else {
        errores.value.observacion = "Este campo es obligatorio"
      }
      break;
    case 3:
      if (formProductos.data.attributes.articulo_id != 0) {
        errores.value.articulo_id = "";
      } else {
        errores.value.articulo_id = "Este campo es obligatorio"
      }
      break;
    case 4:
      if (formProductos.data.attributes.ubicacion_id != 0) {
        errores.value.ubicacion_id = "";
      } else {
        errores.value.ubicacion_id = "Este campo es obligatorio"
      }
      break;
    case 5:
      if (formProductos.data.attributes.cantidad != 0) {
        errores.value.cantidad = "";
      } else {
        errores.value.cantidad = "Este campo es obligatorio"
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

const errores = ref({ descripcion: "", observacion: "", articulo_id: "", ubicacion_id: "", cantidad: "" })

const agregarUProducto = () => {
  esperando.value = true;
  console.log(formProductos.data)
  if (formProductos.data.attributes.descripcion != '' && formProductos.data.attributes.articulo_id != 0 && formProductos.data.attributes.observacion != '' && formProductos.data.attributes.ubicacion_id != 0) {
    // console.log("OKKKK")
    GuardarProducto.value = 'Guardando...'
    disabledProductoBtn.value = 'disabled'
    axios.post(`https://` + ipPublica.value + `/fullstack/public/productos`, formProductos)
      .then((response) => {
        if (response.data.data == null) {
          ErrorFull(response.data.data)
        } else {
          cargado.value = false;
          esperando.value = false;
          formProductos.data.attributes.observacion = ''
          formProductos.data.attributes.descripcion = '';
          loadingU.value = true;
          // emit('actualiza', 7)
          // emit('actualiza', 8)
          if (listadoProductos.value.length == 0) {
            listadoProductos.value.push(response.data.data)
          } else {
            listadoProductos.value.push(response.data.data)
          }
          almacenDatosProductos(listadoProductos.value);
          listadoProductos.value = JSON.parse(localStorage.getItem('ListadoCacheProductos'));
          obtenerProductos()
          loadingU.value = false;
          GuardarMedida.value = 'Agregar';
          disabledProductoBtn.value = ''
          successFull("Producto agregado satisfactoriamente.", "top-end")
        }
      })
      .catch((error) => {
        if (error.response.status === 400) {
          errors.value = error.response.data.message;
        }
        esperando.value = false;
        GuardarMedida.value = 'Agregar';
        disabledProductoBtn.value = ''
        ErrorFull(error.response.data.message, "top-start")
      })
  } else {
    if (formProductos.data.attributes.descripcion == '') {
      errores.value.descripcion = "Este campo es obligatorio";
    }
    if (formProductos.data.attributes.observacion == '') {
      errores.value.observacion = "Este campo es obligatorio";
    }
    if (formProductos.data.attributes.articulo_id == '') {
      errores.value.articulo_id = 'Este campo es obligatorio';
    }
    if (formProductos.data.attributes.ubicacion_id == '') {
      errores.value.ubicacion_id = 'Este campo es obligatorio';
    }
    if (formProductos.data.attributes.cantidad == '') {
      errores.value.cantidad = 'Este campo es obligatorio';
    }
    GuardarMedida.value = 'Agregar';
    disabledProductoBtn.value = ''
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

function Consultar_Productos() {
  emit('consultar', 1);
}

const nuevoArreglo = ref([]);
const elementos = ref([]);

function ExportExcel() {
  // emit('consultar', 2);
  // console.log(items.value)

  for (let index = 0; index < items.value.length; index++) {
    elementos.value.type = items.value[index].type;
    elementos.value.codigo = items.value[index].attributes.codigo;
    elementos.value.descripcion = items.value[index].attributes.descripcion;
    elementos.value.observacion = items.value[index].attributes.observacion;
    nuevoArreglo.value.push(elementos.value)
    elementos.value = []
  }
  // console.log(nuevoArreglo)
  const worksheet = XLSX.utils.json_to_sheet(nuevoArreglo.value);
  const workbook = XLSX.utils.book_new();
  // // Abriendo el excel
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  // // Generar el archivo
  const fileName = 'table_data.xlsx';
  // // Guardar el archivo execl
  XLSX.writeFile(workbook, fileName);
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

const editarU = () => {
  esperando.value = true;
  axios.put(`http://${ipPublica.value}/fullstack/public/productos/${id.value}`, formProductos)
    .then(() => {
      // console.log(response)
      esperando.value = false;
      cerrarAlert();
      cargado.value = false;
      consultar();
      editar.value = false;
      formProductos.data.attributes.descripcion = ''
      formProductos.data.attributes.observacion = '';
      formProductos.data.attributes.codigo = '';
      successFull("Producto editado satisfactoriamente.", "top-end")
      // showModal2.value = '';
      // activaModal2.value = false;
      // show2.value = '';
      // activaShow2.value = false;
      // activaHide2.value = true;
      // displayModal2.value = 'display: none;';
      // showModBack.value = '';
      // cerrarModal()

      // Swal.fire({
      //   icon: "success",
      //   title: "Editado satisfactoriamente."
      // })
      // editar.value = false;
      // localStorage.setItem("editar", editar.value);
    })
    .catch((error) => {
      // console.log(error)
      if (error.response.status === 500) {
        errors.value = error.response.data;
      }
      esperando.value = false;
      ErrorFull(error.response.data.message, "top-start")
      // cerrarAlert();
      // Swal.fire({
      //   icon: "danger",
      //   title: "Error realizando operación."
      // })
    })
}

const showRow = () => {
  // if (itemsSelected.value.length > 1) {
  //   console.log("Selecciono " + itemsSelected.value.length)
  //   console.log(itemsSelected.value)
  // }

}

// const EliminarSelecc = () => {
//   for (let index = 0; index < itemsSelected.value.length; index++) {
//     // console.log(itemsSelected.value[index])
//     borrarU(itemsSelected.value[index].id, itemsSelected.value[index].attributes.codigo, 2)
//   }

// }

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

const searchField = ref("attributes.codigo");

const searchField1 = ref('')

const searchValue = ref("");

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
const p = ref("10-100-1001")
const headers = [
  { text: "NO", value: "id", width: 50, sortable: true },
  { text: "IMAGEN", value: "image" },
  { text: "CODIGO", value: "codigo", sortable: true },
  { text: "DESCRIPCIÓN", value: "attributes.descripcion" },
  { text: "OBSERVACIONES", value: "attributes.observacion" },
  { text: "P.COMPRA", value: "precioC", sortable: true },
  { text: "P.VENTA", value: "precioV", sortable: true },
  { text: "UNIDAD", value: "unidad" },
  { text: "STOCK", value: "stock", sortable: true },
  { text: "VENTAS", value: "cantV", sortable: true },
  { text: "OPCIONES", value: "opciones" }
];

const items = ref([]);

const esperando = ref(false);

const loading = ref(false)

const loadingP = ref(false)

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
  // console.log(idSelect)
  // localStorage.setItem("editar", editar.value);
  id.value = idSelect;
  for (let index = 0; index < listadoProductos.value.length; index++) {
    const element = listadoProductos.value[index].id;
    if (element == idSelect) {
      formProductos.data.attributes.descripcion = listadoProductos.value[index].attributes.descripcion;
      formProductos.data.attributes.cantidad = listadoProductos.value[index].attributes.cantidad;
      formProductos.data.attributes.observacion = listadoProductos.value[index].attributes.observacion;
      formProductos.data.attributes.articulo_id = listadoProductos.value[index].relationships.articulo.data.id;
      formProductos.data.attributes.ubicacion_id = listadoProductos.value[index].relationships.ubicacion.data.id;
      break;
    }
  }
}

const seleccionaProducto = (prod) => {
  id.value = prod.id;
  editar.value = true;
  formProductos.data.attributes.cantidad = prod.attributes.cantidad;
  formProductos.data.attributes.descripcion = prod.attributes.descripcion;
  formProductos.data.attributes.observacion = prod.attributes.observacion;
  formProductos.data.attributes.articulo_id = prod.attributes.relationships.articulo.data.id;
}

const generarCodeBar = (codig, cod2, cod3) => {
  cod.value = codig.toString()+cod2.toString()+cod3.toString();
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

let listadoProductos = ref([]);

let listadoArticulos = ref([]);

let listadoUbicaciones = ref([]);

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

const ipPublica = ref('192.168.121.154');

const formProductos = reactive({
  data: {
    attributes: {
      descripcion: "",
      observacion: "",
      cantidad: 0,
      articulo_id: 99,
      ubicacion_id: 0
    }
  }
})

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

const obtenerListadoLimpio = async () => {
  items.value = [];
  // cargar datos en tabla-vue
  // console.log('Actualizando 1...')
  for (let index = 0; index < listado.value.length; index++) {
    items.value.push(listado.value[index])
  }
  //  console.log(items)
  return await items;

}

const almacenDatosProductos = (Lista) => {
  localStorage.removeItem('ListadoCacheProductos');
  const parsed = JSON.stringify(Lista);
  localStorage.setItem('ListadoCacheProductos', parsed);
}

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
  formProductos.data.attributes.descripcion = '';
  formProductos.data.attributes.codigo = '';
  formProductos.data.attributes.observacion = '';
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
    }).then((result) => {
      if (result.isConfirmed) {
        esperando.value = true;
        cargado.value = false;
        // Eliminar //
        axios.delete(`http://${ipPublica.value}/fullstack/public/productos/${id}`)
          .then(() => {
            esperando.value = false;
            consultar();
            // cerrarAlert();
            cancelarU();
            successFull("Producto eliminado satisfactoriamente.", "top-start")
          }).catch((error) => {
            esperando.value = false;
            ErrorFull(error.response.data.message, "top-start")
          });
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
    }).then((result) => {
      if (result.isConfirmed) {
        esperando.value = true;
        cargado.value = false;
        // Eliminar //
        for (let index = 0; index < itemsSelected.value.length; index++) {
          // console.log(itemsSelected.value[index])
          // borrarU(itemsSelected.value[index].id, itemsSelected.value[index].attributes.codigo, 2)
          axios.delete(`http://${ipPublica.value}/fullstack/public/productos/${itemsSelected.value[index].id}`)
            .then(() => {
              // esperando.value = false;
              consultar();
              // cerrarAlert();
              cancelarU();
              console.log("Eliminado" + itemsSelected.value[index].id)
              // successFull("Producto eliminado satisfactoriamente.", "top-start")
            }).catch((error) => {
              // esperando.value = false;
              console.log("error " + itemsSelected.value[index].id)
              correcto = false;
              // ErrorFull(error.response.data.message, "top-start")
            });
        }
        if (correcto == true) {
          esperando.value = false;
          successFull("Productos eliminados satisfactoriamente.", "top-start")
        } else {
          ErrorFull(error.response.data.message, "top-start")
        }
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

const itemsProductos = ref([])

const disabledProductos = ref('')

const obtenerProductos = () => {
  let i = 0;
  // console.log(listadoDepartamentos)
  itemsProductos.value = [];
  for (let index = 0; index < listadoProductos.value.length; index++) {
    itemsProductos.value.push(listadoProductos.value[index])
  }

}

const almacenDatosArticulos = (Lista) => {
  localStorage.removeItem('ListadoCacheArticulos');
  const parsed = JSON.stringify(Lista);
  localStorage.setItem('ListadoCacheArticulos', parsed);
}

const itemsarticulos = ref([])

const obtenerArticulos = () => {
  let i = 0;

  itemsarticulos.value = [];
  for (let index = 0; index < listadoArticulos.value.length; index++) {
    itemsarticulos.value.push(listadoArticulos.value[index])
  }

}

const almacenDatosUbicaciones = (Lista) => {
  localStorage.removeItem('ListadoCacheUbicaciones');
  const parsed = JSON.stringify(Lista);
  localStorage.setItem('ListadoCacheUbicaciones', parsed);
}

onMounted(async () => {
  if (localStorage.getItem('userName')) {
    ipPublica.value = localStorage.getItem('Host_back');
    if (localStorage.getItem('Carg_datP') == '0') {
      loadingP.value = true;
      disabledProductos.value = 'disabled'
      await axios.get(`https://` + ipPublica.value + `/fullstack/public/productos`)
        .then((response) => {
          if (response.data.data == null) {
            disabledProductos.value = '';
            ErrorFull('Error realizando la operación.', "top-start")
          } else {
            listadoProductos.value = response.data.data;
            almacenDatosProductos(listadoProductos.value);
            obtenerProductos();
            localStorage.setItem("Carg_datP", "1")
            // Cargar Articulos
            if (localStorage.getItem('Carg_datA') == '0') {
              // ARTICULOS
              axios.get(`https://` + ipPublica.value + `/fullstack/public/articulos`)
                .then((response) => {
                  // console.log(response.data.data)
                  if (response.data.data == null) {
                    disabledArticulo.value = ''
                    ErrorFull("Error realizando la operación.", "top-start")
                  } else {
                    listadoArticulos.value = response.data.data;
                    almacenDatosArticulos(listadoArticulos.value);
                    loadingP.value = false;
                    disabledProductos.value = '';
                    localStorage.setItem('Carg_datA', '1')
                    // loading.value = false
                  }

                }).catch((error) => {
                  if (error.response.status === 500) {
                    errors.value = error.response.status;
                  }
                  ErrorFull("Error realizando la operación.", "top-start")
                })

            } else {
              listadoArticulos.value = JSON.parse(localStorage.getItem('ListadoCacheArticulos'));
              obtenerArticulos();
              loadingP.value = false;
              disabledProductos.value = '';
            }
            // Cargar Ubicaciones
            if (localStorage.getItem('Carg_datU') == '0') {
              // UBICACIONES
              axios.get(`https://` + ipPublica.value + `/fullstack/public/ubicaciones`)
                .then((response) => {
                  if (response.data.data == null) {
                    disabledArticulo.value = ''
                    ErrorFull("Error realizando la operación.", "top-start")
                  } else {
                    listadoUbicaciones.value = response.data.data;
                    almacenDatosUbicaciones(listadoUbicaciones.value);
                    loadingP.value = false;
                    disabledProductos.value = '';
                    localStorage.setItem('Carg_datA', '1')
                    // loading.value = false
                  }

                }).catch((error) => {
                  if (error.response.status === 500) {
                    errors.value = error.response.status;
                  }
                  ErrorFull("Error realizando la operación.", "top-start")
                })

            } else {
              listadoUbicaciones.value = JSON.parse(localStorage.getItem('ListadoCacheUbicaciones'));
              // obtenerUbicaciones();
              loadingP.value = false;
              disabledProductos.value = '';
            }
          }

        }).catch((error) => {
          if (error.response.status === 500) {
            errors.value = error.response.status;
          }
          loadingP.value = false;
          disabledProductos.value = '';
          ErrorFull('Error realizando la operación.', "top-start")
        })
    }
    else {
      disabledProductos.value = 'disabled';
      loadingP.value = true;
      listadoProductos.value = JSON.parse(localStorage.getItem('ListadoCacheProductos'));
      obtenerProductos();
      // console.log(listadoProductos.value)
      listadoArticulos.value = JSON.parse(localStorage.getItem('ListadoCacheArticulos'));
      obtenerArticulos();
      listadoUbicaciones.value = JSON.parse(localStorage.getItem('ListadoCacheUbicaciones'));
      disabledProductos.value = '';
      loadingP.value = false;
    }

  } else {
    router.push('/login');
  }
  // consultar();
})


</script>
<style scoped>
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
