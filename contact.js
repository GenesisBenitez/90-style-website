$(document).ready(function(){
    let snackbar = $("#snackbar");
   snackbar.hide();
    $("#contactForm").submit(function(event){
        event.preventDefault();
        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        var country = $("#country").val();
        var subject = $("#subject").val();
        snackbar.html(`
        Thank you ${firstName} ${lastName}, I have recieved your message and will get back to you ASAP.
        `)
        snackbar.show();
        setTimeout(function(){ 
        snackbar.hide();
        }, 5000);
    })

})
