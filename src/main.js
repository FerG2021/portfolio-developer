import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import PrimeVue from "primevue/config";

import "animate.css";

//
// PRIME VUE
//

// PrimeVue Components
// import 'primevue/resources/themes/saga-blue/theme.css'        //theme
import "primevue/resources/themes/lara-dark-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css";

// Menubar
import Menubar from "primevue/menubar";

// Dropdown
import Dropdown from "primevue/dropdown";

// InputText
import InputText from "primevue/inputtext";

// Carousel
import Carousel from "primevue/carousel";

// Timeline
import Timeline from "primevue/timeline";

// Button
import Button from "primevue/button";

// vuex
import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state: {
    idioma: {
      name: "Español",
      code: "ES",
      bandera: "/espana.png",
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});

createApp(App)
  .component("InputText", InputText)
  .component("Menubar", Menubar)
  .component("Dropdown", Dropdown)
  .component("Carousel", Carousel)
  .component("Timeline", Timeline)
  .component("Button", Button)
  .use(PrimeVue)
  .use(store)
  .mount("#app");
