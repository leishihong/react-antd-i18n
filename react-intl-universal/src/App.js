import React from 'react';
// 国际化
import './locale/index';
import intl from 'react-intl-universal';
function App() {
  return <div className="App">国际化{intl.get('personglicon')}</div>;
}

export default App;
