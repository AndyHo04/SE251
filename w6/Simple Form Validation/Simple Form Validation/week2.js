// JavaScript Document
document.addEventListener('DOMContentLoaded', function() {
    var submit = document.querySelector(`input[type="button"]`);

     //span elements
    var fnameError = document.querySelector(`#fn-error`);
    var lnameError = document.querySelector(`#ln-error`);
    var emailError = document.querySelector(`#email-error`);
    var confirmEmailError = document.querySelector(`#confirm-error`);
    var phoneError = document.querySelector(`#phone-error`);


    //regex expressions
    var namePattern = /^[a-zA-Z]+$/;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phonePattern = /^\d{3}\-?\d{3}\-?\d{4}$/;

    submit.addEventListener('click', function() {
        var fname = document.querySelector(`#first-name`).value;
        var lname = document.querySelector(`#last-name`).value;
        var email = document.querySelector(`#email`).value;
        var cemail = document.querySelector(`#confirm-email`).value;
        var phone = document.querySelector(`#phone`).value;
        var form = document.querySelector(`#form`);

        //innerHTML
        fnameError.innerHTML = "";
        lnameError.innerHTML = "";
        emailError.innerHTML = "";
        confirmEmailError.innerHTML = "";
        phoneError.innerHTML = "";

        if (fname == ``) {
            fnameError.innerHTML = '<span style="color: red;">*</span> First name is required';
            document.querySelector('#first-name').parentElement.style.color = 'red';
        } else if (!namePattern.test(fname)) {
            fnameError.innerHTML = '<span style="color: red;">*</span> First Name cannot include special characters';
            document.querySelector('#first-name').parentElement.style.color = 'red';
        } else {
            fnameError.innerHTML = ''; // Clear error if valid
            document.querySelector('#first-name').parentElement.style.color = ''; // Reset color if valid
        }
            
        if (lname == "") {
            lnameError.innerHTML = '<span style="color: red;">*</span> Last name is required';
            document.querySelector(`#last-name`).parentElement.style.color = 'red';
        } else if (!namePattern.test(lname)) {
            lnameError.innerHTML = '<span style="color: red;">*</span> Last Name cannot include special characters';
            document.querySelector(`#last-name`).parentElement.style.color = 'red';
        } else {
            lnameError.innerHTML = ''; // Clear error if valid
            document.querySelector('#last-name').parentElement.style.color = ''; // Reset color if valid
        }

        if (email == "") {
            emailError.innerHTML = '<span style="color: red;">*</span> Email is required';
            document.querySelector(`#email`).parentElement.style.color = 'red';
        } else if (!emailPattern.test(email)) {
            emailError.innerHTML = '<span style="color: red;">*</span> Email is invalid';
            document.querySelector(`#email`).parentElement.style.color = 'red';
        } else {
            emailError.innerHTML = ''; // Clear error if valid
            document.querySelector('#email').parentElement.style.color = ''; // Reset
        }

        if (cemail == "") {
            confirmEmailError.innerHTML = '<span style="color: red;">*</span> Confirm Email is required';
            document.querySelector(`#confirm-email`).parentElement.style.color = 'red';
        } 
        else if (!emailPattern.test(cemail)) {
            confirmEmailError.innerHTML = '<span style="color: red;">*</span> Email is invalid';
            document.querySelector(`#confirm-email`).parentElement.style.color = 'red';
        }
        else if (cemail != email) {
            confirmEmailError.innerHTML = '<span style="color: red;">*</span> Emails do not match';
            document.querySelector(`#confirm-email`).parentElement.style.color = 'red';
        } else {
            confirmEmailError.innerHTML = ''; // Clear error if valid
            document.querySelector('#confirm-email').parentElement.style.color = ''; // Reset
        }

        if (phone == "") {
            phoneError.innerHTML = '<span style="color: red;">*</span> Phone number is required';
            document.querySelector(`#phone`).parentElement.style.color = 'red';
        } else if (!phonePattern.test(phone)) {
            phoneError.innerHTML = '<span style="color: red;">*</span> Phone number must be 10 digits';
            document.querySelector(`#phone`).parentElement.style.color = 'red';
        } else {
            phoneError.innerHTML = ''; // Clear error if valid
            document.querySelector('#phone').parentElement.style.color = ''; // Reset
        }

        if (fnameError.innerHTML == "" && lnameError.innerHTML == "" && emailError.innerHTML == "" && confirmEmailError.innerHTML == "" && phoneError.innerHTML == "") {
            var confirmform = document.querySelector(`#confirmation`);
            var confirminfo = document.querySelector(`#confirmation p`);
            form.style.display = 'none';
            confirmform.style.display = 'block';
            confirminfo.innerHTML = "";
            var cleanedPhone = phone.replace(/-/g, ''); // Remove all existing hyphens
            var formattedPhone = cleanedPhone.substring(0, 3) + '-' + cleanedPhone.substring(3, 6) + '-' + cleanedPhone.substring(6);
            var person = {
                FName: fname,
                LName: lname,
                Email: email,
                Phone: formattedPhone
            };
            confirminfo.innerHTML = `<p><b>${person.FName} ${person.LName}</p><p>${person.Email}</p><p>${person.Phone}</b></p>`;
        }
    });   
});