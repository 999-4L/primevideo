const submitBtn = document.querySelector(".save-changes-btn");
const profileName = document.getElementById("name");

profileName.addEventListener("keyup", () => {
  if (profileName.value != "") {
    submitBtn.removeAttribute("disabled");
  } else {
    submitBtn.setAttribute("disabled", "");
  }
});
