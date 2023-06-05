const firebase = require("firebase");
const firebaseConfig = {
 apiKey: "AIzaSyBQX984a_P6PToDgZXZz4Ol40y1-UJY9Xs",
  authDomain: "foodapp01-d1dc6.firebaseapp.com",
  projectId: "foodapp01-d1dc6",
  storageBucket: "foodapp01-d1dc6.appspot.com",
  messagingSenderId: "165192221194",
  appId: "1:165192221194:web:1d5141f8e87dea9359d5f3",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("users");
const Category = db.collection("categories");
const Dishes = db.collection("dishes");
const Orders = db.collection("orders");
module.exports = { User, Category, Dishes, Orders };
