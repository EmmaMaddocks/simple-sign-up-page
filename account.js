const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const userName = document.getElementById("userName");
const imageUrl = document.getElementById("imageUrl");
const userForm = document.getElementById("userForm");
const errorUserName = document.getElementById("error-user-name");
const errorImageUrl = document.getElementById("error-url");

userName.addEventListener("blur", function (event) {
  const regexUserName = /^[A-Z0-9]+$/gi.test(event.target.value);
  console.log("Regex---", regexUserName);
  if (!regexUserName && event.target.value !== "") {
    event.preventDefault();
    userName.classList.add("invalid");
    errorUserName.classList.remove("error-hidden");
  } else {
    userName.classList.remove("invalid");
    errorUserName.classList.add("error-hidden");
  }
});
imageUrl.addEventListener("blur", function (event) {
  const regeximageUrl =
    /^https?:\/\/([\w\d\-]+\.)+\w{2,}(\/.+)?$/gi.test(
      event.target.value
    );
  console.log("regeximageUrl---", regeximageUrl);
  if (!regeximageUrl && event.target.value !== "") {
    imageUrl.classList.add("invalid");
    event.preventDefault();
    errorImageUrl.classList.remove("error-hidden");
  } else {
    imageUrl.classList.remove("invalid");
    errorImageUrl.classList.add("error-hidden");
  }
});
userForm.addEventListener("submit", function (e) {
  console.log("form submitted");
});
