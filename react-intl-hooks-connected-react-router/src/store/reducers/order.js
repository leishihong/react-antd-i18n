import { SET_ORDER_COUNT } from '../ActionTypes'
const initialState = {
  orderCount: 0
}

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case SET_ORDER_COUNT:
      return {
        ...state,
        orderCount: payload || 0
      }
    default:
      return state
  }
}
