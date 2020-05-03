import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


 
 
 
 
 
 
 const config =  {
        apiKey: "AIzaSyARsRhlakmLrPjyD0MBNDo0k8g9RnxLcBk",
        authDomain: "dangold-8c6de.firebaseapp.com",
        databaseURL: "https://dangold-8c6de.firebaseio.com",
        projectId: "dangold-8c6de",
        storageBucket: "dangold-8c6de.appspot.com",
        messagingSenderId: "65364318642",
        appId: "1:65364318642:web:76895ace7334269c93ecab",
        measurementId: "G-27G1Y6KHRN"
      };  



      export const fire = firebase.initializeApp(config);


      
export const AddcollectionDocument = (collectionKey, ObjectToAdd)=>{
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;









