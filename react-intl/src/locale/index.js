import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
//导入 i18n 配置文件
import zh_CN from './lang/zh_CN'; // import defined messages in Chinese
import en_US from './lang/en_US';

addLocaleData([...en, ...zh]); // 引入多语言环境的数据

// 合并
const locale = {
  zh: zh_CN,
  en: en_US,
};
let lang = localStorage.getItem('lang') || 'zh';

export default {
  locale,
  messages: lang,
};
