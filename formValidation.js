// Function to validate the login form
function validateLoginForm() {
    var password = document.getElementById("password").value;
    return validatePassword(password);
}

// Function to validate the username
function validateUsername() {
    var username = document.getElementById("username").value;
    if (username.length < 3) {
        alert("Username must be at least 3 characters long.");
        return false;
    }
    return true;
}
// Function to validate the password for both sign up and login forms
function validatePassword(password) {
    var uppercaseRegex = /[A-Z]/; // At least one uppercase letter
    var lowercaseRegex = /[a-z]/; // At least one lowercase letter
    var digitRegex = /\d/; // At least one digit

    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return false;
    }

    if (!uppercaseRegex.test(password)) {
        alert("Password must contain at least one uppercase letter.");
        return false;
    }

    if (!lowercaseRegex.test(password)) {
        alert("Password must contain at least one lowercase letter.");
        return false;
    }

    if (!digitRegex.test(password)) {
        alert("Password must contain at least one digit.");
        return false;
    }

    // All conditions passed
    return true;
}


// Function to validate the phone number
function validatePhone() {
    var phone = document.getElementById("phone").value;
    var phoneRegex = /^\d{10}$/; // Assumes a 10-digit phone number
    if (!phoneRegex.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }
    return true;
}

// Function to validate all fields
function validateForm() {
    // Check if all fields are filled
    var fields = ["username", "password", "firstName", "lastName", "email", "phone", "dob", "country"];
    for (var i = 0; i < fields.length; i++) {
        var fieldValue = document.getElementById(fields[i]).value.trim();
        if (fieldValue === "") {
            alert("Please fill in all fields.");
            return false;
        }
    }
    
    // Call each individual validation function
    if (!validateUsername() || !validatePassword() || !validateEmail() || !validatePhone()) {
        // If any validation fails, prevent form submission
        return false;
    }
    
    return true;
}
