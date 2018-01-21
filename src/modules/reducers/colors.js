import {
  SET_COLOR_ACTIVE, SET_COLOR_TEXT, SET_COLOR_HOVER,
} from '../actions/colors';

const colors = (state = [], action) => {
  switch (action.type) {
    case SET_COLOR_ACTIVE:
      return {
        ...state,
        colorActive: action.payload.color,
      };
    case SET_COLOR_TEXT:
      return {
        ...state,
        colorText: action.payload.color,
      };
    case SET_COLOR_HOVER:
      return {
        ...state,
        colorHover: action.payload.color,
      };
    default:
      return state;
  }
}

export default colors;
