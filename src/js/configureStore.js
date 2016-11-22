import { createStore, compose, applyMiddleware } from 'redux';
import todoApp from 'reducers';

const createStoreWithMiddleware = compose(
    applyMiddleware(thunk)
)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(todoApp, initialState);
}