import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers/rootReducer";

const configureStore = preloadedState => {
  const middleware = [];
  const middlewareEnhancer = applyMiddleware(...middleware);
  const storeEnchaners = [middlewareEnhancer];
  const composedEnhancer = composeWithDevTools(...storeEnchaners);
  const store = createStore(rootReducer, preloadedState, composedEnhancer);

  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept("../reducers/rootReducer", () => {
        const newReducer = require("../reducers/rootReducer").default;
        store.replaceReducer(newReducer);
      });
    }
  }
  return store;
};

export default configureStore;
