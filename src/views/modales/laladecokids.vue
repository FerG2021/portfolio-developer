<template>
  <div>
    <Toast />

    <Dialog
      v-model:visible="display"
      icon="pi pi-refresh"
      :style="{ width: '90%' }"
      class="flex justify-content-center card-detalle"
      :draggable="false"
      header="Lala Deco Kids"
    >
      <img src="laladecokids.jpg" alt="" srcset="" class="img" />

      <p class="descripcion-principal">
        Laravel - Blade - MySQL <br />
        <span class="anio-modal"> 2020 - 2021 </span>
      </p>

      <div v-if="$store.state.idioma.code == 'ES'">
        <p class="descripcion-secundaria">
          Empresa dedicada a la venta de artículos de primera infancia.
          Eldesarrollo del software fue solicitado debido a que no se contaba
          con uno para llevar la contabilidad, ventas, stock de productos y
          estado de las cuntas corrientes de clientes, además realizar el envío
          de comprobantes de compra y cuenta corriente por WhatsApp, mail o
          descarga directa para poder utilizar la menor cantidad posible de
          papel y acercar cada vez más a los clientes a la tecnología
        </p>

        <b
          >User: angheredia <br />
          Password: 1234</b
        >

        <div class="contenedor-btn">
          <Button
            label="Acceder"
            severity="warning"
            class="btn-acceder"
            icon="pi pi-window-maximize"
            iconPos="right"
            @click="abrirLalaDeco()"
          />
        </div>
      </div>

      <div v-if="$store.state.idioma.code == 'IN'">
        <p class="descripcion-secundaria">
          Company dedicated to the sale of early childhood items. The
          development of the software was requested because there was no with
          one to keep accounting, sales, stock of products and status of current
          customer accounts, in addition to making the shipment proof of
          purchase and current account by WhatsApp, mail or direct download to
          be able to use the least amount of paper and bring customers closer to
          technology
        </p>

        <b
          >User: angheredia <br />
          Password: 1234</b
        >

        <div class="contenedor-btn">
          <Button
            label="Access"
            severity="warning"
            class="btn-acceder"
            icon="pi pi-window-maximize"
            iconPos="right"
            @click="abrirLalaDeco()"
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

    async abrirLalaDeco() {
      let url = "http://lalakids.balanceado.com.ar";

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
