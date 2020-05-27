import { GET_POINTS_RULE_LIST } from '../ActionTypes'
const initialState = {
  pointRulesList: []
}

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case GET_POINTS_RULE_LIST:
      return {
        ...state,
        pointRulesList: payload || []
      }
    default:
      return state
  }
}
