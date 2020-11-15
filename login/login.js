document.getElementById("submit-btn").addEventListener("click", function () {
  const username = document.getElementById("user").value;
  const password = document.getElementById("pass").value;
  let checkUser = validateUsername(username);
  let checkPass = validatePassword(password);
  if (checkUser != "") {
    document.getElementById("error").innerHTML = checkUser;
  } else if(checkPass != "") {
    document.getElementById("error").innerHTML = checkPass;
  }
});

function validateUsername(str) {
  let error = "";
  let illegalChars = /\W/; // allow letters, numbers, and underscores

  if (str == "") {
    error = "Please enter Username";
  } else if (str.length < 5 || str.length > 15) {
    error = "Username must have 5-15 characters";
  } else if (illegalChars.test(str)) {
    error = "Use only numbers and alphabets";
  } else {
    error = "";
  }
  return error;
}

function validatePassword(str){
  let error = "";
  if(str.length < 8){
    error = "Password must have more than 8 characters";
  }
  return error;
}