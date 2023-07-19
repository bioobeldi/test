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
    "h1formulaire": "Pass your order",
    "label-phone": "Phone:",
    "label-email": "Email:",
    "label-message": "Message:",
    "label-submit": "Submit",
    "placeholder-phone": "Enter your phone number",
    "placeholder-email": "Enter your email",
    "placeholder-message": "Example: I want 1 liter of Argan oil and 1kg of Amlou to be delivered to Agadir.",
  },
  fr: {
    "product-olive-oil": "huile d'olive",
    "product-argan-oil": "huile d'argan",
    "product-amlou": "amlou",
    "h1formulaire": "Passer une commande",
    "label-phone": "Téléphone :",
    "label-email": "Email :",
    "label-message": "Message :",
    "label-submit": "Envoyer",
    "placeholder-phone": "Entrez votre numéro de téléphone",
    "placeholder-email": "Entrez votre email",
    "placeholder-message": "Exemple : Je veux 1 litre de l'huile d'Argan, et 1kg de Amlou, livrer à Agadir",
  },
  ar: {
    "product-olive-oil": "زيت الزيتون",
    "product-argan-oil": "زيت الأركان",
    "product-amlou": "آملو",
    "h1formulaire": "أحجز طلبا",
    "label-phone": "الهاتف:",
    "label-email": "البريد الإلكتروني:",
    "label-message": "الرسالة:",
    "label-submit": "إرسال",
    "placeholder-phone": "أدخل رقم هاتفك",
    "placeholder-email": "أدخل بريدك الإلكتروني",
    "placeholder-message": "مثال: السلام عليكم، ممكن 1 لتر من زيت الأركان ، و 1 كيلو من أملو ، التسليم إلى بني ملال",
  },
};

function changeLanguage() {
  const selectedLang = document.getElementById("lang-select").value;

  for (const key in translations[selectedLang]) {
    const element = document.getElementById(key);
    if (element) {
      // Vérifier si l'élément est un champ de formulaire avec l'attribut "placeholder"
      if (element.placeholder !== undefined) {
        element.placeholder = translations[selectedLang][key];
      } else {
        element.textContent = translations[selectedLang][key];
      }
    }
  }

  // Mettre à jour spécifiquement les placeholders du formulaire
  const phoneInput = document.getElementById("phone");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  if (phoneInput && emailInput && messageInput) {
    phoneInput.placeholder = translations[selectedLang]["placeholder-phone"];
    emailInput.placeholder = translations[selectedLang]["placeholder-email"];
    messageInput.placeholder = translations[selectedLang]["placeholder-message"];
  }

  // Sauvegarder la langue sélectionnée dans le localStorage
  localStorage.setItem("selectedLang", selectedLang);
}

// Vérifier si la langue a déjà été sélectionnée et la récupérer depuis le localStorage
const storedLang = localStorage.getItem("selectedLang");
if (storedLang) {
  // Sélectionner la langue précédemment choisie dans le sélecteur
  document.getElementById("lang-select").value = storedLang;
}

// Appel initial pour mettre à jour la langue par défaut
changeLanguage();
