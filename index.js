const categoryBtnEl = document.getElementById("category-btn");
const categoryDropdownEl = document.querySelector(".dropdown-menu");
const categoryTextEl = document.querySelector(".dropdown-toggle");
const searchDivEl = document.querySelector(".search-bar");
const searchBarEl = document.querySelector(".search-box");
const profileBoxEl = document.querySelector(".profile-box-a");
const profileArrowEl = document.querySelector(".pfp-arrow");
const profileDropdownEl = document.querySelector(".profile-dropdown");
const profileNameEl = document.querySelector(".profile-name");


profileNameEl.innerText = profileName.value;



function toggleHidden() {
  categoryDropdownEl.classList.toggle("hidden");
  categoryTextEl.classList.toggle("white-text");
}

categoryBtnEl.addEventListener("click", () => {
  toggleHidden();
});

window.addEventListener("click", (e) => {
  if (categoryBtnEl.contains(e.target)) {
  } else {
    categoryDropdownEl.classList.add("hidden");
    categoryTextEl.classList.remove("white-text");
  }
});

searchBarEl.addEventListener("click", () => {
  if (searchBarEl.classList.contains("hide")) {
    searchBarEl.classList.remove("hide");
    searchDivEl.classList.remove("hide-it");
    searchBarEl.style.backgroundImage = "url(magnifyingglass1.png)";
  }
});

window.addEventListener("click", (e) => {
  if (searchBarEl.contains(e.target)) {
  } else {
    searchBarEl.classList.add("hide");
    searchDivEl.classList.add("hide-it");
    searchBarEl.style.backgroundImage = "url(search-grey.png)";
  }
});

profileBoxEl.addEventListener("click", () => {
  profileArrowEl.classList.toggle("rotate");
  profileDropdownEl.classList.toggle("hidden");
  profileNameEl.classList.toggle("white-text");
});
