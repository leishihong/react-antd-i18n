import { SET_LANGUAGE } from '../ActionTypes';

export const changeLanguage = (data) => (dispatch) => {
  dispatch({
    type: SET_LANGUAGE,
    language: data.language,
  });
};
