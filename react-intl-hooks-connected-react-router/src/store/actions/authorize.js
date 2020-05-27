import queryString from 'query-string';
import { SET_USER_AUTHORIZE } from '../ActionTypes';

/**
 * 设置用户登录后的跳转地址
 */
export const setRedirectPath = (data) => (dispatch) => {
  dispatch({
    type: 'SET_REDIRECT_PATH',
    payload: data,
  });
};

/**
 * 退出登录
 */
// export const logout = data => dispatch => {
//   triggerLogout().then(res => {
//     if (res.code === 1) {
//       delCookie('access_token')
//       dispatch({
//         type: LOGOUT
//       })
//     }
//   })
// }
