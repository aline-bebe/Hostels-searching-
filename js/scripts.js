//  var config={
//     apiKey: "AIzaSyC84phUCEM1DCJCfdAFJu5OalIG1X1Dt84",
//     authDomain: "hostel-searching-b9fd3.firebaseapp.com",
//     databaseURL: "https://hostel-searching-b9fd3.firebaseio.com",
//     projectId: "hostel-searching-b9fd3",
//     storageBucket: "",
//     messagingSenderId: "413710150785",
//     appId: "1:413710150785:web:dd9c999ab148c6ee"
//   };
//   firebase.initializeApp(config);
//   console.log(firebase);
//   var database=firebase.database();

//   var messagesRef=database.ref('messages');


//  function submit(form){
//      form.preventDefault();
//      var regNumber=document.getElementById("reg").value;
//      console.log("ddddddddddddddddd");
//      var gender=document.getElementById("gender").value;
//      var first=document.getElementById("first").value;
//      var last=document.getElementById("last").value;
//      var middle=document.getElementById("middle").value;

//      savemessage(regNumber,gender,first,last,middle);
//  }

// //save messages to firebase
// function savemessage(regNumber,gender,first,last,middle){
//     var newMessageRef= messagesRef.push();

//     newMessageRef.set({
//        regNumber:regNumber,
//        gender:gender ,
//        first:first,
//        last:last,
//        middle:middle
//     });
// }