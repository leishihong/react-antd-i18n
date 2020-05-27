import React, { PureComponent } from 'react';
import { IntlProvider } from 'react-intl';
import IntlRelativeTimeFormat from '@formatjs/intl-relativetimeformat';
import { ConfigProvider, BackTop, Radio } from 'antd';
import id from './lang/id';
import en_US from './lang/en_US';
import zh from './lang/zh';

import ID from '@formatjs/intl-relativetimeformat/dist/locale-data/id.json';
import EN from '@formatjs/intl-relativetimeformat/dist/locale-data/en.json';
import ZH from '@formatjs/intl-relativetimeformat/dist/locale-data/zh.json';

import enUS from 'antd/es/locale/en_US.js';
import zhCN from 'antd/es/locale/zh_CN.js';
import idID from 'antd/es/locale/id_ID.js';
import moment from 'moment';
import 'moment/locale/zh-cn.js';
import 'moment/locale/id.js';

moment.locale('zh-cn');
// locale-data for zh
// IntlRelativeTimeFormat.__addLocaleData(ZH);
// locale-data for zh

const RadioGroup = Radio.Group;
class IntlPro extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      locale: 'en',
    };
  }
  handelChangeIntl = (e) => {
    window.sessionStorage.locale = e.target.value;
    this.setState({
      locale: e.target.value,
    });
    console.log(e);
  };
  render() {
    let { localeMessage, children } = this.props;
    const { locale } = this.state;
    window.localStorage.setItem('language', locale);
    return (
      <IntlProvider
        textComponent="span"
        key={window.sessionStorage.locale || locale}
        defaultLocale={window.sessionStorage.locale || locale}
        locale={window.sessionStorage.locale || locale}
        messages={chooseLocale(window.sessionStorage.locale)}
      >
        <ConfigProvider
          locale={locale === 'en' ? enUS : locale === 'id' ? idID : zhCN}
        >
          <RadioGroup
            onChange={(e) => this.handelChangeIntl(e)}
            value={window.sessionStorage.locale || locale}
          >
            <Radio value="zh">中文</Radio>
            <Radio value="en">英文</Radio>
            <Radio value="id">印尼文</Radio>
          </RadioGroup>

          {children}
          <BackTop visibilityHeight={1200} />
        </ConfigProvider>
      </IntlProvider>
    );
  }
}

function chooseLocale(val) {
  let _val = val || navigator.language.split('_')[0];
  switch (_val) {
    case 'en':
      return en_US;
    case 'id':
      return id;
    case 'zh':
      return zh;
    default:
      return id;
  }
}

export default IntlPro;
