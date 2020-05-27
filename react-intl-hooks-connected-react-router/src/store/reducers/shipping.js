import { SET_SHIPPING_LIST, SET_CLEAR_SHIPPING_LIST } from '../ActionTypes';
const initialState = {
  ShippingList: [],
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case SET_SHIPPING_LIST: {
      return {
        ...state,
        ShippingList: payload,
      };
    }
    case SET_CLEAR_SHIPPING_LIST: {
      return {
        ...state,
        ShippingList: payload,
      };
    }
    default: {
      return state;
    }
  }
}
