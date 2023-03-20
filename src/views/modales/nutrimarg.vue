<template>
  <div>
    <Toast />

    <Dialog
      v-model:visible="display"
      icon="pi pi-refresh"
      :style="{ width: '90%' }"
      class="flex justify-content-center card-detalle"
      :draggable="false"
      header="Nutrimarg Balanceados"
    >
      <img src="/nutrimarg.jpg" alt="" srcset="" class="img" />

      <p class="descripcion-principal">
        Vue.js - Laravel - MySQL <br />
        <span class="anio-modal"> 2021 - 2022 </span>
      </p>

      <div v-if="$store.state.idioma.code == 'ES'">
        <p class="descripcion-secundaria">
          Nutrimarg balanceados es una firma que se dedica a la venta de
          artículos de forrajería, productos agrícolas y de jardín. El
          desarrollo del software fue solicitado debido a que no se contaba con
          uno para llevar la contabilidad, ventas, stock de productos con la
          dificultad de que los mismos se pueden vender particionados, en bolsas
          completas o por cierta monto de dinero; y estado de las cuentas
          corrientes de clientes, permite descargar comprobantes de compra y
          cuenta corriente
        </p>

        <div class="contenedor-btn">
          <Button
            label="Acceder"
            severity="warning"
            class="btn-acceder"
            icon="pi pi-window-maximize"
            iconPos="right"
            @click="abrirNutrimarg()"
          />
        </div>
      </div>

      <div v-if="$store.state.idioma.code == 'IN'">
        <p class="descripcion-secundaria">
          Balanced Nutrimarg is a firm dedicated to the sale of articles of
          fodder, agricultural and garden products. The development of software
          was requested because there was not one to go accounting, sales, stock
          of products with the difficulty that the They can be sold partitioned,
          in complete bags or by certain amount of money; and status of current
          customer accounts, allows download proof of purchase and checking
          account
        </p>

        <div class="contenedor-btn">
          <Button
            label="Access"
            severity="warning"
            class="btn-acceder"
            icon="pi pi-window-maximize"
            iconPos="right"
            @click="abrirNutrimarg()"
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

    async abrirNutrimarg() {
      let url =
        "https://drive.google.com/drive/u/0/folders/1AYNb50NBRFMounpcIWwANYDjMANa1JIG";

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
    width: 20% !important;
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
