import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import "./assets/styles/tailwind.css";
import "./assets/styles/global.css";
import i18n from "./languages/i18n";

createApp(App).use(i18n).use(Antd).use(router).mount("#app");
