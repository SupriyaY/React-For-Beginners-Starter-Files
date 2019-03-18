import Rebase from "re-base";
import firebase from "firebase";


const firebaseApp = firebase.initializeApp({    
        apiKey: "AIzaSyCUQxHf0F_125P7iBlW0gcqkrLQh2_CBl8",
        authDomain: "catch-of-th-day-sy.firebaseapp.com",
        databaseURL: "https://catch-of-th-day-sy.firebaseio.com",
      
});

const base = Rebase.createClass(firebaseApp.database());

//This is a named export
export {firebaseApp};

//this is a default export
export default base;