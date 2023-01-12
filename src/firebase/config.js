import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//Acá va TU configuración de firabase, fijate que esté bien, a mi, abajo del appId me sale tambien "measurementId"
const firebaseConfig = {
  apiKey: "AIzaSyCW_1HQt9YeyyyNvx1viWCPk5IOqGfOCNw",
  authDomain: "indivar-deco.firebaseapp.com",
  projectId: "indivar-deco",
  storageBucket: "indivar-deco.appspot.com",
  messagingSenderId: "682793693243",
  appId: "1:682793693243:web:7330fb1c62b412454b2c1e"
};


const app = initializeApp(firebaseConfig);
const database = getFirestore(app)

export default database