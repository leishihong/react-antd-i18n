import {
  SET_CARD_TYPE,
  SET_COUNT,
  SET_RESETS_LOCAL,
  SET_SHOP_BRAND_NAME,
  SET_SHOP_INFO,
  SET_SHOP_LOGO,
} from '../ActionTypes';

const initialState = {
  brandName: '',
  brandLogoUrl: '',
  displayStyle: 'GOLD',
  content: '',
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case SET_SHOP_INFO:
      return {
        ...state,
        ...Object.assign(payload, {
          displayStyle: payload.displayStyle || 'GOLD',
        }),
      };
    case SET_SHOP_BRAND_NAME:
      return {
        ...state,
        brandName: payload,
      };
    case SET_SHOP_LOGO:
      return {
        ...state,
        brandLogoUrl: payload || '',
      };
    case SET_CARD_TYPE:
      return {
        ...state,
        displayStyle: payload || 'GOLD',
      };
    case SET_COUNT:
      return {
        ...state,
        content: payload,
      };
    case SET_RESETS_LOCAL:
      return {
        ...state,
        brandName: '',
        brandLogoUrl: '',
        displayStyle: 'GOLD',
        content: '',
      };
    default:
      return state;
  }
}
