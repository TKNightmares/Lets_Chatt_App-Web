// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDUh31gVgo3wFqlTDD4s6_Foi8K0RICPDE",
    authDomain: "lets-chatt-app-web.firebaseapp.com",
    projectId: "lets-chatt-app-web",
    storageBucket: "lets-chatt-app-web.appspot.com",
    messagingSenderId: "477209676773",
    appId: "1:477209676773:web:ac96d2cbcd5dba9d1a3d0c"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
    });});}
    getData();