const queryStr = document.location.search;
const queryObj = new URLSearchParams(queryStr);
const header = document.getElementById("header");
const fullName = document.getElementById("fullName");
const userName = document.getElementById("userName");
const imageUrl = document.getElementById("imageUrl");
const profileImg = document.getElementById("profileImg");


header.innerText = `Hello, ${queryObj.get("firstName")} ${queryObj.get(
  "lastName"
)}!`;

fullName.innerText = `${queryObj.get("firstName")} ${queryObj.get(
  "lastName"
)}`;

userName.innerText = `${queryObj.get("userName")}`;

profileImg.src = `${queryObj.get("imageUrl")}`;
