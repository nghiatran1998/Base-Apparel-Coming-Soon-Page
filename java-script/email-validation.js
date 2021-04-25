function validEmail() {
    var mail = document.getElementById("email").value;
    var regex = /^([\w\.]+)@([\w]+)(\.)([\w]+)(.[\w]+)?$/;

    if(mail === "") {
        document.getElementById("icon-error").style.display = "inline";
        document.getElementById("notification").innerHTML = 
        "<span style='color:red'> Please provide your email";
        return false;
    }

    else {
        if(regex.test(mail)){
            document.getElementById("icon-error").style.display = "none";
            document.getElementById("notification").innerHTML = 
            "<span style='color:green'>Valid email</span>";
            return true;
        }
        
        else {
            document.getElementById("icon-error").style.display = "inline";
            document.getElementById("notification").innerHTML = 
            "<span style='color:red'> Please provide a valid email";
            return false;
        }
    }
    
}