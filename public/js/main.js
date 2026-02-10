const translations = {
    en: translations_en,
    de: translations_de
};

function setLang(lang) {
  localStorage.setItem("lang", lang);
  loadLanguage(lang);
  document.getElementById("langSelector").value = lang;
}

function loadLanguage(lang) {
    const t = translations[lang] || translations["en"];
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.dataset.i18n;
        const keys = key.split('.');
        let value = t;
        for (const k of keys) value = value[k];
        if (value) el.textContent = value;
    });

}

const currentLang = localStorage.getItem("lang") || "en";
document.getElementById("langSelector").value = currentLang;
loadLanguage(currentLang);

