document.getElementById("form").addEventListener("submit", function(event) {
    
    
    var name = document.getElementById('name').value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var pass = document.getElementById('pass').value;
    var conpass = document.getElementById('conpass').value;
    var raddress = document.getElementById('raddress').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var district = document.getElementById('district').value;
    
    
    if (!name || !lastname || !email || !phone || !pass || !conpass || !raddress || !address || !city || !district) {
        alert("Please fill out all the fields!");
        event.preventDefault();
        return;
    }

    
    if (phone.length < 10 || isNaN(phone)) {
        alert("Phone number must contain at least 10 digits.");
        event.preventDefault();
        return;
    }

    if (pass !== conpass) {
        alert("Passwords do not match.");
        event.preventDefault();
        return;
    }

    if (!email.includes('@') || !email.includes('.com')) {
        alert("Enter a valid email address. It should contain '@' and end with '.com'.");
        event.preventDefault();
        return;
    }

    else{
    alert("Registration successful!");
    }
});
