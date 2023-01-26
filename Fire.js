import '@firebase/firestore';
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCDuc9yQYfvKMEbpysBUJ8CN6_faGdUbyo",
    authDomain: "esctodo-app.firebaseapp.com",
    databaseURL: "https://esctodo-app-default-rtdb.firebaseio.com",
    projectId: "esctodo-app",
    storageBucket: "esctodo-app.appspot.com",
    messagingSenderId: "1038602477492",
    appId: "1:1038602477492:web:4a0af3c08845505add1ce1"
  };

class Fire {
    init() {
        if(!firebase.apps.length){
        firebase.initializeApp(firebaseConfig);
        }
        firebase.auth().onAuthStateChanged(user => {
            if(user) {

            }else {
                firebase
                .auth()
                .signInAnonymously()
                .catch(error => { })
            } 
        });
    }
}
export default Fire;