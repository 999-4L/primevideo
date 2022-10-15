const submitBtn = document.querySelector(".save-changes-btn");
const profileName = document.getElementById("name");

profileName.addEventListener("keyup", () => {
  if (profileName.value != "") {
    submitBtn.removeAttribute("disabled");
  } else {
    submitBtn.setAttribute("disabled", "");
  }
});

submitBtn.addEventListener("click", () => {
  document.cookie = "username" + "=" + profileName.value;
  "SameSite = Lax";
  console.log(document.cookie);
});
console.log(document.cookie);
document.cookie = "username" + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT; SameSite = Lax";
console.log(document.cookie);
