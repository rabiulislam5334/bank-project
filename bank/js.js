document.getElementById("btn-login").addEventListener("click", function (e) {
  e.preventDefault();
  const mobileNum = 19452043180;
  const pinNum = 1234;
  const mobileNumber = document.getElementById("mobile").value;
  const pinNumber = document.getElementById("pin").value;
  const newNum = Number(mobileNumber);
  const newPin = Number(pinNumber);
  //   console.log(newNum, newPin);
  if (newNum === mobileNum && newPin === pinNum) {
    // console.log("login successfuly");
    window.location.href = "./home.html";
  } else {
    alert("number is invalid");
  }
});
