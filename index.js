$(function(){
var config = {
  apiKey: "AIzaSyAOwTLGvLYT9GbjhQAkSL1YzN3NtfGHmGs",
  authDomain: "fitme-839c6.firebaseapp.com",
  databaseURL: "https://fitme-839c6.firebaseio.com",
  projectId: "fitme-839c6",
  storageBucket: "fitme-839c6.appspot.com",
  messagingSenderId: "306506945323"
};
firebase.initializeApp(config);

  $(".js-form").on('submit',event =>{
        event.preventDefault();
       var name=$("#js-name").val();
       var email=$("#js-email").val();
       var password=$("#js-password").val();
       var salsa=$("#js-salsa").val();
       var yoga=$("#js-yoga").val();
       var aerobics=$("#js-aerobics").val();
       console.log(name,email,password,salsa,yoga,aerobics);
       firebase.auth().createUserWithEmailAndPassword(email, password)
       .then(user => {
         firebase.database().ref('classes').push({salsa, yoga, aerobics,});
         })
         .catch(function(error) {
         // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
         // ...
         });
         firebase.auth().signInWithEmailAndPassword(email,password)
          .then(user => {
          firebase.database().ref('classes').push({
           salsa, yoga, aerobics,
           });
          })
         .catch(error =>{
          console.log(error);
       });
    });
});



// var mainText=document.getElementById("mainText")
// var submit= document.getElementById("submitButton");
// var salsa=ref.child("salsa");
// function submitClick(){
//  // window.alert("hi there");
//
//   var firebaseRef=firebase.database().ref();
//
//   var messageText=mainText.value;
//
//   firebaseRef.push().set(messageText);
//
// };


// var login = $("#submit").val();
//     //get the value of the password
//     var password = $("#passwordInput").val();
//
//     console.log(login, password);
//     register(login, password);
//
//     return false;
//   })
//
//   ////Detect the authication state
//   var reg = new Firebase("https://data-application1.firebaseio.com");
//   reg.onAuth(function(authData){
//     console.log("info on authentication");
//     if(authData){
//       //you are logged in
//
//     }else{
//       //you are not logged in
//
//     }
//   })
//   //////Let a user Register in Firebase
//   //////with password/email
//   function register(email, password){
//     reg.createUser({
//       email: email,
//       password: password
//     }, function(error, userData){
//       if(error){
//         alert("You did not register");
//       }else{
//         alert("You registered"+userData.uid);
//       }
//     })
//   }
// })
