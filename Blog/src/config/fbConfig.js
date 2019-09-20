import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
  apiKey: "AIzaSyDAm6PoJmbrKJ1EYqe-6OKS3zHpv7HRGq0",
  authDomain: "webstore-2018.firebaseapp.com",
  databaseURL: "https://webstore-2018.firebaseio.com",
  projectId: "webstore-2018",
  storageBucket: "webstore-2018.appspot.com",
  messagingSenderId: "632295063160",
  appId: "1:632295063160:web:83eb74f862fdd566"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 