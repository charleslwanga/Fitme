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
      //  var name=$("#js-name").val();
       var email=$("#js-email").val();
       var password=$("#js-password").val();
      //  var salsa=$("#js-salsa").val();
      //  var yoga=$("#js-yoga").val();
      //  var aerobics=$("#js-aerobics").val();
       console.log(email,password);
       firebase.auth().createUserWithEmailAndPassword(email, password)
       .then(user => {
         firebase.database().ref('Subscribe').push({email,password,});
         })
         .catch(function(error) {
         // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
         // ...
         });
         firebase.auth().signInWithEmailAndPassword(email,password)
          .then(user => {
          firebase.database().ref('Subscribe').push({email,password
           });
          })
         .catch(error =>{
          console.log(error);
       });
    });
});
// retrieving data
// $(document).ready(function(){
//   var rootRef =firebase.database().ref().child("users");
//   rootRef.on("child_added", snap =>{
//     var aerobics1=snap.child("aerobics").val();
//     var salsa1=snap.child("salsa").val();
//     var yoga1=snap.child("yoga").val();
//
//      $("#tablebody").append("<tr><td>" + aerobics1 + "</td><td>" + salsa1 +
//        "</td><td>" + yoga1 + "</td></tr>");
//
//   });
// });
// function getConfirmation(){
//                var retVal = confirm("Confirm");
//                if( retVal == true ){
//
//                   alert("Your classes have been booked");
//                }
//                else{
//                 alert("Your classes have not been booked");
//                }
//   }

// for (DataSnapshot postSnapshot : snapshot.getChildren(salsa)) {
//
//     //Getting the data from snapshot
//
//     SalsaExpenditure salsaExpenditure=postSnapshot.getValue(SalsaExpenditure.class);
//
//     //Adding it to a string
//
//     amount+=amount+salsaExpenditure.getAmount();
//
//
//
//     expenseList.add(expenses);
//
//         if (expenseList.size() == 1) {
//             adapter = new ArrayAdapter<String>(getApplicationContext(), android.R.layout.simple_list_item_1, expenseList);
//             listview.setAdapter(adapter);
//         } else if (expenseList.size() > 1) {
//
//         }
//         System.out.println(expenses);
//         listview.setAdapter(adapter);
//     }
// public String getItem() {
//     return item;
// }
//
// public void setItem(String item) {
//     this.item = item;
// }
//



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
