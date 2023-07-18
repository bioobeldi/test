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
  
  // Toggle the "open" class on the header-inner element to open/close the sidebar
  document.querySelector(".menu-button").addEventListener("click", function () {
    document.querySelector(".header-inner.menu").classList.toggle("open");
  });
  
