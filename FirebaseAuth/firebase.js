// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGL24xUKlpJu07VuX_EiRv4u_LKeZAxnk",
  authDomain: "nativebase-e2913.firebaseapp.com",
  projectId: "nativebase-e2913",
  storageBucket: "nativebase-e2913.appspot.com",
  messagingSenderId: "716996732121",
  appId: "1:716996732121:web:c71658d02a069d55f80ac8"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
}else {
  app = firebase.app()
}

const auth = firebase.auth();

export { auth };