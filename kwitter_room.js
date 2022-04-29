const firebaseConfig = {
      apiKey: "AIzaSyDTSFYWpz7n-EY9fchtdulHLoUlJAU86-s",
      authDomain: "kwitter-c441b.firebaseapp.com",
      databaseURL: "https://kwitter-c441b-default-rtdb.firebaseio.com",
      projectId: "kwitter-c441b",
      storageBucket: "kwitter-c441b.appspot.com",
      messagingSenderId: "471663597690",
      appId: "1:471663597690:web:5e43ca39c51f9d696943c3",
      measurementId: "G-H1LZBLH3BQ"
    };

    // Initialize Firebase
const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
