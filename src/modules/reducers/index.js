import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import colors from './colors';


const rootReducer = combineReducers({
  router: routerReducer,
  colors: colors,
});

export default rootReducer;
