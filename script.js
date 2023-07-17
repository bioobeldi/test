function changeLanguage() {
    var selectedLang = document.getElementById("lang-select").value;
  
    // Redirigez vers la page appropriée avec le paramètre de langue
    if (selectedLang === "fr") {
      window.location.href = "page-fr.html";
    } else if (selectedLang === "en") {
      window.location.href = "page-en.html";
    } else if (selectedLang === "ar") {
      window.location.href = "page-ar.html";
    }
  }
  