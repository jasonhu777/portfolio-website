// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAk9ig05rBanZCvlsed8kSmVYee-3JGc6I",
  authDomain: "jasonhuportfolio.firebaseapp.com",
  projectId: "jasonhuportfolio",
  storageBucket: "jasonhuportfolio.appspot.com",
  messagingSenderId: "58861055796",
  appId: "1:58861055796:web:847d6003119c351e75ff61"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages')

// Save message to firebase
const saveMessage = (name, email, message) => {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name,
    email,
    message
  })
}

// get userInput
const getInputVal = id => {
  return document.getElementById(id).value;
}
//  submit form
const submitForm = e => {
  e.preventDefault()

  var contactName = getInputVal('Contact-name')
  var contactEmail = getInputVal('Contact-email')
  var contactMessage = getInputVal('Contact-message')

  saveMessage(contactName, contactEmail, contactMessage)

  document.getElementById('alert').style.visibility = 'visible'
  document.getElementById('Contact-form').reset();
}


document.getElementById('Contact-form').addEventListener('submit', submitForm);

