import i18next from 'i18next';
//|------Español------|//
import admin_es from './es/admin.json';
import catalogos_es from './es/catalogos.json';
import general_es from './es/general.json';
import hoja_analisis_es from './es/hojaAnalisis.json';
import navbar_es from './es/navbar.json';
import puntos_es from './es/puntos.json';
import solicitudes_es from './es/solicitudes.json';
import reportes_es from './es/reportes.json';
//|------./Español------|//
//|------Ingles------|//
import general_en from './en/general.json';
//|------./Ingles------|//

const getLocale = () => {
    let idioma = navigator.language || navigator.userLanguage;
    let locale = localStorage.getItem("localeStorage") == null ?
        localStorage.setItem("localeStorage", idioma.substring(0, 2)) :
        localStorage.getItem("localeStorage");
    return locale;
}

i18next.init({
    interpolation: { escapeValue: false },
    lng: getLocale(),
    resources: {
        es: {
            admin:admin_es,
            catalogos: catalogos_es,
            general: general_es,
            hoja: hoja_analisis_es,
            navbar: navbar_es,
            puntos:puntos_es,
            solicitudes:solicitudes_es,
            reportes:reportes_es
            },
        en: {
            general: general_en,
        }
    }

});

export default i18next;
