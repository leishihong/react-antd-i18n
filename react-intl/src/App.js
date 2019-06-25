import React from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';

import locale from './locale/index';

console.log(locale);
function App() {
  return (
    <div className="App">
      <IntlProvider
        locale={locale.locale[locale.locale.lang]}
        messages={locale.messages}
      >
        <p>
          <FormattedMessage id="welcome" />
        </p>
      </IntlProvider>
    </div>
  );
}

export default App;
