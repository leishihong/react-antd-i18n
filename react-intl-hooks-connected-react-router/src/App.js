import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import IntlPro from './i18n';
import DemoApp from './demo';
import DemoClass from './demoClass';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';
import { createBrowserHistory } from 'history';
import { store, persistor } from './store/index';

const history = createBrowserHistory();
/**
 *  类组件使用intl必须用injectIntl包裹产生高阶组件
 *  Hooks函数组件可以使用hooks钩子useIntl直接使用
 *
 */
function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <PersistGate loading={null} persistor={persistor}>
          <div className="App">
            <IntlPro>
              <DemoApp />
              <DemoClass />
            </IntlPro>
          </div>
        </PersistGate>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
