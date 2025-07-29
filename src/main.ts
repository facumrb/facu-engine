import './styles.css';

// Language translations
const translations: Record<string, Record<string, string>> = {
  en: {
    navHome:    "Home",
    navAbout:   "About Me",
    navSkills:  "Skills",
    navProjects:"Projects",
    navBlog:    "Blog",
    navContact: "Contact",
    homeTitle:  "Welcome!",
    homeContent:"This is the Home section of the portfolio."
  },
  es: {
    navHome:    "Inicio",
    navAbout:   "Sobre mí",
    navSkills:  "Habilidades",
    navProjects:"Proyectos",
    navBlog:    "Blog",
    navContact: "Contacto",
    homeTitle:  "¡Bienvenido!",
    homeContent:"Esta es la sección de Inicio del portafolio."
  },
  de: {
    navHome:    "Startseite",
    navAbout:   "Über mich",
    navSkills:  "Fähigkeiten",
    navProjects:"Projekte",
    navBlog:    "Blog",
    navContact: "Kontakt",
    homeTitle:  "Willkommen!",
    homeContent:"Dies ist der Startseiten-Bereich des Portfolios."
  }
};

function updateLanguage(lang: string) {
  // Update <html> lang attribute
  document.documentElement.lang = lang;

  // For every element with data-i18n-key, set its text
  const elements = document.querySelectorAll<HTMLElement>('[data-i18n-key]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n-key');
    if (key && translations[lang][key]) {
      el.textContent = translations[lang][key];
    } else {
      el.textContent = '';
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const selector = document.getElementById('language-selector') as HTMLSelectElement | null;
  // Initialize page in English
  updateLanguage('en');

  // Change language on selector change
  if (selector) {
    selector.addEventListener('change', e => {
      const target = e.target as HTMLSelectElement;
      if (translations[target.value]) {
        updateLanguage(target.value);
      }
    });
  } else {
    console.warn('Language selector element not found. Please ensure there is a <select id="language-selector"> in your HTML with options for en, es, de.');
  }
});
