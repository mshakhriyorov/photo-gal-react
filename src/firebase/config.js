 import  firebase from 'firebase/app';
 import 'firebase/storage';
 import 'firebase/firestore';
 
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCPUdPDs8NtSfUUuAqu4iNn6m6f6xEAU4g",
    authDomain: "photo-gallery-react-c3a79.firebaseapp.com",
    projectId: "photo-gallery-react-c3a79",
    storageBucket: "photo-gallery-react-c3a79.appspot.com",
    messagingSenderId: "489528847616",
    appId: "1:489528847616:web:40d64c1639aab27bf4d7e5",
    measurementId: "G-PP0VH0QWH7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectFirestore, projectStorage, timestamp };