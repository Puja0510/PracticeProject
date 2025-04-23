import React from 'react';
import { useLanguage } from './LanguageContext';
import { translations } from './translation';

 const LangToggler = () => {
    const {lang, toggleLang} = useLanguage()
    const t = translations[lang]

    return (
        <div className="p-4 text-center">
          <h1>{t.greeting}</h1>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={toggleLang}
          >
            {t.changeLang}
          </button>
        </div>
      );
}

export default LangToggler;