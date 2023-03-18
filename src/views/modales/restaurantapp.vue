<template>
  <div>
    <Toast />

    <Dialog
      v-model:visible="display"
      icon="pi pi-refresh"
      :style="{ width: '90%' }"
      class="flex justify-content-center card-detalle"
      :draggable="false"
      header="RestaurantApp"
    >
      <img src="restaurantapp.png" alt="" srcset="" class="img" />

      <p class="descripcion-principal">
        Vue.js - Laravel - MySQL <br />
        <span class="anio-modal"> 2023 </span>
      </p>

      <div v-if="$store.state.idioma.code == 'ES'">
        <p class="descripcion-secundaria">
          Sistema que permite a los clientes visualizar la carta del local con
          sólo escanear un QR. Consta de una landing page para los clientes y un
          panel para el usuario donde puede agregar, modificar, eliminar u
          ocultar categorías, subcategorías o productos
        </p>

        <b
          >User: ferg@gmail.com <br />
          Password: 40899041</b
        >

        <div class="contenedor-btn">
          <Button
            label="Acceder"
            severity="warning"
            class="btn-acceder"
            icon="pi pi-window-maximize"
            iconPos="right"
            @click="abrirRestaurantApp()"
          />
        </div>
      </div>

      <div v-if="$store.state.idioma.code == 'IN'">
        <p class="descripcion-secundaria">
          System that allows customers to view the local menu with just scan a
          QR. It consists of a landing page for customers and a panel for the
          user where you can add, modify, delete or hide categories,
          subcategories or products
        </p>

        <b
          >User: ferg@gmail.com <br />
          Password: 40899041</b
        >

        <div class="contenedor-btn">
          <Button
            label="Access"
            severity="warning"
            class="btn-acceder"
            icon="pi pi-window-maximize"
            iconPos="right"
            @click="abrirRestaurantApp()"
          />
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      display: false,
    };
  },

  methods: {
    abrir() {
      this.display = true;
    },

    cerrar() {
      this.$toast.add({
        severity: "error",
        summary: "Ventana cerrada con éxito",
        detail: "Message Content",
        life: 3000,
      });
      this.display = false;
    },

    async abrirRestaurantApp() {
      let url = "http://landingcarta.balanceado.com.ar";

      window.open(url, "_blank");
    },
  },
};
</script>

<style scoped>
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
  .card-detalle {
    display: none;
    border: 1px solid red !important;
  }
  .field {
    margin-bottom: 1.5rem;
  }

  .header {
    margin: 0px !important;
  }

  .p-dialog {
    border-radius: 30% !important;
    background: #fff;
  }

  .p-inputtext {
    background: #fff;
    color: #000;
  }

  .imagen-detalle {
    width: 100%;
    border-radius: 20px;
  }

  .nombre-detalle {
    color: #000;
    font-weight: bold !important;
  }

  .descripcion-detalle {
    color: var(--description);
  }

  .contenedor-imagen {
    display: flex;
  }

  .ver-imagen {
    margin: auto;
    width: 40%;
    height: 40%;
  }

  .p-image-preview-indicator {
    width: 100%;
    border-radius: 20px !important;
  }
}

/*  */
/* MOBILE */
/*  */
@media all and (max-width: 960px) {
  .field {
    margin-bottom: 1.5rem;
  }

  .header {
    margin: 0px !important;
  }

  .p-dialog {
    border-radius: 30% !important;
    background: #fff;
  }

  .p-inputtext {
    background: #fff;
    color: #000;
  }

  .imagen-detalle {
    width: 100%;
    border-radius: 20px;
  }

  .nombre-detalle {
    color: #000;
    font-weight: bold !important;
  }

  .descripcion-detalle {
    color: var(--description);
  }

  .contenedor-imagen {
    display: flex;
  }

  .ver-imagen {
    margin: auto;
  }

  /*  */
  /* NUEVO ESTILOS */
  /*  */
  .img {
    width: 100%;
    height: 20vh;
    border-radius: 20px;
  }

  .descripcion-secundaria {
    color: var(--white-secondary);
  }

  .contenedor-btn {
    display: flex;
    margin-top: 2vh;
  }

  .btn-acceder {
    margin: auto;
    background-color: var(--third-color) !important;
    border: 1px solid var(--third-color) !important;
    color: var(--principal-color);
  }
}
</style>
