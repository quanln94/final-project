// let account = [
//   {
//     acc: "admin",
//     pass: "123456",
//   },
// ];
account = JSON.parse(localStorage.getItem("account"));
console.log(account)
/// đăng ký tài khoản

/// đăng nhập tài khoản
let id = document.getElementById("inputemail");
let password = document.getElementById("inputpassword");
let login1 = document.getElementById("submit");
login1.addEventListener("click", login);
function login() {
  for (let i = 0; i <= account.length - 1; i++) {
    if (id.value == account[i].acc && password.value == account[i].pass) {
      alert("log-in success");
      id.value = "";
      password.value = "";
    }
  }
}
