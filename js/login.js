$( document ).ready(function() {

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
