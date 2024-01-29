function SendMail(){
    var params = {
        form_name : document. getElementById("fullname").value,
        email_id : document. getElementById("email_id").valeu,
        message : document. getElementById("message").value,
    }
    emailjs.send("service_3iq3wa4","template_0kijmot", params).then(function (res){
        alert("Success" + res.status);
    })
}
    

    
    
    
    
