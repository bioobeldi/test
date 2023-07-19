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
  
  
const hamburgerMenu = document.querySelector('.hamburger-menu');
const menuLeft = document.querySelector('.menu-left');
const menuRight = document.querySelector('.menu-right');

hamburgerMenu.addEventListener('click', () => {
  // Lorsqu'on clique sur le bouton hamburger
  menuLeft.classList.toggle('menu-mobile'); // Afficher/masquer le menu gauche
  menuRight.classList.toggle('menu-mobile'); // Afficher/masquer le menu droit
});

// masquer les menus lorsque l'utilisateur clique ailleurs sur la page.
document.addEventListener('click', (event) => {
  const targetElement = event.target;
  if (!targetElement.closest('.hamburger-menu') && !targetElement.closest('.menu-mobile')) {
    menuLeft.classList.remove('menu-mobile');
    menuRight.classList.remove('menu-mobile');
  }
});

  
