// JavaScript complet pour le comportement du menu mobile
const links = document.querySelectorAll('nav li');

icons.addEventListener("click",() => {
  nav.classList.toggle("active")
});
links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  })
});

function changeLanguage() {
  var selectedLang = document.getElementById("lang-select").value;

  // Redirect to the appropriate page with the language parameter
  if (selectedLang === "fr") {
    window.location.href = "page-fr.html";
  } else if (selectedLang === "en") {
    window.location.href = "page-en.html";
  } else if (selectedLang === "ar") {
    window.location.href = "page-ar.html";
  }
}
