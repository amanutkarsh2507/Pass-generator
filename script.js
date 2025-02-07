const passwordBox = document.getElementById("Password");
const allChars =
  "1234567890-=asdfghjkl;'zxcvbnm,./!@#$%^&*()_+QWERTYUIOP{}ASDFGHJKL:ZXCVBNM<>?";

function gen() {
  let pass = "";
  while (pass.length <= 12) {
    pass += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = pass;
}

function cpy(){
    passwordBox.select();
    document.execCommand("copy");
}

