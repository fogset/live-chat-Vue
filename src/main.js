import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDLpVP35Rd70yNoxslQfrCHocu8XxCgRIQ",
    authDomain: "udemy-vue-firebase-sites-d6a28.firebaseapp.com",
    projectId: "udemy-vue-firebase-sites-d6a28",
    storageBucket: "udemy-vue-firebase-sites-d6a28.appspot.com",
    messagingSenderId: "619188637818",
    appId: "1:619188637818:web:84e0c227e0c3ad69fcebc3",
};
initializeApp(firebaseConfig);

createApp(App).use(router).mount("#app");
