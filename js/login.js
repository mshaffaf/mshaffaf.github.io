$( document ).ready(function() {

                    // Initialize Firebase
              var config = {
                apiKey: "AIzaSyB6joS7ezKQrAAixbKPuxovABr2tkaCsvY",
                authDomain: "mycar-6a7e2.firebaseapp.com",
                databaseURL: "https://mycar-6a7e2.firebaseio.com",
                projectId: "mycar-6a7e2",
                storageBucket: "mycar-6a7e2.appspot.com",
                messagingSenderId: "1088569141502"
              };
              firebase.initializeApp(config);
            
            var realtime = firebase.database().ref('PiCar/realtime');
            
            const messaging = firebase.messaging();
            messaging.requestPermission()
                .then(function(){
                console.log('Have Permission'); 
                return messaging.getToken();
            })
                .then(function(token){
                console.log(token);
            })
                .catch(function(err){
               console.log('No Permission');
            });

    

    $("#login-signin").on('click', function(){
        
        var inputEmail = $("#inputEmail").val();
        var inputPassword = $("#inputPassword").val();

        if(inputEmail == "muhammedshaffaf@gmail.com" && inputPassword == '123456'){
            window.location.href = "dashboard.html";
            alert("Logged in successfully!");
        }else
            alert("Incorrect credentials!");
    });

});
