import { combineReducers } from 'redux' //将多个reducer合成一个总的reducer
import { connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'

import authorize from './authorize'
import pointsRules from './pointsRules'
import root from './root'
import shopInfo from './shopSetings'
import orderInfo from './order'
import shipping from './shipping'

export default combineReducers({
  root,
  authorize,
  pointsRules,
  shopInfo,
  orderInfo,
  shipping,
  router: connectRouter(createBrowserHistory()),
});
