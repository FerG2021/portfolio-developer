<template>
  <div class="contenedor-principal" id="contenedor-principal">
    <div class="contenedor-header">
      <div
        class="contenedor-nombre-desktop animate__animated animate__fadeInLeft"
      >
        <span class="nombre">FERNANDO</span>
        <span class="apellido">GONZALEZ</span>
      </div>

      <div
        class="contenedor-nombre-mobile animate__animated animate__fadeInLeft"
      >
        <a href="#contenedor-home" class="boton-secciones-mobile">
          <span class="nombre">F </span>
          <span class="apellido">G</span>
        </a>
      </div>

      <div class="contenedor-secciones animate__animated animate__fadeInDown">
        <!-- HOME -->
        <div class="contenedor-btnhome">
          <a href="#contenedor-home" class="boton-secciones">Home</a>

          <a href="#contenedor-home" class="boton-secciones-mobile">
            <i class="pi pi-home boton-secciones-mobile"></i>
          </a>
        </div>

        <!-- SOBRE MI -->
        <div
          class="contenedor-btnsobremi"
          v-if="$store.state.idioma.code == 'ES'"
        >
          <a href="#contenedor-about-me" class="boton-secciones">Sobre mi</a>
          <a href="#contenedor-about-me" class="boton-secciones-mobile">
            <i class="pi pi-user"></i>
          </a>
        </div>

        <div
          class="contenedor-btnsobremi"
          v-if="$store.state.idioma.code == 'IN'"
        >
          <a href="#contenedor-about-me" class="boton-secciones">About me</a>
          <a href="#contenedor-about-me" class="boton-secciones-mobile">
            <i class="pi pi-user"></i>
          </a>
        </div>

        <!-- PROYECTOS -->
        <div
          class="contenedor-btnproyectos"
          v-if="$store.state.idioma.code == 'ES'"
        >
          <a href="#contenedor-projects" class="boton-secciones">Proyectos</a>
          <a href="#contenedor-projects" class="boton-secciones-mobile">
            <i class="pi pi-folder"></i>
          </a>
        </div>

        <div
          class="contenedor-btnproyectos"
          v-if="$store.state.idioma.code == 'IN'"
        >
          <a href="#contenedor-projects" class="boton-secciones">Projects</a>
          <a href="#contenedor-projects" class="boton-secciones-mobile">
            <i class="pi pi-folder"></i>
          </a>
        </div>

        <!-- CONTACTO -->
        <div
          class="contenedor-btncontacto"
          v-if="$store.state.idioma.code == 'ES'"
        >
          <a href="#contendor-detalle-contact" class="boton-secciones">
            Contacto
          </a>

          <a href="#contendor-detalle-contact" class="boton-secciones-mobile">
            <i class="pi pi-phone"></i>
          </a>
        </div>

        <div
          class="contenedor-btncontacto"
          v-if="$store.state.idioma.code == 'IN'"
        >
          <a href="#contendor-detalle-contact" class="boton-secciones">
            Contact
          </a>

          <a href="#contendor-detalle-contact" class="boton-secciones-mobile">
            <i class="pi pi-phone boton-secciones-mobile"></i>
          </a>
        </div>
      </div>

      <div
        class="contenedor-select-idiomas animate__animated animate__fadeInRight"
      >
        <Dropdown
          v-model="selectedCountry"
          :options="countries"
          optionLabel="name"
          placeholder="Seleccioná un idioma"
          class="dropdown"
          @change="cambiarIdioma()"
        >
          <template #value="slotProps">
            <div class="country-item country-item-value" v-if="slotProps.value">
              <img
                :src="slotProps.value.bandera"
                style="
                  width: 15px;
                  height: 10px;
                  margin-right: 10px;
                  margin-top: 8px;
                "
              />
              <div>{{ slotProps.value.name }}</div>
            </div>
          </template>
          <template #option="slotProps">
            <div class="country-item">
              <img
                :src="slotProps.option.bandera"
                style="
                  width: 15px;
                  height: 10px;
                  margin-right: 10px;
                  margin-top: 8px;
                "
              />
              <div>{{ slotProps.option.name }}</div>
            </div>
          </template>
        </Dropdown>
      </div>
    </div>

    <!--  -->
    <!-- HOME -->
    <!--  -->
    <div
      class="contenedor-home"
      id="contenedor-home"
      v-if="$store.state.idioma.code == 'ES'"
    >
      <h1 class="saludo">Hola, soy <br /></h1>
      <h1 class="saludo">
        <span class="saludo-nombre">Fernando González</span> <br />
      </h1>
      <h1 class="saludo">Full Stack Developer</h1>

      <div class="contenedor-img">
        <img src="developer.png" alt="" srcset="" class="img" />
      </div>
    </div>

    <div
      class="contenedor-home"
      id="contenedor-home"
      v-if="$store.state.idioma.code == 'IN'"
    >
      <h1 class="saludo">Hi, I'm <br /></h1>
      <h1 class="saludo">
        <span class="saludo-nombre">Fernando González</span> <br />
      </h1>
      <h1 class="saludo">Full Stack Developer</h1>

      <div class="contenedor-img">
        <img src="developer.png" alt="" srcset="" class="img" />
      </div>
    </div>

    <!--  -->
    <!-- SOBRE MI -->
    <!--  -->
    <div
      class="contenedor-about-me"
      id="contenedor-about-me"
      v-if="$store.state.idioma.code == 'ES'"
    >
      <div class="contenedor-img-about-me">
        <img src="developer2.png" alt="" srcset="" class="img-2" />
      </div>

      <div class="contenedor-descripcion-about-me">
        <h2 class="descripcion-about-me">
          <span class="texto-destacado">Alumno avanzado</span> de la carrera de
          Licenciatura en Sistemas de Información <br />
          en la Universidad Nacional de Santiago del Estero <br />
        </h2>
        <h2 class="descripcion-about-me">
          <span class="texto-destacado">Full Stack Developer</span> hace 3 años
        </h2>

        <div class="contenedor-cards-about-me">
          <div class="card">
            <h3 class="texto-destacado titulo-card">Responsable</h3>
            <h4 class="descripcion-card">
              - Trabajos realizados en tiempo y forma
            </h4>
            <h4 class="descripcion-card">
              - Consideración plena en los requirimientos solicitados
            </h4>
          </div>

          <div class="card">
            <h3 class="texto-destacado titulo-card">Proactivo</h3>
            <h4 class="descripcion-card">
              - Inciativa y capacidad para llevar a cabo cada proyecto asignado
            </h4>
            <h4 class="descripcion-card">
              - Cumplimiento de cada item acordado
            </h4>
          </div>

          <div class="card">
            <h3 class="texto-destacado titulo-card">
              Trabajo individual <br />
              y en equipo
            </h3>

            <h4 class="descripcion-card">
              - Amoldamiento a cada grupo de trabjo o de manera freelancer
            </h4>
            <h4 class="descripcion-card">
              - Consideración del camino más eficiente
            </h4>
          </div>
        </div>

        <div class="contenedor-skills">
          <div class="skill">
            <img src="html.png" alt="" srcset="" class="img-skill" />
          </div>
          <div class="skill">
            <img src="css.png" alt="" srcset="" class="img-skill" />
          </div>
          <div class="skill">
            <img src="js.png" alt="" srcset="" class="img-skill" />
          </div>
          <div class="skill">
            <img src="vue.png" alt="" srcset="" class="img-skill" />
          </div>
        </div>

        <div class="contenedor-skills">
          <div class="skill">
            <img src="php.png" alt="" srcset="" class="img-skill" />
          </div>
          <div class="skill">
            <img src="laravel.png" alt="" srcset="" class="img-skill" />
          </div>
          <div class="skill">
            <img src="mysql.png" alt="" srcset="" class="img-skill" />
          </div>
        </div>
      </div>
    </div>

    <div
      class="contenedor-about-me"
      id="contenedor-about-me"
      v-if="$store.state.idioma.code == 'IN'"
    >
      <div class="contenedor-img-about-me">
        <img src="developer2.png" alt="" srcset="" class="img-2" />
      </div>

      <div class="contenedor-descripcion-about-me">
        <h2 class="descripcion-about-me">
          <span class="texto-destacado">Advanced student</span> of the
          Bachelor's degree in Information Systems <br />
          at the National University of Santiago del Estero <br />
        </h2>
        <h2 class="descripcion-about-me">
          <span class="texto-destacado">Full Stack Developer</span> 3 years ago
        </h2>

        <div class="contenedor-cards-about-me">
          <div class="card">
            <h3 class="texto-destacado titulo-card">Responsible</h3>
            <h4 class="descripcion-card">- Work done in time and form</h4>
            <h4 class="descripcion-card">
              - Full consideration of the requested requirements
            </h4>
          </div>

          <div class="card">
            <h3 class="texto-destacado titulo-card">Proactive</h3>
            <h4 class="descripcion-card">
              - Initiative and ability to carry out each assigned project
            </h4>
            <h4 class="descripcion-card">- Compliance with each agreed item</h4>
          </div>

          <div class="card">
            <h3 class="texto-destacado titulo-card">
              Individual work <br />
              and as a team
            </h3>

            <h4 class="descripcion-card">
              - Adjustment to each work group or freelance
            </h4>
            <h4 class="descripcion-card">
              - Consideration of the most efficient path
            </h4>
          </div>
        </div>

        <div class="contenedor-skills">
          <div class="skill">
            <img src="html.png" alt="" srcset="" class="img-skill" />
          </div>
          <div class="skill">
            <img src="css.png" alt="" srcset="" class="img-skill" />
          </div>
          <div class="skill">
            <img src="js.png" alt="" srcset="" class="img-skill" />
          </div>
          <div class="skill">
            <img src="vue.png" alt="" srcset="" class="img-skill" />
          </div>
        </div>

        <div class="contenedor-skills">
          <div class="skill">
            <img src="php.png" alt="" srcset="" class="img-skill" />
          </div>
          <div class="skill">
            <img src="laravel.png" alt="" srcset="" class="img-skill" />
          </div>
          <div class="skill">
            <img src="mysql.png" alt="" srcset="" class="img-skill" />
          </div>
        </div>
      </div>
    </div>

    <!--  -->
    <!-- PROYECTOS -->
    <!--  -->

    <div
      class="contenedor-projects"
      id="contenedor-projects"
      v-if="$store.state.idioma.code == 'ES'"
    >
      <!-- <div class="contenedor-items-projects">
        <div class="contenedor-items" @click="abrirNutrimarg()">
          <div class="titulo-items-projects">
            <h3 class="titulo-projects">Nutrimarg balanceados</h3>
          </div>
          <div class="img-items-projects">
            <img src="nutrimarg.jpg" alt="" class="img-projects" />
          </div>
          <div class="descripcion-items-projects">
            <div class="descripcion-principal">
              Laravel - Blade - MySQL (2020 - 2021)
            </div>
            <div class="descripcion-secundaria">
              Nutrimarg balanceados es una firma que se dedica a la venta de
              artículos de forrajería, productos agrícolas y de jardín. El
              desarrollo del software fue solicitado debido a que no se contaba
              con uno para llevar la contabilidad, ventas, stock de productos
              con la dificultad de que los mismos se pueden vender
              particionados, en bolsas completas o por cierta monto de dinero; y
              estado de las cuentas corrientes de clientes, permite descargar
              comprobantes de compra y cuenta corriente
            </div>
          </div>
        </div>

        <div class="contenedor-items" @click="abrirLalaDeco()">
          <div class="titulo-items-projects">
            <h3 class="titulo-projects">Lala Deco Kids</h3>
          </div>
          <div class="img-items-projects">
            <img src="laladecokids.jpg" alt="" class="img-projects" />
          </div>
          <div class="descripcion-items-projects">
            <div class="descripcion-principal">
              Vue.js - Laravel - MySQL (2021 - 2022)
            </div>
            <div class="descripcion-secundaria">
              Empresa dedicada a la venta de artículos de primera infancia. El
              desarrollo del software fue solicitado debido a que no se contaba
              con uno para llevar la contabilidad, ventas, stock de productos y
              estado de las cuntas corrientes de clientes, además realizar el
              envío de comprobantes de compra y cuenta corriente por WhatsApp,
              mail o descarga directa para poder utilizar la menor cantidad
              posible de papel y acercar cada vez más a los clientes a la
              tecnología <br />

              <b>User: angheredia // Password: 1234</b>
            </div>
          </div>
        </div>

        <div class="contenedor-items" @click="abrirModular()">
          <div class="titulo-items-projects">
            <h3 class="titulo-projects">ModulAr SRL</h3>
          </div>
          <div class="img-items-projects">
            <img src="modular.jpg" alt="" class="img-projects" />
          </div>
          <div class="descripcion-items-projects">
            <div class="descripcion-principal">
              Vue.js - Laravel - MySQL (2022)
            </div>
            <div class="descripcion-secundaria">
              Empresa que ofrece servicios de construcción arquitectura e
              ingeniería. El desarrollo se realizó para solucionar la
              problemática de presupuestación, comparativa y toma de decisiones
              con respecto a los materiales que se requieren comprar como
              proceso previo a la construcción. Se envía por mail el pedido de
              presupuestación de productos a los proveedores dandole accedo al
              sistema para que sean ellos mismos quienes cargan los precios
              <br />
              <b>User: superadmin1@gmail.com // Password: 1234</b>
            </div>
          </div>
        </div>

        <div class="contenedor-items" @click="abrirRestaurantApp()">
          <div class="titulo-items-projects">
            <h3 class="titulo-projects">RestaurantApp</h3>
          </div>
          <div class="img-items-projects">
            <img src="restaurantapp.png" alt="" class="img-projects" />
          </div>
          <div class="descripcion-items-projects">
            <div class="descripcion-principal">
              Vue.js - Laravel - MySQL (2023)
            </div>
            <div class="descripcion-secundaria">
              Sistema que permite a los clientes visualizar la carta del local
              con sólo escanear un QR. Consta de una landing page para los
              clientes y un panel para el usuario donde puede agregar,
              modificar, eliminar u ocultar categorías, subcategorías o
              productos
              <br />
              <b>User: ferg@gmail.com // Password: 40899041</b>
            </div>
          </div>
        </div>
      </div> -->

      <div class="contenedor-hover-projects">
        <!-- Nutrimarg balanceados -->
        <div class="contenedor-hover-project nutrimarg">
          <div class="contenedor-imagen-hover">
            <img src="nutrimarg.jpg" alt="" srcset="" class="imagen-hover" />
            <div
              class="contenedor-descripcion-hover animate__animated animate__fadeIn"
            >
              <div class="titulo-hover">Nutrimarg Balanceados</div>
              <div class="descripcion-hover">
                Laravel - Blade - MySQL (2020 - 2021) <br />
                Firma dedicada a la venta de artículos de forrajería, productos
                agrícolas y de jardín. Fue solicitado debido a que no se contaba
                con uno para llevar la contabilidad, ventas, stock de productos
                vendidos de forma particionada, en bolsas completas o por cierta
                monto de dinero; y estado de las cuentas corrientes de clientes,
                permite descargar comprobantes de compra y cuenta corriente

                <div style="display: flex; margin-top: 1vh">
                  <p class="btn-acceder" @click="abrirNutrimarg()">Acceder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Lala Deco Kids -->
        <div class="contenedor-hover-project laladeco">
          <div class="contenedor-imagen-hover">
            <img src="laladecokids.jpg" alt="" srcset="" class="imagen-hover" />
            <div
              class="contenedor-descripcion-hover animate__animated animate__fadeIn"
            >
              <div class="titulo-hover">Lala Deco Kids</div>
              <div class="descripcion-hover">
                Vue.js - Laravel - MySQL (2021 - 2022) <br />
                Empresa dedicada a la venta de artículos de primera infancia.
                Fue solicitado debido a que no se contaba con uno para llevar la
                contabilidad, ventas, stock de productos y estado de las cuentas
                corrientes de clientes. Realizar el envío de comprobantes de
                compra y cuenta corriente por WhatsApp, mail o descarga directa
                <br />

                <b>User: angheredia // Password: 1234</b>

                <div style="display: flex; margin-top: 1vh">
                  <p class="btn-acceder" @click="abrirLalaDeco()">Acceder</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Modular -->
        <div class="contenedor-hover-project modular">
          <div class="contenedor-imagen-hover">
            <img src="modular.jpg" alt="" srcset="" class="imagen-hover" />
            <div
              class="contenedor-descripcion-hover animate__animated animate__fadeIn"
            >
              <div class="titulo-hover">ModulAr</div>
              <div class="descripcion-hover">
                Vue.js - Laravel - MySQL (2022) <br />
                Empresa constructora. El desarrollo se realizó para solucionar
                la problemática de presupuestación, comparativa y toma de
                decisiones con respecto a los materiales que se requieren
                comprar como proceso previo a la construcción. Se envía por mail
                el pedido de presupuestación a los proveedores dándole accedo al
                sistema carguen los precios
                <br />
                <b>User: superadmin1@gmail.com // Password: 1234</b>

                <div style="display: flex; margin-top: 1vh">
                  <p class="btn-acceder" @click="abrirModular()">Acceder</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Restaurantapp -->
        <div class="contenedor-hover-project restaurantapp">
          <div class="contenedor-imagen-hover">
            <img
              src="restaurantapp.png"
              alt=""
              srcset=""
              class="imagen-hover"
            />
            <div
              class="contenedor-descripcion-hover animate__animated animate__fadeIn"
            >
              <div class="titulo-hover">RestaurantApp</div>
              <div class="descripcion-hover">
                Vue.js - Laravel - MySQL (2023) <br />
                Sistema que permite a los clientes visualizar la carta del local
                con sólo escanear un QR. Consta de una landing page para los
                clientes y un panel para el usuario donde puede agregar,
                modificar, eliminar u ocultar categorías, subcategorías o
                productos
                <br />
                <b>User: ferg@gmail.com // Password: 40899041</b>

                <div style="display: flex; margin-top: 1vh">
                  <p class="btn-acceder" @click="abrirRestaurantAppPanel()">
                    Acceder Panel
                  </p>
                  <p class="btn-acceder" @click="abrirRestaurantApp()">
                    Acceder Landing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="contenedor-items-projects-mobile">
        <!-- @click="abrirNutrimarg()" -->
        <div class="contenedor-items" @click="$refs.modalNutrimarg.abrir()">
          <div class="titulo-items-projects">
            <h3 class="titulo-projects">Nutrimarg balanceados</h3>
          </div>
          <div class="img-items-projects">
            <img src="nutrimarg.jpg" alt="" class="img-projects" />
          </div>
          <div class="descripcion-items-projects">
            <div class="descripcion-principal">
              Laravel - Blade - MySQL (2020 - 2021)
            </div>
            <div class="descripcion-secundaria">
              Nutrimarg balanceados es una firma que se dedica a la venta de
              artículos de forrajería, productos agrícolas y de jardín. El
              desarrollo del software fue solicitado debido a que no se contaba
              con uno para llevar la contabilidad, ventas, stock de productos
              con la dificultad de que los mismos se pueden vender
              particionados, en bolsas completas o por cierta monto de dinero; y
              estado de las cuentas corrientes de clientes, permite descargar
              comprobantes de compra y cuenta corriente
            </div>
          </div>
        </div>

        <div class="contenedor-items" @click="$refs.modalLalaDecoKids.abrir()">
          <div class="titulo-items-projects">
            <h3 class="titulo-projects">Lala Deco Kids</h3>
          </div>
          <div class="img-items-projects">
            <img src="laladecokids.jpg" alt="" class="img-projects" />
          </div>
          <div class="descripcion-items-projects">
            <div class="descripcion-principal">
              Vue.js - Laravel - MySQL (2021 - 2022)
            </div>
            <div class="descripcion-secundaria">
              Empresa dedicada a la venta de artículos de primera infancia. El
              desarrollo del software fue solicitado debido a que no se contaba
              con uno para llevar la contabilidad, ventas, stock de productos y
              estado de las cuntas corrientes de clientes, además realizar el
              envío de comprobantes de compra y cuenta corriente por WhatsApp,
              mail o descarga directa para poder utilizar la menor cantidad
              posible de papel y acercar cada vez más a los clientes a la
              tecnología <br />

              <b>User: angheredia // Password: 1234</b>
            </div>
          </div>
        </div>
      </div>

      <div class="contenedor-items-projects-mobile">
        <div class="contenedor-items" @click="$refs.modalModular.abrir()">
          <div class="titulo-items-projects">
            <h3 class="titulo-projects">ModulAr SRL</h3>
          </div>
          <div class="img-items-projects">
            <img src="modular.jpg" alt="" class="img-projects" />
          </div>
          <div class="descripcion-items-projects">
            <div class="descripcion-principal">
              Vue.js - Laravel - MySQL (2022)
            </div>
            <div class="descripcion-secundaria">
              Empresa que ofrece servicios de construcción arquitectura e
              ingeniería. El desarrollo se realizó para solucionar la
              problemática de presupuestación, comparativa y toma de decisiones
              con respecto a los materiales que se requieren comprar como
              proceso previo a la construcción. Se envía por mail el pedido de
              presupuestación de productos a los proveedores dandole accedo al
              sistema para que sean ellos mismos quienes cargan los precios
              <br />
              <b>User: superadmin1@gmail.com // Password: 1234</b>
            </div>
          </div>
        </div>

        <div class="contenedor-items" @click="$refs.ModalRestaurantApp.abrir()">
          <div class="titulo-items-projects">
            <h3 class="titulo-projects">RestaurantApp</h3>
          </div>
          <div class="img-items-projects">
            <img src="restaurantapp.png" alt="" class="img-projects" />
          </div>
          <div class="descripcion-items-projects">
            <div class="descripcion-principal">
              Vue.js - Laravel - MySQL (2023)
            </div>
            <div class="descripcion-secundaria">
              Sistema que permite a los clientes visualizar la carta del local
              con sólo escanear un QR. Consta de una landing page para los
              clientes y un panel para el usuario donde puede agregar,
              modificar, eliminar u ocultar categorías, subcategorías o
              productos
              <br />
              <b>User: ferg@gmail.com // Password: 40899041</b>
            </div>
          </div>
        </div>
      </div>

      <div class="contenedor-time-line">
        <Timeline
          :value="events"
          layout="horizontal"
          align="alternate"
          class="time-line"
        >
          <template #opposite> &nbsp; </template>
          <template #content="slotProps">
            <span class="anio">{{ slotProps.item.anio }}</span> <br />
            <span class="descripcion">{{ slotProps.item.descripcion }}</span>
            <br />
            <span class="descripcion-mobile">{{ slotProps.item.tipo }}</span>
            <br />
          </template>
        </Timeline>
      </div>
    </div>

    <div
      class="contenedor-projects"
      id="contenedor-projects"
      v-if="$store.state.idioma.code == 'IN'"
    >
      <div class="contenedor-hover-projects">
        <!-- Nutrimarg balanceados -->
        <div class="contenedor-hover-project nutrimarg">
          <div class="contenedor-imagen-hover">
            <img src="nutrimarg.jpg" alt="" srcset="" class="imagen-hover" />
            <div
              class="contenedor-descripcion-hover animate__animated animate__fadeIn"
            >
              <div class="titulo-hover">Nutrimarg Balanceados</div>
              <div class="descripcion-hover">
                Laravel - Blade - MySQL (2020 - 2021) <br />
                Firm dedicated to the sale of fodder items, products farm and
                garden. It was requested because it was not counted with one to
                keep accounts, sales, stock of products sold in partitioned
                form, in complete bags or by certain amount of money; and
                statement of customer current accounts, Allows you to download
                proof of purchase and current account

                <div style="display: flex; margin-top: 1vh">
                  <p class="btn-acceder" @click="abrirNutrimarg()">Access</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Lala Deco Kids -->
        <div class="contenedor-hover-project laladeco">
          <div class="contenedor-imagen-hover">
            <img src="laladecokids.jpg" alt="" srcset="" class="imagen-hover" />
            <div
              class="contenedor-descripcion-hover animate__animated animate__fadeIn"
            >
              <div class="titulo-hover">Lala Deco Kids</div>
              <div class="descripcion-hover">
                Vue.js - Laravel - MySQL (2021 - 2022) <br />
                Company dedicated to the sale of early childhood items. It was
                requested because there was no one to carry the accounting,
                sales, product stock and account status customer streams. Send
                proof of purchase and current account by WhatsApp, mail or
                direct download
                <br />

                <b>User: angheredia // Password: 1234</b>

                <div style="display: flex; margin-top: 1vh">
                  <p class="btn-acceder" @click="abrirLalaDeco()">Access</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Modular -->
        <div class="contenedor-hover-project modular">
          <div class="contenedor-imagen-hover">
            <img src="modular.jpg" alt="" srcset="" class="imagen-hover" />
            <div
              class="contenedor-descripcion-hover animate__animated animate__fadeIn"
            >
              <div class="titulo-hover">ModulAr</div>
              <div class="descripcion-hover">
                Vue.js - Laravel - MySQL (2022) <br />
                Construction company. The development was made to solve the
                problem of budgeting, comparative and decision making decisions
                regarding materials required purchase as a pre-construction
                process. It is sent by mail the budget request to the suppliers
                giving access to the system load prices
                <br />
                <b>User: superadmin1@gmail.com // Password: 1234</b>

                <div style="display: flex; margin-top: 1vh">
                  <p class="btn-acceder" @click="abrirModular()">Access</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Restaurantapp -->
        <div class="contenedor-hover-project restaurantapp">
          <div class="contenedor-imagen-hover">
            <img
              src="restaurantapp.png"
              alt=""
              srcset=""
              class="imagen-hover"
            />
            <div
              class="contenedor-descripcion-hover animate__animated animate__fadeIn"
            >
              <div class="titulo-hover">RestaurantApp</div>
              <div class="descripcion-hover">
                Vue.js - Laravel - MySQL (2023) <br />
                System that allows customers to view the local menu just by
                scanning a QR. It consists of a landing page for the customers
                and a panel for the user where you can add, modify, delete or
                hide categories, subcategories or products
                <br />
                <b>User: ferg@gmail.com // Password: 40899041</b>

                <div style="display: flex; margin-top: 1vh">
                  <p class="btn-acceder" @click="abrirRestaurantAppPanel()">
                    Access Dashboard
                  </p>
                  <p class="btn-acceder" @click="abrirRestaurantApp()">
                    Access Landing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="contenedor-items-projects">
        <div class="contenedor-items" @click="abrirNutrimarg()">
          <div class="titulo-items-projects">
            <h3 class="titulo-projects">Nutrimarg balanceados</h3>
          </div>
          <div class="img-items-projects">
            <img src="nutrimarg.jpg" alt="" class="img-projects" />
          </div>
          <div class="descripcion-items-projects">
            <div class="descripcion-principal">
              Laravel - Blade - MySQL (2020 - 2021)
            </div>
            <div class="descripcion-secundaria">
              Balanced Nutrimarg is a firm dedicated to the sale of fodder
              items, farm and garden products. He software development was
              requested because there was no with one to keep accounts, sales,
              stock of products with the difficulty that they can be sold
              partitioned, in full bags or for a certain amount of money; and
              statement of current customer accounts, allows you to download
              proof of purchase and current account
            </div>
          </div>
        </div>

        <div class="contenedor-items" @click="abrirLalaDeco()">
          <div class="titulo-items-projects">
            <h3 class="titulo-projects">Lala Deco Kids</h3>
          </div>
          <div class="img-items-projects">
            <img src="laladecokids.jpg" alt="" class="img-projects" />
          </div>
          <div class="descripcion-items-projects">
            <div class="descripcion-principal">
              Vue.js - Laravel - MySQL (2021 - 2022)
            </div>
            <div class="descripcion-secundaria">
              Company dedicated to the sale of early childhood items. He
              software development was requested because there was no with one
              to keep accounting, sales, stock of products and status of current
              customer accounts, in addition to performing the sending proof of
              purchase and current account by WhatsApp, mail or direct download
              to be able to use the least amount paper as possible and bring
              customers ever closer to the technology <br />

              <b>User: angheredia // Password: 1234</b>
            </div>
          </div>
        </div>

        <div class="contenedor-items" @click="abrirModular()">
          <div class="titulo-items-projects">
            <h3 class="titulo-projects">ModulAr SRL</h3>
          </div>
          <div class="img-items-projects">
            <img src="modular.jpg" alt="" class="img-projects" />
          </div>
          <div class="descripcion-items-projects">
            <div class="descripcion-principal">
              Vue.js - Laravel - MySQL (2022)
            </div>
            <div class="descripcion-secundaria">
              Company that offers construction services architecture and
              engineering. The development was made to solve the problem of
              budgeting, comparative and decision making regarding the materials
              that are required to be purchased as pre-construction process. The
              request is sent by mail budgeting of products to suppliers giving
              them access to the system so that they are the ones who charge the
              prices
              <br />
              <b>User: superadmin1@gmail.com // Password: 1234</b>
            </div>
          </div>
        </div>

        <div class="contenedor-items" @click="abrirRestaurantApp()">
          <div class="titulo-items-projects">
            <h3 class="titulo-projects">RestaurantApp</h3>
          </div>
          <div class="img-items-projects">
            <img src="restaurantapp.png" alt="" class="img-projects" />
          </div>
          <div class="descripcion-items-projects">
            <div class="descripcion-principal">
              Vue.js - Laravel - MySQL (2023)
            </div>
            <div class="descripcion-secundaria">
              System that allows customers to view the local menu just by
              scanning a QR. It consists of a landing page for the customers and
              a panel for the user where you can add, modify, delete or hide
              categories, subcategories or products
              <br />
              <b>User: ferg@gmail.com // Password: 40899041</b>
            </div>
          </div>
        </div>
      </div> -->

      <div class="contenedor-items-projects-mobile">
        <!-- @click="abrirNutrimarg()" -->
        <div class="contenedor-items" @click="$refs.modalNutrimarg.abrir()">
          <div class="titulo-items-projects">
            <h3 class="titulo-projects">Nutrimarg balanceados</h3>
          </div>
          <div class="img-items-projects">
            <img src="nutrimarg.jpg" alt="" class="img-projects" />
          </div>
          <div class="descripcion-items-projects">
            <div class="descripcion-principal">
              Laravel - Blade - MySQL (2020 - 2021)
            </div>
            <div class="descripcion-secundaria">
              Balanced Nutrimarg is a firm dedicated to the sale of fodder
              items, farm and garden products. He software development was
              requested because there was no with one to keep accounts, sales,
              stock of products with the difficulty that they can be sold
              partitioned, in full bags or for a certain amount of money; and
              statement of current customer accounts, allows you to download
              proof of purchase and current account
            </div>
          </div>
        </div>

        <div class="contenedor-items" @click="$refs.modalLalaDecoKids.abrir()">
          <div class="titulo-items-projects">
            <h3 class="titulo-projects">Lala Deco Kids</h3>
          </div>
          <div class="img-items-projects">
            <img src="laladecokids.jpg" alt="" class="img-projects" />
          </div>
          <div class="descripcion-items-projects">
            <div class="descripcion-principal">
              Vue.js - Laravel - MySQL (2021 - 2022)
            </div>
            <div class="descripcion-secundaria">
              Company dedicated to the sale of early childhood items. He
              software development was requested because there was no with one
              to keep accounting, sales, stock of products and status of current
              customer accounts, in addition to performing the sending proof of
              purchase and current account by WhatsApp, mail or direct download
              to be able to use the least amount paper as possible and bring
              customers ever closer to the technology <br />

              <b>User: angheredia // Password: 1234</b>
            </div>
          </div>
        </div>
      </div>

      <div class="contenedor-items-projects-mobile">
        <div class="contenedor-items" @click="$refs.modalModular.abrir()">
          <div class="titulo-items-projects">
            <h3 class="titulo-projects">ModulAr SRL</h3>
          </div>
          <div class="img-items-projects">
            <img src="modular.jpg" alt="" class="img-projects" />
          </div>
          <div class="descripcion-items-projects">
            <div class="descripcion-principal">
              Vue.js - Laravel - MySQL (2022)
            </div>
            <div class="descripcion-secundaria">
              Company that offers construction services architecture and
              engineering. The development was made to solve the problem of
              budgeting, comparative and decision making regarding the materials
              that are required to be purchased as pre-construction process. The
              request is sent by mail budgeting of products to suppliers giving
              them access to the system so that they are the ones who charge the
              prices
              <br />
              <b>User: superadmin1@gmail.com // Password: 1234</b>
            </div>
          </div>
        </div>

        <div class="contenedor-items" @click="$refs.ModalRestaurantApp.abrir()">
          <div class="titulo-items-projects">
            <h3 class="titulo-projects">RestaurantApp</h3>
          </div>
          <div class="img-items-projects">
            <img src="restaurantapp.png" alt="" class="img-projects" />
          </div>
          <div class="descripcion-items-projects">
            <div class="descripcion-principal">
              Vue.js - Laravel - MySQL (2023)
            </div>
            <div class="descripcion-secundaria">
              System that allows customers to view the local menu just by
              scanning a QR. It consists of a landing page for the customers and
              a panel for the user where you can add, modify, delete or hide
              categories, subcategories or products
              <br />
              <b>User: ferg@gmail.com // Password: 40899041</b>
            </div>
          </div>
        </div>
      </div>

      <div class="contenedor-time-line">
        <Timeline
          :value="eventsEng"
          layout="horizontal"
          align="alternate"
          class="time-line"
        >
          <template #opposite> &nbsp; </template>
          <template #content="slotProps">
            <span class="anio">{{ slotProps.item.anio }}</span> <br />
            <span class="descripcion">{{ slotProps.item.descripcion }}</span>
            <br />
            <span class="descripcion-mobile">{{ slotProps.item.tipo }}</span>
            <br />
          </template>
        </Timeline>
      </div>
    </div>

    <div class="contenedor-contact" id="contenedor-contact">
      <div class="contendor-detalle-contact" id="contendor-detalle-contact">
        <div class="titulo-contact">
          <h3 class="titulo-contacto"></h3>
        </div>

        <div class="contenedor-botones-contact">
          <div class="row-contacto">
            <div class="contenedor-item-contacto" @click="contactarWhatsApp()">
              <div class="item-contacto">
                <i class="pi pi-whatsapp contacto-contenido-icono" id="i1"></i>
              </div>
            </div>

            <div class="contenedor-item-contacto" @click="contactarLinkedin()">
              <div class="item-contacto">
                <i class="pi pi-linkedin contacto-contenido-icono" id="i1"></i>
              </div>
            </div>

            <div class="contenedor-item-contacto" @click="contactarGmail()">
              <div class="item-contacto">
                <i class="pi pi-comment contacto-contenido-icono" id="i1"></i>
              </div>
            </div>
          </div>

          <div class="row-contacto">
            <div class="contenedor-item-contacto" @click="contactarFacebook()">
              <div class="item-contacto">
                <i class="pi pi-facebook contacto-contenido-icono" id="i1"></i>
              </div>
            </div>

            <div class="contenedor-item-contacto" @click="contactarInstagram()">
              <div class="item-contacto">
                <i class="pi pi-instagram contacto-contenido-icono" id="i1"></i>
              </div>
            </div>

            <div class="contenedor-item-contacto" @click="contactarTwitter()">
              <div class="item-contacto">
                <i class="pi pi-twitter contacto-contenido-icono" id="i1"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="contenedor-img-contact">
        <img src="developer3.png" alt="" class="img-contact" />
      </div>
    </div>
  </div>

  <modal-nutrimarg ref="modalNutrimarg"></modal-nutrimarg>

  <modal-lala-deco-kids ref="modalLalaDecoKids"></modal-lala-deco-kids>

  <modal-modular ref="modalModular"></modal-modular>

  <modal-restaurant-app ref="ModalRestaurantApp"></modal-restaurant-app>
</template>

<script>
import ModalNutrimarg from "./modales/nutrimarg.vue";
import ModalLalaDecoKids from "./modales/laladecokids.vue";
import ModalModular from "./modales/modular.vue";
import ModalRestaurantApp from "./modales/restaurantapp.vue";

export default {
  components: {
    ModalNutrimarg,
    ModalLalaDecoKids,
    ModalModular,
    ModalRestaurantApp,
  },

  created() {},

  data() {
    return {
      selectedCountry: {
        name: "Español",
        code: "ES",
        bandera: "/espana.png",
      },

      countries: [
        {
          name: "Español",
          code: "ES",
          bandera: "/espana.png",
        },
        {
          name: "English",
          code: "IN",
          bandera: "/inglaterra.png",
        },
      ],

      products: [
        {
          name: "Nutrimarg balanceados",
          img: "/nutrimarg.jpg",
          url: "https://drive.google.com/drive/u/0/folders/1AYNb50NBRFMounpcIWwANYDjMANa1JIG",
          user: "",
        },
        {
          name: "ModulAr SRL",
          img: "/modular.jpg",
          url: "http://modular.balanceado.com.ar",
          user: "User: superadmin1@gmail.com // Password: 1234",
        },
        {
          name: "Lala Deco Kids",
          img: "/laladecokids.jpg",
          url: "http://lalakids.balanceado.com.ar",
          user: "User: angheredia // Password: 1234",
        },
      ],
      responsiveOptions: [
        {
          breakpoint: "1199px",
          numVisible: 3,
          numScroll: 3,
        },
        {
          breakpoint: "991px",
          numVisible: 2,
          numScroll: 2,
        },
        {
          breakpoint: "767px",
          numVisible: 1,
          numScroll: 1,
        },
      ],

      // events: ["2020", "2021", "2022", "2023"],
      events: [
        {
          anio: 2020,
          tipo: "Proyecto freelance",
          descripcion: "Nutrimarg Balanceados",
        },
        {
          anio: 2021,
          tipo: "Proyecto freelance",
          descripcion: "Lala Deco Kids",
        },
        {
          anio: 2022,
          tipo: "Proyecto freelance",
          descripcion: "ModulAr",
        },
        {
          anio: 2022,
          tipo: "Empresa de desarrollo de software",
          descripcion: "Macamedia",
        },
      ],

      eventsEng: [
        {
          anio: 2020,
          tipo: "Freelance project",
          descripcion: "Nutrimarg Balanceados",
        },
        {
          anio: 2021,
          tipo: "Freelance project",
          descripcion: "Lala Deco Kids",
        },
        {
          anio: 2022,
          tipo: "Freelance project",
          descripcion: "ModulAr",
        },
        {
          anio: 2022,
          tipo: "Software development company",
          descripcion: "Macamedia",
        },
      ],
    };
  },

  methods: {
    cambiarIdioma() {
      console.log("idioma");
      console.log(this.$store.state.idioma);
      console.log(this.selectedCountry);

      this.$store.state.idioma = this.selectedCountry;

      // console.log(this.$store.state.idioma);
    },

    async abrirNutrimarg() {
      let url =
        "https://drive.google.com/drive/u/0/folders/1AYNb50NBRFMounpcIWwANYDjMANa1JIG";

      window.open(url, "_blank");
    },

    async abrirLalaDeco() {
      let url = "http://lalakids.balanceado.com.ar";

      window.open(url, "_blank");
    },

    async abrirModular() {
      let url = "http://modular.balanceado.com.ar";

      window.open(url, "_blank");
    },

    async abrirRestaurantApp() {
      let url = "http://landingcarta.balanceado.com.ar";

      window.open(url, "_blank");
    },

    async abrirRestaurantAppPanel() {
      let url = "http://panelcarta.balanceado.com.ar";

      window.open(url, "_blank");
    },

    async contactarWhatsApp() {
      let mensaje = `¡Hola Fernando!"`;

      mensaje = mensaje + "\n";

      mensaje =
        mensaje +
        " Te envío este mensaje porque estoy interesado en contactarme con vos por motivos laborales, por favor contactame a la brevedad ";

      mensaje = mensaje + "\n";

      mensaje = mensaje + "¡¡¡Saludos!!!";

      let url = encodeURI("https://wa.me/" + 3843407142 + "?text=" + mensaje);

      window.open(url, "_blank");
    },

    async contactarLinkedin() {
      let url = "https://www.linkedin.com/in/fernandogonzalez2021/";

      window.open(url, "_blank");
    },

    async contactarGmail() {
      let url = "mailto:fernandojaviergonzalez2018@gmail.com";

      window.open(url, "_blank");
    },

    async contactarFacebook() {
      let url = "https://www.facebook.com/profile.php?id=100016015757633";

      window.open(url, "_blank");
    },

    async contactarInstagram() {
      let url = "https://www.instagram.com";

      window.open(url, "_blank");
    },

    async contactarTwitter() {
      let url = "https://twitter.com/?lang=es";

      window.open(url, "_blank");
    },
  },
};
</script>

<style>
:root {
  --principal-color: #01121c;
  --secondary-color: #002431;
  --third-color: #fe810e;
  --white-secondary: #959595;
}

/*  */
/* WEB */
/*  */
@media all and (min-width: 961px) {
  #contenedor-principal {
    overflow-y: scroll;
    scroll-behavior: smooth;
  }

  .contenedor-principal {
    background-color: var(--principal-color);
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .contenedor-header {
    position: fixed;
    width: 100%;
    border-radius: 0px;
    background-color: var(--principal-color);
    /* border: 1px solid red; */
    height: 8vh;
    display: flex;
  }

  .contenedor-nombre-desktop {
    margin: auto;
    width: 100%;
  }

  .contenedor-nombre-mobile {
    display: none;
  }

  .nombre {
    margin-left: 20px;
    color: var(--third-color);
  }

  .contenedor-secciones {
    display: flex;
    margin: auto;
    /* border: 1px solid green; */
    width: 100%;
  }

  .boton-secciones {
    text-decoration: none;
    color: #fff;
  }

  .boton-secciones:hover {
    text-shadow: -1px 1px 11px rgba(254, 129, 14, 1);
  }

  .boton-secciones-mobile {
    display: none;
    font-size: 0px;
    color: var(--principal-color);
  }

  .contenedor-btnhome {
    margin: auto;
  }

  .contenedor-btnsobremi {
    margin: auto;
  }

  .contenedor-btnproyectos {
    margin: auto;
  }

  .contenedor-btncontacto {
    margin: auto;
  }

  .contenedor-select-idiomas {
    margin: auto;
    /* border: 1px solid green; */
    width: 100%;
    padding-right: 20px;
    text-align: right;
  }

  .dropdown {
    width: 25vh;
    height: 6vh;
  }

  .country-item {
    display: flex;
    text-align: center;
  }

  .p-dropdown {
    border: 1px solid var(--principal-color) !important;
  }

  .contenedor-home {
    padding-top: 8vh;
    margin-top: 8vh;
    width: 100%;
    height: calc(100% - 8vh);
    /* border: 1px solid red; */
  }

  .saludo {
    text-align: center;
    margin-top: 20px;
  }

  .saludo-nombre {
    color: var(--third-color);
    margin-top: 20px;
  }

  .contenedor-img {
    /* height: 100%; */
    width: 100%;
    /* border: 1px solid green; */
    display: flex;
  }

  .img {
    margin: auto;
    height: 60vh;
    text-align: center;
    align-items: center;
    /* filter: drop-shadow(0px 0px 17px #fe810e); */
  }

  .contenedor-about-me {
    width: 100%;
    /* height: calc(100vh + 8vh); */
    height: 100vh;
    background-color: var(--secondary-color);
    /* border: 1px solid red; */
    display: flex;
    padding-top: 8vh;
  }

  .contenedor-img-about-me {
    height: calc(100vh - 8vh);
    background-color: var(--secondary-color);
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
  }

  .img-2 {
    height: 70vh;
    /* border: 1px solid red; */
    /* filter: drop-shadow(0px 0px 17px #fe810e); */
  }

  .contenedor-descripcion-about-me {
    margin-top: 20;
    /* border: 1px solid green; */
    width: 100%;
  }

  .descripcion-about-me {
    margin: auto;
    text-align: center;
    margin-top: 30px;
    font-size: calc(0.5em + 1vw);
  }

  .texto-destacado {
    color: var(--third-color);
  }

  .contenedor-cards-about-me {
    margin-top: 4vh;
    /* border: 1px solid red; */
    display: flex;
  }

  .card {
    width: 16vw;
    height: 30vh;
    margin: auto;
    border: 1px solid var(--principal-color);
    background-color: var(--principal-color);
    color: #fff;
  }

  .card:hover {
    border: 1px solid var(--third-color);
    background-color: var(--third-color);
    color: var(--principal-color);
  }

  .titulo-card {
    padding-top: 5px;
    text-align: center;
    height: 8vh;
    font-size: calc(0.5em + 0.8vw);
    /* border: 1px solid red; */
  }

  .card:hover .titulo-card {
    color: #fff !important;
  }

  .descripcion-card {
    padding: 10px;
    font-size: calc(0.4em + 0.4vw);
  }

  .contenedor-skills {
    margin-top: 2vh;
    /* border: 1px solid red; */
    display: flex;
    margin-right: 4vw;
  }

  .skill {
    margin: auto;
    /* border: 1px solid red; */
    height: 15vh;
    width: 15vh;
    border-radius: 50%;
  }

  .img-skill {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transition: transform 0.2s; /* Animation */
  }

  .img-skill:hover {
    transform: scale(1.3);
    cursor: pointer;
  }

  .contenedor-projects {
    width: 100%;
    height: calc(100vh - 8vh);
    background-color: var(--principal-color);
    /* border: 1px solid red; */
    display: flex;
    margin-top: 8vh;
    flex-direction: column;
    padding: 8px;
    padding-top: 8vh;
  }

  .contenedor-items-projects {
    display: flex;
    width: 100%;
    margin: 10px;
    /* height: calc(100vh - 8vh); */
    height: 40vh;
    /* border: 1px solid red; */
  }

  .contenedor-items-projects-mobile {
    display: none;
  }

  .contenedor-hover-projects {
    width: 100%;
    height: 40vh;
    /* border: 1px solid red; */
    display: flex;
  }

  .contenedor-hover-project {
    width: 25%;
    height: 40vh;
    /* border: 1px solid yellow; */
    transition: width 0.5s;
    align-items: center;
  }

  .nutrimarg {
    background: rgb(146, 51, 49);
    background: linear-gradient(
      180deg,
      rgba(146, 51, 49, 1) 0%,
      rgba(102, 35, 34, 1) 100%
    );
  }

  .laladeco {
    background: rgb(229, 199, 0);
    background: linear-gradient(
      0deg,
      rgba(229, 199, 0, 1) 0%,
      rgba(255, 222, 0, 1) 100%
    );
  }

  .titulo {
    height: 4vh;
    /* border: 1px solid green; */
  }

  .contenedor-imagen-hover {
    display: flex;
    align-items: center;
    /* border: 1px solid red; */
    height: 40vh;
  }

  .imagen-hover {
    margin: auto;
    height: 30vh;
    width: 20vw;
    transition: margin 0.5s;
  }

  .nutrimarg:hover .contenedor-imagen-hover .imagen-hover {
    width: 20vw !important;
  }

  .modular:hover .contenedor-imagen-hover .imagen-hover {
    width: 20vw !important;
  }

  .restaurantapp:hover .contenedor-imagen-hover .imagen-hover {
    width: 20vw !important;
  }

  .contenedor-descripcion-hover {
    /* border: 1px solid red; */
    width: 100%;
    height: 40vh;
    padding: 2vh;
    transition: margin 0.5s;
  }

  .titulo-hover {
    text-align: center;
  }

  .descripcion-hover {
    font-size: calc(0.4em + 0.4vw);
  }

  .btn-acceder {
    margin: auto;
    padding: 1vh;
    background-color: var(--third-color) !important;
    border: 1px solid var(--third-color) !important;
    color: var(--principal-color);
    border-radius: 3px;
  }

  .modular {
    background: rgb(60, 56, 111);
    background: linear-gradient(
      180deg,
      rgba(60, 56, 111, 1) 0%,
      rgba(39, 35, 96, 1) 100%
    );
  }

  .restaurantapp {
    background: rgb(40, 49, 52);
    background: linear-gradient(
      180deg,
      rgba(40, 49, 52, 1) 0%,
      rgba(17, 27, 30, 1) 100%
    );
  }

  .contenedor-hover-project:hover {
    width: 70%;
  }

  .contenedor-hover-project:hover .titulo {
    font-size: 20px;
  }

  .contenedor-hover-project:not(:hover) .titulo {
    display: none;
  }

  .contenedor-hover-project:not(:hover) .contenedor-descripcion-hover {
    display: none;
  }

  .contenedor-hover-project:hover .contenedor-imagen-hover {
    height: 40vh;
  }

  .contenedor-hover-project:hover .imagen-hover {
    margin-left: 4vh;
    width: 100%;
  }

  .contenedor-hover-project:not(:hover) .imagen-hover {
    width: 80%;
  }

  .contenedor-items {
    margin: auto;
    margin: 10px;
    height: 30vh;
    width: 100%;
    border: 1px solid var(--third-color);
    border-radius: 16px;
    background-color: var(--third-color);
    font-size: calc(0.5em + 0.4vw);
    transition: transform 0.2s; /* Animation */
  }

  .contenedor-items:hover {
    transform: scale(1.1);
    height: 60vh;
    cursor: pointer;
    z-index: 40;
  }

  .titulo-items-projects {
    height: 4vh;
    /* border: 1px solid red; */
    text-align: center;
    color: var(--secondary-color);
    display: flex;
    align-items: center;
    text-align: center;
  }

  .titulo-projects {
    margin: auto;
    text-align: center;
  }

  .img-items-projects {
    height: 16vh;
    /* border: 1px solid red; */
    text-align: center;
    color: var(--secondary-color);
  }

  .img-projects {
    width: 50%;
    height: 100%;
    border-radius: 8px;
    box-shadow: 0px 2px 6px 2px rgba(120, 120, 120, 1);
    text-shadow: -1px 1px 11px rgba(120, 120, 120, 1);
  }

  .descripcion-items-projects {
    height: 5vh;
    /* border: 1px solid red; */
    text-align: center;
    color: var(--secondary-color);
  }

  .descripcion-principal {
    margin-top: 1vh;
  }

  .descripcion-secundaria {
    margin-top: 1vh;
    /* border: 1px solid red; */
    display: none;
  }

  .contenedor-items:hover .descripcion-secundaria {
    display: block;
    font-size: calc(0.5em + 0.4vw);
  }

  .contenedor-items:hover .contenedor-items-projects {
    height: 40vh;
  }

  .contenedor-time-line {
    height: 100%;
    display: flex;
    align-items: center;
    /* border: 1px solid red; */
    padding: 20px;
    z-index: 4;
  }

  .time-line-mobile {
    display: none !important;
  }

  .anio {
    color: var(--third-color);
  }

  .contenedor-contact {
    width: 100%;
    height: calc(100vh - 8vh);
    background-color: var(--secondary-color);
    /* border: 1px solid red; */
    display: flex;
    margin-top: 8vh;
    padding: 8px;
  }

  .contendor-detalle-contact {
    margin: auto;
    width: 100%;
    /* border: 1px solid red; */
    height: calc(100vh - 9vh);
    padding-top: 8vh;
    color: var(--third-color);
  }

  .titulo-contacto {
    text-align: center;
    font-size: calc(1em + 1vw);
  }

  .contenedor-botones-contact {
    height: calc(100vh - 24vh);
    /* border: 1px solid green; */
    display: flex;
    margin: auto;
    flex-direction: column;
    align-items: center;
  }

  .row-contacto {
    display: flex;
    width: 100%;
    align-items: center;
  }

  .contenedor-item-contacto {
    margin: auto;
    /* border: 1px solid yellow; */
    margin: 4vw;
    width: 100%;
    height: 14vh;
    text-align: center;
    display: flex;
  }

  .item-contacto {
    margin: auto;
    border: 1px solid var(--principal-color);
    background-color: var(--principal-color);
    /* height: 14vh; */
    height: 20vh;
    width: 10vw;
    display: flex;
    transition: transform 0.2s; /* Animation */
    border-radius: 50%;
  }

  .item-contacto:hover {
    background-color: var(--third-color);
    transform: scale(1.3);
    cursor: pointer;
  }

  .item-contacto:hover .contacto-contenido-icono {
    color: var(--principal-color) !important;
  }

  .contacto-contenido-icono {
    margin: auto;
    font-size: 4rem !important;
    color: #fff;
  }

  .contenedor-img-contact {
    margin: auto;
    width: 100%;
    /* border: 1px solid red; */
    height: calc(100vh - 9vh);
  }

  .img-contact {
    height: calc(100vh - 8vh);
    width: 100%;
  }
}

/*  */
/* MOBILE */
/*  */
@media all and (max-width: 960px) {
  .contenedor-principal {
    background-color: var(--principal-color);
    height: 100vh;
    display: flex;
    flex-direction: column;
    width: 100%;
    /* border: 1px solid yellow; */
  }

  .contenedor-header {
    position: fixed;
    width: 100%;
    border-radius: 0px;
    background-color: var(--principal-color);
    /* border: 1px solid red; */
    height: 8vh;
    display: flex;
  }

  .contenedor-nombre-desktop {
    display: none;
  }

  .contenedor-nombre-mobile {
    margin: auto;
    width: 100%;
    /* border: 1px solid red; */
  }

  .nombre {
    margin-left: 20px;
    color: var(--third-color);
  }

  .contenedor-secciones {
    display: flex;
    margin: auto;
    /* border: 1px solid green; */
    width: 100%;
  }

  .boton-secciones {
    display: none;
  }

  .boton-secciones-mobile {
    text-decoration: none;
    color: #fff;
  }

  .boton-secciones-mobile:hover {
    text-shadow: -1px 1px 11px rgba(254, 129, 14, 1);
  }

  .contenedor-btnhome {
    margin: auto;
    /* border: 1px solid red; */
  }

  .contenedor-btnsobremi {
    margin: auto;
  }

  .contenedor-btnproyectos {
    margin: auto;
  }

  .contenedor-btncontacto {
    margin: auto;
  }

  .contenedor-select-idiomas {
    margin: auto;
    /* border: 1px solid green; */
    width: 100%;
    padding-right: 20px;
    text-align: right;
  }

  .dropdown {
    width: 10vh;
    height: 6vh;
  }

  .country-item {
    display: flex;
    text-align: center;
  }

  .p-dropdown {
    border: 1px solid var(--principal-color) !important;
  }

  /*  */
  /* HOME */
  /*  */

  .contenedor-home {
    width: 100%;
    height: calc(100vh + 8vh);
    height: 100vh;
    background-color: var(--principal-color);
    /* border: 1px solid red; */
    padding-top: 8vh;
    margin-top: 8vh;
  }

  .saludo {
    text-align: center;
    margin-top: 20px;
  }

  .saludo-nombre {
    color: var(--third-color);
    margin-top: 20px;
  }

  .contenedor-img {
    /* height: 100%; */
    width: 100%;
    /* border: 1px solid green; */
    display: flex;
  }

  .img {
    margin: auto;
    height: 50vh;
    width: 100%;
    text-align: center;
    align-items: center;
  }

  /*  */
  /* ABOUT ME */
  /*  */

  .contenedor-about-me {
    width: 100%;
    height: calc(100vh + 8vh);
    height: 100vh;
    background-color: var(--secondary-color);
    /* border: 1px solid red; */
    display: flex;
    padding-top: 8vh;
    flex-direction: column;
  }

  .contenedor-img-about-me {
    height: calc(100vh - 8vh);
    background-color: var(--secondary-color);
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    width: 100%;
  }

  .img-2 {
    margin: auto;
    height: 30vh;
    width: 50vw;
    /* border: 1px solid red; */
    /* filter: drop-shadow(0px 0px 17px #fe810e); */
  }

  .contenedor-descripcion-about-me {
    margin-top: 20;
    /* border: 1px solid green; */
    width: 100%;
    padding: 5px;
  }

  .descripcion-about-me {
    margin: auto;
    text-align: center;
    margin-top: 10px;
    font-size: calc(0.5em + 1vw);
  }

  .texto-destacado {
    color: var(--third-color);
  }

  .contenedor-cards-about-me {
    margin-top: 1vh;
    /* border: 1px solid red; */
    display: flex;
  }

  .card {
    width: 30%;
    height: 25vh;
    margin: auto;
    border: 1px solid var(--principal-color);
    background-color: var(--principal-color);
    color: #fff;
  }

  .card:hover {
    border: 1px solid var(--third-color);
    background-color: var(--third-color);
    color: var(--principal-color);
  }

  .titulo-card {
    padding-top: 5px;
    text-align: center;
    height: 8vh;
    font-size: calc(0.5em + 0.8vw);
    /* border: 1px solid red; */
  }

  .card:hover .titulo-card {
    color: #fff !important;
  }

  .descripcion-card {
    padding: 10px;
    padding-top: 5px;
    /* font-size: calc(0.5em + 0.5vw); */
    font-size: calc(0.4em + 0.4vw);
  }

  .contenedor-skills {
    margin-top: 1vh;
    /* border: 1px solid red; */
    display: flex;
    margin-right: 4vw;
    padding: 5px;
  }

  .skill {
    margin: auto;
    /* border: 1px solid red; */
    height: 8vh;
    width: 8vh;
    border-radius: 50%;
  }

  .img-skill {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transition: transform 0.2s; /* Animation */
  }

  /* .img-skill:hover {
    transform: scale(1.3);
    cursor: pointer;
  } */

  /*  */
  /* PROJECTS */
  /*  */

  .contenedor-projects {
    width: 100%;
    height: calc(100vh + 8vh);
    height: 100vh;
    background-color: var(--principal-color);
    /* border: 1px solid red; */
    display: flex;
    /* margin-top: 8vh; */
    /* flex-direction: column; */
    padding: 8px;
    padding-top: 8vh;
    flex-direction: column;
  }

  .contenedor-items-projects {
    display: none;
  }

  .contenedor-items-projects-mobile {
    display: flex;
    /* border: 1px solid red; */
  }

  .contenedor-items-projects-mobile:hover .descripcion-secundaria {
    display: block;
    font-size: calc(0.5em + 0.4vw);
  }

  .contenedor-items-projects-mobile:hover .contenedor-items-projects {
    height: 40vh;
  }

  .contenedor-hover-projects {
    display: none;
  }

  .contenedor-items {
    border: 1px solid var(--third-color);
    border-radius: 16px;
    background-color: var(--third-color);
    font-size: calc(0.5em + 0.4vw);
    transition: transform 0.2s; /* Animation */
    /* border: 1px solid yellow; */
    margin-top: 10px;
    padding: 10px;
    width: 50%;
    margin: 5px;
  }

  .contenedor-items:hover {
    cursor: pointer;
    margin: auto;
  }

  .titulo-items-projects {
    height: 4vh;
    /* border: 1px solid red; */
    text-align: center;
    color: var(--secondary-color);
    display: flex;
    align-items: center;
    text-align: center;
  }

  .titulo-projects {
    margin: auto;
    text-align: center;
  }

  .img-items-projects {
    height: 16vh;
    /* border: 1px solid red; */
    text-align: center;
    color: var(--secondary-color);
  }

  .img-projects {
    width: 90%;
    height: 100%;
    border-radius: 8px;
    margin-bottom: 10px;
    /* box-shadow: 0px 2px 6px 2px rgba(120, 120, 120, 1); */
    /* text-shadow: -1px 1px 11px rgba(120, 120, 120, 1); */
  }

  .descripcion-items-projects {
    height: 30vh;
    /* border: 1px solid red; */
    text-align: center;
    color: var(--secondary-color);
    display: none;
  }

  .descripcion-principal {
    margin-top: 1vh;
  }

  .contenedor-time-line {
    height: 100%;
    display: flex;
    align-items: center;
    /* border: 1px solid red; */
    padding: 20px;
  }

  .descripcion-mobile {
    display: none;
  }

  .time-line-mobile {
    display: none !important;
  }

  .anio {
    color: var(--third-color);
  }

  /*  */
  /* CONTACT */
  /*  */

  .contenedor-contact {
    width: 100%;
    height: calc(100vh - 8vh);

    background-color: var(--secondary-color);
    /* border: 1px solid red; */
    display: flex;
    padding: 8px;
    flex-direction: column;
  }

  .contendor-detalle-contact {
    margin: auto;
    width: 100%;
    /* border: 1px solid red; */
    height: calc(50vh - 9vh);
    padding-top: 8vh;
    color: var(--third-color);
  }

  .titulo-contacto {
    text-align: center;
    font-size: calc(1em + 1vw);
  }

  .contenedor-botones-contact {
    height: calc(60vh - 24vh);
    /* border: 1px solid green; */
    display: flex;
    margin: auto;
    flex-direction: column;
    align-items: center;
  }

  .row-contacto {
    display: flex;
    width: 100%;
    align-items: center;
  }

  .contenedor-item-contacto {
    margin: auto;
    /* border: 1px solid yellow; */
    margin: 2vw;
    width: 100%;
    height: 14vh;
    text-align: center;
    display: flex;
  }

  .item-contacto {
    margin: auto;
    border: 1px solid var(--principal-color);
    background-color: var(--principal-color);
    /* height: 14vh; */
    height: 12vh;
    width: 25vw;
    display: flex;
    transition: transform 0.2s; /* Animation */
    border-radius: 50%;
  }

  /* .item-contacto:hover {
    background-color: var(--third-color);
    transform: scale(1.3);
    cursor: pointer;
  } */

  /* .item-contacto:hover .contacto-contenido-icono {
    color: var(--principal-color) !important;
  } */

  .contacto-contenido-icono {
    margin: auto;
    font-size: 3rem !important;
    color: #fff;
  }

  .contenedor-img-contact {
    margin: auto;
    width: 100%;
    /* border: 1px solid red; */
    height: calc(60vh - 9vh);
  }

  .img-contact {
    height: calc(60vh - 8vh);
    width: 100%;
  }
}
</style>
