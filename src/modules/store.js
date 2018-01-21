import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers/index';

export const history = createHistory();

export function configureStore() {

  const initialState = {
    colors: {
      colorText: 'black',
      colorActive: 'black',
      colorHover: 'black',
    },
  };

  const enhancers = [];

  const middleware = [
    routerMiddleware(history),
  ];

  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers,
  );

  const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    composedEnhancers,
  );

    // if (module.hot) {
    //     // Enable Webpack hot module replacement for reducers
    //     module.hot.accept('../reducers', () => {
    //         const nextRootReducer = require('../reducers').default;
    //         store.replaceReducer(nextRootReducer);
    //     });
    // }

    // store.dispatch(Actions.verifyAuth());

  return store;
}
