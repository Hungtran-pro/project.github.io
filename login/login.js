document.getElementById("submit-btn").addEventListener("click", function () {
  const username = document.getElementById("user").value;
  const password = document.getElementById("pass").value;
  let checkUser = validateUsername(username);
  if (checkUser != "") {
    alert(checkUser);
  } else {
  }
});

function validateUsername(str) {
  var error = "";
  var illegalChars = /\W/; // allow letters, numbers, and underscores

  if (str == "") {
    error = "Please enter Username";
  } else if (str.length < 5 || str.length > 15) {
    error = "Username must have 5-15 characters";
  } else if (illegalChars.test(str)) {
    error =
      "Please enter valid Username. Use only numbers and alphabets";
  } else {
    error = "";
  }
  return error;
}
