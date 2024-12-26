<template>
  <!-- Page Wrapper -->

  <div id="wrapper">
    <!-- Sidebar -->
    <ul :class="'navbar-nav bg-gradient-' + Cosc_Clar + ' sidebar sidebar-dark accordion ' + Ctoggled"
      id="accordionSidebar">

      <!-- Sidebar - Brand -->
      <a class="sidebar-brand d-flex align-items-center justify-content-center" href="#">
        <div class="sidebar-brand-icon rotate-n-15">
          <!-- <i class="fas fa-laugh-wink"></i> -->
          <img width="40" height="40" src="/clipboard-list.png" alt="clipboard-list" />
        </div>
        <!-- <img class="sidebar-card-illustration mb-2" src="../assets/new/img/inventario.jpg" style="width: 30px; height:30px" alt="..."> -->
        <div class="sidebar-brand-text mx-3">MyInventario <sup>1.0</sup></div>
      </a>

      <!-- Divider -->
      <hr class="sidebar-divider my-0">

      <!-- Nav Item - Dashboard -->
      <li class="nav-item" v-bind:class="ActivaLink(10)" :key="10" @click="obtenerLinkA(10)">

        <router-link class="button" to="/inicio">
          <a class="nav-link">
            <i class="fas fa-tachometer-alt"></i>
            <span>Inicio</span></a>

        </router-link>

      </li>
      <!-- Divider -->
      <hr class="sidebar-divider">

      <!-- Heading -->
      <div class="sidebar-heading">
        GESTIÓN
      </div>

      <!-- Nav Item - Pages Collapse Menu -->
      <li class="nav-item">
        <!-- <a :class="'nav-link ' + collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
          :aria-expanded="activa" aria-controls="collapseTwo" @click="Exp_Consultar()"> -->
        <a :class="'nav-link ' + collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
          :aria-expanded="activa" aria-controls="collapseTwo">
          <i class="fas fa-shopping-bag"></i>
          <span>Inventario
          </span>
        </a>
        <div id="collapseTwo" :class="'collapse ' + show" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Gestionar</h6>
            <!-- <a class="collapse-item" @click="click_inventario">Inventario</a>
            <a class="collapse-item" @click="click_pedidos">Pedidos</a> -->
            <router-link class="button" to="/inventario">
              <a class="collapse-item" v-bind:class="ActivaLink(1)" :key="1" @click="obtenerLinkA(1)"><i
                  class="far fa-check-circle"></i> Productos</a>
            </router-link>
            <router-link class="button" to="/categorias">
              <a class="collapse-item" v-bind:class="ActivaLink(2)" :key="2" @click="obtenerLinkA(2)"> <i
                  class="far fa-check-circle"></i>
                Departamentos</a>
            </router-link>
            <router-link class="button" to="/categorias">
              <a class="collapse-item" v-bind:class="ActivaLink(3)" :key="3" @click="obtenerLinkA(3)"> <i
                  class="far fa-check-circle"></i>
                Etiquetas</a>
            </router-link>
            <router-link class="button" to="/gest_nomencladores">
              <a class="collapse-item" v-bind:class="ActivaLink(9)" :key="9" @click="obtenerLinkA(9)"> <i
                  class="far fa-check-circle"></i> Magnitudes</a>
            </router-link>
            <!-- <hr class="sidebar-divider"> -->
            <router-link class="button" to="/auditoria">
              <a class="collapse-item" v-bind:class="ActivaLink(10)" :key="10" @click="obtenerLinkA(10)"> <i
                  class="far fa-check-circle"></i> Auditoría</a>
            </router-link>
            <!-- <router-link class="button" to="/pedidos">
              <a class="collapse-item" v-bind:class="ActivaLink(3)" :key="3" @click="obtenerLinkA(3)"> <i
                  class="fas fa-fw fa-eye"></i> Pedidos</a>
            </router-link>-->
            <!-- <router-link class="button" to="/cmasiva">
              <a class="collapse-item" v-bind:class="ActivaLink(3)" :key="3" @click="obtenerLinkA(3)"> <i
                  class="far fa-check-circle"></i> Carga masiva</a>
            </router-link> -->
            <!-- <a class="collapse-item" href="cards.html">Cards</a> -->
          </div>
        </div>
      </li>

      <!-- <li class="nav-item" v-bind:class="ActivaLink(4)" :key="4" @click="obtenerLinkA(4)">

        <router-link class="button" to="#">
          <a class="nav-link">
            <i class="fas fa-fw fa-shopping-cart"></i>
            <span>Ventas</span></a>

        </router-link>

      </li> -->

      <!-- <li class="nav-item" v-bind:class="ActivaLink(5)" :key="5" @click="obtenerLinkA(5)">

        <router-link class="button" to="#">
          <a class="nav-link">
            <i class="fas fa-cart-plus"></i>
            <span>Compras</span></a>

        </router-link>

      </li> -->
      <!-- <li class="nav-item" v-bind:class="ActivaLink(6)" :key="6" @click="obtenerLinkA(6)">

        <router-link class="button" to="#">
          <a class="nav-link">
            <i class="fas fa-chart-line"></i>
            <span>Reportes</span></a>

        </router-link>

      </li> -->
      <hr class="sidebar-divider">
      <div class="sidebar-heading">
        ADMON
      </div>
      <li class="nav-item">

        <!-- <a :class="'nav-link ' + collapsed2" href="#" data-toggle="collapse" data-target="#collapseUtilities"
          :aria-expanded="activa2" aria-controls="collapseUtilities" @click="Exp_Nomenc()"> -->
        <a :class="'nav-link ' + collapsed2" href="#" data-toggle="collapse" data-target="#collapseUtilities"
          :aria-expanded="activa2" aria-controls="collapseUtilities">
          <i class="fas fa-fw fa-cog"></i>
          <span>Administración</span>
        </a>
        <div id="collapseUtilities" :class="'collapse ' + show2" aria-labelledby="headingUtilities"
          data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Administrar:</h6>
            <!-- <a class="collapse-item button" @click="click_sucursales">Sucursales</a> -->
            <!-- <router-link class="button" to="/gest_nomencladores">
              <a class="collapse-item" v-bind:class="ActivaLink(7)" :key="7" @click="obtenerLinkA(7)"> <i
                  class="fas fa-fw fa-cogs"></i> Datos empresa</a>
            </router-link>-->
            <router-link class="button" to="/ubicaciones">
              <a class="collapse-item" v-bind:class="ActivaLink(8)" :key="8" @click="obtenerLinkA(8)"> <i
                  class="fas fa-fw fa-cogs"></i> Ubicaciones</a>
            </router-link>

            <!-- <router-link class="button" to="/gest_inventario">
              <a class="collapse-item" v-bind:class="ActivaLink(6)" :key="6" @click="obtenerLinkA(6)"> <i
                  class="fas fa-fw fa-cogs"></i> Productos</a>
            </router-link>
            <router-link class="button" to="/gest_pedidos">
              <a class="collapse-item" v-bind:class="ActivaLink(7)" :key="7" @click="obtenerLinkA(7)"> <i
                  class="fas fa-fw fa-cogs"></i> Pedidos</a>
            </router-link>
            <router-link class="button" to="/gest_sucursal">
              <a class="collapse-item" v-bind:class="ActivaLink(8)" :key="8" @click="obtenerLinkA(8)"> <i
                  class="fas fa-fw fa-cogs"></i> Sucursales</a>
            </router-link> -->
            <!-- https://ervchldgqphohvvkotag.supabase.co/storage/v1/object/sign/DiskTwinTecnology/ImgUsuarios/MOTOS.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJEaXNrVHdpblRlY25vbG9neS9JbWdVc3Vhcmlvcy9NT1RPUy5wbmciLCJpYXQiOjE3MzE4Njc4MDksImV4cCI6MTczMjQ3MjYwOX0.qEfY5yBMSPd55zzgJdYPmiphc6oXjHlbMbmBLyl6b0M&t=2024-11-17T18%3A26%3A48.194Z -->
            <!-- <a class="collapse-item" @click="click_productos"> Productos</a> -->
            <!-- <router-link class="button" to="/productos">
              <a class="collapse-item">Productos</a>
            </router-link> -->
            <!-- <a class="collapse-item" href="#">Otros</a> -->
            <!-- <a class="collapse-item" href="utilities-border.html">Borders</a>
                        <a class="collapse-item" href="utilities-animation.html">Animations</a>
                        <a class="collapse-item" href="utilities-other.html">Other</a> -->
          </div>
        </div>
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider">

      <!-- Heading -->
      <!-- <div class="sidebar-heading">
                Addons
            </div> -->

      <!-- Nav Item - Pages Collapse Menu -->
      <!-- <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i class="fas fa-fw fa-folder"></i>
                    <span>Pages</span>
                </a>
                <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Login Screens:</h6>
                        <a class="collapse-item" href="login.html">Login</a>
                        <a class="collapse-item" href="register.html">Register</a>
                        <a class="collapse-item" href="forgot-password.html">Forgot Password</a>
                        <div class="collapse-divider"></div>
                        <h6 class="collapse-header">Other Pages:</h6>
                        <a class="collapse-item" href="404.html">404 Page</a>
                        <a class="collapse-item" href="blank.html">Blank Page</a>
                    </div>
                </div>
            </li> -->

      <!-- Nav Item - Charts -->
      <!-- <li class="nav-item">
                <a class="nav-link" href="charts.html">
                    <i class="fas fa-fw fa-chart-area"></i>
                    <span>Charts</span></a>
            </li> -->

      <!-- Nav Item - Tables -->
      <!-- <li class="nav-item">
                <a class="nav-link" href="tables.html">
                    <i class="fas fa-fw fa-table"></i>
                    <span>Tables</span></a>
            </li> -->

      <!-- Divider -->
      <!-- <hr class="sidebar-divider d-none d-md-block"> -->

      <!-- Sidebar Toggler (Sidebar) -->
      <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle" @click="MueveMenu"></button>
      </div>

      <!-- Sidebar Message -->
      <!-- <div class="sidebar-card d-none d-lg-flex">
        <img class="sidebar-card-illustration mb-2" src="../assets/new/img/inventario.svg" alt="...">
        <p class="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!
        </p>
        <a class="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
      </div> -->

    </ul>
    <!-- End of Sidebar -->

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">

      <!-- Main Content -->
      <div id="content">

        <!-- Topbar -->
        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

          <!-- Sidebar Toggle (Topbar) -->
          <button id="sidebarToggleTop" @click="MueveMenu" class="btn btn-link d-md-none rounded-circle mr-3">
            <i class="fa fa-bars"></i>
          </button>

          <!-- Topbar Search -->
          <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div class="input-group">
              <input type="text" class="form-control bg-light border-0 small" placeholder="Que desea buscar..."
                aria-label="Search" aria-describedby="basic-addon2">
              <div class="input-group-append">
                <button :class="'btn btn-' + Cosc_Clar" type="button">
                  <i class="fas fa-search fa-sm"></i>
                </button>
              </div>
            </div>
          </form>

          <!-- Topbar Navbar -->
          <ul class="navbar-nav ml-auto">

            <!-- Nav Item - Search Dropdown (Visible Only XS) -->
            <li class="nav-item dropdown no-arrow d-sm-none">
              <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-search fa-fw"></i>
              </a>
              <!-- Dropdown - Messages -->
              <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                aria-labelledby="searchDropdown">
                <form class="form-inline mr-auto w-100 navbar-search">
                  <div class="input-group">
                    <input type="text" class="form-control bg-light border-0 small" placeholder="Que desea buscar..."
                      aria-label="Search" aria-describedby="basic-addon2">
                    <div class="input-group-append">
                      <button :class="'btn btn-' + Cosc_Clar" type="button">
                        <i class="fas fa-search fa-sm"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>

            <!-- Nav Item - Alerts -->
            <li :class="'nav-item dropdown no-arrow mx-1 ' + showNot" @click="Exp_Not()">
              <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown"
                aria-haspopup="true" :aria-expanded="activaNot">
                <i class="fas fa-bell fa-fw"></i>
                <!-- Counter - Alerts -->
                <span class="badge badge-danger badge-counter">0</span>
              </a>
              <!-- Dropdown - Alerts -->
              <div :class="'dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in ' + showNot"
                aria-labelledby="alertsDropdown">
                <h6 class="dropdown-header">
                  Notificaciones
                </h6>
                <!-- <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="mr-3">
                    <div class="icon-circle bg-primary">
                      <i class="fas fa-file-alt text-white"></i>
                    </div>
                  </div>
                  <div>
                    <div class="small text-gray-500">December 12, 2019</div>
                    <span class="font-weight-bold">A new monthly report is ready to download!</span>
                  </div>
                </a> -->
                <!-- <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="mr-3">
                    <div class="icon-circle bg-success">
                      <i class="fas fa-donate text-white"></i>
                    </div>
                  </div>
                  <div>
                    <div class="small text-gray-500">December 7, 2019</div>
                    $290.29 has been deposited into your account!
                  </div>
                </a> -->
                <!-- <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="mr-3">
                    <div class="icon-circle bg-warning">
                      <i class="fas fa-exclamation-triangle text-white"></i>
                    </div>
                  </div>
                  <div>
                    <div class="small text-gray-500">December 2, 2019</div>
                    Spending Alert: We've noticed unusually high spending for your account.
                  </div>
                </a> -->
                <a class="dropdown-item text-center small text-gray-500" href="#">Mostrar todas las alertas</a>
              </div>
            </li>

            <!-- Nav Item - Messages -->
            <!-- <li class="nav-item dropdown no-arrow mx-1">
                            <a class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-envelope fa-fw"></i>

                                <span class="badge badge-danger badge-counter">7</span>
                            </a>

                            <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="messagesDropdown">
                                <h6 class="dropdown-header">
                                    Message Center
                                </h6>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="dropdown-list-image mr-3">
                                        <img class="rounded-circle" src="../assets/new/img/undraw_profile_1.svg"
                                            alt="...">
                                        <div class="status-indicator bg-success"></div>
                                    </div>
                                    <div class="font-weight-bold">
                                        <div class="text-truncate">Hi there! I am wondering if you can help me with a
                                            problem I've been having.</div>
                                        <div class="small text-gray-500">Emily Fowler · 58m</div>
                                    </div>
                                </a>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="dropdown-list-image mr-3">
                                        <img class="rounded-circle" src="../assets/new/img/undraw_profile_2.svg"
                                            alt="...">
                                        <div class="status-indicator"></div>
                                    </div>
                                    <div>
                                        <div class="text-truncate">I have the photos that you ordered last month, how
                                            would you like them sent to you?</div>
                                        <div class="small text-gray-500">Jae Chun · 1d</div>
                                    </div>
                                </a>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="dropdown-list-image mr-3">
                                        <img class="rounded-circle" src="../assets/new/img/undraw_profile_3.svg"
                                            alt="...">
                                        <div class="status-indicator bg-warning"></div>
                                    </div>
                                    <div>
                                        <div class="text-truncate">Last month's report looks great, I am very happy with
                                            the progress so far, keep up the good work!</div>
                                        <div class="small text-gray-500">Morgan Alvarez · 2d</div>
                                    </div>
                                </a>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="dropdown-list-image mr-3">
                                        <img class="rounded-circle" src=""
                                            alt="...">
                                        <div class="status-indicator bg-success"></div>
                                    </div>
                                    <div>
                                        <div class="text-truncate">Am I a good boy? The reason I ask is because someone
                                            told me that people say this to all dogs, even if they aren't good...</div>
                                        <div class="small text-gray-500">Chicken the Dog · 2w</div>
                                    </div>
                                </a>
                                <a class="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                            </div>
                        </li> -->

            <div class="topbar-divider d-none d-sm-block"></div>

            <!-- Nav Item - User Information -->
            <!-- <li :class="'nav-item dropdown no-arrow ' + showUser" @click="Exp_User"> -->
            <li :class="'nav-item dropdown no-arrow ' + showUser">
              <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown"
                aria-haspopup="true" :aria-expanded="activaUser">
                <span class="mr-2 d-none d-lg-inline text-gray-600 small">{{ userName }}</span>

                <img v-if="imgPerfil" class="img-profile rounded-circle" v-bind:src="imgPerfil">
                <img v-else class="img-profile rounded-circle" src="/src/assets/new/img/undraw_profile.svg">
                <div class="topbar-divider d-none d-sm-block" v-if="esperando"></div>
                <img src="/cargando2.gif" style="width: 40px; height:40px" v-if="esperando"
                  class="img-profile rounded-circle">
              </a>
              <!-- Dropdown - User Information -->
              <div :class="'dropdown-menu dropdown-menu-right shadow animated--grow-in ' + showUser"
                aria-labelledby="userDropdown">
                <a class="dropdown-item" href="#" @click="cargarImagen">
                  <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                  Cambiar imagen de perfil
                </a>
                <!-- <a class="dropdown-item" href="#" data-toggle="modal" data-target="#sendEmail">
                  <i class="fa fa-envelope fa-sm fa-fw mr-2 text-gray-400"></i>
                  Enviar correo electrónico
                </a> -->
                <router-link to="/cmasiva"><a class="dropdown-item" href="#">
                    <i class="fa fa-upload fa-sm fa-fw mr-2 text-gray-400"></i>
                    Carga masiva de datos
                  </a></router-link>

                <!-- <a class="dropdown-item" href="#" @click="Cambia_Color">
                  <i class="fas fa-edit fa-sm fa-fw mr-2 text-gray-400"></i>
                  Oscuro / Default
                </a> -->
                <!-- <a class="dropdown-item" href="#">
                  <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                  Configuración
                </a> -->
                <!-- <a class="dropdown-item" href="#">
                                    <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Activity Log
                                </a> -->
                <div class="dropdown-divider"></div>
                <!--<a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal" @click="salir">-->
                <a class="dropdown-item" @click="salir">
                  <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                  Salir
                </a>
              </div>
            </li>

          </ul>

        </nav>
        <!-- End of Topbar -->

        <!-- Begin Page Content -->
        <div v-if="route.path == '/inicio'">
          <InicioApp :key="Kinicio" @esperar="tiempoEspera()" />
          <!-- <InicioApp /> -->
        </div>
        <div v-if="route.path == '/pedidos'">
          <PedidosApp :key="Kpedidos" />
        </div>
        <div v-if="route.path == '/sucursales'">
          <SucursalApp :key="Ksucursales" />
        </div>
        <div v-if="route.path == '/gest_inventario'">
          <ProductosApp :key="Kgest_inventario" />
        </div>
        <div v-if="route.path == '/inventario'">
          <InventarioApp :key="Kinventario" @consultar="consultar" />
        </div>
        <div v-if="route.path == '/cmasiva'">
          <CargaMasivaApp :key="Kcmasiva" @consultar="consultar" />
        </div>
        <div v-if="route.path == '/categorias'">
          <CategoriasApp :key="Kcategorias" @consultar="consultar" />
        </div>
        <div v-if="route.path == '/user'">
          <UserApp :key="Kuser" />
        </div>
        <div v-if="route.path == '/gest_user'">
          <GestUserApp :key="Kgest_user" />
        </div>
        <div v-if="route.path == '/gest_sucursal'">
          <GetSucursalesApp :key="Kgest_sucursal" />
        </div>
        <div v-if="route.path == '/gest_pedidos'">
          <GestPedidoApp :key="Kgest_pedidos" />
        </div>
        <div v-if="route.path == '/gest_nomencladores'">
          <GestNomencladoresApp :key="Kgest_nomencladores" @actualiza="consultar" />
        </div>
        <div v-if="route.path == '/ubicaciones'">
          <UbicacionesApp :key="Kubicaciones" />
        </div>

        <!-- /.container-fluid -->

      </div>
      <!-- End of Main Content -->

      <!-- Footer -->
      <footer class="sticky-footer bg-white">

        <div class="container my-auto">
          <div class="copyright text-center my-auto">
            <span>Copyright &copy; Todos los derechos reservados. &nbsp; 2024</span>
          </div>
        </div>
      </footer>
      <!-- End of Footer -->

    </div>
    <!-- End of Content Wrapper -->

  </div>
  <!-- End of Page Wrapper -->

  <!-- Scroll to Top Button-->
  <a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
  </a>

  <!-- Logout Modal-->
  <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Salir del sistema</h5>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">Esta seguro que desea salir?</div>
        <div class="modal-footer">
          <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancelar</button>
          <a :class="'btn btn-' + Cosc_Clar" href="/login">Salir</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Logout Modal-->
  <div :class="'modal fade ' + showModal1" id="sendEmail" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" :aria-hidden="activaHide1" :arial-modal="activaModal1" :style="displayModal1">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-info" id="exampleModalLabel">Enviar email</h5>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true" class="text-info">×</span>
          </button>
        </div>
        <div class="modal-body text-center">

          <form id="form">
            <!-- <div class="field">
              <label for="to_name">Para</label>
              <input type="text" name="to_name" id="to_name">
            </div>
            <div class="field">
              <label for="from_name">De</label>
              <input type="text" name="from_name" id="from_name">
            </div>
            <div class="field">
              <label for="Mensaje">Mensaje</label>
              <input type="text" name="Mensaje" id="Mensaje">
            </div>
            <div class="field">
              <label for="Dilo_ConGLOBOS">MyInventory</label>
              <input type="text" name="Dilo_ConGLOBOS" id="Dilo_ConGLOBOS">
            </div>
            <div class="field">
              <label for="reply_to">reply_to</label>
              <input type="text" name="reply_to" id="reply_to">
            </div>
            <div class="field">
              <label for="to_email">to_email</label>
              <input type="text" name="to_email" id="to_email">
            </div>

            <input type="submit" id="button" value="Send Email"> -->
            <div class="row">
              <div class="col-lg-12">
                <label for="para" class="text-info"> Para: </label>
                <input type="text" class="form-control" name="to_name" id="to_name" placeholder="Nombre del cliente:">
              </div><br>
              <div class="col-lg-12">
                <label for="to_email" class="text-info">Dirección de correo electrónico destino:</label>
                <input type="text" class="form-control" name="to_email" id="to_email"
                  placeholder="Dirección de correo electrónico destino:">
              </div>
              <div class="col-lg-12">
                <label for="para" class="text-info" v-show="false">De: </label>
                <input type="text" class="form-control" name="from_name" id="from_name"
                  placeholder="Dirección de correo electrónico del remitente:" value="TwinTecnology" v-show="false">
              </div>
              <div class="col-lg-12">
                <label for="para" class="text-info">Asunto: </label>
                <input type="text" class="form-control" name="Dilo_ConGLOBOS" id="Dilo_ConGLOBOS" placeholder="Asunto:">
              </div>
              <!-- name="from_name" -->
              <hr>
              <div class="col-lg-12">
                <label for="para" class="text-info">Mensaje: </label>
                <textarea class="form-control" name="Mensaje" id="Mensaje" placeholder="Mensaje:"></textarea>
              </div>
              <div class="col-lg-12">
                <label for="reply_to" v-show="false">Reenviar a:</label>
                <input type="text" class="form-control" name="reply_to" id="reply_to" value="no-reply@gmail.com"
                  v-show="false">
              </div>

            </div>
            <div class="modal-footer" style="text-align: center;">
              <!-- <a class="btn btn-info" @click="AColumnas">Aceptar</a> -->
              <button class="btn btn-secondary btn-sm" type="submit" id="button" @click="enviarEmail()">Enviar</button>
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

  <!-- </body> -->
</template>

<script setup>
import InicioApp from '@/components/InicioApp.vue';
import axios from 'axios';
import InventarioApp from '@/components/InventarioApp.vue';
import PedidosApp from '@/components/PedidosApp.vue';
import router from '@/router';
import { ref } from 'vue';
import { useRoute } from 'vue-router'
import { onMounted } from 'vue';
import SucursalApp from '@/components/SucursalApp.vue';
import ProductosApp from '@/components/ProductosApp.vue';
import Swal from 'sweetalert2';
import UserApp from '@/components/UserApp.vue';
import GestUserApp from '@/components/GestUserApp.vue';
import GetSucursalesApp from '@/components/GetSucursalesApp.vue';
import GestPedidoApp from '@/components/GestPedidoApp.vue';
import GestNomencladoresApp from '@/components/GestNomencladoresApp.vue';
import CargaMasivaApp from '@/components/CargaMasivaApp.vue';
import CategoriasApp from '@/components/CategoriasApp.vue';
import emailjs from 'emailjs-com';
import * as XLSX from 'xlsx';
import { useAlertsStore } from '@/components/ComunicacionApp';
import UbicacionesApp from '@/components/UbicacionesApp.vue';
import { obtenerDatos } from '@/components/service/servicio';
// import { Input, TextArea } from "@progress/kendo-vue-inputs";
// import { Button } from "@progress/kendo-vue-buttons";

const Kinicio = ref(0);
const Kpedidos = ref(0);
const Kinventario = ref(0);
// const Kproductos = ref(0);
const Ksucursales = ref(0);
const Kcategorias = ref(0)

const tiempoEspera = async () => {
  // console.log(n)
}

const esperando = ref(false);

// const activalo = ref('');

const link = ref(0);

const Cosc_Clar = ref('info');

const Ctoggled = ref('');

const enviarEmail = async () => {
  const btn = document.getElementById('button');

  emailjs.init('0F57mxueQF0of_Jav');
  document.getElementById('form')
    .addEventListener('submit', function (event) {
      event.preventDefault();

      btn.value = 'Sending...';

      const serviceID = 'default_service';
      const templateID = 'template_4dn9ixp';

      emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          successFull("Correo enviado.", "top-end")
          // alert('Sent!');
        }, (err) => {
          btn.value = 'Send Email';
          ErrorFull(err, "top-start")
          // alert(JSON.stringify(err));
        });
    });
}

// const bodyLogin = document.getElementById('page-top');

// const ulBody = document.getElementById('accordionSidebar');

// const datosPrueba = ref([]);

const listado = ref([]);

const listadoArticulos = ref([])

const listadoDepartamentos = ref([])

let listadoSucursales = ref([]);

// const newListado = ref([])

// const newListadoSucursal = ref([])

const collapsed = ref('collapsed');

const activa = ref(false);

const show = ref('')

// const collapsed1 = ref('collapsed');

// const activa1 = ref(false);

// const show1 = ref('')

const collapsed2 = ref('collapsed');

const activa2 = ref(false);

const show2 = ref('')

const activaUser = ref(false);

const showUser = ref('');

const activaNot = ref(false);

const showNot = ref('');

const ipPublica = ref('192.168.121.154');

// let cargado = ref(false);

// let datosPaginados = ref([]);

// let datosSinPaginar = ref([]);

// let buscando = ref('');

// let editar = ref(false);

// let id = ref('');

// let cantidad = ref(0);

// let elementPagina = ref(5);

// let inicio = ref(0);

// let fin = ref(0);

// let paginaActual = ref(1);

// const Exp_User = () => {
//   if (activaUser.value == false) {
//     activaUser.value = true;
//     showUser.value = 'show'
//   } else {
//     activaUser.value = false;
//     showUser.value = ''
//   }
// }

const Exp_Not = () => {
  if (activaNot.value == false) {
    activaNot.value = true;
    showNot.value = 'show'
  } else {
    activaNot.value = false;
    showNot.value = ''
  }
}

const obtenerLinkA = (alink) => {
  link.value = alink;
  collapsed.value = 'collapsed';
  activa.value = false;
  show.value = '';
  collapsed2.value = 'collapsed';
  activa2.value = false;
  show2.value = '';

}

const MueveMenu = () => {
  if (Ctoggled.value == '') {
    Ctoggled.value = 'toggled';
  } else {
    Ctoggled.value = '';
  }
}

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

// Expandir o no las opciones del menu
// const Exp_Consultar = () => {
//   if (collapsed.value == "") {
//     collapsed.value = 'collapsed';
//     activa.value = false;
//     show.value = '';

//     collapsed1.value = 'collapsed';
//     activa1.value = false;
//     show1.value = '';

//     collapsed2.value = 'collapsed';
//     activa2.value = false;
//     show2.value = '';

//   } else {
//     collapsed.value = '';
//     activa.value = true;
//     show.value = 'show';

//     collapsed1.value = 'collapsed';
//     activa1.value = false;
//     show1.value = '';

//     collapsed2.value = 'collapsed';
//     activa2.value = false;
//     show2.value = '';
//   }
// }

// const Exp_Gestion = () => {
//   if (collapsed1.value == '') {
//     collapsed1.value = 'collapsed';
//     activa1.value = false;
//     show1.value = '';

//     collapsed.value = 'collapsed';
//     activa.value = false;
//     show.value = '';

//     collapsed2.value = 'collapsed';
//     activa2.value = false;
//     show2.value = '';
//   } else {
//     collapsed1.value = '';
//     activa1.value = true;
//     show1.value = 'show';

//     collapsed2.value = 'collapsed';
//     activa2.value = false;
//     show2.value = '';

//     collapsed.value = 'collapsed';
//     activa.value = false;
//     show.value = '';
//   }
// }

// const Exp_Nomenc = () => {
//   if (collapsed2.value == '') {
//     collapsed2.value = 'collapsed';
//     activa2.value = false;
//     show2.value = '';

//     collapsed1.value = 'collapsed';
//     activa1.value = false;
//     show1.value = '';

//     collapsed.value = 'collapsed';
//     activa.value = false;
//     show.value = '';
//   } else {
//     collapsed2.value = '';
//     activa2.value = true;
//     show2.value = 'show';

//     collapsed1.value = 'collapsed';
//     activa1.value = false;
//     show1.value = '';

//     collapsed.value = 'collapsed';
//     activa.value = false;
//     show.value = '';
//   }
// }

const ActivaLink = (valor) => {
  // if (valor != 1) {
  // collapsed.value = 'collapsed';
  // activa.value = false;
  // show.value = '';
  // }
  if (valor == link.value) {
    return 'active'
  } else {
    return ''
  }
}

// const click_inicio = () => {
//   window.location = '/inicio';
// }

// const click_pedidos = () => {
//   window.location = '/pedidos';
// }

// const click_inventario = () => {
//   window.location = '/inventario';
// }

// const click_sucursales = () => {
//   window.location = '/sucursales';
// }

// const click_productos = () => {
//   window.location = '/productos';
// }

// onUpdated(() => {
//   // text content should be the same as current `count.value`
//   console.log('Actual')
//   Kinicio.value += 1;
// })

const almacenDatosProductos = (Lista) => {
  localStorage.removeItem('ListadoCacheProductos');
  const parsed = JSON.stringify(Lista);
  localStorage.setItem('ListadoCacheProductos', parsed);
}

const almacenDatosSucursales = (Lista) => {
  localStorage.removeItem('ListadoCacheSucursal');
  const parsed = JSON.stringify(Lista);
  localStorage.setItem('ListadoCacheSucursal', parsed);
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

const almacenDatosCodigos = (Lista) => {
  localStorage.removeItem('ListadoCacheCodigos');
  const parsed = JSON.stringify(Lista);
  localStorage.setItem('ListadoCacheCodigos', parsed);
}

const errors = ref();

// Funcion q esta escuchando las llamadas de los demas hijos

const comunicador = useAlertsStore();
comunicador.$onAction(() => {
  console.log("LLamaron")
})
// useAlertsStore.onAction(() => {
//
// })
// FIN

const consultarPrincipal = async () => {
  // if (cargado.value == false) {
  esperando.value = true;
  // PRODUCTOS
  await axios.get(`https://` + ipPublica.value + `/fullstack/public/productos`)
    .then((response) => {

      if (response.data.data == null) {

      } else {
        // console.log(response.data.data.meta.count_data)
        listado.value = response.data.data;
        almacenDatosProductos(listado.value);
        localStorage.setItem("Carg_datP", '1');
        localStorage.setItem("Wait", '0');
        esperando.value = false;
        Kinicio.value = Kinicio.value + 1;
        // localStorage.setItem("Wait", '0');
      }
    }).catch((error) => {
      if (error.response.status === 500) {
        errors.value = error.response.status;
      }
      esperando.value = false;
    })

  // Departamentos
  axios.get(`https://` + ipPublica.value + `/fullstack/public/departamentos`)
    .then((response) => {
      if (response.data.data == null) {

      } else {
        esperando.value = true;
        listadoDepartamentos.value = response.data.data;
        almacenDatosDepartamentos(listadoDepartamentos.value);
        localStorage.setItem("Carg_datD", '1');
        localStorage.setItem("Wait2", '0');
        esperando.value = false;
        Kinicio.value = Kinicio.value + 1;
      }
    }).catch((error) => {
      if (error.response.status === 500) {
        errors.value = error.response.status;
      }
      esperando.value = false;
    })

  // Articulos
  axios.get(`https://` + ipPublica.value + `/fullstack/public/articulos`)
    .then((response) => {
      if (response.data.data == null) {

      } else {
        esperando.value = true;
        listadoArticulos.value = response.data.data;
        almacenDatosArticulos(listadoArticulos.value);
        localStorage.setItem("Carg_datA", '1');
        localStorage.setItem("Wait3", '0');
        esperando.value = false;
        Kinicio.value = Kinicio.value + 1;
      }

    }).catch((error) => {
      if (error.response.status === 500) {
        errors.value = error.response.status;
      }
      esperando.value = false;
    });

  // Sucursales
  axios.get(`https://` + ipPublica.value + `/fullstack/public/sucursales`)
    .then((response1) => {
      if (response1.data.data == null) {

      } else {
        esperando.value = true;
        listadoSucursales.value = response1.data.data;
        almacenDatosSucursales(listadoSucursales.value);
        localStorage.setItem("Carg_datS", '1');
        localStorage.setItem("Wait", '0');
        // Kinicio.value = Kinicio.value + 1;
        successFull("Datos cargados satisfactoriamente.", "top-end")
        esperando.value = false;
      }

    }).catch((error) => {
      if (error.response.status === 500) {
        ErrorFull("Problemas de conexión, verificaremos en otro momento.", "top-end");
        esperando.value = false;
        localStorage.setItem("Carg_dat", '0');
      }
      esperando.value = false;
    });

  // MAGNITUDES
  // await axios.get(`https://` + ipPublica.value + `/fullstack/public/magnitudes`)
  //   .then((response) => {
  //     listadoMagnitudes.value = response.data.data;
  //     almacenDatosArticulos(listadoMagnitudes.value);
  //     // localStorage.setItem("Carg_dat", '1');
  //     localStorage.setItem("Carg_datM", '1');
  //     // Kgest_nomencladores.value = Kgest_nomencladores.value + 1;

  //   }).catch((error) => {
  //     if (error.response.status === 500) {
  //       errors.value = error.response.status;
  //     }
  //   })

  // Medidas
  // await axios.get(`https://` + ipPublica.value + `/fullstack/public/medidas`)
  //   .then((response) => {
  //     listadoMedidas.value = response.data.data;
  //     almacenDatosUnidades(listadoMedidas.value);
  //     // cargado.value = true;
  //     localStorage.setItem("Carg_datMe", '1');
  //     // Kgest_nomencladores.value = Kgest_nomencladores.value + 1;
  //   }).catch((error) => {
  //     if (error.response.status === 500) {
  //       errors.value = error.response.status;
  //     }
  //     // loading.value = false
  //   });
}

const consultar = async (n) => {
  //Productos
  if (n == 1) {
    await axios.get(`http://` + ipPublica.value + `/fullstack/public/productos`)
      .then((response) => {
        listado.value = response.data.data;
        almacenDatosProductos(listado.value);
        // cargado.value = true;
        Kinventario.value = Kinventario.value + 1;
      });

  }
  if (n == 2) {
    // console.log()
    // console.log("Excel")
    // Kinventario.value = Kinventario.value + 1;
  }
  if (n == 3) {
    // console.log("Imprimir")
  }

  if (n == 4) {
    // console.log("Carga masiva")
  }

  if (n == 5) { // Actualizar los departamentos
    // console.log("Departamentos")
    await axios.get(`https://` + ipPublica.value + `/fullstack/public/departamentos`)
      .then((response) => {
        listado.value = response.data.data;
        almacenDatosDepartamentos(listado.value);
        // cargado.value = true;
        Kcategorias.value = Kcategorias.value + 1;
      });
  }

  if (n == 6) { // Actualizar los articulos
    // console.log("Artculos")
    await axios.get(`https://` + ipPublica.value + `/fullstack/public/articulos`)
      .then((response) => {
        listado.value = response.data.data;
        almacenDatosArticulos(listado.value);
        // cargado.value = true;
        Kcategorias.value = Kcategorias.value + 1;
      });
  }

  if (n == 7) { // Actualizar los magnitudes
    // console.log("Magnitudes")
    await axios.get(`https://` + ipPublica.value + `/fullstack/public/magnitudes`)
      .then((response) => {
        listado.value = response.data.data;
        almacenDatosMagnitudes(listado.value);
        // cargado.value = true;
        // Kgest_nomencladores.value = Kgest_nomencladores.value + 1;
      });
  }

  if (n == 8) { // Actualizar los medidas
    // console.log("medidas")
    await axios.get(`https://` + ipPublica.value + `/fullstack/public/medidas`)
      .then((response) => {
        listado.value = response.data.data;
        almacenDatosUnidades(listado.value);
        // cargado.value = true;
        // Kgest_nomencladores.value = Kgest_nomencladores.value + 1;
      });
  }



  // } else {
  //   almacenDatosProductos(listado.value);
  //   cargado.value = true;
  // }

}

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

// const obtenerListadoLimpio = () => {
//   let i = 0;
//   if (cargado.value = false) {
//     newListado.value = [];
//     for (let index = 0; index < listado.value.length; index++) {
//       const element = listado.value[index];
//       if (element.attributes.deleted_at == null) {
//         newListado.value[i] = element;
//         i++;
//       }
//     }
//     datosSinPaginar.value = newListado.value;
//     cantidad.value = Math.ceil(newListado.value.length / elementPagina.value);
//     obtenerPagina(1);
//     cargado.value = true;
//   } else {
//     newListado.value = []
//     for (let index = 0; index < listado.value.length; index++) {
//       const element = listado.value[index];
//       if (element.attributes.deleted_at == null) {
//         newListado.value[i] = element;
//         i++;
//       }
//     }
//     datosSinPaginar.value = newListado.value;
//     cantidad.value = Math.ceil(newListado.value.length / elementPagina.value);
//     obtenerPagina(1);
//   }

// }

// const consultarSucursales = async () => {
//   // if (cargado.value == false) {
//   let response = await axios.get(`http://` + ipPublica.value + `/fullstack/public/sucursals`)
//     .then((response) => {
//       listadoSucursales.value = response.data.data;
//       // console.log(response.data)
//       // datosSinPaginar.value = response.data.data;
//       // cantidad.value = Math.ceil(response.data.data.length / elementPagina.value);
//       // obtenerPagina(1);
//       // cargado.value = true;
//       // router.go();
//       almacenDatosSucursales(listadoSucursales.value);
//       listadoSucursales = obtenerListadoLimpioSucursales();

//     });

//   esperando.value = false;
//   // }
//   // EsperarTiempo();

// }

// watch(localStorage.getItem('Carg_dat'), async (x, y) => {
//   console.log("Nuevo valor de Carg_dat" + x)
//   if (x == '0') {
//     console.log("Cargando porq actualizaron")
//     let dato = await consultarPrincipal()
//       .then((dato) => {
//         esperando.value = false;
//         console.log("Cargado TODOO")
//         localStorage.setItem("Carg_dat", '1');
//         Kinicio.value = Kinicio.value + 1;
//         // console.log(Kinventario.value)
//       });
//   }
// })

onMounted(async () => {
  // console.log("Montado")
  if (localStorage.getItem('userName')) {
    ipPublica.value = localStorage.getItem('Host_back');
    // if (localStorage.getItem('Wait') == '0') {
    if (localStorage.getItem('Carg_datP') == '0') {
      Ctoggled.value = 'toggled';
      // await consultarPrincipal()
      // PRODUCTOS
      esperando.value = true;
      listado.value = await obtenerDatos(1);
      console.log(listado.value)
      almacenDatosProductos(listado.value);
      localStorage.setItem("Carg_datP", '1');
      localStorage.setItem("Wait", '0');
      // DEPARTAMENTOS
      listadoDepartamentos.value = await obtenerDatos(6);
      almacenDatosDepartamentos(listadoDepartamentos.value);
      localStorage.setItem("Carg_datD", '1');
      localStorage.setItem("Wait2", '0');
      //ARTICULOS
      listadoArticulos.value = await obtenerDatos(5);
      almacenDatosArticulos(listadoArticulos.value);
      localStorage.setItem("Carg_datA", '1');
      localStorage.setItem("Wait3", '0');
      esperando.value = false;
      Kinicio.value = Kinicio.value + 1;
    } else if (localStorage.getItem('Wait') != '0') {
      localStorage.removeItem('Carg_datP');
      localStorage.setItem('Carg_datP', '0');
      onMounted();
    }
    Ctoggled.value = 'toggled';
  } else {
    router.push('/login');
  }
})

// const Cambia_Color = () => {
//   if (Cosc_Clar.value == 'info') {
//     Cosc_Clar.value = 'dark';
//   } else {
//     Cosc_Clar.value = 'info';
//   }
// }

// const Vpaginas = ref(false);

// const paginas = () => {
//   if (route.path == "/inicio") {
//     Vpaginas.value = 1;
//   }
//   if (route.path == "/inventario") {
//     Vpaginas.value = 2;
//   }
//   if (route.path == "/pedidos") {
//     Vpaginas.value = 3;
//   }
//   if (route.path == "/sucursales") {
//     Vpaginas.value = 4;
//   }
//   if (route.path == "/productos") {
//     Vpaginas.value = 5;
//   }
// }

const route = useRoute();

const userName = ref(localStorage.getItem("userName"));

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
    timer: 1500,
    //timerProgressBar: true,
  })
  toast.fire({
    icon: "error",
    title: mensaje
  })
}

const salir = () => {
  Swal.fire({
    title: "Salir del sistema!!!",
    text: "Está seguro que desea salir del sistema.",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Salir"
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem('userName');
      localStorage.removeItem('ListadoCache');
      localStorage.removeItem('ListadoCacheUnidades');
      localStorage.removeItem('ListadoCacheMagnitudes');
      // localStorage.removeItem('ListadoCacheMedidas');
      localStorage.removeItem('ListadoCacheSucursal');
      localStorage.removeItem('Carg_dat');
      // localStorage.setItem('ListadoCache', []);
      // localStorage.setItem('ListadoCacheSucursal', []);
      localStorage.removeItem('Carg_datA'); // Articulos
      localStorage.removeItem('Carg_datD'); // Departamentos
      localStorage.removeItem('Carg_datMe'); // Unidades de medida
      localStorage.removeItem('Carg_datM'); // Magitudes
      localStorage.removeItem('Carg_datP'); // Productos
      localStorage.removeItem('Carg_datS'); // Sucursales
      localStorage.removeItem('Carg_datU'); // Ubicaciones
      localStorage.removeItem('Host_back'); // IPPublica
      localStorage.clear();
      router.push('/login')
    }
  });
}

let imgPerfil = ref("");

const cargarImagen = async () => {
  const { value: file } = await Swal.fire({
    title: "Seleciona una imagen",
    input: "file",
    inputAttributes: {
      "accept": "image/*",
      "aria-label": "Selecciona una imagen..."
    }
  });
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      // Swal.fire({
      //   title: "Imagen cargada",
      //   imageUrl: e.target.result,
      //   imageAlt: "The uploaded picture",
      // });
      imgPerfil.value = e.target.result;
      successFull("Imagen cambiada satisfactoriamente.", "top-end");
      // console.log(e)
    };
    reader.readAsDataURL(file);
    // successFull("Imagen cambiada satisfactoriamente.", "top-start");
  }
}

</script>

<style lang="scss" scoped></style>
