import React from 'react';
import './App.css';
import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';

const lng = 'en';
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          Welcome: 'Welcome to React',
        },
      },
      zh: {
        translation: {
          Welcome: '欢迎进入react',
        },
      },
    },
    lng: lng,
    fallbackLng: lng,

    interpolation: {
      escapeValue: false,
    },
  });

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <p>{t('Welcome')}</p>
    </div>
  );
}

export default App;
