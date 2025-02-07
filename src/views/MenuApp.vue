<template>
  <div id="wrapper" @contextmenu.prevent="onContextMenu" @mousemove="resetTimer" @keydown="resetTimer"
    @click="resetTimer">

    <!-- <div @contextmenu.prevent="onContextMenu"> Haz clic derecho en esta área para ver el menú contextual. </div> -->

    <ContextMenu v-model:show="showMENU" :options="optionsComponent">
      <context-menu-item @click="handleOption('Opción 1')">

        <i class="fa fa-refresh text-info" aria-hidden="true"></i> Acualizar datos
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

      </context-menu-item>

      <context-menu-item @click="handleOption('Opción 2')">

        <i class="fa fa-home text-info" aria-hidden="true"></i> Página principal
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

      </context-menu-item>
      <!-- <context-menu-sperator /> -->
      <context-menu-item @click="handleOption('Opción 4')">

        <i class="fa fa-user text-info" aria-hidden="true"></i> Ajustes de perfil
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

      </context-menu-item>

      <context-menu-item @click="handleOption('Opción 3')">

        <i class="fa fa-upload text-info" aria-hidden="true"></i> Carga masiva de datos&nbsp;&nbsp;

      </context-menu-item>

      <!-- <context-menu-item @click="handleOption('Opción 5')">

        <i class="fa fa-cog text-info" aria-hidden="true"></i> Configurar sitio
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

      </context-menu-item> -->
      <context-menu-sperator />
      <context-menu-group label="INVENTARIO">
        <context-menu-item @click="handleOption('Opción 6')">
          <i class="fa fa-list-ul text-info" aria-hidden="true"></i>&nbsp; Productos
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </context-menu-item>
        <context-menu-item @click="handleOption('Opción 7')">
          <i class="fa fa-list-alt text-info" aria-hidden="true"></i>&nbsp; Clasificaciones
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </context-menu-item>
        <context-menu-item @click="handleOption('Opción 8')">
          <i class="fa fa-ruler-horizontal text-info" aria-hidden="true"></i>Magnitudes
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </context-menu-item>
        <context-menu-item @click="handleOption('Opción 9')">
          <i class="fa fa-history text-info" aria-hidden="true"></i> Auditoría
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </context-menu-item>
        <context-menu-item @click="handleOption('Opción 10')">
          <i class="fa fa-map-marker-alt text-info" aria-hidden="true"></i> Ubicaciones
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </context-menu-item>
        <!-- </context-menu-group> -->
      </context-menu-group>

      <!-- <context-menu-item @click="handleOption('Opción 2')">

            <i class="fas fa-user"></i> Opción 2

          </context-menu-item>

          <context-menu-item label="Opción 3" @click="handleOption('Opción 3')">

            <i class="fas fa-user"></i> Opción 3

          </context-menu-item> -->

    </ContextMenu>

    <!-- <q-table title="Treats" :rows="rows" :columns="columns" row-key="name"></q-table> -->



    <!-- Sidebar -->

    <ul :class="'navbar-nav bg-gradient-' + Cosc_Clar + ' sidebar sidebar-dark accordion ' + Ctoggled"
      id="accordionSidebar">



      <!-- Sidebar - Brand -->

      <a class="sidebar-brand d-flex align-items-center justify-content-center" href="#">

        <div class="sidebar-brand-icon rotate-n-15">

          <!-- <i class="fas fa-laugh-wink"></i> -->

          <img width="40" height="40" src="/icono.png" alt="clipboard-list" />

        </div>

        <!-- <img class="sidebar-card-illustration mb-2" src="../assets/new/img/inventario.jpg" style="width: 30px; height:30px" alt="..."> -->

        <div class="sidebar-brand-text mx-3">MyInventory <sup>1.0</sup></div>

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

            <router-link class="button" to="/inventario" @click="obtenerLinkA(1)">

              <a class="collapse-item" v-bind:class="ActivaLink(1)" :key="1"><i class="fa fa-list-ul"></i>

                Productos</a>

            </router-link>

            <router-link class="button" to="/categorias" @click="obtenerLinkA(2)">

              <a class="collapse-item" v-bind:class="ActivaLink(2)" :key="2"> <i class="fa fa-list-alt"></i>

                Clasificación</a>

            </router-link>

            <!-- <router-link class="button" to="/categorias" @click="obtenerLinkA(3)">

                  <a class="collapse-item" v-bind:class="ActivaLink(3)" :key="3"> <i

                      class="far fa-check-circle"></i>

                    Etiquetas</a>

                </router-link> -->

            <router-link class="button" to="/gest_nomencladores" @click="obtenerLinkA(9)">

              <a class="collapse-item" v-bind:class="ActivaLink(9)" :key="9"> <i class="fa fa-ruler-horizontal"></i>

                Magnitudes</a>

            </router-link>

            <!-- <hr class="sidebar-divider"> -->

            <router-link class="button" to="/auditoria" @click="obtenerLinkA(10)">

              <a class="collapse-item" v-bind:class="ActivaLink(10)" :key="10"> <i class="fa fa-history"></i>

                Auditoría</a>

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

        <a :class="'nav-link ' + Store.collapsed2" href="#" data-toggle="collapse" data-target="#collapseUtilities"
          :aria-expanded="Store.activa2" aria-controls="collapseUtilities">

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

            <router-link class="button" to="/ubicaciones" @click="obtenerLinkA(8)">

              <a class="collapse-item" v-bind:class="ActivaLink(8)" :key="8"> <i class="fa fa-map-marker-alt"></i>

                Ubicaciones</a>

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

              <input type="text" class="form-control bg-light border-0 small" v-model="paginaBuscar" @keyup="buscarPag"
                placeholder="Que desea buscar..." aria-label="Search" aria-describedby="basic-addon2">

              <div class="input-group-append">

                <button :class="'btn btn-' + Cosc_Clar" type="button" @click="buscarPag">

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
                      aria-label="Search" aria-describedby="basic-addon2" v-model="paginaBuscar" @keyup="buscarPag">

                    <div class="input-group-append">

                      <button :class="'btn btn-' + Cosc_Clar" type="button" @click="buscarPag">

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

                <a class="dropdown-item text-center small text-gray-500">Mostrar todas las alertas</a>

              </div>

            </li>

            <!-- <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left"

                  data-bs-custom-class="custom-tooltip" data-bs-title="This top tooltip is themed via CSS variables.">

                  Custom tooltip

                </button> -->



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

                <!-- <div class="topbar-divider d-none d-sm-block" v-if="esperando"></div>

                    <img src="/cargando2.gif" style="width: 40px; height:40px" v-if="esperando"

                      class="img-profile rounded-circle"> -->

              </a>

              <!-- Dropdown - User Information -->

              <div :class="'dropdown-menu dropdown-menu-right shadow animated--grow-in ' + showUser"
                aria-labelledby="userDropdown">

                <router-link to="/perfil">
                  <a class="dropdown-item">
                    <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                    Ajustes de perfil
                  </a>
                </router-link>

                <!-- <a class="dropdown-item">

                  <i class="fas fa-cog fa-sm fa-fw mr-2 text-gray-400"></i>

                  Configurar sitio

                </a> -->

                <!-- <a class="dropdown-item" href="#" data-toggle="modal" data-target="#sendEmail">

                      <i class="fa fa-envelope fa-sm fa-fw mr-2 text-gray-400"></i>

                      Enviar correo electrónico

                    </a> -->

                <router-link to="/cmasiva">

                  <button class="dropdown-item">

                    <i class="fa fa-upload fa-sm fa-fw mr-2 text-gray-400"></i>

                    Carga masiva de datos

                  </button>

                </router-link>



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

                <!-- <div class="spinner-border text-success" role="status">

                      <span class="visually-hidden"></span>

                    </div> -->



                <!--<a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal" @click="salir">-->

                <a class="dropdown-item" style="cursor: pointer;" @click="salir">

                  <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>

                  Cerrar sesión

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

        <div v-if="route.path == '/perfil'">

          <PerfilApp :key="Kperfil" @consultar="consultar" />

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

        <div v-if="route.path == '/auditoria'">

          <AuditoriaApp :key="Kauditoria" />

        </div>



        <!-- /.container-fluid -->



      </div>

      <!-- End of Main Content -->



      <!-- Footer -->
      <FloatingButton class="d-md-none" @click="handleFloatingButtonClick(event)">
        <i class="fa fa-bars"></i>
      </FloatingButton>

      <footer class="sticky-footer bg-white">



        <div class="container my-auto">

          <div class="copyright text-center my-auto">

            <span>TwinTechnology &copy;<br> Todos los derechos reservados. &nbsp; 2025</span>

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

  <!-- <div :class="'modal fade ' + showModal1" id="sendEmail" tabindex="-1" role="dialog"
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

              <button class="btn btn-secondary btn-sm" type="submit" id="button" @click="enviarEmail()">Enviar</button>

            </div>

          </form>

        </div>



      </div>

    </div>

  </div> -->



  <!-- </body> -->
</template>

<script setup>
import InicioApp from '@/components/InicioApp.vue';
// import axios from 'axios';
import InventarioApp from '@/components/InventarioApp.vue';
import PedidosApp from '@/components/PedidosApp.vue';
import router from '@/router';
import { computed, onBeforeMount, onUnmounted, ref, watch, watchEffect } from 'vue';
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
import UbicacionesApp from '@/components/UbicacionesApp.vue';
import { useStoreAxios } from '@/store/AxiosStore';
import { obtenerDatos } from '../components/helper/useAxios';
import AuditoriaApp from '@/components/AuditoriaApp.vue';

import { ContextMenu, ContextMenuItem } from '@imengyu/vue3-context-menu';
import PerfilApp from '@/components/PerfilApp.vue';
import FloatingButton from '@/components/FloatingButton.vue';
import { event } from 'jquery';
import { error } from 'jquery';
// import { useQuasar, useDialogPluginComponent } from 'quasar';

// const { dialogRef, onDialogHide, onDialogOK, onDialogCancel, qTable } = useDialogPluginComponent()

// Nuevo quasar

// Fin quasar

// TIEMPO DE INACTIVIDAD DE LA PAGINA

// const inactivityTimer = ref(null);

// const startInactivityTimer = () => {
//   inactivityTimer.value = setTimeout(handleInactivity, Store.tiempoInactivo * 60 * 1000); // 10 minutos
// }
// const resetTimer = () => {
//   clearInactivityTimer();
//   startInactivityTimer();
// }
// const clearInactivityTimer = () => {
//   if (inactivityTimer.value) {
//     clearTimeout(inactivityTimer.value);
//     inactivityTimer.value = null;
//   }
// }

// const handleInactivity = () => {
//   // Acción a tomar cuando se detecte inactividad
//   // alert('No has interactuado con la página en 10 minutos. La sesión se cerrará.');
//   // ErrorFull('No has interactuado con la página en 10 minutos. La sesión se cerrará.', "top-start")
//   Swal.fire({
//     title: "Alerta de seguridad!!!",
//     text: "No has interactuado con la página en 10 minutos. La sesión se cerrará.",
//     icon: "warning",
//     allowOutsideClick: false,
//     // showCancelButton: true,
//     confirmButtonColor: "#3085d6",
//     cancelButtonColor: "#d33",
//     confirmButtonText: "Aceptar",
//     // cancelButtonText: "Cancelar"
//   }).then((result) => {
//     if (result.isConfirmed) {
//       Store.limpiarDatos()
//       localStorage.removeItem('Carg_datA'); // Articulos
//       localStorage.removeItem('Carg_datD'); // Departamentos
//       localStorage.removeItem('Carg_datMe'); // Unidades de medida
//       localStorage.removeItem('Carg_datM'); // Magitudes
//       localStorage.removeItem('Carg_datP'); // Productos
//       localStorage.removeItem('Carg_datS'); // Sucursales
//       localStorage.removeItem('Carg_datU'); // Ubicaciones
//       localStorage.removeItem('Carg_datE'); // Etiquetas
//       localStorage.removeItem('Carg_datL'); // Lotes
//       localStorage.removeItem('Carg_datMo'); // Monedas
//       localStorage.removeItem('Carg_datIM'); // Imagenes
//       localStorage.removeItem('Carg_datEP'); // Etiqueta productos
//       localStorage.removeItem('Carg_datAu'); // Auditoria
//       localStorage.clear();
//       Store.$reset();
//       // Aquí puedes redirigir al usuario, cerrar la sesión, etc.
//       router.push('/login')
//     }
//   });
//   // router.push('/login'); // Redirige a la página de cierre de sesión
// }

// const show = ref('');
const handleFloatingButtonClick = (event) => {
  // Lógica para manejar el clic del botón flotante
  // alert('¡Botón flotante clickeado!');
  // onContextMenu(event)
  optionsComponent.value.x = window.innerWidth / 3;
  optionsComponent.value.y = 74;
  showMENU.value = true;
}

const optionsComponent = ref({ zIndex: 3, minWidth: 230, x: 0, y: 0, });
const showMENU = ref(false);
const onContextMenu = (event) => {
  collapsed.value = 'collapsed';
  activa.value = false;
  show.value = '';
  collapsed2.value = 'collapsed';
  activa2.value = false;
  show2.value = '';
  event.preventDefault();
  optionsComponent.value.x = event.clientX;
  optionsComponent.value.y = event.clientY;
  showMENU.value = true;
  // link.value = alink;
};

const itemsAuditorias1 = ref([])
const itemsOperaciones1 = ref([])
const itemsMedidas1 = ref([])
const itemsMagnitud1 = ref([])

const itemsDeparta1 = ref([])

const itemsMoneda1 = ref([])

const itemsEtiqueta1 = ref([])

const itemsEtiquetaProductos1 = ref([])

const itemsProductos1 = ref([])

const itemsImagenes1 = ref([])

const itemsArticulos1 = ref([])

const itemsSucursales1 = ref([])

const itemsUbicaciones1 = ref([])

const itemsMedida1 = ref([])

const itemsLotes1 = ref([])

const actualizar = async () => {
  Ctoggled.value = 'toggled';
  editando.value = true;
  Store.limpiarDatos()
  localStorage.removeItem('Carg_datA'); // Articulos
  localStorage.removeItem('Carg_datD'); // Departamentos
  localStorage.removeItem('Carg_datMe'); // Unidades de medida
  localStorage.removeItem('Carg_datM'); // Magitudes
  localStorage.removeItem('Carg_datP'); // Productos
  localStorage.removeItem('Carg_datS'); // Sucursales
  localStorage.removeItem('Carg_datU'); // Ubicaciones
  localStorage.removeItem('Carg_datE'); // Etiquetas
  localStorage.removeItem('Carg_datL'); // Lotes
  localStorage.removeItem('Carg_datMo'); // Monedas
  localStorage.removeItem('Carg_datIM'); // Imagenes
  localStorage.removeItem('Carg_datEP'); // Etiqueta productos
  localStorage.removeItem('Carg_datAu'); // Auditoria
  localStorage.removeItem('Carg_datPe'); // Personas
  localStorage.setItem('Carg_datA', '0'); // Articulos
  localStorage.setItem('Carg_datD', '0'); // Departamentos
  localStorage.setItem('Carg_datMe', '0'); // Unidades de medida
  localStorage.setItem('Carg_datM', '0'); // Magitudes
  localStorage.setItem('Carg_datP', '0'); // Productos
  localStorage.setItem('Carg_datS', '0'); // Sucursales
  localStorage.setItem('Carg_datU', '0'); // Ubicaciones
  localStorage.setItem('Carg_datE', '0'); // Etiquetas
  localStorage.setItem('Carg_datL', '0'); // Lotes
  localStorage.setItem('Carg_datMo', '0'); // Monedas
  localStorage.setItem('Carg_datIM', '0'); // Imagenes
  localStorage.setItem('Carg_datEP', '0'); // Etiqueta productos
  localStorage.setItem('Carg_datAu', '0'); // Auditorias
  localStorage.setItem('Carg_datPe', '0'); // Personas
  // beforeRouteLeave()
  if (localStorage.getItem('userName')) {
    Kinicio.value = Kinicio.value + 1;
    Kinventario.value = Kinventario.value + 1;
    Kgest_inventario.value = Kgest_inventario.value + 1;
    Kgest_nomencladores.value = Kgest_nomencladores.value + 1;
    Kcmasiva.value = Kcmasiva.value + 1;
    Kperfil.value = Kperfil.value + 1;
    Kauditoria.value = Kauditoria.value + 1;
    Kubicaciones.value = Kubicaciones.value + 1;
    Kcategorias.value = Kcategorias.value + 1;
  } else {
    router.push('/login');
  }
}

const handleOption = (option) => {
  switch (option) {
    case 'Opción 1':
      actualizar();
      break;
    case 'Opción 2':
      router.push('/inicio');
      break;
    case 'Opción 3':
      router.push('/cmasiva');
      break;
    case 'Opción 4':
      router.push('/perfil');
      break;
    case 'Opción 5':
      router.push('/perfil');
      break;
    case 'Opción 6':
      router.push('/inventario');
      break;
    case 'Opción 7':
      router.push('/categorias');
      break;
    case 'Opción 8':
      router.push('/gest_nomencladores');
      break;
    case 'Opción 9':
      router.push('/auditoria');
      break;
    case 'Opción 10':
      router.push('/ubicaciones');
      break;
    default:
      break;
  }
  // console.log('Seleccionaste:', option); show.value = false;
};

const Store = useStoreAxios();

const paginaBuscar = ref('');

const vistas = ref('inventario')
const ArrVistas = ref([
  'inventario',
  'gest_nomencladores',
  'auditoria',
  'cmasiva',
  'ubicaciones',
  'categorias',
  'perfil',
  'inicio'
])

const coincidencias = ref([]);

const buscarPag = () => {
  if (!paginaBuscar.value) {
    return [];
  }
  coincidencias.value = [];
  const regex = new RegExp(paginaBuscar.value, 'gi');
  for (let index = 0; index < ArrVistas.value.length; index++) {
    let x = ArrVistas.value[index].match(regex) || [];
    coincidencias.value.push(x);
  }
  let posicion = ref([]);
  for (let index = 0; index < coincidencias.value.length; index++) {
    posicion.value.push(coincidencias.value[index].length);
  }
  for (let index = 0; index < posicion.value.length; index++) {
    if (posicion.value[index] == 1) {
      router.push('/' + ArrVistas.value[index]);
      break;
    }
  }
  return 0;
}

const Kinicio = ref(0);
const Kpedidos = ref(0);
const Kinventario = ref(0);
const Kauditoria = ref(0);
const Kgest_inventario = ref(0);
const Kgest_nomencladores = ref(0);
const Kcmasiva = ref(0);
const Kubicaciones = ref(0);
const Ksucursales = ref(0);
const Kcategorias = ref(0)
const Kperfil = ref(0);

const tiempoEspera = async () => {
  // console.log(n)
}

// const x = document.getElementById('content')
//   .addEventListener('click', function (event) {
//     show.value = false;
//   }
//   );

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

const collapsed = ref('collapsed');
const collapsed2 = ref('collapsed');
const activa = ref(false);

const show = ref('')



const activa2 = ref(false);

const show2 = ref('')

const activaUser = ref(false);

const showUser = ref('');

const activaNot = ref(false);

const showNot = ref('');

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
  // console.log("OKKK")
  link.value = alink;
  collapsed.value = 'collapsed';
  activa.value = false;
  show.value = '';
  collapsed2.value = 'collapsed';
  activa2.value = false;
  show2.value = '';
  // ActivaLink(alink)
  // console.log("Cierra")

}

const MueveMenu = () => {
  if (Ctoggled.value == '') {
    Ctoggled.value = 'toggled';
  } else {
    Ctoggled.value = '';
  }
}

const ActivaLink = (valor) => {
  // if (valor != 1) {
  // collapsed.value = 'collapsed';
  // activa.value = false;
  // show.value = '';
  // }
  show2.value = '';
  if (valor == link.value) {
    return 'active'
  } else {
    return ''
  }
}

// Funcion q esta escuchando las llamadas de los demas hijos
const errores = ref({ descripcion: "", observacion: "", articulo_id: "", ubicacion_id: "", cantidad: "" })

const consultar = async (n) => {
  //Productos
  if (n == 1) {
    actualizar()
    // Agregar productos
    // if (Store.formProductos.data.attributes.descripcion != '' && Store.formProductos.data.attributes.articulo_id != 0 && Store.formProductos.data.attributes.observacion != '' && Store.formProductos.data.attributes.ubicacion_id != "" && Store.formProductos.data.attributes.cantidad != "") {
    // console.log("OKKKK")
    // Store.cambiaEstado(1);
    // const response = await GuardarDatos(Store.formProductos, 1);

    // if (response == null) {
    //   Store.cambiaEstado(1)
    //   errores.value.descripcion = "Este dato ya existe en el sistema";
    //   ErrorFull("Descripción de producto ya existente.", "top-start")
    // } else {
    //   Store.formProductos.data.attributes.cantidad = '';
    //   Store.formProductos.data.attributes.descripcion = '';
    //   Store.formProductos.data.attributes.ubicacion_id = '';
    //   Store.formProductos.data.attributes.articulo_id = '';
    //   Store.formProductos.data.attributes.observacion = '';
    //   Store.AddProductos(response)
    //   // itemsProductos1.value = Store.itemsProductos;
    //   successFull("Producto agregado satisfactoriamente.", "top-end")
    //   Store.cambiaEstado(1)

    //   // return Store.itemsProductos;
    // }
    //
    // } else {
    //   if (Store.formProductos.data.attributes.descripcion == '') {
    //     errores.value.descripcion = "Este campo es obligatorio";
    //   } else {
    //     errores.value.descripcion = "";
    //   }

    //   if (Store.formProductos.data.attributes.observacion == '') {
    //     errores.value.observacion = "Este campo es obligatorio";
    //   } else {
    //     errores.value.observacion = "";
    //   }
    //   if (Store.formProductos.data.attributes.articulo_id == '') {
    //     errores.value.articulo_id = 'Este campo es obligatorio';
    //   } else {
    //     errores.value.articulo_id = "";
    //   }
    //   if (Store.formProductos.data.attributes.ubicacion_id == '') {
    //     errores.value.ubicacion_id = 'Este campo es obligatorio';
    //   } else {
    //     errores.value.ubicacion_id = "";
    //   }
    //   if (Store.formProductos.data.attributes.cantidad == '') {
    //     errores.value.cantidad = 'Este campo es obligatorio';
    //   } else {
    //     errores.value.cantidad = "";
    //   }
    //   // GuardarProducto.value = 'Agregar';
    //   // disabledProductoBtn.value = ''
    //   // Store.cambiaEstado(1)
    //   ErrorFull("Debe llenar todos los campos obligatorios", "top-start")
    //   return errores;
    // }

  }
  if (n == 2) {
    // Kinventario.value = Kinventario.value + 1;
  }
  if (n == 3) {

  }

  if (n == 4) {

  }

  if (n == 5) {

  }

  if (n == 6) {

  }

  if (n == 7) {

  }

  if (n == 8) {

  }

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
const editando = ref(false);

const beforeRouteLeave = (to, from, next) => {
  if (!editando.value) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        next();
      }
    });
  }

}

// const serecargo = ref(false);

const evitarRecargar = () => {

  window.addEventListener("beforeunload", event => {
    // successFull("Puede perder todo","top-center")
    if (!editando.value) return
    // Store.cambiaEstado(1)
    Ctoggled.value = 'toggled';
    editando.value = true;
    Store.limpiarDatos()
    localStorage.removeItem('Carg_datA'); // Articulos
    localStorage.removeItem('Carg_datD'); // Departamentos
    localStorage.removeItem('Carg_datMe'); // Unidades de medida
    localStorage.removeItem('Carg_datM'); // Magitudes
    localStorage.removeItem('Carg_datP'); // Productos
    localStorage.removeItem('Carg_datS'); // Sucursales
    localStorage.removeItem('Carg_datU'); // Ubicaciones
    localStorage.removeItem('Carg_datE'); // Etiquetas
    localStorage.removeItem('Carg_datL'); // Lotes
    localStorage.removeItem('Carg_datMo'); // Monedas
    localStorage.removeItem('Carg_datIM'); // Imagenes
    localStorage.removeItem('Carg_datEP'); // Etiqueta productos
    localStorage.removeItem('Carg_datAu'); // Auditoria
    localStorage.setItem('Carg_datA', '0'); // Articulos
    localStorage.setItem('Carg_datD', '0'); // Departamentos
    localStorage.setItem('Carg_datMe', '0'); // Unidades de medida
    localStorage.setItem('Carg_datM', '0'); // Magitudes
    localStorage.setItem('Carg_datP', '0'); // Productos
    localStorage.setItem('Carg_datS', '0'); // Sucursales
    localStorage.setItem('Carg_datU', '0'); // Ubicaciones
    localStorage.setItem('Carg_datE', '0'); // Etiquetas
    localStorage.setItem('Carg_datL', '0'); // Lotes
    localStorage.setItem('Carg_datMo', '0'); // Monedas
    localStorage.setItem('Carg_datIM', '0'); // Imagenes
    localStorage.setItem('Carg_datEP', '0'); // Etiqueta productos
    localStorage.setItem('Carg_datAu', '0'); // Auditorias
    // Store.cambiaEstado(1)
    event.preventDefault()
    // Store.serecargo = true;
    // Chrome requires returnValue to be set.
    BeforeUnloadEvent.returnValue = "No se puede recargar";
  })
}

const destruirRecarga = () => {
  window.removeEventListener("beforeunload", event => {
    if (!editando.value) return
    Store.limpiarDatos()
    localStorage.removeItem('Carg_datA'); // Articulos
    localStorage.removeItem('Carg_datD'); // Departamentos
    localStorage.removeItem('Carg_datMe'); // Unidades de medida
    localStorage.removeItem('Carg_datM'); // Magitudes
    localStorage.removeItem('Carg_datP'); // Productos
    localStorage.removeItem('Carg_datS'); // Sucursales
    localStorage.removeItem('Carg_datU'); // Ubicaciones
    localStorage.removeItem('Carg_datE'); // Etiquetas
    localStorage.removeItem('Carg_datL'); // Lotes
    localStorage.removeItem('Carg_datMo'); // Monedas
    localStorage.removeItem('Carg_datIM'); // Imagenes
    localStorage.removeItem('Carg_datEP'); // Etiqueta productos
    localStorage.removeItem('Carg_datAu'); // Auditoria
    localStorage.setItem('Carg_datA', '0'); // Articulos
    localStorage.setItem('Carg_datD', '0'); // Departamentos
    localStorage.setItem('Carg_datMe', '0'); // Unidades de medida
    localStorage.setItem('Carg_datM', '0'); // Magitudes
    localStorage.setItem('Carg_datP', '0'); // Productos
    localStorage.setItem('Carg_datS', '0'); // Sucursales
    localStorage.setItem('Carg_datU', '0'); // Ubicaciones
    localStorage.setItem('Carg_datE', '0'); // Etiquetas
    localStorage.setItem('Carg_datL', '0'); // Lotes
    localStorage.setItem('Carg_datMo', '0'); // Monedas
    localStorage.setItem('Carg_datIM', '0'); // Imagenes
    localStorage.setItem('Carg_datEP', '0'); // Etiqueta productos
    localStorage.setItem('Carg_datAu', '0'); // Auditorias
    event.preventDefault()
    // console.log('Cargadoooo')
    // Chrome requires returnValue to be set.
    BeforeUnloadEvent.returnValue = "No se puede recargar"
  })
}

// onUnmounted(() =>{
//    destruirRecarga();
// })

// const quasar = useQuasar();

onUnmounted(async () => {
  destruirRecarga()
})

// const loadTime = ref(0);

// const tiempoActivo = () => {
//   if (performance && performance.timing) {
//     const timing = performance.timing;
//     loadTime.value = timing.loadEventEnd - timing.navigationStart;
//   }
//   // console.log(loadTime.value)
// }

onMounted(async () => {
  // tiempo de inactividad
  // startInactivityTimer();
  // Escuchar más eventos si es necesario
  // window.addEventListener('scroll', resetTimer);
  Ctoggled.value = 'toggled';
  editando.value = true;
  evitarRecargar();
  if (localStorage.getItem('userName')) {
    if (localStorage.getItem('Carg_datP') == '0') {
      // cargando los productos
      Store.cambiaEstado(1)
      const response = await obtenerDatos(1);
      // console.log(response)
      if (response == null) {
        Store.cambiaEstado(1)
        ErrorFull("Error de red, intente más tarde.", "top-start")
      } else {
        Store.setCantidadProductos(response.length)
        if (response.length > 0) {
          Store.setListadoProductos(response)
          localStorage.setItem("LProductos", response);
        }
        for (let index = 0; index < response.length; index++) {
          Store.nextIDProducto = response[index].id;
        }
        // console.log(Store.nextIDProducto + 1)
        localStorage.setItem("Carg_datP", "1");
        Store.cambiaEstado(1);
      }
    }
    if (localStorage.getItem('Carg_datD') == '0') {
      // cargando los departamentos
      Store.cambiaEstado(2)
      const response = await obtenerDatos(6);
      if (!response) {
        Store.cambiaEstado(2)
        // ErrorFull("Error de red, intente más tarde.", "top-start")
      } else {
        Store.setCantidadDepartamentos(response.length)
        if (response.length > 0) {
          Store.setListadoDepartamentos(response)
          localStorage.setItem("LDepartamentos", response);
        }
        for (let index = 0; index < response.length; index++) {
          Store.nextIDDepartamento = response[index].id;
        }
        // console.log(Store.nextIDDepartamento)
        localStorage.setItem("Carg_datD", "1");
        Store.cambiaEstado(2);
      }

    }

    if (localStorage.getItem('Carg_datA') == '0') {
      // cargando los articulos
      Store.cambiaEstado(3)
      const response = await obtenerDatos(5);
      if (!response) {
        Store.cambiaEstado(3)
        ErrorFull("Error de red, intente más tarde.", "top-start")
      } else {
        Store.setCantidadArticulos(response.length)
        if (response.length > 0) {
          Store.setListadoArticulos(response)
          localStorage.setItem("LArticulos", response);
        }
        // for (let index = 0; index < response.length; index++) {
        //     Store.nextIDArticulo = response[index].id;
        // }
        // console.log(Store.nextIDArticulo)
        localStorage.setItem("Carg_datA", "1");
        Store.cambiaEstado(3)
      }
    }

  } else {
    router.push('/login');
  }
})

onBeforeMount(async () => {
  // clearInactivityTimer();
  // window.removeEventListener('scroll', resetTimer);
})

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
    allowOutsideClick: false,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Salir",
    cancelButtonText: "Cancelar"
  }).then((result) => {
    if (result.isConfirmed) {
      Store.limpiarDatos()
      localStorage.removeItem('Carg_datA'); // Articulos
      localStorage.removeItem('Carg_datD'); // Departamentos
      localStorage.removeItem('Carg_datMe'); // Unidades de medida
      localStorage.removeItem('Carg_datM'); // Magitudes
      localStorage.removeItem('Carg_datP'); // Productos
      localStorage.removeItem('Carg_datS'); // Sucursales
      localStorage.removeItem('Carg_datU'); // Ubicaciones
      localStorage.removeItem('Carg_datE'); // Etiquetas
      localStorage.removeItem('Carg_datL'); // Lotes
      localStorage.removeItem('Carg_datMo'); // Monedas
      localStorage.removeItem('Carg_datIM'); // Imagenes
      localStorage.removeItem('Carg_datEP'); // Etiqueta productos
      localStorage.removeItem('Carg_datAu'); // Auditoria
      localStorage.clear();
      Store.$reset();
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

<style lang="scss" scoped>
@media (min-width: 768px) {
  .sidebar {
    text-transform: uppercase;
  }

  .sidebar.toggled {
    text-transform: none;
  }

}

@media (max-width: 1024px) {
  .container-fluid {
    padding-left: initial;
    padding-right: initial;
  }
}

.mx-context-menu-item {
  justify-content: flex-start
}

/*.context-menu {
  position: absolute;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}

.context-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.context-menu ul li {
  padding: 10px 20px;
  cursor: pointer;
}

.context-menu ul li:hover {
  background-color: #eee;
}

.context-menu-item i {
  margin-right: 8px;
}*/
</style>
