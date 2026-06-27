

const d = new Date();
let text = d.toDateString();
document.getElementById("date").innerHTML = text;

let slider = document.getElementById("range");
let output = document.getElementById("rangeslider");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
};

function validateFirstName() { 
  firstName = document.getElementById("firstName").value.trim();
  var namePattern = /^[A-Za-z'-]+$/;
  if (firstName === "") {
    document.getElementById("firstNameError").innerHTML = "First name is required.";
    return false;
  } else if (firstName != "") {
if (!firstName.match(namePattern)) {
      document.getElementById("firstNameError").innerHTML = "Letters, apostrophes, and dashes only.";
      return false;
    } else if (firstName.length < 2) {
      document.getElementById("firstNameError").innerHTML = "First name must be at least 2 characters long.";
    return false;
  } else if (firstName.length > 30) {
    document.getElementById("firstNameError").innerHTML = "first name must be less than 30 characters long.";
    return false;
  } else {
    document.getElementById("firstNameError").innerHTML = "";
    return true;
  }
}
}

function validatemiddleName() {
  let middleName = document.getElementById("middleName").value;
  const namePattern = /^[A-Z]$/;
  middlename = middleName.toUpperCase();
  document.getElementById("middleName").value = middlename;
  if (!middleName.match(namePattern)) {
    document.getElementById("middleNameError").innerHTML = "Middle initial must be a uppercase letter.";
    return false;
  } else {
    document.getElementById("middleNameError").innerHTML = "";
    return true;
  }
}

function validateLastName() {
  lastName = document.getElementById("lastName").value.trim();
  var namePattern = /^[a-zA-Z' - ]+$/;
  if (lastName === "") {
    document.getElementById("lastNameError").innerHTML = "Last name is required.";
    return false;
  } else if (lastName != "") {
    if (!lastName.match(namePattern)) {
      document.getElementById("lastNameError").innerHTML = "Letters, apostrophes, and dashes only.";
      return false;
    } else if (lastName.length < 2) {
      document.getElementById("lastNameError").innerHTML = "Last name must be at least 2 characters long.";
      return false;
    } else if (lastName.length > 30) {
      document.getElementById("lastNameError").innerHTML = "last name must be less than 30 characters long.";
      return false;
    } else {
      document.getElementById("lastNameError").innerHTML = "";
      return true;
    }
  }
}

function validateDOB() {
  dob = document.getElementById("dob");
  let date = new Date(dob.value);
  let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);

  if (date > new Date()) {
    document.getElementById("dobError").innerHTML = "Date cannot be in the future"; 
    dob.value="";
    return false
  } else if(date < new Date(maxDate)) {
    document.getElementById("dobError").innerHTML = "Date cannot be more than 120 years ago";
    dob.value="";
    return false;
  } else {
    document.getElementById("dobError").innerHTML = "";
    return true;
  }
}

function validateSSN() {
  const ssn = document.getElementById("ssn").value;

  const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

  if (!ssnR.test(ssn)) {
    document.getElementById(ssnerror).innerHTML = "Enter a valid Social Security Number";
    return false;
  } else {
    document.getElementById("ssnError").innerHTML = "";
    return true;
  }
}

function validateAddress() {
  var ad = document.getElementById("address").value;
  console.log(ad);
  console.log(ad.length);

  if (ad.length < 2) { 
    document.getElementById("addressError").innerHTML = "Enter your address";
    return false;
  } else {
    document.getElementById("addressError").innerHTML = "";
    return true;
  }
}

function validateCity() {
  city = document.getElementById("city").value.trim();

  if (!city) {
    document.getElementById("cityError").innerHTML = "City cannot be left blank";
    return false;
  } else {
    document.getElementById("cityError").innerHTML = "";
    return true;
  }

}

function validateZip() {
  const zipInput = document.getElementById("zip");
  let zip = zipInput.value.replace(/[^\d-]/g, "");

  if (!zip) {
    document.getElementById("zipError").innerHTML = "Zip code cannot be left blank";
    return false;
  }
  if (zip.length > 5) {
    zip = zip.slice(0,5) + "-" + zip.slice(5,9);
  } else {
    zip = zip.slice(0,5);
  }
  zipInput.value = zip;
  document.getElementById("zipError").innerHTML = "";
  return true;
}

function validateEmail() {
  email = document.getElementById("email").value;
  var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (email == "") {
    document.getElementById("emailError").innerHTML = "Email address cannot be empty";
    return false;
  } else if (!email.match(emailR)) {
    document.getElementById("emailError").innerHTML = "Enter a valid email address";
    return false;
  } else {
    document.getElementById("emailError").innerHTML = ""; 
    return true;
  }
}

function validatePhone() {
  const phoneInput = document.getElementById("Phone");
  const phone = phoneInput.value.replace(/\D/g,"");

  if (phone.length != 10) {
      document.getElementById("phoneError").innerHTML = "Phone number cannot be left blank";
      return false;
  }

  const formattedPhone = phone.slice(0,3) +"-"+ phone.slice(3,6) +"-"+ phone.slice(6,10)
  phoneInput.value = formattedPhone;
  document.getElementById("phoneError").innerHTML = "";
  return true;
}

function validateUsername() {
  username = document.getElementById("username").value;
  username = username.toLowerCase();
  document.getElementById("username").value = username;
   if (username.length === 0) {
    document.getElementById("usernameError").innerHTML = "Username field cannot be empty";
    return false;
   }

   if (!isNaN(username.charAt(0))){
    document.getElementById("usernameError").innerHTML = "username cannot begin with a number";
 }
 let regex = /^[a-zA-Z0-9_]+$/;
 if (!regex.test(username)) {
  document.getElementById("usernameError").innerHTML = "Username can only contain letters, number, or underscores";
  return false;
 } else if (username.length < 5) {
  document.getElementById("usernameError").innerHTML = "Username cannot be less than 5 characters";
  return false;
 } else if (username.length > 30) {
  document.getElementById("usernameError").innerHTML = "Username cannot exceed 30 characters";
  return false;
 } else { 
  document.getElementById("usernameError").innerHTML = "";
  return true;
 }
}

function validatePassword() {
  const password = document.getElementById("password").value;
  const username = document.getElementById("username").value;
  const errorMessage = [];

  if (!password.match(/[a-z]/)) {
    errorMessage.push("Enter at least one lowercase letter");
  }
  if (!password.match(/[A-Z]/)) {
    errorMessage.push("Enter at least one uppercase letter");
  }
  if (!password.match(/[0-9]/)) {
    errorMessage.push("Enter at least one number");
  }

  if (!password.match(/[!@#$%^&*(),.?":{}|<>]/)) {
    errorMessage.push("Enter at least one special character");
}
  if (password == username || password.includes(username)) {
    errorMessage.push("Password cannot contain username");
  }
  document.getElementById("passwordError").innerHTML = errorMessage.join("<br>");
  }

  function ConfirmPassword() {
    password1 = document.getElementById("password").value;
    password2 = document.getElementById("confirmPassword").value;

    if (password1 !== password2) {
      document.getElementById("confirmPasswordError").innerHTML = "Password do not match";
      return false;
    } else {
      document.getElementById("confirmPasswordError").innerHTML = "Password match";
      return true;
    }
  }
  
  function reviewInput() {
    var formcontent = document.getElementById("patientForm");
    var formoutput = "<table class='output'><tr><th colspan='2' >Review your information:</th></tr>";

    for (var i = 0; i < formcontent.elements.length; i++) {
      var el = formcontent.elements[i];
      var datatype = el.type;
      var name = el.name;
      var value = el.value;

      if (!name) continue; 

      switch (datatype) {
        case "checkbox":
        if (el.checked) {
            formoutput += "<tr><td align= 'right'>" + name + "</td>";
            formoutput += "<td class='outputdata'>&#x2713;</td></tr>";
        }
        break; 

        case "radio":
          if (el.checked) {
            formoutput += "<tr><td align= 'right'>" + name + "</td>";
             formoutput += "<td class='outputdata'>" + value + "</td></tr>";
          }
          break;

          case "range":
            if (value !== "0") {
              formoutput += "<tr><td align= 'right'>" + name + "</td>";
              formoutput += "<td class='outputdata'>" + value + "</td></tr>";
            }
            break;

            case "button":
              case "submit":
                case "reset":

                break;

                default:
                  if (value !== "" ) {
                    formoutput += "<tr><td align= 'right'>" + name + "</td>";
                    formoutput += "<td class='outputdata'>" + value + "</td></tr>";
                  }
      }

    }
    formoutput += "</table>";
    document.getElementById("showInput").innerHTML = formoutput;
  }

  function removeReview() {
    document.getElementById("showInput").innerHTML = "";
  }
