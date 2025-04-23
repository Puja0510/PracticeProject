import React from 'react';
import { useTranslation } from 'react-i18next';

const TestLanguage = () => {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    const nextLang = i18n.language === 'en' ? 'hi' : 'en';
    i18n.changeLanguage(nextLang);
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>{t('welcome')}</h1>
      <p>{t('message')}</p>
      <button onClick={toggleLang}>{t('switch')}</button>
    </div>
  );
};

export default TestLanguage;
