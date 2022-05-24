const firebaseConfig = {
  apiKey: "AIzaSyC8eVJS8RNRFYm04w_NE1jdpw3nsghDfNI",
  authDomain: "user-page-1a017.firebaseapp.com",
  databaseURL: "https://user-page-1a017-default-rtdb.firebaseio.com",
  projectId: "user-page-1a017",
  storageBucket: "user-page-1a017.appspot.com",
  messagingSenderId: "222688279565",
  appId: "1:222688279565:web:aecdd49d375c34e923e944",
  measurementId: "G-GLPB5EZX77"
};
  
// for intializing the database
firebase.initializeApp(firebaseConfig);

//refrence your database
var registrationDB = firebase.database().ref('loginForm');
var addingDB = firebase.database().ref('addingspotform');

document.getElementById('loginform').addEventListener("submit", submitform);
document.getElementById('addingspotform').addEventListener("submit", acceptform);

function submitform(e) {
  e.preventDefault();
  var name = getElementVal('uname');
  var carno = getElementVal('ucarno');
  console.log(name, carno);
   
  saveMessages (name, carno);
}
function acceptform(e) {
    e.preventDefault();
    var oname = getElementVal('oname');
    var loc = getElementVal('location');
  var money = getElementVal("charge");
  console.log(oname, loc, money);
   
  savedata (oname, loc, money);
}

const saveMessages = (name, carno) => {
  var newRegistration = registrationDB.push();

  newRegistration.set({
    username1: name,
    usercarno: carno,
  });
}
const savedata = (oname, loc, money) => {
  var newlocation = addingDB.push();

  newlocation.set({
    username2: oname,
    location: loc,
    charges: money,
  });
}

function getElementVal(id) {
  return document.getElementById(id).value;
}


