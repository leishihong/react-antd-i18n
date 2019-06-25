import intl from 'react-intl-universal';
// 自定义
import customZhCn from './lang/zh-CN';
import customEnUs from './lang/en-US';
// common locale data
// require('intl/locale-data/jsonp/en.js');
// require('intl/locale-data/jsonp/zh.js');

// 合并
const locales = {
  zh: customZhCn,
  en: customEnUs,
};
let lang = localStorage.getItem('lang') || 'en';

// 初始化
const loadLocales = () => {
  intl.init({
    urlLocaleKey: lang,
    cookieLocaleKey: lang,
    currentLocale: lang, // TODO: determine locale here
    locales,
  });
};

loadLocales();
window.intl = intl;

// const SUPPOER_LOCALES = [
//   {
//     name: 'English',
//     value: 'en',
//   },
//   {
//     name: '简体中文',
//     value: 'cn',
//   },
// ];

// const loadLocales = () => {
//   let currentLocale = intl.determineLocale({
//     urlLocaleKey: 'lang',
//     cookieLocaleKey: 'lang',
//   });
//   if (!_.find(SUPPOER_LOCALES, { value: currentLocale })) {
//     currentLocale = 'cn';
//   }

//   //   <!--  动态切换中英文
//   //      sessionStorage.setItem("lang", "en");
//   //      history.go(0);
//   //   -->
//   if (sessionStorage.getItem('lang')) {
//     currentLocale = sessionStorage.getItem('lang');
//   }
//   intl.init({
//     currentLocale,
//     locales: {
//       [currentLocale]: currentLocale == 'cn' ? cn : en,
//     },
//   });
// };
