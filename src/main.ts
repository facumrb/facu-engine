import './styles.css';

// 1. Define types for language codes and translation keys
type Lang = 'en' | 'es' | 'de';
type TranslationKey =
  | 'navHome'
  | 'navAbout'
  | 'navSkills'
  | 'navProjects'
  | 'navBlog'
  | 'navContact'
  | 'homeTitle'
  | 'homeContent';

type Translations = Record<Lang, Record<TranslationKey, string>>;

// 2. Typed translations object
const translations: Translations = {
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

// 3. Type-safe updateLanguage function
function updateLanguage(lang: Lang) {
  document.documentElement.lang = lang;
  const elements = document.querySelectorAll<HTMLElement>('[data-i18n-key]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n-key') as TranslationKey | null;
    if (key && translations[lang][key]) {
      el.textContent = translations[lang][key];
    } else {
      el.textContent = '';
    }
  });
}

// 4. Safer DOM access and initialization
document.addEventListener('DOMContentLoaded', () => {
  const selector = document.getElementById('language-selector') as HTMLSelectElement | null;
  if (!selector) return;
  updateLanguage('en');
  selector.addEventListener('change', e => {
    const target = e.target as HTMLSelectElement;
    updateLanguage(target.value as Lang);
  });
});