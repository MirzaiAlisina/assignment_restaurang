function validateLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

    // Validate password based on criteria
    var passwordRegex = /^(?=.*[A-Z].*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (passwordRegex.test(password)) {
      alert("Du är inne!");
  } else {
      alert("Fel lösenord.");
  }
}
