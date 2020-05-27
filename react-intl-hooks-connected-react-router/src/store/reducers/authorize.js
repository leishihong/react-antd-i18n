import { LOGOUT, SET_REDIRECT_PATH, SET_USER_AUTHORIZE } from '../ActionTypes'

const initialState = {
  userInfo: {},
  redirect: '/'
}

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case SET_USER_AUTHORIZE:
      return {
        ...state,
        userInfo: payload || {}
      }
    case SET_REDIRECT_PATH:
      return {
        ...state,
        redirect: (payload && payload.redirect) || '/'
      }
    case LOGOUT:
      return {
        ...state,
        userInfo: {},
        redirect: '/login'
      }
    default:
      return state
  }
}
