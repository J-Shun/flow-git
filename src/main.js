import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import count from "./new";
import config from "./config";

console.log(count);
console.log(config);
console.log("other");

createApp(App).mount("#app");
