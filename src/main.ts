import { createApp } from "vue";
import { createPinia } from "pinia";
import { OktaAuth } from "@okta/okta-auth-js";
import OktaVue from "@okta/okta-vue";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
