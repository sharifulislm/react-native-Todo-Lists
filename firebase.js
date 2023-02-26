import firebase from 'react-native-firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCDuc9yQYfvKMEbpysBUJ8CN6_faGdUbyo",
    authDomain: "esctodo-app.firebaseapp.com",
    databaseURL: "https://esctodo-app-default-rtdb.firebaseio.com",
    projectId: "esctodo-app",
    storageBucket: "esctodo-app.appspot.com",
    messagingSenderId: "1038602477492",
    appId: "1:1038602477492:web:4a0af3c08845505add1ce1"

};

firebase.initializeApp(firebaseConfig);

export default firebase;
