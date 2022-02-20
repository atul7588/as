
function showregPass() {
  var x = document.getElementById("regPass");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

