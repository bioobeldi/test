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

const translations = {
  en: {
    "product-olive-oil": "olive oil",
    "product-argan-oil": "argan oil",
    "product-amlou": "amlou",
  },
  fr: {
    "product-olive-oil": "huile d'olive",
    "product-argan-oil": "huile d'argan",
    "product-amlou": "amlou",
  },
  ar: {
    "product-olive-oil": "زيت الزيتون",
    "product-argan-oil": "زيت الأركان",
    "product-amlou": "آملو",
  },
};

function changeLanguage() {
  const selectedLang = document.getElementById("lang-select").value;

  for (const key in translations[selectedLang]) {
    const element = document.getElementById(key);
    if (element) {
      element.textContent = translations[selectedLang][key];
    }
  }
}
