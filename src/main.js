import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import count from "./new";
import config from "./config";

console.log(count);
console.log(config);

createApp(App).mount("#app");
