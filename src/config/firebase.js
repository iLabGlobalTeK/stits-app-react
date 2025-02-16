// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB8fQLz-6YNnP42q9hq06lNjQM8nky6ZJs",
    authDomain: "stits-app.firebaseapp.com",
    databaseURL: "https://stits-app-default-rtdb.firebaseio.com",
    projectId: "stits-app",
    storageBucket: "stits-app.appspot.com",
    messagingSenderId: "379207864104",
    appId: "1:379207864104:web:1eae5b0587fce01a804a1d",
    measurementId: "G-EBLF5ZGH9B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }